---
layout: article
title: "Plausible Analytics Looker Studio connector: custom reports, no extra complexity"
description: Build custom analytics dashboards and reports directly from your Plausible data. Combine it with ad spend, CRM data or any other source in Google Looker Studio.
permalink: /looker-studio-connector
---
Plausible keeps its dashboard intentionally simple. But some workflows need more: custom layouts for clients, reports that blend analytics with ad spend or revenue data or views that go beyond what any fixed dashboard can offer. The official Plausible Looker Studio connector is built for those cases.

Looker Studio is Google's free data visualization tool. Connect it to Plausible and you can build any report you want: your data, your layout, your audience.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://lookerstudio.google.com/datasources/create?connectorId=AKfycbz88iSK4B6V-VoaiwocFu2dDp3CBRM0arAZoDjQ97SroAt9RtzgS6z3UCxpjJDi0ieVjQ" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">Looker Studio connector</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics Looker Studio connector](/uploads/looker-studio-report.png "Plausible Analytics Looker Studio connector")

The Looker Studio connector is available on the [Business plan](https://plausible.io/#pricing).

1. Ordered list
{:toc}

## Why a Looker Studio connector?

The standard objection to privacy-first analytics is "but it doesn't let me build custom reports." The Plausible Looker Studio connector removes that objection entirely.

You keep everything that makes Plausible different: no cookies, no personal data collection, no GDPR headaches, accurate numbers unaffected by cookie consent losses. And you add the flexibility to present that data however a stakeholder, client or exec team needs to see it.

The connector is official, built and maintained by the Plausible team. It connects through our Stats API and stays current as the product evolves. Unlike community-built connectors, this one won't stop working when the API changes.

## What you can do with it

**Custom reports for clients.** Build branded dashboards with only the metrics that matter to each client. Swap your logo in, leave out what's irrelevant, export as a PDF or share a live link.

**Blend Plausible with other data sources.** Looker Studio can combine data from multiple sources in the same report. Bring in Google Ads spend, Meta campaign data, or a Google Sheet with revenue targets alongside your Plausible traffic data. Calculate cost-per-visitor, compare traffic against targets, or track campaign ROI in one view.

**Go beyond the dashboard layout.** The Plausible dashboard shows one view. Looker Studio lets you build tables with multiple dimensions at once, stacked charts, conditional formatting, running totals and calculated fields. If you've ever wanted to see country, region and city in the same table without clicking through, that's one example.

**Automate reporting.** Reports update automatically as new data comes in. Build a report once, share a link with your team, and it's always current.

## What's available in the connector

All the fields you see in the Plausible dashboard are available as dimensions and metrics in Looker Studio:

* Traffic metrics: visitors, visits, pageviews, bounce rate, visit duration
* Dimensions: page, source, channel, country, region, city, device, browser, OS, entry page, exit page
* Goal and custom event data: goal name, conversions, conversion rate
* Custom properties
* Revenue metrics (if you have revenue goals set up)
* Real-time data refresh or 6-hour caching depending on your preference

## Getting started

Setup takes a few minutes. You'll need a Plausible Stats API key, which you can create in your account settings under API Keys.

See the full setup guide in our [Looker Studio documentation](https://plausible.io/docs/looker-studio).

To get a feel for what's possible, explore the templates we've built:

* [Simple report template](https://lookerstudio.google.com/s/gm8gS_IpBiQ): a clean replica of the Plausible dashboard to use as a starting point
* [Advanced report template](https://lookerstudio.google.com/s/ltrWC2jaK4Q): data blending, calculated metrics, conditional formatting and more

For a full walkthrough of Looker Studio's features using these templates as examples, see our [Looker Studio beginner's guide](https://plausible.io/blog/google-looker-studio-guide).

## Works alongside the other official integrations

The Looker Studio connector works with data from any Plausible site, whether you installed Plausible via the [WordPress plugin](https://plausible.io/wordpress-analytics-plugin), the [Google Tag Manager template](https://plausible.io/gtm-template) or the direct script. It reads from the same data your Plausible dashboard shows.

If you manage multiple sites, the connector lets you pull data from several of them into a single Looker Studio report.
