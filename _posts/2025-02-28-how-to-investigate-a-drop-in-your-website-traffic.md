---
layout: post
title: How to investigate a drop in your website traffic?
description: The process of analyzing a traffic drop, while revealing our own
  investigation for the Plausible site.
slug: drop-in-website-traffic
date: 2025-02-28T10:22:19.083Z
author: hricha-shandily
---
If you are noticing your website traffic is down, the first thing to do is investigate the reasons. Don’t panic, you were probably hit by a Google’s core update, something maybe off on the technical side, the site may be responding to a new trend, or you may simply need to write more/better content.

Interestingly, at the time of writing this post, we are also noticing a drop in our website traffic for the last 30 days. This compelled me to investigate on our end too and opened the perfect opportunity to cover this topic.

To do this, you need a web analytics tool, and if the situation demands, access to your SEO tool (or other similar free alternatives) and Google webmaster tools.

By taking you through the things you can do on such tools and taking our own investigation as an example, we will demonstrate how to diagnose the issues causing your website’s traffic to decline.

1. Ordered list
   {:toc}

## Analyzing the traffic drop

There are mainly five things you need to check to analyze your traffic drop, as defined in the five sections below. This can be applied to any web analytics tool you are using.

We used our Plausible dashboard for this analysis. However, if you're using a different tool like Google Analytics, we have mentioned the equivalent reports in GA4 to access the same information.

Let’s begin.

### Determine if it’s a drop or a trend

The first thing to do is try and understand whether your traffic has been declining for a while or are you experiencing a sudden drop for a day or two?

**If you are experiencing a sudden drop**, do check out the [Google Search status page](https://status.search.google.com/summary) to see if there are any crawling, indexing, or similar issues from Google’s side. And then, align the dates in the reported incidents with the dates in your web analytics tool.

Taking our own traffic-drop example, I was noticing a drop for the past 7 days and 30 days time period. I switched on our [comparative view](https://plausible.io/docs/compare-stats) to compare the data on the last 30 days with the period of 30 days prior to that:

![drops-in-traffic](/uploads/drops-in-traffic.gif "drops-in-traffic")

As you can see, while our unique visitors and total visits are both down by 3%, our engagement metrics like views per visit, [bounce rate](https://plausible.io/blog/bounce-rate) and visit duration have declined a bit too.

That’s the first clue: since people have been visiting fewer pages in a visit, spending less time on the site and bouncing off more, something might be off with the content.

I repeated the same exercise for the past 7 days and the drops are still there. When I check for the “year to date” time period (i.e. effectively, past 2 months), the traffic arrows are green again.

So I am also compelled to check for the past 12 months altogether to understand if there are bigger things to worry about and that showed improvements upwards of 50% so we should be good. There’s nothing big to worry about.

By the way, if you’re a Plausible subscriber, you can set [traffic drop notifications](https://plausible.io/docs/traffic-spikes#set-the-unique-visitor-threshold-for-the-traffic-drop-notifications) by determining your 12 hour visitor threshold.

#### Where to find this info in GA4? 

[Here’s](https://plausible.io/blog/easy-insights#in-ga4) a detailed explanation.

### See which traffic channels are contributing to lower traffic levels

In Plausible, you can see a straightforward Top Channels report. You can check out what each channel means [here](https://plausible.io/docs/top-referrers#channels).

**Using GA4?** You can open your “Traffic Acquisition” standard report and continue investigating using the same principles we describe below.

To investigate, see which channels are showing a decline. In Plausible, it’s indicated by the red, downward arrows. 

Upon hovering over any such arrow, you’ll be able to see the drop in percentage as well. How to comprehend that?

* If your Direct traffic has been hit, you can investigate, for instance, if your brand’s popularity recently went down due to some new competitors.
* If your organic traffic is down, it could be a content quality or technical SEO issue or probably even the [AI wave eating up your organic traffic](https://plausible.io/blog/seo-dead). 
* If your referral traffic has dropped, you can zero down on which exact ones are these and what must have happened on their end.

…and so on. 

You can also click on any such Channel to [see the exact sources within each channel](https://plausible.io/docs/top-referrers#sources) (eg. Twitter, Reddit, LinkedIn, etc., in organic social) along with their respective traffic contributions as well as changes compared to previous period.

For us, out of the top four significant channels, organic search, referral and organic social are the three with declines.

![plausible-standard-reports](/uploads/plausible-standard-reports-.png "plausible-standard-reports")