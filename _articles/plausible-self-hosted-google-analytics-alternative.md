---
layout: article
title: "Plausible: Self-Hosted Google Analytics alternative"
description: Plausible Analytics is a privacy-friendly and open source Google
  Analytics alternative that you can install and self-host on your server.
permalink: /self-hosted-web-analytics
cta_headline: "Ready to get started with Plausible?"
---
Plausible is an open source web analytics tool. No cookies, no personal data collected, no consent banners required. We built it as a direct alternative to Google Analytics and the adtech world behind it.

The same code runs in two ways. [Plausible Community Edition (CE)](https://github.com/plausible/community-edition/) is the free, self-hosted, AGPL-licensed release: you run it on your own server and manage everything yourself. Our managed cloud service handles all of that for you, and revenue from subscriptions funds the ongoing development of Plausible.

{% include cta-buttons.html %}

![Plausible: Self-hosted Google Analytics alternative](/uploads/plausible-self-hosted.png "Plausible: Self-hosted Google Analytics alternative")

1. Ordered list
{:toc}

## What's the difference between Plausible Analytics Cloud and Plausible CE?

Here are the differences between Plausible Analytics managed hosting in the cloud and Plausible CE:

|                               | Plausible Analytics Cloud                                                                                                                                                                                                                                                                                                                                                               | Plausible Community Edition                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Infrastructure management** | Easy and convenient. It takes 2 minutes to start counting your stats with a worldwide CDN, high availability, backups, security and maintenance all done for you by us. We manage everything so you don't have to worry about anything and can focus on your stats.                                                                                                                     | You do it all yourself. You need to get a server and you need to manage your infrastructure. You are responsible for installation, maintenance, upgrades, server capacity, uptime, backup, security, stability, consistency, loading time and so on.                                                                                                                |
| **Release schedule**          | Continuously developed and improved with new features and updates multiple times per week.                                                                                                                                                                                                                                                                                              | [It's a long term release](https://plausible.io/blog/building-open-source) published twice per year so latest features and improvements won't be immediately available.                                                                                                                                                                                             |
| **Premium features**          | All features available as listed in [our pricing plans](https://plausible.io/#pricing).                                                                                                                                                                                                                                                                                                 | [Marketing funnels](https://plausible.io/docs/funnel-analysis), [user journeys](https://plausible.io/docs/user-journeys), [ecommerce revenue goals](https://plausible.io/docs/ecommerce-revenue-tracking), [SSO](https://plausible.io/docs/sso) and [sites API](https://plausible.io/docs/sites-api) are not available to help support [the project's long-term sustainability](https://plausible.io/blog/community-edition). |
| **Bot filtering**             | Advanced bot filtering for more accurate stats. Our algorithm detects and excludes non-human traffic patterns. We also exclude known bots by the User-Agent header and filter out traffic from data centers and referrer spam domains. We exclude ~32K data center IP ranges (i.e. a lot of bot IP addresses) by default.                                                               | Basic bot filtering that targets the most common non-human traffic based on the User-Agent header and referrer spam domains.                                                                                                                                                                                                                                        |
| **Server location**           | All visitor data is exclusively processed on EU-owned cloud infrastructure. We keep your site data on a secure, encrypted and green energy powered server in Germany. This ensures that your site data is protected by the strict European Union data privacy laws and ensures compliance with GDPR. Your website data never leaves the EU.                                             | You have full control and can host your instance on any server in any country that you wish. Host it on a server in your basement or host it with any cloud provider wherever you want, even those that are not GDPR compliant.                                                                                                                                     |
| **Data portability**          | You see all your site stats and metrics on our modern-looking, simple to use and fast loading dashboard. You can only see the stats aggregated in the dashboard. You can download the stats using the [CSV export](https://plausible.io/docs/export-stats), [stats API](https://plausible.io/docs/stats-api) or the [Looker Studio Connector](https://plausible.io/docs/looker-studio). | You can export and import data to and from the cloud. The Looker Studio Connector is not available.                                                                                                                                                                                                                                                                 |
| **Premium support**           | Real support delivered by real human beings who build and maintain Plausible.                                                                                                                                                                                                                                                                                                           | Premium support is not included. Self-hosting is community supported only.                                                                                                                                                                                                                                                                                          |
| **Costs**                     | There's a cost associated with providing an analytics service so we charge a subscription fee. We choose the subscription business model rather than the business model of surveillance capitalism. Your money funds further development of Plausible.                                                                                                                                  | You need to pay for your server, CDN, backups and whatever other cost there is associated with running the infrastructure. You never have to pay any fees to us. Your money goes to 3rd party companies with no connection to us.                                                                                                                                   |

## How can you be sustainable if you're giving your software for free?

Many open source projects are under-resourced and under-funded. Some maintainers sacrifice their financial security to work on their passion. We do not think that should be required.

We released our code on GitHub and made it easy to self-host on principle, not because it is good business. Plausible CE is free to self-host. Our only source of funding is the managed cloud service: subscribers pay us directly, and we use that revenue to pay our team and develop Plausible.

[Our business model](https://plausible.io/about) has nothing to do with collecting personal information from your visitors or selling it to advertisers. Plausible is completely independent and bootstrapped. No outside investment, no surveillance revenue.

For more on open source funding, see [how to pay your rent with your open source project](https://plausible.io/blog/open-source-funding).

## Transparency as a key value of privacy focused software

Unlike Google Analytics, Plausible is [open source](https://plausible.io/open-source-website-analytics). We are not a black box. Our source code is available and accessible [on GitHub](https://github.com/plausible/analytics).

Anyone can view, review and inspect the code we run to understand exactly how it works and to verify that our actions match our words. In privacy-focused analytics, that matters. Proprietary software cannot be verified. Open source can.

This is one of the main reasons [why you should stop using Google Analytics on your site](https://plausible.io/blog/remove-google-analytics).

Self-hosting is one outcome of that transparency. If you want to run Plausible yourself on your own server, you can. Anyone can download our software, install it and run it independently.

## What license is Plausible Community Edition released under?

Plausible Community Edition is open source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/plausible/analytics/blob/master/LICENSE.md).

## How do I self-host Plausible CE?

Here's [how you can install Plausible CE on your own server](https://github.com/plausible/community-edition/).