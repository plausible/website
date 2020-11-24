---
layout: post
title: How to track outbound link clicks using your website analytics
description: Here's a guide on how to automate the external link click tracking
  on your website. Let's get started.
slug: /track-outbound-link-clicks
date: 2020-11-24T13:25:17.104Z
author: marko-saric
---
Outbound links play a significant role on the open web, but how do you track clicks on outbound links using your website analytics? Here's a guide on how to automate the external link click tracking on your website on Google Analytics and on Plausible Analytics. Let's get started.

1. Ordered list
{:toc}

## What is an outbound link?

An outbound or external link is a link that takes the visitor to another website. These can be links to external references, resources, sponsors, affiliate links and more.

Outbound links have always been a big part of the open web. It's what helps people discover new sites and resources. Search engines such as Google also use links as one of the main ranking factors.

## How do you create outbound links?

You create the outbound links the same way you do your inbound links. In HTML, it looks like this:

```
<a href="https://www.url.com/">link text</a>
```

Many also set external links to be opened in new windows not to lose the visitor who clicks on them. It's done like this:

```
<a href="https://www.url.com/" target="_blank">link text</a> 
```

## What can I learn from tracking outbound link clicks?

With outbound link click tracking, you can:

* Get an overview of all the external links on your site so you can change or remove those you don't want to link to anymore
* See which external URLs are clicked the most on your site
* See on which of your pages the particular outbound link gets the clicks
* See which referral sources drive the traffic that clicks on the external links
* Filter your traffic by external URL to understand what type of visitor clicks outbound links the most (the country they're from, the device they're on, browser and OS they use)

All this gives you a more complete picture of the performance of your website. It also helps you better understand what your visitors are interested in. You can also identify the best sources of quality traffic and your content that delivers the best results.

## Can Google Analytics and Google Tag Manager track link clicks?

Outbound link click tracking is essential for many site owners, such as those who monetize their sites using affiliate marketing. 

But tracking external link clicks has never been a simple and easy process with popular web analytics tools such as Google Analytics. 

If you look at the popular guides on the web, the process typically goes like this: 

* You need to insert extra JavaScript code on your pages
* Then you need to manually tag each individual external link that you want to track

This is a cumbersome, time consuming and slow process not used by many site owners due to its inconvenience.

### A simple method to track outbound link clicks in Google Analytics

At Plausible Analytics, we've worked on a more straightforward method that can help you automate the process of tracking external link clicks without any coding or knowledge of JavaScript. 

With a couple of simple steps, you'll be able to see the full list of all clicks on all external links on your site. No need for manual tagging of links. And as everything else that we do, we've made it [open source](https://plausible.io/open-source-website-analytics) so this tracking is possible even for those who [use Google Analytics](https://plausible.io/blog/remove-google-analytics).

Here's what you need to do to set up outbound link click tracking using the Plausible Analytics method on Google Analytics:

(GOOGLE ANALYTICS INSTRUCTIONS HERE)

### Where do I find my outbound link clicks in Google Analytics?

(INSTRUCTIONS FOR WHERE TO FIND THE REPORT)

## How to track outbound links with Plausible Analytics

Don't use Google Analytics? You can get this automated external link click tracking directly in Plausible Analytics too. This is in-built into our analytics tool so the process to set it all up is even easier.

Plausible Analytics is an independent analytics tool that's built with simplicity and privacy in mind. Our goal is to provide useful and accurate insights to site owners while at the same time being compliant with the different privacy regulations such as the [GDPR](https://plausible.io/blog/google-analytics-gdpr) and being respectful of [the privacy of website visitors](https://plausible.io/privacy-focused-web-analytics).

If you want to track external link clicks with Plausible Analytics, here's what you need to do.

### Step 1: Sign up for a Plausible Analytics account 

First, you need to [sign up for a free trial account](https://plausible.io/). You can use it for 30 days on unlimited number of sites and with no usage restrictions.

We've chosen the subscription business model rather than surveillance capitalism. This means that we charge a fee for our website analytics service in case you decide to convert into a subscriber after your trial is completed. Plans start at $4/month.

The process below works on all the different content management systems you may be using for your website including WordPress, Ghost, Squarespace and Webflow.

### Add the Plausible script snippet to your site

Add the Plausible Analytics "outbound link click" script snippet to your site. Note that this is not the same as our default snippet.

The outbound link click snippet will look like this (make sure to change the data-domain attribute to the domain you added to your Plausible account):

```
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.outbound-links.js"></script>
```

Some Plausible Analytics users choose to serve our script from their subdomain [as a first-party connection](https://docs.plausible.io/custom-domain).

In those cases, the new "outbound link click" snippet will look like this (make sure to change the data-domain attribute to the domain you added to Plausible):

```
<script async defer data-domain="yourdomain.com" src="https://yoursubdomain.yourdomain.com/js/index.outbound-links.js"></script>
```

You need to place this tracking script code into the header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

Do this for all of the individual websites on which you'd like to enable outbound link click tracking.

### Create a custom event goal in your Plausible Analytics account

Create one general goal for all external link clicks to start showing up in your dashboard.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section. You should see a prompt to add a goal.

![Image](https://docs.plausible.io/img/goal-conversions.png)

Click on the "+ Add goal" button to go to the goal creation form. Select `Custom event` as the goal trigger and enter this exact name: `Outbound Link: Click`.

![Image](https://docs.plausible.io/img/outbound-link-click-goal.png)

Next, click on the "Add goal" button and you'll be taken back to the Goals page.

### Check your external link click stats in your dashboard 

After you've completed this process, all the external link clicks will start being tracked. They will be displayed in the "Goal Conversions" report at the bottom of your Plausible Analytics dashboard.

You'll see the "Outbound Link: Click" goal as soon as the first external link click has been tracked. You can then see:

* The number of total external link clicks
* The number of unique external link clicks
* The conversion rate of different links
* Top referral sources that lead to clicks
* Top pages that drive the clicks
* Countries that click on external links
* Devices (screen size, browser, OS) that click on external links

And you can click on a particular external URL to filter your Plausible Analytics dashboard by those clicks only and get the full overview of the visitors that clicked on that specific URL. Enjoy!