---
layout: post
title: Tracking Google Ads and other paid campaigns with Plausible
description: How to track the performance of Google Ads and other platforms in Plausible?
slug: google-ads-tracking
date: 2024-11-29T16:07:29.081Z
author: hricha-shandily
image: /uploads/tracking-paid-campaign-on-plausible-dashboard.png
---
If you run paid campaigns on Google, Bing, Instagram, any newsletters, or even sponsored videos, etc., to drive sales or other conversion actions like sign-up, it’s a good idea to integrate an analytics tool. This helps fill blind spots about what was actually done on the website after someone clicked on your ad.

For folks using Google Ads, integrating with Google Analytics is a standard choice. This helps the data to freely flow between the two tools and completely visualize the customer journey from clicking an ad in Google search or display network to engaging on the site to finally taking a conversion action.

This particular integration also helps with creating Google Ads conversions based on GA4 key events, viewing the performance of Google Ads conversions within Google Analytics, or running retargeting campaigns on those website visitors who left without taking a desired action.

B﻿ut Google Analytics is not privacy-friendly, requires a cookie consent banner to operate legally, and most importantly is not accurate at tracking Google Ads (and other campaigns for that matter). 

Therefore, you can track your paid campaigns and how they affect conversions on your site, using Plausible Analytics –– the simpler, privacy-friendly (no consent banner required), and more accurate alternative to Google Analytics.

I﻿n this article, we cover Plausible Analytics as an alternative to Google Analytics for tracking paid campaigns, especially Google Ads better. We also share what all cannot be done with Plausible <> Google Ads due to our privacy-friendly nature.

1. Ordered list
{:toc}

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

While setting up your ads in Google or anywhere, make sure to [UTM-tag](https://plausible.io/blog/utm-tracking-tags) your links. 

Please note we work with a [last-touch attribution model](https://plausible.io/blog/ecommerce-revenue-attribution#revenue-attribution-models) because of our privacy-first nature. This means that the traffic source from which such sessions were acquired where conversions happened, are the ones credited for that conversion.

### Tagging URLs in Google Ads 

W﻿hen it comes to Google Ads,﻿ you can utilize either auto-tagging or manual UTM tagging. Here’s how to do it:

#### 1﻿. **Using auto-tagging in Google Ads**

Google Ads’ [auto-tagging](https://support.google.com/google-ads/answer/3095550?hl=en) generates a GCLID (Google Click ID) for tracking ad performance. It is turned on by default. When someone clicks your ad, auto-tagging adds a parameter called GCLID to the URLs.

For example, if someone clicks your ad for www.yourwebsite.com, the final URL will look like [www](http://www.site.com/?gclid=123xyz).[yourwebsite.com](https://yourwebsite.com?utm_source=google&utm_medium=ppc&utm_campaign=spring_sale&utm_content=text_ad&utm_term=shoes)[/?gclid=123xyz](http://www.site.com/?gclid=123xyz).

To check if it is turned on for you, follow these steps:

Step 1: Sign in to your Google Ads account.

Step 2: Click “Admin” (gear icon) in the bottom left corner and select Account Settings.

Step 3: Find the Auto-tagging section and check the box next to “Tag the URL that people click through from my ad” if not already checked.

Step 4: Click Save.

![auto-tagging setting in google ads](/uploads/auto-tagging-setting-in-gads.jpg "auto-tagging setting in google ads")

Once auto-tagging is enabled, Plausible will detect the traffic from links with GCLID parameters. While we strip out the unique identifiers to comply with GDPR, you can still associate traffic with your Google Ads.

Traffic from Google Ads will be categorized as following in the [Top Sources report](https://plausible.io/docs/top-referrers):

* In the “Channels” tab as “Paid Search”
* In the “Sources” tab as “Google” 
* In the utm_medium as “(gclid)”

![gclid tracking in Plausible](/uploads/gclid.gif "gclid tracking in Plausible")

#### 2. Manually tagging links with UTM parameters

With the auto-tagging method, you won’t be able to pinpoint the exact campaign, content or terms that brought you traffic. For more granular tracking or if you prefer not to use auto-tagging, you can manually add UTM parameters to your ad URLs.

When UTM tags are present in the URL, it takes priority over other parameters. And unlike the "gclid" and "msclkid" marketing parameters, we do not strip the values of UTM tags which provides you more context.

T﻿o track your campaigns using this method, follow these steps:

**Step 1:** Create a UTM-tagged URL. You can utilize the [Google Campaign URL Builder](https://ga-dev-tools.google/campaign-url-builder/) for this purpose or do it manually. For example: <https://yourwebsite.com?utm_source=google&utm_medium=ppc&utm_campaign=spring_sale&utm_content=text_ad&utm_term=shoes>

Explanation of parameters:

* utm_source: Platform driving traffic (e.g., Google).
* utm_medium: Type of traffic (e.g., PPC).
* utm_campaign: Campaign name (e.g., Spring Sale).
* utm_content: Used to differentiate ad creatives (e.g., Text Ad).
* utm_term: Keyword or target term (e.g., Shoes).

You can learn more about UTM tracking in our [guide](https://plausible.io/blog/utm-tracking-tags).

**Step 2:** Add the tagged URL to your Google Ads.

1. Navigate to “Campaigns” from the left sidebar -> “Ads”
2. Select the ad you want to edit or create a new ad.
3. Paste the UTM-tagged URL into the Final URL field.
4. Save your changes.

![final url in google ad](/uploads/adding-utm-tagged-url-in-google-ad.gif "final url in google ad")

Now, traffic from these ads will appear in Plausible under the Campaigns tab of the Top Sources report, categorized by UTM parameters. 

### Visualizing campaign performance in Plausible

In a nutshell, our [simple dashboard](https://plausible.io/simple-web-analytics) allows you to filter and visualize campaign performance effectively in three steps:

1. Filter campaign data: Use the Campaigns tab to isolate specific traffic sources, mediums, or campaigns (e.g., utm_campaign=holiday_sale).
2. Track conversion goals (e.g., form submissions or purchases) and other activity on the site (like which pages visited)[](https://plausible.io/docs/goal-conversions) in Plausible, to see how many visitors from ads completed them.
3. Use funnels: Create a funnel to visualize the customer journey and conversion drop-offs at each stage.

The “Top Sources” report in Plausible (check out our [live demo](https://plausible.io/plausible.io)) which shows your traffic acquisition sources will show you which exact campaign or ad serving brought you how much traffic. Such traffic can be isolated by filtering the dashboard with the exact acquisition source.

You can isolate traffic by selecting any UTM parameter from the campaigns tab:

![utm parameters tracking in plausible](/uploads/utm-parameters.png "utm parameters tracking in plausible")

This filtered dashboard shows what all happened in the sessions acquired from those campaigns –– which pages were visited, which conversion goals were completed, and even which locations these visitors were from (including [VPN entries](https://plausible.io/docs/countries#visitors-using-vpns-and-similar-services)), which devices, etc. they used. 

You can set your site conversion goals using [this guide](https://plausible.io/docs/goal-conversions), to help visualize the whole customer journey. Here’s an example of what a filtered dashboard would look like (notice the two filters at the top):

![example of tracking paid campaign performance](/uploads/ad-agency-paid-campaign-plausible-breakdown.jpg "example of tracking paid campaign performance")

It’s as simple as that. You can also utilize [funnels](https://plausible.io/blog/funnels-conversion-optimization) to visualize the percentage of visitors who completed a desired path exactly in their journey. And create [audience segments](https://plausible.io/audience-segmentation).

This way, you can track anything you want to with Plausible. For example: 

* If you’re a [SaaS](https://plausible.io/for-ecommerce-saas), you can track the product sign ups coming from your ads. 
* If you’re an e-commerce, you can [track the revenue](https://plausible.io/blog/ecommerce-revenue-attribution) affected by your ads and calculate your ROI.

Having said that, if you are looking for a deeper integration of Google Ads with Plausible, we have the following limitations due to our privacy-first nature and out-of-the-box compliance with the different cookie laws and privacy regulations such as GDPR and PECR.

We do not track, collect nor store any personal data or personally identifiable information. The goal of Plausible Analytics is to track overall trends in your website traffic, it is not to track individual visitors and contribute to surveillance capitalism.

The privacy of your website visitors is important to us so we do not track any individual people. All the data is in aggregate only.

We also do not utilize or generate any cookies or persistent identifiers. We generate a random string of letters and numbers that is used to calculate unique visitors on a website and we reset this string once per day. You can read more about these decisions [here](https://plausible.io/privacy-focused-web-analytics).

## Using Google Ads with a privacy-first analytics tool

### Importing Plausible goals into Google Ads

With Plausible, you can easily track pageview and custom [goals](https://plausible.io/docs/goal-conversions), including revenue tracking and attribute them back to your paid campaigns using UTM parameters as explained above.

But if you want to import this goals/conversion data into Google Ads, it is unfortunately not possible currently. Even though we provide the options to export all your stats in a [CSV](https://plausible.io/docs/export-stats) and through our [Stats API](https://plausible.io/docs/stats-api), whatever data you export stays privacy-friendly and aggregated.

It is Google Ads’ requirement to use at least one of unique identifiers (﻿hashed) when importing conversion data into their interface, in order to associate conversions with specific ad clicks. It can be a GCLID, or an email ID/phone number from your CRM in case of offline conversions. Here’s the official template:

![google ads conversion import template](/uploads/google-ads-import-template.png "google ads conversion import template")

As per this official Google Ads [doc](https://support.google.com/google-ads/answer/7014069?hl=en&sjid=9875639939304105112-EU), “If you’re importing conversions from clicks using Google Click ID (GCLID), don't remove the Google Click ID field or your import will fail.”

As mentioned above, we strip the unique identifiers before recording the traffic in Plausible.

Vice versa, i.e. importing Google Ads conversion data into Plausible is possible using [this CSV format](https://plausible.io/docs/csv-import#imported_custom_events). We also allow [importing GA4 stats](https://plausible.io/docs/google-analytics-import) into Plausible.

### Running retargeting campaigns

With Google Ads <> Google Analytics, you can retarget those visitors who didn’t convert initially. For this, you need to enable Google Signals, which tracks user activity across sites and devices when they’re logged into their Google accounts.

This enables user profiling based on browsing behavior and also populates demographic details like age and gender under GA4's "User Attributes." However, this requires user consent as it falls under a marketing feature.

Because Plausible is privacy-first, we don’t track or store personal data, so retargeting isn’t possible. This aligns with our commitment to respecting user privacy and complying with laws like GDPR and PECR.

Even with Google Analytics, remarketing will become more difficult as third-party cookies will be getting phased out. Instead, consider privacy-friendly alternatives such as:

* Contextual advertising: Target users based on the content they’re engaging with.
* Newsletter advertising: Reach audiences directly in their inboxes.
* Private Marketplace Deals (PMP): Use curated ad deals that respect user privacy.

We cover the situation in-depth along with solutions [here](https://plausible.io/blog/paid-ads-cookieless-analytics).

## Give Plausible a try

In summary, Plausible provides an ethical, efficient, and privacy-first way to track your paid campaigns. While it has some limitations with Google Ads integration, it’s a solid alternative for those seeking accurate, lightweight analytics. You can start a [free trial](https://plausible.io/register) now, with no credit card required.