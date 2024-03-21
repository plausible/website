---
layout: post
title: "GDPR-compliant web analytics without consent: A guide by a data
  protection lawyer"
description: An experienced data protection expert and lawyer explains how web
  analytics can be implemented in accordance with the strict requirements of
  ePrivacy Directive and the GDPR.
slug: legal-assessment-gdpr-eprivacy
date: 2024-03-21T08:40:16.188Z
author: marko-saric
image: /uploads/is-google-analytics-illegal.png
image-alt: Web analytics, ePrivacy Directive and GDPR
---
*In this article, Steffen Gross, an experienced data protection expert and lawyer at Simpliant Legal PartG mbB and external data protection officer at Simpliant GmbH, explains how web analytics can be implemented in accordance with the strict requirements of the ePrivacy Directive and the GDPR.*

Web tracking is crucial for understanding user behavior on websites and plays a central role in optimizing digital presences. 

It gives website operators the opportunity to gain valuable insights: How many visitors are navigating to their site, what are their motivations and what parts of the world are they coming from? Careful analysis of this data makes it possible to identify the most visited areas and to adapt and improve your website accordingly.

However, traditional web tracking methods, often coupled with the use of cookies and the display of consent banners (e.g. [Google Analytics 4](https://plausible.io/blog/ua-vs-ga4)), raise questions about data protection, especially when they are used for advertising purposes. 

But many operators only aim to collect basic statistics on their website ("reach measurement") without having to rely on complex retargeting techniques or direct advertising measures. A little-known fact: the collection of this data is also possible without cookie banners and direct user consent.

 The article provides a practical guide to data protection-compliant web tracking without the need for consent or cookie banners and at the same time presents feasible approaches for legally compliant implementation. 

It illustrates how website operators can establish tracking methods that both achieve their business objectives and protect the privacy of their users.

1. Ordered list
{:toc}

## Objectives and purposes of web tracking
 
The methods and purposes for which web analysis and tracking are used are diverse and require a differentiated approach depending on the intended use and with regard to the legal requirements and the necessary data protection measures.
 
The most common purposes for web analytics include:

1. **Reach measurement and website optimization**: Recording user behavior on a website in order to improve user-friendliness and the user experience. This includes analyzing how users navigate through the website, which pages are visited most frequently and where users may have problems using the website.

2. **Personalized advertising/conversion tracking**: Collecting data about a user's online behavior in order to display personalized advertisements that are tailored to the user's interests and preferences. This is intended to increase the relevance of advertising for the user and improve advertising efficiency for advertisers.

3. **Retargeting**: Identifying users who have visited a website but have not made a purchase or performed a desired action in order to show them targeted advertising on other websites or platforms. The aim is to bring these users back and encourage them to convert.

4. **Cross-device tracking**: Tracking a user's activities across different devices to obtain a comprehensive picture of user behavior and interests. This is used to optimize the advertising approach across different devices and platforms and to create consistent user experiences.
 
While reach measurement and web offer optimization generally aim to aggregate anonymized data and do not require direct personal identifiability, advertising measures and retargeting require detailed usage profiles. Web analysis therefore differs depending on the purpose and the technical means used. 

This can be summarized as follows:

### Purpose 1: Reach measurement and web offer optimization

* **Goal**: Analysis of user behavior to customize online services according to demand, without the need for detailed profile development.

* **Methodology**: Statistical analysis based on general characteristics such as device type, operating system, model, language and country settings, average session duration and origin of the traffics. Re-identification may not be possible.

* **Data protection**: Focused on aggregation of data to avoid direct personal identifiability. Can be carried out without the website visitor's consent if implemented correctly (Art. 6 f) GDPR and provisions of the ePrivacy Directive.

### Purposes 2-4: Advertising and retargeting

* **Goal**: Use of personalized advertising by collecting and analyzing usage data for the purpose of recognition of the user and for the creation of detailed usage profiles.

* **Methodology**: Use of technologies such as cookies, tracking pixels, canvas fingerprints and ad IDs for the tracking of user activities and preferences.

* **Data protection**: Requires transparent and voluntary consent from website visitors, communication about the use of data and the collection of user consents in accordance with the statutory data protection requirements such as the GDPR.
 
The implementation of web analytics and tracking technologies requires careful planning to ensure compliance with legal data protection regulations, in particular the General Data Protection Regulation (GDPR) and the ePrivacy Directive.

This article focuses exclusively on web analytics for reach measurement (purpose 1), which can be carried out without the need for consent, and excludes web analytics for advertising purposes and retargeting (purposes 2-4). The latter usually require explicit consent.

## Methods for carrying out website reach analysis

Website operators can use various methods and tools to measure the reach of a website and learn more about its visitors. From the direct analysis of server logs, which provide basic access data, to sophisticated web analytics tools that offer deeper insights into user behavior. An overview of the various methods is presented below.

### Direct analysis of server logs

* **Description**: Every access to a website is recorded in [a server log](https://plausible.io/blog/server-log-analysis). These logs contain data such as the IP address of the visitor, time of access, requested URL, HTTP status code and user agent of the browser.

* **Advantages**: Complete control over the data; no external tools required; detailed information about traffic patterns.

* **Disadvantages**: Can be technically demanding; requires effort for data preparation and analysis; data protection aspects must be taken into account.

### Self-hosted web analytics tools

* **Description**: [Self-hosted web analytics tools](https://plausible.io/self-hosted-web-analytics) are installed on the website operator's own server. These tools collect data about website visits, such as page views, dwell time, bounce rate and user sources, without data being passed on to external providers. 

* **Advantages**: Full control over collected data; no disclosure of information to third parties; customization to data protection requirements possible. Often no consent ("cookie banner") is required.

* **Disadvantages**: Requires server resources; installation and maintenance required. The range of functions is often less than with third-party software from the cloud (e.g. no creation of comprehensive user profiles).

### Cloud-based analytics services

They are characterized by simple setup and extensive analysis functions, but require extensive data protection measures due to data transfer to third parties.

* **Description**: Cloud-based web analytics tools collect comprehensive data on user behavior and website performance by being hosted by external providers and enabling rapid implementation through tracking codes. It is usually not necessary to install software on your own servers.

* **Advantages**: Easy setup and access to advanced analytics with no technical maintenance and access to a high level of functionality, including advanced features such as conversion tracking and user profiling across multiple devices.

* **Disadvantages**: Requires extensive data protection measures, requires consent and harbors data protection risks due to data transfer to third parties and lack of transparency.

## Presentation of the analytics tools
 
### Google Analytics
 
Google Analytics is a widely used service that offers website operators comprehensive analyses of visitor behavior. It collects a wide range of data such as page views, dwell time, bounce rates, geographical origin and conversion rates to provide deep insights into the performance of websites. 

The basis for this is a JavaScript tracking code that is embedded in websites and transmits data to Google Analytics with every visit. This data not only provides basic information, but also detailed insights into user paths, marketing effectiveness and behavior on specific pages.

However, the comprehensive data collection of Google Analytics raises data protection concerns. Critical points include the transfer of data to the USA, the assignment of IP addresses to registered Google users and the potential use of this data by Google. 

In some cases, data protection authorities have assessed the use of Google Analytics as [non-compliant with data protection law](https://plausible.io/blog/google-analytics-illegal).

In response to these concerns, Google offers functions such as IP anonymization, which is intended to reduce the identifiability of users by processing shortened IP addresses. 

Nevertheless, the use of Google Analytics requires a careful approach to meet legal requirements, including a data processing agreement with Google, a transparent privacy policy and an opt-out option for users. In addition, it is necessary to obtain consent via a cookie banner for data protection-compliant use.

### Plausible Analytics
 
Plausible Analytics does not use cross-platform tracking and does not pass on data to third parties. It primarily uses data that is recorded by default in server logs, such as requested URLs, access times, HTTP status codes and transferred data volumes. This information is used to analyze website traffic in accordance with the data protection principles of data minimization and data economy.

Data processing at Plausible takes place in two steps:

* **Pseudonymization**: When the data is received, it is pseudonymized using a hash function and a regularly changing key ("salt"). This process aims to change personal data in such a way that the persons are no longer directly identifiable, but a distinction between sessions is made possible.

* **Anonymization after 24 hours**: Within 24 hours of pseudonymization, the data is completely anonymized by removing the "salt" so that it can no longer be traced back to the original user data. The remaining data does not allow any direct or indirect identification of persons.

Plausible only uses EU-based service providers for hosting and additional services such as CDN and DDoS protection. The servers are located in Germany (operated by Hetzner) and additional services are provided by Bunny (based in Slovenia). This facilitates [compliance with the GDPR](https://plausible.io/data-policy) and avoids data transfer outside the EU.

### Comparison of Plausible Analytics and Google Analytics

| | Plausible Analytics | Google Analytics |
|---|---|---|---|---|
| **General description** | A web analytics tool that offers simple and transparent analysis functions with a strong focus on data protection and the anonymization of user data. Ideal for website operators who need basic insights into their usage data without jeopardizing the privacy of their users. | A powerful analytics tool that provides comprehensive and detailed information about user behavior, including cross-device tracking and user profiling, suitable for website operators who want to implement advertising, retargeting and conversion tracking.|
| **Consent required** | No, designed for data protection without explicit user consent. | Yes, especially in the EU due to the GDPR.|
| **Collected cookies** | No cookies used, data protection-oriented. | Uses cookies to track user behavior.|
| **Collected information** | Limited, focuses on aggregated data and anonymizes user data. | Extensive, collects detailed information about user behavior and can perform cross-device and cross-platform tracking.|
| **GDPR compliance** | Designed for GDPR compliance with minimal data collection and anonymization. | Requires configuration and consent mechanisms to be GDPR compliant.|
| **Data protection risks for users** | Low, due to the absence of persistent identifiers. | Higher, due to the use of cookies and the possibility of cross-platform tracking.|

## Data protection law (GDPR) legal assessment

When using web analytics tools such as Plausible Analytics and Google Analytics 4, the question arises as to which legal basis can be used for the processing of personal data in accordance with the General Data Protection Regulation (GDPR). 

There are two possibilities: processing on the basis of a legitimate interest (Art. 6 (1) (f) GDPR) or on the basis of the user's consent (Art. 6 (1) (a) GDPR).

### Legal assessment of Plausible Analytics

Plausible Analytics focuses on data protection and processes data in a way that protects the privacy of users. By using techniques such as pseudonymization and anonymization, the data is processed in such a way that the privacy of users is largely preserved. 

Furthermore, since Plausible Analytics [does not collect personal data for advertising purposes or similar](https://plausible.io/privacy-focused-web-analytics), this practice can be regarded as a legitimate interest of the website operator (Art. 6 (1) (f) GDPR). 

This perspective aligns with the views of the French data protection authority, CNIL, as detailed [in their guidelines](https://www.cnil.fr/en/sheet-ndeg16-use-analytics-your-websites-and-applications) on the use of analytics in websites and applications.

### Legal assessment of Google Analytics 4

In contrast, Google Analytics 4 collects detailed data on user behavior, which can also be used for advertising purposes. 

Due to this extensive data collection and the potential risks to users' privacy, it is necessary to obtain explicit consent from users (Art. 6 (1) (a) GDPR). This means that website operators using Google Analytics 4 must ensure that [they obtain clear and informed consent](https://plausible.io/blog/google-analytics-gdpr) from their users before collecting and processing personal data. 

## ePrivacy Directive legal assessment 
 
The ePrivacy Directive regulates, among other things, the use of cookies and similar technologies to store or access information on a user's device. 

It requires that the storage of information on a user's device or access to information already stored is only permitted if the user has given their consent after being clearly and comprehensively informed about the purposes of use (Art. 5 (3) of the ePrivacy Directive in conjunction with the respective national transposition law).

### Legal assessment of Plausible Analytics

Plausible Analytics does not use cookies or similar technologies that require information to be stored on the user's device. Instead, the tool focuses on analyzing aggregated data without the need to access the end device or store information there. 

Since Plausible Analytics does not store any information on the user's device, Article 5(3) of the ePrivacy Directive does not require explicit consent.

### Legal assessment of Google Analytics 4

Google Analytics 4, on the other hand, uses cookies and similar technologies to collect detailed information about the behavior of users on a website. These technologies require access to the user's terminal device in order to store information or read information that has already been stored. 

According to Article 5(3) of the ePrivacy Directive, this requires users to give their informed consent before such technologies can be used. Therefore, the ePrivacy Directive also requires consent for the use of Google Analytics 4.

## Conclusion and recommendations for action
 
The analysis of web behavior has become indispensable for most website operators in order to understand and optimize the performance of websites. However, with the growing importance of data privacy, website operators need to choose their web tracking approaches carefully.

### Key findings

* **Diverse areas of application**: Web analysis and tracking serve numerous purposes - from simple reach measurement to complex marketing strategies. Each of these application areas has its own requirements for data collection and processing.

* **Analysis of tracking purposes**: A thorough analysis of the specific objectives pursued with web tracking is crucial. This is the only way to understand which data is actually required and which legal framework conditions need to be taken into account.

* **Choosing the most privacy-friendly tool**: In order to meet data protection requirements while not compromising the user experience with frequent consent requests and cookie banners, website operators should choose the most privacy-friendly analytics tool. Tools such as Plausible Analytics offer an attractive option here, as they provide valuable insights without deeply intruding on users' privacy.

### Recommendations for action

In view of these findings, website operators should:

* Define your goals for web tracking precisely and weigh up what information is necessary.

* Prioritize tools that enable data protection-compliant web analysis by avoiding unnecessary data collection and thus reducing the need for consent.

* Consider Plausible Analytics or similar tools to simplify compliance with data protection regulations such as the GDPR and ePrivacy Directive and increase user trust.

By taking these recommendations into account, website operators can not only comply with legal requirements, but also create a positive user experience that is characterized by respect for privacy.

---

 This article originated from our own search for a privacy-friendly analytics tool at Simpliant, which led us to discover Plausible Analytics. Written independently, its purpose is to offer guidance on the use of web statistics tools in adherence to data protection regulations. 

Having selected Plausible for our law firm, which specializes in GDPR compliance, I composed this article to impart our findings and perspectives. 

Plausible consented to its publication. Neither Plausible paid us for this article, nor did we pay Plausible for featuring this content on their website.

 For more information about the author and Simpliant, including up-to-date information and contact details, [please visit our website](https://www.simpliant.eu).