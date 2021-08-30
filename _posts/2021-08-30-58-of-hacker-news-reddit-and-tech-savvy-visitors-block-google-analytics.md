---
layout: post
title: 58% of Hacker News, Reddit and tech-savvy visitors block Google Analytics
description: Is Google Analytics still useful and how accurate are its stats?
  How much data is missing from Google Analytics due to adblockers and
  privacy-friendly browsers?
slug: /google-analytics-adblockers-missing-data
date: 2021-08-30T10:22:15.552Z
author: marko-saric
image: /uploads/blocking-google-analytics.png
image-alt: 58% of Hacker News, Reddit and tech-savvy visitors block Google Analytics
---
There are many [privacy issues with running Google Analytics](https://plausible.io/blog/remove-google-analytics) but there are worries about data accuracy too. How much data is missing from Google Analytics due to adblockers and privacy-friendly browsers?

1. Ordered list
{:toc}

## Do adblockers stop Google Analytics?

Several browsers, including Firefox, Brave and Safari, interfere with Google Analytics and Google Tag Manager tracking. Google Analytics and Google Tag Manager calls are blocked by many adblockers too. This makes site owners wonder whether Google Analytics is still useful and whether its stats are accurate.

The level of Google Analytics blockage varies by industry, audience, device used and the individual website. In [a previous study](https://markosaric.com/google-analytics-blocking/), I've found that less than 10% of visitors block Google Analytics on foodie and lifestyle sites but more than 25% block it on tech-focused sites.

But how about a very tech-heavy website with a tech-savvy audience of hackers, developers and like? How many visitors are websites missing for referral sources such as Hacker News or Reddit? Let's find out.

## Google Analytics and Plausible Analytics stats comparison

I looked at analytics of a site which had a post trending on Hacker News and Reddit with more than a thousand upvotes and more than a thousand comments.

I compared stats between [Plausible Analytics](https://plausible.io/) and Google Analytics. Google Analytics was installed using the default method while Plausible was installed [using a proxy](https://plausible.io/docs/proxy/introduction) to get the most accurate data on the level of blockage. 

Both tools automatically exclude bots and crawlers so the difference in stats would mostly come from people blocking the Google Analytics script. 

Here's the data Plausible Analytics shows for the three days in late August 2021 when the site got a lot of traffic:

![Plausible Analytics stats](/uploads/plausible-analytics-stats-hn-post.png)

And here's the [Google Analytics](https://plausible.io/vs-google-analytics) data for the same site and the same period:

![Google Analytics stats](/uploads/google-analytics-stats-hn-post.png)

It turns out 58% of Hacker News readers, Reddit users and other techies block Google Analytics. Tech-heavy audiences use adblockers and privacy-friendly browsers much more than the average web user. 

Google Analytics is missing out on a lot of data and is underreporting the tech-savvy audiences by almost 60%. Let's take a closer look at the numbers.

## 58% of visitors block Google Analytics
 
Here's a look at the overall traffic numbers and the difference between Plausible and Google Analytics. Google Analytics is not showing all traffic. It is missing data from 58.67% of all visitors and 58.38% of all page views.

It’s worth noting that it’s rare for the data from two analytics providers to have complete parity. Plausible and Google Analytics have different measurement methodologies and define certain metrics differently.

To track unique visitors, [Google Analytics uses cookies](https://plausible.io/blog/google-analytics-cookies). Plausible is a cookie-free tool and [tracks unique visitors differently](https://plausible.io/data-policy).

So even if there were no blockers at all, slight differences in data between Plausible and Google Analytics were likely to be seen. Considering the fact that Plausible and Google Analytics measure unique visitors in a different way, I also looked at the total page views.

Metric | Plausible | Google Analytics | Difference
| ------ | ------ | ------ | ------
Visitors | 50,947  | 21,054 | 58.67%	
Pageviews | 60,731  | 25,275 | 58.38%

Let's take a closer look at what segments of users cannot be tracked accurately in Google Analytics.

## 68% of laptop and desktop users block Google Analytics

At the device level, laptop and desktop users (68.2%) block Google Analytics more frequently than mobile and tablet users (49.9%). 

This makes sense especially considering how difficult it is to install an adblocker on Chrome, the most popular browser on mobile devices.

Device | Plausible | Google Analytics | Difference
| ------ | ------ | ------ | ------
Mobile/Tablet | 27,331  | 12,848 | 49.9%	
Laptop/Desktop | 25,725  | 8,181 | 68.2%		

## 88% of Firefox users block Google Analytics

Here's a look at the browsers and which browser users block Google Analytics most frequently. 

Surprisingly, Safari users with [Safari's Intelligent Tracking Protection (ITP)](https://plausible.io/blog/safari-privacy-report) block Google Analytics only in 41.41% of cases while 88.28% of Firefox users block it.

Browser | Plausible | Google Analytics | Difference
| ------ | ------ | ------ | ------
Chrome | 16,405  | 8,133 | 50.42%
Safari | 16,136  | 9,454 | 41.41%
Firefox | 15,192 | 1,780 | 88.28%
Edge | 1,059 | 301 | 71.58%

## 82% of Linux users block Google Analytics

Here's a look at the operating systems and which OS users block Google Analytics most frequently. iOS users block Google Analytics least frequently at 41.5% while 82.3% of Linux users block it.

OS | Plausible | Google Analytics | Difference
| ------ | ------ | ------ | ------
Mac | 13,905  | 5,325 | 61.7%
iOS | 13,631  | 7,978 | 41.5%
Android | 10,684  | 4,914 | 54%
Windows | 6,892  | 1,764 | 74.4%
Linux | 5,680  | 1,006 | 82.3%