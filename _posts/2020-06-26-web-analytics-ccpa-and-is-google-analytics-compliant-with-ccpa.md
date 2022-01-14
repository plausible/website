---
layout: post
title: Web analytics, CCPA and is Google Analytics compliant with CCPA?
description: What is CCPA and how does it affect website analytics? And how can
  I make Google Analytics compliant with the CCPA?
slug: google-analytics-ccpa
date: 2020-07-27T09:35:07.752Z
author: marko-saric
image: /uploads/remove-google-analytics.png
image-alt: Web analytics, CCPA and is Google Analytics compliant with CCPA?
---
California Consumer Privacy Act (CCPA) is a Californian privacy law that has been inspired by the European General Data Protection Regulation (GDPR) but it also differs from it in several ways.

CCPA was signed in June 2018, it went into effect at the start of 2020 and California is enforcing the law from July 1st, 2020. The scope of CCPA is a bit narrower when compared to the GDPR and it is an opt out law rather than an opt in law. Here's a look at how CCPA impacts web analytics and also whether Google Analytics is CCPA compliant web analytics tool. 

1. Ordered list
{:toc}

The information in this post is our view on CCPA and it’s here to help give you an introduction to CCPA and how Plausible Analytics is built to help you comply with it. We encourage you to discuss specific issues with your lawyer to help you ensure that you fulfill the legal requirements that apply to you.

## Who does CCPA affect and what are the penalties?

Companies that serve residents of California may be affected. The location of the company doesn't really matter. Wherever you are based in the world, you may be affected if you're serving California residents. Those companies that fall under the law are:

* Companies that earn at least $25 million in annual gross revenue 
* Or companies that collect 50%+ of their revenue from sales of personal data of California residents
* Or companies that process and collect personal data of 50,000+ residents of California

Penalties for breaking CCPA have no defined maximum and fines are up to $7,500 per violation.

## CCPA is an opt out law

[GDPR](https://plausible.io/blog/google-analytics-gdpr) is an opt-in law which means that your visitors and customers have to give you consent in order for you to collect and process their personal data. CCPA, on the other hand, is an opt out law which means that rather than requiring consent before taking any action, you need to be able to opt people out of personal data gathering if and when they do request it.

## What privacy and data rights does CCPA provide?

CCPA provides a broad set of robust data access rights, privacy rights and control over personal data. It is very similar to the GDPR in this. Your website visitors and customers have:

* The right to know about the data collection and the purposes behind it
* The right to see the data companies have collected about them
* The right to see the list of third-party companies that data is shared with
* The right to delete the data
* The right to opt out and stop the sale or sharing of their personal data to third-parties
* The right to avoid discrimination when exercising their privacy rights
* The right to sue companies that violate their privacy rights

You can check out the [full law here](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375).

## What entails personal information according to the CCPA?

Websites and companies must inform their visitors and customers before the point of data collection about the different personal information that will be collected and state the different purposes for which the data will be used. CCPA lists these sections about what entails personal information:

> Identifiers such as a real name, alias, postal address, unique personal identifier, online identifier IP address, email address, account name, Social Security number, driver’s license number, passport number, or other similar identifiers

> Geolocation data

> Internet or other electronic network activity information including, but not limited to, browsing history, search history and information regarding a consumer’s interaction with a website, application or advertisement

## Is Google Analytics CCPA compliant?

Google Analytics collects personal data such as the IP address, shares it with other Google services for advertising purposes and uses cookies and other persistent identifiers to track people across different devices and as they browse the web.

Here’s a brief overview of Google Analytics features that may not be compliant with the CCPA:

* [Google Analytics stores cookies](https://plausible.io/blog/google-analytics-cookies) and tracks your visitors using cookies. It “uses cookies to identify unique users across browsing sessions”. This is done “to remember what a user has done on previous pages / interactions with the website”.
* Google Analytics sets unique user IDs in order to track users between sessions and between different devices. User-ID feature: “lets you connect multiple devices, sessions, and engagement data to the same users. Associate a persistent ID for a single user with that user’s engagement data from one or more sessions initiated from one or more devices.”
* There are many different data sharing and advertising integrations within Google Analytics that integrate your visitor data with the wider Google ecosystem

## How to make Google Analytics compliant with CCPA?

There are ways you can hack and change Google Analytics to make it CCPA compliant. What you need to do is restrict data collection and data processing that Google Analytics does by default. Go into the “Admin” section of your Google Analytics account and look into these settings:

* In “Account Settings”, disable all the data sharing options. Stop sharing your visitor data with Google products & services, for Benchmarking purposes, for Technical support, to Account specialists and Google sales experts.

* In “Account Settings”, review and accept the Google Ads Data Processing Terms.

* In “Property Settings”, disable all the Advertising Features including Demographics and Interest Reports.

* In “Property Settings”, disable User Analysis including Users Metric in Reporting.

* In “Tracking Info”, click on the “Data Collection” section and disable all the Data Collection for Advertising Features. Disable Remarketing and Advertising Reporting Features.

* In “Tracking Info”, click on the “Data Collection” section and within “Advanced Settings to Allow for Ads Personalization” disallow all regions from Ads personalization.

* In “Tracking Info”, click on the “Data Retention” section and reduce the “User and event data retention” to the minimum amount of time possible (14 months).

* In “Tracking Info”, click on the “Data Retention” section and disable “Reset on new activity”.

* In “Tracking Info”, click on the “User-ID” section and disable the User-ID feature.

* In “Product Linking” section, disable all the product linking including Google Ads linking, AdSense linking and Ad Exchange linking.

* Update your privacy policy with clear information on how and why you use Google Analytics.

* Turn on the IP Anonymization feature in Google Analytics by adding this to your Google Analytics code: ga('set', 'anonymizeIp', true);

* You should disable cookies from Google Analytics. Just note that disabling cookies leaves Google Analytics with a broken functionality. Tracking unique visitors will be broken and pretty much every pageview will be counted as a unique visitor.

[Here are more details](https://support.google.com/analytics/answer/6004245) from Google directly on the different initiatives and tools they've provided to the website and business owners in order to make them better prepared to comply with CCPA.

## How you can comply with CCPA while using Google Analytics

* Tell your visitors that you are using Google Analytics to check your website traffic

* Let your visitors know that you are sharing their personal information with a third-party (Google)

* Inform your visitors that Google Analytics is using cookies and other persistent identifiers to track them between their different devices and as they are browsing the web

* Tell your visitors that they have the right to opt out of this sharing of personal data and that they have the right to delete the data collected at any time

* Guide your visitors to the relevant areas where they can exercise their rights if they choose to do so

* This opt out should be provided via a prominent “Do Not Sell My Personal Information” page on your website

## Are there any Google Analytics alternative tools?

We've built Plausible Analytics with simplicity and privacy in mind. We don't collect much data about your visitors as we only display the most important metrics on our dashboard. You can take a look at [our live demo](https://plausible.io/plausible.io) for details on exactly what data you can get access to. We also have [a data policy](https://plausible.io/data-policy) where we list exactly what we do collect and for what purposes. 

We don't collect nor store any personal data at all. We're cookie-free too. Our business model has nothing to do with personalized advertising and integration with a wider marketing ecosystem so we have no interest in any of data collection for the purpose of behavioral analysis and no interest in sharing your website data with third-parties. You 100% control and own all of your web visitor data.

If you'd like to explore Plausible Analytics in more detail, you can [sign up for a free 30-day trial](https://plausible.io/register). No credit card is required and you can use Plausible Analytics without any restrictions in those 30 days.