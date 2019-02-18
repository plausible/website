---
layout: post
title: How to store 'last seen' for users in Phoenix
---

This week, I worked on some under-the-hood improvements to [Plausible](https://plausible.io/) to give me better insights into my userbase. One of these was to store a `last_seen` timestamp for all users. This is a private piece of data that I use to determine:
* How many users are actively logging on and checking their analytics
* What is the average usage frequency of Plausible?
* When should I consider an account as 'rotting'? Meaning I'm about to lose them as a user/customer

Let's see how this can be achieved in Phoenix. First, we'll start with the schema.


### Schema

We'll need to generate a migration for the `last_seen` column:
```bash
$ mix ecto.gen.migration add_last_seen_to_users
```
and the migration itself:

```elixir
defmodule Plausible.Repo.Migrations.AddLastSeenToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :last_seen, :naive_datetime, default: fragment("now()")
    end
  end
end
```

At this point, you'll want to add the field to your `User` Ecto schema as well.

###  Plug

Now I want to update this field every time use uses the website. A natural solution here is to add a Plug that intercepts every request. However, updating the database on every request seems fairly wasteful. Besides, for my purposes, the timestamp doesn't need to be accurate to the millisecond. This is a perfect case for throttling, which can be achieved by using the browser session.

```elixir
defmodule PlausibleWeb.LastSeenPlug do
  import Plug.Conn
  use Plausible.Repo

  @one_hour 60 * 60

  def init(opts) do
    opts
  end

  def call(conn, _opts) do
    last_seen = get_session(conn, :last_seen)
    user = conn.assigns[:current_user]

    cond do
      user && last_seen && last_seen < (unix_now() - @one_hour) ->
        persist_last_seen(user)
        put_session(conn, :last_seen, unix_now())
      user && !last_seen ->
        put_session(conn, :last_seen, unix_now())
      true ->
        conn
    end
  end

  defp persist_last_seen(user) do
    q = from(u in Plausible.Auth.User, where: u.id == ^user.id)

    Repo.update_all(q, [set: [last_seen: DateTime.utc_now()]])
  end

  defp unix_now do
    DateTime.utc_now() |> DateTime.to_unix
  end
end
```
I added this plug to my `browser` pipeline in my router. Note that I have another plug running before this one which looks up the current user and makes `conn.assigns[:current_user]` available.

This approach satisfies every requirement I had for this feature:
* Persist the `last_seen` with an hour precision
* Runs a database update at most once per hour per user
* I specifically use `Repo.update_all` so the `updated_at` field on `users` is untouched.
