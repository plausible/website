---
layout: post
title: The easiest scroll depth tracking ever – exclusively in Plausible
description: Scroll depth tracking, automatic and built-in—only on Plausible.
  Get actionable insights effortlessly.
slug: scroll-depth
date: 2025-01-17T08:32:07.301Z
author: hricha-shandily
image: /uploads/scroll-depth-metric-in-plausible.png
image-alt: scroll depth metric in plausible
---
Scroll depth tracking has always been a crucial metric for understanding how visitors engage with your web pages. It helps you see how far down a page users scroll, helping understand the content performance, engagement levels, and areas for improvement.

Setting up scroll tracking has always been a tedious process – no matter which tool you switched to. Google Analytics 4 (GA4) only offers basic tracking at 90% depth as part of their enhanced measurement, which is only useful in knowing whether visitors are scrolling all the way down or not.

To track other percentages, like 25, 50 or 75 percent, you need to set up custom events in Google Tag Manager – a time-consuming process.

Whereas other alternatives such as Matomo, Cloudflare, etc. either don’t allow tracking this metric or require complicated and technical setups and/or custom reporting to track scroll depth.

At Plausible, we’ve simplified this completely. Scroll depth tracking is now built into our analytics by default, requiring no setup or additional configurations.

We automatically track and display all percentages to which your visitors scroll to. Available at no extra cost, this feature is live in your dashboard and ready to provide actionable insights.

Happy new year! 🍻

1. Ordered list
{:toc}

## What is scroll depth?

Simple as the name suggests, scroll depth is the vertical length to which a visitor scrolls a particular page on your website. This metric is generally reported as a percentage, such as 25, 50, 75, or 100 percent.

If they scroll down all the way down to the page, it’s a 100% scrolling event. If half, 50%. And so on. 

This insight helps you:

* Understand visitor engagement by offering insights into how visitors interact with your content, identifying which sections capture attention and which are overlooked.
* Optimize content placement by determining the ideal locations for important elements like calls-to-action, ensuring they are positioned where users are most likely to see them.
* Improve page layout by analyzing scroll patterns.

For example, if you’ve got a long-form article with a call-to-action (CTA) near the bottom, scroll depth can tell you how many of your readers actually made it to that point.

This is also measured in pixels (usually rounded off values) in some tools. Although, it’s better to track it in percentages because that way it’s easier to judge the engagement level of the page and easily compare it to other pages too.

## Introducing, Scroll Depth tracking in Plausible Analytics – the only analytics tool to do it automatically and comprehensively

The scroll depth metric is now live in your dashboards! 

![scroll-depth-tracking-in-plausible](/uploads/scroll-depth-tracking-in-plausible.gif "scroll-depth-tracking-in-plausible")

If you don’t have an account with Plausible, you can check out the Top Pages report in our [live demo](https://plausible.io/plausible.io/pages?period=30d&keybindHint=T) to see what this looks like.

Here’s everything you need to know about it:

### Tracked by default

Scroll depth is measured automatically for every page on your site that is tracked with the Plausible script, starting today. No sending scroll depth events, no plugins, no tag managers, no extra cost, no extra time and effort.

This is a rare feature that you won’t easily find in any other web analytics tool.

### Tracked at all page heights

We track page scrolling at all page heights. It’s not limited to predetermined specific points only like 25, 50, 75, 90 percent.

### Found with the Top Pages report

You can find the scroll depth metric in two main areas of your dashboard:

1. The top row of metrics in the dashboard, whenever a page filter is applied. You can click on the metric to display its performance over time on the line graph as well.
2. The expanded Top Pages report (i.e. Details section), where you can even sort pages by scroll depth for deeper insights.

If there’s no data available yet, scroll depth will simply display as “-” until sufficient traffic is captured.

### How is it calculated?

Scroll depth in Plausible is defined as the maximum scroll depth reached by an average user on a specific page. If a user visits a page three times and scrolls to different depths:

1. First visit: 25%
2. Second visit: 60%
3. Third visit: 10%

The maximum depth for that user is 60%. The final scroll depth for the page is then calculated based on the maximum average scroll depth of all users.

### Available with the official Plausible WordPress plugin

This metric is now available with our [official WordPress plugin](https://plausible.io/wordpress-analytics-plugin) as well.

## What’s wrong with other web analytics tools’ scroll tracking?

Other web analytics tools like [Matomo](https://plausible.io/vs-matomo), [Cloudflare](https://plausible.io/vs-cloudflare-web-analytics), etc. either don’t allow tracking the scroll depth metric or require complicated and technical setups and/or custom reporting to manage and track scroll depth.

And Google Analytics? Let’s see that one in a bit more detail.

### How to track scroll depth in Google Analytics?

The built-in scroll tracking (available as an enhanced measurement) in Google Analytics is so limited and rigid that the solution suggested by GA experts is to disable it entirely to implement a more customized solution within Google Tag Manager. 

Here are the steps to do so:

1. Disable scroll tracking in the GA4 interface. 
2. Configure a new scroll depth trigger in Google Tag Manager. Go to Triggers -> New -> Scroll Depths -> Vertical scroll depths -> Percentages -> enter values for which you want to track scrolling depth. Name the trigger and save it.
3. Test your trigger using the debugger and preview mode and verify the setup by checking whether the data is correctly collected in the data layer.
4. Create a new tag in GTM by selecting the tag type as a GA4 event, selecting the relevant configuration tag from the dropdown. Enter the event name, set event parameters. Choose the triggering. Name and save the tag.
5. Open GA4 and to test your setup with the debugview.
6. Create a custom dimension in GA4 settings. Decide the dimension name and scope. Select the relevant parameter (earlier setup within GTM). Save it. Wait for 24 hours, it'll be available in your reports. By the way, you can have up to 50 custom dimensions only.

As you can see, this setup is time-consuming and tricky for those unfamiliar with Google Analytics and Tag Manager. You’ll need to test rigorously and need to maintain your setup over time as your website and GA evolve.

Many engage freelancers and agencies to help with such setups, which is costly and time-consuming. There are many other [things that are much easier to do in Plausible than Google Analytics 4](https://plausible.io/blog/easy-insights).

## What is a good scroll depth?

There isn’t a universal “good” scroll depth because it depends on the purpose of the page in question. For a blog post, you’d ideally want most users to reach at least 75% of the page, as that’s where the conclusion or CTA often resides.

On landing pages, especially ones designed for conversions, more than 70-90% scroll depth can be the goal, as it signals that users are understanding about the offering and reaching the final CTA or contact form.

Similarly, if most users drop off before 25%, it might indicate issues with your header or introduction. But, if you have a CTA around that mark and your bounce rates are low, it could also indicate that the visitors converted around that time.

Or if engagement drops significantly at 50%, perhaps your content isn’t holding attention, or the layout is causing friction. If many users aren’t even scrolling down below the 10% mark, then probably you targeted the wrong audience.

So, it all depends! This is why you need a dashboard to compare all metrics and make meaningful conclusions.

In Plausible, you can club this metric with other metrics such as time on page and bounce rate to understand the engagement patterns properly. This can be measured against the visitors and pageviews, amongst other things.

## Ready to track your page scrolls?

Plausible prioritizes [simplicity](https://plausible.io/simple-web-analytics), [privacy](https://plausible.io/privacy-focused-web-analytics) and [accuracy](https://plausible.io/most-accurate-web-analytics) – all at the same time. Our goal is to remove unnecessary complexity while providing the insights you need to improve your website.

**[Try it out now](https://plausible.io/register)!**