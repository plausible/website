---
layout: article
title: "How to migrate from Google Analytics to Plausible"
description: "A practical guide to switching from GA4 to Plausible. Import your historical data, recreate your reports and understand what changes."
permalink: /migrate-from-google-analytics
cta_headline: "Ready to leave Google Analytics behind?"
---

If you have decided to leave GA4, this guide covers the practical steps: importing your data, setting up goals and tracking, and understanding what will feel different.

This is not a comparison page. If you are still deciding, start with [Plausible vs Google Analytics](/vs-google-analytics). If you are ready to switch, read on.

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "Just replaced my full network's Google Analytics with Plausible - I can't remember when last I was this impressed by a SaaS UX + design. Became a paying customer within 1hr of the 30-day trial."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Rob Hope</span>, product designer and founder
  </figcaption>
</figure>

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "Plausible Analytics is a breath of fresh air compared to the dumpster fire that Google Analytics has become."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Matt Olpinski</span>, Senior Product Designer at Instacart
  </figcaption>
</figure>

<div class="mt-6 max-w-md mx-auto sm:flex sm:justify-center">
  <div class="rounded-md shadow">
    <a href="/register" onclick="plausible('CTA Click', {props: {position: 'Hero', type: 'Landing page', button: 'Start free trial'}})" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">Start free trial</a>
  </div>
  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
    <a href="/plausible.io" onclick="plausible('CTA Click', {props: {position: 'Hero', type: 'Landing page', button: 'View live demo'}})" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: #4f46e5;">View live demo</a>
  </div>
</div>

![Plausible vs Google Analytics comparison](/uploads/plausible-vs-ga.png "Plausible vs Google Analytics comparison")

1. Ordered list
{:toc}

## What changes when you switch

GA4 is built for user profiling and ad attribution. Most of its complexity exists to support that. Plausible is built for simpler, privacy-first analytics. What you gain and what you give up is clear.

**What you gain:**

- One dashboard with everything visible at once, no custom reports needed for the basics
- No cookie consent banner required, which means more complete and accurate data
- Real data with no modeling or estimation to fill privacy-related gaps
- Higher accuracy as the Plausible script is blocked far less than GA4

**What you leave behind:**

- User-level reports and identity-stitched journeys
- Cohort analysis and retention reports
- Audiences for retargeting campaigns
- Multi-touch attribution (Plausible uses last-touch only)

## Step 1: Start your Plausible trial

[Start a free 30-day trial →](https://plausible.io/register)

You can run Plausible alongside GA4 while you get familiar with the new dashboard. Adding the Plausible script next to the GA4 snippet has no meaningful impact on page speed.

## Step 2: Import your historical data

Before removing GA4, import your historical GA4 data into Plausible so you have continuity. Plausible handles deduplication so there are no gaps or double-counting issues.

[How to import your Google Analytics data →](/docs/google-analytics-import)

## Step 3: Get familiar with the dashboard

The Plausible dashboard shows everything on one page: unique visitors, visits, pageviews, bounce rate and visit duration at the top, then traffic sources, pages, countries, devices and goals below. No sidebar navigation, no custom report building needed for the basics.

Metric names are intentionally close to GA4 terminology where possible. [Full metrics definitions →](/docs/metrics-definitions)

## Step 4: Set up goals and events

GA4 tracks everything as events. Plausible separates tracking into two types:

- **Pageview goals**: trigger when a visitor lands on a specific URL such as a thank-you page. No code needed.
- **Custom event goals**: trigger on an action like a button click, form submission or file download. Requires adding a snippet or CSS class.

Outbound link clicks, file downloads and form completions can be tracked automatically with no extra code. 404 error tracking also requires just a small addition to your 404 page template.

[Set up pageview goals →](/docs/pageview-goals)
[Set up custom event goals →](/docs/custom-event-goals)
[Automatic link and download tracking →](/docs/script-extensions)

For funnels, build 2-8 step funnels using any combination of your goals as steps. [Funnel analysis →](/docs/funnel-analysis)

For open-ended path exploration without a predefined sequence, pick any page or event as a starting point and trace what visitors did next. [User journeys →](/docs/user-journeys)

## Step 5: Connect Google Search Console

Connect your Search Console property to see keyword data alongside your traffic stats. This adds a Search terms report showing which queries drive clicks, impressions, CTR and average position.

[Google Search Console integration →](/docs/google-search-console-integration)

## Step 6: Recreate your custom reports

**Campaigns and UTM tracking**: Plausible reads standard UTM parameters automatically. Tag your URLs as you did in GA4 and the Campaigns tab shows traffic and conversions by campaign, source, medium, term and content. [UTM tracking →](/docs/manual-link-tagging)

**Looker Studio**: The official connector lets you build custom charts and blend Plausible data with other sources like ad spend or CRM data. [Looker Studio connector →](/docs/looker-studio)

**Stats API**: Pull any metric programmatically for internal dashboards or BI tools. [Stats API →](/docs/stats-api)

**CSV export**: Download stats directly from the dashboard for one-off reports. [Export stats →](/docs/export-stats)

## Why your numbers will look different

Plausible and GA4 will never show identical numbers. They measure differently by design and a 10-20% difference is normal. The most common reasons:

- GA4 uses cookies and models missing data from visitors who decline consent; Plausible does not use cookies and counts those visitors directly
- GA4 includes bot and spam traffic that Plausible filters out
- Plausible counts unique visitors by IP and user agent, not cookie-based sessions

[Why Plausible is more accurate than Google Analytics →](/most-accurate-web-analytics)

## GA4 to Plausible: feature reference

| Use case | GA4 | Plausible |
| --- | --- | --- |
| Traffic overview | Multiple reports | One dashboard |
| Campaign tracking | UTM + conversion setup | UTM support by default |
| Goals and conversions | Events marked as conversions | Pageview or custom event goals |
| Funnels | Explorations, manual setup | Simple 2-8 step funnels |
| Ecommerce revenue | Enhanced Ecommerce | Event-based revenue tracking |
| Custom segmentation | Custom dimensions | Custom properties |
| SEO performance | Search Console integration | Search Console integration |
| Scroll depth | 90% threshold only | Full 1-100% automatic |
| Looker Studio | Yes | Yes, official connector |
| Stats API | Yes | Yes |
| Retention and cohorts | Yes | Not available |
| Retargeting audiences | Yes | Not available |
| Modeled or estimated data | Yes | No |

[Start your free trial →](https://plausible.io/register) or [contact us](/contact) if you have questions about your specific setup.
