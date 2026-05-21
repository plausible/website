---
layout: article
title: "Plausible vs Google Analytics 4 (GA4): What changed and why people are switching"
description: GA4 is a fundamentally different product from Universal Analytics. If you're reconsidering your setup, here's how Plausible compares and what you actually gain by switching.
permalink: /vs-google-analytics
---

Google didn't upgrade Google Analytics in 2023. They replaced it. Universal Analytics was shut down, historical data was deleted, and everyone using Google Analytics was moved onto a product built from scratch around Google's advertising infrastructure, not around the needs of website owners.

If you're using GA4 and wondering whether it's still the right tool, that's a reasonable question. Here's a direct comparison.

| | Plausible | Google Analytics 4 |
|---|---|---|
| Cookie consent banner required | No | Yes |
| Personal data collected | No | Yes |
| Script blocked by ad blockers | Rarely | Often |
| Data modeled or estimated | No | Yes (consent mode) |
| Data retention | From 3 years | 14 months on free plan |
| Setup complexity | One script tag | Tag Manager, events, custom reports |
| Hosted in the EU | Yes | No |
| Open source | Yes | No |

![Plausible vs Google Analytics 4 comparison](/uploads/plausible-vs-ga.png "Plausible vs Google Analytics 4 comparison")

1. Ordered list
{:toc}

## What GA4 changed and why it matters

### GA4 replaced real data with estimated data

This is the most consequential change and the least discussed one.

GA4 introduced "consent mode": a system that, when a visitor declines cookie consent, fills the gap with behavioral modeling. GA4 estimates what that visitor probably did based on similar users who did consent. You are no longer looking at what happened on your site. You are looking at a blend of what happened and what Google's model thinks happened.

On sites with high opt-out rates, that modeling can represent a large share of reported traffic. There is no way to distinguish modeled data from real data in standard GA4 reports.

Plausible collects no personal data and requires no consent banner. Every visit in your dashboard is a real visit.

### GA4 became significantly harder to use

Universal Analytics had flaws, but you could get to the numbers you needed. GA4 rebuilt the interface around Google's event-based data model: a model designed for app telemetry and then applied to websites.

The result: basic tasks that took one click in Universal Analytics now require setting up custom events in Tag Manager, navigating "Explorations" (a separate reporting surface from the main dashboard), or writing SQL queries against a BigQuery export. Google provides no real support when something isn't working.

Plausible gives you all the important metrics on one page: visitors, sources, pages, countries, devices, goals and revenue attribution. You can invite team members, connect to Search Console, build custom reports in Looker Studio, import your historical data and use features like funnels and realtime reporting. See what it looks like on our [live demo](https://plausible.io/plausible.io).

### GA4 made accuracy worse, not better

GA4 misses a substantial share of traffic compared to what actually visits your site.

The consent banner alone accounts for most of it. [An independent study](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) found that GA4 fails to capture an average of 55.6% of traffic compared to cookieless analytics. Use our [cookie banner traffic loss calculator](/cookie-banner-traffic-loss-calculator) to estimate the gap on your own site.

Beyond consent, GA4 is part of the adtech ecosystem. Most adblockers target it specifically. With tech-savvy audiences, the share of people [blocking Google Analytics](https://plausible.io/blog/google-analytics-adblockers-missing-data) can reach 60%.

Plausible doesn't require consent and isn't part of the adtech ecosystem, so it's far less likely to be blocked. You can also [proxy our script](https://plausible.io/docs/proxy/introduction) through your own domain for first-party collection. Additional accuracy improvements built in by default:

* Known referrer spam and data center traffic is filtered out. We exclude around 32,000 data center IP ranges to prevent bot inflation that GA4 doesn't handle automatically.
* Android app traffic is properly attributed. GA4 traditionally lumps this into "Direct / None." For sites with significant mobile traffic, this accounts for 10% or more of previously unattributed visits from apps like Gmail, Slack and Telegram.
* VPN and Tor traffic is grouped under "Anonymous VPN Service" to reduce location noise.

We also tested this directly. See [how Plausible handled bot traffic](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics) in a head-to-head test with GA4. [Here are more reasons](/most-accurate-web-analytics) Plausible is more accurate than GA4.

### GA4 created legal exposure

Since January 2022, data protection authorities in Austria, France, Italy, Denmark, Finland, Norway and Sweden have ruled that [using Google Analytics violates GDPR](https://plausible.io/blog/google-analytics-illegal). The rulings relate to EEA-US data transfers under Schrems II.

Staying compliant with GA4 requires cookie consent banners, a detailed privacy policy covering analytics tracking and in many cases a paid consent management platform. Each of those adds cost and friction.

Plausible processes all visitor data on servers owned and operated by European providers. Your data never leaves the EU. Because Plausible doesn't use cookies or collect personal data, you don't need consent notices for analytics at all.

An independent [legal assessment comparing Plausible and Google Analytics](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) written by a data protection lawyer is available if you want the detail.

### GA4 is built for Google's business, not yours

Google Analytics is free because collecting behavioral data from millions of websites serves Google's advertising operation. Your visitors' data flows back to Google and becomes part of the system that powers ad targeting.

GA4 was specifically designed to make that data collection work in a world with more privacy restrictions. For Google's benefit, not yours. Consent mode exists to keep the data flowing even when users opt out.

Universal Analytics was shut down when it stopped serving that purpose, with no real migration path and years of historical data deleted. GA4 will be no different when Google's priorities shift again.

Plausible doesn't participate in that model. No personal data is collected or shared. Nothing is sold to third parties. We don't track visitors across sites. Your data stays in your account, in the EU, and is not used for anything other than showing you your own stats.

If you prefer full control, you can self-host Plausible on your own server. Our [source code](https://github.com/plausible/analytics/) is publicly available on GitHub and anyone can audit exactly how data is handled.

## Faster and lighter

Every script you add to a page has a performance cost. The Google Analytics tracking script is {{ site.data.site.ga4_script_kb }}KB gzipped. Plausible's is {{ site.data.site.plausible_script_kb }}KB, which is {{ site.data.site.script_ratio }} times smaller.

This matters for your visitors and for search rankings. See how the difference compounds with our [analytics script size calculator](/google-analytics-script-size), or read more about what makes Plausible a [lightweight analytics tool](/lightweight-web-analytics).

## What GA4 does better

If you need deep custom attribution modeling or enterprise-scale reporting with SQL access, GA4, especially with BigQuery, has more depth. If your business runs heavily on Google Ads, the tight integration between GA4 and Google's ad products is hard to replicate elsewhere.

For most site owners who want to understand where their traffic is coming from and what's working, that depth comes with overhead that is rarely justified.

## Why isn't Plausible free while GA4 is free?

GA4 is free because Google's business runs on data. Collecting analytics from millions of websites is part of how they build the behavioral profiles that power their ad network.

Plausible doesn't use that model. We charge a subscription to cover costs and keep the product independent.

"Free" is also relative. GA4 comes with [hidden costs](https://plausible.io/paid-analytics-vs-free-ga): time spent learning a complex interface, consent management platforms, legal exposure in GDPR-regulated markets and developer time maintaining a compliant setup. When you factor those in, Plausible often costs less in practice. See our [pricing page](https://plausible.io/#pricing).

## Ready to switch?

You can [import your historical Google Analytics data](https://plausible.io/docs/google-analytics-import) so you don't lose your historical stats. For a full walkthrough, see the [GA to Plausible migration guide](/migrate-from-google-analytics).

[Start your 30-day free trial](https://plausible.io/register) with no credit card required.
