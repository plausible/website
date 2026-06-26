---
layout: post
title: Do ad blockers block Plausible Analytics?
description: Plausible is blocked far less often than Google Analytics, but some
  blockers can still block any analytics script. Here's how blocking works and
  how Plausible's proxy option closes most of the remaining gap.
slug: do-ad-blockers-block-plausible-analytics
date: 2026-06-25T09:00:00.000Z
author: hricha-shandily
image: /uploads/plausible-script-successfully-loaded.webp
image-alt: Browser Network tab showing a successful Plausible event request
---
Short answer: Plausible can be blocked, but far less often than other privacy-invasive tools such as Google Analytics. And if missing visits from blockers matter for your site, you can proxy Plausible through your own domain to bypass most of the remaining blocks and get more accurate stats.

Plausible is a [privacy-friendly](https://plausible.io/privacy-focused-web-analytics), cookieless analytics tool. We do not track people across websites, build user profiles, sell visitor data, or use persistent identifiers. Our [data policy](https://plausible.io/data-policy) explains exactly what we collect and why. Because of that, Plausible is not treated the same way as Google Analytics by many privacy-conscious people, browsers and blocklists.

But ad blockers are not one single thing with one single policy. Some block only ads. Some block known invasive trackers. Some block anything with "analytics" in the URL. Some users configure their browser to block all JavaScript. So the most accurate answer is:

* Plausible's default script is blocked far less often than Google Analytics.
* Some aggressive blockers can still block Plausible because they block all analytics tools, not just privacy-invasive ones.
* If you want the most complete data, you can run Plausible through a [proxy](https://plausible.io/docs/proxy/introduction), which makes the script and event endpoint load from your own domain.

Let's unpack what that means in practice.

1. Ordered list
{:toc}

## Why Plausible is blocked less often than Google Analytics

Ad blockers and browser privacy protections do more than block ads. They can also block known tracking domains, third-party scripts and requests that match tracking patterns. When a script does not load, the analytics tool cannot record the visit.

Google Analytics is specifically targeted by many of these protections because it is part of Google's advertising and tracking ecosystem. Plausible does not use cookies or persistent identifiers, track people across websites or collect personal data, so it is much less likely to be blocked.

Firefox and Safari block Google Analytics by default, but not Plausible. At the time of writing, [uBlock Origin's own Privacy list](https://github.com/uBlockOrigin/uAssets/blob/master/filters/privacy.txt) contains specific Google Analytics rules but no `plausible.io` entry. That is not a guarantee that every uBlock Origin setup allows Plausible: visitors can enable other lists or custom rules, and DNS blockers, company firewalls and disabled JavaScript can all block analytics requests.

In one Plausible study, we compared Google Analytics and Plausible on a site that received a large amount of tech-savvy traffic from Hacker News and Reddit. Plausible was installed using a proxy to get the clearest view of total human traffic, while Google Analytics was installed normally.

The result: [Google Analytics missed 58% of visitors](https://plausible.io/blog/google-analytics-adblockers-missing-data) in that audience.

That is an extreme case, because Hacker News and Reddit audiences are more likely to use ad blockers, privacy browsers and stricter browser settings than average visitors. But it shows the underlying problem clearly: if your audience uses privacy tools, Google Analytics can miss a large share of real traffic.

GA4 has the same structural issue. It is still Google Analytics, still integrates with Google's ad ecosystem and is still commonly blocked. Plausible can still be blocked, but it cannot and should not override someone deliberately disabling JavaScript or blocking all measurement. For blockers that target a known analytics domain, proxying is the practical option.

## How the Plausible proxy reduces ad blocker impact

A [Plausible proxy](https://plausible.io/docs/proxy/introduction) lets you serve the Plausible script and send events through your own domain instead of `plausible.io`.

For a standard installation, the site-specific script URL looks like this:

```html
https://plausible.io/js/pa-XXXXX.js
```

With a proxy, your site can load it through a first-party URL on your own domain, such as:

```html
https://yourdomain.com/js/script.js
```

The exact script and event URLs depend on your proxy setup, but the principle is the same: the browser sees the analytics request as a first-party request from your own website, not as a request to a known analytics service.

This bypasses most blockers that target third-party tracking domains and known tracking URLs. It does not affect visitors who disable JavaScript or block your own domain.

## Is using a proxy ethical?

Proxying changes how the request reaches Plausible, not what Plausible collects. It still does not build advertising audiences, identify individual visitors or use cookies. You can review the details in our [data policy](https://plausible.io/data-policy). Visitors who disable JavaScript or block your own domain can still avoid being counted.

## Proxy options in Plausible

Choose the setup that fits your site:

* **WordPress:** enable the proxy in the official [Plausible Analytics WordPress plugin](https://plausible.io/wordpress-analytics-plugin).
* **Developer-managed site:** use the [proxy documentation](https://plausible.io/docs/proxy/introduction) for Cloudflare, Netlify, Nginx, Vercel and other supported setups.
* **Enterprise:** use Managed Proxy, where you point a CNAME at our infrastructure and we handle the ongoing setup.

## Why your own Plausible visit might not show up

One reason people ask "does Plausible get blocked by ad blockers?" is that they visit their own site and do not see themselves in Real-Time.

Before assuming an ad blocker is the cause, run Plausible's [integration verification tool](https://plausible.io/docs/troubleshoot-integration). If it confirms that tracking works, the issue is usually specific to your own browser, account or network rather than your visitors' traffic.

If you use the official WordPress plugin, logged-in administrator visits are [excluded by default](https://plausible.io/docs/wordpress-integration). You can enable the Administrator role in the plugin's "Track analytics for user roles" setting when you need to test your own visits.

Otherwise, check your browser's Network tab after reloading the page. Look for the Plausible script request, which starts with `pa-`, and the event request. A blocked request usually identifies the extension or policy responsible. Other common causes are an incorrect snippet or domain, a Content Security Policy, testing a staging site, network-level blocking or missing pageview tracking in a single-page app.

We have a full guide on [checking whether your analytics setup is working correctly](https://plausible.io/blog/is-analytics-working-correctly), plus a [Plausible troubleshooting guide](https://plausible.io/docs/troubleshoot-integration).

## Why Plausible and GA4 numbers are often different

If Plausible shows more visitors than GA4, that is usually expected.

GA4 can be blocked, prevented from running after a consent decline, or use modeled data to fill gaps. Plausible does not need cookies or a consent banner from our side, and a proxy can reduce its remaining ad blocker gap. The tools also define visitors, sessions, bot traffic and attribution differently, so not every difference comes from blocking. In [our bot-filtering test](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics), GA4 counted simulated bot traffic that Plausible excluded. Read our guide on [why analytics tools never show the same numbers](https://plausible.io/blog/why-analytics-numbers-dont-match).

## Should you worry about ad blockers when using Plausible?

It depends on your audience and how precise you need the numbers to be.

If you run a general website, Plausible's standard script is likely enough. You will already [avoid the biggest accuracy problems](https://plausible.io/most-accurate-web-analytics) that affect GA4: cookie consent gaps, heavier tracking, Google-specific blocking and privacy-hostile design.

If you run a site for developers, privacy-conscious users, open source communities, security professionals or other technical audiences, you should consider proxying Plausible. Those audiences use ad blockers and privacy tools at much higher rates.

If you make business decisions from small changes in conversion rate, traffic source performance or campaign ROI, proxying can also be worth it. A small amount of missing data can matter when you are optimizing at the margins.

## Frequently asked questions

<style>
  .adblocker-faq {
    margin-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .adblocker-faq details {
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
  }

  .adblocker-faq summary {
    align-items: center;
    color: #111827;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    list-style: none;
  }

  .adblocker-faq summary::-webkit-details-marker {
    display: none;
  }

  .adblocker-faq summary::after {
    align-items: center;
    background: #eef2ff;
    border-radius: 9999px;
    color: #4f46e5;
    content: "+";
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 1.25rem;
    height: 1.75rem;
    justify-content: center;
    line-height: 1;
    margin-left: 1rem;
    width: 1.75rem;
  }

  .adblocker-faq details[open] summary::after {
    content: "-";
  }

  .adblocker-faq p {
    color: #4b5563;
    line-height: 1.7;
    margin: 0.75rem 2.75rem 0 0;
  }
</style>

<div class="adblocker-faq">
<details>
  <summary>Do ad blockers block Plausible Analytics?</summary>
  <p>Some can, but Plausible is blocked far less often than Google Analytics. Strict filter lists, custom rules and network-level blockers may still block it.</p>
</details>

<details>
  <summary>Does Plausible use cookies or need a cookie banner?</summary>
  <p>No. Plausible is cookieless by design and does not use persistent identifiers. You <a href="https://plausible.io/blog/legal-assessment-gdpr-eprivacy">do not need a cookie consent banner</a> just because you use Plausible, though obligations can depend on the rest of your site and your jurisdiction.</p>
</details>

<details>
  <summary>Does a Plausible proxy bypass all ad blockers?</summary>
  <p>A proxy bypasses <b>most</b> blockers that target third-party analytics domains, but it will not count visitors who disable JavaScript or block your own domain.</p>
</details>

<details>
  <summary>Is Plausible more accurate than Google Analytics?</summary>
  <p>For many sites, yes. Plausible is blocked less often, does not depend on cookie consent and filters bots more aggressively by default. Read <a href="https://plausible.io/most-accurate-web-analytics">the full comparison</a>.</p>
</details>

<details>
  <summary>Can I test how much data GA4 is missing?</summary>
  <p>Yes. Run Plausible and GA4 side by side for a few weeks, then compare visitors, pageviews and conversions on the same pages.</p>
</details>
</div>

{% include cta-box.html
  headline="Want to see the difference on your own site? Run Plausible alongside GA4 and compare the data."
  link="/register"
  link_text="Start free trial"
  secondary_link="https://plausible.io/docs/proxy/introduction"
  secondary_text="Read proxy setup guide"
%}
