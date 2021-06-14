---
layout: article
title: Cloudflare Web Analytics vs Plausible Analytics
description: Here's a look at Cloudflare Web Analytics and how it compares to
  Plausible Analytics and other analytics such as Google Analytics.
permalink: /vs-cloudflare-web-analytics
---
Cloudflare Web Analytics is a new player on the simple, privacy-first and de-Googled web analytics market.

This is a look at Cloudflare Web Analytics and how it compares to Plausible Analytics and other analytics tools such as Google Analytics.

![Cloudflare Web Analytics vs Plausible Analytics](/uploads/google-analytics-alternatives.png "Cloudflare Web Analytics vs Plausible Analytics")

1. Ordered list
{:toc}

## What is Cloudflare Analytics?

Cloudflare offers a couple of similar sounding products: Cloudflare Analytics and Cloudflare Web Analytics.

Cloudflare Analytics is a server-side analytics tool similar to server logs. You don't need to insert any JavaScript snippet on your site. You just need to change your DNS or use Cloudflare's proxy to get access to these stats. 

Like other server logs, Cloudflare Analytics is wildly inaccurate as all the bots and other spam is included in the stats. You can read more about [client side vs server side web analytics](https://plausible.io/blog/server-log-analysis) and the gap in the data between them.

Cloudflare Analytics is a premium product for the paying customers of Cloudflare who use their other services to improve their sites' performance and security.

Cloudflare has recently launched Cloudflare Web Analytics and this is their response to Google Analytics and other web analytics tools such as Plausible Analytics. 

It works client side using a JavaScript snippet that you need to insert into your site. And unlike their other analytics product, Cloudflare Web Analytics is free to use. 

This is how they describe it: "Our analytics don't cookie your visitors, collect their personal information, or track them across sites. So if your site needs a cookie banner, it won't be because of us".

That sounds pretty much like [what Plausible does too](https://plausible.io/privacy-focused-web-analytics), so Cloudflare Web Analytics is what we'll compare Plausible Analytics to in this post.
 
## Plausible vs Cloudflare Web Analytics comparison: What are the differences? 

Even though both Plausible and Cloudflare Web Analytics are built to be simple to use, privacy-friendly and lightweight, there are some important differences too. Let's explore them.

## Cloudflare restricts you to 7 days of data

The maximum viewable range for your Cloudflare Web Analytics dashboard is 7 days. They are "working on extending the queryable time range to 30 days for Business plan users". The business plan is not free and starts at $200 per month.

On the free plan, you lose access to everything that happened more than a week ago. It seems to be deleted as there's no way to retrieve it. 

This is a dealbreaker for many people who use analytics. It is very common to compare larger data sets ranging from a month on month comparison, quarter on quarter or even year on year. 

Limiting data retention is a great way for Cloudflare to reduce their cost when providing a product free of charge but 7 or even 30 days of historical data is not that useful for most site owners.

When using Plausible Analytics, there are no limitations on how much data you can store or retain. You can view any of the data we've counted about your website since you installed the Plausible Analytics script and you can do so at any time that you wish. No data restrictions or limits whatsoever. 

## Cloudflare dashboard is inaccurate

Some stats that Cloudflare Web Analytics displays are a bit weird and inaccurate. In the past, their dashboard used to have a note that all stats are "based on a 1%-10% sample of requests". 

They've since removed that note from the dashboard but the stats look a bit weird which probably means they're still doing some kind of sampling.

What does that mean? Cloudflare Web Analytics may not show the actual stats from your site. They take a subset of all of the data they collect (1% to 10% of your total traffic), analyze it and display an assumption based on the patterns seen in the sample they analyzed.

This is another great way for them to reduce their running costs for providing this free product but it leads to inaccurate data. 

Just compare these two charts for top pages. Same website and same time period but obviously inaccurate numbers on the Cloudflare dashboard compared to the Plausible dashboard.

Cloudflare top pages:

![Cloudflare Web Analytics top pages](/uploads/cloudflare-top-pages.png)

Plausible top pages:

![Plausible Analytics top pages](/uploads/plausible-top-pages.png)

Another inaccuracy comes from the fact that Cloudflare Web Analytics doesn't seem to do much bot detection. In your list of top browsers and top operating systems, you may find "Unknown" having a decent percentage of the market share. This is normally a good sign of bot traffic.

![Cloudflare Web Analytics top OS](/uploads/cloudflare-web-analytics-os.png)

![Cloudflare Web Analytics top browsers](/uploads/cloudflare-web-analytics-browsers.png)

Plausible Analytics filters out the bots and we don't use any type of data sampling at all so all the stats in your dashboard show 100% accurate data of what happens on your site. No data sampling means that you can make your decisions based on 100% accurate real-world stats.

## The number of sites

Cloudflare Web Analytics launched with a limit of one domain name per account. They have recently extended that to ten sites and it's possible to increase that [even further](https://developers.cloudflare.com/analytics/faq#can-i-track-more-than-one-website-with-web-analytics):

> Right now there's a soft limit of 10 sites per account, but that can be adjusted by contacting Cloudflare support.

Plausible Analytics doesn't have any limits on the number of websites you can add to your account. Add as many websites as you want and get access to all of them from the same account. First 20 websites are included free of charge in any subscription plan.

## Cloudflare limits you to 15 items on any report

You can only see the top 15 of your pages, referral sources, countries and so on in your Cloudflare Web Analytics dashboard. Full lists are not available which makes it difficult to work with larger data sets or sites with a higher number of visitors. 

You could use the filter to manually input a specific page or specific referral source to try and dig those stats up but there's no easy way to discover them.

The filtering process is slow and inconvenient and goes something like this. To see stats for one of your pages outside of the top 15, you need to:

* Click on "Add filter"
* Select "Path" as the filter
* Then type in the page URL if you can remember what it is
* Click on "Apply"

Plausible Analytics doesn't have any limits on the number of items we show in the individual reports. Have hundreds of pages or hundreds of referral sources? Keep scrolling within your Top Pages or Top Sources lists. Same goes for countries, goals and other metrics within other reports.

## Cloudflare limits the number of insights you can get access to

Cloudflare Web Analytics is too basic even for the [simple web analytics](https://plausible.io/simple-web-analytics) tools such as Plausible Analytics. 

Here are some of the metrics missing on Cloudflare Web Analytics compared to what you can get on Plausible Analytics:

* No live view or live dashboard so you cannot see what's happening on your site right now
* No visit duration and time on page so you cannot figure out how long people stay on your site, on the specific pages or judge the quality of a referral source
* No bounce rate so you cannot analyze the quality of different pages or referral sources
* No support for [UTM tags](https://plausible.io/blog/utm-tracking-tags) so you cannot track your marketing campaigns, emails and minimize the dark traffic
* No goal and event tracking so you cannot figure out whether people are taking action you're focused on and you cannot track things such as [external link clicks](https://plausible.io/blog/track-outbound-link-clicks)
* No way to serve the script as a first-party connection so the Cloudflare Web Analytics is blocked by many browsers and extensions which means fewer of your visitors get counted. To avoid adblockers, you will need to use their premium 
Cloudflare Analytics tool
* Cloudflare Web Analytics recently introduced performance metrics for [Core Web Vitals](https://plausible.io/blog/page-experience-web-vitals) and this is something Plausible doesn't support

## Cloudflare is lightweight compared to Google Analytics but it's still 6x heavier than Plausible

Cloudflare Web Analytics JavaScript file that you need to integrate into your site to start tracking visitors is 4.3 KB.

This is a big improvement compared to the 45.7 KB that Google Analytics integration adds to your page weight but it's still 6 times heavier than the Plausible Analytics default script which is at 0.7 KB. 

If you want the most [lightweight web analytics](https://plausible.io/lightweight-web-analytics), Plausible is the lighter choice. 

## Different definitions of unique visitor

Plausible Analytics and Cloudflare Web Analytics have different definitions of what a unique visitor is.

Like Plausible Analytics, Cloudflare Web Analytics [doesn't use cookies nor local storage to track visitors](https://plausible.io/blog/google-analytics-cookies) so a different method of counting is necessary.
 
In Cloudflare Web Analytics, "a visit is a successful page view that has an HTTP referrer that doesn't match the hostname of the request".

Basically Cloudflare counts the number of times someone landed on any page of your site from another site. They say that "you should expect this number to differ from other analytics tools". 

This is because it may differ greatly from other analytics tools depending on the type of site and audience you're attracting. 

If the same person visits your site ten times in one day, Cloudflare Web Analytics lists that person as ten unique visitors while tools such as Plausible Analytics will show that visitor as one unique.

Plausible Analytics doesn't attempt to generate a device-persistent identifier either because these are considered [personal data under GDPR](https://plausible.io/blog/google-analytics-gdpr).

Instead, we generate a daily changing identifier using the visitor’s IP address and User Agent. To anonymize these datapoints, we run them through a hash function with a rotating salt. You can learn more about our method in [our data policy](https://plausible.io/data-policy).

## Open source vs closed source web analytics

Plausible Analytics is a fully [open-source web analytics](https://plausible.io/open-source-website-analytics) tool. Our source code is available and accessible on GitHub so anyone can read it and review it to ensure it keeps the data private and secure. Plausible can even be self-hosted for those who want to manage their own server infrastructure.

This is not the case with Cloudflare Web Analytics which is a closed source product. There's simply no way of knowing what's going on behind the scenes when using the Cloudflare script.

This doesn't necessary have to mean anything bad as Cloudflare unlike Google has no interest in the ad-tech world, it simply means that you have to put your trust in Cloudflare.

## Paid vs Free (and David vs Goliath)

Cloudflare Web Analytics is a product made by one of the largest corporations in the world. A company that has many different money-generating products which allows them to provide analytics free of charge as a way to get more paying customers or a way to gather business intelligence to improve their services.

It is also a company that is not specialized in web analytics which shows in the way they've built their analytics dashboard with inconveniences such as not having an easy access to view the stats for today.

Plausible Analytics, on the other hand, is made by a small, bootstrapped and independent team. And web analytics is what we do so our focus is 100% on our web analytics product. 

It costs time and money to develop, manage and maintain a web analytics service. This is why we charge a fee for our subscription plans. It helps us run a sustainable business that we can work on full time. By using Plausible, you will support indie-developers, indie-businesses and the independent web. 
 
Cloudflare chooses to make their web analytics a free product but they cut the costs of running that free service by using aggressive data sampling and strict data history limitations.

If you're curious about Plausible Analytics, we have a 30-day free trial you can use without any restrictions or limitations. There's also no credit card required to sign up for the trial. [Learn more here](https://plausible.io/register).