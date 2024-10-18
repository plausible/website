---
layout: post
title: "Client side vs server side analytics: What's the gap in data?"
description: What's the difference between server logs such as AWStats and
  JavaScript-based web analytics such as Google Analytics? Which one is more
  accurate?
slug: server-log-analysis
date: 2020-06-30T13:44:41.457Z
author: marko-saric
image: /uploads/server-side-client-side-analytics.png
image-alt: "Client side vs server side analytics: What's the gap in data?"
---
What's the difference between server logs such as AWStats and JavaScript-based web analytics such as Google Analytics? Are client side or server side analytics more accurate? And which should I use on my website? Let's take a look.

1. Ordered list
{:toc}

## TL;DR: Here's a summary

The main benefits of server-side analytics are that they have no impact on your page speed and the fact that adblockers cannot block server logs. But are these advantages worth the side effects?

With server log analysis, it is harder to filter out robots, crawlers, spiders and other non-visitors. And there is a lot of automated bot traffic on the internet.

Let's take a deeper look at the server logs vs JavaScript-based web analytics.

## How big of a data gap is there between server log analysis and web analytics?

To learn more about the differences in the data between these approaches, I've compared the data between [Plausible Analytics](https://plausible.io/) as client-side analytics and [AWStats](https://www.awstats.org/) as server-side analytics on my own website in June 2020.

### Comparison from my own website

With access to your server logs, you can feed the logs into server log analysis tools such as AWStats, Analog, GoAccess and Webalizer to get a dashboard with charts and graphs. This is exactly what I've done. There are [many other server-side analytics providers](https://plausible.io/blog/google-analytics-alternatives) depending on where you host your site. Netlify and Cloudflare are some of the examples.

I'm lucky to have access to the [cPanel](https://www.cpanel.net/) through my web hosting provider and cPanel has integration with AWStats. I installed the Plausible Analytics script on my site too (I've opened up my Plausible Analytics dashboard to the public and you can [view it here](https://plausible.io/markosaric.com)), so I can now compare the complete stats for June 2020 between these two services.

I compared all the data points that were measured by both tools. This means that I excluded things such as the bounce rate and the visitor devices as those are not measured by AWStats. I also excluded things such as bandwidth consumed as that's not measured by web analytics.

I pretty much ignored my site in June to see what would happen. I didn't publish any new content and I didn't share any of my posts anywhere at all. Here are the stats.

### My website stats for June

Let's start with Plausible Analytics. You can see my complete data for the month of June [in this open dashboard](https://plausible.io/markosaric.com?period=custom&from=2020-06-01&to=2020-06-30).

Here are my top line stats for June in Plausible Analytics:

![Traffic overview in Plausible Analytics](/uploads/traffic-overview.png "Traffic overview in Plausible Analytics")

And here are my top line stats from AWStats:

![Traffic overview in AWStats](/uploads/traffic-overview-awstats.png "Traffic overview in AWStats")

There is a great data disparity between the two. 

#### The total number of unique visitors

* Plausible Analytics: 10.3k
* AWStats: 21.2k

More than 100% higher number of visitors according to AWStats.

#### The total number of page views

* Plausible Analytics: 16.8k
* AWStats: 305.5k

18 times higher number of page views according to AWStats. 

[The definition](http://www.awstats.org/docs/awstats_glossary.html) for the "pages" metric according to AWStats is: "The number of "pages" viewed by visitors".

#### Top referrers

![Top referrers in Plausible Analytics](/uploads/top-referrers.png "Top referrers in Plausible Analytics")

![Top referrers in AWStats](/uploads/google-referrers.png "Top referrers in AWStats")

* Plausible Analytics: Google 6.4k
* AWStats: Google USA 7k, Google UK 3.1k

Plausible Analytics alongside other web analytics such as Google Analytics display all traffic from Google under one referral. AWStats splits traffic from Google according to the locality. Between Google USA, Google UK, Google India and others, there were more than 10,000 visitors from Google combined according to AWStats.

#### Top pages

![Top pages in Plausible Analytics](/uploads/top-pages.png "Top pages in Plausible Analytics")

![Top pages in AWStats](/uploads/top-pages-awstats.png "Top pages in AWStats")

* Plausible Analytics: /blog-or-vlog/ 2.5k
* AWStats: /wp-cron.php 93k, /feed/ 78k, home page 67k

Most of the page views and pages that AWStats counts are made by bots to the backend pages that are not customer facing. My actual top post, /blog-or-vlog/, is 6th in the list on AWStats with 3.2k views.

#### Top countries

![Top countries in Plausible Analytics](/uploads/top-countries.png "Top countries in Plausible Analytics")

![Top countries in AWStats](/uploads/top-locales-awstats.png "Top countries in AWStats")

* Plausible Analytics: USA 3.2k
* AWStats: USA 207k (doesn't show the number of unique visitors but a number of page views)

Interestingly enough, Russia is listed second on AWStats while it doesn't even make it into the top 10 on Plausible Analytics.

#### Top operating systems

![Top OS in Plausible Analytics](/uploads/top-os.png "Top OS in Plausible Analytics")

![Top OS in AWStats](/uploads/top-os-awstats.png "Top OS in AWStats")

* Plausible Analytics: Windows 32%
* AWStats: "Unknown" 67.5% (doesn't show the number of unique visitors but a number of page views). Windows is second with 15.6% of all page views.

#### Top browsers

![Top browsers in Plausible Analytics](/uploads/top-browsers.png "Top browsers in Plausible Analytics")

![Top browsers in AWStats](/uploads/top-browser-awstats.png "Top browsers in AWStats")

* Plausible Analytics: Chrome 59%
* AWStats: "Unknown" 64.7% (doesn't show the number of unique visitors but a number of page views). Chrome is second with 18.5% of all page views.

## What are client and server-side analytics and how do they work?

Let's take a step back and look at the differences in the way that client and server-side analytics work.

Client-side analytics such as Google Analytics and Plausible Analytics are deployed as small pieces of JavaScript files that are embedded in the code of a website. When real people land on your site, this script gets executed and it gathers some basic information on the client-side. 

Server-side analytics are server-side programs that monitor network traffic on the server itself and only process server-side information. Every request on your server, no matter what it is and by whom it is made, is recorded in the server logs. 

The main issue with the server-side approach is that not every request on your website is from real people. On most websites, the number of requests from non-human visitors largely outnumbers the number of requests from real people. 

### The JavaScript question

A vast majority of robots, crawlers and other non-human visitors to your website don't run JavaScript so they do not affect the client-side analytics as JavaScript is needed to be counted by client-side analytics.

This makes the bot filtering easier for tools such as Plausible Analytics. The majority of visitors that are capable of running JavaScript are real, human visitors. Everything without JavaScript is simply not counted.

And are there some real humans that block JavaScript as they browse the web? Isn't that a problem for client-side analytics as they wouldn't be included in the stats?

There is no definite study on this but the number of people who block JavaScript is going to be a tiny fraction of your total visitors. Most websites are terribly broken without JavaScript so browsing without it is difficult.

### Bot filtering in server-side analytics

It seems very clear that the majority of data included in AWStats is made by robots. AWStats tries to isolate and exclude robots. They automatically exclude the "not viewed traffic" which includes "traffic generated by robots, worms, or replies with special HTTP status codes".

Despite these efforts, it seems to miss out on a lot of bot traffic. This seems to be a general issue with server log analysis as a whole rather than an issue with AWStats software itself.

There could be a way to make it more accurate by manually excluding other bots. If I exclude back-end pages such as wp-cron.php, /feed/ and wp-login.php that the bots are trying to access, I may get something closer to the actual numbers.

Similar is the case with top operating systems and top browsers. If I exclude the "unknown" category in AWStats, the remaining table becomes a bit more usable. Same for top countries with Russia, for instance, having way too inflated numbers on AWStats compared to the reality.

## Advantages of server-side analytics

Server-side analytics have several native advantages:

* No impact on your site speed and loading time
* Not blocked by privacy-friendly browsers, adblocking extensions and other content blockers
* Counts even those visitors who disable JavaScript from their browsers
* No third-party integrations needed

## Problems with server logs

Here are some disadvantages of using server logs:

* Server logs are not pretty, not user friendly and the user experience is not ideal. It's a bit of a pain to set up and the user interface is a little bit difficult to use and understand. Many site owners want a prettier and simpler plug and play solution.
* Server log stats are not accurate when compared to what stats you see in tools such as Plausible Analytics. An overwhelming amount of website traffic is automated and comes from search engines, web crawlers and other bots. How to find signal-in-the-noise of server-side analytics and how to filter out bots are very time-consuming tasks.
* Despite many hosting providers such as Netlify and Cloudflare offering server-side analytics, many sites such as those on GitHub pages have no access to server logs at all.
* Server logs only keep a limited amount of traffic data so you need a way to archive them before they are deleted. 

## Are server logs more privacy-friendly than client-side analytics?

Some data privacy activists often share the opinion that "any analytics are bad, only server logs are good", but server logs are not a fundamentally more privacy-friendly solution compared to JavaScript-based analytics tools. 

The problem with JavaScript-based trackers such as Google Analytics is not the fact that they use JavaScript, it is the fact that they are bloated scripts and that they collect way too much data, set third-party cookies, and track and profile people across devices, websites and apps as they browse the web. Then they use these insights about people for personalized advertising purposes.

But this is not what privacy-friendly, JavaScript-based web analytics such as Plausible Analytics do.

### How is Plausible Analytics different from the average client side analytics?

Privacy-friendly web analytics tools such as Plausible Analytics have more in common with server logs than they do with Google's surveillance capitalism tools.

I would actually say that server logs record and display more personal information than a tool such as Plausible Analytics. Server log analysis on my server using AWStats show all visitor IP addresses, the number of times they have accessed my site and the last time they have visited.

![Visitor IP addresses in AWStats](/uploads/awstats-hosts.png "Visitor IP addresses in AWStats")

Here's a quick summary on Plausible Analytics and the [way it differs from tools such as Google Analytics](https://plausible.io/vs-google-analytics):

* We don't collect nor store any personal data. Unlike server logs, we don't even collect nor store IP addresses.
* We don't use cookies.
* We are lightweight so no impact on the site speed. Much more comparable to server logs than to Google Analytics.
* We are isolated to one site only and don't do any tracking of people around the web and across their different devices.
* Our business model has nothing to do with personalized advertising so we have no interest in collecting, sharing or selling your website data to anyone. You are fully in control and have full ownership of your website stats. Our business model is the subscription fee we charge you to host and manage your website stats for you.
* Our script can be served from your domain name as a first-party connection if you're concerned about adblockers and other content blockers.
* We can be self-hosted on your server if you're concerned about third-party connections. [Our self-hosted product](https://plausible.io/blog/self-hosted-web-analytics-beta) is free as in beer but you do need to install, maintain and manage it yourself on your server.

## Are server-side analytics a realistic alternative to client-side analytics for the average website?

Google Analytics is the most popular client-side analytics tool on the web. It is installed on more than 50% of all websites. From speaking to many website owners over the last few weeks, server logs, in general, are not seen as an ideal replacement for Google Analytics by most.

Some web hosting packages may come with server logs pre-installed and ready to use. For most of the others, it is a bit more complicated process to get them set up.

Trying to get the average website or business that is using Google Analytics right now to remove Google Analytics and switch to server-side analytics reminds me of that [famous Hacker News comment](https://news.ycombinator.com/item?id=9224) about the announcement of Dropbox: 

> "You can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem. From Windows or Mac, this FTP account could be accessed through built-in software."

How would the average website or business owner that runs Google Analytics switch to a server log analytics system?

1. You need to have access to a server. This is especially difficult when considering that many sites these days are hosted on proprietary CMS tools that don't allow you to have server access 
2. Then you need to set up your server logs in the first place unless your server already supports them
3. Then you need to enable archiving as by default server logs get discarded after the system processes them
4. Then you need to redirect your server logs to another tool to parse them, organize the information into a format readable by people that are used to Google Analytics dashboard and then show the analytics reports with pretty charts and tables
5. Then you need to figure out how to filter out bots from the data to get something that resembles the accuracy you are used to from client-side analytics

Some site owners are happy to do this process and that's fine. I've been using server logs for a year or so since I decided to [remove Google Analytics](https://plausible.io/blog/remove-google-analytics) and before discovering and becoming part of Plausible Analytics. 

But this is not a realistic solution for millions of websites running Google Analytics and donating their visitor and customer data to Google today. There is a need for a better plug and play solution. 

## Conclusion

Server logs are an option for some site owners with basic analytics needs that are happy to do the work to get it all set up and that can live with inaccuracies caused by so many web visitors being robots. 

It would be difficult to get many site owners to remove Google Analytics and use server log analysis so we do need privacy-friendly JavaScript-based web analytics such as [Plausible Analytics](https://plausible.io/) too.

These site owners need something user friendly, accurate and to actually convince them to make the move away from Google Analytics, they need something that can improve upon some of the issues they experience with Google Analytics.

If we insist all the websites remove Google Analytics and replace them with server logs, we will ultimately fail in the goal of restricting Google's grip on the web.