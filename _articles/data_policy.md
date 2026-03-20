---
layout: article
title: "Plausible: GDPR, CCPA and cookie law compliant site analytics"
description: Plausible provides cookie-less web analytics without collecting
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

We do not track people across their devices or across websites and apps. All data is isolated to a single day, a single website and a single device. There is no way to know whether the same person visits a site from more than one device or visits another website.

The goal of Plausible is to track overall trends in your website traffic, not individual visitors. We don't use cookies, we don't generate persistent identifiers and we don’t collect or store personal data that can be used to identify individuals. All data is aggregated.

By using Plausible Analytics, all site measurement is carried out anonymously. We measure only the most essential data points and nothing else.

Here is the complete list of what we collect and store:

| Data point | Example | Comment |
|---|---|---|
| **Page URL** | _https://yoursite.com/pricing_ | Hostname and path are collected. Query parameters are discarded except for `ref`, `utm_*` and similar campaign parameters. |
| **HTTP Referer** | _https://facebook.com_ | Used to show referral sources. |
| **Browser** | _Chrome 86.0_ | Derived from User-Agent. Full User-Agent is discarded. |
| **Operating system** | _macOS 10.15_ | Derived from User-Agent. Full User-Agent is discarded. |
| **Device type** | _Desktop_ | Derived from User-Agent. |
| **Country, region, city** | _United Kingdom, England, London_ | Derived from IP address. IP address is not stored. |

---

## How we count unique users without cookies

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

Last updated: March 2026  
Clarifications only. No material changes to data handling.
