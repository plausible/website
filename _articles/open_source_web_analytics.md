---
layout: article
title: "Open source Google Analytics alternative"
description: Plausible is an open source analytics tool. Open source means anyone
  can audit the code and verify how your data is handled. A privacy-friendly
  Google Analytics alternative.
permalink: /open-source-website-analytics
cta_headline: "Ready to try open source analytics?"
---
Most analytics tools are black boxes. You add their script to your site, hand over your visitor data with no way to verify how it's actually handled. Plausible is different: the entire codebase is public, auditable and available for anyone to inspect or run themselves.

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "I mainly use Plausible for my site's analytics. I really like them: they're privacy-focused, open source and show me exactly the subset of data I want to see. Most importantly, they don't set cookies."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Simon Willison</span>, co-creator of Django
  </figcaption>
</figure>

<figure class="my-6 pl-5 border-l-4 border-indigo-200">
  <p class="italic text-gray-700 leading-relaxed">
    "The Rails Foundation is committed to ensuring the privacy of our website visitors. To achieve this, we use Plausible as our web analytics tool. Plausible's primary goal is to track overall trends in website traffic, not individual visitors. Therefore, they do not use cookies or generate persistent identifiers, and they do not collect or store any personal or identifiable data."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Rails Foundation</span>, official privacy policy
  </figcaption>
</figure>

{% include cta-buttons.html %}

![Plausible: Open source Google Analytics alternative](/uploads/plausible-open-source.png "Plausible: Open source Google Analytics alternative")

1. Ordered list
{:toc}

## What is open source web analytics?

Being open source means our [source code](https://github.com/plausible/analytics/) is available and accessible on GitHub. Anyone can read it, inspect it and review how it works, how data is handled and what gets collected. There are no hidden behaviors.

This transparency is what makes open source software more trustworthy than closed alternatives. You don't have to take our word for it. The project has thousands of stars on GitHub and is trusted by {{ site.data.site.subscriber_count }} paying subscribers including Hugging Face, Basecamp, Ghost, MongoDB, the Open Source Initiative and the Python Software Foundation.

## What data does Plausible collect?

Plausible collects only what you need to understand your traffic: page views, referral sources, the countries and devices your visitors use and which pages they read. No personal data, no cookies, no cross-site tracking and no user profiles.

Because nothing personal is collected, Plausible is [compliant with GDPR, CCPA and other privacy regulations](https://plausible.io/data-policy) out of the box. No cookie consent banner required. All data is hosted on EU-based servers and never processed by US cloud providers.

## What license is Plausible released under?

Plausible is open source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/plausible/analytics/blob/master/LICENSE.md).

The goal of the AGPL license is to maximize user freedom and to encourage companies to contribute back to open source. You can read more about [why we chose the AGPL license for our startup](https://plausible.io/blog/open-source-licenses).

## Can Plausible Analytics be self-hosted?

Yes. You can install and run Plausible on your own server. See [self-hosted web analytics](https://plausible.io/self-hosted-web-analytics) for details.

## Is Google Analytics open source?

No, Google Analytics is not open source. It is a closed source, proprietary product. There is no way of knowing what happens behind the scenes when you run Google Analytics on your site. You have to trust Google.

For a full comparison of the two, see [Plausible vs Google Analytics](https://plausible.io/vs-google-analytics). If you're evaluating other open source options, see how we compare to [Matomo](https://plausible.io/vs-matomo).

## Why is Plausible not free while Google Analytics is?

Plausible is independently owned and actively developed. To keep development going and cover our costs, we charge a subscription fee.

Google Analytics is free because Google built its business on collecting and analyzing personal data from web users and using those insights to sell advertising. Plausible doesn't operate that way. No personal data is collected. You own and control all of your website data and it is never shared with or sold to third parties.

If you want to run it yourself, [self-hosting is an option](https://plausible.io/self-hosted-web-analytics).

## Plausible is open in other ways too

We have a [public roadmap](https://feedback.plausible.io/roadmap) driven by community suggestions and you can reach us by email with any questions.

Your stats are also private by default, but you can choose to make them public and share a custom link that lets anyone view them. See the [stats for the Plausible website](https://plausible.io/plausible.io) itself as an example.

## Try Plausible

[Sign up for a 30-day free trial](https://plausible.io/register). No credit card required. Run it alongside Google Analytics, compare the data and check the source on GitHub to verify what we collect.
