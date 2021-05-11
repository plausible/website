---
layout: post
title: "Core Web Vitals and how to improve the page experience "
description: You've probably heard about Google's page experience update and the
  introduction of Core Web Vitals but what does it all mean?  Here's a summary
  of all the things you need to know.
slug: page-experience-web-vitals
date: 2021-05-11T08:41:53.079Z
author: marko-saric
image: /uploads/page-experience-core-web-vitals.png
image-alt: Core Web Vitals and the page experience update
---
As a site owner, you've probably heard about Google's page experience update and the introduction of Core Web Vitals but what does it all mean?

It's a new way of evaluating whether a site is providing a great user experience. If your site meets the threshold, it could benefit from a ranking boost in Google's search results.

Here's a summary of all the things you need to know.

1. Ordered list
{:toc}

## What is the page experience update and the Core Web Vitals?

Page experience is a set of signals Google uses to measure the real-world user experience of a website. Security, loading performance, visual stability, mobile-friendliness and interactivity are some of the factors they look at.

Unlike Google's other initiatives such as AMP pages and [FLoC](https://plausible.io/blog/google-floc), the idea of page experience and Core Web Vitals is a sensible approach that will make the web a faster, more efficient and more secure place.

There are three brand-new Core Web Vitals benchmarks within the page experience signals and these will start rolling out as a part of the Google ranking algorithm beginning in mid-June 2021 and will be fully in place by the end of August 2021. 

Your individual pages will get a label of either "Good", "Needs Improvement" or "Poor" for each of the Core Web Vitals. If your site meets the minimum threshold (score "Good") for all the Core Web Vitals, it could get a potential SEO ranking boost and more traffic from Google's search results.

## What sites may be at risk? 

What happens if your site scores badly on the web vitals benchmarks? Google has [repeatedly stated](https://developers.google.com/search/blog/2021/04/more-details-page-experience) that sites should "not expect drastic changes" and that page experience is just one of the many factors they use in their algorithm.

So having bad scores doesn't necessarily mean that you won't rank at all or that your site will be excluded from the search results. The page experience update is only a small part of hundreds of different signals that Google uses to determine their rankings. 

These sites may be at risk:

* Sites that don't use HTTPS
* Sites that don't have a mobile friendly design
* Sites with security issues such as malware
* Sites that block their content from being seen by using paywalls and similar elements
* Sites that rely on a large number of intrusive banner ads, popups and other calls to action
* Heavy and slow sites that frustrate the visitor and that are not optimized for speed

So even though you may not get more visitors from Google, the main benefit of meeting Core Web Vitals benchmarks is to provide a faster, safer and better user experience for your site visitors and have a website that uses less electricity and has a [lower carbon footprint](https://plausible.io/lightweight-web-analytics).

## Core Web Vitals and other page experience signals

![All page experience signals](/uploads/all-page-experience-signals.jpg)

Core Web Vitals are combined with other page experience signals to measure the user experience on your website, how people experience the speed, responsiveness and visual stability of your website. 

Here's the complete list of all the signals Google uses as part of the page experience algorithm:

### Mobile friendliness 

The majority of people experience the web through smaller screens and mobile devices. Your website should be optimized for mobile devices.

Google's search algorithm favors sites that use the responsive design that adapts itself to the size of the screen. Here's [a test tool](https://search.google.com/test/mobile-friendly) you can use to determine your site's mobile friendliness.

### Safe browsing

Google is checking the websites for malware and other security issues. Content that is found to be potentially dangerous can be flagged with a warning label in search results and a warning page in the browser when someone tries to visit the page.

Google will inform the site owner about any potential security issues using the Google Search Console and you can [read more here](https://support.google.com/webmasters/answer/9044101) for further details on what steps you can take to protect your site.

### HTTPS security

Google is pushing sites to start using SSL certificates to provide a more secure browsing experience. Chrome browser is flagging sites that don't use SSL and the search algorithm gives a boost to sites that use SSL.

With outstanding projects such as [Let's Encrypt](https://letsencrypt.org/) available, it is now simple for all sites to use HTTPS and encrypt the data exchanged.

### Intrusive interstitials

Intrusive interstitials are popups, paywalls, full-page advertising banners and other website elements that block the page for a visitor which leads to a bad user experience. Google prefers not to send search traffic to sites that block the content.

Note that some elements such as [cookie popups](https://plausible.io/blog/google-analytics-cookies) and [GDPR consent notices](https://plausible.io/blog/google-analytics-gdpr) are not included in this.

As a side note, those legal banners are also required not to be in the form of consent walls that obstruct the content. According to the GDPR legislation, the consent notices should not obstruct the content of the page and should allow visitors to view the content even when they don't want to interact with the notice.

Google has published [more details](https://developers.google.com/search/blog/2016/08/helping-users-easily-access-content-on) on what type of interstitials are not welcome.

### Largest Contentful Paint (LCP)

Largest Contentful Paint (LCP) is the first of the three Core Web Vitals. It measures the loading speed of the content on a website. People are impatient on the web and tend to close the slow loading sites. 

Here's how Google defines [LCP](https://web.dev/lcp/):

> The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.

The initial benchmark for the Largest Contentful Paint (LCP) has been set at 2.5 seconds.

Google plans to update the signals and benchmarks on a yearly basis in order to "further align with evolving user expectations and increase the aspects of user experience that we can measure". 

### First Input Delay (FID)

First Input Delay (FID) is the second of the three Core Web Vitals. It measures how responsive your page is and how quickly visitors can interact with your page after landing. 

Here's how Google defines [FID](https://web.dev/fid/):

> FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

The initial benchmark for the First Input Delay (FID) has been set at 100 milliseconds.

### Cumulative Layout Shift (CLS)

Cumulative Layout Shift (CLS) is the final of the three Core Web Vitals. It measures visual stability and the unexpected layout shifts a visitor is experiencing on your site.

Website elements suddenly moving and shifting position as other elements are being loaded leads to a confusing and frustrating visitor experience that may result in accidental clicks. Google wants to promote a more stable website experience. 

Here's how Google defines [CLS](https://web.dev/cls/):

> CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. A layout shift occurs any time a visible element changes its position from one rendered frame to the next. 

The initial benchmark is that websites should maintain a Cumulative Layout Shift (CLS) of less than 0.1.

## How many sites on the web pass the Core Web Vitals?

[Screaming Frog](https://www.screamingfrog.co.uk/passing-the-cwv-assessment/) has analyzed 20,000 websites and discovered that 12% of sites on mobile and 13% on desktop meet the Core Web Vitals assessment. 

Another report by [iProspect](https://corewebvitals.iprospect.com/) looked at 1,500 sites and found that 21% of sites meet the benchmarks.

The First Input Delay vital is pretty much a non-existent issue for the vast majority of sites but many seem to struggle with Cumulative Layout Shift and Largest Contentful Paint. 

So if your site is meeting all the benchmarks and provides a fast and quick-loading user experience, you are in the minority!

## What tools can I use to check my core web vitals?

Great place to check your Core Web Vitals and get your real-world measurement scores is using the tools that Google has created:

### Google Search Console 

![Page experience scores in Google Search Console](/uploads/page-exprience-signals.png)

Google Search Console scores your pages with "Good", "Needs Improvement" or "Poor" based on the real-world data. It identifies pages that are not meeting the Core Web Vitals benchmarks and that require your attention.

In the "Experience" section of the Search Console, you have access to the reports on the "Page Experience", "Core Web Vitals" and the "Mobile Usability". 

This is the quickest way to identify any issues on your site as measured by real-world data and get the summary straight from the horse's mouth. 

### Google PageSpeed Insights 

PageSpeed Insights gives you access to both the Field Data (real-world data that comes from visitors) and the Lab Data (provides the data on how the users may experience a website).

The field data comes from the Chrome UX Report which takes the data from actual people that use the Chrome browser. The lab data comes from Google's Lighthouse tool which allows you to audit and assess your sites in the lab environment.

One benefit of using PageSpeed Insights is that you can get the scores of any website on the web rather than only getting the scores of sites that you manage. Take a look at [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

## How can I improve my page speed and pass core web vitals?

![Passing the core web vitals](/uploads/core-web-vitals-field-lab-data.png)

The advice to improve your core web vitals score is very similar to the advice on how to speed up your page in general. Plausible website itself hasn't been optimized for the core web vitals but it still scores well because we have optimized for speed even before web vitals were a thing.

So put speed as one of your top priorities when building a website. Here are some things you can consider:

### Reduce the number of elements

"Keep request counts low and transfer sizes small" is one of the main recommendations from Google. Another one is to "minimize third-party usage".

Every single design element or feature that you add to your site adds additional footprint. Images, auto-playing videos, fonts, live chat, analytics, social media sharing buttons, pop-ups or banner advertising.

Your task is to analyze and understand all the requests your website is making. What is the purpose of each individual request? Can you and your visitors live without some of these? Then remove and eliminate all the unnecessary elements.

### Resize and compress all the images

"Properly size images" and "Serve images in next-gen formats" are two of Google's recommendations.

By resizing and compressing images that you use, you can dramatically reduce your page weight without any noticeable difference to your visitors. You can also serve images in next-gen formats such as WebP.  

### Implement lazy loading and facades

If you still have many elements on your site, you can improve the performance by lazy loading. Google recommends to "Defer offscreen images".

So rather than loading all the resources as soon as the page loads, you load them as the visitor scrolls down the page or you put a facade in place of an element and only load the element itself if the visitor interacts with it.

Some browsers now lazy load images by default but not all. And you can go even further and lazy load additional elements of your site. Google also recommends to "lazy load third-party resources with facades".

### Replace heavy features with lightweight alternatives

If you cannot live without some specific features, try and find more lightweight alternatives. Some examples:

* Google Fonts can be replaced with web safe fonts
* YouTube videos that autoplay can be replaced with a no-cookie embed alternative (switch the domain to youtube-nocookie.com) or a facade that requires a click to play
* Google Analytics with its 45 KB in script size can be [replaced with Plausible Analytics](https://plausible.io/vs-google-analytics) which is under 1 KB

Identify heavy and slow elements of your site and go on a hunt for more appropriate and lightweight alternative solutions.

### How does Google Analytics impact your core web vitals?

I did some tests using PageSpeed Insights on my own site to see how web analytics impact the core web vitals scores. 

Here's the test with Plausible Analytics installed:

![Plausible Analytics core web vitals on my site](/uploads/plausible-alone.png)

And with Google Analytics installed:

![Google Analytics core web vitals on my site](/uploads/plausible-google-analytics.png)

Pretty much overall the scores for core web vitals are a bit worse with Google Analytics but all still within the "Good" benchmark. First Contentful Paint goes from 1.3 seconds to 1.7 seconds and Largest Contentful Paint goes from 1.8 seconds to 2 seconds. Speed Index itself slows down from 2.2 seconds to 2.7 seconds.

My main score stays on 100 for the desktop test but drops from 100 to 97 for the mobile test. My site is already optimized so this drop when using Google Analytics doesn't look too bad. For a site that's on the line between "Good" and "Needs improvement", adding Google Analytics could be the final straw that ruins the score. These scores can turn bad quickly if you add even one heavy and unoptimized element.

Interestingly enough, Google PageSpeed Insights flags Google Analytics in the "Avoid long main-thread tasks" recommendation:

![Google Analytics avoid long main-thread tasks](/uploads/avoid-long-main-thread-tasks.png)