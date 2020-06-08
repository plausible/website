---
layout: post
title: "Building Plausible: May 2020 recap"
description: Another month, another update. Here's what went down with Plausible
  Analytics in May.
slug: may-2020-recap
date: 2020-06-02T06:39:50.314Z
author: uku-taht
---
Another month, another update. Here's what went down with Plausible in May:

* 🚀 **Plausible is now much faster and can handle more load**
* 🙌 **Reduced the size of our tracking script by more than 50%**
* 🔨 **Good progress on a self-hosted version of Plausible**
* 💵 **MRR: $1,085:** A lot of trials from April expired this month and we blew past $1k MRR. Huge month for revenue growth.
* 👩 **26k visitors (-59%):** Traffic couldn't match April when we hit the front page of Hacker news. Still, 26k visitors is very strong.

### Database migration

As I talked about in my [last monthly update](https://plausible.io/blog/april-2020-recap#scaling-plausible), Plausible started to get pretty slow in April and we also had requests for bigger plans that our setup wasn't equipped to handle.

I started moving from our PostgreSQL database to Clickhouse at the beginning of May. It has been running in production just over a week now and everything seems to be working as expected. The app is much faster, for example, the main graph for the live demo used to take 5-6s to load but now it's consistently around 500ms.

I think 500ms is acceptable but it can be further improved. Some of the remaining latency is coming from my hosting setup which creates unnecessary roundtrips for each request. I'm working on a more streamlined approach that should shave even more milliseconds off each request.

In addition to reducing latency, this new setup allows us to handle much bigger clients. We've onboarded some clients who will test this setup with up to ~5m pageviews per month and we're talking to some even bigger ones. Our Clickhouse instance can be optimized and scaled way beyond that but we're taking one step at a time.

### Reducing script size

One of our main value propositions is that [Plausible is lightweight](https://plausible.io/lightweight-web-analytics). I was quite happy with our 1.4KB script but it [was pointed out](https://github.com/plausible/analytics/issues/52) that there is some low-hanging fruit to make it even smaller.

I removed an obsolete section of the code that dealt with cookies and changed the build system for the tracker. Webpack adds a lot of code to your script to make modules work at runtime which is completely unnecessary for the tracking script. Instead of using Webpack, I decided to write a tiny `compile.js` file that just minifies the code and replaces the API URL. Very simple.

There were some extra tricks to make it even smaller like changing `XMLHttpRequest.DONE` -> `4` and pulling `window.document` into a variable at the top of the file. Pulling commonly used attributes into a variable helps the minifier do its job and ends up saving space.

### Dockerized codebase

This month I also merged a [massive pull request](https://github.com/plausible/analytics/pull/64) that adds Docker support to Plausible. This is a big step towards having a version of Plausible that people can host themselves. Big credit and thanks to [Chandra](https://twitter.com/this_is_tckb) for creating the PR and for his continued work on this.

There's still work to do as I haven't designed everything for self-hosting from the beginning. For example, I've relied on my CDN setting a custom HTTP header to get the origin country of the request. In a self-hosted situation, we can't rely on the user running it behind any specific CDN so we have to add the capability for Plausible to look up the country of the visitor.

I've also relied on an external service to run scheduled jobs. Again, this isn't something we can rely on going forward so I'm [working on](https://github.com/plausible/analytics/pull/69) adding scheduled job support into the Plausible server itself.

All of these changes are improving the codebase and also moving us closer to having an image on DockerHub you can download and run. I can't wait for people to host it themselves and become contributors to the project.

Some people have asked me: How are you going to make money if people can just take your code and run it? The answer is that the vast majority of people prefer a hosted, managed version of a product. It's more convenient, less hassle and often cheaper than hosting it yourself.

For those who want to take the extra step and be in complete control, I think we should facilitate that. I don't see it as taking anything away from the hosted version.

There are many examples of products that are possible to self-host, yet they've built a sustainable business around it: Sentry, [Matomo](https://plausible.io/vs-matomo), Gitlab, etc. In fact, I believe that the community they've built around their open-source offering makes the hosted version better and stronger.

### What's next?

I haven't had a chance to work on the actual analytics dashboard for a while now. I still have more work to do on the hosting and backend side of things. However, I would really like to get back to doing feature development and product design by mid-June or so.

Here are my priorities for the next month:

* Consolidate our hosting to Digital Ocean's Frankfurt data center
* Release alpha version of self-hosted Plausible
* Deliver at least one new feature for the dashboard (ideally more)

Stay tuned for another update in a month.