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

## What is time on page or the “engagement metrics”?

Time on Page is one of the most important engagement metrics for site owners, that helps understand the average time your visitors spend on each page. This further helps with understanding which pages are most popular in terms of engagement, and the least.



Time on page =  total active time spent on a page / total unique visitors



If you’re using Google Analytics 4, you wouldn’t be seeing “time on page” as it’s been sunset after UA. But you can still look at the metric called “average engagement time per active user” to find out your time on page, because it uses the same formula as above.

## The experiment

We installed both the Google Analytics and Plausible Analytics tracking scripts on a food recipes [website](https://foodrecipeshq.com/). Then compared the data for Mar 12 - Apr 8 2025 (a period of 28 days).



We refer to the same metric as Time on Page in Plausible, whereas it’s referred to as “Average engagement time per active user” in Google Analytics 4.



Here’s the screenshot from GA4 “Pages and Screens” report: