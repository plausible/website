---
layout: post
title: Why analytics tools never show the same numbers?
description: Why Plausible Analytics often shows different numbers than Google
  Analytics, GSC, or email and ad tools — and what those differences mean.
slug: why-analytics-numbers-dont-match
date: 2025-10-27T13:33:24.328Z
author: hricha-shandily
image: /uploads/dashboard_plausible.png
image-alt: Plausible dashboard stats
---
If you’re comparing the data that you see in your Plausible dashboard with another tool you use like Google Analytics 4, Google Search Console, an email provider, Facebook ads, etc., seeing some differences is almost guaranteed.

That can lead to questions like: *Which tool is “right”? What do the differences mean? Should I trust one over the other? Is there a bug? Is my setup correct?*

I﻿n this blog post, we will explain why that happens — how things like browser blocking, cookie-consent banners, bot traffic, different definitions of m﻿etrics, how tags are installed, and more can lead to sizeable differences.

The goal isn’t to declare one tool “right” and the others “wrong,” but to help you interpret the numbers correctly and use them wisely.

1. Ordered list
{:toc}

## What makes analytics numbers differ?

Here are the main factors — across all categories of tools — that lead to discrepancies in analytics:

### Cookie consent and privacy settings

Many tools rely on cookies or identifiers that require visitor consent under GDPR/CCPA.

For example, if visitors decline tracking, a tool like GA4 may not count them. Plausible, by contrast, is designed to not rely on cookies and is privacy-friendly by default.

That difference alone can mean large gaps, especially for audiences in regions with strict consent laws.

### Script blocking by browsers & extensions

Ad-blockers, privacy browsers (Safari, Brave, Firefox) and other browser privacy settings often block popular analytics scripts. Since Plausible is privacy-friendly, it tends to be blocked much less often.

When one tool is blocked a lot and another isn’t, the numbers diverge.

### Tracking methodology & definitions

Different tools measure different things, and may define “users,” “sessions,” “visits,” “clicks” differently.

For example, Email platforms count every click on a tracked email link, ad platforms (Google Ads, Meta Ads, etc) count when someone clicks an ad – even if they close the page before it loads. But a web analytics tool only counts visits where the page loads and the script runs successfully.

Result: Click numbers from email or ad tools will almost always be higher than visits in your web analytic dashboard.

### Bots, crawlers and non-human traffic

Some tools (like Plausible) [filter known bots/crawlers more aggressively](https://plausible.io/blog/testing-bot-traffic-filtering-google-analytics); others include more of them (or count them as visits). Server-side logs or hosting dashboards count many requests from bots which analytics tools may ignore.

Thus, if one tool filters bots more strictly than another, you’ll see differences.

### Data sampling, modeling or estimated data

Some analytics platforms (especially large ones) apply data modeling or estimates when full data isn’t available (due to blocking, consent denied, etc.). Others only show what they *actually measured*. 

If one tool shows measured + modeled data and another shows measured only, the numbers naturally differ. For example, GA4 advertises modeling to fill gaps where tracking is difficult.

### Implementation / integration issues on your site

Sometimes the difference comes down to how the tracking is set up: script placed in the wrong place, tag fired too late or not at all, duplicate tags, incorrect redirects, etc. Small differences in setup affect whether a tool “sees” the visit or not.

### Attribution, scope and metric definitions

* Does a tool count a “click” or a “page view” or a “session”?
* Does a user navigating to a site via email link count in the same way as via organic search?
* Are campaign parameters (UTMs) used differently?
* Does a bounce count differently in one tool vs another?

Because each tool’s definitions vary, you’re comparing apples and oranges unless you align them carefully.

### Different scopes (visits vs clicks vs impressions)

Finally, some tools track impressions (how many times something was shown), some track clicks, some track page loads or sessions. If you compare an email-tool click count with a website-analytics visit count, you’ll almost always see mismatch — and that’s expected.

T﻿hese points alone must have painted a picture about why data differences occur. If you're comparing a specific tool to Plausible, feel free to go through our metrics' [definitions](https://plausible.io/docs/metrics-definitions), [ways of handling data](https://plausible.io/data-policy), or our [documentation](https://plausible.io/docs/) to help understand the differences deeply.

Y﻿ou can also find the specific category of comparison down below to help understand the differences more precisely.

## Category 1: Comparing Plausible data with other web analytics tools

Web analytics tools like GA4, Matomo, Plausible, Cloudflare, etc., require you to embed a script on your website which runs in the visitor’s browser, then reports data back to the respective dashboard.

While all web analytics tools operate similarly in principle, and essentially track same things, differences in design and calculation methods mean they report different numbers.

**How they differ vs Plausible:**

* Script size & blocking: Some tools use large scripts and may be blocked more frequently. Plausible is [intentionally lightweight](https://plausible.io/lightweight-web-analytics) and designed for minimal blocking.
* Tracking identifiers: Some use cookies, localStorage, unique user IDs, device fingerprinting; Plausible hashes IP + User-Agent + domain with a daily salt, resetting every 24 hours so no persistent user ID is stored.
* Privacy: Plausible is built with “[privacy by default](https://plausible.io/privacy-focused-web-analytics)” in mind. Other tools may collect more granular data (for example user-id, device, cross-device, etc) which also affects blocking/consent.
* Session definition: Different tools define session boundaries differently; e.g., when a session ends, when new session starts, how returning visitors are counted.
* Bot filtering: Each tool has its own logic/lists for what is a bot vs human visit.
* Data modeling or sampling: Some tools may sample large datasets or apply modeling; Plausible does not sample and shows only what was actually captured.

### GA4 vs Plausible

T﻿his is the most common comparison.

When you compare Plausible and Google Analytics side by side, you might notice that Plausible shows *higher* visitor numbers. That’s completely normal — and actually expected — because GA is more frequently blocked and often doesn’t run for every visitor.

**Why Plausible often reports higher numbers?**

* **Blocking:**\
  GA’s script is one of the most commonly blocked domains by browsers and extensions. Plausible’s script is privacy-friendly and much less likely to be blocked, and even more so if you use a [proxy](https://plausible.io/docs/proxy/introduction) setup (which can even count visits from people using ad blockers). 
* **Consent requirements:**\
  GA typically needs user consent to run, depending on how you’ve configured your GDPR or cookie banner. If a visitor declines, GA won’t count them at all. Plausible doesn’t use cookies or collect personal data, so it doesn’t need that consent and can count all visitors generally.
* **Data modeling:**\
  GA4 doesn’t always show purely measured data. In some cases, it fills in missing data using *modeled* or *predictive* metrics to estimate what likely happened. Plausible, on the other hand, shows only what was actually recorded on your site — no modeling, no extrapolation.
* **Script reliability:**\
  Because Plausible’s script is [small and loads early](https://plausible.io/lightweight-web-analytics), it tends to record visits more consistently. GA scripts depend on multiple tags and integrations, which are more prone to load delays or misconfiguration.

#### **When GA shows higher numbers than Plausible**

That’s *unusual* and usually a sign of an implementation issue rather than a data-collection difference. If GA is reporting more visitors than Plausible, it’s worth checking:

* Are both scripts installed on all the same pages?
* Could GA be double-counting events (for instance, if both Tag Manager and manual tags are firing)?
* Does your consent banner block the Plausible script but not GA’s?
* Is the Plausible snippet perhaps missing from some sections of your site?

If everything looks fine on Plausible’s side (script firing, your own test visit appearing correctly), then it’s likely that GA is over-counting due to duplicate installations or modeled data.

Y﻿ou can check out [our guide](https://plausible.io/blog/is-analytics-working-correctly) on how to check if Google Analytics, Plausible, or any analytics tool for that matter is working correctly.

## Category 2: Understanding the difference between Plausible and search data tools

These are services that do **not** rely on a script embedded in your site. Instead they collect data elsewhere (like search engine logs) and provide insights. A prime example is Google Search Console (GSC).

**How they work**

Take GSC: It reports impressions and clicks from Google Search results – i.e., before the user lands on your site. For example, an impression means your page appeared in a search result; a click means someone clicked the link to your site.

Plausible (and other on-site analytics) track what happens *after* the page is loaded and the script runs. So you’re comparing two different stages of the user journey.

**Why the numbers differ vs Plausible**

* GSC counts clicks in search results whether or not the page load fully completes (or the analytics script loads). Plausible only counts visits when the script executes and page view is recorded.
* Timing differences: GSC data is usually delayed or aggregated; Plausible shows real-time or near real-time.
* URL and query normalization: GSC aggregates by canonical URL and query; Plausible logs actual page URL visited.
* Scope difference: GSC focuses on search traffic; Plausible covers all traffic sources your script sees (organic, direct, referral, campaign).
* Filters: GSC may apply thresholding or drop certain low-volume queries; Plausible shows all recorded visits.

### GSC vs Plausible

What GSC reports:

* Impressions: number of times any URL from your site was shown in Google Search results.
* Clicks: number of times someone clicked a link to your site from Google Search.
* These metrics are from Google’s own search engine logs, not your website’s analytics.

What Plausible reports:

* Visits and page views captured when your site loads the script and registers an event.\
  So, for example, a user could click your search result (counted in GSC), but if they navigate away before your page loads, or your script fails, or they block scripts, Plausible won’t count the visit. That explains many mismatches.

F﻿or instance,If you see 1,000 clicks in GSC and 850 visits in Plausible in the same period, that doesn’t indicate a “loss” necessarily — it just means ~150 clicks didn’t lead to a page view recorded by Plausible (for any of the reasons above). That’s expected. Use GSC for how you appear in search; use Plausible for what happens on your site. The difference tells you something meaningful (for example: maybe your page loads slowly, causing drop-off before analytics loads).

## Category 3: Why ad platform clicks don’t match what you see in Plausible

These are the platforms where you run paid campaigns (e.g., Meta Ads Manager (Facebook/Instagram), Google Ads, LinkedIn Ads, TikTok Ads Manager, etc.). They track impressions, clicks, and often landing-page visits (depending on how you tag links).

* Ad platforms typically count a “click” when someone taps an ad link. That happens before your web page necessarily loads or your analytics script fires.
* Redirects, tracking links, or user drop-off before page load mean that a click reported by an ad platform may not translate into a visit recorded by Plausible.
* Attribution windows: ad tools may attribute conversions/clicks differently (e.g., last-click 7-day window) whereas still visits might be counted differently in your site analytics.
* Browser blocking/consent may stop the analytics script, but the ad platform already counted the click.
* Some ad tools count link-impressions or “view-through” conversions (ad shown but not clicked) — which don’t map to visits.

F﻿or instance,If your ad tool reports 500 clicks and Plausible shows 420 visits from the same campaign URL/UTM during that period, that gap likely comes from clicks that didn’t result in page loads or script execution (or blocking). That’s absolutely normal. Use the ad click number to understand the campaign click-volume; use the site analytics number to understand what actually arrived and was tracked.

## Category 4: Why email campaign clicks and Plausible visits don’t align

These are your newsletter and email-campaign platforms (e.g., Mailchimp, ConvertKit, MailerLite, etc.). They track email opens, link clicks and may report user behaviour in the campaign.

* Email platforms count clicks on links inside an email (sometimes pre-loaded, sometimes by bots checking links).
* A click doesn’t guarantee the user waits for your page to load, that the analytics script fires, or that they don’t bounce immediately.
* Some email platforms also count “opens” (which are often measured via a tiny image pixel) which don’t translate into site visits at all.
* The link payload may include redirects or tracking parameters, which sometimes get stripped or delayed by the browser before analytics script loads.
* Users may open email on a device and click but then close before page fully loads, or script blocked, meaning Plausible may not count them.

Expect that email tool “clicks” will almost always be higher than “visits” recorded by your web analytics. That doesn’t mean one is “wrong” — they measure different things: click attempts vs actual page-load visits. If the gap is large, you can look at how many clicks resulted in the analytics script firing (via UTM tagging + Plausible campaign tracking) and measure drop-off.

## Category 5: Why hosting dashboards and server logs show higher numbers

Server logs (Apache, Nginx, CDN logs, hosting dashboards like cPanel, etc) record every request to your server — static assets (images, CSS, JS), bots, crawlers, failed requests, clients with scripts disabled, etc. They don’t rely on browser-script execution. 

Because of that:

* They tend to show *far* more “hits” than a tool like Plausible, which only counts visits when the analytics script loads and fires.
* They include bot traffic, scraping, CDNs, cached assets, non-human traffic.
* Hosting dashboards might show “unique visitors” based on IP or session heuristics, but it’s often far less refined than analytics.

**Why numbers differ so much vs site analytics**

* Different units: server logs measure requests/hits, not necessarily human page-views.
* Bots/crawlers: lots of traffic that analytics filters out (because script didn’t run) will still show as server log hits.
* Caching/CDNs: Some assets may never hit your origin server, so hosting logs may under-count some hits, too.
* Script blocking: analytics script might not run in many visits, so analytics shows fewer; server logs will count the request anyway.

F﻿or instance,

If your hosting dashboard shows 10,000 “visitors” and Plausible shows 4,200 visits, that’s not Plausible missing traffic — it’s your host counting many things that your analytics tool intentionally excludes (non-human, blocked scripts, etc). 

Use hosting logs for server performance, bandwidth, errors; use analytics for human behaviour and visits.

## Making sense of it all

### Practical checklist

* Ensure your analytics script is installed correctly: placed in `<head>`, fires early, no duplicate tags.
* Review your cookie-consent implementation: is your analytics script blocked until consent is given? That might impact counts.

  * Y﻿ou can also check out if you even need a cookie consent implementation, how to be GDPR-compliant, etc. [This guide](https://plausible.io/blog/cookie-consent-banners) would be a good starting point.
* Tag campaigns with [UTM parameters](https://plausible.io/blog/utm-tracking-tags) consistently so you can compare traffic sources across tools.
* Check how many visitors might be blocking scripts (via browser & ad-blocker data) – this can help explain gaps.
* Compare definitions: what counts as a “visit”, “session”, “click” in each tool you’re comparing?
* Review the drop-off from “click” (ad tool / email tool) to “visit” (analytics). If drop-off seems large, investigate page-load speed, script execution, redirects.
* Use trends rather than absolute numbers: Is traffic going up or down? Which source is improving? That’s more actionable than precise counts.

Trying to make all your analytics tools show the exact same number is usually futile. Because each tool is measuring slightly different things, trying to force them into alignment often leads to frustration.\
Instead:

* Pick one tool as your “primary” measurement of traffic (for example Plausible for privacy-friendly, lightweight web analytics).
* Use the others for context (search behaviour via GSC, campaign click-data via ad/email tool, hosting logs for technical hits).
* Focus on trends, ratios, and changes over time, not the exact absolute number.
* Recognize that gaps between tools are not necessarily “bad” — they can tell you something meaningful (e.g., how much traffic is blocked, how many users bounce before the script fires, how many clicks don’t result in page-loads).

When your setup is correct and you understand what each tool is measuring, you can rely on Plausible’s metrics for your core decisions, and still use the others for complementary insights.

I﻿f you have any questions/confusion regarding specific metrics while comparing your Plausible data to another tool that we may have missed in this guide, feel free to [reach out](https://plausible.io/contact) to us. We are happy to answer any queries and if necessary, we will update this guide as well. All the best!