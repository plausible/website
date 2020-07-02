---
layout: post
title: "Building Plausible: June 2020 recap"
description: June was easily the best month of all time for Plausible. We added
  some large customers and had our biggest revenue growth ever, both in absolute
  ($) and relative (%) terms.
slug: june-2020-recap
date: 2020-07-01T15:26:18.152Z
author: uku-taht
image: /uploads/plausible-traffic-in-june.png
image-alt: "Building Plausible: June 2020 recap"
---
June was easily the best month of all time for Plausible. We added some large customers and had our biggest revenue growth ever, both in absolute ($) and relative (%) terms.

* 🚀 **Self-hosted Plausible beta launched**.
* 💰 **New pricing tiers for larger customers**
* 🤖 **Moved our hosting to Digital Ocean in Germany**
* 💵 **MRR: 1,882 (+73%)**:  Breaking revenue growth record two months in a row. Huge testament to Marko’s work on getting the word out there about us.
* 👩 **26k visitors (+3%)***:* We were helped by an [lwn.net article](https://lwn.net/Articles/822568/) hitting #1 on HackerNews. [See our full stats for June](https://plausible.io/plausible.io?period=custom&from=2020-06-01&to=2020-06-30).

This month was a great step towards our vision of [building a sustainable business ](https://plausible.io/blog/open-source-funding) around an open-source analytics tool. I love the fact that people are now hosting Plausible themselves and we’re starting to receive more community contributions.

### Self-hosted beta

We launched the beta for self-hosted Plausible. Unlike some open-core business models, Plausible is 100% open-source with no proprietary parts at all. You can install and run exactly the same code base that we use for the cloud offering. [More info in the launch post](https://plausible.io/blog/self-hosted-web-analytics-beta)

This is a period for people to test it out and report any issues, as well as for us to figure out how to properly roll out updates to the codebase. For example, I don't have a way to run database migrations for Clickhouse in an automated way, so the beta gives us some time to solve these issues.

With the new self-hosted offering, we've been asked if we accept sponsorships. I do not believe in donations as a primary funding model but I also don't see why we should turn down money that people are offering. We're applying to Github Sponsorships so people who aren't paying for the cloud service can still support the project.

### New pricing

Since moving from Postgres to Clickhouse, we’ve been able to accommodate much larger websites than before. Marko and I discussed whether we should start by doing custom quotes for enterprise clients or figure out some standard pricing plans and release them publicly.

For some businesses I would recommend doing direct sales for a long time to figure out what people are willing to pay for your product. However, our market is already established and we want to keep our pricing extremely simple and transparent from the start.

Instead of spending too much time in price negotiations with bigger clients, we opted to just come up with some simple math for the pricing curve. Looking at competitors and based on our own gut-feel we thought the ratio should be that for every doubling of traffic we increase the price by 1.5x. With this logic we came up with the following tiers:

| Pageviews | Cost   | w/ Annual Discount (33%)
|---|---|---|
|10k       |  $6/mo| $4/mo|
|100k      |  $12/mo| $8/mo|
|200k      |  $18/mo| $12/mo|
|500k      |  $27/mo| $18/mo|
|1m        |  $48/mo| $32/mo|
|2m        |  $66/mo| $44/mo|
|5m        |  $99/mo| $66/mo|
|10m       | $150/mo| $100/mo|


We don’t have bigger tiers listed yet but figuring out the next tier is not that difficult if you follow the formula. For 20m pageviews per month we’re looking at 150 * 1.50 = $225/mo.

To share some good news, we already have one customer on the 2m monthly pageviews plan and one on 5m. We’re also trialling with a site that will definitely hit 10m monthly pageviews by the end of the trial, potentially even above 20m.

### Hosting Plausible Cloud on Digital Ocean

After Dockerizing our whole codebase in May, I’ve moved our hosting from Heroku+Aiven over to Digital Ocean. Heroku charges a premium for being very helpful in the build and deploy stages but with the new Docker setup we aren't taking full advantage of it. Digital Ocean is much cheaper and I like that it runs completely on green energy.

It might sound surprising but our hosted cloud server is running on a single $10/mo droplet with 1CPU and 2Gb memory. The heavy lifting is done by the Clickhouse database which is running on a $80/mo droplet with 6 CPUs and 16Gb memory. We’re also running the smallest managed Postgres instance at $15/mo. So all together we are hosting the cloud product for $105/mo.

Running just one instance of all these components helps me keep things simple, but it has some clear disadvantages:

* Each server and database is a single point of failure. This cluster is not highly available
* Deploying updates to the server comes with ~30s downtime while the new image boots up
* No option for automatic horizontal scaling

This setup is not ideal, but none of these issues seem like ‘the house is on fire’ type issues. I feel like at the moment our infrastructure is scalable and reliable *enough* to keep the cloud version running smoothly, keep developing new features, and onboard some bigger customers.

### What’s next?

One of my goals for June was to deploy at least one new feature/metric. I missed that goal as I spent the whole month working on our hosting situation and dealing with other issues that came up.

My next month will be dedicated to product development. I haven’t checked something off our product roadmap for a while and I’m really looking forward to getting back into it. 

Stay tuned for another update in a month.