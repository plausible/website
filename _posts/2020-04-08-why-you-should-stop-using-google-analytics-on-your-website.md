---
layout: post
title: Why you should stop using Google Analytics on your website
description: Here's a look at why you should remove Google Analytics from your
  website and help create a more open, independent web that's more friendly to
  the visitors.
slug: remove-google-analytics
date: 2020-04-08T12:20:53.993Z
author: marko-saric
image: /uploads/remove-google-analytics.png
image-alt: Why you should stop using Google Analytics on your website
---
Google, the world's largest ad-tech company, has direct access to user data and browsing information from a large part of the web traffic. Their data collection can track an individual from multiple angles to create the best possible behavioral profile. Google has nine different products with more than one billion users each.

Google Chrome is the most popular web browser with a market share of [64%](https://gs.statcounter.com/browser-market-share). Google's Android is the most popular operating system on mobile devices with a market share of [72%](https://gs.statcounter.com/os-market-share/mobile/worldwide). Google Fonts are used by millions of website developers and it's the most popular third-party domain accounting for more than 3.5% of all network requests.

And then there's the Google Analytics tool for tracking website stats. Google Analytics is used by millions of websites in order to learn more about their visitors. I used Google Analytics and for years it was one of the first things I integrated on a newly launched site.

More recently my thinking about this has changed. Using Google Analytics is a habit website owners, bloggers and web developers should try to stop. Here's a look at why you should remove Google Analytics from your website and help create a more open, independent web that's more friendly to the visitors.

1. Ordered list
{:toc}

## It's owned by Google, the largest ad-tech company in the world

Google Analytics is the most popular website stats tool. More than 53% of all sites on the web track their visitors using Google Analytics. [84%](https://w3techs.com/technologies/details/ta-googleanalytics) of sites that do use a known analytics script use Google Analytics. It's the most popular third-party request on the web. It accounts for [0.64%](https://almanac.httparchive.org/en/2019/third-parties) of all network requests.

Google Analytics is created, hosted and run by the largest ad-tech company in the world. A company that loves to devour all the personal data it can get access to.

Google's products are free to use because Google has built its wealth by collecting huge amounts of personal information and using these [personal and behavioral insights to sell targeted advertising](https://plausible.io/blog/google-analytics-and-privacy).

This business model of [surveillance capitalism](https://en.wikipedia.org/wiki/Surveillance_capitalism) creates a massive demand for personal information.

All the raw data that we produce such as the sites that we visit, topics we search for, products that we buy, people that we engage with and locations we spend our time at is used to create better behavioral profiles that are then used to sell targeted advertising directed at us.

Here's what Google [says](https://policies.google.com/technologies/partner-sites?hl=en-US) on how they use information from sites that use their products:

> "Google uses the information shared by sites and apps to deliver our services, maintain and improve them, develop new services, measure the effectiveness of advertising, protect against fraud and abuse, and personalize content and ads you see on Google and on our partners’ sites and apps".

## It's a bloated script that affects your site speed

Web analytics like any other website element add extra page weight and extra loading time to a site. Google's Global Site Tag and the Universal Analytics script can be considered bloat if you only care about the most useful website stats and want to make your site as lean and fast as possible.

Global Site Tag, the recommended way of integrating Google Analytics into your site, is a centralized script that can help you integrate many other Google services and features such as conversion tracking and remarketing.

*https://www.googletagmanager.com/gtag/js* weights 28 KB and this script downloads another JavaScript file called the Google Analytics tag (*https://www.google-analytics.com/analytics.js*) which adds 17.7 KB to your page size.

These two tracking scripts combined add 45.7 KB of page weight to each and every page load. Every KB matters when you want to keep your site fast to load and a more [lightweight analytics](https://plausible.io/lightweight-web-analytics) solution is needed.

## It's overkill for the majority of site owners

For most site owners, the amount of data Google Analytics collects is overkill. It’s a powerful but complex tool that takes time to understand and requires training. Most people find real and regular use for only a fraction of the metrics it measures.

In total, Google Analytics on its left-hand side navigation menu has more than 125 items for different reports you can gather your insights from. All these different reports track more than 290 different metrics combined.

Analyzing these is a full-time job that requires a lot of time, effort, expertise and experience to do well. Many Google Analytics users end up creating custom dashboards where they add few widgets with useful metrics that they get actual value from. Then they ignore everything else that Google Analytics tracks.

Some just ignore their Google Analytics completely as it's overwhelming to even start with. There's a need for more [simple site analytics](https://plausible.io/simple-web-analytics).

## It's a liability considering GDPR, CCPA and other privacy regulations

Lawmakers have taken notice about the surveillance capitalism and several different personal data and privacy regulations have been introduced such as the General Data Protection Regulation (GDPR) in Europe, California Consumer Privacy Act (CCPA) in the United States and the Privacy and Electronic Communications Regulations (PECR) in the United Kingdom.

Google Analytics collects a lot of personal data and it is a potential liability for your site. Many website owners fail to do this, but you should and must disclose to your visitors your use of Google Analytics to track them. If you prefer not to do this, you should use an alternative that gives you [privacy-friendly analytics](https://plausible.io/data-policy).

On top of the standard site analytics, many Google Analytics users also enable different advertising features such as remarketing, demographics reporting and interest reporting. In those cases, you're collecting data for advertising purposes which means that Google Analytics uses additional advertising identifiers.

[According to Google](https://www.google.com/about/company/user-consent-policy/): "you must ensure that certain disclosures are given to, and consents obtained from, end users in the European Economic Area along with the UK. If you fail to comply with this policy, we may limit or suspend your use of the Google product and/or terminate your agreement".

Google states that you "must obtain end users’ legally valid consent" to the use of cookies or other local storage where legally required and to the collection, sharing, and use of personal data for personalization of ads.

## It uses cookies so you must obtain consent to store cookies

Google Analytics is a cookie-based web analytics tool and it is not possible to use it without cookies. Google Analytics sets [multiple cookies](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage) and it "uses cookies to identify unique users across browsing sessions". This is done "to remember what a user has done on previous pages / interactions with the website".

And all the privacy regulations have a say about cookies too. PECR, for instance, requires a site owner to tell their visitors about cookies that they use to track personal data and give visitors the choice of whether to accept them or not.

[According to PECR](https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/what-are-cookies-and-similar-technologies/), you "need to tell people about analytics cookies and gain consent for their use". If you use cookies you must say what cookies will be set, explain what the cookies will do and obtain consent to store cookies on devices.

## It's blocked by many plugins and browsers so the data is not very accurate

Many people have got enough of banner advertising, retargeting and remarketing messages, and behavioral profiling so they choose to block some of these distractions.

Google Analytics script is blocked by millions of people who use adblockers such as the [uBlock Origin](https://github.com/gorhill/uBlock) and by users of popular browsers such as [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [Brave](https://brave.com/).

There's no definite answer on how many people block Google Analytics as that depends on the audience of your site, but for a tech audience, you shouldn't be surprised to see 50% or more of the visitors blocking Google Analytics.

Another aspect of Google Analytics data accuracy that some people are concerned with is the fact that it uses data sampling. It's the [practice of](https://support.google.com/analytics/answer/2637192?hl=en) "analyzing a subset of all data in order to uncover the meaningful information in the larger data set". Here's [a deeper look](https://matomo.org/blog/2019/08/what-is-google-analytics-data-sampling-and-whats-so-bad-about-it/) into that issue.

## It requires an extensive privacy policy

In addition to the cookie notice and the GDPR consent prompt, Google has [further requirements](https://marketingplatform.google.com/about/analytics/terms/us/) for your use of Google Analytics:

> "You must post a Privacy Policy and that Privacy Policy must provide notice of Your use of cookies, identifiers for mobile devices or similar technology used to collect data. You must disclose the use of Google Analytics, and how it collects and processes data. You will use commercially reasonable efforts to ensure that a User is provided with clear and comprehensive information about, and consents to, the storing and accessing of cookies or other information on the User’s device where such activity occurs in connection with the Service and where providing such information and obtaining such consent is required by law."

## It's abused by referral spam that skews the data

You may have noticed referrer URLs in your dashboard that are spam. It's a way for bad actors to "advertise" their products and services to other website owners by spamming Google Analytics.

They send fake visitors to your site which then shows their URL towards the top of your referral sources list. The intention is to get you to get curious and visit their site.

This referral spam has been going on for years in Google Analytics and it can really skew the stats you see. Many site owners put a lot of effort and spend a lot of time blocking the referral spam. Some do it manually one domain at a time while some use more automated systems. Neither are ideal solutions.

## It's a proprietary product so you need to put your trust in Google

As it says on the very top of the [Google's privacy policy](https://policies.google.com/privacy): "When you use our services, you’re trusting us with your information". In the case of Google Analytics, you're not only trusting Google with your information but also the information of all your website visitors.

Google Analytics is a closed source, proprietary product. There have been many rumors for years on what Google uses all the Google Analytics data for. Do they use it to figure out how sticky a site is to better rank pages in their search results? Do they use the data to better profile web users to sell advertising?

Google has denied many of the accusations and rumors but there's no way of knowing what's going on behind the scenes when you're using the Google Analytics script. You have to simply put your trust in Google, the world's largest ad-tech company.

## It worsens the user experience due to the necessity for the annoying prompts

When you're using Google Analytics, you're making the user experience on your site more inconvenient. All the privacy regulations are a good step towards a better web and are a necessary thing in the world of surveillance capitalism.

To abide by the privacy regulations while collecting the personal data of your visitors, you need to compromise the visitor experience by displaying annoying cookie banners and GDPR or CCPA consent notices. You also need to present comprehensive privacy policy regarding analytics tracking.

And if you're simply using Google Analytics for basic web statistics, it's worth considering the dramatic effect it has on the visitor experience and the loading time. Is it worth it or could you find a [better and privacy-friendly alternative to Google Analytics](https://plausible.io/vs-google-analytics)?

## What are the alternatives to Google Analytics?

* ### No analytics or server logs

Many solutions do exist so there's no excuse not to explore them for a bit. If you really don't care too much about the data, you can simply go without having analytics in the first place or use your server logs to get access to the basic stats.

* ### Full-blown but more ethical alternatives

There are also full-blown direct competitors to Google Analytics such as [Matomo](https://plausible.io/vs-matomo). Matomo (formerly known as Piwik) is one of the big players in the ethical site analytics market.

Matomo does have some of the similar issues to Google Analytics such as being difficult to get insights from hundreds of different reports and metrics, and the fact that it collects a lot of personal information and requires cookie notices and GDPR consent prompts by default.

But it is an [open-source analytics tool](https://plausible.io/open-source-website-analytics) that you can self-host on your domain name and that you can customize to be less privacy-invasive.

* ### Search Console for data on search engine visibility

For those who just use Google Analytics to understand their search engine visibility and traffic they get from Google search, there’s the [Google Search Console](https://search.google.com/search-console). It is the most accurate way of doing that. It's completely independent of Google Analytics and you don’t need to add any tracking scripts to your site to use it.

* ### Privacy-friendly and simple to understand alternatives

This is where our brand-new solution comes in place. With Plausible Analytics we believe we have created a better Google Analytics alternative for many site owners. Plausible Analytics gives you a web analytics tool that is:

1. Fully **open source** with the code available [on GitHub](https://github.com/plausible-insights/plausible)
2. **Simple to understand** and get insights from in one minute
3. A **lightweight script of less than 1 KB** so your site keeps loading fast
4. **Doesn't use cookies** so there's no need for cookie banners
5. **Doesn't collect personal data** so no need for GDPR and CCPA consent prompts

Take a look at [our live demo](https://plausible.io/plausible.io).

## Give Plausible Analytics a try

Plausible Analytics is built with simplicity, speed and privacy in mind. We've used Google Analytics for years and understand its pitfalls.

The idea with Plausible is to build an alternative that could help many site owners get access to actionable website stats while having a fast loading website, completely controlling all the data and respecting the privacy of visitors.

[Sign up for a free trial](https://plausible.io/register) and give Plausible Analytics a chance. And if this message resonates with you, do spread the word to your favorite site owners. Friends don't let friends use Google Analytics.
