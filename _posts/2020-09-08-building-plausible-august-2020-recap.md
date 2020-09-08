---
layout: post
title: "Building Plausible: August 2020 recap"
description: "The recap for this month is a week late because I just got back
  from holiday.  I’ve been working on Plausible pretty much non-stop all this
  year so it felt great to take a breather. We still got a lot done in August:"
slug: august-2020-recap
date: 2020-09-08T08:46:23.967Z
author: uku-taht
---
The recap for this month is a week late because I just got back from holiday.  I’ve been working on Plausible pretty much non-stop all this year so it felt great to take a breather. We still got a lot done in August:

* 🚀 **Added page drilldowns**
* 📈 **Hash mode for SPAs**
* 🏛️ **Launched on Product Hunt**. More info in the [blog post](https://plausible.io/blog/product-hunt-launch).
* 💵 **MRR: $4091 (+48%) and more than 600 paying subscribers**
* 👩 **36k visitors (-47%)**:  Most of the visitors came from Product Hunt and Indie Hackers.  [See our full stats for August](https://plausible.io/plausible.io?period=month&date=2020-08-08).

In August, we decided quite impulsively to launch on Product Hunt. It went really well, we ended up #2 of the day and #5 of the week. So far, PH has driven 2.8k unique visitors to our site and 50 signups that we can account for.

We didn’t announce the launch beforehand and we didn’t try to game the system by asking for upvotes from our community. We were relying on our existing customers to organically upvote and leave comments. I’m extremely grateful for everyone who helped us out.

All in all, Product Hunt was worthwhile but it’s not our core growth strategy. Launching on community sites gives your project a spotlight for a few days, but it’s not a sustainable channel to acquire customers in the long-term. As far as we’re concerned, launches like this are a ‘nice to have’ but they’re not necessary for continued growth.

Product Hunt and other launch sites are great for products that people buy impulsively. However, the cost of switching for an analytics tool is quite high and I’ve found it very hard to convince someone who isn’t already looking for an alternative. Our main strategy is to focus on pre-qualified audiences who are already looking for an alternative to GA.

It’s easy to convince someone to sign up when they search on DuckDuckGo for ‘[open source google analytics alternative](https://plausible.io/open-source-website-analytics)’. In comparison, it’s relatively hard to convince someone that they should sign up when they’re just scrolling on Product Hunt.

The Product Hunt launch was all Marko, so let’s take a look at what I was up to on the development side.

### Page drilldowns

Have you ever clicked on a page URL in Plausible expecting to see stats scoped to that specific page? I know I’ve done it a million times myself, so I was super happy to add the page drilldown feature. It gives so much more depth to the dashboard, especially when combined with the referrer filter.

For example, here’s the traffic from Google to [plausible.io/open-source-web-analytics](https://plausible.io/open-source-website-analytics):

![Google traffic to /open-source-web-analytics](/uploads/google-traffic-to-open-source-web-analytics.png "Google traffic to /open-source-web-analytics")

This sort of analysis is required for more advanced use-cases. It’s a challenge to keep the dashboard simple while also allowing arbitrary ways to slice and dice your data. For now, I think we’re balancing these two concerns quite well.

### Hash mode for SPAs

Plausible works with most modern SPA frameworks out of the box. Our tracking script listens for the `pushState` event and triggers a pageview automatically. However, some front-end frameworks use the hash part of the URL for navigation. In that case, the tracker should listen to the `hashchange` event  to trigger pageviews. 

This was a fairly easy change to make but what I found more interesting was the configuration. Instead of configuring the hash mode at runtime, I used a templating language to generate two different versions of the tracker. The new one is available at `https://plausible.io/js/plausible.hash.js`. 

This way I don’t need to add configuration-related code to the tracker script itself. It keeps both the normal and hash-mode [scripts more lightweight](https://plausible.io/lightweight-web-analytics) than if it was a single script configured at runtime.

I’m going to follow this pattern for future options that don’t need dynamic configuration at runtime. I’ve always wondered why this isn’t a more common approach. I personally love it when a library is designed such that you don’t need to ship anything superfluous to the client.

### Other details from our changelog

* Added a quick switcher to make it easier to jump between sites when you have more than one. The dropdown also includes a link to site settings to make navigation easier.
* Added metric to see total conversions alongside unique conversions.
* Show real counts alongside percentages (applies to screen sizes, browsers, operating systems and countries).
* Fixed an encoding issue with page URLs, goal names, and `utm_source`.
* Added [direct traffic and other dark traffic](https://plausible.io/blog/referrer-policy) sources as "Direct / None" in the Top Sources report.

### What’s next?

I don’t have any big projects coming up in September. I’ll be mostly working on small improvements that have been requested on both [GitHub](https://github.com/plausible/analytics/issues) and [Twitter](https://twitter.com/PlausibleHQ):

* Redirect / -> /sites for logged-in users
* Add ‘this month’ and ‘last month’ timeframe options
* Add metadata to custom events
* Full UTM tag support

This list should keep me busy. The last two items require changes to the database schema which is going to be tricky. We don’t have infrastructure in place to run automatic migrations with Clickhouse yet, so it’s something I have to implement before I can build the features.