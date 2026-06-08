---
layout: article
title: "Cookieless web analytics: accurate data without the consent banner"
description: Plausible Analytics is built cookieless by design. No persistent identifiers, no consent banners and no data gaps from visitors who declined tracking. GDPR and CCPA compliant by default.
permalink: /cookieless-web-analytics
cta_headline: "Ready for analytics without the cookie banner?"
---

Most analytics tools were built around individual tracking. To connect a visitor's first visit to a return visit, a paid ad click to a conversion, you need a persistent identifier. Cookies became the default because they made that possible.

That model worked until privacy regulations caught up with it. GDPR, CCPA and similar laws require informed consent before placing persistent identifiers on a visitor's device. Consent requires a banner. And every visitor who declines or ignores the banner disappears from your data.

[Plausible](https://plausible.io/) was built without cookies or any persistent identifiers. Not as a workaround for regulations, but because individual tracking was never the goal. The result is analytics that works for the full range of your visitors, requires no consent banner under most privacy regulations and keeps your data complete by default.

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "I use Plausible for traffic analytics. Privacy-friendly, no cookie banner needed, lightweight script that doesn't slow down the page."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Joost de Valk</span>, founder of Yoast SEO
  </figcaption>
</figure>

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "Plausible has been really great at Sentry since we don't have user tracking on our website. Would recommend."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Matt Henderson</span>, Director of Growth at Sentry
  </figcaption>
</figure>

{% include cta-buttons.html %}

![Plausible: cookieless web analytics without consent banners](/uploads/plausible-cookieless-web-analytics.png "Plausible: cookieless web analytics")

1. Ordered list
{:toc}

## Why cookies became a compliance problem

Analytics tools like Google Analytics were built to track individuals. Knowing that the same person visited three times, arrived from a paid ad and then purchased requires connecting those events to a persistent identity. Cookies do that reliably, which is why they became the default.

The problem is not the cookie itself. The problem is what it represents: personal data collection tied to an identifiable device. Under GDPR, CCPA and similar laws, collecting personal data requires a legal basis. For most commercial websites, that basis is consent. Consent requires a banner. The banner creates a split: visitors who click accept get tracked, visitors who decline do not.

Google Analytics cannot measure what it has no permission to touch. The data gap that results is structural. It is not a configuration problem you can route around.

## How cookieless analytics works differently

Plausible does not use cookies or any persistent identifiers. To count unique visitors, we generate a random string of letters and numbers that is reset every 24 hours. There is no way to connect a visitor's activity across sessions, across days or across devices. There is no individual record to protect because no individual record is created.

Every metric on your Plausible dashboard is an aggregate count: how many visitors, how many pageviews, which pages were most visited, which sources sent the most traffic. That is what most site owners actually need to make decisions about their content, their campaigns and their product. We collect less and show you more of what matters.

Because no personal data is collected, no consent banner is required. No consent platform. No privacy policy addition. No ongoing compliance operation.

## The accuracy case for cookieless analytics

The consent model creates a measurable accuracy problem, and the numbers are not small.

EU-focused sites commonly see consent acceptance rates of 40–50%. A compliant GDPR banner must make declining consent as easy as accepting it, and visitors who are privacy-conscious or in a hurry decline more often than they accept. On US-focused sites acceptance rates are higher, around 65–75%, but the gap remains.

An [independent study by Orbit Media](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) comparing Google Analytics 4 to Plausible on the same site found that GA4 captured only 55.6% of actual traffic. The primary cause was consent declines, not ad blockers or tracking prevention.

The gap is also unevenly distributed in a way that makes it worse than it looks. Visitors from direct traffic or branded search already trust your site and accept at higher rates. Visitors from paid ads or cold organic search are encountering you for the first time. They decline more. That means GA's blind spot is largest where your acquisition data matters most: new visitors you paid to bring in.

Use the [cookie banner traffic loss calculator](/cookie-banner-traffic-loss-calculator) to estimate the size of this gap on your site. Sentry removed advertising cookies from their site in 2023 and published two detailed case studies on what happened: [We removed advertising cookies, here's what happened](https://blog.sentry.io/we-removed-advertising-cookies-heres-what-happened/) and [Two years without cookies on the site](https://blog.sentry.io/two-years-without-cookies-on-the-site/). Two years later they have not put the cookies back.

## No consent banner required

Cookie consent banners exist because personal data is being collected. Remove the personal data, and the legal basis for requiring consent goes away.

Because Plausible does not collect personal data or use persistent identifiers, no consent banner is required under most privacy regulations including GDPR and CCPA. An independent legal assessment of this was written by an experienced data protection expert and lawyer: [GDPR-compliant web analytics without consent](/blog/legal-assessment-gdpr-eprivacy).

This matters practically beyond just the banner itself. Cookie consent compliance involves a consent management platform, documented consent records, granular opt-out controls and ongoing audits of what fires after a decline. That is a non-trivial compliance operation that cookieless analytics removes the need for entirely.

Your visitors also get a cleaner experience. No modal asking them to make a decision before they can read your page. No dark pattern to ignore.

## The hidden overhead of cookie-based analytics

Running cookie-based analytics costs more than the legal compliance work.

Consent management platforms like OneTrust and Cookiebot are themselves large JavaScript bundles. They add their own weight to every page load, separately from the analytics script they are managing consent for. Running GA4 alongside Google Tag Manager and a consent platform typically pushes total third-party script weight past 285KB on many sites. That adds latency on every visit and hurts Core Web Vitals scores. The full breakdown is in our [lightweight web analytics page](/lightweight-web-analytics).

The banner itself is user experience friction. A portion of visitors close the tab when they see a consent prompt, without clicking accept or decline. These visitors never register in your analytics at all, not even as a declined consent event. They are simply gone. The real data gap is larger than your consent acceptance rate alone would suggest.

Switching to Plausible eliminates this layer: no consent platform, no banner, no performance cost from scripts that exist only to manage other scripts.

## Try Plausible free for 30 days

Plausible is [open source](https://plausible.io/open-source-website-analytics), hosted in the EU and funded entirely by subscribers. No advertising business, no data resale, no incentive to collect more than you need.

[Start your 30-day free trial](https://plausible.io/register). No credit card required. Add a single script tag alongside your existing setup and you'll see the difference in reported traffic from the first visit.
