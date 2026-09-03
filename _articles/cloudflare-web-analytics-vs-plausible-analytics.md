---
layout: article
title: "Cloudflare Web Analytics vs Plausible: A dedicated tool vs a side feature"
description: Cloudflare Web Analytics is free and privacy-friendly, but it is a limited side feature. Compare it with Plausible on history, campaigns, goals and independence.
permalink: /vs-cloudflare-web-analytics
cta_headline: "Ready for a dedicated analytics tool?"
---
Cloudflare Web Analytics gives you a free, privacy-friendly traffic overview. Plausible is a dedicated analytics product, built by an independent company funded entirely by subscribers. That difference shapes the history you can keep, the questions you can answer and whose priorities the product serves.

Plausible is for people who want to replace Google Analytics with a simple tool that respects visitors without reducing analytics to a short-lived traffic report. Cloudflare Web Analytics can cover the basics, but analytics is not Cloudflare's core business.

## Choose based on the tradeoff

| Choose Plausible if... | Cloudflare Web Analytics may be enough if... |
| --- | --- |
| You want long-term traffic and conversion history. | You only need a free overview of recent traffic and web performance. |
| You need campaigns, goals and custom events. | Page views, visits and basic traffic sources are enough. |
| You want open source analytics from an independent, subscriber-funded company. | You are comfortable using a closed source feature from your CDN provider. |

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "We recently set up Plausible Analytics for web analytics and have been loving it."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Steven Tey</span>, Founder and CEO at Dub.co
  </figcaption>
</figure>

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "After evaluating multiple vendors, we eventually landed on Plausible. These reasons and the ease of use of this product have made an otherwise hard decision a lot easier."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Ivar Østhus</span>, CTO and co-founder at Unleash
  </figcaption>
</figure>

{% include cta-buttons.html %}

![Cloudflare Web Analytics vs Plausible Analytics](/uploads/plausible-vs-cloudlare-analytics.png "Cloudflare Web Analytics vs Plausible Analytics")

1. Ordered list
{:toc}

## What is Cloudflare Web Analytics?

Cloudflare uses "Analytics" for several products. Its HTTP traffic analytics measure requests at Cloudflare's network edge for sites using its proxy. Cloudflare Web Analytics is different: it uses a JavaScript beacon in the browser to measure page views, visits and web performance.

This page compares Plausible with the client-side Web Analytics product. You can read more about the difference between [client-side and server-side analytics](https://plausible.io/blog/server-log-analysis).

Cloudflare Web Analytics does not use cookies or collect visitors' personal data. That sounds similar to [what Plausible does](https://plausible.io/privacy-focused-web-analytics), but the products diverge once you need more than a basic traffic overview.

## Cloudflare keeps six months of history

Cloudflare Web Analytics lets you access data from the previous six months. That is enough for recent trends, but anything older is unavailable.

Six months still rules out year-on-year comparisons and makes it harder to understand seasonality. If last year's launch, holiday period or traffic decline falls outside the window, you cannot compare against it.

Plausible retains your data for a minimum of three years across all plans.

## Older and larger Cloudflare reports may be sampled

Cloudflare says it records every beacon and keeps unsampled data for seven days. After that, it aggregates the data down to around 10% of the original volume for longer-term storage.

Cloudflare also dynamically selects a sampling level when you view data in its dashboard or query its GraphQL API. The level depends on the filters, traffic volume and query complexity. This keeps a free service fast at scale, but some reported totals are estimates rather than direct counts. See [Cloudflare's explanation of retention and sampling](https://developers.cloudflare.com/web-analytics/faq/).

Plausible does not sample your traffic. Every recorded page view and custom event contributes to the dashboard.

## Cloudflare does not support UTM parameters or custom events

Cloudflare Web Analytics does not log query strings, so it cannot report UTM campaign parameters. It also does not support custom events.

That means you cannot use it to separate email, paid and social campaigns using UTM tags. You also cannot measure actions such as signups, purchases, downloads or form submissions as custom events.

Plausible includes [UTM campaign tracking](https://plausible.io/blog/utm-tracking-tags), pageview goals and custom event goals. These let you connect traffic sources to the outcomes your website exists to produce.

## A side feature and a dedicated analytics product evolve differently

Cloudflare Web Analytics covers the basics: page views, visits, referrers, countries and devices. Beyond that, it gets thin.

Plausible is built as a dedicated analytics product. You get live visitor counts, bounce rate, visit duration, campaigns, goals and custom events. These are proof of the difference in focus: Plausible helps you understand not only where traffic came from, but whether it did anything useful.

The difference comes down to focus. For Cloudflare, web analytics is a small side feature. For Plausible, it's the entire product. That shows in what gets built, how fast things improve and how much attention goes into getting the details right.

Cloudflare can absorb the cost of offering analytics for free precisely because it's a minor feature for them. Keeping it free means keeping it limited. Plausible is funded entirely by subscribers, which is what lets a small independent team work on it full time.

## Cloudflare and Plausible define visits differently

The headline numbers from Cloudflare and Plausible should not be expected to match.

Cloudflare defines a visit as a page view that came from a direct link or an HTTP referrer outside the current hostname. One visit can contain multiple page views.

Plausible groups page views into sessions and estimates unique visitors using a daily changing identifier generated from the visitor's IP address and User Agent, run through a hash function with a rotating salt. This gives you separate visitor and visit metrics without cookies or persistent identifiers. You can read more in [our data policy](https://plausible.io/data-policy).

## Open source vs closed source

Plausible is [open source](https://plausible.io/open-source-website-analytics). Our source code is publicly available on GitHub. You don't have to take our word for what we do with your visitors' data. Read the code yourself, or rely on the community that already has.

Cloudflare Web Analytics is closed source. There is no way to verify what happens when their script runs on your site.

## EU hosting and data jurisdiction

Plausible is incorporated in the EU. All visitor data is processed on European-owned servers and stays under European law.

Cloudflare is a US company operating a global network. If keeping your analytics with an EU company and on European-owned infrastructure is a requirement, Plausible gives you that boundary. See our [EU hosting page](https://plausible.io/eu-hosted-web-analytics) for details.

## Which tool is right for you?

Cloudflare Web Analytics is enough if you want a free overview of recent traffic and web performance, and six months of history is sufficient. Its lack of campaigns and custom events is the tradeoff.

Choose Plausible if website analytics informs real decisions. You keep years of history, connect campaigns to conversions and use a product built entirely around simple, privacy-first measurement rather than a feature attached to a CDN business.

## Try Plausible free for 30 days

Hugging Face, Ghost, Basecamp, Home Assistant and thousands of others use Plausible. [Sign up for a 30-day free trial](https://plausible.io/register). No credit card required. Run it alongside your current tool and see how the numbers compare.
