---
layout: article
title: "White label web analytics for SaaS platforms and website builders"
description: "Embed a white-label analytics dashboard into your website builder, hosting service, SaaS platform or marketplace. No Plausible branding, no cookies, no analytics consent banner."
permalink: /white-label-web-analytics
cta_headline: "Ready to give every customer their own analytics?"
---
Building analytics into your product from scratch takes significant time and ongoing maintenance. Plausible gives you a complete, privacy-first white-label analytics product you can integrate directly into your own, with no Plausible branding visible to your customers.

Because we don't use cookies or collect personal data, your customers won't need consent banners or worry about GDPR compliance on the analytics side. All visitor data stays on EU-owned infrastructure. The dashboard is fast, clean and easy to use with no training required.

Plausible is trusted by {{ site.data.site.subscriber_count }} paying subscribers. We're an independent, bootstrapped company launched in 2019, funded solely by our subscribers.

{% include cta-buttons.html %}

![White label web analytics for SaaS platforms and website builders](/uploads/plausible-whitelabel.png "Plausible: White label web analytics")

1. Ordered list
{:toc}

## Built for products where every customer needs analytics

This model works especially well for platforms where each customer has a site, storefront or campaign of their own.

**Website builders and hosting services** can include analytics with every customer site. Your backend provisions the dashboard when a site goes live, so customers have useful traffic data from day one. The same setup works for AI site builders.

**SaaS platforms** can add analytics as a maintained product feature without building a separate collection and reporting system. Customers stay inside your interface and see a dashboard that already feels familiar.

**Marketplaces** can give each seller a dashboard for their own storefront or listings. Each embedded view contains only that seller's site data.

**Agencies** can present client analytics under their own brand inside a client portal or reporting interface. Our [analytics for agencies](https://plausible.io/for-freelancers-agencies) guide covers client reporting and multi-site management in more detail.

## Operate one integration instead of an analytics product

Analytics at platform scale is not just a dashboard project. It means running event collection, storage, aggregation, bot filtering, reporting and ongoing product maintenance for every customer.

Plausible operates that analytics infrastructure and keeps the dashboard current. Your team connects customer provisioning, event routing and access to your own product once. The same integration then works as you add more customers.

You own how analytics fits into your product and who can access it. Plausible owns the analytics system behind it.

## How Prezly uses Plausible in production

[Prezly](https://www.prezly.com/feature/pr-analytics-tool) embeds Plausible to give customers privacy-first newsroom and story analytics inside its PR platform. It [chose Plausible](https://www.prezly.com/changelog/meet-your-new-analytics-dashboard) because of our ethics and the dashboard's accessibility and uses Plausible for its own site analytics too.

Prezly says more than 500 PR teams use its platform to track performance, including teams at Sennheiser, Sony and IKEA. Plausible also powers the traffic data in Prezly's [2025 PR performance report](https://www.prezly.com/insights), which draws on millions of newsroom pageviews.

It shows what the white-label model can become: analytics delivered as part of another product, maintained through one integration and useful across a large customer base.

## How a multi-tenant integration works

### Provision one site for each customer

When a customer signs up or publishes a site, your backend uses the [Sites API](https://plausible.io/docs/sites-api) to create a site for them. The domain does not need to match a real hostname, so you can use a unique subdomain or tenant identifier.

The same API can configure tracker settings and goals, create the shared link used for the embedded dashboard, change the site identifier and delete the site when a customer leaves.

### Send each customer's events to the matching site

Your tracking script or Events API sends that customer's pageviews and custom events with the matching site identifier.

### Show the analytics inside your product

Embed the customer's shared link as an iframe, or use the Stats API to build your own interface. Each shared link is scoped to one site, so the embedded view contains only that site's data and cannot navigate to another site or account-level information. Your application controls which customer receives each link.

## Embed our dashboard or build your own

### Embed dashboard for the quickest path

Embed the default Plausible dashboard into your interface with no Plausible branding. Customers get a complete dashboard without needing a Plausible account or learning another analytics product.

You can choose a light, dark or system theme and set a custom background color. Manual width mode lets the iframe fill a container defined by your product. A shared link can also be limited to a saved segment when a customer should see only part of a site's data.

See the [embedded dashboard documentation](https://plausible.io/docs/embed-dashboard) for the setup details.

### Stats API for a custom interface

Use the [Stats API](https://plausible.io/docs/stats-api) when you want complete control over the presentation. Pull individual metrics into existing screens or build a custom dashboard around the data that matters to your customers.

You can combine both approaches. Embed the complete dashboard in one section of your product and use the Stats API for headline metrics elsewhere.

## Run the integration across your customer base

**Managed proxy** routes the script and event collection through your domain as a first-party connection. Plausible runs the proxy for you, so there is no proxy infrastructure for your team to maintain.

**Consolidated View** combines traffic across all customer sites in one internal dashboard. Your team sees the network as a whole while each customer-facing shared link remains limited to one site.

## Plans and pricing

The embedded dashboard, Stats API and Consolidated View are available on Business plans and during the 30-day free trial, so you can test all three without a credit card.

If your product needs to provision sites automatically for each customer, you need the Sites API and an Enterprise plan. Enterprise is also required for a managed proxy or more than 10 sites.

Enterprise pricing is based on your customers' combined monthly pageviews and custom events, the number of sites, members of your own team who need access to the Plausible account, API limits and any other requirements. Within your site allowance, adding another site does not create a separate subscription or charge.

## Ready to integrate?

[Start a 30-day free trial](https://plausible.io/register) with no credit card required. The trial includes the embedded dashboard, Stats API and Consolidated View, so your engineers can test the integration before committing to a plan.

If you need the Sites API, a managed proxy or more than 10 sites, email us at [hello@plausible.io](mailto:hello@plausible.io) with a rough estimate of:

- Your expected combined monthly pageviews and custom events
- The number of customer sites, campaigns or tenant dashboards
- The number of people on your own team who need access to the Plausible account. Your customers access their dashboards through your product and do not need Plausible accounts.
- Whether you need a managed proxy or higher API limits

We'll reply with the likely setup and pricing.

## Frequently asked questions

**What is white-label analytics?**
White-label analytics is an analytics product you integrate into your own product under your own brand. Your customers see the dashboard inside your product while Plausible runs the underlying analytics infrastructure.

**Which plan includes white-label features?**
The embedded dashboard, Stats API and Consolidated View are available on Business plans and during the 30-day free trial. The Sites API, managed proxy and setups with more than 10 sites require an [Enterprise plan](https://plausible.io/enterprise-web-analytics).

**Can I match the dashboard to my product?**
Yes. The embedded dashboard supports light, dark or system themes, a custom background color and manual width control. For complete design control, use the Stats API to build your own interface.

**Can customers see each other's data?**
Each shared link is scoped to one site, so the embedded view contains only that site's data and cannot navigate to another site or account-level information. Your application controls which shared link is shown to each customer.

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
        "text": "White-label analytics is an analytics product you integrate into your own product under your own brand. Your customers see the dashboard inside your product while Plausible runs the underlying analytics infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Which plan includes white-label features?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The embedded dashboard, Stats API and Consolidated View are available on Business plans and during the 30-day free trial. The Sites API, managed proxy and setups with more than 10 sites require an Enterprise plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I match the dashboard to my product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The embedded dashboard supports light, dark or system themes, a custom background color and manual width control. For complete design control, use the Stats API to build your own interface."
      }
    },
    {
      "@type": "Question",
      "name": "Can customers see each other's data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each shared link is scoped to one site, so the embedded view contains only that site's data and cannot navigate to another site or account-level information. Your application controls which shared link is shown to each customer."
      }
    }
  ]
}
</script>
