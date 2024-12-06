---
layout: article
title: Everything that’s complicated to do in Google Analytics than Plausible
description: cfc
permalink: /easy-insights
---
The Google Analytics 4 interface has multiple reports, beneath multiple layers of menus. Some reports are standard, i.e. pre-made and available by default, while others are custom (“Explorations”) that you need to create on your own from scratch.

Amongst these maze of reports, insights are hidden. Site owners, especially businesses, need a bunch of insights and have some questions about their website’s performance that should be fairly straightforward to get.

But fetching most of such insights from GA4 requires going through multiple different standard reports while editing them, using Explorations to build custom tables from scratch, or using a combination of both depending upon the use case––all this while still dealing with [inaccurate](https://plausible.io/most-accurate-web-analytics) numbers.

And it is not usually as simple as going through a how-to guide and creating and accessing the right reports, but usually needs users to go through full GA4 and GTM (Google Tag Manager) courses, learning the right terminologies, how they are interconnected, setting the right things up, debugging, etc.

We created Plausible with simplicity in mind, so you wouldn’t have to worry about any of that. You get a one-page report with all the important insights (not less). Which are those and how are they found in Google Analytics 4 vs Plausible?

**Helpful tip**: You can open our [live dashboard](https://plausible.io/plausible.io) in another tab now as we keep referencing it throughout. You can also open the official [GA4 Merch Shop demo property](https://support.google.com/analytics/answer/6367342?hl=en#zippy=%2Cin-this-article) in a third tab to make the comparisons easier.

## Quick revision: Standard vs Custom reports in GA 4

Google Analytics is mainly divided into two types of reports: standard reports and custom reports, aka Explorations. All the pre-built reports that are available under the “Reports” sidebar in GA4 are the standard ones.

If you go to “Explore” from the sidebar, you can create custom reports (known as Explorations) with the data that has been collected for your site and visualize them in different forms like table, funnel, tree graph, venn diagram, etc.

## Finding insights in GA4 vs Plausible

### How many people visit my site and how well they engage?

#### In Plausible

In the Plausible [dashboard](https://plausible.io/plausible.io), the metrics that a site owner immediately wants to know are in the top bar: **unique visitors, total visits, total pageviews, views per visit, bounce rate, and visit duration** along with improvements/declines in those numbers for the selected time period.

Needless to say, it’s a complicated bunch of things to do in Explorations. And it could provide good advanced use cases for very large teams or agencies. But the problem is that some insights are fairly standard and essential to know for site owners but you still need to make use of Explorations –– complicating simple processes.

![Main metrics in Plausible](/uploads/main-metrics.jpg "Main metrics in Plausible")

In case you want to confirm what these metrics mean, you can have a look at the definitions [here](https://plausible.io/docs/metrics-definitions).

#### In GA4

These metrics are found in different reports under different groups on the sidebar. It depends on what groups you see based on business objectives you select while signing up on GA4. But the individual standard reports are named the same.

The aforementioned metrics are also available as metrics in GA 4 which can essentially be added to any standard or custom report using the edit report feature. FYI: Metrics are numerical parameters that measure the performance of something.

But if you want to know where these insights are typically housed (based on the GA4 structure) when you open your GA dashboard, you will need to open different reports as explained below.

Unique visitors: Are known as “users” in GA4 and this metric is available in the User Acquisition report. 

Quick context: Why “user acquisition”? This is because GA4 profiles users and tries to separate unique users from total sessions, with the help of [cookies](https://plausible.io/blog/chrome-third-party-cookies). Plausible, though, is privacy-friendly and only counts aggregated stats in terms of sessions and never tracks individual users.



Total visits: Are known as “sessions” in GA4 and this metric is available in the Traffic Acquisition report.



Total pageviews: This metric is available in the Pages and Screens report.



Views per visit: This metric is also available in the Pages and Screens report but not by default. It needs to be manually added using the report edit button.



Bounce Rate: Bounce rate is also available as a metric which needs to be manually added to any of the reports you are viewing. It is not available by default and there’s no one-stop place to view it.



Time on Page: This is not available. But you can find the Average Engagement Time per User and Average Engagement Time per Session metrics to be added to any report. You may also find these in the Engagement Overview report.



P.S. While editing any standard report to add such metrics, don’t forget to “Save” them. It will avoid the trouble of adding the metric again and again.

### The pages from where people leave my site?

Exit reports show where users leave your site. This can help you spot problems, like ineffective content or confusing pages. Although not all exits are bad—like when someone leaves after finishing a purchase. And that is exactly the insight we need.

#### In Plausible