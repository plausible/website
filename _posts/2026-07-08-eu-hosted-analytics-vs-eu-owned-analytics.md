---
layout: post
title: EU-hosted analytics is not the same as EU-owned analytics
description: EU-hosted analytics can help with data residency, but it does not always mean EU ownership or European-owned infrastructure.
slug: eu-hosted-analytics-vs-eu-owned-analytics
date: 2026-07-09T10:50:55.000Z
author: hricha-shandily
image: /uploads/eu-hosted-vs-eu-owned-analytics.png
image-alt: Illustration comparing EU-hosted analytics with EU-owned analytics
---

More analytics tools now advertise "EU hosting", "EU data residency" or an "EU region". That sounds reassuring, especially if you're choosing an analytics tool for privacy or GDPR reasons.

But EU-hosted does not always mean EU-owned. And that difference matters.

EU hosting tells you something useful about data location. It does not, by itself, answer who owns the company, who controls the infrastructure or which jurisdiction applies to the provider.

*This is not legal advice. It is a practical guide to the questions worth asking when you review analytics vendors. If your organization has strict GDPR, procurement or data transfer requirements, involve your legal or data protection team.*

1. Ordered list
{:toc}

## What EU-hosted usually means

When vendors say "EU-hosted", they often mean one of several different things:

* Your data is stored in an EU data center.
* You can select an EU region when creating a project.
* EU visitor traffic is routed through EU infrastructure.
* Some data stays in the EU, while other processing or support access may still happen elsewhere.
* EU residency is available only on certain plans or only if you configure the SDK correctly.

Those details matter.

That is why "EU-hosted" should be treated as the start of the conversation, not the end of it.

## What EU-owned adds

EU-owned analytics answers a different set of questions:

* Who is the legal entity providing the service?
* Is the company incorporated in the EU or EEA?
* Who owns and operates the infrastructure?
* Are there US-owned cloud providers or subprocessors touching visitor data?
* Is EU processing the default, or a configuration option?
* Is the provider subject to foreign jurisdiction, such as US disclosure laws?

Think of it as three layers:

| Layer | What it tells you | What it does not tell you |
|---|---|---|
| EU-hosted | The data is stored or processed in a European data center | Who owns the company or infrastructure |
| EU-operated | The service is provided by an EU or EEA legal entity | Whether all infrastructure and subprocessors are European |
| EU-owned infrastructure | The servers or cloud infrastructure are owned by European companies | Whether the analytics product itself is privacy-friendly |

For example, a tool could store analytics data in Frankfurt but still be operated by a US-incorporated company. Another tool could be incorporated in Europe but rely on a US-owned cloud provider for key parts of its service. Both setups may be perfectly acceptable for some organizations, but neither is the same as an EU-owned analytics provider using European-owned infrastructure by default.

The difference is not just theoretical. [18 USC 2713](https://www.law.cornell.edu/uscode/text/18/2713) says that a provider of electronic communication service or remote computing service must comply with obligations to preserve, back up or disclose covered information within its "possession, custody, or control" regardless of whether that information is located inside or outside the United States.

Whether and how that law applies to a specific analytics vendor is a legal question. But it illustrates the broader point: server location alone does not answer every jurisdiction question.

## How this helps you decide

EU-owned analytics makes the most sense when your goal is to reduce the number of privacy and procurement questions you need to resolve.

If a vendor is non-EU-owned, or if it relies on non-EU-owned infrastructure for visitor data, you may need to spend more time reviewing:

* whether personal data is transferred outside the EU or EEA
* which transfer mechanism applies
* whether additional safeguards are needed
* whether foreign disclosure laws are relevant
* which subprocessors can access visitor data
* whether EU residency is the default or something your team must configure correctly

That does not mean a non-EU provider is automatically unsuitable. It means the review is usually more involved.

The European Data Protection Board's [Recommendations 01/2020](https://www.edpb.europa.eu/documents/recommendation/recommendations-012020-on-measures-that-supplement-transfer-tools-to_en) exist because international transfers can require transfer tools and supplementary measures to ensure an EU level of protection. If you can choose an analytics provider where the company, hosting and visitor-data infrastructure are all European, you can often avoid a lot of that extra transfer analysis in the first place.

That is the practical reason EU-owned can make more sense. It is not a magic compliance badge. It is a simpler, lower-friction starting point for teams that care about privacy, GDPR and vendor risk.

## Why this became a bigger issue after Schrems II

The reason people care about this is not because of a vague preference for European vendors. It comes from years of legal uncertainty around EU-US data transfers.

In 2020, the Court of Justice of the European Union invalidated the EU-US Privacy Shield in the [Schrems II ruling](https://curia.europa.eu/jcms/upload/docs/application/pdf/2020-07/cp200091en.pdf). The Court's press release explains that GDPR transfers to a third country generally require an adequate level of protection, or appropriate safeguards and enforceable rights.

The [EU-US Data Privacy Framework](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-transfers_en) is the current adequacy mechanism for participating US companies. The European Commission says the framework was adopted after new US safeguards were introduced to address points raised by the Court in Schrems II. The need for that framework itself shows why jurisdiction remains part of the privacy conversation.

So when a vendor promotes EU hosting, the useful follow-up is: EU hosting under whose control?

## Examples from analytics tools

You can see the difference across the analytics market.

Some tools offer EU data residency while remaining operated outside the EU.

[Google's Analytics documentation for EU, Switzerland and UK data](https://support.google.com/analytics/answer/12017362?hl=en) says that data from devices in those regions is collected through local domains and servers before traffic is forwarded to Analytics servers for processing. [Google's data processing terms](https://business.safety.google/adsprocessorterms/) also say that Google may process customer personal data in any country where Google or its subprocessors maintain facilities. That is a useful example of the distinction: regional collection is not the same thing as EU-only processing or EU ownership.

[Mixpanel's EU residency documentation](https://docs.mixpanel.com/docs/privacy/eu-residency) says that Mixpanel stores user data on US servers by default, while giving customers the option to process and store customer personal data in Europe through its EU Data Residency Program. It also says new EU projects must send data to the EU endpoint, and that projects using the wrong residency location need to create a new project and migrate data.

[PostHog's privacy policy](https://posthog.com/privacy) says its hosted services are offered by PostHog Inc., and that PostHog is headquartered in the United States. Its [privacy compliance documentation](https://posthog.com/docs/privacy) says PostHog Cloud EU is a managed version with servers hosted in Frankfurt. Again, the EU cloud option may be useful for many teams, but it is not the same claim as being an EU-incorporated analytics provider on European-owned infrastructure.

Matomo is a good reminder that not every non-EU example is the same. Its [Cloud privacy policy](https://matomo.org/matomo-cloud-privacy-policy/) says personal data in a customer's Matomo Cloud instance and backups are stored in Europe, while InnoCraft, the company behind Matomo, is based in New Zealand. Matomo also notes that New Zealand has an EU adequacy decision, which the [European Commission lists among its adequacy decisions](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en). That is a different legal posture from a US-operated provider, but it still shows why "where data is stored" and "who operates the service" are separate questions.

This distinction is now showing up in SaaS vendor research too. For example, FoundersDeck's [EU SaaS Jurisdiction Database](https://foundersdeck.dev/eu-jurisdiction-database) separates legal entity, hosting, EU residency and CLOUD Act exposure instead of treating "EU region available" as the whole answer. Databases like this can be useful starting points, but you should still verify each vendor's legal entity, infrastructure and subprocessors against the vendor's own documentation.

The important thing is not to assume based on a badge or a landing page phrase. Check the legal entity, infrastructure and subprocessors.

## What Plausible means by EU-hosted

At Plausible, EU hosting is not a checkbox or an enterprise add-on.

Plausible is incorporated in Estonia, built by a team based in the EU and hosted on infrastructure owned by European companies. Visitor data is processed and stored in the EU. It is not transferred to the United States or any other country outside the EU.

In practice, that means:

* Visitor data is processed and stored in the EU.
* We store visitor data on servers owned by Hetzner, a German company, in Falkenstein, Germany.
* We use UpCloud, a Finnish company, for database hosting and storage of data exports.
* We use Bunny, a Slovenian company, as our CDN, while analytics processing and storage stays on our EU infrastructure.
* These are the only three providers that touch visitor data, and all three are European-owned.
* We do not use US-owned cloud providers such as AWS, Google Cloud or Microsoft Azure to store or process visitor data.
* We do not sell visitor data, share it with advertising companies or use it to build profiles across websites.

This is not a regional toggle we added for compliance purposes. It is a deliberate infrastructure decision. It is EU-ownership by design.

For the fuller version, including links for legal and procurement teams, see our [EU-hosted analytics page](https://plausible.io/eu-hosted-web-analytics), [data policy](https://plausible.io/data-policy), [privacy policy](https://plausible.io/privacy) and [DPA](https://plausible.io/dpa).

This ownership and infrastructure setup is only one part of the privacy story. Plausible is also designed for simple reach measurement without cookies, cross-site tracking or advertising profiles. For the consent and data minimization side, see this [independent legal assessment of Plausible under GDPR and the ePrivacy Directive](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) written by Steffen Gross, a data protection expert and lawyer.

This is the difference between saying "your data can be hosted in Europe" and saying "your analytics runs under European ownership and European infrastructure by default".

## What to ask before choosing an analytics tool

If you're choosing analytics for privacy, GDPR or procurement reasons, don't stop at the hosting claim. Ask three simple questions:

* Where is visitor data processed and stored?
* Who owns the company, infrastructure and subprocessors involved?
* Is EU handling the default, and can the vendor document it clearly?
