---
layout: post
title: How to track conversion attribution across your domain and subdomains?
description: How to track pageviews, events, and conversions across your main
  domain and subdomains?
slug: conversion-attribution-across-domain-subdomains
date: 2024-08-20T14:09:22.371Z
author: hricha-shandily
image: /uploads/conversion-attribution-across-subdomains.png
image-alt: How to track conversion attribution across your domain and subdomains?
---
As a business with an online presence, you’ll almost definitely have, at least one of, a SaaS application, a blog, an online store, product documentation, or anything table stakes such as these.

And, you’ll have some important business/marketing goals like a product signup, upgrade to subscription, newsletter signup, etc. which won’t always happen on the main domain, but rather on a subdomain.

Usually, development teams create subdomains for easily organizing and managing these pages/apps/store. This raises the question: How to track pageviews, events, and conversions across your main domain and subdomains?

1. Ordered list
   {:toc}

## What even is a subdomain?

This is an important question because subdomain tracking is generally confused with cross-domain tracking. Let’s learn the differences quickly:

**Domain**

A domain is like the identity of a URL. For eg. in `[www.plausible.io](http://www.plausible.io)\`, \`plausible.io\` is the domain.

**Subdomain**

A subdomain is used to organize and separate different sections or functions of a website. For example, "app.plausible.io" or “blog.plausible.io” could be subdomains of the main domain "plausible.io".

**Hostname**

Hostname is that part of the URL that comes after the protocol (https://) and before the path (e.g., /about-us). So it could be either a domain or a subdomain.

## \[Anatomy] How a user travels from a place on the internet to converting on your site

Think of it from the perspective of the [tracking JavaScript snippet](https://plausible.io/docs/plausible-script) provided by your web analytics tool. Take a moment to look at the following representation of the user journey:

![How a user travels from a place on the internet to converting on your site](/uploads/anatomy-user-journey.png "How a user travels from a place on the internet to converting on your site")

So from the perspective of the JavaScript (JS) snippet, when a visitor comes to your site through a [referral link](https://plausible.io/docs/top-referrers#1-automatic-by-the-referer-header), the JavaScript (JS) code checks for any referral or UTM values.

So, it is able to record where the session came from. This, by the way, is how our [Top Sources report](https://plausible.io/docs/top-referrers) is made. For example, if someone clicks on a link from a social media post with utm_source=facebook, the JS code will note 'Facebook' as the source of that visit.

Then as the user interacts with your site, the JS snippet keeps recording such interactions in the form of [pageviews](https://plausible.io/docs/top-pages), button clicks, or any custom events for that matter.

Let’s say, the user now goes to \`app.subdomain.com\`, where you have a sign-up button tied to a key business or marketing goal. The JS snippet continues to monitor their actions.

This approach ensures that the visitor’s session remains active across your main site and its subdomains. You can set up [custom events](https://plausible.io/docs/custom-event-goals) or [pageview goals](https://plausible.io/docs/pageview-goals) in Plausible to track specific actions and even create a [funnel](https://plausible.io/docs/funnel-analysis) to follow the user’s journey across different domains or subdomains. 

Importantly, any conversions on subdomains, such as signing up, will be attributed back to the original referral source from the main domain.

## Zooming out

Now that we understand what everything means and how everything works, let’s focus on how to set everything up.

### Set up your subdomain tracking

Plausible, and most web analytic tools, recognize this requirement and automatically handle subdomain tracking when you simply register with a main domain only.

Just ensure that your same tracking script is included in the header of the source code of such subdomains as well and your job will be done. In-depth instructions are [here](https://plausible.io/docs/subdomain-hostname-filter).

### Set up some goals

Do you want to map your user journeys against some business/marketing goals? Decide what you want to track as a goal. [Revenue attributed goals](https://plausible.io/blog/ecommerce-revenue-attribution) are also possible to create with Plausible, and other web analytic tools.

In Plausible, this is easily doable with either [pageview goals](https://plausible.io/docs/pageview-goals) or [custom event goals](https://plausible.io/docs/custom-event-goals), which can even be visualized well in [funnels](https://plausible.io/blog/funnels-conversion-optimization) to follow the user journey across domains/subdomains.

### Utilize the dashboard appropriately

To actually “attribute” the conversions, you would need to filter your dashboard by this conversion (goal) itself and maybe, by the referrer source for a more in-depth analysis. For example, doing this for our own [live dashboard](https://plausible.io/plausible.io) produces the following result:

![segment of the traffic from a particular source that converted](/uploads/filtered-plausible-dashboard.png "segment of the traffic from a particular source that converted")

This way, you will only see the segment of the traffic from a particular source that converted, along with the conversion rate.

This data is regardless of the hostname. That is, the data is a holistic representation of the user journey that has already taken into account any subdomain tracking required in the backend. 

However, you can also refine your analysis by filtering your dashboard by hostname. By default, the Plausible dashboard displays all traffic across all your domains (basically wherever the same JS tracking script is added to).

But filtering by a specific subdomain helps you segment your traffic and focus on data from a particular subdomain.

![segment your traffic by hostname on plausible dashboard](/uploads/filter-by-hostname.png "segment your traffic by hostname on plausible dashboard")

P.S. Filtering by hostname is also beneficial when you have pages with identical paths on different sites. For example, if you have a page path like /best-page/ on both yourdomain.com and docs.yourdomain.com, these identical paths will be consolidated into a single entry in the "Top Pages" report on your global dashboard, with combined statistics.

By applying a hostname filter, you can differentiate between the performance of yourdomain.com/best-page/ and docs.yourdomain.com/best-page/, allowing you to see the number of visitors and pageviews for each separately.

## Example: Tracking signups to your SaaS app across domain and subdomains

Let’s say you're running a SaaS business with the following setup:

Main website: `www.yoursaas.com`

App subdomain: `app.yoursaas.com`

Blog subdomain: `blog.yoursaas.com`

Your primary goal is to track how users move from your main website (www.yoursaas.com) or blog (blog.yoursaas.com) to the app (app.yoursaas.com) and complete a signup.

### Steps to track signups across domain/subdomains

**1. Add the Tracking Script.** Ensure the same JavaScript tracking snippet provided by your web analytics tool (like Plausible, Google Analytics, Matomo) is added to the header of every page across all domains and subdomains: \`www.yoursaas.com\`, \`blog.yoursaas.com\`, and \`app.yoursaas.com\`.

**2. Set up a goal for signups.** In your web analytics tool, define a custom event or pageview goal for the signup completion.

For example, if your signup form redirects users to \`app.yoursaas.com/thank-you\`, you can set a pageview goal for that specific URL path.

**3. Monitor the user journey.** The tracking script will monitor the user's journey from the main domain or blog to the app. If a user lands on \`www.yoursaas.com\`, reads a blog post on \`blog.yoursaas.com\`, and then clicks a "Sign Up" button that redirects them to \`app.yoursaas.com/signup\`, their journey will be recorded as a single session.

If the user signs up successfully, the conversion will be attributed to the original referral source, whether it’s organic search, social media, or another channel.

**4. Utilize the dashboard.** Go to your analytics dashboard and filter by the signup goal to see how many users completed the signup process. This will show you the overall conversion rate, regardless of whether the signup happened on the main domain or a subdomain.

In Plausible, you can further filter by hostnames as well.

**5. Analyze the data.** Look at the Top Sources report (which are basically channel-acquisition reports) to understand where your converting users are coming from.

Use the funnel visualization (if available in your analytics tool) to track the step-by-step process users take from their initial visit to signup, across different domains and subdomains.

Congrats! You're effectively tracking and attributing signups across different domains and subdomains, giving you a clear picture of your user journey and conversion sources.

## Other things to note

### About cross-domain tracking

If you include your tracking script on a different domain, this’d help the web analytic tool know that a click to that other domain isn’t supposed to be counted as an exit and is a part of the user journey.

You may need this in cases where say a customer browses your website, and clicks a link to your billing page which is hosted on a different domain altogether.

Tools like Google Analytics 4 require some additional setup for tracking users beyond your own domains but can help you profile users and map their full journeys even beyond your domain.

In the case of Plausible, you can simply include your tracking script on a completely different domain (not subdomain), with no additional setup.

However, with Plausible, the same user session will not continue between these different domains, to prevent user profiling and be [GDPR compliant by design](https://plausible.io/privacy-focused-web-analytics), and it is better to track domain-exits as [outbound link clicks](https://plausible.io/docs/outbound-link-click-tracking).

### Common mistakes to avoid

* You don’t need to add a new site or account on Plausible for tracking different hostnames/subdomains. Same is true for the properties in GA4. But you can do so if you prefer.
* Sometimes, unexpected hostnames appear that can pollute your data. You can easily [allow only specific hostnames](https://plausible.io/docs/subdomain-hostname-filter#block-traffic-from-unwanted-hostnames) from your Plausible settings.
* In case you have multiple dashboards for different subdomains/domains, you don’t need to switch dashboards every now and then. Just use one [combined dashboard](https://plausible.io/docs/subdomain-hostname-filter#roll-up-reporting). However, keep in mind that this doesn’t represent a single, continuous user journey. Since a unique user session is only tracked across subdomains using the same script, including multiple different domains in one dashboard could lead to confusion.

## Winding up

Do you use cross-hostname tracking for specific use cases? We want to know! Write in at [reading@plausible.io](mailto:reading@plausible.io). Ciao!