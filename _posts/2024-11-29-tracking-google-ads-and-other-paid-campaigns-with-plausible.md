---
layout: post
title: Tracking Google Ads and other paid campaigns with Plausible
description: How to track the performance of Google Ads and other platforms in Plausible?
slug: google-ads-tracking
date: 2024-11-29T16:07:29.081Z
author: hricha-shandily
---
If you run paid campaigns on Google, Bing, Instagram, any newsletters, or even sponsored videos, etc., to drive sales or other conversion actions like sign-up, it’s a good idea to integrate an analytics tool. This helps fill blind spots about what was actually done on the website after someone clicked on your ad.

For folks using Google Ads, integrating with Google Analytics is a standard choice. This helps the data to freely flow between the two tools and completely visualize the customer journey from clicking an ad in Google search or display network to engaging on the site to finally taking a conversion action.

This particular integration also helps with creating Google Ads conversions based on GA4 key events, viewing the performance of Google Ads conversions within Google Analytics, or running retargeting campaigns on those website visitors who left without taking a desired action.

B﻿ut Google Analytics is not privacy-friendly, requires a cookie consent banner to operate legally, and most importantly is not accurate at tracking Google Ads (and other campaigns for that matter). 

Therefore, you can track your paid campaigns and how they affect conversions on your site, using Plausible Analytics –– the simpler, privacy-friendly (no consent banner required), and more accurate alternative to Google Analytics.

I﻿n this article, we cover Plausible Analytics as an alternative to Google Analytics for tracking paid campaigns, especially Google Ads better. We also share what all cannot be done with Plausible <> Google Ads due to our privacy-friendly nature.

## So what’s wrong with Google Analytics?

Google Analytics does not track ads performance accurately because it often struggles to track conversions accurately. C'mon Google, you had one job!

If you were to compare the number of conversions––like filling up a contact form or purchasing something––within Google Analytics and another tool measuring the same thing (like in your marketing automation tool or CRM), you would see some differences.

Orbit Media did an independent [experiment](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) like that recently and found such results, claiming that every number in Google Analytics is wrong. Here’s why:

1. Consent banners: Google Analytics requires a [consent banner](https://plausible.io/blog/cookie-consent-banners). If visitors decline, their sessions cannot be tracked.
2. Ad blockers and privacy-friendly browsers: GA4 is widely blocked by browsers like Safari, Firefox, and by various ad blockers.

So the conversions are underreported by about 20.3% in GA4 when using a consent banner, and about 11.3% even without using a consent banner.

![Google Analytics inaccuracy](/uploads/how-inaccurate-is-google-analytics_.jpg "Google Analytics inaccuracy")

There are other ways in which Google Analytics is inaccurate, for reasons like spam and bot traffic skewing data, conversion attribution inaccuracy, data modeling, etc. We cover all this [here](https://plausible.io/most-accurate-web-analytics).

### Why choose Plausible Analytics over Google Analytics?

Plausible offers other advantages and makes a lot of sense as an analytics tool of choice.

1. Lightweight script: Plausible’s tracking script is at least 75x smaller than GA4’s, not slowing down your sit
2. Simple dashboard: No complex menus—just effective, actionable insights.
3. Privacy-friendly by design: Plausible doesn’t require a cookie consent banner because it doesn’t track or store personal data.
4. Dedicated support: You get faster assistance directly from the core team, something missing from Google Analytics. 

We have a [detailed comparison here](https://plausible.io/vs-google-analytics).

## Setup and track your paid campaigns with Plausible

You can track your Google Ads and other campaigns on any platform with Plausible easily and effectively, using UTM tagging. Please note we work with a [last-touch attribution model](https://plausible.io/blog/ecommerce-revenue-attribution#revenue-attribution-models) because of our privacy-first nature.



This means that the traffic source from which such sessions were acquired where conversions happened, are the ones credited for that conversion.

To effectively track your campaigns using Plausible, you can set up in Google Ads with either auto-tagging or manual UTM tagging. Here’s how to do it: