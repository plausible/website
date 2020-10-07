---
layout: post
title: "Building Plausible: September 2020 recap"
description: "Plausible seems to be settling into a more steady rate of growth.
  I had to double our server capacity in late September to accommodate the new
  trial signups and customers. Here are the stats from last month:"
slug: september-2020-recap
date: 2020-10-07T09:26:24.717Z
author: uku-taht
image: /uploads/building-plausible-september.png
image-alt: "Building Plausible: September 2020 recap"
---
Plausible seems to be settling into a more steady rate of growth. I had to double our server capacity in late September to accommodate the new trial signups and customers. Here are the stats from last month:

* 📈 *Full UTM tag support*
* 🚀 *Tagged v1.0 of self-hosted Plausible*
* 💵 *MRR: $5326 (+30%) and more than 800 paying subscribers*
* 👩 *27.6k* visitors (-22%): Most of the visitors came from Google and Indie Hackers.  [See our full stats for September](https://plausible.io/plausible.io?period=month&date=2020-09-01)

On September 10th we paid out the first proper salaries for myself and Marko. Even though our salaries don’t match what we could command on the job market, it makes me incredibly happy to see a green entry on my bank account, paid from our open source project. Pretty wild.

This got me thinking about salaries more generally. Some open startups have a formula to figure out everyone’s salaries based on job position, seniority, cost of living, etc. They make their salaries public so anyone can compare their salary to a co-worker.

I’m tentatively in favour of making salaries public. If employees have reliable information on pay levels, it’s much harder to underpay them while overpaying executives. Sharing salary data is also useful in mitigating unfair pay gaps between people of different backgrounds.

I’ve never agreed with cost-of-living adjustments in remote company salaries. Most of the time, one’s cost of living is a lifestyle choice. If someone chooses a rural lifestyle with lower expenses and less access to the comforts of a city, they shouldn’t be punished for it.

Luckily it’s just the two of us for now and we can just set salary levels by having a quick conversation. Instead of talking about potential future problems, let’s look at what I was busy building in September.

### Full UTM Tag support
In any web analytics tool lots of inbound traffic is missing an associated traffic source (in Plausible we label it `Direct / None`). This is caused by different browser and website policies that govern the behaviour of the `Referer` HTTP header.

Many social media sites do not reveal in their `Referer` header which post the user clicked on, either. If you just post a link on Facebook, Instagram or LinkedIn, it’s impossible to correlate inbound traffic from these sites to specific posts. To get access to this data, social media sites encourage website owners to install their trackers and pixels, eroding online privacy for everyone.

Problems with dark traffic and social media sites can be alleviated by tagging your links. Marko wrote a whole blog [post about link tagging](https://plausible.io/blog/utm-tracking-tags) which you should definitely check out.

Technically, it was interesting challenge because it was the first time I had to change the schema of our Clickhouse database. I switched from a low-level database connection library to a high-level ORM with migrations support.

### Launching self-hosted Plausible

Our self-hosted offering has been in beta now for over 3 months. The only remaining blocker to call it stable was lack of support for database migrations. Since I added support for database migrations when building full UTM tag support, I figured we were also ready to tag the first stable release of self-hosted Plausible.

I took a few days to write new installation instructions from scratch and to build a hosting repository which should make hosting Plausible fairly convenient. 

Launching a stable self-hosted release completes the vision of Plausible I’ve had for a long time. I don’t think of Plausible as a traditional startup business selling proprietary solutions. Rather, we are an open source project funded solely by hosting fees and donations.

We released the stable version on Oct 6th, read the announcement [here](https://plausible.io/self-hosted-web-analytics).

### More improvements from our changelog

* Added ’this month’ and ‘next month’ options
* Added hCaptcha to deal with spam signups
* Added a ‘load more’ button to the bottom of referrers popup
* Removed call to third party CDN. Now all assets are served from our own domain

### On the roadmap

The next big items on my todo list are:
* Event metadata [plausible/analytics #134](https://github.com/plausible/analytics/issues/134)
* API to show data on dashboard [plausible/analytics #95](https://github.com/plausible/analytics/issues/95)