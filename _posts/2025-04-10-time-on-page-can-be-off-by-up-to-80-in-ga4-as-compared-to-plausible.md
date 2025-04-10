---
layout: post
title: Time-on-page can be off by up to 80% in GA4, as compared to Plausible
description: GA4 can underreport time-on-page by up to 80% vs. Plausible. Learn
  why this happens and how much data you could be losing.
slug: time-on-page-ga-vs-plausible
date: 2025-04-10T12:44:11.967Z
author: hricha-shandily
---
Imagine logging into Google Analytics. You want to see how your page from last month is performing. You look at how much time does a visitor spend on average on your page.

It’s 10 seconds. You end up spending more marketing resources on improving the metric, you make strategies for improving your site’s engagement times.

But what if I told you the metric wasn’t as accurate to begin with? It could be off by as much as 80%?

We recently did an experiment to compare the engagement times recorded––specifically, average time spent per page per visitor––in Google Analytics vs Plausible Analytics.

1. Ordered list
   {:toc}

## What is time on page or the “engagement metrics”?

Time on Page is one of the most important engagement metrics for site owners, that helps understand the average time your visitors spend on each page. This further helps with understanding which pages are most popular in terms of engagement, and the least.

`Time on page =  total active time spent on a page / total unique visitors`

If you’re using Google Analytics 4, you wouldn’t be seeing “time on page” as it’s been sunset after UA. But you can still look at the metric called “average engagement time per active user” to find out your time on page, because it uses the same formula as above.

## The experiment

We installed both the Google Analytics and Plausible Analytics tracking scripts on a food recipes [website](https://foodrecipeshq.com/). Then compared the data for Mar 12 - Apr 8 2025 (a period of 28 days).

We refer to the same metric as Time on Page in Plausible, whereas it’s referred to as “Average engagement time per active user” in Google Analytics 4.

Here’s the screenshot from GA4 “Pages and Screens” report:

![ga4-pages-report](/uploads/ga4-pages-report.png "ga4-pages-report")

And here’s Plausible’s Top Pages report:

![plausible top pages foodrecipeshq](/uploads/plausible-top-pages-foodrecipeshq.png "plausible top pages foodrecipeshq")

Let’s compare some pages:



As you can see, GA4 underreports by as much as 80% as compared to Plausible, while the average underreporting turns out to be 54.7%.



Aka, more than half of the actual user engagement time is missing from Google Analytics 4’s reports, at least as compared to Plausible — which can seriously distort content performance insights and mislead decisions based on time-on-page metrics.



So why are we betting more on Plausible’s engagement time tracking method and benching that against Google Analytics? Where do these differences stem from? 

## Why the differences?

### Method of tracking Time on page

Google Analytics 4 considers a session ([official src](https://support.google.com/analytics/answer/12195621?hl=en&ref_topic=11151952&sjid=2002606596076674643-NC)) as “engaged” if the visitor:

* spends at least 10 seconds actively on the site (by default), or
* if they trigger a conversion event (a designated key event), or
* if they view 2+ pages during the session.

This means that if a visitor does not view a second page during their session or doesn’t convert, and leaves before 10 seconds are completed, that calculation is basically absent from the total time on page computation.

It seems innocent at first, especially if you’re only interested in understanding highly engaged sessions, but it compounds when final calculations are done for hundreds of visitors, distorting the final metric by a sizable difference.

If you’re interested in understanding actual time spent on page, it’s necessary to stick to real world scenarios as much as possible.

Here’s how we calculate time on page on the sites using Plausible:

* We track active engagement only when the page is in “focus”. So we don’t count the time a visitor spent away from your website, say by switching tabs or switching apps.
* We include time on page for bounced visits (i.e. visits where only a single page was viewed).
* We count all time spent, even very short visits—down to a single second. This is the major difference in calculating time on page in both GA4 and Plausible.

### Calculation of unique visitors

Normally, a bunch of newer unique visitors discover a site every day who typically interact with its pages, so it’s okay to not remember a unique visitor for multiple days/months/years, while still getting a fair judgement of the time spent on page.

Still, let’s address the differences in counting unique visitors of both the tools since it makes for the denominator of the time on page formula.

Due to our privacy-respecting nature, [Plausible counts unique visitors](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies) differently than GA4. The key thing to take away is that we delete old salts every 24 hours to avoid the possibility of linking visitor information from one day to the next.

On the other hand, GA4 counts unique visitors by using a combination of browser cookies (client ID), user IDs (if available), and device IDs (or app instance ID) to identify and track individual users across sessions and devices.

This implies that in the metric calculation of Average engagement time per active user, the unique visitors could be less as compared to Plausible in some cases, bringing the average time on page spent per user up in GA4.

In some cases, Plausible may be counting more unique visitors as compared to GA4, if the same visitor starts another session beyond 24 hours.

Now consider the following points:

* 58% of Hacker News, Reddit and tech-savvy audiences block Google Analytics. [Read study](https://plausible.io/blog/google-analytics-adblockers-missing-data).
* Today, 31.5% of internet users worldwide [report](https://backlinko.com/ad-blockers-users) using an ad blocker. Most ad blockers stop the Google Analytics script from loading.
* Many visitors go unnoticed in GA4 due to cookie consent banner declines. [Here’s](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) another interesting independent study that showed how every number in GA4 can be misleading due to this very reason.

Plausible is able to account for all the above cases, because of our privacy-respecting nature. In a nutshell:

* Tech-savvy audiences love Plausible and we haven’t had any reports of such web users blocking our script.
* We are significantly less blocked by privacy-friendly ad blockers and browsers.
* You don’t need to put up a cookie consent banner when using Plausible, at least from our side. We are GDPR, CCPA, etc., compliant out-of-the-box.

Plus: Within 24 hours, if a same visitor comes to a site after deleting their cookies or through a private browser, Plausible will be able to still recognize it as the same unique visitor due to [our cookieless tracking](https://plausible.io/blog/google-analytics-cookies). However, GA4 would see it as a new visitor.

Considering all this, it’s fair to say that each tool has its trade-offs, but given the overall accuracy practices, we believe Plausible’s stats are more accurate overall.

#### Other reasons Plausible’s stats are more accurate

Well, we take a bunch of measures aligning your stats with real-world data. There’s a full [post](https://plausible.io/most-accurate-web-analytics) on that, but here are the quick pointers:

* We block spam and bot data by default.
* We do not use any data sampling or modeling by default. We collect and store 100% of the data regardless of how many pageviews you have.
* Our data is always fresh and constantly updated. We provide real-time analytics whereas GA4 can take up to 48 hours to fully process data and update your reports.

…etc.

## Experience the difference

We invite you to conduct your own tests. We encourage you to install the Plausible script side-by-side your GA4 tracking script and see the differences for your site on your own.

Plausible is absolutely [free to use](https://plausible.io/register) for the first 30 days. If you find any differences, don’t forget to share them with us. :)