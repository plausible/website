---
layout: post
title: Technology choices
---

In general I don't think that the tech stack matters too much for software projects. Especially if you're a solo maker, almost all of the risk is on the sales and marketing side as opposed to the tech side. The best approach is normally to just pick some boring tools and start solving your customers' problems.

However I'm also very passionate about developer tooling and I thoroughly enjoy nerding out about programming languages and different databases. In this post I'll go over the main technology choices I've had to make so far for [Plausible](https://plausible.io).

### Elixir + Phoenix

I think most programmers have a default language or ecosystem they like and are used to. For me that would be Elixir. The first time I tried it was when I saw Dave Thomas speak about it in 2013. Since then I started the [Elixir Koans](https://github.com/elixirkoans/elixir-koans) project and used Elixir on a number of commercial projects.

It is a fantastic language designed with so much care and attention to the details. Some might think of it as new and exiting language but for me this is a proven technology that one can rely on. After all, the Erlang VM has been around since 1986 and it's as mature as it gets.

My only concern with picking Elixir is that it's not a super high performance data processing language. If Plausible is a success it will have to ingest a lot of traffic. I mean a lot. All the traffic also needs to be analysed to pull out useful information like browser version and referrer source. I don't know how well Elixir will deal with this but we'll see. I might have to write a proper ingest pipeline at some point in a lower level language but that would be a great problem to have because it means the product is a success!

### PostgreSQL

Again, this is pretty much a default choice for me when it comes to persistence. Postgres is very mature, deeply researched and extensively battle-tested. It's a beautiful open-source project and they're making it better every year!

I might have to switch to [InfluxDB](https://www.influxdata.com/) if Plausible really takes off and it has to ingest tons of traffic. Influx is time-scale database built specifically for high write speed and time-based aggregation queries. It's perfect for an analytics application. On the other hand there's a Postgres extension called [Timescale](https://www.timescale.com/) that does the same thing and seems just as strong. Plus it's Postgres!

### Tailwind CSS

Instead of the classic, boring way of writing css I decided to go with something new here. Tailwind is a pretty unique way of writing HTML+CSS. Check out [their website](https://tailwindcss.com/docs/what-is-tailwind/) to learn more about their utility-first approach.

It took me a couple of days to reach the Aha moment but once I did, there was no looking back. It definitely feels like I can achieve better looking designs with less time than any other approach I've tried. I'm definitely using it again on future projects.

### Server-rendered HTML + sprinkling JS

Seems like every new project nowadays is a single-page app by default. I suppose developers are getting so used to tools like React and Angular that they forget how to **not** use them.

I went with the classic infrastructure: serve HTML on the server, sprinkle javascript on the frontend for interactivity. I even ditched jQuery because with modern web standards it's pretty easy get away with vanilla Javascript. You can always include a couple of polyfills if the standards are not well supported yet. The only javascript library I have pulled in so far is Chart.js

I'm very happy with this approach, it keeps things simple and the website loads *fast*. There are just fewer moving parts in a traditional server-rendered app than modern SPAs which makes them easier to reason about.

### External tools

So far I've integrated with the following external tools:
* [Heroku](https://www.heroku.com/) for hosting
* [Sentry](https://sentry.io/) for error tracking
* [Mailgun](https://www.mailgun.com/) for email delivery
* [Cloudflare](https://www.cloudflare.com/) for DNS, SSL, and CDN

The only one I'm paying for currently is Heroku, just to make sure the dyno doesn't go to sleep.
