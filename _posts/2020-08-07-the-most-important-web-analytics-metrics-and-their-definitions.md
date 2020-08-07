---
layout: post
title: The most important web analytics metrics and their definitions
description: " Here's a look at all the metrics we do support on our dashboard
  and their definitions. We plan to keep this page up to date with all the
  latest changes and additions."
slug: /metrics-definitons
date: 2020-08-07T08:45:48.514Z
author: marko-saric
---
Plausible Analytics is a simple, lightweight and privacy-friendly web analytics tool. Here's a look at all the metrics we do support on our dashboard and their definitions. We plan to keep this page up to date with all the latest changes and additions.

1. Ordered list
{:toc}

## Plausible Analytics web analytics metrics definitions

### Unique Visitors

The number of people who visited your site. Plausible Analytics is privacy friendly tool so we don't use cookies and other persistent identifiers to keep track of your visitors. 

If a person visits your site from multiple devices or on multiple days, they are counted as separate visitors. This allows us to be compliant with the different privacy regulations such as PECR and [GDPR](https://plausible.io/blog/google-analytics-gdpr) so you don't need to get the visitor consent to keep track of the stats.
 
You can learn more about [how we count unique visitors](https://plausible.io/data-policy).

### Total Pageviews

The total number of times your pages were loaded by your visitors.

### Bounce Rate

The percentage of visitors with a single page view. A visitor "bounces" away and leaves your site after only viewing a single page.

This is a useful metric to judge the quality of the individual pages on your site. You can review sites with high bounce rate where many visitors leave your site to decide whether that is expected behavior and whether there are some actions you can take to improve the particular page and reduce the number of bounces.

Bounce rate is also useful when judging the quality of a referral source and can help you decide which marketing actions to continue being focused on and which to stop.

### Visit Duration

How long time visitors spend on your site. It only shows people who visit more than one page. For those who visit one page only we default to 0 seconds.

Visit duration is another metric that can help you measure the quality of your site and the quality of a referral source. It can be nicely combined with the bounce rate.

For instance, on our own website over the last six months, Google and Facebook have sent a similar amount of referral traffic (Google 7.2K and Facebook 6.4K visitors). Without looking at other metrics, you may think that they are equally useful sources of traffic.

![Our top referral sources of traffic](/uploads/top-referral-sources-quality.png)

But if you add bounce rate and the visit duration into the equation, you can then see a big difference in the quality. Google traffic bounce rate is at 43% and visit duration is at 3 minutes which makes it one of our top traffic sources. Facebook, on the other hand, bring lower quality traffic. The bounce rate is 86% and the visit duration is 25 seconds.

### Current Visitors

How many people are currently on your site. This includes all visitors who have loaded a page in the last 5 minutes. 

In Plausible Analytics, you can click on the number of current visitors to enter the "Realtime" dashboard and see what pages they are viewing and other details.

### Source

See all referral sources that are sending you traffic. A source is reported when a person clicks through to your site from another site.

In Plausible Analytics, you can click on any source to drill-down and view the individual referrers linking to your site and the traffic they've sent over time.

### Direct / None

Includes visitors who typed your URL into their browser or clicked a link in an email. It also includes other visitors who were [missing a referrer header](https://plausible.io/blog/referrer-policy). 

To minimize the amount of traffic that falls within the "Direct / None" category, you can [add these special query parameters to your links](https://docs.plausible.io/manual-link-tagging/).

### Entry Pages

Shows the first page people view on your site.

### Countries

Shows the list of countries your visitors are based in.

### Goals

You can use goals to track desired actions people take on your site. Goals can be based on people [visiting a particular page](https://docs.plausible.io/pageview-goals/) or [triggering a particular event](https://docs.plausible.io/custom-event-goals/) such as subscribing to a newsletter or signing up for an account.

### Converted Visitors

When a visitor converts for a particular goal they’ll be counted as a converted visitor. If the same goal is completed multiple times by the same visitor, it will only be counted as a single conversion.

### Conversion Rate

The percentage of visitors that take a desired action such as subscribing to a newsletter or signing up for an account.

### Screen Size

Shows the width of the screens used by your visitors. We measure the width of the browser window where your site is actually rendered rather than the full screen width. 

Anything under 576px screen size is considered a mobile device, up to 992px is considered a tablet, up to 1440px is considered a laptop and anything above 1440px is considered a desktop. Metrics are shown as a percentage of all visitors.

### Browser

Shows the browsers used by your visitors. We only show the brand of the browser and don’t include the version number or any other details. Metrics are shown as a percentage of all visitors.

### Operating System

Shows the operating systems used by your visitors. We only show the brand of the operating system and don’t include the version number or any other details. Metrics are shown as a percentage of all visitors.

## Do you need web analytics at all?

Some site owners don't use any analytics as they are not interested in knowing the results of their efforts. They run a website because they want to or publish content on topics they want to more like a diary and they don't worry whether someone visits that content or whether people like a particular topic more than another. That's fantastic.

On the other hand, majority of website and business owners want to see some level of stats that tells them what's going on, whether their efforts are resulting in anything and what exactly works and what doesn't. There are many website analytics options for them.

## What can web analytics tell a site owner and what are the most important metrics?

There is no definitive answer to this question. Which metrics to use to measure the success of your website really depends on the website itself and the goals the site owner has with the website. 

These are some of the main areas where web analytics can help website owners get a better idea of what's happening and how things are going:

### Is the website growing

This is one of the main important metrics overall. Are people visiting your website in the first place? How does the visitor trend look like over a longer period of time? This gives you the answer to the question of is your website alive but also is it growing or declining. 

This can help you understand which of your communication and marketing activities make a difference to your site. You may be putting a lot of time, effort and resources into different marketing campaigns and by looking at referral sources of your website traffic you can better understand which of those campaigns are more worth than others.

### What are people doing when they visit the website

This tells you more about the different areas, sections and pages of your site. You've put a lot of time and effort to create those pages and web analytics can tell you which of them are attracting visitors. Metrics such as page views, bounce rate and visit duration can show you which of your pages are more useful and interesting and which are not.

This can help you understand which of your efforts are working better than the others. This can help you better allocate your future time and efforts to do more of the things that work and that your audience is interested in.

### Are the visitors converting on the goals

Most web analytics allow site owners to set goals and events to track those visitor actions that matter the most to them. Examples of this can be anything from the number of visitors who sign up to a mailing list, to things such as the number of people who sign up to a trial account or the number of visitors who buy a product.

In many cases, goals and events can be tied directly to the monetary success of an enterprise which makes them essential metrics to follow to understand the state of the business.