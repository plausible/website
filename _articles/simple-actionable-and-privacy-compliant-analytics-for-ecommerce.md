---
layout: article
title: "Web analytics for ecommerce: simple, accurate and privacy-friendly"
description: Web analytics for ecommerce that doesn't rely on cookies or consent banners. Simple dashboard, accurate data not blocked by ad blockers and a privacy-friendly alternative to Google Analytics.
permalink: /for-ecommerce
cta_headline: "Ready for accurate ecommerce analytics?"
---
If you run an ecommerce store, you need to know which campaigns, pages and sources make money. The question isn't whether to track that, it's whether you can do it without a cookie consent banner blocking visitors before they reach your store.

With GA4, you can't. Ecommerce revenue tracking in GA requires cookies, which means a consent banner, which means data loss from everyone who declines. Plausible tracks revenue attribution without cookies, so you get accurate data and your visitors get an uninterrupted path to checkout.

{% include cta-buttons.html %}

![Website analytics for ecommerce](/uploads/plausible-for-ecommerce.png "Website analytics for ecommerce")

1. Ordered list
{:toc}

## The problem with Google Analytics

Google Analytics is the default choice for most ecommerce teams, but it comes with real costs.

It's blocked by a large share of web visitors. Ad blockers and privacy-focused browsers routinely skip it, so a meaningful portion of your audience simply isn't counted. Some sites see 30% or more of traffic going untracked.

GA also uses cookies and collects personal data, which means you need a cookie consent banner. Those banners reduce data quality further because many visitors decline. So you end up with analytics that are both invasive and incomplete.

On top of that, GA4 made reporting harder for most users. The interface is complex, the setup requires configuration, and getting simple answers often means building custom reports.

Plausible is a [simpler, more accurate alternative](https://plausible.io/vs-google-analytics) that avoids these problems without asking you to give up the insights you rely on.

## You get accurate data from day one

Because Plausible is privacy-friendly by default, it isn't blocked at the same rate as Google Analytics. You immediately see more of your actual traffic.

On top of that, Plausible takes several steps to [improve data accuracy](https://plausible.io/most-accurate-web-analytics):

* Bots don't buy. When crawlers inflate product page views, conversion rates drop artificially and campaign performance looks worse than it is. We exclude around 32,000 data center IP ranges by default to keep your checkout funnel metrics clean.
* VPN and Tor browser visitors are grouped under "Anonymous VPN Service" to reduce noise in location reports.

We also support [proxying our script as a first-party connection](https://plausible.io/docs/proxy/introduction) for even higher accuracy.

## Switching is straightforward

You can import past stats so seasonal trends and year-over-year comparisons stay intact inside Plausible. Our [import tool](https://plausible.io/docs/google-analytics-import) automatically detects time ranges to prevent double counting or gaps in your data.

If your store runs on WordPress, WooCommerce or Shopify, setup takes minutes. We have a [WordPress plugin](https://plausible.io/wordpress-analytics-plugin) and direct integrations with the most common platforms. You can also install via [Google Tag Manager](https://plausible.io/gtm-template) or add the script directly to any site or framework. See all [installation guides](https://plausible.io/docs/integration-guides).

You can run Plausible alongside GA during the transition to compare results before removing anything.

## See where your traffic comes from

[Our dashboard](https://plausible.io/simple-web-analytics) gives you everything you need on one page. No custom reports to build, no menus to dig through. You can understand your site performance in under a minute.

At a glance you can see:

* Number of visitors and pageviews
* Where in the world your visitors are based
* What devices, operating systems and browsers they use
* What referral sources are driving your traffic
* Which pages visitors are landing on and where they drop off
* Bounce rate and visit duration by source

You can see [our live demo](https://plausible.io/plausible.io) for full details.

## Follow the user journey from paid ad to conversion

### Track marketing campaigns using UTM tags

UTM parameters help you identify which campaigns and content drive conversions. Dark traffic (clicks from emails, messenger apps and bookmarks) won't show a referrer source by default. Tagging your links with `utm_source`, `utm_medium` and `utm_campaign` solves that.

Plausible has full UTM tag support out of the box. You can:

* Track email marketing campaigns
* Compare paid vs. organic social
* Analyze individual posts, influencers or affiliate partners
* Measure guest blogging and content syndication

See "[how to use UTM parameters to track your campaigns](https://plausible.io/blog/utm-tracking-tags)". Use the [UTM builder](/utm-builder) to generate correctly tagged links, or the [UTM checker](/utm-checker) to validate existing ones before inconsistent naming splits your campaign data.

### Set up goals and events to track conversions

You can track any action you want visitors to take: visiting a specific page, clicking a button, completing a checkout or signing up for a newsletter.

Goals give you the number of completions, conversion rates and which referral sources are driving those conversions.

Here are the instructions on [how to get started with goals and events](https://plausible.io/docs/custom-event-goals).

### Build checkout funnels

Once you have custom events set up, you can build funnels to see where visitors drop off between steps. This helps you find friction points in your checkout flow and improve conversion rates. Here are the instructions on [how to get started with funnels](https://plausible.io/docs/funnel-analysis).

For open-ended exploration, [user journeys](https://plausible.io/docs/user-journeys) let you trace what shoppers do before or after any page without defining the path upfront.

## Track ecommerce revenue

You can send monetary values alongside custom events to [track revenue for your store](https://plausible.io/docs/ecommerce-revenue-tracking). Revenue attribution shows you which campaigns and landing pages generate the most revenue, not just the most clicks.

![Plausible ecommerce revenue tracking](/uploads/plausible-ecommerce-revenue-goal.png "Plausible ecommerce revenue tracking")

Revenue tracking supports multiple currencies. You'll see total revenue and average order value in your dashboard, and all revenue metrics are fully filterable by date, referral source, campaign, entry page, country or device.

GA4 ecommerce tracking relies on cookies to do this. Plausible doesn't, which means no consent banner between your visitor and your checkout, and no data lost to declines.

Also see: [How to boost ecommerce sales by tracking revenue attribution in web analytics](https://plausible.io/blog/ecommerce-revenue-attribution)

## Add custom properties to events and pageviews

You can attach metadata to any event or pageview to track dimensions that Plausible doesn't capture automatically. This lets you:

* Compare different website elements or variants
* [Track outbound link clicks](https://plausible.io/docs/outbound-link-click-tracking)
* [Track file downloads](https://plausible.io/docs/file-downloads-tracking)
* Run A/B tests

You can then filter and segment your dashboard by those properties. Just make sure not to send any personally identifiable information as custom property values.

[Learn more about custom properties for events](https://plausible.io/docs/custom-event-goals#using-custom-props) and [for pageviews](https://plausible.io/docs/custom-pageview-props).

## See organic search and AI traffic clearly

The **Organic Search** channel shows how much of your traffic comes from search engines. The **AI Assistants** channel tracks visits from tools like ChatGPT, Perplexity and Google Gemini as a separate group. For ecommerce, both represent discovery without ad spend: shoppers who found your store without you paying for the click.

Connect [Google Search Console](https://plausible.io/docs/google-search-console-integration) to see which search queries bring organic visitors to your store and which pages they land on.

## No cookie banner required

Plausible is compliant with GDPR, CCPA and PECR out of the box. We don't use cookies and we don't collect or store any personally identifiable information about your visitors.

For ecommerce, a cookie consent banner is friction before a visitor has even started browsing. Removing it means visitors reach your product pages and checkout without interruption, and you stop losing data every time someone declines.

You own and control all your data. We don't sell or share it with third parties and we don't use it for advertising. All data is hosted in the EU. If you sell into Europe, that removes cross-border data transfer questions and simplifies compliance when customers or regulators ask where visitor data is stored. Plausible is also open source. The code is publicly available, so you can verify exactly what the script collects before installing it on your store. See full details on what makes Plausible a [privacy-first web analytics](https://plausible.io/privacy-focused-web-analytics) tool.

## Stay on top of traffic changes

You can set up [traffic spike notifications](https://plausible.io/docs/traffic-spikes) to get alerted when a campaign or piece of content drives an unusual surge in visitors. Useful during launches, sales or press coverage.

## Build faster loading websites

Plausible's script is lightweight, which keeps your pages fast. Heavy analytics scripts are a common flag in Google PageSpeed Insights. By switching to Plausible, you reduce that overhead and improve Core Web Vitals without giving up useful data.

See more on our [lightweight analytics](https://plausible.io/lightweight-web-analytics).

## Build custom reports with Looker Studio

If you need more advanced reporting, the [Looker Studio connector](https://plausible.io/docs/looker-studio) lets you pull Plausible data into custom dashboards. You can combine it with data from other sources like Google Search Console or your ad platforms for a more complete view.

## Share stats with your team

You can invite teammates and assign roles: either view-only access to the dashboard, or full access to edit settings and manage collaborators. See more on [user accounts and roles](https://plausible.io/docs/users-roles).

You can also set up weekly or monthly [email reports](https://plausible.io/docs/email-reports) sent to multiple recipients. Stats are embedded directly in the email, no login required.

Or generate a private [shared link](https://plausible.io/docs/shared-links) to the dashboard for anyone who needs occasional access. No account required to view it, and you can password-protect it for extra security.

## Try Plausible Analytics

[Start a free 30-day trial](https://plausible.io/register). No credit card required and you can run Plausible alongside your existing analytics while you evaluate it.

We charge a subscription fee instead of monetizing your data. That's the model that keeps our incentives aligned with yours.
