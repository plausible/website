---
layout: post
title: What are custom dimensions in Google analytics and how to use them?
description: Custom dimensions bridge the gap between the data that a website
  performance report offers and what you would like to specifically know about
  your website.
slug: custom-dimensions-analytics
date: 2024-06-12T09:56:42.495Z
author: hricha-shandily
image: /uploads/custom-dimensions-plausible.png
image-alt: What are custom dimensions in analytics
---
Most web analytics tools are good at providing standard insights but they cannot automatically capture everything you need to know. Marketers usually spend a lot of time with website performance reports. Such reports are a good source of truth about the quality and effectiveness of marketing efforts, communications, audience engagement and other business and branding activities.

Ensuring that your web analytics setup is spot on and aligns with business growth and goals becomes increasingly important over time. Therefore, custom dimensions come into play which are nothing but custom entries in your reports.

In a nutshell, custom dimensions bridge the gap between the data that a standard website performance report offers and what you would like to specifically know about your website.

The more robust you want your website performance report to be, the more customized it usually needs to be. Let’s see.

1. Ordered list
{:toc}

## What are custom dimensions?

Custom dimensions is a term coined by Google Analytics. We call it “custom properties” in Plausible. As the term suggests, custom dimensions are different sorts of features/facts/attributes, i.e. additional context, about the data you collect about the events happening on your website.

Some attributes are standard and are automatically collected by the web analytics tool you use. Such examples are page URL, page referrer, link text, engagement time, etc.

While other attributes are not automatically tracked, and need to be configured by you and are hence “custom” to your use case. To understand this well, let’s understand a few related terms first:

### Events

Everything in web analytics revolves around “events.” Think of an event like any sort of activity done by a visitor on your website.

Did a visitor just load a page or start a session? Did they click a link, engage with your blog post, or download a file? Or maybe they signed up, or made a purchase. Anything that can happen on your website can also have its own “event” to be tracked in a web analytics tool.

### Metrics

If dimensions –– whether standard or custom –– are descriptive facts about events, then metrics are the quantitative measurements of the performance of such dimensions.

Some examples are event-count, conversions, engagement rate, open rate, revenue per customer, conversion rate, time on page, etc.

### The relationship between events, dimensions, and metrics

A dimension is an attribute about something tracked on your website. In Google Analytics 4, custom dimensions are categorized as three types:

- Event-scoped: Attributes about events happening on your site.
- Item-scoped: Attributes about products (like product ID, color, name, quantity, price, etc.), useful if you are running an e-commerce store.
- User-scoped: Tracking attributes about your visitors or users. Plausible doesn’t do user-scoped tracking because [we are privacy-friendly](https://plausible.io/privacy-focused-web-analytics).

We will keep the scope of this article mostly to event-scoped dimensions.

Let’s say a website event you track is “[file downloads](https://plausible.io/blog/track-file-downloads-in-web-analytics)”, the following can be dimensions/attributes you might want to track about this event:

- File extension (like PDF, docx, pptx, etc.)
- File name
- Link classes
- Link ID
- Link text
- Link URL

And metrics? When you eventually see reports in your web analytics dashboard, you can see such attributes as particulars/values of those attributes and judge their performance with the help of associated metrics data available.

Here is an example from our [live dashboard](https://plausible.io/plausible.io), where we track our visitors’ browser language:

![An example of custom dimensions from the analytics dashboard](https://plausible.io/uploads/custom-dimensions-in-web-analytics.png)

### A stupidly simple analogy

My personal favorite way to never forget something technical is to visualize in it a regular life setting. In this case, the analogy would be this: Imagine your life was analogous to your website and it had a tracking device.

You could define certain general events to be tracked. Like “waking up”. Then, the descriptive data to be collected about the “waking up” event could be “time-of-sleep”, “quality-of-sleep”, “length-of-sleep”, etc.

And when you view a report about your waking up patterns in the past 3 months, these facts would be presented as custom dimensions and the metrics would be sleep frequency, average length of sleep, sleep rate, etc.

## How to use custom dimensions/properties?

Reiterating to prevent any confusion: the feature is called "Custom dimensions" in GA4 and "Custom properties” in Plausible Analytics. Understanding how to effectively use custom dimensions has two parts to it: planning your analytics, and setting them up in GA4 or Plausible.

### Plan your analytics

The general purpose of analytic reporting is to recognize patterns and understand one’s strong and weak areas for improvement. However, the exercise is more fruitful if you have goals and objectives to map your metrics against.

To avoid tracking random events and dimensions, map your custom dimensions to your website’s objectives. This will also keep your reports cleaner and useful.

Website objectives vary based on the nature of the business. For instance, a SaaS tool’s website might aim to generate free trials, a news or media website’s focus could be increasing content engagement, while an e-commerce site may prioritize getting orders.

If you're unsure about your website's objectives, start by asking core business questions about your long-term and short-term goals. This will help derive clear website objectives.

If you're in the early stages and still figuring out your business or marketing objectives, the goal for setting custom dimensions would in fact be to experiment and find what works best for you. In that case, be sure to update your analytics setup as you gain more clarity over time.

Based on your website’s objectives, you can enlist the relevant actions you want your users to take to help the objectives. For eg., if your goal is to increase content engagement, key actions can be visiting the blog page, or signing up for a newsletter. These can become custom events to be tracked.

Next, determine what additional context (custom dimensions) you’d like to track about these events. For eg. For the event capturing visits to the blog page, you can track attributes like author, content format, content group, topic, time on page, word-count of articles, etc.

Later, when you see your reports, you can learn stuff like which author or content topic drives the most number of clicks (a metric), or if word-count is a deciding factor in the articles that receive most clicks.

**Other tips**:

- You will most likely have more than one objective. And different teams have different KPIs. It is alright to track these together from a single dashboard, as long as different teams have clarity on what is their core metric to be looked at.
- For a complete visualization of how visitors interact with your website, try incorporating your events and goals into [funnels](https://plausible.io/blog/funnels-conversion-optimization).
- Regularly review and adjust your events and custom dimensions as and when you notice any changes in your goals or user behavior. This could happen monthly, half-yearly, or yearly, depending on the stage of the volatility of growth.

### Setting up custom dimensions

The other important part is understanding your options and how to set up custom dimensions in different tools available. We will discuss Plausible and Google Analytics 4.

### Setting up custom properties in Plausible

We, at Plausible, take special care in keeping your analytics setup and your dashboard [confusion-free](https://plausible.io/simple-web-analytics). To set up custom properties (same thing as custom dimensions in GA4) in your Plausible account, all you need to do is two things:

1. **Set some custom events/goals.** There are two ways to [track any event](https://plausible.io/docs/custom-event-goals) in Plausible: track pageviews (doesn’t require code editing), or track custom events (requires code editing).
Secondly, add these custom events as goals to your Plausible dashboard easily. So there’s no distinction/confusion between custom events and custom goals.
2. **Mark which properties you want tracked**. Once you know which custom event-goals you are tracking, simply edit the JS snippet to let it know which [properties to track](https://plausible.io/docs/custom-props/introduction) as well.

Then, you will be able to add all the properties that your JS snippet is sending to your dashboard in one click.

Once this is set up, you will be able to filter and segment your traffic based on properties on your dashboard, among other things.

### Setting up custom dimensions in Google Analytics 4

Setting up custom dimensions in GA4 requires a more complex setup. Here’s a gist:

1. **Setting events**
Firstly, you need to determine with the help of GA’s documentation which events are not being tracked automatically or with the help of GA’s Enhanced Conversions set of events. If the event you want to track is not a part of either of those categories, then see if it’s a “Recommended event.”
If yes, then many cases require you to follow Google’s naming convention to set these events for yourself. And if it is not a “Recommended event”, then create a [custom event](https://support.google.com/analytics/answer/12229021?hl=en&ref_topic=13367566&sjid=12208603896311330242-AP).
Later, you can mark some events as “Key events” within your GA4 dashboard. Key events is GA4’s new name for what was earlier called “conversions”, and what we call “goals”.
2. **Parameters**
Parameters are like a precursor to custom dimensions. They tell the script what additional context to gather about an event.
You need to set up textual parameters (so they can be converted to custom dimensions) and numerical parameters (so they can be converted to custom metrics).
So they are pretty much like custom dimensions and custom metrics, but not quite. They only gather additional data about events in the backend, but can’t be directly used in reports.
Plus: You need to make sure that you don’t create custom dimensions before seeing if there is already a predefined dimension or metric. And do check the limits on creating the number of custom dimensions and metrics of each type.
P.S. In all cases of creating custom events or parameters, you would require some additional Google Tag Manager and DebugView skills as well.
3. **Custom dimensions and metrics**
Once your backend setup is complete, open your GA4 dashboard, ensure if data is being collected correctly using the DebugView. Then proceed to add [custom dimensions](https://support.google.com/analytics/answer/14240153?hl=en&ref_topic=11151952&sjid=12208603896311330242-AP) and metrics to be displayed on your reports.
For this, you can name the custom dimension or metrics something different from the parameters collecting the respective data, while adding additional information like unit of measurement, scope, and description.
4. **Reports**
While creating your free form or funnel exploration reports, remember to ensure configuring relevant dimensions and metrics therein.

**Our two cents on which tool to use**

Google Analytics 4 requires a learning curve, complex setup, and access to engineering know-how. You also need to do additional work in setting up some basic features for yourself. But the level of customization and robustness you get for yourself would be useful if you are a big agency or an enterprise.

On the other hand, [Plausible takes responsibility](https://plausible.io/vs-google-analytics) for creating features that are user-friendly and we don’t put the ball in your court to figure out a bit too much about your web analytic reports.

All in all, Google Analytics 4 might be an overkill for you if you are a startup. But Plausible might be an underkill for you if you are a huge agency or an enterprise.

## Parting tips

- Next time you open your reports, decide on a specific purpose (no matter how small) to see them beforehand. This will reduce randomness from your analytic-viewing time and give you an anchor to make better decisions.
- Even if you have less data, or missing data points, it is alright. Try looking for patterns instead.
- If something can be achieved without customization in the tool of your choice, choose the former approach. It’ll keep your setup much more clean and manageable in the long run.

P.S. We’re creating a series on Web Analytics features, like this one, to help you learn and apply web analytics with ease. If you have specific topics you’d like us to cover, let us know at `reading@plausible.io`. We’re listening!