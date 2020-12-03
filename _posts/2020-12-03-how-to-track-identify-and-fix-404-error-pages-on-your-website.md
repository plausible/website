---
layout: post
title: How to track, identify and fix 404 error pages on your website
description: Here's a look at 404 page not found errors and how you can identify
  and fix those broken links using your website analytics.
slug: fix-404-errors
date: 2020-12-03T13:34:30.670Z
author: marko-saric
image: /uploads/track-404-error-pages.jpg
image-alt: Track and fix 404 error pages on your site
---
Having 404 error pages on your website can lead to a bad user experience, a negative first impression, and even damage your search engine rankings and traffic you get from SEO.

Here's a closer look at 404 page not found errors and how you can identify and fix those broken links.

1. Ordered list
{:toc}

## What does a 404 error mean?

404 is an [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicating that the server cannot find the requested resource. It's one of the most famous and recognizable response status codes due to its frequent occurrence when browsing the web.

404 Page Not Found error means that the page your visitor is trying to open cannot be found on your server. Basically, there is no page on your site corresponding to the URL the visitor has tried to access. 

The error message comes in many shapes and forms, including 404 Not Found, Page Not Found and File Not Found.

## Why do 404 errors happen? 

You might have deleted the page, you might have modified it and changed its URL, or your visitor might have misspelled it and the page never existed. 

404 errors can happen when you do a site migration, a site redesign, or when you switch to a different site builder or content management system.

Another common occurrence is that a person linking to your site from their own website or sharing it on social media and in forums might have misspelled the page URL.

## Why is it essential to fix 404 page errors?

There are two critical aspects to consider: the user experience and the search engine traffic. Here's why:

### 404 errors make a terrible user experience 

404 pages are a terrible user experience, which may give the impression that the site is no longer maintained, leading to a bad reputation. 

A visitor might find a link to your site on another website. They may discover you in search engines or even click on an internal link on your site. You don't want them to find a dead link. It is a nuisance to them. 

Website visitors not finding the content they are looking for and the content they're expecting to see leads to a broken experience. They may click on the back button and never return. This will contribute to your site having a [high bounce rate](https://plausible.io/blog/analytics-metrics-definitions).

You don't want your visitors to have a bad experience, get a negative first impression and abandon your website.

### 404 errors can damage your search engine rankings and traffic

Like how people may lose trust in a site with too many dead links, the same can happen with Google and other search engines.

Here's what [Google said](https://developers.google.com/search/blog/2011/05/do-404s-hurt-my-site) about 404s and their affect on the search rankings:

> "If some URLs on your site 404, this fact alone does not hurt you or count against you in Google's search results. However, there may be other reasons that you'd want to address certain types of 404s. For example, if some of the pages that 404 are pages you actually care about, you should look into why we're seeing 404s when we crawl them! If you see a misspelling of a legitimate URL, it's likely that someone intended to link to you and simply made a typo. Instead of returning a 404, you could 301 redirect the misspelled URL to the correct URL and capture the intended traffic from that link. You can also make sure that, when users do land on a 404 page on your site, you help them find what they were looking for rather than just saying "404 Not found"."

Another point to consider are the links on other sites pointing to a 404 page on your server. You will not get any SEO benefits for those links. That's why it's useful always to make sure to redirect those broken pages to other relevant sections on your site.

## How do I find and track 404 error pages on my website?

You can track 404 page errors using many tools. Here are some examples:

### Google Search Console

You can also find 404 page errors in your [Google Search Console](https://docs.plausible.io/google-search-console-integration). Go into the "Index" section on the left-hand side menu and click on "Coverage". Then click on "Excluded" and choose "Not found (404)" or "Soft 404" in the list to get the full list of 404 page errors Google has discovered.

### Google Analytics

In your [Google Analytics](https://plausible.io/vs-google-analytics) dashboard, go into "Behavior" in the left-hand navigation, then choose "Site Content" and click on the "All Pages" report.

Select "Page Title" as the primary dimension and search for 404. This will give you the list of 404 page errors.

### Server logs

You can find 404 page not found errors in your [server logs](https://plausible.io/blog/server-log-analysis) too. 

The negative of this is that it would include visits by bots. This means that the vast majority of 404 errors discovered by server logs would be errors that may never actually matter to real people and actual visitors to your site. 

Some of the pages not found, as reported by the server logs, are URLs that never existed on the website. These you can safely ignore as they don't really affect the experience of actual visitors.

Even though you should aim to fix all broken links, the fact that server logs report all possible broken pages may mean that you may be overloaded by the reports of 404 that don't make a difference and you won't get to fixing the important ones.

### Online tools that crawl your site

Use online tools that help you find broken links by crawling through your site. One of the popular tools is the [W3C Link Checker](https://validator.w3.org/checklink). 

These can only find 404 errors resulting from internal links and cannot discover 404s that result from dead links around the web.

## How to track outbound links with Plausible Analytics

Tracking 404 error pages is essential for many site owners and Plausible Analytics helps you automate this process. Plausible Analytics is an independent analytics tool that's built with simplicity and privacy in mind.

With our "404 Error Pages Tracking", you can:

* Get an easy overview of which 404 pages are accessed by your visitors
* See where visitors find broken links to your 404 error pages 
* Then you can manually fix broken links and redirect error pages

If you want to track and identify 404 error pages on your site, here's what you need to do to set it up on Plausible Analytics. 

### Sign up for an account 

First, you need to [sign up for a free trial account](https://plausible.io/). You can use it for 30 days on an unlimited number of sites and with no usage restrictions.

We've chosen the subscription business model rather than surveillance capitalism. This means that we charge a fee for our website analytics service if you decide to convert into a subscriber after your trial is completed. Plans start at $4/month.

The process below works on all the different content management systems you may use for your website, including WordPress, Ghost, Squarespace and Webflow.

### Add the script snippet to your site

Add the Plausible script snippet to your site and make sure your tracking setup includes the second script as shown below:

```html
<script async defer data-domain="<yourdomain.com>" src="https://plausible.io/js/plausible.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
```

You need to place your Plausible Analytics tracking script code into the Header (`<head>`) section of your site. Place the tracking script within the `<head> … </head>` tags.

### Paste this piece of code to your 404 page template

Add this code to your 404 page. For instance, if you're using WordPress, your 404 page template will be called 404.php. It will be located within your theme files.

```html
<script>plausible("404",{ props: { path: document.location.pathname } });</script>
```

You need to place this code on your 404 page below the header section. Put it somewhere after the closing `</head>` tag.

### Create a custom event goal in your account

404 error pages won't show up automatically. You'll have to configure the goal for them to show up on your dashboard.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section. You should see a prompt to add a goal.

![Image](/uploads/goal-conversions.png)

Click on the "+ Add goal" button to go to the goal creation form.

Select `Custom event` as the goal trigger and enter this exact name: `404`.

![Image](/uploads/404-error-pages-goal.png)

Next, click on the "Add goal" button and you'll be taken back to the Goals page. 

### Check the 404 pages error report

After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. You'll see "404" goal as soon as the first visit on an error page has been tracked.

This is a very efficient method of tracking 404 errors as the error URLs are displayed directly in your web analytics dashboard.

Plausible Analytics ranks the individual 404 errors according to the number of times it has occurred to real visitors (and not bots). 

Plausible Analytics discovers 404s resulting from internal links and broken links around the web. It gives you the source of where visitors find the particular dead link.

Thanks to [Jeremiah Lee](https://www.jeremiahlee.com/) for contributing this to the Plausible Analytics community!

## How do I fix error 404 on my site?

So when you're aware of an important 404 page error, it's time to fix it. You can fix the broken link and point it to a correct URL, or you can redirect the 404 URL to another relevant page on your site.

### Fix broken internal links

When dealing with broken internal links, it is simple for you to change those links to point to a correct URL. You're in full control of your site and the pages on which the broken links are located.

### 301 redirect incoming broken links

In case of incoming 404s from other sites that point to a page not found on your server, it is not always easy to fix those errors. You don't own those links and you cannot change their pages.

You may reach out to the author in question and ask them to fix the link. This may not always work. 

The easiest solution is to simply do a [301 permanent redirect](https://en.wikipedia.org/wiki/HTTP_301) so any traffic to the broken page gets redirected to an existing and relevant replacement page on your site.

## How do I avoid future page not found errors on my site?

Making sure that future 404 page errors don't occur doesn't need to be time-consuming. Simply check and monitor your "Goal Conversions" report in your Plausible Analytics dashboard regularly. 

Your 404 error pages will be ranked by importance according to the number of times a real person has tried to access them. It is these 404s that receive a substantial quantity of traffic that you should aim to fix.

Click on "404" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. 

Then you can figure out how your visitors discover the broken links and fix them.