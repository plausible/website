---
layout: article
title: "Plausible: GDPR, CCPA and cookie law compliant web analytics"
description: Plausible provides cookieless web analytics without collecting
  personal data and while respecting the privacy of website visitors. This is
  our data policy.
permalink: /data-policy
---

Even though the purpose of [Plausible Analytics](https://plausible.io) is to track the usage of a website, this can still be done without collecting personal data that could be used to identify individuals, without using cookies and while respecting the privacy of website visitors.

Here’s a closer look at what we collect, how we use it and how we comply with privacy regulations such as GDPR, CCPA and PECR.

![Plausible Data Policy](/uploads/plausible-data-policy.png "Plausible Data Policy")

1. Ordered list
{:toc}

## First things first: What we collect and what we use it for

The goal of Plausible Analytics is to understand overall trends in your website traffic. We don't use cookies or generate persistent visitor identifiers.

We do not track people across devices, websites or apps. The daily visitor identifier is specific to a single website and device. It does not let us recognize the same visitor across days, across devices or on another website.

We store individual event and session records to calculate your website statistics. The dashboard presents aggregated statistics.

We collect and store the following types of analytics data:

| Data point | Example | What we use it for |
|---|---|---|
| **Page URL** | `yoursite.com/pricing` | Shows which pages receive traffic. |
| **Referral sources and campaigns** | `facebook.com`, `utm_source=newsletter` | Shows where traffic and conversions come from. |
| **Browser, operating system and device type** | Chrome 153.0, macOS 10.15, desktop | Shows which browsers and devices visitors use. |
| **Country, region and city** | United Kingdom, England, London | Shows visitors' approximate locations. |
| **Engagement measurements** | Scroll depth, engagement time | Measures engagement with your pages. |
| **Pageviews and custom events (when configured)** | `pageview`, `Signup`, `Download` | Counts pageviews automatically and custom events according to your tracking setup. |
| **Custom properties (when configured)** | `author=Jane`, `category=Technology` | Adds information you choose to send with events. |
| **Revenue data (when configured)** | `49.00 EUR` | Measures revenue from conversions. |

We derive browser and operating system information from the User-Agent and approximate location from the IP address. We do not store raw User-Agent strings or IP addresses.

For page URLs, we store the hostname and path. Query parameters are discarded except for supported campaign and referral parameters.

We record when each event is received and use these records to calculate statistics such as entry and exit pages, pageviews per visit and visit duration. Session identifiers group events into visits.

The next section explains how we generate daily visitor identifiers without storing raw IP addresses or User-Agent strings.

---

## How we count unique visitors without cookies

We do not generate persistent identifiers. We do not use cookies, browser cache or local storage.

Every HTTP request includes IP address and User-Agent. We use these to generate a daily identifier:

```text
hash(daily_salt + website_domain + ip_address + user_agent)
```

The salt is rotated and deleted every 24 hours. Raw IP addresses and User-Agent data are never stored.

This approach prevents tracking users across days while still providing useful aggregate analytics.

---

## Hosted in the EU powered by European-owned infrastructure

We are a small team based in the EU. The legal entity is incorporated in Estonia.

All visitor data is securely processed and stored in the EU on infrastructure owned by European companies. This ensures compliance with EU data protection laws.

Visitor data does not leave the EU.

For full details on our infrastructure, subprocessors and what this means for GDPR compliance, see our [EU hosting page](https://plausible.io/eu-hosted-web-analytics).

We use trusted service providers where necessary to operate and provide the service.

---

## Data ownership of your web analytics

You retain full ownership and control of your website data.

We do not sell your data and only share it with trusted service providers where necessary to operate and provide the service.

Your data is not used for advertising, profiling or monetization.

You can delete your account and your site data at any time. All data will be permanently deleted without undue delay. Once deleted, it cannot be recovered.

---

## Why should I trust you?

Plausible is an [open source website analytics tool](https://plausible.io/open-source-website-analytics). Our source code is publicly available [on GitHub](https://github.com/plausible/analytics/).

This allows independent verification of our claims.

We also provide a [legal assessment of GDPR compliance](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) written by a data protection expert.

---

## GDPR, CCPA and PECR compliant web analytics

By using Plausible, you do not need cookie banners for analytics or to collect consent for tracking.

Your visitors can use your website without being tracked or profiled.

You can [sign up for a free trial](https://plausible.io/register) and explore privacy-friendly analytics without removing your current provider.

---

**Last updated: September 2026**  
Clarifications only. No material changes to data handling.
