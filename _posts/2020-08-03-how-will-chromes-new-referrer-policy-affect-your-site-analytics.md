---
layout: post
title: How will Chrome's new referrer policy affect your site analytics
description: In Chrome 85 Google plans to change its default referrer policy to
  strict-origin-when-cross-origin. Here's how that will affect your website
  analytics.
slug: referrer-policy
date: 2020-08-03T08:43:16.317Z
author: marko-saric
image: /uploads/chrome-referrer-policy.png
image-alt: How will Chrome's new referrer policy affect your site analytics
---
Google's Chrome browser is the most popular web browser. It has a market share of more than 70%. Whatever new policy Chrome implements will have an affect on all websites as chances are the majority of your visitors use Chrome too.

In Chrome 85 which ships in late August 2020, Google plans to change its default referrer policy to **strict-origin-when-cross-origin**. 

What's a referrer policy and what does **strict-origin-when-cross-origin** even mean? Why should I care as a website owner? You should be aware of it as it will affect your website analytics. Let's take a closer look.

1. Ordered list
{:toc}

## TL;DR: How Chrome's new referrer policy affects your analytics

[Web analytics tools](https://plausible.io/blog/google-analytics-alternatives) will have reduced granularity in the referral sources data. Your website analytics will still be able to show the referral source of your traffic but only on the domain level rather than the full URL. 

For instance, if ``thatblog.com/one-post/`` links to you and sends you visitors, you will see ``thatblog.com`` in your referral sources list but won't be able to see the exact post URL itself.

Most of the time the origin domain is sufficient for you to understand who has mentioned you, but in some cases, it may become more difficult to understand the exact page your traffic is coming from.

For instance, you would not be able to see the exact Reddit thread you were mentioned in anymore and would need to use Reddit search to try and find it manually.

Good news is that the individual site can still pick a referrer policy of their choice. If the referring site changes its referral policy, then that policy will be followed in the browser. 

Chances are some websites such as publishers and blogs will change their default referral policy to keep displaying their referring traffic in full.

## What is a referrer policy?

As a web user navigates from one site to another, servers are informed of the URL that the user is coming from. The same happens with different resources such as images and scripts within websites. A server knows the origin of the request when a request is made.

This is done using the Referer header (it is missing an R due to the original misspelling). The Referer header helps the server where the resource is hosted understand which website is requesting that same resource.

This mechanism can be very useful for many things including for website owners to understand which other websites talk about them, link to their content and where their website traffic is originating from.

## What does Chrome's new referrer policy default do?

From Google's [announcement](https://developers.google.com/web/updates/2020/07/referrer-policy-new-chrome-default): "strict-origin-when-cross-origin offers more privacy. With this policy, only the origin is sent in the Referer header of cross-origin requests. This prevents leaks of private data that may be accessible from other parts of the full URL such as the path and query string."

This change means that the referrer header for cross-origin requests will be reduced and you will see the top-level domain (TLD) only in the referral sources of your web analytics.

This is an example of how referrals look like when shown with a full URL path in your [Plausible Analytics](https://plausible.io) dashboard:

![Referral sources with full URL paths](/uploads/full-referrer-drilldown.png)

With this new policy, if I link to your site on ``myownblog.com/best-resources/`` and someone clicks on that link, you will be able to see visitors coming from ``myownblog.com`` in your web analytics but you won't see the exact page URL (``myownblog.com/best-resources``).

So cross-origin navigation from one website to another will no longer reveal the full path or query string information. It will only reveal the top-level domain. It will look something similar to how Facebook's current referrer sources look like. Facebook referrer only includes the fact that the visitor comes from Facebook. It doesn't send the post or comment ID where someone clicked.

![Referral sources without full URL paths](/uploads/referral-drilldown-without-paths.png)

The idea with this new policy is to reduce the potential of unexpected leaks of personal information as URLs on some commercial websites may contain sensitive user data.

In summary:

* With the old **no-referrer-when-downgrade** the referrer shown is: ``https://myownblog.com/best-resources/``

* With the new **strict-origin-when-cross-origin** default, the referrer shown is: ``https://myownblog.com/``

## What are the default referrer policies in other browsers?

* Chrome is using **strict-origin-when-cross-origin** from version 85. **Strict-origin-when-cross-origin** is where the full path is sent if on the same domain but only sends the domain itself if going to another domain. Previously it used **no-referrer-when-downgrade**.

* Firefox is using **no-referrer-when-downgrade** by default. It always passes the full path unless the request is sent from HTTPS to HTTP. Firefox is using **strict-origin-when-cross-origin** in the Private Browsing tabs and for known trackers.

* Edge is using **no-referrer-when-downgrade**. Same as Firefox.

* Safari is using **strict-origin-when-cross-origin**. Same as Chrome.

* Brave is using **no-referrer** where the referrer header is completely removed. It never shares the full URL even for same-origin requests and you cannot even see the domain name for cross-origin requests.

You can read more about [referrer policies here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).

## The issue of dark traffic

As you can see, not every request from a browser will have the referrer specified. 

You may be familiar with the "**(direct)/(none)**" referrer source in Google Analytics, the term "**dark traffic**" or the fact that your total visitors rarely match with the total visitors of all the referral sources combined.

Dark traffic covers all the traffic where the referrer is not passed. There are many mechanisms where the referrer is not passed:

* When a user navigates via a mechanism other than a link on a page such as clicks from emails, clicks from documents, clicks from mobile messengers, bookmarks or by typing in the URL directly into the browser.

* Whenever someone is moving from HTTP to HTTPS or vice versa, the referrer header is dropped.

* Facebook referrer only includes the fact that the visitor came from Facebook. Facebook never sends the post or comment ID where someone clicked.

* Twitter sets the referrer to their link shortener so you can see the shortened link but not the actual tweet that brought the traffic. Plausible Analytics makes the best effort to find the relevant tweet that the visitor came from [using the Twitter API](https://docs.plausible.io/twitter/).
    
* Google does not include the search keywords in the referrer so you can see that the visitor is coming from Google search but you cannot see which keyword phrase they used to find you. In Plausible Analytics, you can [integrate your Search Console data to see these search queries](https://docs.plausible.io/google-search-console-integration/).

Chrome's latest change won't make a difference in the amount of dark traffic that you see but it will create additional "dark traffic" within the specific referrer as you won't be able to see the exact page the other site is linking to you from.

## How can I set the referrer policy for my own website?

**Strict-origin-when-cross-origin** may be the new default on Google's Chrome browser, but you can still pick a policy of your choice for your site. If no referrer policy is set by the individual website, the browser's default policy is used.

Most non-commercial websites have no risk of leaking personal or otherwise sensitive data in their URLs. This includes blogs, personal websites, publishers and so many more.

You can set the new referrer policy with a ``<meta>`` referrer tag which should be placed in the ``<head>`` section of your website. Like this:

``<meta name="referrer" content="no-referrer-when-downgrade"/>``

## Increased importance of tagging the links you can control

The reduced granularity in the referral sources data and the rise of dark traffic increases the importance of tagging the links that you can control.

To minimize the amount of traffic that falls within the "no referrer" category, you can add special query parameters to your links. 

When a query parameter such as the ``?utm_source=<value>`` is present in a link, Plausible Analytics and most of the other analytics tools will show it as the referral source. Same works with the ``ref`` and ``source`` query parameters.

Read our guide on [tagging your links here](https://docs.plausible.io/manual-link-tagging).