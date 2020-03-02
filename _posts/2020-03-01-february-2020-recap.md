---
layout: post
title: 'Building Plausible: February 2020 recap'
---

As promised, here's another monthly update on building Plausible. February was a really good month:

* 🚀 **Shipped custom domains:** You can now run plausible analytics through your own custom domain. [More info](https://feedback.plausible.io/10)
* 🚀 **Shipped tweet referrals:** Using the Twitter API to show the actual tweets driving traffic instead of useless `t.co` links. [Example on the live demo](https://plausible.io/plausible.io/referrers/Twitter?period=month&date=2020-02-01)
* 🚀 **New look for the dashboard:** Updated the look and feel of the dashboard to make the stats more readable
* 💵 **MRR: $403 (+14%):** Converted 8 new paying users
* 👩 **1.5k visitors (-13%):** Mostly passive traffic this month, I didn't really focus on promotion

January was a difficult month because I had unusually high churn. Luckily things picked up in February and I managed to grow revenue by $48 month on month. It's not a massive number, but at least the needle is moving in the right direction.

2020 has been all about product development so far. I feel good about shipping some big features that I've wanted to build for
a long time. I still have some really cool stuff in the works, but I think it's time to focus more on the business side of things.

### Annual billing

In the last month I got some feedback that has got me thinking deeply about pricing Plausible. First, I've been asked to include
an annual billing option by a number of people now. This seems like a no-brainer so it's definitely coming down the road.

A potential customer was also concerned about whether Plausible would be around in the years to come. It's understandable since the product
and the content around it has the vibe of a very early-stage project. The website and the communications essentially haven't
changed since I launched the beta early last year.

In addition to changing the website content and communication, I think an annual billing option would help alleviate some
of the concerns around the longevity of the project. A yearly commitment clearly communicates that I plan to support the
customer long-term.

### Annual billing as the only option?

At the moment, Plausible does compete with it's main competitors on price. It's the cheapest option from other similar services.
However, this creates a problem for me: high transaction fees.

If you're not aware, payment processors charge a flat flee plus a percentage on each transaction. Effectively this means that the lower
the transaction amount, the higher the fees are proportionally. At the moment, I lose about 25% of my revenue to transaction fees
because the average transaction is so small.

Since analytics tends to be a service that people commit to using for a long time, I'd like to experiment with offering _only_ annual
plans to new customers at a discount (existing customers would get an option between monthly and annual).

This would make Plausible even more competitive on price, lower the transaction fees, and reduce churn. However, there are concerns:

* How many potential customers would I alienate by not offering a monthly billing option?
* Is it worth competing on price in the first place? Another way to lower transaction fees is to keep billing monthly and raise prices

There's no way to know, and this is why I'm approaching this idea as an experiment.

### Plans for March

I'm really excited about next month for two reasons. First, I've been working on making the basic stats in Plausible work without
using any cookies. Instead of using cookies, I'm experimenting with counting unique hashes whose input
is IP address + User agent. Unique visitor counting and bounce rate will probably lose some accuracy, but I think the benefits outweigh
the drawbacks by a mile. I'm hopeful that I can get this update rolled out in March.

Second, I will be joined by a content marketer who's going to help me grow the business. I've been looking for a partner on Plausible
since the very beginning of the project. I'm super happy I've found someone whose values are very much aligned with the spirit of what I'm trying to accomplish.

I'm optimistic about where things are going with Plausible. The product is getting to place where I want it to be and I can't wait to work on growth with someone who specializes in marketing.
