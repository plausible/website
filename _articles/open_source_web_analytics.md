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
    "We've chosen Plausible because its philosophy aligns with our own privacy principles."
  </p>
  <figcaption class="mt-2 text-sm text-gray-500">
    <span class="font-semibold text-gray-700">Open Home Foundation</span>, the non-profit behind Home Assistant
  </figcaption>
</figure>

{% include cta-buttons.html %}

![Plausible: Open source Google Analytics alternative](/uploads/plausible-open-source.png "Plausible: Open source Google Analytics alternative")

1. Ordered list
{:toc}

## What is open source web analytics?

Being open source means our [source code](https://github.com/plausible/analytics/) is available and accessible on GitHub. Anyone can read it, inspect it and review how it works, how data is handled and what gets collected. There are no hidden behaviors.

This transparency is what makes open source software more trustworthy than closed alternatives. You don't have to take our word for it. The project has thousands of stars on GitHub and is trusted by {{ site.data.site.subscriber_count }} paying subscribers including Hugging Face, Basecamp, Ghost, MongoDB, the Open Source Initiative and the Python Software Foundation.

## Open source does not mean you have to self-host

Plausible is available in two forms. Plausible Analytics Cloud is the managed service that funds our work. Plausible Community Edition (CE) is the free, self-hosted release for people who want to run it on their own infrastructure.

| Plausible Analytics Cloud | Plausible Community Edition |
| --- | --- |
| We operate the servers, backups, security and updates. | You operate and secure your own server. |
| New features and improvements are released continuously. | Stable releases are published on a slower schedule. |
| Cloud plans include premium features and direct support. | Some premium features and direct support are not included. |
| Start with a 30-day free trial. | No subscription fee to us, but infrastructure and maintenance are yours. |

Choose Cloud if you want the transparency of open source software without turning analytics infrastructure into your responsibility. Choose Plausible CE if controlling the server matters more and you are ready to maintain it yourself. See the [complete Cloud and CE comparison](https://plausible.io/self-hosted-web-analytics).

## What data does Plausible collect?

Plausible collects only what you need to understand your traffic: page views, referral sources, the countries and devices your visitors use and which pages they read. No personal data, no cookies, no cross-site tracking and no user profiles.

Because nothing personal is collected, Plausible is [compliant with GDPR, CCPA and other privacy regulations](https://plausible.io/data-policy) out of the box. No cookie consent banner required. All data is hosted on EU-based servers and never processed by US cloud providers.

## What license is Plausible released under?

Plausible is open source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/plausible/analytics/blob/master/LICENSE.md).

The goal of the AGPL license is to maximize user freedom and to encourage companies to contribute back to open source. You can read more about [why we chose the AGPL license for our startup](https://plausible.io/blog/open-source-licenses).

## Is Google Analytics open source?

No, Google Analytics is not open source. It is a closed source, proprietary product. There is no way of knowing what happens behind the scenes when you run Google Analytics on your site. You have to trust Google.

For a full comparison of the two, see [Plausible vs Google Analytics](https://plausible.io/vs-google-analytics). If you're evaluating other open source options, see how we compare to [Matomo](https://plausible.io/vs-matomo).

## Why does Plausible Cloud cost money if the code is open source?

Open source describes the freedom to inspect, modify and run the code. It does not mean someone else must operate the service for free.

Plausible is independently owned and actively developed. Cloud subscriptions pay for servers, security, backups, product development and support. They also fund the continued development of Plausible CE.

Google Analytics is free because Google built its business on collecting and analyzing personal data from web users and using those insights to sell advertising. Plausible doesn't operate that way. No personal data is collected. You own and control all of your website data and it is never shared with or sold to third parties.

If you prefer to run the software yourself, [Plausible CE has no subscription fee](https://plausible.io/self-hosted-web-analytics). You provide the infrastructure and maintenance instead.

## Plausible is open in other ways too

We have a [public roadmap](https://feedback.plausible.io/roadmap) driven by community suggestions and you can reach us by email with any questions.

Your stats are also private by default, but you can choose to make them public and share a custom link that lets anyone view them. See the [stats for the Plausible website](https://plausible.io/plausible.io) itself as an example.

## Try Plausible

[Sign up for a 30-day free trial](https://plausible.io/register). No credit card required. Run it alongside Google Analytics, compare the data and check the source on GitHub to verify what we collect.
