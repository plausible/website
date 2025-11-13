---
layout: post
title: Consent Mode and how GA4 fills missing data with behavioral modeling and
  modeled conversions
description: Google Consent Mode, why GA4 depends on modeled data, and how
  Plausible offers a simple, privacy friendly alternative with real insights.
slug: consent-mode-ga4-modeled-data
date: 2025-11-13T19:34:33.765Z
author: hricha-shandily
---
Consent Mode and how GA4 fills missing data with behavioral modeling and modeled conversions

A few years ago, website owners could collect almost any data they wanted. Nobody had to give consent, nobody questioned tracking, and analytics tools like Google Analytics had a perfect view of visitors.

That time is gone. People are aware, they say no to tracking. While browsers can block cookies. Laws demand real consent. And when a visitor rejects tracking, GA4 loses almost everything. To fix this loss, Google created something called the Consent Mode.

## What is Google Consent Mode?

When you implement a [cookie consent banner](https://plausible.io/blog/cookie-consent-banners) on your website, normally what you’d expect to happen is this: 

Consent given: track. Consent not given: do not track.

And because a major chunk of site visitors deny the cookie banners and do not like to give away their data, GA4 and Google Ads lose a lot of valuable data to show on their dashboards. In fact, about 50% of the data is [known to be lost](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) due to this very reason.

Also, GA4 depends heavily on identifiers to build its reports. It tries to:

* connect sessions
* stitch users across pages
* create user journeys
* map attribution
* link behavior from web to app

All this breaks the moment cookies or identifiers disappear. If someone says no to tracking, GA4 loses the ability to understand who did what.

Enter: Consent Mode. Google designed the consent mode to help you recover some of that lost data through anonymized data collection and data modeling. Also, Google Ads cannot optimize well when conversions vanish. So Google built modeled conversions to fill the gaps.

Basically, Consent Mode is Google’s patch to keep the ecosystem running.

### How it works?

Consent Mode helps your site or app tell Google whether a user has agreed to cookies or tracking. So when someone gives or refuses consent, Google tags can change how they work. 

There are two implementation options available: a “basic” mode where tags are blocked until consent is given. It’s simple in the sense that Google tags are completely blocked from firing when the user doesn’t consent.

And there’s an “advanced” mode where tags load with default denial, send limited “cookieless pings” and only send full measurement data when consent is granted. These pings do not include:

* User identifiers
* Cookie values
* Cross page state
* Any personally identifying data

So GA4 cannot link one page to another. A single user moving around your site may appear as ten separate events.

The thing to note is that even if consent is not given, Google tags still fire but dynamically adapt and anonymize the customer data. So some information is still collected.

To explain: say a visitor rejects the tracking cookies through your consent banner. In this case, the google tag still fires, except that the tag dynamically adapts and anonymizes the customer data this time. Such anonymized data plus the patterns of people who did consent are used to estimate what non consenting users probably did.

This is called behavioral modeling. Google also creates modeled conversions for Google Ads.

Consent Mode is not just a switch you flip. It is a whole system that tries to rebuild the data GA4 can no longer collect.

You can configure the flow of consent, conditions of tags firing, etc., using Google Tag Manager too.

### Setting up Consent Mode

Google explains the full setup [here](https://support.google.com/google-ads/answer/10000067?hl=en&ref_topic=3119145&sjid=3231591900712849463-AP). But the general process is:

1. Update the default consent state to “denied”
2. Load your tags but keep them blocked until the visitor chooses
3. When someone accepts, update the consent state to “granted”
4. GA4 and Ads start collecting full data again
5. If they reject, only pings are sent

It is not a plug and play feature. It requires Tag Manager configuration, banner integration, and usually some developer help.

If you want modeling to appear in your GA4 interface, you must switch your reporting identity to “Blended” from your settings.

This mixes real, observed events AND modeled, predicted events. GA4 does not tell you which is which in the final reports.

To even activate modeling, Google requires thresholds like:

* at least one thousand daily events where analytics storage is denied for at least seven days
* at least one thousand daily events where analytics storage is granted in the past twenty eight days

Small sites often cannot meet these requirements. So for many websites, modeling never happens.

#### The reality: you still lose data

Consent Mode is not a magic fix. Google is very clear that:

* Some data will always be missing
* Modeling does not fill everything
* Reports will still be incomplete

Even the raw data you can export to BigQuery is mostly empty for non consenting visitors. You get event timestamps, but no identifiers, no session linking, no user counts, nothing that helps you understand journeys.

It is only useful for basic things like:

* total event counts
* timestamps
* very simple aggregations

And you need SQL skills to work with it.

## Why Consent Mode creates a legal gray area

Consent Mode does not observe non consenting users directly. Instead it uses limited pings and the behaviour of consenting users to predict how rejected sessions might have played out.

This reconstruction is triggered by a mathematical model, not by real data. Legal experts highlight that predicting behaviour after a user rejects tracking can be problematic. This is why Consent Mode is seen as a gray area instead of a clear privacy solution.

Secondly, even though such data doesn’t go with personally identifiable information like complete IP Addresses (semi-anonymized IP Addresses still register), site owners are still sending some sort of data about the user (while the user thought you weren’t) to Google servers.

Here’s the thing to be noted: We can never know how that data is really processed by the servers, before being anonymized. Since Google is a closed-source and proprietary entity, there’s no way to find out either.

## What this means for your GA4 reports

To put it plainly:

* Your reports may look complete, but parts of them are guesses
* You cannot tell what is real from fake
* Smaller sites get almost no benefit
* Understanding your own data gets harder
* Debugging becomes a challenge
* BigQuery exports are confusing

Many businesses look at their reports and do not realize how much is modeled.

…plus, you’ll still need to invest in legal consulting.

## Do I need Google Consent Mode?

This is the big question most website owners have, and the honest answer is: it depends on your setup and on what you expect from GA4. Here is the straightforward breakdown:

You need Google Consent Mode if:

* You use GA4 with cookies
* You show a cookie banner
* You want GA4 to legally respect the visitor’s choice
* You want GA4 to fill the gaps with modeled data
* You rely on Google Ads and need modeled conversions
* You want to avoid collecting data before consent is granted

Without Consent Mode, GA4 will simply stop collecting data whenever a visitor declines tracking. You will lose a lot of information, and nothing will be reconstructed.

You do not need Consent Mode if:

* You stop using GA4
* You use an analytics tool that does not rely on tracking identifiers
* You do not want modeled data in your reports
* You prefer simple, human readable analytics over predictive ones
* You want to avoid dealing with consent banners, GTM settings, and the legal gray area

In other words, Consent Mode is required only if you want GA4 to keep functioning in a privacy regulated world.

If you want to keep using GA4 and want your numbers to look somewhat complete, Consent Mode is basically unavoidable.

## GA4 is reconstructing data, not recovering it

This distinction matters. Recovery means the data existed and we got it back. Reconstruction means the data did not exist and we estimated it.

GA4’s modeled metrics are reconstruction. They are not real events. They are predictions.

Once modeling is active, GA4 mixes:

* real observed data\
  and
* predicted modeled data

GA4 does not mark which is which. You cannot separate them in your reports.

This makes analytics harder to trust because you do not know how much of the dashboard is based on actual activity versus machine learning.

Plausible avoids this because it never needs to guess.

## Plausible as a privacy-first, accurate alternative to GA4

You do not need Consent Mode at all with Plausible because we do not rely on cookies, identifiers, or personal data in the first place. This changes everything about how analytics works in a privacy-first world.

### What you do not need with Plausible

With Plausible, you skip all the complexity that Consent Mode tries to solve:

* No consent banner required in most cases
* No reconstructed or stitched sessions
* No modeled behaviour
* No hidden guesses in reports
* No BigQuery
* No machine learning

The numbers you see in your dashboard are based entirely on real events.

### What GA4 still cannot rebuild even with modeling

Google’s modeling system only fills in the broad strokes. Even with all modeling features enabled, GA4 cannot reconstruct:

* user journeys
* full session behaviour
* what pages a single non consenting user visited
* time spent
* accurate source attribution
* whether someone is new or returning

This is why GA4 reports can still feel misleading or incomplete. You avoid this problem entirely with Plausible.

### The complexity you avoid by choosing Plausible

Consent Mode is a workaround that creates a long chain of technical requirements. When you switch to Plausible, you skip all of this:

| **With GA4 + Consent Mode**                      | **With Plausible**                |
| ------------------------------------------------ | --------------------------------- |
| Cookie banner must load before all other scripts | No banner needed in most cases    |
| Scripts must wait for the correct consent state  | Scripts load normally             |
| GTM requires special configuration               | No GTM dependency                 |
| Reporting identity must be set to Blended        | No reporting identities to manage |
| Google modeling thresholds must be reached       | No modeling required              |
| BigQuery exports vary depending on consent       | No BigQuery setup needed          |
| GA4, Ads, and Tag Manager must stay in sync      | Nothing to sync                   |



Instead of adding more layers to fix a broken tracking model, Plausible works cleanly with how the modern web operates.

## The short version

GA4 uses Consent Mode because it was built for a world where tracking everyone was easy. That world is gone. So Google now uses modeling to rebuild what it lost.

We take a different path by working in the modern, acceptable, desirable, privacy-first world without needing to guess anything. Real data instead of reconstructed data.