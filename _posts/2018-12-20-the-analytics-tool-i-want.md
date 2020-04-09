---
layout: post
title: The analytics tool I want
date: 2018-12-20
author: uku-taht
---

While working on [Gigride](http://gigride.live), our marketing head asked me to integrate Google Analytics for our landing page. My first thought was:

> Ugh. Can we just use something other than Google Analytics?

Of course this turned into a half-hour discussion about the merits and problems with Google Analytics. There can be no doubt that GA is a powerful tool that has served countless web developers and marketers over a decade. Still, it manages to make hair stand up on the back of my neck every time I use it. My objections boiled down to the following points:

* **Complexity**: I find GA overwhelming and difficult to learn. The UX could be a lot better, especially for new users.
* **Privacy**: I don’t want Google, or anyone, to track my end users. Have you thought about why GA can be free to use? Because Google is happy to sell their analytics data to advertisers.
* **Accuracy**: You kind of have to learn to ignore some reports on GA because they are widely known to be inaccurate. Two most egregious examples are [session length](https://help.analyticsedge.com/article/misunderstood-metrics-time-on-page-session-duration/) and the [direct traffic source](https://neilpatel.com/blog/what-is-dark-traffic/)
* **Weight**: Google tag manager + Google analytics weigh 73kb in total. That’s more than my `app.js` on Gigride. Their snippet is jam-packed with features that few people use – better to keep it simple and small.

These problems seem pretty fixable don’t they? When I looked around I was fully ready to pick up another tool and install it on Gigride immediately.

Turns out there are some [alternatives for Google Analytics](https://nomoregoogle.com/) but I didn’t find any of them compelling. [Simple Analytics](https://simpleanalytics.io/) and [Fathom](https://usefathom.com/) are the closest to my ideal but they are a bit too barebones to be useful for my use-case. For example, it's quite important to me what browsers versions my users are on – if I use a css rule that isn't supported in IE7, how many users does it affect? Neither Fathom or Simple Analytics provide that answer currently.

This seems like an opportunity to build the tool that I really want. I’m assuming that there are others out there who would also be interested in ditching Google Analytics for a better, more ethical alternative. So what do I have in mind for this new platform?

* Track the standard stuff automatically: page views, unique visitors, bounce rate, session lengths, time per page, top referrers, screen sizes, top pages, device type, OS version, browser version, etc.
* It should look beautiful and be easy to use. This is hard because my design chops are crap. I’ll just try to keep it super simple for now and maybe involve a designer once product market fit is established.
* Never store IP addresses or anything identifiable to an individual. Never sell any data. Side note: can I somehow prove that? Is open-sourcing the only way to verify these claims?
* Optimise signal-to-noise ratio. The user should only see data that is accurate, useful and actionable. For example, when showing month-on-month change in unique visitors, it’s really important to know whether this is a statistically significant change or just normal fluctuation. No-one else does this as far as I know.
* Javascript snippet that end users download must be lightweight.

Basically it boils down to the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle): I believe we can get 80% of the benefit on GA with 20% of the complexity and cruft around it.

I’ve been building this tool for about a month now in my free time. I can’t tell you what it’s called because I haven’t settled on a name yet :) A very stripped-down version of this description is close to being usable and I believe I can launch a private beta in January.

If you're interested in the beta, please write to me on [twitter](https://twitter.com/ukutaht) or uku.taht@gmail.com

**EDIT:** I've launched the beta version at https://plausible.io
