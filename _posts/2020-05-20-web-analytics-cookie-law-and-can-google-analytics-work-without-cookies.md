---
layout: post
title: Cookieless web analytics and can Google Analytics work without cookies?
description: Are you confused about Google Analytics and the requirement to show
  the cookie consent banner to your visitors? Can you have cookie free web
  analytics?
slug: google-analytics-cookies
date: 2020-05-20T09:56:34.718Z
author: marko-saric
image: /uploads/big-spike-in-traffic.png
image-alt: Cookieless web analytics and the cookie consent
---
Are you confused about using Google Analytics on your website, the cookies and the requirement to show the cookie consent banner to your visitors? And can you have a cookieless web analytics alternative to Google Analytics? This post is here to figure it all out. Let's get started.

1. Ordered list
   {:toc}

## What are web cookies?

Web cookies are small pieces of data that websites place on the devices of people browsing the web. Web browsers then store these cookies and can send them back to the website on the next visit. Cookies can be read by whoever sets the cookie and are a mechanism websites use to identify a user.

Not all cookies are bad. Cookies can be used for legitimate purposes and can provide essential functionality. Cookies help save your session so you don't need to log in to a site on every single visit. Cookies allow you to add an item to a shopping cart on an ecommerce site. These are first-party cookies, the cookies that are set by the website that a person is visiting.

Cookies can also be used for not-so-essential advertising purposes such as cross-site tracking and retargeting. These third-party cookies are created by domains other than the one that the person is visiting. It's thanks to these third-party cookies such as the DoubleClick cookie by Google Analytics that companies can target people with personalized advertising messages as they browse the web. 

It's these not-so-essential types of cookies that can be a bit troublesome in terms of privacy regulations and the [ePrivacy Directive](https://ec.europa.eu/digital-single-market/en/news/eprivacy-directive) (also known as the Cookie Law).

## What do privacy regulations such as GDPR say about cookies?

All the privacy regulations have a say about cookies. PECR is the privacy regulation in the United Kingdom and it stands for Privacy and Electronic Communications Regulations.

PECR requires a website owner to tell their visitors about technologies such as cookies that they use to track personal data and give visitors the choice of whether to accept this or not. 

According to [PECR](https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/what-are-cookies-and-similar-technologies/), you "need to tell people about analytics cookies and gain consent for their use". If you use cookies, you must say what cookies will be set, explain what the cookies will do and obtain consent to store cookies on devices.

> Say what cookies will be set 
>
> Explain what the cookies will do
>
> Obtain consent to store cookies on devices

This is how we would sum up different regulations such as the General Data Protection Regulation (GDPR) in Europe and the California Consumer Privacy Act (CCPA) in the United States with regards to the cookies:

> If you track, collect, share or sell personal data or personally identifiable information (PII) by using cookies and other technology, you need to inform the visitor in clear and plain language, ask for and get explicit consent before you take that action.

The information in this post is our view on things and it's here to help give you an introduction to web cookies and how Plausible Analytics is built to help you comply with the cookie laws. We encourage you to discuss specific issues with your lawyer to help you ensure that you fulfill the legal requirements that apply to you.

## Does Google Analytics use cookies?

Google Analytics is a cookie based web analytics platform. It sets [multiple cookies](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage) (including _ga, _gid and _gat) and it "uses cookies to identify unique users across browsing sessions". This is done "to remember what a user has done on previous pages / interactions with the website".

Google [says](https://support.google.com/analytics/answer/2992042): "In order for Google Analytics to determine which traffic belongs to which user, a unique identifier associated with each user is sent with each hit. This identifier can be a single, first-party cookie named _ga that stores a Google Analytics client ID, or you can use the User-ID feature in conjunction with the client ID to more accurately identify users across all the devices they use to access your site or app".

![Example of cookies Google Analytics sets](/uploads/google-analytics-cookies.png "Example of cookies Google Analytics sets")

Here are some of the things Google Analytics tracks using cookies:

* Distinguish unique users
* Remember the number and time of previous visits
* Remember traffic source information
* Determine the start and end of a session

On top of the standard analytics, many Google Analytics users also enable the different advertising features such as remarketing, and demographics and interest reporting. 

In those cases, you're collecting data for advertising purposes which means that Google Analytics places additional advertising identifiers and third-party cookies such as a DoubleClick cookie.

### Can Google Analytics work without cookies?

You can disable cookies from Google Analytics but disabling cookies leaves Google Analytics with a broken functionality. Tracking unique visitors will be broken and pretty much every pageview will be counted as a unique visitor.

Google says that in some cases you can replace Google Analytics cookies with your own storage mechanism such as localStorage or a service worker. This is a bit more complicated solution for the average website as you need to send another client ID to Google but here's [a guide](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id) from Google themselves on how you can achieve it.

### Requirements for the use of Google Analytics

Google has several requirements for your use of Google Analytics:

> "You must post a Privacy Policy and that Privacy Policy must provide notice of Your use of cookies, identifiers for mobile devices or similar technology used to collect data. You must disclose the use of Google Analytics, and how it collects and processes data. You will use commercially reasonable efforts to ensure that a User is provided with clear and comprehensive information about, and consents to, the storing and accessing of cookies or other information on the User's device where such activity occurs in connection with the Service and where providing such information and obtaining such consent is required by law."

According to Google: "you must ensure that certain disclosures are given to, and consents obtained from, end users in the European Economic Area along with the UK. If you fail to comply with this policy, we may limit or suspend your use of the Google product and/or terminate your agreement".

Google states that you "must obtain end users' legally valid consent" to:

> the use of cookies or other local storage where legally required the collection, sharing, and use of personal data for personalization of ads

### How to implement the Google Analytics GDPR cookie consent prompt

Here's how you can implement the GDPR cookie consent prompt on your website if you're using a cookie-based web analytics platform such as the Google Analytics:

1. Remember not to block your visitors from seeing your page with one of those cookie walls that you may have seen on some websites. This is an [illegal implementation](https://edpb.europa.eu/sites/edpb/files/files/file1/edpb_guidelines_202005_consent_en.pdf) (links to the official PDF document) of the law and is done by sites that want to "force" the user into accepting their terms.
2. Don't store any cookies on the device of your visitor before that visitor gives you the consent to do so.
3. Place the cookie consent prompt somewhere visible on your site such as the bottom left or bottom right of the screen.
4. Write in plain language in a similar way that you communicate on the rest of your site. Explain to the visitor what you want to collect and why that is useful to you.
5. Ask the visitor to decide whether to give you the consent to do so or not. Make that choice clear with simple "yes" and "no" or "accept" and "decline" options. No dark patterns can be used in order to make the visitor accept. If you need help to do this, there are products such as [Metomic](https://metomic.io/) that can help you create beautiful and cookie law compliant consent prompts.

![An example of a valid cookie consent banner](/uploads/cookie-consent-banner.png "An example of a valid cookie consent banner")

### What happens when a visitor clears the cookie from their browser?

This is another negative aspect of cookie-based web analytics. It's not a bulletproof solution: 

* In case the visitor blocks the Google Analytics that visitor will not be counted in your web statistics.
* In case the visitor clears the cookies from their browser, that visitor will be counted as a new unique visitor next time they visit your site.
* In recent years, mainstream browsers such as Brave and Firefox have blocked Google Analytics trackers and third-party cookies by default.
* On top of this, millions of web users have installed different adblocking browsing extensions such as the uBlock Origin. All these block Google Analytics tracking too.
* [Safari's Intelligent Tracking Protection](https://plausible.io/blog/safari-privacy-report) does not block third-party requests on a website but it prevents them from placing cookies or from accessing the local storage of a device.

All these make cookie based web analytics provide less accurate and incomplete web stats. 

## Can you get web analytics without cookies?

We've built [Plausible Analytics](https://plausible.io) with privacy regulations in mind. Plausible Analytics does not use cookies and does not collect any personal data. This makes us compliant with the different cookie laws and privacy regulations.

The fact that Plausible is a cookieless web analytics tool means that you are not required to annoy your visitors with a cookie notice if you're using Plausible for your website statistics.

By not using cookies you do not need to obtain consent from the visitors to store and retrieve data from their devices. It's one less thing to worry about and annoy your visitors with. 

This is one of the reasons why you should consider Plausible Analytics as a great cookie-free [Google Analytics alternative](https://plausible.io/vs-google-analytics).

### How can Plausible Analytics count unique visitors without cookies?

So if you don't use cookies how do you count the number of website visitors and report on metrics such as the number of unique users?

Instead of tagging users with cookies, we count the number of unique IP addresses that accessed your website. Counting IP addresses is an old-school method that was used before the modern age of JavaScript snippets and tracking cookies.

Since IP addresses are considered personal data under GDPR, we anonymize them using a one-way cryptographic hash function. This generates a random string of letters and numbers that is used to calculate unique visitor numbers for the day. Old salts are deleted to avoid the possibility of linking visitor information from one day to the next. We never store IP addresses in our database or logs.

You can read our data policy with full details on things we do collect, how we do it and how we've made our product a [GDPR compliant web analytics tool](https://plausible.io/data-policy).

### But what if the IP address of a visitor gets changed?

If a visitor changes the IP address they will be counted as another new visitor. Similar to if someone blocks or deletes their cookies, they become new visitors too.

In our testing, using IP addresses to count visitors is remarkably accurate when compared to using a cookie. Total unique visitor counts were within 10% error range with IP-based counting usually showing lower numbers. 

Overall, we're happy with this approach because we expected bigger inaccuracy. In some cases, it might even be more accurate than using a cookie because some audiences such as tech-savvy audiences block cookies altogether. 

Turns out, counting IP addresses is not much less accurate than using cookies. And [not having to show a cookie banner](https://plausible.io/blog/cookie-consent-banners#do-you-need-a-cookie-consent-banner-on-your-website) is a worthwhile trade off for many sites.

## Try Plausible Analytics for cookie free analytics

Do you prefer not to use cookies in your web statistics and not to need to display cookie prompts and get cookie consent from your visitors? Try our cookie-free solution. By using Plausible, you will not place any cookies to the browsers of your visitors. No need for cookie prompts and cookie consent.

You can sign up for a [free 30-day trial here](https://plausible.io/register). By using Plausible Analytics you can keep your website fast loading and your visitor experience free from distractions and annoying prompts.

You can even [import your historical stats from Google Analytics](https://plausible.io/docs/google-analytics-import).