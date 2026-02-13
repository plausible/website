---
layout: article
title: "Plausible: Self-Hosted Google Analytics alternative"
description: Plausible Analytics is a privacy-friendly and open source Google
  Analytics alternative that you can install and self-host on your server.
permalink: /self-hosted-web-analytics
---
Plausible Analytics is an open source web analytics tool. Our mission is to reduce corporate surveillance by making a useful and privacy-friendly website analytics tool that doesn't come from the adtech world.

The site owner gets some actionable data to help them learn and improve, while the visitor keeps having a nice and enjoyable experience. Cookies are not used and no personal data is collected. There's no cross-site or cross-device tracking either.

The easiest way to get started with Plausible is with our [official managed service in the cloud](https://plausible.io) but if you're happy to manage your own infrastructure, you can also self-host Plausible Community Edition (CE) on your server. Plausible CE is our "free as in beer", self-hosted and AGPL-licensed release.

Our managed hosting can save a substantial amount of developer time and resources. For most sites this ends up being the best value option and the revenue goes to funding the maintenance and further development of Plausible. So you’ll be supporting open source software and getting a great service!

![Plausible: Self-hosted Google Analytics alternative](/uploads/plausible-self-hosted.png "Plausible: Self-hosted Google Analytics alternative")

1. Ordered list
{:toc}

## What's the difference between Plausible Analytics Cloud and Plausible CE?

Here are the differences between Plausible Analytics managed hosting in the cloud and Plausible CE:

|                               | Plausible Analytics Cloud                                                                                                                                                                                                                                                                                                                                                               | Plausible Community Edition                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Infrastructure management** | Easy and convenient. It takes 2 minutes to start counting your stats with a worldwide CDN, high availability, backups, security and maintenance all done for you by us. We manage everything so you don't have to worry about anything and can focus on your stats.                                                                                                                     | You do it all yourself. You need to get a server and you need to manage your infrastructure. You are responsible for installation, maintenance, upgrades, server capacity, uptime, backup, security, stability, consistency, loading time and so on.                                                                                                                |
| **Release schedule**          | Continuously developed and improved with new features and updates multiple times per week.                                                                                                                                                                                                                                                                                              | [It's a long term release](https://plausible.io/blog/building-open-source) published twice per year so latest features and improvements won't be immediately available.                                                                                                                                                                                             |
| **Premium features**          | All features available as listed in [our pricing plans](https://plausible.io/#pricing).                                                                                                                                                                                                                                                                                                 | [Marketing funnels](https://plausible.io/docs/funnel-analysis), [ecommerce revenue goals](https://plausible.io/docs/ecommerce-revenue-tracking), [SSO](https://plausible.io/docs/sso) and [sites API](https://plausible.io/docs/sites-api) are not available to help support [the project's long-term sustainability](https://plausible.io/blog/community-edition). |
| **Bot filtering**             | Advanced bot filtering for more accurate stats. Our algorithm detects and excludes non-human traffic patterns. We also exclude known bots by the User-Agent header and filter out traffic from data centers and referrer spam domains. We exclude ~32K data center IP ranges (i.e. a lot of bot IP addresses) by default.                                                               | Basic bot filtering that targets the most common non-human traffic based on the User-Agent header and referrer spam domains.                                                                                                                                                                                                                                        |
| **Server location**           | All visitor data is exclusively processed on EU-owned cloud infrastructure. We keep your site data on a secure, encrypted and green energy powered server in Germany. This ensures that your site data is protected by the strict European Union data privacy laws and ensures compliance with GDPR. Your website data never leaves the EU.                                             | You have full control and can host your instance on any server in any country that you wish. Host it on a server in your basement or host it with any cloud provider wherever you want, even those that are not GDPR compliant.                                                                                                                                     |
| **Data portability**          | You see all your site stats and metrics on our modern-looking, simple to use and fast loading dashboard. You can only see the stats aggregated in the dashboard. You can download the stats using the [CSV export](https://plausible.io/docs/export-stats), [stats API](https://plausible.io/docs/stats-api) or the [Looker Studio Connector](https://plausible.io/docs/looker-studio). | You can export and import data to and from the cloud. The Looker Studio Connector is not available.                                                                                                                                                                                                                                                                 |
| **Premium support**           | Real support delivered by real human beings who build and maintain Plausible.                                                                                                                                                                                                                                                                                                           | Premium support is not included. Self-hosting is community supported only.                                                                                                                                                                                                                                                                                          |
| **Costs**                     | There's a cost associated with providing an analytics service so we charge a subscription fee. We choose the subscription business model rather than the business model of surveillance capitalism. Your money funds further development of Plausible.                                                                                                                                  | You need to pay for your server, CDN, backups and whatever other cost there is associated with running the infrastructure. You never have to pay any fees to us. Your money goes to 3rd party companies with no connection to us.                                                                                                                                   |

## How can you be sustainable if you're giving your software for free?

Funding is a big topic in the world of open source software. Many open source projects are terribly under-resourced and under-funded. Some people even have to sacrifice their financial security to work on their passion.

We believe that no financial sacrifice should be required to work on open source. Making open source sustainable is something we're passionate about. To build competitive privacy-first and open-source alternatives to popular proprietary tools, we need more people to be able to commit to open source full time.

We released our code on GitHub and made it easy to self-host on principle, not because it's good business. While Plausible Community Edition can be self-hosted for free, we also sell a hosted, plug and play solution as a SaaS. This is our only source of funding. We're growing a sustainable open source project funded solely by the fees that our subscribers pay us.

[Our business model](https://plausible.io/about) has nothing to do with collecting and analyzing huge amounts of personal information from your visitors and using these behavioral insights to sell advertisements. We don't make money by selling or sharing your data, or abusing your visitor's privacy.

We are not interested in raising funds or taking investment either. Plausible is completely independent and bootstrapped. Revenue from paid subscriptions is used to pay our rent, further develop Plausible and allow us to commit to open source full time.

For more views on the topic of open source funding, see [how to pay your rent with your open source project](https://plausible.io/blog/open-source-funding).

## Transparency as a key value of privacy focused software

One aspect that makes Plausible Analytics different from many of the other web analytics providers such as Google Analytics is the fact that Plausible is [an open source web analytics software](https://plausible.io/open-source-website-analytics).

We are not a black box. Everything is in the open. Our source code is available and accessible [on GitHub](https://github.com/plausible/analytics).

Anyone can view, review and inspect the code we’re running to understand how it works and to verify whether our actions match with our words. This gives you and everyone else full transparency on how we handle website traffic data.

This is essential in the market of privacy focused analytics. Corporations and proprietary software cannot always be trusted when personal data is in question. This is one of the main reasons [why you should stop using Google Analytics on your site](https://plausible.io/blog/remove-google-analytics).

The only way to prove your trust is to allow the public and the experts to look into your code and verify that you practice what you preach. It is this transparency and openness that means that open source products can be more trustworthy than proprietary products.

Many open source projects offer a do-it-yourself, self-hosted deployment. Some people prefer that approach and want to host, run and maintain the software themselves on their own server. And this is what you can do with Plausible too. Anyone can download our software, install it and run it on their own server. Open source enables this.

## What license is Plausible Community Edition released under?

Plausible Community Edition is open source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/plausible/analytics/blob/master/LICENSE.md).

## How do I self-host Plausible CE?

Here's [how you can install Plausible CE on your own server](https://github.com/plausible/community-edition/).