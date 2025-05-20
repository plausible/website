---
layout: post
title: Google Analytics fails at detecting bot traffic. We tested.
description: We simulated non-human traffic to a test site. Google Analytics
  recorded it as real traffic. Plausible rejected it all.
slug: filtering-bot-traffic-google-analytics-vs-plausible
date: 2025-05-20T15:42:50.805Z
author: hricha-shandily
---
A good chunk of the traffic you see in Google Analytics could be bots (or non-human to be more precise). We tested by simulating non-human traffic to a test site. Google Analytics recorded it as real traffic. Plausible Analytics rejected it all.

Bots now account for more than half of all internet traffic ([src](https://www.techradar.com/pro/security/bots-now-account-for-over-half-of-all-internet-traffic)) and it is very likely that your website too gets bot traffic every now and then.

Bots, scrapers, headless browsers — they can all hit your site and trigger tracking scripts. If your analytics tool counts that traffic as human, your data becomes misleading. You might think you're getting more visits than you actually are.

You don’t want to be seeing “non-real” traffic in your analytics dashboard as such traffic could inflate your pageviews, distort your engagement metrics, conversion events and other insights. If the scale is high, it could cause you to make totally misled business decisions, while giving a false sense of performance. Worst, it could lead you to invest in wrong marketing channels.

Usually, it’s hard to pinpoint on an analytics dashboard whether a particular visit was from a human or a non-human. So how bad is the problem really?


To find out, we ran a controlled experiment: we built a test site, sent only simulated bot traffic to it, and compared what each analytics tool recorded.

1. Ordered list
   {:toc}

## Experiment: Simulating bot traffic to see what analytics tools catch

TL;DR: We wrote some scripts to pose as bot traffic does in reality, and sent such traffic to a test site where both Google Analytics and Plausible Analytics scripts were installed. You can see the results below.

To begin with, we created a dummy site on Vercel using an Astro template and installed the tracking scripts for both Plausible Analytics and Google Analytics on it.

See here:

![analytics-test-site](/uploads/analytics-test-site.png "analytics-test-site")

![analytics-test-site-page-source](/uploads/analytics-test-site-page-source.png "analytics-test-site-page-source")

To simulate bot traffic, we built a [Puppeteer](https://pptr.dev/) (a Node.js library for controlling browsers) script that opened the website in a headless browser and performed specific actions.

The script was used to simulate two kinds of traffic patterns, 

1. With a known, non-browser User Agent. In our case, we set the User-Agent to "PostmanRuntime/7.43.4" (clearly non-human), and 
2. With the User-Agent set to a real looking browser, randomly selecting from 4 different valid User Agent strings.

> 💡 In simpler terms, User-Agent strings are how browsers identify themselves to websites — like saying, “Hi, I’m Chrome on a Mac.” Bots or programs can use either a specific User Agent, for instance an API client like Postman will use \`PostmanRuntime\`, while some bots would try to masquerade as a real browser and will use a valid User-Agent.
>
> By testing both obvious bots and sneaky ones pretending to be normal browsers, we could see whether Google Analytics is smart enough to tell real users apart from scripted visits — even when they look legit on the surface.

In both cases, we opened multiple browser instances, each of which visited the page. The script was written to scroll a bit to simulate user behaviour in 50% of the visits. And in 30% of the visits, the script would click on a link to navigate to another page.

This script typically took 5-10 seconds on my M1 Macbook Pro to run 10 simultaneous sessions (variables like hardware and network will affect the performance of these runs): clearly a “non-human traffic pattern”.

To ensure the data is clean and the bot has the best chance to pose as a real human, we ensured a few things:

1. There was a random delay in between actions
2. The window size was a bit different from each other between sessions
3. Ran the script from my local IP, since a data center IP is relatively easy to track.
4. The scripts were run immediately after deploying the website, before the rest of the humans or non-humans on the internet could say “hello”
5. I also blocked Plausible and GA4 explicitly on my visits to the site using content blockers to ensure that my visits are not logged in any form.

The website was hosted on Vercel, allowing us to observe all the requests that were made to the website. This helped us verify our results, ensuring that the data was actually received by the browser. We also ensured that any bot detection and blocking on Vercel was disabled.

You can find the script that automated the browser [here](https://gist.github.com/Hricha-Shandily/8510495f597fc70a8d7d4294c3120878), and the script that was used to run this test in bulk [here](https://gist.github.com/Hricha-Shandily/4c09fac752f3d02994111c0b994aa8b3), in case you wish to replicate the results.

Alright, result time!

### Results

During the first round of simulating non-human traffic, we set the User-Agent to "PostmanRuntime/7.43.4" (clearly non-human).

Google Analytics got fooled:

**15 May 2025, 23:23.**

You can see traffic getting recorded in real time in the screenshot below, with 22 pageviews getting recorded.

This is actually a fairly basic method of identifying non-human traffic but to my surprise, Google Analytics failed at this in the test.

![GA real time dashboard showing bot traffic as real traffic](/uploads/ga-dashboard.png "GA real time dashboard showing bot traffic as real traffic")

Plausible Analytics recorded none of such traffic and showed beautiful zeroes (I had already blocked my own visit too):

**15 May 2025, 23:23.**

![Plausible real time dashboard not recording bot traffic](/uploads/plausible-real-time-dashboard-not-recording-bot-traffic.png "Plausible real time dashboard not recording bot traffic")

And here’s the screenshot from Vercel (where the site is hosted), where you can see requests coming from a User-Agent "PostmanRuntime/7.43.4".

Note that I didn’t actually use Postman, just posed as it using Puppeteer. Postman was selected since it’s a widely known API testing tool, and any analytics tool should in theory be able to detect and block it. 

![Vercel dashboard - testing 1](/uploads/vercel-dashboard-1.png "Vercel dashboard - testing 1")

**During the second round** of simulating non-human traffic, we set the User-Agent to a real looking browser, randomly selecting from 4 different valid User Agent strings.

Google Analytics got fooled again:

**15 May 2025, 23:24.**

You can see traffic getting recorded in real time in the screenshot below, with 40 pageviews getting recorded.

![GA real time dashboard showing bot traffic as real traffic for a second time](/uploads/ga-dashboard-testing-bot-traffic.png "GA real time dashboard showing bot traffic as real traffic for a second time")

Plausible Analytics again passed with flying colours as none of such traffic was recorded.

**15 May 2025, 23:25.**

![Plausible real time dashboard not recording bot traffic for a second time](/uploads/plausible-dashboard-rejecting-bot-traffic.png "Plausible real time dashboard not recording bot traffic for a second time")

Here’s the screenshot from Vercel:

![Vercel dashboard - testing 2](/uploads/vercel-dashboard-2.png "Vercel dashboard - testing 2")

P.S. Vercel shows a higher number from what can be seen on GA. This is because the numbers are from past test runs too, when neither GA4 or Plausible scripts were installed on the website.

### Conclusion

This proves that Plausible Analytics has better bot detection and exclusion capabilities, as compared to Google Analytics. This helps keep your analytics clean and reliable.

### “But wouldn’t Google Analytics clean up such data before presenting it in the standard reports?”

I thought that since Google Analytics 4 has a data processing time of up to 48 hours ([official src](https://support.google.com/analytics/answer/11198161?hl=en)), it *could* probably realize that this was all bot traffic and exclude it from the standard reporting after all.

So I waited an ample time and checked the “Traffic Acquisition” report on 19 May 2025, 21:34 and all that traffic seems to be recorded. Misleading much?

![Traffic acquisition report in GA4 showing bot traffic](/uploads/traffic-acquisition-report-final-ga.png "Traffic acquisition report in GA4 showing bot traffic")

## Why the difference?

The answer lies in the way Plausible Analytics detects and excludes non-human traffic vs the way Google Analytics does. Here’s what happens:

### How does Plausible exclude non-human traffic?

At Plausible, we detect and automatically exclude bots (and are constantly evolving the detection systems) by:

* Blocking traffic based on the User-Agent header (*Google Analytics failed at this in this test*)
* Filtering out known referrer spam domains
* Blocking traffic originating from data centers. We exclude ~32,000 data center IP ranges (i.e. a lot of IP addresses) by default.
* Detecting and excluding unnatural traffic patterns (*Google Analytics failed at this in this test*)

It’s possible that some non-human visits slip through the cracks if the bots try really hard to make their way into the site by posing as real humans, but otherwise we take great care at maintaining accuracy.

### How does Google Analytics 4 exclude non-human traffic?

Google Analytics (GA4) also has mechanisms to filter out bot traffic, though the approach differs. Known bot and spider traffic is automatically excluded by default.

GA4 uses a combination of its own research and the industry-standard IAB “International Spiders & Bots” list to identify known bots, as mentioned in their [documentation](https://support.google.com/analytics/answer/9888366).

This means that GA4 will automatically drop hits it recognizes as coming from well-known crawlers (e.g. Googlebot, Bingbot) or other entries on the IAB bot list so they don’t appear in your reports.

GA4’s default filters do not automatically catch every conceivable bot or spam hit. For example, clever bots that masquerade as real browsers (not in the known list) or spam that uses headless browsers can still register in GA if they execute the tracking code like a normal visitor.

Google Analytics experts suggest how to detect and exclude bot traffic manually by, for example, excluding suspicious IPs or user agents. And then how to maintain it all by doing a regular cleanup, among other optimizations.

But that has many problems:

* One may not know in the first place that some of their traffic contains non-real traffic and they need to do something about it
* If they do know, they could make some mistakes in identifying it properly. There’s a difference in the way an analytics tool can block bots on a code-level versus what an end-user could comprehend and do.
* If they do the above properly, they need to be technically sound or look through the right resources to make the right adjustments.
* They need to maintain it and would end up always second-guessing what they’re seeing on their dashboards.

That’s why we keep it all automatic at Plausible, so our subscribers don’t have to waste a second figuring out any of such optimizations.

## Why’s it critical to exclude non-human traffic from your site stats?

Accurate analytics are essential for making smart decisions. When bots, crawlers, or scripted visits sneak into your reports, they distort the picture of what your users are actually doing. Here’s why it matters:

* Inflated pageviews: Bots can artificially boost your traffic numbers, making you think your site is more popular than it really is.
* Misleading engagement metrics: Bounce rates, session duration, and conversion rates all become unreliable when mixed with non-human traffic.
* Skewed A/B tests and experiments: If bots hit your variant pages, you may draw the wrong conclusions about what content or layout performs better.
* Wasted marketing spend: You might invest in the wrong channels or campaigns because of bot-driven spikes that look like real user interest.
* False sense of growth or success: Seeing traffic growth from bots can mask the reality that your actual audience is stagnant — or even shrinking.
* Polluted user behavior insights: Understanding what real users do on your site becomes much harder when noise from scripts and crawlers is in the mix.
* False conversions: Bots can accidentally (or deliberately) trigger conversion events — like submitting forms, reaching thank-you pages, or firing eCommerce purchase events. This can make it look like your campaigns are performing well when in reality, no real user completed the action.

Keeping your analytics clean isn’t about perfection — it’s about removing the obvious noise so you can focus on what matters: your real audience.

## Test-drive Plausible

As of January 2025, we had blocked about 2 billion bots from accessing sites and skewing stats of Plausible subscribers.

We are proud to have built a more accurate alternative to Google Analytics, not just in terms of detecting bot traffic but also in terms of recording traffic regardless of cookie consent banner declines, ad blockers blocking scripts, maintaining location accuracy, etc. –– while being privacy-friendly and well-accepted by the end-user. You can see a full comparison [here](https://plausible.io/most-accurate-web-analytics).

You can conduct your own tests like we did and don’t forget to share the results with us. Good day/night! ✌️