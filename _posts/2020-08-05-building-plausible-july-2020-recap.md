---
layout: post
title: "Building Plausible: July 2020 recap"
description: "This last month I’ve been able to get into a nice groove with
  development.  We added a couple of new metrics that should help customers
  understand their traffic better. "
slug: july-2020-recap
date: 2020-08-05T09:22:35.693Z
author: uku-taht
---
This last month I’ve been able to get into a nice groove with development.  We added a couple of new metrics that should help customers understand their traffic better. 

* 🚀 *Added visit duration metric*.
* 💰 *More detailed referrer drilldown*
* 🤖 *Launched Github Sponsor page and community forum*
* 💵 *MRR: $2750 (+46%)*
* 👩 *69k visitors (+151%)*: Marko hit the Jackpot again and hit the front page of HackerNews with an article on  [How to pay your rent with your open source project](https://plausible.io/blog/open-source-funding).  [See our full stats for June](https://plausible.io/plausible.io?period=custom&from=2020-06-01&to=2020-06-30) .

To be completely honest, I expected our growth to slow down quite a bit after the big traffic spikes in April and May. We did have a small dip in signups in June, but in July we signed up more trial users than any previous month.

I’m also glad to see more people engage and contribute to the Github repo.  We want to keep the issues tab strictly for bug reports and feature requests. For people who are struggling with the self-hosted setup or who want to discuss topics that are not strictly features or bugs, we opened a new [Discourse forum](https://plausible.discourse.group/).

Now, let’s take a look at the features I’ve been working on.

### Visit duration

Showing average visit duration was one our most requested features. We now show overall visit duration on the top of the dashboard and it’s also broken down by source / referrer when you click ‘More’ in the traffic sources report.

I think overall visit duration isn’t all that useful if you don’t have anything to compare it with. It’s much more interesting to see visit duration broken down by referrer. Combined with bounce rate, it gives you a really good idea of the quality of traffic you get from different sources.

For our site, Reddit sends pretty bad quality traffic. 82% of visitors bounce and the average visit is only 47 seconds. Compare that with people coming from Google: 41% bounce rate and 3m04s average duration. Clearly people who search for an analytics solution are more motivated to stay on the site.

Many analytics tools also show pageviews per session which is a similar metric to visit duration. In a call with Marko I floated the idea of rolling bounce rate, visit duration and pageviews per session into one metric called ‘enagement score’ or something like that. I think it would be interesting but I don’t want to deviate from industry standard metrics too much for now.

### Drilldowns

The other feature I built is more detailed referrer source drilldowns. Instead of just showing the different URLs from one source, we now show the whole dashboard filtered to one source. For example, [click here](https://plausible.io/plausible.io?period=month&date=2020-07-01&source=indiehackers.com) to see traffic to our landing page from IndieHackers.

This feature is useful to see traffic from one source graphed over time. Additionally, you can find which pages people land on and even the countries and device information for a specific traffic source.

I love this feature because it adds an interesting way to slice your data without overcomplicating the interface. This is our philosophy with all future developments: keep adding depth to the dashboard without sacrificing the simplicity of the default view.

### What’s next?

In August I’m going to take the drilldown view a bit further and also add page drilldowns. This way you can see traffic to one page over time and which sources are referring traffic to that page. This is another highly requested feature that we feel would really help us understand our own site traffic.

Beyond page drilldowns, here’s what’s on our roadmap currently:
* UX improvement to go to website settings from the dashboard
* Hash mode for SPAs
* Add metadata to custom events
* Full UTM tag support

I definitely won’t get to all of these in August, but that’s what we have coming up next.
