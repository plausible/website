---
layout: post
title: Looking for beta testers for self-hosted Plausible
description: "The beta version of self-hosted Plausible is ready to be tested. "
slug: self-hosted-beta
date: 2020-06-12T13:44:27.355Z
author: uku-taht
---
Plausible has been open-source since September 2019 but we haven't offered a convenient way for people to host the code on their own infrastructure. There's always been \[strong interest](https://github.com/plausible/analytics/issues/26) from the community to self-host the code.

Today I'm happy to announce that we have a beta version of self-hosted Plausible ready to be tested. To get started, follow the instructions of our [hosting documentation](https://github.com/plausible/analytics/blob/master/HOSTING.md). The self-hosted version is based on a [Dockerized web server](https://hub.docker.com/r/plausible/analytics) and it requires a PostgreSQL + ClickhouseDB to run.

When we have a stable release in the future, it would be great to offer one-click apps on platforms like Digital Ocean and Heroku. For the beta release, this is out of scope although we always welcome contributions :)

If you have any questions or issues setting it up, please open a Github issue or reach me at uku@plausible.io. I would love to hear feedback from everyone who decides to give it a go, either by email or Twitter.

\### Getting to 1.0

We're opening the self-hosted version up as a beta to begin with because we don't have anyone actually running this setup in production other than ourselves. The goal of the beta is to test it out and make sure everything works as expected when someone else uses this setup.

When does this beta evolve into a stable release? Here's my current plan:

\* At least 5 people running the beta smoothly with no issues

\* Integrate [clickhouse_ecto](https://github.com/appodeal/clickhouse_ecto) or another way to run migrations in Clickhouse

\* Ensure that updates and database migrations work smoothly for self-hosters

Going forward, I will also have to maintain a proper changelog and start tagging releases after the first stable one. This is good forcing function to improve my own workflow as well.