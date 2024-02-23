---
layout: post
title: Introducing Plausible Community Edition
description: We’re introducing the "free as in beer", self-hosted and
  AGPL-licensed Plausible Community Edition (CE).
slug: community-edition
date: 2024-02-23T07:28:39.233Z
author: marko-saric
---
**TL;DR**: We're introducing the "free as in beer", self-hosted and AGPL-licensed Plausible Community Edition (CE). [Installation instructions are here](https://github.com/plausible/analytics/discussions/categories/self-hosted-support).

In October 2020, we changed [from the MIT to the AGPL license](https://plausible.io/blog/open-source-licenses) to prevent corporations from exploiting our code without giving back. 

As mentioned at the time, we wanted a “don’t be evil” license. Here’s the quote of what we wrote more than three years ago on what we were trying to accomplish with the license change:

“ * We want to prevent corporations from taking our code and using it as part of their closed-source proprietary products
* We want to prevent corporations from offering Plausible as a service without contributing to the open source project
* We want to prevent corporations from confusing people and making them think that the service they sell is in any shape or form approved by the original team

And we don’t want this to in any way impact the actual use case Plausible is built for. A completely open source and self-hostable web analytics tool that helps people de-Googlify their sites and respect the privacy of their visitors.“

That license change has helped us build [a sustainable open source project](https://plausible.io/blog/open-source-saas) with 8 core team members and several paid external contributors at the time of writing. We don’t have any investors, so all this is solely funded by the fees our 12,000+ subscribers pay us.

As we’ve progressed in our journey, we’ve become aware that despite its advantages, the AGPL license doesn’t go far enough to protect us against all the threats we face. To better protect our project in the future, we’re changing some things about our self-hosted release. These changes don’t affect anyone subscribing to the Plausible Analytics managed hosting in the cloud. Everything stays the same there.

If you have a blog, a personal site or a business site, we want you to be able to self-host our code on your servers without needing to pay us any fees if that’s your preference. Nothing changes about this either. Our self-hosted code continues being AGPL-licensed, “free as in beer” and is the same code running in the production on our Plausible Analytics managed hosting in the cloud. 

Here’s more on what’s being changed and why.

## Threats we’re facing

We want to reduce the threat from businesses such as hosting companies and other resellers who try to commercialize popular open source projects. We’ve seen our self-hosted code being used in a way it was never intended for by corporations that don’t care about us or open source. Our license doesn’t prevent these corporations from using the Plausible Analytics name and logo either, as these are a part of our self-hosted code.

We face threats both from single-tenant and multi-tenant hosts and resellers. These entities compete against us using our work and brand without contributing back. For them it’s a business opportunity to commercialize open source software. They are even damaging our brand. We’ve had cases of these entities:

* Confusing people and making them think that we approve of the service they run
* Reselling our self-hosted code while running Google Analytics and other surveillance capitalism scripts on their site
* Using Google and Amazon-owned servers despite promising that they’re running on [EU-owned infrastructure](https://plausible.io/blog/google-analytics-illegal)
* Having a bad user experience with under provisioned servers, slow loading time, frequent downtime and no support 
* Running paid advertising on Google and paying referral fees for people to promote them. Both marketing tactics that [we say no to ourselves](https://plausible.io/blog/best-marketing-practices)

These use cases were never the intention behind our self-hosted release. We wanted to give site owners a way to de-Google their sites even if they didn’t want to or couldn’t use our managed service. Now, we’re facing situations where companies much larger than us with much bigger resources use our brand to compete against us and gain a business advantage. 

It’s telling that these entities rarely decide to build their brand on top of our code. They prefer to use the brand we’ve built instead as it gives them a better and easier starting point. These actions not only threaten our sustainability but also mislead people who trust the Plausible Analytics name. We want to ensure that anyone using or considering our services knows precisely what they're getting, without confusion or misrepresentation.

## Sticking to the AGPL license 

We’re real people who have rent to pay and mouths to feed. We make $300 per month from donations from our self-hosted users. It would take us more than ten years of donations to pay one month of salary for our small team. If we cannot capture the economic value of our work, the project will become unsustainable and die.

We believe this would not only hurt us as people but also all of the users of the product. Our self-hosted users directly benefit from the investments we can put into product development. All this is made possible and solely funded by the revenue we get from our managed hosting in the cloud.

We’ve learned that being open source and transparent has costs. Dealing with these threats is an incredibly taxing and time-consuming distraction for our small team. It’s something our proprietary competitors never even have to think about.

Several popular projects have shifted away from open source models in the last few years because of similar threats that we’re facing. They’re using licenses such as the Business Source License or the Server Side Public License because those licenses directly address the threats from resellers and hosting companies.

These licenses are [not approved nor recognized by the Open Source Initiative (OSI)](https://opensource.org/licenses/), which is why we’re not interested in switching to them. We want to stay open source to continue providing a transparent and privacy-friendly web analytics tool with a “free as in beer” self-hosted release.

## Changes we’re making to our self-hosted release

Here’s how we’ll proceed with our self-hosted release. These changes will go live with the next version of our self-hosted release. [Release notes are here](https://github.com/plausible/analytics/discussions/categories/self-hosted-support).

### Our self-hosted release will be called Plausible Community Edition

Our self-hosted release will be renamed Plausible Community Edition (or Plausible CE). Plausible CE will also have a different logo from the Plausible Analytics managed hosting in the cloud. This is the main change you’ll see if you’re running our self-hosted code on your server. 

Plausible CE continues to be AGPL-licensed and “free as in beer”. It continues to be the same code running in the production on our managed hosting. As we’ve done so far, we’ll keep maintaining, improving and adding new features to the Plausible CE with new releases twice annually.

To further protect our brand from threats, we’ve registered trademarks for Plausible Analytics on both sides of the Atlantic. 

### A stronger moat for our official managed hosting

We’re excluding features we use to manage Plausible Analytics at scale, such as the sites API and customer relationship management system, from Plausible CE. As a self-hoster, you likely haven’t noticed these features, as they’ve been undocumented in our self-hosted release and are primarily helpful when providing web analytics as a service.

We’re also keeping some of the newly released business and enterprise features ([funnels](https://plausible.io/docs/funnel-analysis) and [ecommerce revenue metrics](https://plausible.io/docs/ecommerce-revenue-tracking) at the time of being) exclusive to the business plan subscribers on our Plausible Analytics managed hosting. 

The code for all these features is still available to the public so it can be reviewed and inspected, but these features will not be a part of Plausible CE and they’ll have a different license. 

This change also means that if you want to contribute to our codebase in the future as an external contributor, you’ll need to sign a Contributor License Agreement (CLA). 

To provide a better service and experience to people who pay our bills, Plausible CE will continue to be [community-supported only](https://plausible.io/blog/building-open-source). 

This open core model is something that GitLab and other open source projects have championed and we believe it’s the best and most open source friendly approach for the situation we’re in.

### Features to be offered on top of Plausible CE

The plan moving forward is to carefully consider which features to keep exclusive to our managed cloud hosting. These will predominantly be features that help us run our managed hosting at scale and enterprise features. We aim always to ensure a protective barrier around our cloud offering.

This doesn’t mean that all business and enterprise features won’t ever make it to the Plausible CE. Nothing from Plausible CE will be taken away in the future and we plan to periodically evaluate business and enterprise features to be added to Plausible CE. 

For instance, we’ve already decided to release [custom properties](https://plausible.io/docs/custom-props/introduction) (another business feature in the cloud) as part of the Plausible CE. We’ll update the release notes with any new features making their way to Plausible CE in the future.

## Ensuring the continuous sustainability

These changes will affect corporations that take our code to compete directly against us as it will create a more substantial moat and better protection for our official managed hosting. It will get more challenging for them to misrepresent their association with us or use our brand and logo misleadingly. And they won’t be able to offer a fully featured Plausible Analytics product with all the enterprise features included either.

Many indie hackers that contact us about our experience of running an open source startup tell us that their main concern about open sourcing their code is the risk that large corporations will resell that code and take advantage of their project. It’s a valid concern. We hope that our new approach mitigates most potential downsides and still allows the upsides of releasing our code free to the world. 

With the change of our self-hosted release name and logo, the registration of our trademarks and the exclusive availability of certain enterprise features to our managed cloud hosting, we aim to better ensure the sustainability of Plausible Analytics in the face of external threats in the future. Thank you for your support!

* Complete overview of differences [between Plausible Analytics Cloud and Plausible CE](https://plausible.io/self-hosted-web-analytics)
* [Plausible CE release notes and installation instructions](https://github.com/plausible/analytics/discussions/categories/self-hosted-support)
* [Plausible CE support forum on GitHub](https://github.com/plausible/analytics/discussions/categories/self-hosted-support)
* [Plausible Analytics managed hosting in the cloud](https://plausible.io/self-hosted-web-analytics)