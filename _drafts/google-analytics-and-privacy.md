---
layout: post
title: 'Google Analytics & Privacy: Why it matters'
---

If you're running a website with Google Analytics installed, you may be wondering how it
affects the privacy of your website's visitors. There's a growing distrust towards the digital
advertising [oligopoly](https://www.investopedia.com/terms/o/oligopoly.asp) but what are the real issues besides calling out 'creepy' ads?
Let's discuss the wider ethical questions around personal data collection and digital targeting.

### Why is Google in the analytics business?

The biggest problem with online tracking is not that it's 'creepy'. The problem is
moving the whole advertising model from mass-broadcasting to individual targeting.

Let's be honest, the executives at Google don't care what websites I visit. They
care about making more money from advertising so their quarterly report looks good. Google has
found that tracking and targeting individuals (or 'serving relevant ads' in corporate speak)
results in more clicks which results in more revenue. As their ultimate goal is to
increase shareholder value, it follows that they need to track as much
data about web visitors as possible to be able to serve the most 'relevant ads'.

Targeted advertising creates a massive global demand for personal information that can be used for such targeting.
This means collecting your browsing history, measuring your engagement with content, tracking your
location at all times, inferring demographic information about you, etc.

This is why Google Analytics exists. It's also why Chrome, Gmail, Google Maps, and pretty much every other
free product by Google exists. The goal is to embed Google's free services in the infrastructure
of the web. This infrastructure can be used to collect as much personal data as possible to drive
advertising profits.

### Targeted advertisement is unethical

Google's track record of handling personal data has been
[absolutely dismal](https://en.wikipedia.org/wiki/Privacy_concerns_regarding_Google). Facebook is
even worse. Their online trackers are incredibly intrusive, making us feel like we're under
corporate surveillance at all times.

Besides the costs to our personal privacy, I'd say the much bigger scandal lies in how targeted
advertising affects society as a whole. Oligarchs across the world have weaponised
this technology to advance their agenda with absolutely no regard for democracy or the common good.

This is what the Cambridge Analytica scandal was about. It was basically a company built to use online
tracking and targeting to win political campaigns for the highest bidder. They've been incredibly
successful:

> It's all about understanding the motivations of the target audience and trying to understand at a very granular level why people might undertake a certain behaviour, whether that's joining a terrorist organisation or smoking cigarettes or eating fast food.

> [on Cambridge Analytica's services for the Trump campaign] We did all the research, all the data, all the analytics, all the targeting, we ran all the digital campaign, the television campaign and our data informed all the strategy.

> It has to happen without anyone thinking it’s propaganda, because the moment you think ‘that’s propaganda’ the next question is: ‘Who’s put that out?’

- Alexander Nix, Former CEO of Cambridge Analytica

Regardless of your own political views, it's hard to deny that targeted propaganda was a
**[crucial part of the success](https://semantiko.com/project-alamo/)** in the 2016 Trump
campaign as well as **[more than 100 other political campaigns across the world.](https://qz.com/1239762/cambridge-analytica-scandal-all-the-countries-where-scl-elections-claims-to-have-worked/)**

> We are thrilled that our revolutionary approach to data-driven communication has played such an integral part in President-elect Trump's extraordinary win

- Alexander Nix, Former CEO of Cambridge Analytica

If you have 10 minutes, I'd recommend watching Alexander Nix himself [explain how they use personal targeting](https://www.youtube.com/watch?v=n8Dd5aVXLCc) to push propaganda and suppress independent thought. If you have 2 hours, I'd recommend watching [The Great Hack](https://www.thegreathack.com/). Orwellian stuff.

 > I made Steve Bannon’s psychological warfare tool

- Christopher Wylie, Cambridge Analytica Whistleblower

### What does Google Analytics have to do with this?

Individual targeting is only as good as the data collected on individuals.
With GA used on more than 60% of all websites, Google can track your
journey through _most_ websites you visit. Based on this browsing
history and many other variables, they can build a profile on who you are and what your interests are so
advertisers can target you more effectively.

As developers, marketers, technologists, we shouldn't be complicit in this. Yes, most of us block
ourselves from being tracked individually, but what about the websites we run?

If we keep using Google Analytics on them, we're
effectively handing over our visitors' browsing habits to Google for free. Same goes
for any other third-party scripts and pixels that advertising companies want you to include on your website.

### How to control your analytics data

First of all, don't include any scripts or pixels by advertising companies like Google and Facebook.
That's the starting point.

If you care about measuring traffic to your website, use an open-source analytics tool that you trust.
There are a few on the market but I didn't find one that I really liked when I looked last year.
This is why I'm building an open-source alternative to Google Analytics at [plausible.io](https://plausible.io).

It's a stripped-down, lightweight version of what big analytics suites offer. My aim is to build a tool that
can give you an overview of traffic to your website without compromising your visitors' privacy. If Plausible
is too simplistic, I'd recommend checking out [this list](https://ethical.net/resources/?resource-category=analytics)
of alternatives to Google Analytics.
