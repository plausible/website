---
layout: article
title: "Plausible: The more accurate alternative to Google Analytics"
description: Is Google Analytics accurate and how Plausible provides much more
  accurate data in comparison?
permalink: /most-accurate-web-analytics
---
“Every number in your Google Analytics account is wrong.” That is exactly what an independent [study](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) recently done by Orbit Media found. 

This happens due to a bunch of reasons like consent banner declines, spam and bot traffic skewing data, tracking scripts being blocked by privacy-conscious browsers and ad blockers, and more such reasons we discuss in this post.

Google Analytics has been unable to provide solid solutions to these common problems and site owners continue operating with semi-accurate numbers and missing data.

This is what we see regularly in our support tickets too: how they are seeing more numbers in their Plausible dashboard than in their GA dashboard.

We, at Plausible, take special measures in addressing challenges that pull down data accuracy. 

![plausible-most-accurate-web-analytics](/uploads/plausible-most-accurate-web-analytics.png "plausible-most-accurate-web-analytics")

1. Ordered list
{:toc}

## Why does accurate data matter?

Second guessing the numbers on an Analytics dashboard defeats the purpose of numbers. For instance, If you were to compare the sales in GA and another tool tracking your sales, you’d find the difference (depending on how much your audience uses ad blockers for example).

First, this will cause confusion requiring you to manually investigate further. Second, this will cause GA to misattribute other related metrics such as acquisition channels. The bigger the scale, the bigger the difference could be.

When data is underreported and/or inaccurate, businesses may misallocate resources, invest in the wrong strategies, or fail to capitalize on high-performing campaigns.

Like, marketing teams might miss out on valuable audience segments or inaccurately measure the success of their efforts. This could straight up waste the marketing budget.

Marketing agencies that have to show accurate stats/results to their clients and build their portfolio are affected the most. Imagine showing a different number on GA4 about a conversion to the client and the client seeing a different number in their backend.

For publishers and content creators, inaccurate metrics may lead to inaccurate understanding of the audience, causing them to miss out on ad/affiliate revenues and creating good content strategies.

In all cases, missing and/or inaccurate data affects the ability to track the real impact of the website, campaigns, and user engagement.

P.S. If you’ve ever wondered *why analytics numbers differ between tools*, [this post explains why](https://plausible.io/blog/why-analytics-numbers-dont-match).

## R﻿easons that affect data accuracy

Let’s look at the reasons that affect data accuracy and what we do differently at Plausible to ensure accurate data and real insights.

### Cookie consent banner dependency

Implementing a GA tracking code on your website needs you to use a [cookie consent banner](https://plausible.io/blog/cookie-consent-banners). This is legally required in many regions to comply with privacy regulations like the EU’s GDPR and California's CCPA.

Many website visitors don’t want their activities to be tracked and want to protect their privacy. So they decline the banners. This causes the tracking script to be disabled.

This gap leads to underreporting in traffic numbers and incomplete data on user interactions, skewing analytics insights. Factors like banner visibility, user interaction, and explicit vs. implied consent also impact data completeness.

In fact, according to the Orbit Media study shared above, the accuracy of GA4 as compared to Plausible –– due to the cookie consent banner’s presence –– was exactly at 55.6%. More than half of the data was missing, making Google Analytics stats not reliable!

**How do we tackle this at Plausible?** We made Plausible tracking completely cookieless. This means that we track your website usage data without the usage of cookies or any other persistent identifiers.

Neither do we ever track or store your visitors’ data for any reason, making us inherently privacy-friendly. This means you don’t have to use a cookie consent banner on your website for the reasons of using a Plausible tracking script.

No consent banners means no declines and no missing data in the first place. It’s also great for creating a better website experience!

### Spam and bot traffic skewing data

One of the major challenges with web analytics is filtering out spam and bot traffic that can skew your data. GA4 excludes known bots automatically.

At Plausible, we detect and automatically exclude bots (and are constantly evolving the detection systems) by:

* Blocking traffic based on the User-Agent header
* Filtering out known referrer spam domains
* Blocking traffic originating from data centers
* Detecting and excluding unnatural traffic patterns

Another thing we do at Plausible is that we exclude ~32,000 data center IP ranges (i.e. a lot of IP addresses) by default. This is a problem with GA4.

In [a test](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics) we conducted, we simulated bot traffic to a website and observed that GA4 failed to detect it, displaying the bots as real users—unlike Plausible, which correctly identified and excluded them from the stats.

GA4 users constantly battle with skewing data due to this reason. For eg. When a site uses a cookie management platform (CMP), the CMP might send data center traffic which GA4 is unable to detect and exclude from stats.

So GA users need to manually find out which IP addresses are being used by the CMP and exclude them within the GA4 settings. You may end up excluding 10 IP addresses based on the help guides or direct information available from the CMP, before another one attacks your stats.

And all this depends on noticing the problem in the first place and dealing with jargon, reading guides, etc. While all you wanted to do was see some real site stats.

**How do we tackle this at Plausible?** We exclude 32k IP ranges from the get go. So you never have to worry about all this.

Plausible also excludes bots, crawlers, referrer spam and other known non-human activity by default. [In a test we ran](https://plausible.io/blog/server-log-analysis), we saw 18x more pageviews with server side tracking than with Plausible which shows the volume of spam traffic that Plausible excludes.

### Tracking script being blocked by ad blockers and browsers

Google Analytics tracking script, being infamous for leaving cookies on users’ browsers and devices, has started being blocked by privacy-conscious users. The way they do this is by using ad blockers and privacy-first browsers like Safari and Firefox.

There are many technologies in place to prevent a privacy-invasive tracking script from loading like Apple Intelligent tracking prevention, Firefox with ETP, Brave, etc.

Basically, if your users use privacy-friendly browsers and/or ad blockers, Google Analytics script won’t be able to track their traffic and activity on your website.

**How do we tackle this at Plausible?** Mostly, we don’t need to tackle this as an isolated problem because we are cookieless and privacy-first. We are not blocked by privacy-friendly browsers and most ad blockers.

One exception therein is the kind of adblockers who don’t like differentiating between privacy-friendly and non-privacy-friendly scripts and block all the JavaScript tracking codes on a website.

We give an option to use our [proxy](https://plausible.io/docs/proxy/introduction) script to bypass the ad blockers that could have blocked the Plausible tracking code otherwise. This means you get even more accurate data, even for users who have ad blockers enabled.

The silver lining is that it only takes a couple of minutes to set up a proxy using our instructions. No tech know-how is necessary.

### Location inaccuracy

Users connecting through proxy servers or VPNs can conceal their true location, leading Google Analytics to log the location of the proxy or VPN server rather than the user's actual location.

Secondly, the cities’ reporting is not that accurate within GA4. This usually happens due to IP anonymization measures (since IP addresses are personally identifiable information) across the globe. 

Google Analytics changes the last digit of the IP address to zero when these addresses are sent to the GA4 servers in the US.

**How do we tackle this at Plausible?** We group VPN traffic under a single “Anonymous VPN Service” category. This ensures that Location reports are more accurate and reduces the noise that VPN users might otherwise add.

Secondly, we use the MaxMind database to determine the visitor location based on the IP address. This lookup happens on our servers and no data is ever sent to MaxMind. 

The IP address itself is discarded to make sure we don't store any personal data. We never store IP addresses in our database, logs or anywhere on disk at all.

### Conversion attribution inaccuracy

Google Analytics makes you manually exclude unwanted referral sources like payment processors to keep your data clean.

If not, you'll see traffic sources like PayPal, Stripe or Paddle as a source of the conversion instead of the original channel.

This happens when users briefly leave for payments or password resets, causing GA4 to start a new session.

On top of it, this has to be done within a cluttered settings panel.

But Plausible handles this automatically—keeping your original traffic source and session intact; no extra setup needed!

With Plausible, referral sources are counted only when they start a new session on your site. This prevents external domains such as payment gateways showing up in the list of sources.

One makes you work to get accurate data, the other just works.

### Misclassified Direct traffic

Another challenge with analytics is accurately identifying traffic sources. In Google Analytics, traffic from mobile apps, like Gmail, Slack, Telegram, etc., is often misclassified as "direct," leaving you with unclear data. 

**How do we tackle this at Plausible?** Our algorithms recognize traffic from Android apps and categorize it under "android-app" in the "Top Sources" report. This can help recover up to 10% of previously unrecognized traffic for sites with large mobile audiences.

### Complex traffic exclusion settings

In GA, it’s possible to exclude internal traffic from polluting your analytics by excluding the IP addresses. If you wanted to exclude a country’s traffic from being recorded in GA4, there's no setting available and the workarounds are: 

\- Add IP ranges of an entire country to your IP block list. (not reliable)

\- Filter, segment, and use Comparisons to exclude countries while viewing reports. (complicated)

\- Get a developer to do it. (unnecessary)

**How do we tackle this at Plausible?** In Plausible settings, you can exclude traffic from being recorded by IP addresses, countries, pages/sections, and hostnames as well. And making these settings is as easy as using a dropdown menu.

Whether you want to permanently block certain countries or just exclude specific data for reporting, Plausible makes it simple to filter out the noise and focus on what matters most.

### Delayed data processing

Google Analytics can take [up to 48 hours](https://support.google.com/analytics/answer/11198161?hl=en) to fully process data and update your reports. This generally means a delay in making important decisions, or worse: not knowing that the data may not be fresh and making misinformed decisions.

**How do we tackle this at Plausible?** Our data is always fresh and constantly updated. We provide real-time analytics.

### T﻿ime on page tracking inaccuracy

The average engagement time metrics in G﻿oogle Analytics 4 can be misleading since their calculations don't include the time from sessions that lasted below 10 seconds. 

In our experiment, we found that such so called "non-engaged sessions" can be half of sessions, causing the final metric to underreport by as much as 80%.

[H﻿ere's the full study](https://plausible.io/blog/time-on-page-ga-vs-plausible).

**How do we tackle this at Plausible?** Here’s how we calculate time on page on the sites using Plausible:

* We track **active engagement only** when the page is in “focus”. So we don’t count the time a visitor spent away from your website, say by switching tabs or switching apps.
* We **include time on page for bounced visits** (i.e. visits where only a single page was viewed).
* We **count all time spent**, even very short visits—down to a single second. *This is the major difference in calculating time on page in Plausible from GA4.*

### Complicated setup contributing to setup errors

Another thing that causes inaccuracy in statistics is a faulty Google Analytics setup. It is quite [complicated](https://plausible.io/blog/things-i-hate-about-GA4#iv-the-complexity-isnt-a-bug-its-a-feature) to set up a well-functioning GA dashboard, which is why there are so many expensive courses on the web trying to teach GA.

It usually requires you to learn Google Tag Manager, Google’s terminologies, character limits, how to make certain settings the right way, DebugView, and working with a developer to get the reports to work the way you want them to.

So it’s easier to miss out on essential settings or do something wrong than it is to ensure a right setup. 

**How do we tackle this at Plausible?** Plausible dashboard is [very simple](https://plausible.io/simple-web-analytics) to set up and understand. 

And because we take care of many things out-of-the-box, the setup is not only simple but also minimal. This leaves little room for error and ensures all you see is real and accurate data.

### Data modeling and sampling

Google Analytics actively shows modeled key events. Quoting them: “Google uses modeling to estimate online key events that can’t be observed directly. Modeling allows for accurate attribution without identifying users.”

GA4 has been including paid and organic channel modeled key events since the end of July 2021. Event-scoped dimensions also include modeled data.

They do this to cover the data gaps stemming from rejected cookie banners, browsers limiting the time window for first-party cookies, ad interaction and the key event happening on different devices, and more such reasons.

You cannot differentiate modeled data from your regular data.

Moreover, the conversion numbers you see aren't always final. It takes up to 12 days for conversion data to process and stabilize after each conversion is initially recorded. Why? Because GA4 is also feeding this data into attribution models (for example, to determine which channels contribute most to conversions).

So, that’s another reason that much of your GA stats are actually just estimated numbers. Here's a [full breakdown](https://plausible.io/blog/consent-mode-ga4-modeled-data).

**How do we tackle this at Plausible?** Plausible does not use any data sampling or modeling by default. We collect and store 100% of the data regardless of how many pageviews you have. The stats in your dashboard reflect 100% accurate data of what happens on your site.

However, on some dashboard views that have a lot of data such as those with more than 20 million pageviews, we apply [​limited data sampling](https://plausible.io/docs/dashboard-faq#does-plausible-do-data-sampling) to help the dashboard load as fast as possible.

## In conclusion

If you're looking for an analytics platform that delivers more accurate data without the hassle of filtering out bots, handling ad blockers, consent banners, etc., Plausible is the strongest alternative to Google Analytics.

The more accurate the data, the more confidently you can base your business decisions on it. While some say that semi-accurate data is sufficient for spotting patterns, and we agree, we also believe that it shouldn’t be an excuse for indulging in privacy-invasive practices and lousy measures.

Working with more accurate and reliable data, collected ethically, is entirely possible. So why settle for less?

Get a [free Plausible trial](https://plausible.io/register) right away – we’ve made it super convenient to get started. You can also checkout our [GA4 to Plausible transition guide](https://plausible.io/blog/ga-to-plausible-transition)

And do check out our official [plugin](https://wordpress.org/plugins/plausible-analytics/) if you’re on WordPress.