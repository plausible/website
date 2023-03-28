---
layout: post
title: Differences between UA and Google Analytics 4 (and how to succeed with
  the migration to GA4)
description: With under 100 days left until UA stops recording new traffic,
  sites that are still using UA as their primary source of analytics need to
  move quickly onto a new platform. Here are the things you should know to
  succeed with GA4.
slug: /ua-vs-ga4
date: 2023-03-28T18:07:11.452Z
author: marko-saric
---
As an [alternative to Google Analytics](https://plausible.io), many people share their opinion with us on the "forced" migration from UA to GA4. 

I wanted to cover this topic on our blog in more detail but I've never run GA4 on a big site and don't have much experience with it. 

So who better to enlighten us than the person that actually wrote a book on the topic? Enter [Jason Packer](https://www.quantable.com/), the first person ever to write words on our blog other than my co-founder and me.

## 20 things you should know to succeed with GA4

With under 100 days left until UA stops recording new traffic, sites that are still using UA as their primary source of analytics need to move quickly onto a new platform. For most of the tens of millions of sites that run UA, that new platform will be GA4. 

In the couple years that GA4 has been around, there's been a lot of ink spilled about the many differences between Universal Analytics (UA) and Google Analytics 4 (GA4). 

An unfortunate number of these comparisons have focused on what people think is missing from GA4 or what they don't like about GA4. Many times the hidden uncurrent of these articles is something along the lines of, "if Google just would understand the situation, they'd give us more time".

In my opinion, these kinds of comparisons were never particularly useful — and they are totally pointless now that anyone still using UA needs to be actively working on their transition.

In this comparison we're going to take a practical look at the question, "how can I get the most out of GA4?". This requires comparisons to UA, but with a focus on moving forward to GA4. At first glance UA/GA3 to GA4 sounds like a simple version upgrade, but I consider it the biggest change in web analytics since the launch of GTM over 10 years ago.

## Differences between UA and GA4

If asked, Google might describe GA4 in the following way (in my words, not theirs):

> GA4 is designed from the ground up to be a flexible and highly scalable next-generation successor to UA, modernizing the platform to align with current privacy standards and better integrate across the entire Google Marketing Platform.

I'm not entirely sure what that description means, and I wrote it! If that's the theory of what GA4 is, what's the reality? As we know, many small to medium-sized businesses have struggled to migrate and utilize GA4 for their day-to-day reporting needs.

To better understand the reality of this change I've broken down the differences into 4 sections:

* Mindset Changes: how we should change our thinking about analytics to better understand where GA4 is coming from?

* Biggest Improvements in GA4: analytics tech has come a long way in the 18+ years since UA was designed, how does GA4 take advantage of these changes?

* Biggest Gotchas: even GA4's biggest supporters wouldn't deny there's still a lot to be improved in the platform, here I list some of the most common issues and how to deal with them.

* Privacy Differences: privacy and compliance is critical in a modern analytics setup. GA4 has some big differences with UA, but perhaps more in common than you might think. 

1. Ordered list
{:toc}

## Mindset Changes

The world of analytics has obviously changed in many ways since UA first launched in 2005, and our mindset needs to change as well. To best take advantage of GA4 it helps to understand how Google views these changes and where tracking is headed. Both UA and GA4 are designed to be general purpose tools, but the purpose they are fit for is not the same.

### Everything is an event

This is a fundamental tenet of product analytics, that events are the primary building block rather than pageviews. When talking about mobile apps or web-based single page apps, this is a far better way to measure interactions. Pageviews in GA4 are a type of event, rather than being a separate class of hits as they are in UA.

Google talks about [their vision of a user- and event-based measurement here](https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/).

### GA4 is for data collection, not data transformation

In UA, it's common practice to transform the data before it is stored. For example: removing query strings, rewriting URLs, or creating views that exclude or include certain types of traffic. In GA4 these transformations need to be done either before the data is collected (like via a rule in GTM) or at the time the data is presented (like with segments, or filtering in Looker Studio). The advantage of this approach is that there's only one version of the data and it is designed to be close to the raw data. 

Think of your GA4 property as your database of traffic data. You want one database to report from, not many different ones. Some cleaning can be done before storing the data, and other transformations done when the data is queried.

### Custom reporting is preferable to ad-hoc investigation

[UA has 115 different built-in standard reports](https://plausible.io/simple-web-analytics), GA4 has 17. If you can't find what you need in one of those 17 it means you'll need to either customize one of the existing reports or use the "Explore" mode to create your own. If the reports are recurring and broadly distributed you should consider building out what you need in Looker Studio. 

Defining what you need to report on before you spend a lot of time reacting to stakeholder questions about the data can save a lot of time and get teams better on the same page. It's more work upfront, but hopefully less work ongoing.

### Users are more important than sessions

Google has said "it's essential to [move beyond the traditional session-based mindset](https://searchengineland.com/countdown-to-ga4-100-days-to-make-the-switch-394725)".

What do they mean by that? 

They are saying that in an era where individual users switch between devices more than ever and session cookies are increasingly less reliable, trying to ID a user is a better way to do analysis than session data. 

How does GA4 identify users? It utilizes (in order): 

1. customer-supplied IDs (user logs into your site, and you provide that info to GA)
2. Google Signals (uses Google login to ID user)
3. Device ID (client cookie or app instance ID)
4. statistical modeling (infer information based upon other similar users)

In UA there were user ID-based views, but they were problematic and not widely used, whereas in GA4 this user ID-first approach is a core part of the tool.

### Modeled data can solve issues with missing data from untracked users

This means that by default what you see in GA4 is not actual observed data but a mix of actual data and inferred data. GA4 refers to this as "blended" data, and it can be very good in some scenarios. It can also be potentially misleading if you are relying on a lot of modeled data.

## Biggest Improvements in GA4

If we're able to adjust our mindset and tracking plans, there's a lot of great improvements to take advantage of with GA4. Taking best advantage of these improvements requires work, but for many use cases that work can really pay off.

### BigQuery for all

Having access to the full raw data via a BigQuery export can be a game changer for more advanced analytics. Note that free GA4 limits this export to 1M events per day.

### Other technical improvements: API, data model, scalability

GA4 and BigQuery are both designed to scale up to extremely high volumes. As an illustration of this, Google defines a "large" site (for purposes of data retention limits and SLAs) as 25 **billion** events per month and "XL" as 250B. 

Free UA only allowed 10 **million** hits per month, whereas free GA4 currently has no event volume limits at all. The 1M events per day export to BigQuery is the volume limit that may come up first for larger sites, but you can currently collect as many event hits as you'd like.

### More built-in tracking

GA4 has "enhanced measurement" options which include: scroll tracking, [outbound click tracking](https://plausible.io/blog/track-outbound-link-clicks), form interactions, [file downloads](https://plausible.io/docs/file-downloads-tracking), and YouTube video tracking. You no longer need to rely on GTM recipes or WordPress plugins to be able to do these things.

### Better integration with mobile app tracking

GA4 was initially piloted as "App + Web" properties in GA starting in 2019, setting the foundation of GA4's cross-platform reporting abilities. GA4 is designed to have your mobile app and web data coming into the same property with unified reporting.

### Much more customization in reporting

As with BigQuery, the "Explore" section of GA4 is something that was previously only available to paying users of UA360 (as Advanced Analysis) but is now free for everyone. This section allows you to do deep-dives into the data that previously would have required a 3rd party tool and use of the UA API. As we'll discuss in the next section, the downside is that the limited data retention means you can only explore fairly recent data.

## Biggest Gotchas

We're all aware of the griping out there around GA4. It was probably inevitable that with a paradigm shift like this the complaints would flow. I don't want to add to the complaining, but rather take some of the most commonly raised issues and offer some context and fixes.

### Quotas exceeded with Looker Studio

GA4's API has relatively low limits on how many queries can be made against it. If you have a significant number of Looker Studio dashboards or complex reports you can run up against these quotas quite easily. These are limits in the GA4 API so in theory they could affect any BI tool or API connection to GA4, though so far these issues have appeared mostly with Looker Studio.

The work-around for this is to have something in between your BI dashboard and the GA4 API that stores the data. Most typically this is BigQuery, but it could be a data extractor, a third-party data hub/ETL system, or simply to use an "Extract Data" datasource type in Looker Studio to pre-specify which GA4 fields you want to use.

### Lack of default reporting

While GA4 doesn't come with many reports out of the box, it does have a great ability to customize reports via the Library. This can be really helpful for end-users who can be presented with only the reports that are relevant to them in their left-hand navigation instead of 115+ reports to have to wade through (including many that are defunct or irrelevant). 

If you can't build what you need by customizing an existing standard report then you'll need to move to Explore (which can be shared with other users of the property) or switch over to Looker Studio. This means that each new property may need some setup work to define what reporting is needed, but this proactive approach can end up with a set of reports more relevant to users.

### Lack of views, advanced filters, query string removal, configurable bot detection, etc

As we mentioned in the "mindset" section, GA4 does a great job at collecting data, but it doesn't have many in-built tools for transforming data. In general, the best work-around for this will either be to modify the data before it is ever recorded (like via rules in GTM) or after the fact within custom reporting (like in Looker Studio or your BI tool of choice).

Whether it makes more sense to transform the data before or after collection depends upon the type of data and your own preferences and internal practices. For example, if in UA you had a filter that downcased all query strings to normalize that data, or a filter that removed things like session ids from the query strings that type of cleanup would probably be better to do within GTM. Alternatively if you were using a filter to split out your blog subdirectory into its own view for reporting, that would likely be better handled by creating a Looker Studio report for just that blog data. 

In some cases having a separate property could also be the solution, like a dev domain vs. a production domain that were previously on the same property but separated by filters + views. However using multiple properties on the same page to replicate UA view functionality is not typically a good idea.

### Default 2 months of event data, max of 14 months

Whenever a new property is created, it's typically a good idea to change the default event data retention period to from 2 months to 14 months (this need should be balanced against privacy concerns however). This allows Explore reports to be used in the context of year-over-year data. This limitation does not affect Standard reports, but there are many cases where the data you need may not be available within the Standard reports.

The increased retention of 14 months helps, but without paying for GA4 360 there is no way to extend this further within GA4 itself. BigQuery may be a solution here too, as you can retain exported data in BigQuery as long as you'd like to. You'll have to pay once you have more than 1TB stored, but the storage is quite inexpensive ($5 per TB). With larger sites that BigQuery bill can become significant over time, so choosing what you want to store and how long you want to store at the beginning is ideal.

The GA4 reporting interface cannot access that stored historical data, so you'll need some other way to look at it like Looker Studio.

### No backup or import of UA data.

Google provides no way to import UA data into GA4 or backup your old data. [The UA interface may shut down](https://plausible.io/blog/universal-google-analytics-is-dead) as soon as January 1, 2024 — taking away all access to your historical UA reports.

If you have UA360 and the BigQuery data from it you have more options, but for free UA users there is no way to get raw row-level data out of the system. The best solution here is to have GA4 data from July 1, 2022 so you can do year-over-year comparisons as soon as the switchover happens, but unless you've already done that you'll need to find some other workaround to avoid having to say, "sorry, we just we can't do that".

There are several 3rd party systems that are exporting the aggregate UA data via the UA API into an external datastore like BigQuery, but it's important to remember that even if you do export that data you'll need some way to use that data and report on it. Having a backup that isn't tested or usable is only marginally better than having no backup at all.

If you are using Plausible, you can [import your UA data into Plausible](https://plausible.io/docs/google-analytics-import) very easily and compare your new Plausible data alongside your historical UA data. This feature can import as far back as your UA data retention settings allow, though it is not able to import things like goals or custom dimensions.

## Privacy Differences

In an attempt to provide a more [privacy-friendly product](https://plausible.io/privacy-focused-web-analytics) with reduced regulatory issues, there have been a number of changes in GA4. While most of the existing enforcement decisions in the European Union have been targeted to UA, the basis of many of these decisions also would apply to GA4. In other words, [GA4 is likely not GDPR compliant](https://plausible.io/blog/google-analytics-illegal).

Here are the major differences compared with UA:

### IP anonymization is always on

This was an option in UA but in GA4 this is always on. This means that Google does not store the last part of an IP address. These IP addresses were never provided to users of UA, this is about what Google has access to. Google still sees the end users' IP when the data is collected (unless it is run through a proxy), but they say they do not log or store these individual addresses.

### Additional privacy options for the EU

GA4 collects EU data on servers based in the EU. This keeps EU users' measurement requests (including their IPs) from being sent to the United States, however the data [may still be sent to the US for processing](https://support.google.com/analytics/answer/12017362). The lack of a new US-EU privacy shield is the basis for most of GA's regulatory issues in the EU.

GA4 also allows Google Signals to be disabled per country. So you can enable Signals in a property and then disable it in all the individual countries in the EU if that's what you think you need to do for compliance issues. 

### GA4 still uses cookies, but it can estimate metrics for users that decline them

GA4 sets first-party cookies similarly to UA. When people talk about "[cookieless tracking](https://plausible.io/blog/google-analytics-cookies)" with respect to GA4, they are talking about GA4's ability to use statistical modeling to estimate things like conversion for users that are unable to be tracked via cookies. This is not using some other method of tracking, this is inferring activity from untracked users with machine learning.

This functionality requires use of GA consent mode and at least 1,000 daily users. It also may function better if Google Signals is enabled.

This is much different than a tool like Plausible, which does not use cookies at all and only reports on data that it has directly measured.

### Google Signals is more tightly coupled with GA4.

Google Signals has been part of UA for some time, but it has been integrated more deeply into GA4. Google Signals is not enabled by default, but is required for advertising features, demographics reporting, cross-device reporting, and better user modeling. 

Before Google Signals this was handled in UA with the "advertising features" functionality, which used the DoubleClick 3rd party cookie. With the eventual demise of 3rd party cookies, Signals is the replacement for that functionality but comes with its own privacy considerations.

### Less data, easier to delete things.

We've talked about the decreased length of data storage already, but it's worth noting that the indefinite storage of data with UA (the old default) could be problematic. It is especially problematic because it's so hard to delete old data. For example if you found PII in your UA data but weren't able to figure out what individual client ID it belonged to you couldn't delete it. GA4 fixes these issues with a much better deletion interface.

---

Thanks for sharing your insights Jason! I've certainly learned a thing or two and hope other readers have done too. If you'd like to learn more, check out Jason's book on Google Analytics and its alternatives on [Gumroad](https://quantable.gumroad.com/l/ga-alternatives) and [Amazon](https://www.amazon.com/Google-Analytics-Alternatives-Navigating-Options/dp/B0BKRZM5MG).

If you still haven't made your decision on what to do with regards to the migration from UA to GA4, and are looking for alternative solutions, do give a chance to Plausible Analytics:

* Session-based
* Ready-made dashboard
* Cookieless and privacy-focused
* Powered by EU-owned infrastructure
* Funded directly by subscribers
* Import your historical UA stats
* Check out [the live demo](https://plausible.io/plausible.io) and try it out using [a free trial](https://plausible.io/register)