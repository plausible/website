---
layout: article
title: "Cloudflare Web Analytics vs Plausible: A dedicated tool vs a side feature"
description: Cloudflare Web Analytics and Plausible are both simple, privacy-friendly alternatives to Google Analytics. Here's how they compare on accuracy, features, data retention and transparency.
permalink: /vs-cloudflare-web-analytics
---
Cloudflare Web Analytics entered the simple, privacy-first analytics market as a free alternative to Google Analytics. It's worth understanding exactly what you're getting and how it compares to a dedicated analytics tool like Plausible.

![Cloudflare Web Analytics vs Plausible Analytics](/uploads/plausible-vs-cloudlare-analytics.png "Cloudflare Web Analytics vs Plausible Analytics")

1. Ordered list
{:toc}

## What is Cloudflare Analytics?

Cloudflare offers two similar-sounding products. Cloudflare Analytics is a server-side tool that works through their DNS proxy. No script needed, but it includes all bot and spam traffic which makes the data unreliable. You can read more about [client side vs server side web analytics](https://plausible.io/blog/server-log-analysis) and the gap between them.

Cloudflare Web Analytics is different. It works client-side via a JavaScript snippet, is free to use, and is their response to tools like Google Analytics and Plausible. This is how they describe it: "Our analytics don't cookie your visitors, collect their personal information, or track them across sites. So if your site needs a cookie banner, it won't be because of us".

That sounds similar to [what Plausible does too](https://plausible.io/privacy-focused-web-analytics). So Cloudflare Web Analytics is what we'll compare here.

## Cloudflare has strict data retention limits

Cloudflare Web Analytics limits data retention to 30 days. That means anything older than a month is gone.

This makes year on year comparisons impossible and even quarter on quarter comparisons out of reach. For most site owners, 30 days of history isn't enough to spot trends or measure the impact of changes over time.

Plausible retains your data for a minimum of three years across all plans.

## Cloudflare stats are based on a 10% sample

The Cloudflare Web Analytics dashboard includes a note that all stats are "based on a 10% sample of page load events".

That means Cloudflare is not showing you the actual numbers from your site. They take 10% of your traffic, analyze it and display figures extrapolated from that sample. It's a way to reduce the cost of running a free product, but it leads to inaccurate data.



## Cloudflare limits the number of items shown per report

Cloudflare Web Analytics caps most reports at 15 entries. You can only see the top 15 pages, referral sources, devices and so on. For smaller sites that might be fine, but for anything with real volume it becomes a constraint quickly.

You can filter to look up a specific page or source manually, but there's no way to browse or discover what's outside the top 15.

Plausible has no limits on the number of items shown in any report. Have hundreds of pages or referral sources? Keep scrolling.

## Cloudflare limits the insights you can access

Cloudflare Web Analytics covers the basics: page views, visits, referrers, countries and devices. Beyond that, it gets thin.

Plausible is built as a dedicated analytics product, so the feature set goes considerably further. You get live visitor counts, bounce rate, visit duration, [UTM campaign tracking](https://plausible.io/blog/utm-tracking-tags), goal and event tracking, and more. These aren't extras. They're the things most site owners actually need to understand their traffic and measure what matters.

The difference comes down to focus. For Cloudflare, web analytics is a small side feature. For Plausible, it's the entire product. That shows in what gets built, how fast things improve and how much attention goes into getting the details right.

Cloudflare can absorb the cost of offering analytics for free precisely because it's a minor feature for them. Keeping it free means keeping it limited. Plausible is funded entirely by subscribers, which is what lets a small independent team work on it full time.

## Different definitions of unique visitor

Plausible and Cloudflare Web Analytics count visitors differently.

In Cloudflare Web Analytics, "a visit is a successful page view that has an HTTP referrer that doesn't match the hostname of the request". Basically, Cloudflare counts the number of times someone landed on your site from another site. They acknowledge that "you should expect this number to differ from other analytics tools".

If the same person visits your site ten times in one day, Cloudflare Web Analytics lists that person as ten unique visitors. Plausible counts them as one.

Plausible doesn't use cookies or persistent identifiers either. Instead, we generate a daily changing identifier using the visitor's IP address and User Agent, run through a hash function with a rotating salt. You can read more in [our data policy](https://plausible.io/data-policy).

## Open source vs closed source

Plausible is [open source](https://plausible.io/open-source-website-analytics). Our source code is available on GitHub so anyone can read and review it to verify that we do what we say.

Plausible is also incorporated and hosted in the EU, with all visitor data processed exclusively on European-owned infrastructure. Cloudflare is a US company, which creates data transfer considerations under GDPR. See our [EU hosting page](https://plausible.io/eu-hosted-web-analytics) for more on this.

Cloudflare Web Analytics is closed source. There's no way to verify what happens behind the scenes when using their script. That doesn't necessarily mean anything bad. Cloudflare, unlike Google, has no stake in the ad-tech world. But you do have to take their word for it.

## Which tool is right for you?

If you're already a Cloudflare customer and just need a basic traffic overview with zero setup cost, Cloudflare Web Analytics is a reasonable starting point. If you need accurate data, full history, goal tracking and a complete picture of your traffic, Plausible is the better fit.

## Try Plausible free for 30 days

Hugging Face, Ghost, Basecamp and thousands of others use Plausible. [Sign up for a 30-day free trial](https://plausible.io/register). No credit card required.
