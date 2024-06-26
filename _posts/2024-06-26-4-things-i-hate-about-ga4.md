---
layout: post
title: 4 things I hate about GA4
description: Google Analytics 4 is rapidly evolving in features, but failing in
  these core areas.
slug: things-i-hate-about-GA4
date: 2024-06-26T10:08:17.097Z
author: hricha-shandily
image: /uploads/GA4-dashboard.png
image-alt: 4 things I hate about GA4
---
Navigating a Google Analytics account gives me tiny shots of anxiety. It makes me think “What if I do something wrong?” “What if I end up changing a setting?” “How do I apply a metric to this report now?” The sheer number of features and customizations available are too much to take.

You are either an expert in using GA4 or you are not. There’s no in between. If I could afford it, I would have preferred a five-star concierge service for navigating GA insights. Just tell the person what I want to know today, and they would serve me the million-dollar answer.

But I did take a $500 course for learning GA4 (Thank you to my employer at the time, who paid for it). That brings me to the first thing I quite don’t like, understand, digest, and accept about GA.

1. Ordered list
{:toc}

## I. I had to spend hours in a course

Imagine having a tool so complex, you need to start training on the weekends. That too, in an era where user-friendliness is a core thing that’s taught to UI/UX designers.

Before starting the course, I was trying to figure out how to set up the whole account, configure the correct settings, build the right [funnels](https://plausible.io/blog/funnels-conversion-optimization), and eventually understand the reports the way they are meant to be understood.

Doing that with the endless sea of help articles, videos, and tutorials, was only making the process more complex. I felt I could easily miss out on something crucial or set up something wrong. The pressure is higher when you are doing it all from scratch and the team expects you to have a perfectly functioning dashboard soon.

So I took the course anyway. It did make some things easier for me, but some things even harder. I learnt the terminologies, their interconnectedness, what each setting means, etc. And the things that only made it harder were the following realizations.

### Overkill for the needs of most businesses(?)

I learnt how the standard reports are built in a way that you need to open a different one to learn different things. There’s no exact instant, one-stop overview. Plus: you won’t even see the report of your choice if you didn’t select a relevant “Business goal” while signing up.

Then, there are the other intricacies like understanding best practices of filtering, conversion modeling affecting data, and whatnot. As I dug deeper, I thought they designed it like this to give full customization capabilities to its users. But that didn’t change anything.

### GA and GTM can’t be separated

GA means nothing if you can’t operate Google Tag Manager, and that’s another course altogether. Every small thing I want to track, I need to first figure out if it’s a part of Google’s existing categories and naming conventions.

Then, configure it with multiple layers of settings and parameters in GTM, followed by ensuring that things are flowing fine in GA4 with DebugView, followed by enabling the feature in the UI, and then building custom reports from scratch.

### The consent banners aren’t telling the full story

Before getting deep into the subject, my impression was that consent banners were a standard practice that every online business needed to do. But the course showed me how GA4 has almost never been [privacy-friendly](https://plausible.io/blog/google-analytics-gdpr).

And that even after all the privacy-related commotion ‘round the globe, and a bunch of privacy-controlling measures and settings, it still falls in the legally gray zone. I discuss this in depth in the next point.

Getting back to the course: I still haven’t completed even 60% of it. The energy-loss that comes from having to command an unnecessarily complicated tool, takes away from the eagerness to use it in the first place.

If the tool was cutting-edge and solved a complex humanity problem, I wouldn’t have complained. But this is web analytics, and tools like [Plausible](https://plausible.io/vs-google-analytics) and Matomo have proved that web analytics doesn’t have to be rocket science. C’mon, GA – you had one job!

## II. They cleverly shift the onus of ensuring privacy in THEIR tool onto us

Ever since Austria set the ball rolling on digital privacy matters by declaring [Google Analytics illegal](https://plausible.io/blog/google-analytics-illegal), there has been so much speculation about what’s right and wrong from different perspectives – legal, ethical, marketers, businesses, and of course end-consumers.

GA4 solves the “[privacy problem](https://plausible.io/privacy-focused-web-analytics)” by providing a bunch of measures and settings that the users are supposed to figure out on their own. Let’s explore a few such:

### IP anonymization

IP addresses are considered Personally Identifiable Information (PII) and a business is not supposed to have access to them. By default, GA anonymizes IP addresses across the globe by changing the last digit of the address to zero when these addresses are sent to the GA4 servers in the US. So, city reports inside GA are inaccurate.

But the process looks different for the European Union. If a visitor from the EU browses your website, the data is first sent to EU servers where the IP addresses are anonymized before getting sent to the US servers.

But if you want to ensure complete privacy by anonymizing your customers’ IP addresses before sending them to GA4 servers – whether in the US or the [EU](https://plausible.io/blog/made-in-eu) – then you’ve got some extra work to do. The process to ensure this is broadly known as true IP anonymization with GTM’s server-side tagging.

It requires some advanced GTM knowledge and access to technical resources. Unless you use the “Redact visitor IP address” setting to always change all digits to zero, and not access geographical data at all. Another option is to turn off granular location collection inside GA4’s UI.

### Google Signals

Google Signals basically collects “ad personalization signals” if you use Google Ads in conjunction with your Google Analytics account. Such signals are collected by cross-device tracking of your customers and later matched with your audiences for [remarketing purposes](https://plausible.io/blog/paid-ads-cookieless-analytics).

If you want to use Google Signals with visitors’ consent, then you can programmatically manage Signals for certain regions by configuring some parameters in your Google Tag in GTM.

Another option is to completely turn it off. There are more nuances to this that can be configured, like just collecting demographic data through Signals while not doing remarketing in Google Ads.

### Google Consent Mode

The Consent mode is designed by Google to help recover lost data from rejected cookie banners. In a nutshell, if a visitor happens to reject the banner, it doesn’t stop the Google tag from loading, it just anonymizes visitor identifiers.

This data is used to [model conversions](https://support.google.com/google-ads/answer/10081327?sjid=1760157719947060479-AP) and user behavior. This directly affects “Conversion“, “Ad“, and “Exploration“ reports in GA4.

That is double trouble, because neither do you get accurate reports (since they are actually modeled by machine learning), and you continue to stay in a legally gray zone.

### Other things to take care of

To ensure absolute privacy-compliance, you have got to check with your region’s legal advisor and find out about acceptable [data retention periods](https://support.google.com/analytics/answer/7667196?hl=en), and change that setting within GA4.

Similarly, you need to constantly check if you have collected something by mistake that you shouldn’t have. For that, there are [data deletion](https://support.google.com/analytics/answer/9940393?hl=en#zippy=%2Cin-this-article) requests in GA4.

There are a bunch of more such settings. For eg. You can mark some events as NPA (non-personalised ads).

This list is long, and some settings are turned off by default, while you need to ensure about the others. It’s a whole task.

Moreover, Google Analytics has already faced a lot of scrutiny for cross-site tracking and user profiling for a long time. A major outcome of that has been the [phasing out of third-party cookies](https://plausible.io/blog/chrome-third-party-cookies), which is another thing you need to be careful about.

Did you know all this before reading this article? If not, you should probably get your privacy-ensuring settings checked by an expert to avoid any possible legal troubles.

**So, what should have GA done instead?**

"Privacy by design" is a principle that requires tools to proactively consider potential privacy concerns and incorporate automatic protections. This ensures that privacy is a built-in feature of the tool, freeing users from having to figure out and manage privacy complexities on their own.

While it's essential for businesses to have robust privacy policies and access to legal resources anyway, there is no argument for having to take the responsibility of ensuring privacy for a third-party tool.

Especially when it is known that your customers’ sensitive data is likely to be used for the practices of surveillance capitalism.

## III. The product is free because we become the suppliers of surveillance capitalism

I quote Dr. Shoshana Zuboff from her book, “The Age of Surveillance Capitalism” –

“Surveillance capitalism unilaterally claims human experience as free raw material for translation into behavioral data. Although some of these data are applied to product or service improvement, the rest are declared as a proprietary behavioral surplus, fed into advanced manufacturing processes known as “machine intelligence,” and fabricated into prediction products that anticipate what you will do now, soon, and later. ”

Using Google Analytics is more than just using Google Analytics. It is, unknowingly and involuntarily, enabling a vast system of surveillance capitalism, by putting customers’ data, privacy, and trust at risk.

Many business owners and marketers simply don’t know that, and they aren’t supposed to. This shouldn’t be an issue in the first place.

Regardless, steering away from this is extremely important not just from a business and [legal point of view](https://plausible.io/blog/legal-assessment-gdpr-eprivacy), but also from a societal and psychological well-being point of view.

## IV. The complexity isn’t a bug, it’s a feature

It’s an ever-evolving maze in there. And the GA4 docs that are supposed to help navigate it, are a victim of the tool’s own robustness.

Here are a few reasons I say this:

- They have their own terminologies that you gotta have a command on first. And they keep changing it every now and then. [Latest example](https://support.google.com/analytics/answer/9267568?hl=en).
- Multiple reports are hidden beneath layers of menus that aren’t titled in a straight-forward way. There is no way you can figure out or guess the meaning of each thing on your own.
- Setting up important stuff like events, [custom dimensions](https://plausible.io/blog/custom-dimensions-analytics), key events, etc. is complex. This is a significant hurdle for non-technical users, but also unnecessary and frustrating for technically-sound users.
- There have been many reported instances of reports being simply inaccessible, even after the exported source data showing that information had been collected.
- There are countless threads all over the internet from frustrated users about GA4’s issues on cardinality, thresholding, chart breakdowns, date-grouping, and whatnot.
- The UX is a downgrade from GA3, according to multiple power users.

When I work, I spend most of my energy tackling the toughest problems that directly affect my work. After solving those, I focus on executing the solutions. The tools I use should make the process smoother (that's why they are "tools"?) and not divert my energy from the main tasks.

So that’s about GA. Their product-market-fit is maaad. GA stands for web analytics, and web analytics is interchangeable for GA. But since they refuse to change, the privacy-caring alternatives are slowly and steadily taking the wheel.

---

Do you genuinely enjoy using GA4? If yes, I want to know your perspective, and what is it that you do differently to make it all worth it. Write in at [hricha@plausible.io](mailto:hricha@plausible.io).