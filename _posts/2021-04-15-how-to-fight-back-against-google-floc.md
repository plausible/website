---
layout: post
title: How to fight back against Google FLoC
description: Here's a closer look at Google's Federated Learning of Cohorts
  (FLoC) initiative and how you can fight back and opt-out as a web user and a
  web developer.
slug: google-floc
date: 2021-04-15T08:17:54.712Z
author: marko-saric
image: /uploads/fight-back-google-floc.png
image-alt: How to fight back against Google FLoC
---
Google is starting to track your site visitors for advertising purposes even when you're not using Google Analytics or having any relationship with Google.

Here's a closer look at Google's Federated Learning of Cohorts (FLoC) initiative and how you can fight back and opt-out as a web user and a web developer.

1. Ordered list
{:toc}

## Google's business model is a privacy violation

The web as we know it is evolving. Apple is pushing a privacy-first approach from its operating systems and Safari. Services like DuckDuckGo and HEY give people competitive alternatives to the surveillance capitalism-funded products and regulations such as [CCPA](https://plausible.io/blog/google-analytics-ccpa) and [GDPR](https://plausible.io/blog/google-analytics-gdpr) are forcing companies to respect the privacy of their users.

Cross-site tracking that adtech is based on using tools such as Google Analytics and third-party cookies is being phased out. Safari, Firefox and Brave are leading the way. And legislation like GDPR has proven that if you give people a fair choice to opt-out of personalized advertising, most of them will.

The writing is on the wall and Google is increasingly aware of the existential threat the privacy-first movement poses to its business model. Now Google wants to join this new world without the intention to give up on surveillance capitalism and jeopardize its targeted advertising business.

How can you keep your lucrative ad business when not being able to use third-party cookies and tools such as Google Analytics? Google is moving all the tracking and data gathering for advertising purposes where they can control it best: browser level. That's how we got to the Federated Learning of Cohorts (FLoc) initiative which is currently being tested on millions of Chrome browser users across the world. 

There have always been concerns about Chrome tracking. We know that the browsing history of logged-in Chrome users is sent to Google. FLoC seems like a continuation of their angle to track people through the browser.

Google is doubling down on a business model based on behavioral profiling and targeted advertisements. This business model in itself is a privacy violation and cannot exist on the privacy-first web. Google's business interests mean that they are unlikely to ever provide a true web privacy protection compared to solutions built by companies with a more ethical business model.

Let's take a look at what this all means and what you can do about it.

## What is Federated Learning of Cohorts (FLoC)?

Here's [how Google describes it](https://blog.google/products/ads-commerce/2021-01-privacy-sandbox/): 

> Federated Learning of Cohorts (FLoC) proposes a new way for businesses to reach people with relevant content and ads by clustering large groups of people with similar interests. This approach effectively hides individuals “in the crowd” and uses on-device processing to keep a person’s web history private on the browser.

Google has launched trials of FLoC in Chrome browser version 89 on March 30th, 2021 in the USA, Canada, Australia, Brazil, Japan and several other countries for millions of users. FLoC is a part of the Chrome browser's source code and it helps them do cookie-less and consent-less ad targeting.

Instead of following individuals around the web using tools such as [Google Analytics and third-party cookies](https://plausible.io/blog/google-analytics-cookies), let's use the browser itself to observe the behavior of all users. Let's put people in cohorts of lookalikes with similar interests, habits and behaviors, and then target them with personalized ads.

These different cohorts will be based on sites people visit, the content they consume and other signals. They will be composed of a few thousand similar people and set once per week using data from the browsing done in the previous week.

Chrome browser (and other browsers that join this scheme) send this behavioral profile to sites and advertisers you visit and interact with. And these businesses can tie the information they get from FLoC to whatever first-party data and user profile they have on you.

## FLoC is not being tested in countries where GDPR is in place

Adtech still gets the data they need. Now even without needing to track anything themselves and with Google in the driving seat and full control. According to [the EFF](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea), this new approach makes it even easier to fingerprint individuals: 

> If a tracker starts with your FLoC cohort, it only has to distinguish your browser from a few thousand others (rather than a few hundred million).

EFF also brings up a second concern which is also novel and scary in terms of privacy. If you sign up to an online service with your email address, they can immediately tie your last week's browsing data with the email address that you supply them (or physical address, phone nr, etc). It means any service you use now knows what you've been up to and not just in an anonymous way.

The plan is that [by the end of 2021](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html), FLoC will be the primary method for data gathering for advertising purposes and that it will make third-party cookies obsolete. Google will then phase out third-party cookies from the Chrome browser.

Blocking third-party cookies is a big win for everyone on the web. No useful functionality is lost for web users while a lot of privacy is gained. No longer will thousands of actors in the adtech ecosystem collect, share and sell personal data and browsing histories of millions of web users.

Interestingly enough, Google is not testing FLoC in countries where GDPR is in place. They seem to doubt whether this new approach needs consent from the people.

## The ad spend to become more concentrated on Google's ecosystem?

The rest of the adtech ecosystem doesn't like Google's proposal because Chrome is now solely responsible for all the tracking. 

Google owns the browser with the largest market share and the only major browser that still allows third-party cookies out of the box. Google is also the largest advertising company and the largest seller of online advertising. 

Without third-party cookies, Google still gets all the data as they own the platforms while everyone else in the ecosystem only gets the cohorts that Google sends them.

The Competition and Markets Authority in the UK [has opened an investigation into FLoC](https://www.gov.uk/government/news/cma-to-investigate-google-s-privacy-sandbox-browser-changes) to assess whether it could cause "advertising spend to become even more concentrated on Google's ecosystem at the expense of its competitors".

Even though Google keeps promoting the idea that all this is a collaborative open source effort, it is clear who is in the driving seat and whose employees are doing the work. No other browser has expressed interest in joining FLoC while several such as Brave and Vivaldi have stated the intention to remove it.

## Defaults matter and FLoC is opt-out by default

The significant difference for site owners is that FLoC, unlike third-party cookies and Google Analytics, allows Google to profile users on any site on the web and not only on sites that integrate Google's products and scripts.

According [to Google](https://github.com/WICG/floc#sites-which-interest-cohorts-will-be-calculated-on): "All sites with publicly routable IP addresses that the user visits when not in incognito mode will be included in the POC cohort calculation."

Every website and every Chrome user will be opted into FLoC by default without any say in that choice. That is a decision Google has made for us all.

There are ways to opt-out for those aware of this issue but we know that defaults matter and that most sites and users will never change the defaults.

GDPR is an opt-in law so people need to opt into this type of tracking for advertising purposes and it would be great if Google makes FLoC opt-in rather than opt-out by default.

## How to opt-out of FLoC as a web user: Don't use Google Chrome

Do not use Google Chrome. Use Firefox or Safari. Or use Chromium-based browsers such as Brave that have disabled FLoC.

If you prefer to use Google Chrome, there are ways to opt-out of FLoC which means that Google will put you in a random FLoC cohort instead of an accurate one. 

Google has also announced that they will introduce an option in settings that you can use to opt-out of FLoC when using the Chrome browser.

In the meanwhile, here's how to opt-out on Chrome:

* Log out of your Google account and opt-out of syncing history data with Chrome
* Block third-party cookies or browse in the incognito mode
* Disable these in Google Activity Controls: "Web & App Activity", "Include Chrome history and activity from sites, apps, and devices that use Google services" 
* Disable these in your Google Ad Settings: "Ad Personalization", "Also use your activity & information from Google services to personalize ads on websites and apps that partner with Google to show ads"

## How to opt-out of FLoC as a web developer: Set a Permissions Policy

You can declare to Google that your site does not want to be included in the list of sites for cohort calculation. If you don't declare anything, the [default is to allow](https://github.com/WICG/floc#opting-out-of-computation).

> A site should be able to declare that it does not want to be included in the user's list of sites for cohort calculation. This can be accomplished via a new interest-cohort permissions policy. This policy will be default allow.

To opt your site out of FLoC, you need to send the [Permissions Policy](https://www.w3.org/TR/permissions-policy-1/) HTTP response header.

Permissions Policy is a new header that allows a site to control which features and APIs can be used in the browser. To opt-out, use this header:

```
Permissions-Policy: interest-cohort=()
```

If you have access to the `.htaccess` file on your Apache server, you can edit it with this code to set your Permissions Policy: 

```
<IfModule mod_headers.c>
  Header always set Permissions-Policy: interest-cohort=()
</IfModule>
```

You can use a test site such as [this one](https://securityheaders.com) to check whether you have implemented the Permissions Policy correctly.

Many sites using frameworks and content management systems don't even have the option to control this. Opting out of FLoC is not possible for those sites. Frameworks and CMSs that care about privacy should add this header by default and Google needs to provide a more straightforward method. 

Plausible Analytics has opted out of FLoC and visits to our site will not be included when Google determines a cohort to share with their partners for personalized advertising purposes.

## We need to ban targeted advertising

FLoC seems to be Google's way of saving a dying business. They are trying to keep targeted ads going by making them more 'privacy-friendly' and 'anonymous'. But behavioral profiling and targeted advertisement is not compatible with a privacy-respecting web.

Google made their first many billions exclusively on contextual advertising. Google now prefers to push the message that behavioral advertising based on personal data collection is superior but there is simply no trustworthy evidence to that.

It is clear why Google is pushing that message as Google dominates the web and has so much personal data that it gives them a competitive advantage against any other advertising network.

We need to ban targeted advertising to truly have a privacy-first web. Show ads based on the context of the content a person is consuming, based on the search keyword they have used or based on their geographical location. 

This type of advertising is not based on data collection at all. No personal data needed, no need for algorithms building behavioral profiles and no need for fancy, buzzword-filled solutions by the adtech giant.

For advertising-funded sites and businesses, and for those that promote themselves using paid advertising, contextual and geographical ads are a great solution that accomplishes what they need and can exist in a privacy-first world.