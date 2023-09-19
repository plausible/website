---
layout: post
title: "Plausible Analytics Self-Hosted Beta: Looking for beta testers"
description: The beta version of the self-hosted Plausible Analytics is ready to
  be tested. Free as in beer and free as in speech!
slug: self-hosted-web-analytics-beta
date: 2020-06-12T15:54:11.459Z
author: uku-taht
image: /uploads/big-spike-in-traffic.png
image-alt: Plausible Analytics Self-Hosted Beta
---
Plausible Analytics has been [open source](https://plausible.io/open-source-website-analytics) since September 2019 but we haven't offered a convenient way for people to host the code on their own infrastructure. There's always been a [strong interest](https://github.com/plausible/analytics/issues/26) from the community to self-host the code.

## Happy to announce the Plausible Analytics Self-Hosted beta release

**Plausible Analytics Self-Hosted is now out of beta! You can read more about our [self-hosted web analytics](https://plausible.io/self-hosted-web-analytics).**

Today I'm happy to announce that we have a beta version of Plausible Analytics Self-Hosted ready to be tested. This is the free as in beer and free as in speech version of [Plausible Analytics](https://plausible.io), only this version you have to install, host and manage yourself. 

To get started, follow the instructions in our hosting documentation. The self-hosted version is based on a Dockerized web server and it requires a PostgreSQL + ClickhouseDB to run.

When we have a stable Plausible Analytics Self-Hosted release in the future, it would be great to offer one-click apps on platforms such as Digital Ocean and Heroku. For the beta release, this is out of scope although we always welcome contributions :)

If you have any questions or issues setting it up, [please post in our Github forum](https://github.com/plausible/analytics/discussions/categories/self-hosted-support). I would love to hear feedback from everyone who decides to give it a go on GitHub.

## Getting to Plausible Analytics Self-Hosted 1.0

We're opening the self-hosted version up as a beta to begin with because we don't have anyone actually running this setup in production other than ourselves. The goal of the beta is to test it out and make sure everything works as expected when someone else uses this setup.

When does this beta evolve into a stable release? Here's my current plan:

\* At least 5 people running the beta smoothly with no issues

\* Integrate [clickhouse_ecto](https://github.com/appodeal/clickhouse_ecto) or another way to run migrations in Clickhouse

\* Ensure that updates and database migrations work smoothly for self-hosters

Going forward, I will also have to maintain a proper changelog and start tagging releases after the first stable one. This is a good forcing function to improve my own workflow as well.

## Get started with the Plausible Analytics Self-Hosted beta

**Plausible Analytics Self-Hosted is now out of beta! You can read more about our [self-hosted web analytics](https://plausible.io/self-hosted-web-analytics).**

To get started, follow the instructions in our hosting documentation.

If you have any questions or issues setting it up, [please post in our Github forum](https://github.com/plausible/analytics/discussions/categories/self-hosted-support).

Thank you!
