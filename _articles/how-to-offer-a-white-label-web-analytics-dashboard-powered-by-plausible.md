---
layout: article
title: "White label web analytics for agencies and SaaS teams"
description: "Embed a white-label analytics dashboard into your product or client portal. No Plausible branding, no cookies, no consent banners. Used by agencies and SaaS teams worldwide."
permalink: /white-label-web-analytics
cta_headline: "Ready to embed analytics into your product?"
---
Building analytics into your product from scratch takes significant time and ongoing maintenance. Plausible gives you a complete, privacy-first white-label analytics product you can integrate directly into your own, with no Plausible branding visible to your customers.

Because we don't use cookies or collect personal data, your customers won't need consent banners or worry about GDPR compliance on the analytics side. All visitor data stays on EU-owned infrastructure. The dashboard is fast, clean and easy to use with no training required.

Plausible is trusted by {{ site.data.site.subscriber_count }} paying subscribers. We're an independent, bootstrapped startup launched in 2019, funded solely by our subscribers.

{% include cta-buttons.html %}

![White label web analytics for agencies and SaaS teams](/uploads/plausible-whitelabel.png "Plausible: White label web analytics")

1. Ordered list
{:toc}

## Who uses white-label analytics

Two types of teams typically embed Plausible into their product or service.

**SaaS teams** who need analytics as a feature. Your users want to understand how their product or site is performing, but building and maintaining a custom analytics dashboard is a significant engineering investment. Embedding Plausible gives you a complete, production-ready analytics product without the build cost, and keeps it maintained as you focus on your core product.

**Agencies** who manage client sites and want to present analytics under their own brand. Rather than pointing clients to a third-party tool, you can surface their data inside your own client portal, reporting interface or branded dashboard.

## Why teams choose white-label analytics over building from scratch

Building web analytics from scratch means owning data collection, storage, aggregation, visualization and ongoing maintenance. You also need to handle privacy compliance, bot filtering, adblocker bypass and scale. Each of those is a real engineering project.

Plausible handles all of it. You get a production-ready, privacy-compliant analytics product you can integrate in days. Your team keeps its focus on what makes your product different.

## How Prezly uses it in production

"Powered by web analytics good guys Plausible." That's how [Prezly](https://www.prezly.com/feature/pr-analytics-tool) describes the analytics they've built into their storytelling platform for PR teams. They [chose Plausible](https://www.prezly.com/changelog/meet-your-new-analytics-dashboard) for the team's strong ethics and the tool's accessibility, and use it on their own site too, not just for customers.

They embed Plausible to provide web analytics to thousands of their customers with no Plausible branding visible. Brands like Sennheiser, Nintendo, IKEA, Sony, Edelman and Weber Shandwick use Prezly's analytics, all powered by Plausible behind the scenes. Prezly promotes the analytics as a core product feature and has published [Prezly Insights](https://www.prezly.com/insights), a study drawing on aggregated data from across their customers' dashboards.

This is the typical pattern: one integration, managed once, that works automatically for every customer they onboard.

## One site per customer, provisioned automatically

If you run a SaaS platform, a website builder, a hosting service or a marketplace, the setup usually looks like this: each of your customers gets their own site in your Plausible account, created automatically the moment they sign up with you.

When a customer signs up, your backend uses the [Sites API](https://plausible.io/docs/sites-api) to create a site for them. The domain doesn't need to match a real hostname, so you can use a subdomain or tenant ID as the site identifier. Your tracking script or Events API sends that customer's pageviews and custom events with the matching identifier.

The Sites API then creates a shared link for the site, which you embed as an iframe in your customer's dashboard. It can also configure goals and custom events, change site identifiers and delete sites when customers leave. See the [Sites API documentation](https://plausible.io/docs/sites-api) for the full list of operations.

Each customer only sees their own data. A shared link is scoped to a single site's dashboard, so there's no way to navigate from one tenant's embedded view to another tenant's stats or to any account-level data. Isolation between customers is the default, not something you configure.

Standard plans include up to 10 sites. If you need more than 10, Enterprise plans combine a monthly usage tier for your customers' total pageviews and custom events with a site allowance from one of our Enterprise tiers. Some of our customers run thousands of sites on a single account.

Within your site allowance, provisioning another site costs nothing extra, so creating one for every customer, including tiny or inactive ones, doesn't multiply your costs or require a plan change at each signup.

## Embed dashboard to integrate our stats into your user interface

Embed dashboard allows you to embed our default dashboard (without Plausible branding) into your user interface. You get our modern, fast-loading and fully featured web analytics without any need for you to build a dashboard yourself.

The embed dashboard allows you to select the dashboard's theme (light, dark or system) or choose a custom background color. You can change CSS rules to make sure that the embedded dashboard aligns with your site design. 

You can also apply filters to the embed dashboard to segment the audience. These filters will be automatically added to your embed dashboard every time it's loaded. You can read more about [filtering and segmenting here](https://plausible.io/docs/filters-segments).

Learn more about [the embed dashboard functionality here](https://plausible.io/docs/embed-dashboard).

## Stats API for complete flexibility

Stats API allows you to take individual metrics and create a custom-built dashboard in whatever shape you want. Show one metric only or build a fully featured dashboard from scratch.

While the Stats API requires more development time than the embedded dashboard option, it offers complete flexibility.

Do you prefer to offer a fully featured dashboard but also display specific metrics in certain sections of your user interface? Stats API can also be used in combination with the embedded dashboard.

See our [stats API documentation](https://plausible.io/docs/stats-api).

## Proxy to eliminate third-party calls

Proxy allows you to run our lightweight web analytics script as a first-party connection from your domain, which also means [more accurate stats](https://plausible.io/most-accurate-web-analytics) since content blockers don't typically block first-party scripts.

You can proxy requests to Plausible in various ways, depending on how you've built your product and your hosting situation. If you don't want to manage your own proxy, we can handle it for you with our managed proxy. Our managed proxy helps bypass adblockers and count more traffic without any setup or maintenance on your end.

Learn more about [the proxy functionality](https://plausible.io/docs/proxy/introduction).

## Consolidated View for a holistic look at your network

Consolidated View aggregates stats from all your sites into one combined dashboard while keeping individual site dashboards separate. You can keep a global view for internal purposes and share each tenant site's stats only with that client.

Learn more about [the consolidated view functionality](https://plausible.io/docs/consolidated-views).

## Frequently asked questions

**What is white-label analytics?**
White-label analytics (sometimes called private-label analytics) is an analytics product you integrate into your own under your own brand. Your customers see your dashboard, your design, your name. The underlying analytics infrastructure is Plausible's.

**How do I set it up?**
The quickest path is the embedded dashboard: create a shared link via the Sites API, then embed the iframe in your product. The full process typically takes a day or two of integration work. If you need more control over the presentation, the Stats API lets you pull individual metrics and build a fully custom UI.

**Which plan includes white-label features?**
The embedded dashboard, Stats API and Consolidated View are available during the 30-day free trial and on Business plans. These cover most integration scenarios.

The Sites API, managed proxy and setups with more than 10 sites are on our [enterprise plan](https://plausible.io/enterprise-web-analytics).

**Can I match the dashboard to my brand?**
Yes. The embedded dashboard supports light, dark or system themes, a custom background color and custom CSS. For complete design control, use the Stats API to build your own interface from scratch.

**Can my customers see each other's data?**
No. Each embedded dashboard is powered by a shared link scoped to a single site. A customer viewing their embedded dashboard can't navigate to another customer's stats, your platform-level analytics or anything else in your account. Tenant isolation is the default.

## Ready to integrate?

[Start a 30-day free trial](https://plausible.io/register) with no credit card required. The embedded dashboard, Stats API, Consolidated View and proxy are all available during the trial and on Business plans, which covers most integration scenarios. If you need the Sites API or a managed proxy, [contact us](https://plausible.io/contact) to discuss an enterprise plan.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is white-label analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White-label analytics (sometimes called private-label analytics) is an analytics product you integrate into your own under your own brand. Your customers see your dashboard, your design, your name. The underlying analytics infrastructure is Plausible's."
      }
    },
    {
      "@type": "Question",
      "name": "How do I set it up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The quickest path is the embedded dashboard: create a shared link via the Sites API, then embed the iframe in your product. The full process typically takes a day or two of integration work. If you need more control over the presentation, the Stats API lets you pull individual metrics and build a fully custom UI."
      }
    },
    {
      "@type": "Question",
      "name": "Which plan includes white-label features?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The embedded dashboard, Stats API and Consolidated View are available during the 30-day free trial and on Business plans. These cover most integration scenarios. The Sites API, managed proxy and setups with more than 10 sites are on our enterprise plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I match the dashboard to my brand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The embedded dashboard supports light, dark or system themes, a custom background color and custom CSS. For complete design control, use the Stats API to build your own interface from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "Can my customers see each other's data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Each embedded dashboard is powered by a shared link scoped to a single site. A customer viewing their embedded dashboard can't navigate to another customer's stats, your platform-level analytics or anything else in your account. Tenant isolation is the default."
      }
    }
  ]
}
</script>
