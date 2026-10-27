---
layout: article
title: "Plausible, Umami, Fathom or Simple Analytics: how to choose"
description: "An honest look at four privacy-friendly analytics tools. Where each company and its data are based, who funds it, whether you can self-host and when another tool is the better pick."
permalink: /plausible-umami-fathom-simple-analytics
cta_headline: "Think Plausible is the right fit?"
---

If you've decided to leave Google Analytics for something simpler and more private, you've probably narrowed it down to a few names. Plausible, Umami, Fathom and Simple Analytics come up together a lot.

They look alike at first. All four count visits without cookies and show the results on one simple dashboard. Feature lists change every few months, and every vendor's comparison page is written by someone with a stake in the outcome. This one included.

So we left out the feature tick boxes. This page sticks to the things that rarely change and that you can check yourself. We link to each company's own pages so you can verify everything. Last checked in October 2026. If you're comparing other tools too, our [buyer's guide to privacy-friendly analytics](/privacy-friendly-web-analytics) covers the same criteria in general.

{% include cta-buttons.html %}

![Plausible, Umami, Fathom or Simple Analytics: how to choose](/uploads/plausible-privacy-friendly.png "Plausible, Umami, Fathom or Simple Analytics: how to choose")

1. Ordered list
{:toc}

## The short version

| | Plausible | Umami | Fathom | Simple Analytics |
| --- | --- | --- | --- | --- |
| Company based in | Estonia (EU) | United States | Canada | Netherlands (EU) |
| Where visitor data is stored | EU-owned servers in Germany and Finland | Umami Cloud servers in the US and EU | EU visitors are processed in the EU, then stored anonymized on US infrastructure | EU, primary infrastructure in the Netherlands |
| Self-hosting | Yes, Community Edition (AGPLv3) | Yes (MIT) | No. Fathom Lite is an older open source version that uses cookies | No |
| Free hosted plan | No, 30-day free trial | Yes, up to 100k events a month | No | Yes, for hobby sites with 30 days of history |
| How it's funded | Self-funded by subscribers, no investors | Raised a venture round in 2022 | Independently owned, no VC | Self-funded, no investors |

## Do you want to run it on your own server?

If self-hosting is the main thing you care about, Umami is a strong choice. It's MIT licensed, which is about as permissive as open source gets.

Plausible is open source too. [Plausible Community Edition](/self-hosted-web-analytics) is free to self-host under the AGPLv3 license. It gets two releases a year, and a few features such as funnels, ecommerce revenue goals and SSO are only on our cloud. We're upfront about that because the cloud subscriptions are what pay for the development of both.

Fathom and Simple Analytics are hosted only. Fathom keeps [Fathom Lite](https://github.com/usefathom/fathom) on GitHub, but it's their first version and it uses cookies. Simple Analytics publishes its tracking scripts but not the product itself.

## Where is the company and where does the data go?

This matters more than any feature if you're in the EU or work with EU clients. The location of the servers is only half of it. Who owns them, and where the company itself is incorporated, decides which laws can reach your data.

Plausible is incorporated in Estonia and our team is in the EU. Visitor data is stored on servers owned by Hetzner, a German company, with UpCloud, a Finnish company, for databases. [More on that here](/eu-hosted-web-analytics).

Simple Analytics is a Dutch company and [says](https://www.simpleanalytics.com/pricing) its data is stored in the EU with primary infrastructure in the Netherlands. On this point we're in the same place.

Fathom is a Canadian corporation. Its [EU isolation](https://usefathom.com/features/eu-isolation) routes EU visitors through European servers where the IP address is anonymized. The anonymized data is then stored on US infrastructure.

Umami's [pricing page](https://umami.is/pricing) says Umami Cloud has servers in the US and EU. The company is based in San Francisco.

## Who pays for it?

Ask how a company makes money and you'll know a lot about where it's going.

We're self-funded and profitable, with no outside investors and no plans to sell. More than {{ site.data.site.subscriber_count }} paying subscribers fund the team, and that has been the only source of money since we started charging in 2019. We're a team of {{ site.data.site.team_size }} people. You can read more on our [about page](/about).

Fathom also describes itself as independently owned with no VC pressure, and Simple Analytics [says it's](https://www.simpleanalytics.com/about) self-funded and profitable. Umami raised a $1.5M round in 2022 led by Race Capital, a venture fund. There's nothing wrong with venture funding, but it comes with expectations of growth that subscriber-funded companies don't have to meet.

## What does it cost for a typical site?

For a single site with 100k monthly pageviews, the hosted plans are close. Plausible Starter is $19 a month. Fathom is $15 and Simple Analytics and Umami Pro are $20.

The differences show up elsewhere. Fathom includes up to 50 sites in its $15 plan, so if you run lots of small sites it will likely be cheaper than us. Umami Pro counts 1M events, but every saved event property counts as an extra event. Our Starter plan is one site, Growth is up to three.

If you need something free forever for a hobby site, Umami and Simple Analytics both have a free plan. We don't. We'd rather spend that money on the people paying us.

## When to pick one of the others

We'd rather you end up with the right tool than with ours. Pick Umami if you want to self-host under a permissive license and you're comfortable maintaining a server. Pick Fathom if you manage dozens of small sites on one budget and US storage of anonymized data is fine for you. Simple Analytics is worth a look if all you need is a free plan for a personal site.

And if you need session recordings or individual user profiles, none of these four is the right tool. Here's [when Plausible is not the right fit](/when-not-to-use-plausible) in more detail.

## When Plausible is the better fit

Plausible makes the most sense when you want the whole chain in the EU, from the company to the servers it uses. Or when you want to know the company will be around and independent in five years. We've been doing this since 2019, we answer to our subscribers and nobody else, and the code is open for anyone to audit.

Beyond the basics you get [funnels](/docs/funnel-analysis), [ecommerce revenue](/docs/ecommerce-revenue-tracking), the [Search Console integration](/docs/google-search-console-integration) and a [stats API](/docs/stats-api), all on the same simple dashboard.

The easiest way to decide is to try it next to your current setup. The trial is 30 days and you don't need a credit card.
