---
layout: article
title: "Lightweight web analytics built for fast-loading websites"
description: Plausible Analytics is a lightweight alternative to Google Analytics. A tiny script, no cookies, no consent banner and no negative effect on your Core Web Vitals.
permalink: /lightweight-web-analytics
---
Most websites are slowed down by the very tools used to measure them. Google Analytics is one of the heaviest third-party scripts you can add to a site, and it brings hidden costs beyond just file size.

[Plausible](https://plausible.io/) is built differently: a minimal script that collects what matters without adding meaningful weight to your pages.

![Plausible: A lightweight web analytics tool](/uploads/plausible-lightweight-script.png "Plausible: A lightweight web analytics tool")

1. Ordered list
{:toc}

## Why should I care about my website speed?

Here are some of the key reasons site speed matters:

1. **People are impatient** and the slower your site loads the higher chance a significant part of your first-time visitors will close the browser tab or click on the back button. Page load time directly impacts the [bounce rate](https://plausible.io/blog/bounce-rate#understanding-bounce-rate). Studies consistently show that bounce rates rise sharply as load time increases. Aim for your site to load within 2 seconds.
2. Search engines such as Google have **page speed as one of their ranking factors** which determine how sites rank in the search results. A slower page speed may result in your site ranking lower and getting fewer visitors from search than a faster loading site. Learn more about [Core Web Vitals](https://plausible.io/blog/page-experience-web-vitals).
3. **Most traffic is now on mobile devices** with slower connections and limited data plans. A heavier page takes longer to load and costs your visitors real data. Speed matters more on mobile than anywhere else.
4. **Page speed directly affects conversions.** Slow pages lose sales, sign-ups and leads. Even a small improvement in load time can have a measurable impact on revenue.
5. A lighter and faster site means less data is transmitted and less electricity is used. **A lighter site emits less carbon** for every visitor.

## Why is Google Analytics so heavy?

Google Analytics is by far the most widely used analytics platform on the web. Its tracking code is large because it has to be: it is a centralized platform built to support advertising, remarketing, conversion tracking, cross-site audience building and hundreds of individual reports. Most website owners don't use the vast majority of those features, but they pay the performance cost for all of them on every visit.

GA4 also makes multiple network requests on each page load, not just one. That means more connections to external Google servers, adding latency on top of the raw script weight.

For most site owners it is overkill. The problem most people are actually trying to solve is figuring out how many people visit their site, where they came from and what they did. Google Analytics is also a privacy-unfriendly way to answer that question.

## Script size comparison

The Google Analytics script is **{{ site.data.site.ga4_script_kb }}KB gzipped**. The Plausible tracking script is **{{ site.data.site.plausible_script_kb }}KB**, which is {{ site.data.site.script_ratio }} times smaller.

That's the GA4 script alone. Most users also load Google Tag Manager and a cookie consent banner, pushing the total past 285KB. On a typical 4G mobile connection, that stack takes around 230ms to download compared to 2ms for Plausible. And that's before the browser has parsed or executed any of it. See how the full cost adds up for your traffic with our [analytics script size calculator](/google-analytics-script-size).

## Why is Plausible lightweight?

The size difference between Plausible and other analytics tools is not an accident. It comes from what we chose not to build.

Plausible tracks only what most site owners actually care about: how many visitors came, where they came from and what they did. We don't track individuals, build user profiles or support advertising features. Less to collect means less code to do it.

There are also some less obvious savings when you switch.

**No cookie consent banner needed.** Because Plausible doesn't use cookies or collect personal data, you don't need a GDPR cookie consent banner. Those banners are themselves JavaScript-heavy. Tools like OneTrust and Cookiebot add their own weight and latency to every page load on top of the analytics script. Switching to Plausible can eliminate that entire layer of overhead.

**Better Core Web Vitals scores.** Google uses [Core Web Vitals](https://plausible.io/blog/page-experience-web-vitals) as ranking signals, including Largest Contentful Paint and Interaction to Next Paint. Third-party scripts are one of the most common causes of poor Core Web Vitals scores because they compete for network resources and main thread time even when loaded asynchronously. The Plausible script is designed not to get in the way: it loads after your page has finished rendering.

## How can I test my website speed?

[GTmetrix](https://gtmetrix.com/) is a free tool for measuring the speed of your site. It gives you a PageSpeed score, total load time and total page size at a glance.

The Waterfall chart inside GTmetrix is particularly useful. It shows every resource your site loads with its size and loading timeline. You can identify your analytics script in this list and see exactly what it adds to your total page weight.

## What else can I do to have a fast loading website?

Here are some of the actions you can take to speed up your website:

1. When you plan to add a new element to your website, ask yourself if it is necessary. You'll find that **many elements are unnecessary** and you may consider leaving them out.
2. **Audit your third-party scripts.** Chat widgets, social embeds, marketing tools and analytics all add weight. Each script you remove or replace with a lighter alternative improves load time for every visitor on every page.
3. **Use system fonts** where possible. System fonts are already on the devices of your visitors so no extra page weight or loading time is added.
4. **Use fewer images and videos**. Images and videos are much heavier than text so reducing multimedia can make a significant difference.
5. Optimize the images you do use by **resizing and compressing** them. Your visitors won't notice much difference. [ImageOptim](https://imageoptim.com/mac) is a great free tool for this.
6. **Use modern image formats** such as WebP or AVIF. They produce significantly smaller files than PNG or JPEG with no visible loss in quality, and are now supported by all major browsers.
7. **Implement lazy loading** on images and video so they don't load until the visitor scrolls to them.

## Give Plausible a try as your lightweight analytics tool

Plausible is open source, privacy-friendly and built to be as small as possible. No cookies, no personal data collection and no bloated script competing with your content for bandwidth.

[Start your 30-day free trial](https://plausible.io/register) and see what your site looks like without the overhead of Google Analytics.
