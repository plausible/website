---
layout: page
title: 'Plausible: GDPR, CCPA and cookie law compliant site analytics'
description: Plausible provides cookie-less web analytics without collecting personal
  data and while respecting the privacy of website visitors. This is our data policy.
permalink: "/data-policy"

---
Even though the purpose of [Plausible Analytics](https://plausible.io) is to track the usage of a website, this can still be done without collecting any personal data or personally identifiable information (PII), without using cookies and while respecting the privacy of the website visitors.

Here's a closer look at our data policy, the information that we do collect, what we use it for and steps we've taken to comply with the cookie law and the privacy regulations such as the GDPR, CCPA and PECR.

1. Ordered list
{:toc}

## First thing first: What we collect and what we use it for

The goal of Plausible is to track overall trends in your website traffic, it is not to track individual visitors. The privacy of your website visitors is important to us. We don’t collect or store any personal or identifiable data. All of the data that we do collect is aggregated data only and it has no personal information.

We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page. Here is the complete list of what we collect and store about your website visitors:

| Data point | Example | Comment |
|---|---|---|---|---|
| **Page URL** | _https://yoursite.com/pricing_ | We track the page URL of each page view on your website. We use this to show you which pages have been viewed and how many times a particular page has been viewed. <br /><br />The hostname and path are collected. Query parameters are discarded, except for these special query parameters: `ref=`, `source=` and `utm_source=`. |
| **HTTP Referer** | _https://facebook.com_ | We use the referrer string to show you the number of visitors referred to your website from links on other sites. |
| **Browser** | _Chrome_ | We use this to show you what browsers people use when visiting your website. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. |
| **Operating system** | _macOS_ | We use this to show you what operating systems people use when visiting your website. We only show the brand of the operating system and don't include the version number or any other details. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. |
| **Device type**  | _Desktop_ | We use this to show you what devices people use when visiting your website. This is derived from window.innerWidth. The actual width of the browser in pixels is discarded. |
| **Visitor Country**  | _United Kingdom_ | We look up the visitor's country using their IP address. We do not track anything more granular than the country of origin and the IP address of the visitor is discarded. We never store IP addresses in our database or logs. |
| **Initial referrer** <small>(Optional)</small>  | _https://facebook.com_ | You can choose to configure Plausible to use a cookie which is then used to provide referral information for goal conversions. In that case, the initial referrer is stored in a cookie on the visitor's device and later attached to the conversion event such as a subscription to your newsletter. <br /><br />This is not enabled by default and is an optional feature for those who want to track referral sources of their goal or event conversions. You can still track goal or event conversions without using cookies but you will not get the referral source. |


## Web analytics and compliance with the cookie law, GDPR, CCPA, PECR and other privacy regulations

You've certainly heard of the different privacy regulations and you've seen many cookie notices around the web, but what do these regulations mean exactly with regards to the web analytics?

This is how we would sum up different regulations such as the [General Data Protection Regulation](https://gdpr-info.eu/) (GDPR) in Europe and the [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) in the United States:

> If you track, collect, share or sell personal data or personally identifiable information (PII) by using cookies and other technology, you need to inform the visitor in clear and plain language, ask for and get explicit consent before you take that action.

<small>_Disclaimer:_ We're not lawyers. The information in this post is our view on things and it's here to help give you an introduction to the different privacy regulations and how Plausible is built to help you comply with them. We encourage you to discuss specific issues with your lawyer if you have any concerns.</small>

Here's a look at how Plausible works and how we help you comply with the different regulations.

## Tracking cookies and the cookie notice

Web cookies are small pieces of data that websites place on the devices of people browsing the web. Web browsers then store these cookies and can send them back to a website on the next visit.

These cookies can provide essential features such as allowing you to save your session and not need to log in every single visit or to allow you to add an item to a shopping cart in an ecommerce site. Cookies can also be used for not-so-essential features such as advertising purposes.

As an example, here's a closer look at PECR. PECR is the privacy regulation in the United Kingdom and it stands for Privacy and Electronic Communications Regulations.

PECR requires a site owner to tell their website visitors about technologies such as cookies that they use to track personal data and give visitors the choice of whether to accept this or not. [According to PECR](https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/what-are-cookies-and-similar-technologies/), you "need to tell people about analytics cookies and gain consent for their use". If you use cookies you must:

1. Say what cookies will be set
2. Explain what the cookies will do
3. Obtain consent to store cookies on devices

## Does Google Analytics work without cookies?

Google Analytics is a cookie-based web analytics and it is not possible to use Google Analytics without using cookies. Google Analytics sets [multiple cookies](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage) and it "uses cookies to identify unique users across browsing sessions". This is done "to remember what a user has done on previous pages / interactions with the website".

In addition to that, Google has [several requirements](https://marketingplatform.google.com/about/analytics/terms/us/) for your use of Google Analytics:

> "You must post a Privacy Policy and that Privacy Policy must provide notice of Your use of cookies, identifiers for mobile devices or similar technology used to collect data. You must disclose the use of Google Analytics, and how it collects and processes data. You will use commercially reasonable efforts to ensure that a User is provided with clear and comprehensive information about, and consents to, the storing and accessing of cookies or other information on the User’s device where such activity occurs in connection with the Service and where providing such information and obtaining such consent is required by law."

On top of the standard analytics, many Google Analytics users also enable the different advertising features such as remarketing, and demographics and interest reporting. In those cases, you're collecting data for advertising purposes which means that Google Analytics places additional advertising cookies and identifiers.

## Is Google Analytics compliant with GDPR, CCPA and PECR?

Google Analytics collects a lot of personal data and it is a potential liability for your site. Many website owners fail to do this, but you should and must disclose to your visitors your use of Google Analytics to track them.

[According to Google](https://www.google.com/about/company/user-consent-policy/): _"you must ensure that certain disclosures are given to, and consents obtained from, end users in the European Economic Area along with the UK. If you fail to comply with this policy, we may limit or suspend your use of the Google product and/or terminate your agreement"._

Google states that you "must obtain end users’ legally valid consent" to:

1. the use of cookies or other local storage where legally required
2. the collection, sharing, and use of personal data for personalization of ads

## Plausible is compliant with the cookie law, GDPR, CCPA and PECR out of the box

Plausible does not use cookies and does not collect any personal data. This makes us compliant with the different cookie laws and privacy regulations. It means that you are not required to annoy your visitors with a cookie notice if you're using Plausible analytics.

By not using cookies you do not need to obtain consent from the visitors to store and retrieve data from their devices. It's one less thing to worry about and annoy your visitors with. This is one of the reasons why you should consider Plausible as a great [Google Analytics alternative](https://plausible.io/vs-google-analytics).

## How we count unique users without cookies

Plausible uses an old trick from log analysis to approximate the unique user count. Instead of setting a cookie with a unique user ID, we simply count the number of unique IP addresses that accessed your website to determine the visitor count.

To enhance the visitor privacy, we don't actually store the raw visitor IP address in our database or logs. We run it through a one-way hash function to scramble the raw IP addresses and make them impossible to recover.

To further enhance visitor privacy, we add the website domain to their IP hash. This means that the same user will never have the same IP hash on two different websites. If we didn't do this, the hash would effectively act like a third-party (cross-domain) cookie.

Network Address Translation allows many unique users to share the same public IP address. For this reason we also add the User-Agent string to the hash, although we don't store the actual User-Agent string.

In summary, here's how we assign a hash that we use for unique user counting:

    hash(website_domain + ip_address + user_agent)

In our testing, using IP addresses to count visitors is remarkably accurate when compared to using a cookie. In some cases it might even be more accurate than using a cookie because some visitors block cookies altogether.

## Data ownership of your web analytics

By using Plausible, you keep 100% ownership of your website data. Although when using our hosted service, your site analytics are stored on our server in the cloud, you remain completely in control of your site data and you fully own all of your data too:

* Your website data is not shared with advertising companies or any other companies in general.
* Your website data is not sent to any third-parties at all.
* Your website data is not mined and harvested for personal and behavioral trends.
* Your website data is not monetized.

## Why should I trust you?

Plausible is a fully [open-source website analytics tool](https://plausible.io/open-source-website-analytics). Our source code is available and accessible [on GitHub](https://github.com/plausible-insights/plausible) so you can read it and review it to ensure our code does what we say.

## GDPR, CCPA and PECR compliant web analytics

By using Plausible, you don't need to have any GDPR, CCPA or PECR prompts and you don't need a complex privacy policy about your use of analytics and cookies. With Plausible, you are not tracking any personal data after all. Your visitors can enjoy your site without any annoyances and distractions.

You can [sign up for a 30-day free trial](https://plausible.io/register) and explore our privacy-friendly and GDPR, CCPA and PECR compliant site analytics. You don't need to remove your current analytics provider either until you've tested Plausible and figured out if you like our product.
