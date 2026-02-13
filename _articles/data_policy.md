---
layout: article
title: "Plausible: GDPR, CCPA and cookie law compliant site analytics"
description: Plausible provides cookie-less web analytics without collecting
  personal data and while respecting the privacy of website visitors. This is
  our data policy.
permalink: /data-policy
---
Even though the purpose of [Plausible Analytics](https://plausible.io) is to track the usage of a website, this can still be done without collecting any personal data or personally identifiable information (PII), without using cookies and while respecting the privacy of the website visitors.

Here's a closer look at our data policy, the information that we do collect, what we use it for and steps we've taken to comply with the cookie law and the privacy regulations such as the GDPR, CCPA and PECR.

![Plausible Data Policy](/uploads/plausible-data-policy.png "Plausible Data Policy")

1. Ordered list
{:toc}

## First thing first: What we collect and what we use it for

We do not track people across their devices and across websites and apps that they visit. All the data is isolated to a single day, single website and single device only. There is no way to know whether the same person visits a site from more than one device or visits another website. See here [the full list of what makes Plausible a privacy-first web analytics tool](https://plausible.io/privacy-focused-web-analytics).

The goal of Plausible is to track overall trends in your website traffic, it is not to track individual visitors. We don't use cookies, we don't generate any persistent identifiers and we don’t collect or store any personal or identifiable data. All of the data is aggregated data only and it has no personal information.

By using Plausible Analytics, all the site measurement is carried out absolutely anonymously. We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page. Here is the complete list of what we collect and store about your website visitors:

  | Data point | Example | Comment |
  |---|---|---|---|---|
  | **Page URL** | _https://yoursite.com/pricing_ | We track the page URL of each page view on your website. We use this to show you which pages have been viewed and how many times a particular page has been viewed. <br /><br />The hostname and path are collected. Query parameters are discarded, except for these special query parameters: `ref=`, `source=`, `utm_source=`, `utm_medium=`, `utm_campaign=`, `utm_content=` and `utm_term=`. |
  | **HTTP Referer** | _https://facebook.com_ | We use the referrer string to show you the number of visitors referred to your website from links on other sites. |
  | **Browser** | _Chrome 86.0_ | We use this to show you what browsers and browser version numbers people use when visiting your website. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. |
  | **Operating system** | _macOS 10.15_ | We use this to show you what operating systems people use when visiting your website. We show the brand of the operating system and the version number. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. |
  | **Device type**  | _Desktop_ | We use this to show you what devices people use when visiting your website. Devices are categorized into desktop, mobile or tablet. This is derived from the User-Agent HTTP header. The full User-Agent is discarded. |
  | **Country, region, city**  | _United Kingdom, England, London_ | We look up the visitor's location using their IP address. We do not track anything more granular than the city level and the IP address of the visitor is discarded. We never store IP addresses in our database or logs. |

## How we count unique users without cookies

Counting unique visitors is an integral part of web analytics. Plausible attempts to strike a reasonable balance between de-duplicating pageviews and staying respectful of visitor privacy. 

We do not attempt to generate a device-persistent identifier because they are considered personal data under GDPR. We do not use cookies, browser cache nor the local storage. We do not store, retrieve nor extract anything from visitor's devices.

Every single HTTP request sends the IP address and the User-Agent to the server so that's what we use. We generate a daily changing identifier using the visitor's IP address and User-Agent. To anonymize these datapoints and make them impossible to relate back to the user, we run them through a hash function with a rotating salt.

```
hash(daily_salt + website_domain + ip_address + user_agent)
```

This generates a random string of letters and numbers that is used to calculate unique visitor numbers for the day. The raw data IP address and User-Agent are never stored in our logs, databases or anywhere on disk at all. 

Old salts are deleted every 24 hours to avoid the possibility of linking visitor information from one day to the next. Forgetting used salts also removes the possibility of the original IP addresses being revealed in a brute-force attack. The raw IP address and User-Agent are rendered completely inaccessible to anyone, including ourselves. 

In our testing, using IP addresses to count visitors is remarkably accurate when compared to using a cookie. In some cases it might even be more accurate than using a cookie because some visitors block cookies altogether.

The biggest limitation with this approach is that we cannot do good retention analysis with Plausible. We cannot show stats like _New vs Returning visitors_ because they rely on having a persistent user identifier.

If the same visitor visits your site five times in one day we will show that as one unique visitor. But if the same visitor visits your site on five different days in a month we would show that as five unique visitors.

## Hosted in the EU powered by European-owned cloud infrastructure

[We’re a small team](https://plausible.io/about) based in the EU. The legal entity is incorporated in Estonia.

All of the data that we do track and collect is kept fully secured, encrypted and hosted on 100% renewable energy powered server in Falkenstein, Germany. The server is owned by Hetzner, a European company. This ensures that all of the website data is being covered by the European Union’s strict laws on data privacy.

We use Bunny (another European-owned provider from Slovenia) for a global CDN and DDoS protection. This ensures that all visitor data we collect is exclusively processed with servers owned and operated by European companies.

For encryption, we use https in transit and the hashing process at rest. We also do regular backups. The backups are also stored in the EU, in a redundant site.

We've tried hard to limit external services that we use and none of them have access to any of the data that we do collect. No third party vendors are involved other than the hosting company that owns the servers where the data is stored. You can read more in our [privacy policy](https://plausible.io/privacy).

You don’t have to worry about Schrems II and that it invalidates the EU-US Privacy Shield. Your website data never leaves the EU.

## Data ownership of your web analytics

When you use our service to measure your website stats, Plausible Analytics will collect information about your visitors. You entrust us with your site data and we take that trust to heart. The privacy of your site data — and it is your data, not ours! — is a big deal to us.

By using Plausible, you keep 100% ownership of your website data. Although when using our hosted service, your site analytics are stored on our server in the cloud, you remain completely in control of your site data and you fully own all of your data too.

You own all right, title, and interest to your website data. We obtain no rights from you to your website data. We will never sell or share your site data to any third-parties.

* Your website data is not shared with advertising companies or any other companies in general.
* Your website data is not sent to any third-parties at all.
* Your website data is not mined and harvested for personal and behavioral trends.
* Your website data is not monetized.

You can choose to delete your account and delete your site stats at any time. We provide simple no-questions-asked deletion links.

All your stats will be permanently deleted immediately when you delete your Plausible Analytics account or when you delete your site stats. We cannot recover this information once it has been permanently deleted.

## Why should I trust you?

Plausible is an [open source website analytics tool](https://plausible.io/open-source-website-analytics). Our source code is available and accessible [on GitHub](https://github.com/plausible/analytics/) so you can read it and review it to ensure our code does what we say.

We are not a black box. Everything is in the open. Anyone can view, review and inspect the code we’re running to verify that we practice what we preach.

This is essential in the market of privacy software. Corporations and proprietary software cannot always be trusted when data is in question. The only way to prove your trust is to allow experts to look into your code and verify that you’re actually doing what you’re saying you’re doing.

We're happy to provide information on how Plausible is built to help you comply with the different privacy regulations. 

Here's also an independent [legal assessment on GDPR-compliance of Plausible Analytics](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) written by an experienced data protection expert and lawyer.

We encourage you to discuss specific issues with your lawyer to help you decide whether our service allows you to fulfill the legal requirements that apply to you.

## GDPR, CCPA and PECR compliant web analytics

By using Plausible, you don't need to have any GDPR, CCPA or PECR prompts and you don't need [a complex privacy policy](https://plausible.io/blog/privacy-policy-page) about your use of analytics and cookies. With Plausible, you are not tracking any personal data after all. Your visitors can enjoy your site without any annoyances and distractions.

You can [sign up for a 30-day free trial](https://plausible.io/register) and explore our privacy-friendly and GDPR, CCPA and PECR compliant site analytics. You don't need to remove your current analytics provider either until you've tested Plausible and figured out if you like our product.
