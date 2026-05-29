---
layout: article
title: "When Plausible is not the right fit"
description: "Plausible is built for simple, privacy-friendly website analytics. Here are the cases where Plausible may not be the right tool, and when another type of product may be a better fit."
permalink: /when-not-to-use-plausible
cta_headline: "Start a free 30-day trial"
---

Most analytics tools try to do more every year. Plausible goes in the other direction.

[Plausible](https://plausible.io/) is built for useful website analytics without cookies, personal data, invasive tracking or complexity. That focus is why people choose it. It is also why Plausible is not the right tool for every use case.


<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "Plausible has been really great at Sentry since we don't have user tracking on our website. Would recommend."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Matt Henderson</span>, Director of Growth at Sentry
  </figcaption>
</figure>

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "Unlike Google, Plausible isn't in the advertising game and doesn't have an incentive to collect and sell user data."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Danielle Foré</span>, Founder and CEO at elementary OS
  </figcaption>
</figure>

<div class="mt-6 max-w-md mx-auto sm:flex sm:justify-center">
  <div class="rounded-md shadow">
    <a href="/register" onclick="plausible('CTA Click', {props: {position: 'Hero', type: 'Landing page', button: 'Start free trial'}})" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">Start free trial</a>
  </div>
  <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
    <a href="/plausible.io" onclick="plausible('CTA Click', {props: {position: 'Hero', type: 'Landing page', button: 'View live demo'}})" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: #4f46e5;">View live demo</a>
  </div>
</div>

![Plausible Analytics dashboard](/uploads/plausible-privacy-friendly.png "Plausible: simple, privacy-friendly website analytics")

{:toc}

## Plausible is not a session replay or heatmap tool

Plausible does not record individual visitor sessions. There are no mouse movement recordings, rage click detection or heatmaps.

If you need to watch how a specific visitor navigates your site or diagnose UX problems through visual replay, Plausible is not built for that. Tools like Hotjar, Microsoft Clarity or FullStory are designed for those workflows.

That said, Plausible covers more of this ground than it might first appear. Scroll depth tracking gives you per-page engagement data in aggregate. Form submissions are tracked automatically. Clicks, button presses and more granular form interactions can be set up using custom events. If you need to understand whether people are reading your content or where they drop off in a flow, Plausible covers a lot of the same ground without recording anyone.

Plausible tells you which pages get traffic, which sources convert and how content performs in aggregate. It does not watch individual people.

## Plausible is not for tracking individual users

This is the clearest line in how Plausible works, and it is a deliberate one.

Plausible stores no user profiles. It keeps no cross-session history for individual visitors. It does not store IP addresses, device fingerprints or any persistent identifiers. The daily counter used to estimate unique visitors resets every 24 hours and cannot be reversed to identify anyone.

If your analytics workflow depends on knowing that the same named person came back five times across multiple days, clicked three buttons and later became a customer, Plausible is probably not the tool you are looking for. Within the same day, return visits are counted together. Across days, there is no way to link visits to the same individual. That is intentional. Individual surveillance of your visitors is not something we are willing to build, regardless of what competing tools offer.

This boundary is also what makes Plausible compliant with GDPR, CCPA and similar laws without a consent banner. It is not a limitation to work around. It is the design.

## Plausible is not a full product analytics platform

Website analytics and product analytics are different disciplines.

Plausible covers what happens on your public website: traffic sources, pageviews, conversions, custom events, funnels, properties and user journeys. It does not cover what logged-in users do inside your product over time.

That said, custom events and custom properties let you go well beyond basic website analytics. You can segment traffic by user state, track feature usage and separate logged-in from logged-out visitors without user-level profiling. Our own live demo uses this: we can see how logged-in and logged-out visitors behave separately, which pages they visit and how they convert. If your product analytics needs are focused on aggregate behaviour rather than individual user histories, Plausible may cover more than you expect.

If you need cohort analysis, feature flag measurement, retention curves, experimentation, user-level behavior analysis inside your app, or session replay tied to specific user accounts, you need a product analytics tool. Mixpanel, Amplitude and PostHog are built for those workflows. Plausible is not.

Plausible can tell you that your pricing page drove 400 trial signups last month. It cannot tell you how many of those trial accounts activated a specific feature within seven days.

## Plausible is not an ad-tech or retargeting platform

Plausible does not build advertising profiles. It has no audience syncing, no pixel-based conversion tracking tied to ad platforms, no cross-site user identification and no support for retargeting workflows.

This is not a gap we plan to fill. Building advertising infrastructure would contradict the reason Plausible exists. The business model is subscriptions, not data. There is no incentive to collect more than necessary and no infrastructure to route data toward ad networks.

If retargeting, lookalike audiences or ad attribution that tracks users across sites are core to your workflow, you need a tool built explicitly for advertising measurement. Plausible is not that tool.

## Plausible is not the best fit if you need free hosted analytics forever

Plausible is a paid hosted service. There is a 30-day free trial with no credit card required, but the hosted product is subscription-based after that.

This is not incidental. Plausible is bootstrapped and funded entirely by paying customers. There are no investors, no advertising revenue and no data sales. The subscription fee is what keeps the product independent and focused.

If cost is the constraint, there is an alternative: [Plausible Community Edition](https://plausible.io/self-hosted-web-analytics) is the free, self-hosted version. You install it, run it and maintain it on your own infrastructure. It is built on the same open source codebase (AGPLv3), though some features are available on Plausible Cloud only.

If you need a fully hosted, always-free analytics service, Plausible is not the right choice. Google Analytics is free because Google monetizes the data. Plausible is not willing to do that.

## Plausible should not be used to collect sensitive personal data

Plausible is built to avoid collecting personal data, but that guarantee depends on how you configure it.

Do not pass protected health information, personal identifiers, passwords, financial details or other sensitive data through page URLs, query parameters, custom event names or custom properties. If your site URLs contain patient IDs, user emails or medical record numbers, you should filter those parameters before they reach Plausible.

Plausible is not HIPAA-compliant and does not offer a Business Associate Agreement (BAA). If you operate under HIPAA or similar health data regulations and your analytics implementation touches protected health information, you need a tool that supports those compliance obligations specifically.

Review our [data policy](/data-policy) for the full picture of what Plausible collects and how it is handled.

## Why we keep Plausible focused

Every use case listed above represents a real request we have received. We have said no to all of them.

Saying no is how Plausible stays simple. A dashboard that a non-technical founder can read in two minutes. A very lightweight script that does not slow your site down. A compliance conversation that takes minutes, not months. A product that your whole team can understand without training.

Adding session replay, user profiling, ad-tech integrations or free-tier hosted infrastructure would make Plausible something else. Something more like the tools people come to Plausible to get away from.

## Is Plausible right for you?

Plausible is likely a good fit if you:

- Want clear website analytics: traffic sources, pages, conversions and campaigns
- Care about privacy and compliance and want to avoid cookie banners
- Want lightweight tracking that does not slow your site down
- Do not need to identify or profile individual visitors
- Want reports your whole team can read without training
- Need something simple to approve in procurement or legal review

Plausible is likely not a good fit if you:

- Need session replay, heatmaps or individual visitor recordings
- Need user-level product analytics, cohorts or retention analysis inside your app
- Need retargeting, audience syncing or cross-site ad measurement
- Need a free hosted analytics service with no subscription
- Need to process protected health information or require a BAA

If Plausible fits what you are looking for, [start a free 30-day trial](/register). No credit card required. You can also review our [compliance documentation](/compliance) before you decide.
