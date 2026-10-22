---
layout: post
title: "Google Analytics pricing: What do free GA4 and GA360 really cost?"
description: "Is Google Analytics free? Understand GA4 limits, reported GA360 pricing and the costs of running your setup before paying for more analytics."
slug: google-analytics-pricing
date: 2026-10-21T10:00:00.000Z
author: hricha-shandily
published: false
---

You should be able to understand which pages and campaigns work without building profiles of the people who visit your website. A growing audience should not make that harder.

Google Analytics takes a different approach. Its website and app measurement connects closely with Google's advertising products. You can use the standard version for free or pay for Google Analytics 360 to get higher limits and additional enterprise capabilities. But buying more capacity only helps if that approach fits what you need to measure.

Here's the pricing answer first: **standard Google Analytics 4 (GA4) has no subscription fee. Google Analytics 360 (GA360) is sold by quote, with a reported starting price of around US$50,000 per year.** That figure comes from reseller reporting, not a current public Google price list.

We'll explain where it comes from, what affects the bill and how to decide whether paying for GA360 solves your problem.

*Pricing sources and product documentation checked in October 2026. All dollar figures below are US dollars.*

1. Ordered list
{:toc}

## Is Google Analytics free?

Yes. [Standard Google Analytics](https://marketingplatform.google.com/about/analytics/) is free to use. You do not start paying a subscription simply because your website reaches a certain number of monthly visitors.

The distinction is between the free product's limits and the paid service, rather than a visitor threshold that automatically generates a bill.

| Version | Subscription price | What you're choosing |
|---|---|---|
| GA4 Standard | Free | Google's measurement model within the standard limits |
| Google Analytics 360 | Custom quote; reported starting point around $50,000/year | Higher limits, additional controls and enterprise support |

The free subscription does not include every cost of operating your setup. If you use paid implementation support, a consent management platform or a data warehouse, those can have their own bills. Your team's time matters too.

That does not mean every GA4 setup is expensive to run. It means the subscription price is only one part of the calculation.

## How much does Google Analytics 360 cost?

Google directs prospective Analytics 360 customers to [contact sales](https://marketingplatform.google.com/about/analytics-360/). It does not publish a dollar price list on that page.

The often-cited **$50,000/year starting price** comes from [Cardinal Path's August 2022 explanation of GA4 360 pricing](https://www.cardinalpath.com/blog/ua-360-vs-ga4-360-pricing-model). The reseller describes a suggested starting price that includes 25 million events per month.

Treat that as a published reference point, not a guaranteed quote for your organization today. Ask Google or a sales partner for the rates and services that apply to your usage and market.

### Why do some articles say $150,000 a year?

Many refer to the older Universal Analytics 360 product. Cardinal Path distinguishes its suggested $150,000 annual price from the newer GA4 360 pricing model.

These figures describe different product generations. A current GA4 360 contract can still cost more than $150,000 depending on usage and terms, but the older figure should not be presented as today's universal minimum.

## How GA360 pricing works

[Google's billing documentation](https://support.google.com/marketingplatform/answer/9013858) describes two parts: a fixed base fee covering the first 25 million monthly events and a variable fee for additional event volume. The per-event rate decreases at higher volume tiers.

Events are not visitors or pageviews. A single visit can generate several events, such as a pageview, a scroll and a signup. Your tracking configuration therefore affects the volume you process.

Google also distinguishes billable events from total events. Its documentation excludes user engagement, spam and hidden system events from billing. Use the billable count when reviewing a quote.

### Your property structure can add cost

GA360 lets organizations separate or combine their reporting using subproperties and roll-up properties. A subproperty contains a subset of a source property's data. A roll-up combines data from multiple source properties.

Those additional processing steps can affect your bill. For example, [Google documents an additional charge for roll-up events](https://support.google.com/analytics/answer/11539651) at half the cost of source-property events, subject to your contract. Ask your provider to include your full property structure in the estimate.

### How to get an estimate for your setup

Eligible organization and billing admins can review usage and sample GA4 pricing in Google Marketing Platform. [Google explains how to access the preview](https://support.google.com/marketingplatform/answer/9013858), while noting that its displayed rates are not contractual and can vary by market.

If you're buying through a partner, ask for a breakdown of the base fee, billable-event tiers, property charges and included services. Check what happens when volume grows and what support costs extra.

## What does paying for GA360 change?

GA360 raises limits within GA4 and adds enterprise capabilities. It does not replace GA4 with a simpler analytics product.

Here are several differences from [Google's Standard versus 360 documentation](https://support.google.com/analytics/answer/11202874):

| Capability | GA4 Standard | GA4 360 |
|---|---|---|
| Event parameters | 25 per event | 100 per event |
| Audiences | 100 per property | 400 per property |
| Daily BigQuery export | 1 million events | Billions of events |
| Enterprise service-level agreements | Not included | Available under a 360 contract |

Longer retention is another reason organizations consider upgrading. But the often-mentioned 14-month limit in free GA4 does **not** mean all your traffic reports disappear after 14 months. Google's [retention setting applies to explorations and funnel reports](https://support.google.com/analytics/answer/7667196), not standard aggregated reports. GA360 offers longer options, with restrictions depending on property size.

The useful question is which specific limit prevents you from doing your work. If you need a larger daily export, that is a capacity requirement. If colleagues struggle to find campaign results, a higher export limit will not address it.

## What does your analytics setup cost to run?

Use your own invoices and working hours to calculate this. An invented estimate of agency fees or lost revenue tells you little about your organization.

| Cost | What to include |
|---|---|
| Subscription | Your GA360 quote or renewal price; zero for standard GA4 |
| Additional usage | Charges outside the included event allowance |
| External services | Implementation, maintenance and support not already included |
| Infrastructure | Relevant warehouse storage, queries or tagging infrastructure |
| Consent management | The analytics-related share, if applicable |
| Internal time | Hours spent maintaining tracking and producing reports |

Keep one-time setup costs separate from recurring costs. Avoid counting support twice if it is already bundled into the license. If other tools require your consent platform, replacing analytics will not remove that whole bill.

For internal time, start with one month. Record how long your team spends maintaining events, building reports and resolving discrepancies. Multiply those hours by your own cost estimate rather than a generic industry rate.

Some of that work remains useful with any tool. The question is how much of it helps you understand your website and how much exists to keep the setup working.

## Do you need more analytics capacity or a different approach?

Start with the decisions your team makes.

Suppose you run a busy SaaS website. Every month, your marketing team wants to know which campaigns bring trial signups, which landing pages convert and where visitors leave the signup flow.

Those are website performance questions. They do not inherently require recognizing the same person across a phone, laptop and mobile app, then using that identity to build an advertising audience.

If those cross-device and advertising workflows are central to your business, include them explicitly in your evaluation. Google's [Analytics 360 positioning](https://marketingplatform.google.com/about/analytics-360/) is built around customer measurement and integration with its advertising products.

But high traffic alone does not establish that need. A publisher with millions of monthly pageviews may primarily need to understand readership, referral sources and subscriptions. The scale is substantial. The questions can still be straightforward.

Before upgrading or renewing, list the reports people actually use and the decisions they support. Then identify the capabilities those reports depend on. That gives you a concrete basis for choosing your analytics.

## How Plausible answers website questions at scale

We built Plausible so website owners can understand their audience without tracking individuals. We don't use cookies or collect personal data about website visitors. We don't run an advertising business or sell your analytics data. Our business is providing analytics that people choose to pay for.

That approach extends to large organizations. Plausible runs on European-owned infrastructure, with visitor data processed and stored in the EEA. Our [Enterprise offering](/enterprise-web-analytics) supports large teams and high-traffic sites. The largest site in our network receives around one billion monthly pageviews.

For the SaaS team above, the reporting could look like this:

| Question | How to answer it in Plausible |
|---|---|
| Which campaigns bring trial signups? | Set a signup goal and break conversions down by campaign |
| Which landing pages convert? | Filter by that goal and compare entry pages |
| Where does the signup flow lose visitors? | Define the steps with funnel analysis |
| What paths lead to a conversion? | Explore user journeys backwards from a goal |
| Which sources bring sales? | Send purchase values with a custom event and use revenue tracking |

The dashboard covers traffic out of the box. Goals, funnels and revenue measurement need the relevant configuration. You choose what to measure because it answers a question, rather than collecting extra events just in case.

[Explore our live dashboard](https://plausible.io/plausible.io) to see how the reports work.

### Enterprise requirements without individual profiling

Depending on your agreed plan, Enterprise can include Single Sign-On (SSO), the Sites API, a managed proxy and scheduled raw event data exports. Higher traffic limits do not require taking every Enterprise feature.

The details matter. [Scheduled raw event data exports](https://plausible.io/docs/raw-data-export) deliver event- and session-level data daily to S3-compatible object storage. You can load that data into your warehouse, but it is not a native real-time BigQuery feed. Plausible also deliberately avoids persistent cross-device visitor profiles and remarketing audiences.

Check those requirements before switching. See our [subscription documentation](https://plausible.io/docs/subscription-plans) for the available features and limits.

### What about Plausible Enterprise pricing?

As of October 2026, even our highest-priced active Enterprise subscription costs less annually than GA4 360's reported $50,000 starting price. That describes our current subscriptions, rather than a price ceiling for every future custom plan.

Your Plausible quote depends on usage and requirements. Billable usage includes pageviews and custom events, so don't assume your GA4 event count translates directly into a Plausible tier.

[Tell us what you need to measure](https://plausible.io/contact), along with your traffic volume, number of sites and Enterprise requirements. We can put together a plan around that work.

## Check the reports before committing to the bill

An analytics upgrade should help your team make decisions. Start with the questions your colleagues need answered, then check the cost and complexity of answering them.

If your current setup depends on Google's advertising and customer-identity workflows, account for those dependencies. If you primarily need to understand website traffic and conversions, evaluate what Plausible can do with less visitor data and a simpler dashboard.

You can [start a 30-day free trial](https://plausible.io/register) with no credit card required and run Plausible alongside your current analytics. The standard trial includes Business plan features. [Contact us](https://plausible.io/contact) to arrange an evaluation of Enterprise requirements such as SSO or scheduled exports.

Compare whether you can produce the reports you need, how much work they take and how the tools' measurement methods differ. The totals will not necessarily match. The aim is to choose a setup whose numbers you understand and can use.
