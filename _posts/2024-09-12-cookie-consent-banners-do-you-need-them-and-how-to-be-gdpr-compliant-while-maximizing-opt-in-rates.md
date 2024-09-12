---
layout: post
title: "Cookie consent banners: do you need them, and how to be GDPR-compliant
  while maximizing opt-in rates?"
description: The essentials of cookie consent, legal requirements, and
  user-friendly strategies to boost opt-in rates while keeping your site
  GDPR-compliant.
slug: cookie-consent-banners
date: 2024-09-12T12:30:37.294Z
author: hricha-shandily
image: uploads/cookie-consent-banner-example.png
image-alt: Example of a cookie consent banner
---
You've probably seen those pop-ups on websites, sweetly offering you cookies. Those are cookie consent banners.

Cookies are small data files stored on your device or browser by websites or third parties (such as Google Analytics) to remember information about you. They can track details like your behavior, preferences, activities, shopping cart contents, login information, etc.

Some cookies are persistent and can also track visitor’s activity across different sessions, websites, and devices. While some cookies are considered essential for the functioning of the website, others are for marketing or retargeting purposes.

The consent banner appears to inform you about the use of all such types of cookies and to request your permission before these cookies are set, ensuring compliance with various privacy regulations.

These banners give users the choice to accept, reject, or customize the cookies being used on the site. The main purpose is to inform users and allow them control over their data, ensuring transparency and compliance with various privacy laws.

1. Ordered list
   {:toc}

## Do you need a cookie consent banner on your website?

While you should consult the legal advisors in your jurisdiction for ensuring complete compliance and not face any legal troubles, you would need to be compliant with data protection regulations.

Regulations like the European Union’s General Data Protection Regulation (GDPR) or California Consumer Privacy Act (CCPA) are mandatory to be complied with, if you have any visitors from the areas covered by these regulations.

### When do you *not* need to use cookie consent banners?

Consent is not required for using only first-party cookies (cookies set directly by you, with no involvement from third-parties) that are strictly necessary for the operation of the website, such as cookies used for login authentication or security purposes, provided you don’t track, store, process personal data of visitors.

Although, it is generally an ethical and responsible practice to disclose such stuff in the Privacy Policy, anyway.

Please check with your local legal advisors on which exact laws apply in your case, as there can be many nuances based on the countries your visitors come from, where you are registered, etc.

If you do have a cookie consent banner (for reasons we discuss below), such types of cookies are generally exempt and not allowed to be turned off, as you may have noticed.

Another exception to the rule of using consent banners is using inherently GDPR-compliant analytics tools, as we will see below.

### When do you need to use cookie consent banners?

If you utilize [third-party cookies](https://plausible.io/blog/chrome-third-party-cookies#what-are-third-party-cookies) (which are present if you use Google Analytics), taking either explicit or implicit consent (depending upon the laws) from your website visitors is mandatory. If you utilize first-party cookies and track and store personal data of visitors, cookie consents are still necessary.

Any website that collects data from users residing in regions where GDPR or CCPA apply is required to ask for their consent before collecting, processing, storing their data. Hence, cookie consent banners are implemented.

### But can you avoid the cookie consent banners?

The one thing website-owners don’t realize is that consent banners became necessary because several European Data Protection Authorities found out how [Google Analytics has been in violation](https://plausible.io/blog/google-analytics-illegal) of privacy laws.

The responsibility of being privacy-friendly, in many ways, is cleverly being passed from Google Analytics to its users. If you were to dissociate with Google Analytics, many websites will find that they don’t need to use annoying consent banners anymore.

According to a [guide by a data protection lawyer](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) 

* the ePrivacy Directive regulates the use of cookies and similar technologies to store or access data on a user’s device. It requires users to provide informed consent before such technologies are used (Art. 5(3)). 
* Google Analytics 4 relies on cookies and similar technologies to track detailed user behavior. These technologies require access to the user’s device to store or retrieve data, which means, under Article 5(3) of the ePrivacy Directive, Google Analytics 4 must obtain user consent before use.
* Whereas, Plausible Analytics does not use cookies or similar technologies that store data on the user’s device. It analyzes aggregate data without accessing or storing anything on the device, so no consent is required under Article 5(3).

P﻿.S. This is not official legal advise.

Plausible is [GDPR-compliant out of the box](https://plausible.io/privacy-focused-web-analytics). So you can actually ditch consent banners altogether, which not only annoy your visitors, but also cause about [55% data loss](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/), and eventually, business loss.

Plausible is built in the EU itself, does not engage in cross-platform tracking, does not track and store any personally identifiable information, and does not pass on data to third parties.

We analyze website traffic while adhering to the principles of data minimization and economy, in line with privacy regulations. And it is all served on a [super simple](https://plausible.io/simple-web-analytics), easily comprehensible, accurate, single-page dashboard.

### How to make a decision?

Establishing your marketing and website analysis goals, while evaluating how much you and your users value privacy, can help you decide which way to go.

For eg. If retargeting ads are your priority, you cannot escape third-party cookies and Google Analytics along with Google Ads is the default choice. Although, they are going to be phased out pretty soon, so [plan accordingly](https://plausible.io/blog/paid-ads-cookieless-analytics).

Similarly, if your target audience consists of privacy-aware individuals like developers, chances are that they would not only reject the cookie banners, but would have other privacy-protecting measures (like ad blockers, privacy-friendly browsers, etc.) in place.

## How to get a consent banner?

To get your banner up, you can find an ethical, privacy-respecting, and legally compliant Consent Management Provider of your choice. They will provide you with a JavaScript code snippet to implement on your website, and your consent banner will be up in minutes.

If you are using Google Analytics, you can try out the [Consent Mode](https://support.google.com/google-ads/answer/10000067?hl=en) for controlling how your Google tags adjust based on the consent “status” of your website visitors. Google designed it to make up for your lost data when people reject your cookie banners. 

The heavy downside is that this gives way to [key events modeling](https://support.google.com/analytics/answer/10710245?hl=en) inside your GA reports, i.e. you won’t be able to see accurate and real data in your reports with no way of differentiating it from modeled data.

Moreover, there have been countless reports of missing data from Google Analytics users after they implemented Google Consent Mode V2. So make sure to make a fully informed decision.

Speaking of Consent Management Providers or CMPs, beware of the dark patterns that can put you in legal trouble and cause your customers to not trust you.

The sad reality is that CMPs don't see it as their job to follow the privacy regulations. They see it as the responsibility of their users, i.e., you, to respect rules in their jurisdictions.

And since the percentage of people who opt-in to being tracked on the cookie consent banners is usually a key performance indicator in marketing, CMPs focus their sales message on features that help website and business owners optimize the opt-in rate.

For eg. Some CMPs claim that 75% of people say no to giving their consent to be tracked but with some simple design tweaks (essentially, dark patterns), you might get more than 65% of people to say yes.

## Deceptive banner designs, and how NOT to maximize your opt-in rates

Most consent management providers have deceptive designs built into their products. Many of those we have tested enable some of the dark patterns as their default choice. Site owners can switch to a less user-friendly option with a click or two.

**Why should you care?**

* Many such practices are not GDPR and/or CCPA compliant. All this hard work to still stay legally evasive doesn't make sense.
* They breach customer trust.
* They point to bad user experience. Your website is your online identity. Creating friction for people to browse it is counter-productive.
* They are not true to the intent of privacy.

Even those that provide a user-friendly design as the default allow you with a click or two to configure the banner.

Here are some of the tricks some websites use to get higher opt-in rates for cookie consent banners (and that you should avoid):

### Hiding the reject button behind layers of options

You've likely encountered banners that only show options like “Accept” or “Customize,” making it difficult for users to reject cookies. 

Many people don’t want to be tracked across the web by companies like Google or Facebook, but this tactic hides the “Reject” option deep within customization settings, forcing users to manually opt out of every third-party tracker.

This method counts on the fact that most visitors won’t take the time to customize settings. Most people just interact with the first layer of the banner and click "Accept," especially when told it will “ensure the best experience.” 

Misleading, right? Avoid this practice.

### Nudging the users to click Accept by making it the most prominent button

Even if you're required to include a "Reject" button, some sites try to make it nearly invisible—small, bland, and easy to miss. Meanwhile, the "Accept All" button is big, colorful, and designed to grab attention.

On top of this, some sites use copywriting that nudges users to think accepting cookies is the best choice, using positive, friendly language to suggest rejecting cookies is a bad move. 

Such deceptive design should be avoided at all costs.

### “Helping” visitors by pre-selecting the choices that work best for them

Some websites pre-select cookie consent options that allow maximum tracking, making it seem like the default or best choice. 

The user is led to believe that these settings will "save them time," when in reality, they are giving away personal data without a second thought.

This practice is misleading and should not be implemented. Respect users' right to make informed decisions.

### A persisting consent wall to force the visitor to interact with the banner

A consent wall can block access to content until a user interacts with it, pressuring them to either accept tracking or leave the site. Some websites prevent users from closing the consent wall, leaving them with no option but to engage.

This practice traps users into making decisions under duress, and it's not ethical. Always offer a clear, transparent way to manage cookie preferences without blocking content.

### Accept by scrolling

Some sites implement a tactic where simply scrolling through the page or interacting with content is considered as consent to track users. This silent consent is misleading and takes advantage of users who might not even realize they've given permission.

Consent should always be explicit and informed—scrolling or engaging with content should never count as consent.

### Combining the GDPR consent with location or camera prompts

When users try to access certain features, like camera or location services, some websites sneak in GDPR cookie consent requests. The hope is that users won’t notice they are also consenting to being tracked.

This method is underhanded and combines unrelated permissions in a way that confuses users. Always keep consent requests clear and separate from other prompts.

### Blocking video embeds from playing until visitors say yes to tracking

Some sites prevent videos or other embedded content from playing unless users give consent to be tracked. This forces visitors into an uncomfortable choice: either give up their privacy or miss out on content.

Avoid holding content hostage to force consent.

### Nudging the user again on the next visit after they rejected to give you consent

Some websites don’t take “no” for an answer. If a user rejects consent, they’re asked again the next time they visit. This constant nagging is designed to wear users down, hoping they eventually give in.

Respect users' decisions—if they say no, don’t keep asking.

### Not giving the option to withdraw consent 

After users give consent, some sites deliberately hide any option to withdraw it. This makes it difficult for people to change their minds and opt-out later.

This is deceptive and against the spirit of privacy regulations. Always provide a clear and easy way for users to withdraw their consent if they choose to do so.

## How to design a GDPR-compliant consent banner?

Different corporations, legal teams and European countries seem to have slightly different interpretations of the privacy regulations. To be [compliant with GDPR](https://plausible.io/blog/google-analytics-gdpr), your consent banner needs to meet these requirements:

* Show contextual and non-personalized ads, don't place any non-functional cookies and don't track or share any personal data by default.
* You must obtain consent from your visitor before you set a non-functional cookie and before you collect any personal data. Your site shouldn't load any third-party script, tracker or pixel that collect personal data and share it for non-functional purposes before obtaining consent from the visitor.
* Prompt visitors to receive more personalized and more relevant ads or to be tracked by giving you consent to collect their data.
* You need to be transparent about your plan for data collection and inform the visitor clearly and sufficiently about it. What data do you plan to collect? What purpose do you plan to use this data for? What third-party services are you sharing the data with?
* User consent must be explicit. It can be given by clicking on an "Agree" button, or by placing a checkmark or by pressing a slide switch. It cannot be preselected.
* When you get explicit user consent, proceed as you described to the user. Place those cookies that the user agreed to, collect that data that the user agreed to and share the data that the user agreed to the third-parties user agreed to.
* If the visitor doesn't actively and explicitly give you consent by either ignoring your prompt or by choosing "Disagree" on the prompt, then you don't have consent. There are no exceptions. You should not place any non-functional cookies and you should not collect any personal data.

Not getting entangled with sales messages of consent management providers can prevent you from making the mistake of creating non-compliant cookie consent banners.

## Web users are already smart at escaping the wild west of cookie banners

Many internet users are aware of their GDPR and CCPA rights. Especially with privacy-respective solutions on the web, they are being more and more preferred. Trying to deceive them with jargon and manipulation is not going to look good on a brand.

For eg. Browsers like Safari and Firefox protect you from the most annoying website elements and it also "confines cookies to the site where they were created, which prevents tracking companies from using these cookies to track your browsing from site to site."

This means that Google, Facebook and other surveillance capitalism giants cannot follow you as easily when you browse the web even if the website you're visiting may be using a dark pattern or two to get you to consent.

Organizations like [noyb scans](https://noyb.eu/en/noyb-files-422-formal-gdpr-complaints-nerve-wrecking-cookie-banners), reviews, warns and enforces the law on tens of thousands of websites. They're showing great success with their warnings and are making a real impact on the choice web users have when browsing websites.

Many of the big websites that noyb has warned have since changed their consent banner to a more user-friendly design. They are doing great work in this space, increasing the awareness about the wild west of cookie consent banners and making the web friendlier to us all.

## So how will you maximize opt-in rates after all?

At the end of the day, the goal is to be compliant, privacy-friendly, and loyal to your customers. Therefore, optimizing a cookie consent banner (at least not in the deceptive ways described above) is not going to be equivalent to optimizing opt-in rates.

When designing your consent banner, just give the truth, in simple plain language, and nicely ask for consent. Transparency builds trust, and trust builds long-term customer relationships.

It’s also important to offer users genuine choice—an easy way to opt out or manage preferences should be just as visible as the option to accept all cookies. 

This creates an environment where users feel in control of their data. In turn, when users believe you're respecting their privacy, they are more likely to engage with your site and consent willingly.

The key to maximizing opt-in rates lies in a balanced, ethical approach. You can still inform users about the benefits of consenting, such as personalized experiences or improved site functionality, but avoid pressuring them. 

Make the experience intuitive, respectful, and informative. This balance will not only boost opt-in rates, but also enhance your brand’s reputation for transparency and user-centered design.

## Building a site that doesn't require a GDPR or cookie consent banner

It's the sad state of the web that these tricks are prevalent and some of your favorite brands and websites use them to get them to give you that "Accept".

Here at Plausible Analytics, we believe that the best way to optimize your opt-in rate is to build a website that doesn't require an opt-in in the first place.

How do you achieve that?

* Review all the third parties you are using. Review their data policies and how they think about online privacy.
* Try to reduce this number. Use as few privacy-invasive services as possible.
* Switch to a privacy-friendly service if you require a specific service and cannot go without it. There's a growing demand for privacy-first tools and a growing number of teams working on them so you are bound to find a friendlier alternative.
* Want Google Analytics but cannot get many of your visitors to consent to have their personal data tracked for advertising purposes using cookies and other mechanisms? Plausible Analytics is a cookie-less and privacy-first alternative that doesn't track, collect nor store any personal data at all.