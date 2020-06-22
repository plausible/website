---
layout: post
title: Plausible is going open-source
description: Today I'm happy to announce that Plausible is open source with the
  code being available on Github.
slug: plausible-is-going-open-source
date: 2019-09-02T00:00:00.000Z
author: uku-taht
---
One of the main reasons I started Plausible was to provide a more transparent alternative to Google Analytics. I believe that people should be able to control and know about their data, instead of having it sold to the advertisers behind their back.

Today I'm happy to announce that [Plausible Analytics is open source](https://plausible.io/open-source-website-analytics) with the code being [available on Github](https://github.com/plausible/analytics). This repository includes all of the code powering [plausible.io](https://plausible.io) with nothing hidden.

Making the source open to the public is a crucial step to building a more transparent analytics platform. It proves that Plausible does not store any personal information or IP addresses, and that it doesn't track people across multiple websites like Google Analytics does.

### How open?

There's a lot of debate around what constitutes open-source vs free vs source-available software. My aim with Plausible is for the code to be as open as possible but I still want to charge for it and build a business around it. One option to achieve this is to license your product under the Apache 2.0 license with a Commons Clause. The Commons Clause just stops people from selling the software as-is to compete with the author.

This seems like a really obvious restriction if you're trying to build a sustainable business. On the other hand if you look at companies like Ghost, they have open-sourced their product completely under the MIT license with no restrictions whatsoever. I suppose the argument is that they own the brand and the distribution network, so it would be futile to compete with them selling the same product.

I chose to follow the example of Ghost here. Plausible is open-sourced under the most permissible MIT license, which basically states that you can do whatever you want with the code. I'm not really worried about the possibility of someone stealing business from me by just getting the code and selling it.

**Update**: [Plausible Analytics Self-Hosted solution](https://plausible.io/blog/self-hosted-web-analytics-beta) is now available.

It’s worth noting that for now, there's no explicit support for self-hosting Plausible. The project is still evolving quickly and maintaining a self-hosted solution would slow product development down considerably. I would love to offer a self-hosted solution in the future once the product and the business are more stable.

### What's next?

Please check out the [public roadmap and feedback board](https://plausible.io/roadmap) to see which features are planned in the near future.

I think it's also worth talking about ways to raise the standard of trust and transparency even more. No matter how open we are or how much effort we put into making the data anonymous, there are still no guarantees that analytics companies don't turn around and sell their data to advertisers.

To fix that, I would like for Plausible users to completely own their data in a way that makes it illegal for the company to use it for any purposes other than providing the analytics service. Our role would essentially be renting the processors and disk to you to run open-source software and to safely store data
that you own.

Do you know of any examples of this? What's the best way to enforce it? Would adding it to terms of service be enough? If you have knowledge or opinions on this topic, please reach out to me on [Twitter](https://twitter.com/ukutaht)
