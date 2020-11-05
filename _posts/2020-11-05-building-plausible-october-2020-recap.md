---
layout: post
title: "Building Plausible: October 2020 recap"
description: "We experienced big growth in October, breaking our traffic and
  signup records once again. These numbers can be attributed to Marko who
  published three articles that landed on the front page of Hacker News. Here
  are the stats from last month:"
slug: october-2020-recap
date: 2020-11-05T14:10:53.904Z
author: uku-taht
image: /uploads/plausible-october-traffic.png
image-alt: "Building Plausible: October 2020 recap"
---
We experienced big growth in October, breaking our traffic and signup records once again. These numbers can be attributed to Marko who published three articles that landed on the front page of Hacker News. Here are the stats from last month:

* 📈 **Relicensed Plausible as AGPL**
* 🚀 **Additional filters in the dashboard**
* 💵 **MRR: $6226 (+16%) and more than 1000 paying subscribers**
* 👩 **71.6k visitors (+148%)**: Most of the traffic came from Hacker News.  [See our full stats for October](https://plausible.io/plausible.io?period=month&date=2020-10-01)

### The v1 release of Plausible Self Hosted

A lot of my time in October was spent on the v1 release of [Plausible Self Hosted](https://plausible.io/self-hosted-web-analytics). It is my first time managing an open-source project of this magnitude so there’s tons to learn.

I also learned a painful lesson about security. The official docker-compose setup I created would expose ports of each container to the public internet. Combine this with the fact that the Postgres database was configured with the default username/password combination (`postgres:postgres`) and what you get is a huge vulnerability.

My own testing instance worked OK for a few days and then the CPU started spiking to 100%. At first I didn't understand why but then I received a warning about port exposure on our [Github issues](https://github.com/plausible/hosting/issues/4). Turns out that malicious actors are [installing crypto miners](https://www.alibabacloud.com/blog/is-your-postgresql-server-secretly-mining-digital-coins_593932) on Postgres servers with exposed ports and weak passwords.

I've worked in software for 6 years but so far my dealings with security issues have been purely theoretical. This was the first time a server under my management was actually compromised by a hacker. I quickly released a patch to eliminate unnecessary port exposure in our official setup. I also need to be more diligent about security threats going forward.

I wish I had stats about how many people are running self-hosted Plausible. Unfortunately I don’t think it’s possible to get accurate stats for that. Since launching it, we’ve had 36 posts on our forum (mostly support for getting started). The actual number of users is probably an order of magnitude higher than that.

We had some chats with other open source maintainers and received a lot of advice. This brought us to the contentious issue of open-source licensing and finding the proper balance between openness and protecting our own interests.

### Changing our license

We decided to move from a permissive license (MIT) to a copyleft license (AGPL) for Plausible. We are still completely open-source and with the new license we are making sure that any future modifications to the source code must also be open-sourced.

Copyleft licensing ensures that the code behind Plausible remains open source. It prevents corporations from taking our code and creating proprietary, closed-source products with it. This is why many large corporations steer clear of GPL licenses in general and we see that as a benefit.

Marko wrote a lot more in depth about the license change [over on our blog](https://plausible.io/blog/open-source-licenses).

### Additional filters

My vision for the dashboard was always that everything should be clickable for filtering. Before this month we already supported referrer drilldowns and page drilldowns and now we’ve also added filters for screen size, browser, operating system and country.

These filters add more depth and power to the dashboard without overcomplicating the view. I also like that the UX is now consistent: any time you see a datapoint, it can be clicked on to add a filter. Give it a try on our [live demo](https://plausible.io/plausible.io).

### More improvements from our changelog

* Linkify top pages 
* Format visitor numbers in device and country reports
* Updated user-agent database fixes Microsoft Edge browser detection
* Add weekday to the visitor graph (Thanks [@chadwhitacre](https://github.com/chadwhitacre))
* You can now see goal conversion rate at a glance. No need to click through unless you want to dig even deeper
* Plausible tracking code is now available as an NPM package (Thanks [@Maronato](https://github.com/Maronato))