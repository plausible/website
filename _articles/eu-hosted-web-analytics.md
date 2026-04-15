---
layout: article
title: EU-hosted web analytics with no data transfers outside Europe
description: Plausible Analytics is incorporated, built and hosted in the EU.
  All visitor data is processed on European-owned infrastructure and never
  leaves the EU.
permalink: /eu-hosted-web-analytics
---
Plausible Analytics is incorporated in Estonia, built by a team based in the EU and hosted entirely on infrastructure owned by European companies. All visitor data we collect on your behalf is processed and stored in the EU. It never leaves.

This is not a configuration option or an add-on. It is simply how Plausible works.

![EU-hosted and GDPR-compliant web analytics](/uploads/plausible-eu-hosted.png "EU-hosted and GDPR-compliant web analytics")

1. Ordered list
{:toc}

## Why EU hosting matters legally

The GDPR restricts transfers of personal data outside the European Economic Area unless specific conditions are met. Chapter V of the GDPR requires that any transfer to a third country provides an equivalent level of protection to what the GDPR guarantees inside the EU.

For transfers to the United States, this has been contested repeatedly. The Schrems II ruling by the Court of Justice of the EU invalidated the previous Privacy Shield framework in 2020. Since then, regulators across Europe have found that using US-based analytics services, including Google Analytics, can constitute an unlawful data transfer, because US companies remain subject to surveillance laws that allow US intelligence services to access data about European citizens. We covered this in detail in our post on [why Google Analytics was found to be illegal](https://plausible.io/blog/google-analytics-illegal) in several EU countries.

If your analytics provider is a US company or stores data on US-owned infrastructure, this is a live legal risk that your DPO and legal team may need to account for.

## What EU hosting means in practice for Plausible

Plausible is incorporated as a legal entity in Estonia. Our team is based in the EU. All visitor data is processed and stored exclusively on servers and cloud infrastructure owned and operated by European companies. No visitor data is transferred to the United States or any other country outside the EEA.

All visitor data is stored on servers owned by Hetzner, a German company, in Falkenstein, Germany. We use UpCloud, a Finnish company, for database hosting and storage of data exports. We use Bunny, a Slovenian company, as our CDN. These are the only three providers that touch visitor data, and all three are European-owned. We do not use US-owned cloud providers for data storage or processing. This is not a checkbox we tick for compliance purposes. It is a deliberate infrastructure decision that we have maintained for years.

Because Plausible does not collect personal data or use cookies, the baseline legal risk is lower to begin with. But even the data we do collect stays in the EU.

## For legal and procurement teams

We provide the following documents to support your compliance review:

* [Data policy](https://plausible.io/data-policy): what we collect, how we store it and where
* [Privacy policy](https://plausible.io/privacy): how we handle data as a company
* [Data Processing Agreement (DPA)](https://plausible.io/dpa): for organizations that require a formal DPA with their analytics vendor
* [GDPR legal assessment](https://plausible.io/blog/legal-assessment-gdpr-eprivacy): an independent review by a data protection lawyer confirming that Plausible can be used without cookie consent and without violating GDPR
* [Subprocessors](https://plausible.io/privacy#what-we-collect-what-we-use-it-for-and-services-we-use): the third-party services we use to operate Plausible, all bound by data protection agreements

If your legal team has further questions about how data is handled or needs additional documentation, [contact us](https://plausible.io/contact).

## How this compares to Google Analytics and other US-hosted tools

Google Analytics is owned by Google, a US company, and data is processed on Google's infrastructure. Under GDPR and the Schrems II ruling, using Google Analytics has been found to be non-compliant by data protection authorities in Austria, France, Italy, Denmark and other EU member states.

Many other popular analytics tools are also incorporated in the US or rely on US-owned cloud providers, which creates similar transfer risk regardless of where they claim to store data.

Plausible has no US parent company, no US investors with board control, and no US infrastructure. Your data is not subject to US surveillance law.

The EU-U.S. Data Privacy Framework (DPF), adopted in 2023, is the current mechanism US companies use to justify EU data transfers. It replaced Privacy Shield, which was invalidated by the Schrems II ruling. The DPF is already facing a new legal challenge from the same group, and the structural issue that led to the Schrems II ruling, that US surveillance law applies to US companies regardless of where data is stored, has not changed. EU hosting sidesteps this uncertainty entirely.

## Open source and independently verifiable

Plausible is [open source](https://plausible.io/open-source-website-analytics). Our code is publicly available on [GitHub](https://github.com/plausible/analytics/). Anyone can audit exactly what data we collect, how we process it and where it goes.

We also offer a [self-hosted version](https://plausible.io/self-hosted-web-analytics) for organizations that want to run Plausible on their own infrastructure entirely.

## Who uses Plausible

Plausible is trusted by {{ site.data.site.subscriber_count }} paying subscribers worldwide, including government organizations, universities and enterprises operating under strict privacy and data residency requirements. The Scottish and Welsh governments, the Python Software Foundation, Harvard University and Sentry are among the organizations that have chosen Plausible.

Many of these organizations chose Plausible specifically because of where their data is hosted and how it is handled.

## Get started

You can [try Plausible free for 30 days](https://plausible.io/register) without a credit card. If you have procurement or compliance questions, [contact us](https://plausible.io/contact).