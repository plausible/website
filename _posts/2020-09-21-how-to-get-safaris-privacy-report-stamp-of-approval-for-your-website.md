---
layout: post
title: How to get Safari's Privacy Report stamp of approval for your website
description: Apple's Safari 14 browser and its Privacy Report names, shames and
  prevents websites that use cross-site trackers to profile web users.
slug: safari-privacy-report
date: 2020-09-21T07:41:18.863Z
author: marko-saric
image: /uploads/safari-privacy-stamp-of-approval.png
image-alt: Safari's Privacy Report stamp of approval
---
Apple has declared privacy a "fundamental human right" and now they're putting their money where their mouth is, and doing something about it. Apple's Safari 14 browser and its Privacy Report names, shames and prevents websites that use cross-site trackers to profile web users.

1. Ordered list
{:toc}

## How does the Privacy Report look like in Safari 14?

From the release of Safari 14 on September 16th, the privacy shield icon is prominently placed next to the address bar and with a click, you can see which trackers a website you're on uses to track your visit. Or on mobile devices, you can tap the "Aa" button in the address bar.

![Image](/uploads/safari-itp.png)

Users can get a more detailed Privacy Report by clicking on the (i) button or selecting "Privacy Report" on the mobile devices. This gives you an overview of the trackers you have encountered across the sites you've visited in the last 30 days. 

It lists how many trackers have been prevented from profiling you and the percentage of websites you visited that contacted trackers. It also highlights the most contacted tracker.

The Privacy Report also lists (shames) the sites that use the most trackers and the most widely used trackers across the sites you visited.

![Image](/uploads/safari-privacy-report.png)

## Could Safari change the way people browse the web?

This is a similar feature to what open-source and privacy-friendly browsers such as Firefox and Brave have had for a while. But Safari is a much more widely used browser, it puts the Privacy Report up front and center, and raises awareness of these issues to a new level with their large, mainstream audience. [Safari's browser market share](https://gs.statcounter.com/browser-market-share) is at 17% compared to 4% for Firefox.

People have already started complaining about the shocking number of trackers they are seeing on their favorite sites. Or the irony behind the "we care about your privacy" messages on sites with multiple trackers. Or the fact that some sites such as Wikipedia seem to be the good guys and have no trackers at all.

Will Safari's Privacy Report change the way people browse the web? Will it impact the sites people choose to visit? Will people start preferring sites with fewer or no trackers? Or will everyone become numb to this after seeing the great number of trackers most sites use? It remains to be seen.

It's likely that this will dramatically raise awareness about the state of the web, the scale of surveillance capitalism and the true cost of "free".

## How your website can get Safari's privacy stamp of approval

Safari highlights websites without any trackers with the "this web page did not contact any trackers" message.

The way your website can get Safari's "stamp of approval" is to reduce the number of trackers you use. Don't use any services that are "blacklisted" by Apple.

Visit your website using Safari and check what the Privacy Report highlights. Completely remove the known trackers or switch to some friendlier and more privacy-friendly alternatives. Then Safari will list your website as one of the few that do not try to connect to any trackers and you may get a boost with the people that care about this.

Some of the most contacted trackers across the websites are Google Analytics, Google's DoubleClick advertising trackers, Google Tag Manager and spy pixels from Facebook.

Using Google Analytics on your site? A potential move would be to remove it and replace it with Plausible Analytics. Here's [our Google Analytics vs Plausible Analytics comparison](https://plausible.io/vs-google-analytics).

Let's take a closer look at how the Privacy Report works and what websites are considered trackers.

## How does Safari's Privacy Report work?

Apple is partnering with DuckDuckGo, and their open-source and publicly available Tracker Radar to expose these trackers. DuckDuckGo's tracker list is generated automatically using their continuous crawling and analysis of the web.

They are looking for third-party requests that are on multiple websites and which also set cookies or access browser APIs known to be used in fingerprinting.

They've found that Google is the biggest tracking company on the web saying that "Google-owned domains are referenced on 93.2% of the sites we surveyed". This Google-dominance on the web is one of the main reasons we built Plausible and why we believe you should [consider removing Google Analytics from your site](https://plausible.io/blog/remove-google-analytics).

You can see the full list of all the domains on [DuckDuckGo's list](https://github.com/duckduckgo/tracker-radar/tree/main/domains/US).

Websites making calls to specific domains from DuckDuckGo's Tracker Radar list are listed in Safari's Privacy Report. Safari shows the number of trackers discovered on the particular site and states the number of "trackers prevented from profiling you".

## What does Safari's Intelligent Tracking Protection (ITP) actually do?

Unlike the tracking protection in Brave or Firefox, Safari's Intelligent Tracking Protection does not block the listed third-party requests. Instead, it prevents them from placing cookies or from accessing the local storage of a device.

This means that Google, Facebook and other adtech companies are prevented from building cross-site profiles of web users for advertising purposes:

* Third-party cookies are completely blocked

* First-party JS cookies are limited to a maximum of 7 days. This means that [cookie-based analytics tools](https://plausible.io/blog/google-analytics-cookies) such as Google Analytics may not be as reliable as before in showing new unique visitors or returning visitors. If a person visits your site today and then comes back the following week, they are likely to be listed as another unique visitor again. 

* [Referrer header](https://plausible.io/blog/referrer-policy) is truncated and any query parameters are stripped to only show the domain name origin for referring websites with cross-site tracking capabilities.

* Intelligent Tracking Protection is turned on by default and applies to all browsers on iOS and iPadOS and not only to Safari. Firefox, Chrome, Brave and others are following the same rules. 

* Users have the option to turn this off by disabling the "Prevent cross-site tracking" feature in the settings but defaults matter and it is likely that only a tiny percentage of users would disable it.

* For full details, [see the overview on Cookie Status](https://www.cookiestatus.com/safari/).

## What's the motivation behind DuckDuckGo's Tracker Radar list? 

This is what DuckDuckGo [said](https://spreadprivacy.com/duckduckgo-tracker-radar/) about their motivation behind building the Tracker Radar list in the first place:

> "Using the Internet these days feels like being haunted by the ghosts of browsing past. The shoes or headphones you shopped for yesterday are following you around relentlessly today. These creepy ads are powered by hidden trackers, lurking behind most websites. And unfortunately, your shopping habits are just the tip of the iceberg of what they know and can exploit.

> "Trackers can pick up your location history, search history, browsing history and more, and from those infer your age, ethnicity, gender, interests, and habits. Companies collate this personal data into a detailed profile, continually auctioning you off to the highest bidders"

## Is there a risk of Plausible being added to DuckDuckGo's list? 

Plausible Analytics is a privacy-first analytics tool and we've gone great lengths to make our product as privacy-friendly as possible:

* We don't collect any of the data mentioned by DuckDuckGo such as location history, browsing history, interests, habits and such.

* There's no way to identify or to track an individual using Plausible.

* We don't use cookies and any other persistent identifiers.

* There's no way to track people across websites they visit or devices they use. 

* We also don't have anything to do with the adtech industry and the surveillance capitalism. 

* All your website data is 100% yours. We don't share it with, send it to or sell it to any third parties whatsoever.

* You can get a full overview of all the info we collect on your behalf about your visitors in our [data policy](https://plausible.io/data-policy).

DuckDuckGo's Tracker Radar is already aware of Plausible as it has discovered calls to us on several websites while crawling the web. We have been discovered alongside many other third-party calls that don't have anything to do with surveillance capitalism and adtech such as the different content management systems people use to build websites and web fonts.

* It lists Plausible with a domain prevalence score of 0.000147. This shows the number of sites that make calls to Plausible. Google Analytics has a domain prevalence score of 0.748.

* It lists Plausible with a domain cookie value of 0. This means that we don't use cookies. Google Analytics has a domain cookie value of 0.273 as it uses multiple cookies.

* It gives Plausible a fingerprint score of 1. This presents the sum of all weighted browser APIs accessed and score 1 means "normal use of APIs, not likely used for fingerprinting". The only API we access is the "Navigator.prototype.userAgent" which is used for many different purposes and is considered "non-suspicious". Google Analytics has a fingerprint score of 2 which stands for "high use of APIs, possibly for fingerprinting". Google Analytics is accessing 15 different browser APIs.

Then it's up to the users of DuckDuckGo's Tracker Radar (Apple Safari in this case) to decide [what criteria to use](https://github.com/duckduckgo/tracker-radar/blob/main/docs/FAQ.md) to block a domain name.

Plausible is currently not blocked nor highlighted by Safari's Intelligent Tracking Protection as Safari has chosen to block privacy-invasive tools such as those that track people across the web using cookies or those that use browser APIs to profile people.

## What will Google and the adtech do next?

Apple has made life a little bit more difficult for the adtech industry. Their data collection has become a little bit less accurate and more people can now escape from being continuously tracked and monitored for behavioral insights.

Adtech's response to this would be to rely less on third-party tracking and move more of the tracking to first-party. There may be an increase in fingerprinting and other alternative ways to track web users without using cookies too.

Apple could respond to that by moving more in the direction of privacy-first browsers such as Brave. Brave for instance blocks all the trackers by default and has several features to prevent fingerprinting enabled by default out of the box.

It will be an exciting "battle" to follow over the upcoming months. It's great to see such a large company as Apple take a stand against surveillance capitalism and try to make the web a little bit of a better place for everyone.