---
layout: post
title: "Building Plausible: April 2020 recap"
description: April 2020 was by far the most successful month in Plausible's
  history. Here are the highlights from the last month
slug: april-2020-recap
date: 2020-05-01T11:43:04.155Z
author: uku-taht
---
April 2020 was by far the most successful month in Plausible's history. Here are the highlights from the last month:

* 📈 **Front page of Hacker News!** Marko wrote an [awesome post](https://plausible.io/blog/remove-google-analytics) about why you should stop using Google Analytics. It got tons of attention, including on Hacker News.
* 📅 **Released annual plans:** Plausible is now [33% cheaper](https://plausible.io/#pricing) if you commit to the whole year. 
* 👩 **62.8k visitors (+2.5k%):** The blog post about removing Google Analytics broke all traffic and signup records for Plausible
* 🙋 **272 Signups:** This is 6x more signups than March!

PS: I wanted to include MRR for April but Paddle's reporting dashboard is broken and I can't see it. Hopefully it's fixed for May.

### Tons of traffic and signups

Marko's blog post hit a nerve and we got a lot of attention on HN, Reddit, Lobste.rs, Designer News, etc. Lots of people shared Plausible on Twitter, Mastodon, Facebook, even Linkedin.

All this attention translated to **272 signups in April**. This is more than **previous 9 months combined**!

It's incredibly how one article can [change the traction of a startup](https://plausible.io/blog/blog-post-changed-my-startup). I truly believe that publishing this blog post was a pivotal moment for the journey of this project.

Among everything else that was going on, I was contacted by 3 people who are interested in using Plausible but their sites are bigger than our largest volume plan. It's clear that we need to support customers with up to 10m monthly pageviews or so.

With all the traffic and new signups, I also noticed that the product is starting to become sluggish. For example, loading the main graph of the [product demo](https://plausible.io/plausible.io?period=6mo) can take upwards of 6 seconds which is totally unacceptable to me. This brings me to what I'm working on now.

### Scaling Plausible

When I started working on Plausible, I didn't worry about performance because of these wise words by Donald Knuth:

> Premature optimization is the root of all evil

The current version of the stats engine is very naive. I wanted to keep things simple, so I just started writing all the pageviews into a PostgreSQL table and aggregating the results at query time as needed. This approach has been working fine but I think optimizing performance at this point is sorely needed and not premature at all.

I've been reading up on how to do analytics *properly* so that it can handle large ingest volume and perform fast queries on millions (billions?) of pageviews/sessions. There seem to be 2 general approaches:

**1) Pre-aggregate everything**

Instead of storing all the pageviews and custom events as raw data similar to how they would come into the system, you can aggregate the results as they are coming in. For example, you can keep a record for each day and aggregate the amount of pageviews, visitors, top referrers etc. for each day. In this approach, the database looks very similar to how the data is presented on the dashboard.

As far as I understand, this is what GoatCounter and Fathom Lite do.

**2) Column-oriented OLAP database**

There are databases built to handle millions and potentially billions of time-series events and aggregate them on the fly. In this case the database looks more like the raw data coming into the system, not how it's presented to the user. All the hard work of aggregating results happens on the fly as the user is requesting the dashboard.

These databases require a lot of metal to work properly. Why would you want to store all the raw data and then pay for the CPU + memory for aggregating the results each time the dashboard is shown? Wouldn't it be easier to just pre-aggregate?

The reason to keep the raw data is to support ad-hoc queries like these:

*\* Show bounce rate for people from the UK who landed on \`/blog/remove-google-analytics\`*

*\* Break down bounce rates by referrer, but only for mobile users*

*\* Show top countries by average session length*

You get the idea. These queries cannot be pre-aggregated because you end up with a combinatorial explosion of stored queries. Instead of pre-aggregationn, it's more efficient to just keep the raw data around.

#### I'm migrating from PostgreSQL to Clickhouse

[Clickhouse](https://clickhouse.tech/) is a column-oriented OLAP database as described above. It stores the raw data in a very compressed format and aggregates results blazingly fast. I'm picking an OLAP database over pre-aggregation because it supports ad-hoc queries. Although we don't support them currently, I want to keep this option open so we can add it to the product later on.

The migration is not complete so I can't share any results yet. However, the initial results are looking good and my goal of keeping all stats queries under one second seems achievable. If your dashboard feels sluggish at the moment, I can guarantee it won't be when this migration goes live.

I believe that we'll also be able to support much bigger clients with millions of pageviews per month. Hopefully the potential customers who got in touch with me are still interested when the migration is complete. If they've picked something else by then, at least we'll be ready for new large customers who'd be interested.

Next time I write a monthly journal, my target is to be running on Clickhouse. Once the underlying performance and stability issues are fixed, I can move on to doing more feature work. In terms of next features, you can check out [our roadmap](https://plausible.nolt.io/roadmap).