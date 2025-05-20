---
layout: post
title: Google Analytics fails at detecting bot traffic. We tested.
description: We simulated non-human traffic to a test site. Google Analytics
  recorded it as real traffic. Plausible rejected it all.
slug: filtering-bot-traffic-google-analytics-vs-plausible
date: 2025-05-20T15:42:50.805Z
author: hricha-shandily
---
A good chunk of the traffic you see in Google Analytics could be bots (or non-human to be more precise). We tested by simulating non-human traffic to a test site. Google Analytics recorded it as real traffic. Plausible rejected it all.

Bots now account for more than half of all internet traffic (src) and it is very likely that your website too gets bot traffic every now and then.

Bots, scrapers, headless browsers — they can all hit your site and trigger tracking scripts. If your analytics tool counts that traffic as human, your data becomes misleading. You might think you're getting more visits than you actually are.

You don’t want to be seeing “non-real” traffic in your analytics dashboard as such traffic could inflate your pageviews, distort your engagement metrics, conversion events and other insights. If the scale is high, it could cause you to make totally misled business decisions, while giving a false sense of performance. Worst, it could lead you to invest in wrong marketing channels.

Usually, it’s hard to pinpoint on an analytics dashboard whether a particular visit was from a human or a non-human. So how bad is the problem really?
To find out, we ran a controlled experiment: we built a test site, sent only simulated bot traffic to it, and compared what each analytics tool recorded.
