---
layout: post
title: "Is Google Analytics GDPR compliant? "
description: Here's a look at the meaning of GDPR, how it impacts web analytics
  and steps you need to take to make Google Analytics GDPR compliant.
slug: google-analytics-gdpr
date: 2020-06-09T05:37:34.766Z
author: marko-saric
image: /uploads/remove-google-analytics.png
image-alt: Web Analytics, GDPR and is Google Analytics GDPR compliant?
---
Let's take a look at the meaning of GDPR, how it impacts web analytics, steps you need to take to make Google Analytics GDPR compliant and also explore our [GDPR compliant Google Analytics alternative](https://plausible.io/vs-google-analytics).

1. Ordered list
{:toc}

Disclaimer: We’re not lawyers. The information in this post is our view on GDPR and it’s here to help give you an introduction to GDPR and how Plausible Analytics is built to help you comply with it. If you have any specific concerns, we encourage you to consult an attorney to ensure you are GDPR compliant.

## A brief overview of the GDPR

I think that the GDPR is a great law that's trying to make the web a better and friendlier place for Internet users. It's misunderstood by some people and it's given a bad name by those who want to force you to say “yes” to them selling your data to third-parties for non-essential purposes such as the targeted advertising purposes. 

They do that by displaying different illegal implementations of GDPR with intrusive cookie walls and other annoying prompts that restrict you from visiting their sites.

GDPR is non-intrusive by default. And it does not affect businesses as much as some claim. According to the GDPR, you can use cookies even without user consent. You can monetize your site using advertising and you can promote yourself using advertising even without user consent. 

What GDPR does is that it says if you're going above the functional purposes only and want to collect and mine personalized data, you do need to inform your visitor and ask them whether they want to opt-in before doing that. Active consent is required. Seems fair?

Sites and businesses try to circumvent GDPR and implement what they think is enough to allow them to continue the practices that GDPR was designed to prevent. They introduce dark patterns to make it simple to accept data collection but difficult to decline.

Why do they do all that? Many websites make money from tracking their users for advertising purposes and they believe that more data collection means more profit. They believe that users don't want and don't need tracking so they will say "no" to those practices if given a fair chance. Which is why they try to circumvent this and force the consent.

These dark patterns may get very expensive when the GDPR gets enforced and companies that use these practices get punished.

### What is the GDPR?

[General Data Protection Regulation (GDPR)](https://gdpr.eu/) is a European data security and privacy law that was put into effect on May 25th 2018. GDPR applies to companies and websites worldwide. It applies to and impacts all businesses and websites that target people in the European Union and that collect data related to the people in the EU even if the businesses themselves are not in the EU. 

The fines for violating GDPR max out at 4% of global revenue or 20 million Euro whichever is highest. More than 100 million Euro in fines have been issued to companies including Facebook and Google since GDPR came into effect.

You can read the full GDPR regulation [here](https://gdpr.eu/tag/gdpr/).

### What are the GDPR requirements?

Here's a summary of what the law looks at and requires:

* Any personal data processing must be fair and transparent to your site visitors

* Your site visitors must freely give you specific, informed and unambiguous consent to process the data such as by subscribing to your newsletter

* Requests for consent must be clearly distinguishable from the other matters and presented in clear and plain language

* Data processing can only be done for legitimate purposes specified explicitly to your customers or site visitors when you collected their consent

* You should collect and process only as much data as absolutely necessary for the purposes specified when you got the user consent

* You may only store personally identifying data for as long as necessary for the specified purpose

* Processing must be done in such a way as to ensure appropriate security, integrity, and confidentiality by for instance using data encryption

* Your site visitors can withdraw previously given consent whenever they want and you have to honor their decision

### What is personally identifiable information according to the GDPR?

What does GDPR mean when they talk about personal information? Here's what the law says:

> Personal data is any information that relates to an individual who can be directly or indirectly identified. Names and email addresses are obviously personal data. Location information, ethnicity, gender, biometric data, religious beliefs, web cookies, and political opinions can also be personal data. Pseudonymous data can also fall under the definition if it’s relatively easy to ID someone from it.

> ‘Personal data’ means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.

## What is the impact of GDPR on website analytics

Many website analytics tools are in breach of the GDPR for several reasons: 

* they use cookies to track visitors
* they collect personal information
* they share the data with other products such as those for advertising purposes

If you're using one of the well-established and popular website analytics platforms such as Google Analytics you do need to consider how GDPR may affect you.

### How to comply with GDPR as a website owner or blogger

Complying with GDPR is not difficult in theory but wanting to use tools that are not compliant with GDPR makes the process more complicated. Here's how you can follow the intention of the GDPR and have a fully compliant and user-friendly GDPR implementation:

1. Show contextual and non-personalized ads, don't place any non-functional cookies and don't track or share any personal data by default

2. You must obtain consent from your visitor before you set a non-functional cookie and before you collect any personal data. Your site shouldn't load any third-party script, tracker or pixel that collect personal data and share it for non-functional purposes before obtaining consent from the visitor 

3. Prompt user to receive more personalized and more relevant ads or to be tracked by giving you consent to collect their data

4. You need to be transparent about your plan for data collection and inform the visitor clearly and sufficiently about it. What data do you plan to collect? What purpose do you plan to use this data for? What third-party services are you sharing the data with?

5. User consent must be explicit. It can be given by clicking on an "Agree" button, or by placing a checkmark or by pressing a slide switch.

6. When you get explicit user consent, proceed as you described to the user. Place those cookies that the user agreed to, collect that data that the user agreed to and share the data that the user agreed to the third-parties user agreed to.

7. If the visitor doesn't actively and explicitly give you consent by either ignoring your prompt or by choosing "Disagree" on the prompt, then you don't have consent. There are no exceptions. You should not place any non-functional cookies and you should not collect any personal data.

## Does Google Analytics track personal data and IP address?

Yes, Google Analytics tracks IP addresses of your website visitors and it shares personal data with other Google products for advertising purposes. Here's a brief overview of Google Analytics features that may not be compliant with the GDPR: 

* Google Analytics stores cookies and tracks your visitors using cookies
* Google Analytics sets unique user IDs in order to track users between sessions and between different devices. [User-ID feature](https://support.google.com/analytics/answer/3123662): "lets you connect multiple devices, sessions, and engagement data to the same users. Associate a persistent ID for a single user with that user's engagement data from one or more sessions initiated from one or more devices."
* By using Google Analytics you are sharing your website and visitor data with Google
* There are many different data sharing and advertising integrations within Google Analytics

## Is Google Analytics GDPR compliant?

The above means that Google Analytics is not GDPR compliant out of the box. And this is what [Google says](https://www.google.com/about/company/user-consent-policy/) about what you need to do if you're using Google Analytics: 

> "You must ensure that certain disclosures are given to, and consents obtained from, end users in the European Economic Area along with the UK. If you fail to comply with this policy, we may limit or suspend your use of the Google product and/or terminate your agreement".
 
You must obtain legally valid consent from your website visitors to:

* the use of cookies or other local storage
* the collection, sharing, and use of personal data for personalization of ads
 
## How to make Google Analytics GDPR compliant

So what if you don't want to [remove Google Analytics](https://plausible.io/blog/remove-google-analytics) and you don't want to worry about obtaining consent from your visitors but you still do insist on using Google Analytics? You can try to make Google Analytics GDPR compliant. 

According to the GDPR, it is your responsibility as a website owner to ensure that your usage of Google Analytics on your website complies with GDPR. It is not Google's responsibility.

You are considered a data controller while Google is considered a data processor in this relationship and as such you have several obligations under GDPR.

There are ways you can hack and change Google Analytics to make it GDPR compliant. Go into the "Admin" section of your Google Analytics account.

* In "Account Settings", disable all the data sharing options. Stop sharing your visitor data with Google products & services, for Benchmarking purposes, for Technical support, to Account specialists and Google sales experts.

* In "Account Settings", review and accept the Google Ads Data Processing Terms.

* In "Property Settings", disable all the Advertising Features including Demographics and Interest Reports.

* In "Property Settings", disable User Analysis including Users Metric in Reporting.

* In "Tracking Info" click on the "Data Collection" section and disable all the Data Collection for Advertising Features. Disable Remarketing and Advertising Reporting Features. 

* In "Tracking Info" click on the "Data Collection" section and within "Advanced Settings to Allow for Ads Personalization" disallow all regions from Ads personalization.

* In "Tracking Info" click on the "Data Retention" section and reduce the "User and event data retention" to the minimum amount of time possible (14 months). 

* In "Tracking Info" click on the "Data Retention" section and disable "Reset on new activity".

* In "Tracking Info" click on the "User-ID" section and disable the User-ID feature. 

* In "Product Linking" section, disable all the product linking including Google Ads linking, AdSense linking and Ad Exchange linking.

* Update your privacy policy with clear information on how and why you use Google Analytics.

* You also need to disable Google Analytics cookies and enable IP anonymization feature. Keep reading.

### Google Analytics IP anonymization

IP addresses are specifically defined as personal data under GDPR. In addition to disabling the User-ID feature, you should turn on the IP Anonymization feature in Google Analytics by adding this to your Google Analytics code:

```
ga('set', 'anonymizeIp', true);
```

### Disable Google Analytics cookies

Google Analytics sets multiple cookies (including _ga, _gid and _gat) and it “uses cookies to identify unique users across browsing sessions”. This is done “to remember what a user has done on previous pages / interactions with the website”.
 
Google [says](https://support.google.com/analytics/answer/2992042): "In order for Google Analytics to determine which traffic belongs to which user, a unique identifier associated with each user is sent with each hit. This identifier can be a single, first-party cookie named _ga that stores a Google Analytics client ID, or you can use the User-ID feature in conjunction with the client ID to more accurately identify users across all the devices they use to access your site or app".

You can disable cookies from Google Analytics but disabling cookies leaves Google Analytics with a broken functionality. Tracking unique visitors will be broken and pretty much every pageview will be counted as a unique visitor.

Google says that in some cases you can replace Google Analytics cookies with your own storage mechanism such as localStorage or a service worker in order to fix the breakage of unique visitor counting. This is a bit more complicated solution for the average website as you need to send another client ID to Google but [here’s](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id) a guide from Google themselves on how you can achieve it.

Read more in our post about [Google Analytics and cookies](https://plausible.io/blog/google-analytics-cookies).

## Google Analytics alternatives that are GDPR compliant

We built Plausible Analytics with GDPR and user privacy in mind. This means that we don't use cookies at all and that we don't collect or store any personally identifiable information. Take a look at [our data policy](https://plausible.io/data-policy) for a detailed list on the few things that we do collect and everything else we've done to minimize data collection. 

We also don't use any of the data we do collect for any advertising and behavioral profiling purposes. Our business model has nothing to do with advertising. Our product is not your website data. Our product is the website analytics tool and our business model is focused on hosting this analytics tool and charging a subscription fee for doing that.

If you're curious about trying out our Plausible Analytics on your website, you can register for a [free, unlimited-usage 30-day trial](https://plausible.io/register) with no credit card required. Our analytics script weighs less than 1 KB so you can run it alongside Google Analytics for the trial period and decide for yourself if it works for you.