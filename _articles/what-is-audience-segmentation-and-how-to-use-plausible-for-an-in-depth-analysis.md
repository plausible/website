---
layout: article
title: "Segment your website traffic without the complexity"
description: Break your visitor data into meaningful segments without cookies,
  consent banners or bloated reports. Accurate, privacy-friendly audience
  analysis in one simple dashboard.
permalink: /audience-segmentation
---
Most analytics tools make audience segmentation harder than it needs to be. Buried menus, complex setup, and data that is already incomplete because visitors rejected your cookie banner. Plausible takes a different approach: accurate, privacy-friendly data in a single dashboard, with filtering that takes seconds.

![audience segmentation in plausible analytics](/uploads/plausible-visitor-segmentation.png "audience segmentation in plausible analytics")

1. Ordered list
{:toc}

## What is audience segmentation?

Plausible gives you reliable data on visitor traffic, but raw numbers alone are hard to act on. Audience segmentation is how you make sense of them: filtering your visitor data into groups that can be studied to answer real business questions and inform decisions.

The depth of analysis varies by use case. An independent journalist might want unique visitors segmented by city, to understand where interest in their work is strongest. A SaaS team might look at which audience segments convert, and which channels those visitors came from. A large e-commerce platform might track full customer journeys across product categories and campaigns.

If you run any kind of website, you already have audience segments whether you have looked at them or not. Let’s explore what a web analytics tool can show you.

## What a web analytics tool can reveal about audience segmentation

No matter the depth of analysis, any segment is built from some combination of three basic questions:

* How did the audience find us (channels of acquisition, marketing campaigns)?
* What they were like (devices used, demographics they come from)?
* What they did on the site (pages visited, actions taken, conversions met, etc.)?

In a web analytics dashboard, like Plausible or Google Analytics, these common audience insights take the shape of:

* Geographic segmentation
* Traffic acquisition segmentation
* Technological segmentation: devices, browser, OS data
* Behavioral segmentation: page views, events and engagement data

This helps answer important business questions. For example, “How many visitors from the United States signed up last year?” or “Is our site more popular with mobile users or desktop users in Germany?” or “Do the visitors reaching our site from X (Twitter) visit the pages we want them to?”

By answering such questions, you can make decisions based on real data. Say, you identify that, for your e-commerce store, mobile traffic has spiked over the last six months while cart abandonment has also been high. You may want to invest in improving your mobile experience.

Or say you find that visitors from the UAE are engaging heavily with a new feature. That is a clear signal to focus your marketing campaigns there.

But getting there first requires breaking your audience data into segments that can actually be compared.

Continuing the example above, combining the UAE visitor segment with the landing pages they visit most could reveal specific patterns or surface insights you would not otherwise notice.

In Plausible, this is as simple as applying a few filters on your dashboard.

## How to segment your audience in Plausible  

In Plausible, your audience data is already presented in basic segments like channels of acquisition, landing pages they visit, their demographics, and the devices they use. This is all available by default.

When you have a Plausible dashboard open, clicking on any entry (or entries) filters the dashboard to show only data matching [those filters](https://plausible.io/plausible.io?filters=((is,country,(US)),(is_not,region,(US-CO,US-MN,US-AZ)),(is,goal,(Visit%2B/register)))&labels=(US:United%2BStates,US-CO:Colorado,US-MN:Minnesota,US-AZ:Arizona)). You can also [save a segment](https://plausible.io/docs/filters-segments#how-to-save-a-segment) for quick access later.

If you don’t have a Plausible account yet, you can explore [our live demo](https://plausible.io/plausible.io) where our own website’s real data is publicly available. The examples below use that same dashboard, and you can try each filter combination yourself.

### Example: Free Trial visitors from Twitter, USA (excluding CO, MN, AZ)  

If we wanted to segment the audience that came to our [Free Trial registration page](https://plausible.io/register), from Twitter, from the USA (but excluding the regions of Colorado, Minnesota and Arizona because we ran paid ads in those regions and only want to understand organic traffic), in the year so far, then we would get this:

![Example of a segment of audience visiting free trial registration page from Twitter, USA](/uploads/plausible-segment-free-trial-visitors.png "Example of a segment of audience visiting free trial registration page from Twitter, USA")

You can explore this exact segment on our [filtered live dashboard](https://plausible.io/plausible.io?filters=((is,country,(US)),(is_not,region,(US-CO,US-MN,US-AZ)),(is,goal,(Visit%2B/register)),(is,utm_source,(Twitter)))&labels=(US:United%2BStates,US-CO:Colorado,US-MN:Minnesota,US-AZ:Arizona)).

### Example: Logged-in users who viewed the Goals Settings page  

Filtering by active users (a custom property) and the Goals Settings page (a Top Pages entry) shows how many people are interested in setting up the feature, or are at least aware of it.

From there, we can improve the feature experience or adjust how we market it.

![Example of a segment of audience that was logged in and viewed the Goal Settings page](/uploads/plausible-segment-loggedin-users-viewing-goal-settings.png "Example of a segment of audience that was logged in and viewed the Goal Settings page")

### Example: UK users who upgraded to paid subscription, in the year so far  

This segment tells us how many paid subscriptions (a custom goal) we got from the United Kingdom in the year so far, and what the conversion rate looks like.

![Example of a segment of audience from the United Kingdom who upgraded](/uploads/plausible-segment-uk-paid-subscribers.png "Example of a segment of audience from the United Kingdom who upgraded")

Looking deeper at this report reveals more. For example, we can see that England drove the most conversions from the United Kingdom, and that Chrome has been the most popular browser.

If we wanted to run an ad campaign, we could target by those two factors directly. Without this data, we would be spending budget on audiences less likely to convert.

### Example: Author page views

A simpler use case: understanding which blog authors (tracked as a custom property) generate the most page views and on which posts. This gives a clear picture of writing effectiveness.

![Example of a segment of audience that visited blog pages written by a specific author](/uploads/plausible-segment-author.png "Example of a segment of audience that visited blog pages written by a specific author")

You can also see which pages rank for which keywords from Google. More on that below.

Tracking on-site interactions, campaign contributions, and SEO performance requires some additional setup since it varies by use case. Here are the practices we recommend.

## Making the most of Plausible for audience segmentation

Here is an overview of what Plausible users typically set up to get more out of their data. Which features you use will depend on the filters you want and the depth of analysis you need.

We offer a 30-day free trial with no credit card required, so you can explore all the features before deciding what you need.

### For segmenting based on traffic acquisition: leverage URL parameters  

Plausible shows you where your visitors are coming from: social media, search engines, direct visits, referrals, and more. You can then segment your audience by any of those sources.

When sharing links to other platforms like social media, paid ads or newsletters, make sure to [tag them](https://plausible.io/docs/top-referrers) with query parameters like ref, source, utm_source, utm_medium, utm_campaign, utm_content and utm_term.

Plausible automatically captures these parameters, and you can view the segmented data under the "[Sources](https://plausible.io/docs/top-referrers)" tab.

You can also click any entry to filter the whole dashboard to that source, or combine multiple sources, across any timeframe.

This is useful for comparing campaign performance and understanding which channels bring the most valuable traffic.

### For segmenting based on site interactions: track custom events  

Another way to segment your audience is by setting up custom events. With events, you can track specific actions visitors take on your site, such as signing up for a newsletter, clicking a call-to-action button, or downloading an ebook.

There are various [methods](https://plausible.io/docs/goal-conversions) in Plausible to track such events (some not even requiring code edits) like enhanced measurements, pageview goals, and custom event goals.

You can also collect additional context about events with [custom dimensions](https://plausible.io/blog/custom-dimensions-analytics) to create custom metrics, and compose goals into [funnels](https://plausible.io/blog/funnels-conversion-optimization) to see full customer journeys. 

This helps you understand which actions your audience takes and which of them lead to conversions.

### For segmenting based on SEO performance: integrate with Google Search Console  

We offer an [integration with Google Search Console](https://plausible.io/docs/google-search-console-integration) that shows you the search terms that brought visitors to your site, directly inside your Plausible dashboard. 

You can segment this data by filtering your dashboard with the “Google” traffic source entry to see which keywords drive real clicks. 

This integration is privacy-friendly and requires no additional Google code on your site. Google shares search data they have already collected, so your site's privacy remains intact.

### Other optimizations  

* [Save your segments](https://plausible.io/docs/filters-segments#how-to-save-a-segment) for quick access later. 
* If you have historical data in Google Analytics 4 that you don’t want to lose, you can [import it](https://plausible.io/docs/google-analytics-import) into Plausible. This keeps your data intact for long-term trend analysis and audience comparisons.
* You can [allow traffic](https://plausible.io/docs/subdomain-hostname-filter) only from specific hostnames to not pollute your data.
* Plausible strips query parameters from page reports for privacy. If you want specific pages reported with their full URL including the query string, [you can configure that here](https://plausible.io/docs/custom-query-params).

## Why Plausible works well for audience segmentation

Plausible is built around how web analytics should work: [straightforward](https://plausible.io/simple-web-analytics), without unnecessary complexity.

Plausible’s [private-by-design](https://plausible.io/privacy-focused-web-analytics) solution is fully compliant with GDPR, CCPA, and PECR regulations. We operate without using cookies or persistent identifiers and don’t collect personally identifiable information. We ensure you maintain 100% ownership and control over your website data.

Unlike other analytics tools, Plausible does not track or sell user behavior, so you can skip [cookie banners](https://plausible.io/blog/cookie-consent-banners). This provides a smoother experience for your visitors and less friction for site owners.

Our tracking script is [lightweight](https://plausible.io/lightweight-web-analytics), which prevents the slowdowns caused by heavier scripts and is good for SEO. 

We also filter out referrer spam, data center traffic, and accurately attribute mobile traffic from apps like Gmail and Slack. We exclude ~32K data center IP ranges by default, which covers a large share of known bot traffic and prevents it from inflating your stats.

For example, Cookiebot CMP users see a constant spike in their direct traffic because their sites are scanned constantly by the Cookiebot's bots, requiring manual exclusions in GA4. There are other similar cases, but Plausible handles them all automatically.

We are also not blocked by most ad blockers and privacy-focused browsers like Safari and Firefox.

### How Google Analytics 4 handles audience segmentation

Google Analytics 4 is a common choice for site owners. For audience segmentation, “Audiences” starts as a setting buried in a [complex settings panel](https://plausible.io/blog/easy-insights#segmentation-of-audiences) and ends up in the “Free Form” reports.

In GA4, you can create audience groups based on user behavior and use them for things like retargeting ads in Google Ads. 

The problem is that third-party cookie deprecation has made this whole approach unreliable. Even though the phase-out has been delayed, most users still reject cookies, which keeps the issue very much alive. We've covered these issues in more detail in another [article](https://plausible.io/blog/paid-ads-cookieless-analytics).

Moreover, [recent independent studies](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/) have shown that the data tracked in Google Analytics is not accurate, missing up to 55% of traffic compared to Plausible.

GA4 is not GDPR-compliant, is known to profile your users and sell their data, requires a learning curve and compromises the user experience. We cover [the full comparison between Plausible and Google Analytics](https://plausible.io/vs-google-analytics) in detail.

Plausible is trusted by thousands of teams including Hugging Face, Ghost and Basecamp. Try it free for 30 days, no credit card required, and see what your audience data looks like when it is accurate and complete.