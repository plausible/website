---
layout: post
title: Lessons from building and growing an open source SaaS
description: Here are some lessons learned from building and growing an open
  source SaaS startup in the highly competitive web analytics market.
slug: /building-open-source
date: 2020-12-17T11:09:07.750Z
author: marko-saric
image: /uploads/growing-open-source.png
image-alt: Building and growing an open source SaaS
---
Plausible Analytics is the first open source project I've been involved in as a developer and maintainer. And what a great journey it has been until now. 

Plausible Analytics is installed on thousands of sites, we've had contributions from more than 100 developers and we've gone from fewer than 500 GitHub stars in April this year to 4,600 at the time of writing. 

Here are some lessons learned from building and growing an open source SaaS startup in the highly competitive web analytics market.

1. Ordered list
{:toc}

## Open source is the antidote to surveillance capitalism

I've used open source products for years as a consumer. I'm writing this on a Linux operating system, I've been blogging on WordPress for more than a decade and pretty much my whole day online is spent in Firefox. 

Three amazing open source products that can comfortably stand against their top of the line proprietary competitors. 

I love what open source software stands for as the antidote to surveillance capitalism:

* Open source is software that you can trust
* Software that is ethical
* Software with more earnest goals, motives and principles other than profit making and shareholder value
* Software that tells you what it does upfront, direct and honest.
* Software that is open and transparent
* Software that you are a user of rather than a product of
* Software that is created by real people rather than faceless organizations
* Software that can be verified that it does what the creators say that it does

We need more of this type of software to improve the state of the web. We need more convenient and user-friendly alternatives to the products made by the adtech giants. So now I'm working full time on [an open source web analytics product](https://plausible.io/open-source-website-analytics). 

Using open source software as a consumer and creating open source as a maintainer are two different worlds, though. As a consumer, I pretty much saw no downsides. You can use it if you want, you have many choices, you don't even need to pay for it if you don't want to. 

I've read some horror stories in the past on how exhausting and thankless work it is for many maintainers. There are some downsides that most people working on proprietary products never have to think about at all. 

These are my lessons learned that I hope other people venturing into building open source projects with the intention to make a living from doing so will find useful.

## Copyleft licenses help protect the project and the community

The most popular open source license is MIT. GitHub helped popularize its use. Influential companies, including Google and Amazon, push back against many of the other licenses and there's a lot of misinformation online about what licenses stand for. 

Many people choose to use MIT because of these facts. Not because they specifically want a permissive license but because it is the most acceptable option. 

We did the same. My co-founder Uku didn't think about the license at all when he started building Plausible. He chose MIT because it's pretty much the "default".

As Plausible Analytics [started growing and getting more buzz](https://plausible.io/blog/startup-marketing), we started seeing some disadvantages of having a permissive open source license. It felt like we had a target on our back.

There are several cases we know of where companies took our code and created direct, proprietary competitors. 

There were also multiple cases of large cloud corporations wanting to take our code and resell it to their customers. They wanted us to help them build that integration without contributing back to our project in any shape or form.

You may say, of course, this is the way it was intended with a permissive license but this is not something too obvious at the outset. 

After being a part of an open source project for some nine months now, I now believe that the MIT license is bad for most customer facing open source projects. 

MIT is great if your project is a library, developer tool or a database and you'd like it to be used by as many projects and corporations as possible. 

But it's not so good for SaaS projects that produce a packaged product that goes to the end users directly. Some corporations are ready to take advantage of this free labor to make a profit from open source without caring about OSS.

We've since changed our license and we're now AGPL licensed. AGPL means that a corporation cannot take our code and launch a proprietary competitor. If they want to use our code to build a competing service, it needs to stay open source as well.

And just this simple fact gets the target off your back from companies who never intended to contribute to open source and are only interested in taking advantage of it.

So my recommendation to open source maintainers who want to make a living from open source is to think more carefully when choosing a permissive license.

Read more about licenses in: "[Why we're changing Plausible to the AGPL license](https://plausible.io/blog/open-source-licenses)".

## Develop a business model without relying on donations

Funding is a big topic in the world of open source. We're a two person team and are happy to say that we can now pay our rent thanks to the project we're working on. 

Our salaries are still below what we're used to on the job market but we've made massive progress over the last nine months in terms of sustainability. And it is so much sweeter to be able to make an income taking market share directly from Google Analytics with a project like Plausible Analytics.

We've been accepting donations for about six months now and as things stand, we've had six donations of $5 each. We're grateful to the six people who choose to donate.

At the same time, our cloud product has grown from $400 MRR in April this year to more than $8,500 MRR at the time of writing. It is clear that without us having people who are happy to pay for Plausible Analytics service in the cloud, Plausible Analytics and our self-hostable version wouldn't exist.

Many open source developers don't want and don't need funding. Big corporations fund some. Some developers work on open source as part of their job. Some contribute to open source in their spare time out of passion.

But it's not a secret that more resources going into open source will mean that more people will be able to spend more quality time focused on those projects, which would make those products better and more useful to more people. Then more open source software could better compete with proprietary products made by the adtech industry.

I admire open source projects that can make a living from donations but my experience over this year tells me that it's implausible to work for most projects.

You might get lucky and get backed by a large corporation such as Facebook or Google as they want to have a say in your project or want to have the publicity to help with recruitment but this is not the type of backing we are willing to put any effort into.

Becoming sustainable with voluntary donations from users of your product is a tough proposition. Some may not be able to afford to donate. It may not be an essential tool for them that's worth paying for. They may just be exploring, playing around and learning. And even to those who love and rely on your product, a donation might not be something many of them would do.

It's important to discuss that even Richard Stallman never intended the idea that open source software is a commodity that should be used for free and that it somehow magically appears rather than a person putting in the time and effort to make it happen. 

"Free" software is free as in freedom rather than being free of charge. Unfortunately, this branding damage was done a while ago. And the voluntary donation business model doesn't seem to help. And this hurts the prospects of open source software becoming a valid alternative to the big tech for the mainstream audience. 

It's something that will take more time to fix and better business models for open source are necessary. Easy and convenient experience in the cloud as a business model works well for us with a clear value exchange so I'd like to see more projects exploring this too.

Read more about the topic of open source business models in: "[How to pay your rent with your open source project](https://plausible.io/blog/open-source-funding)".

## Support should be mutual

This brings me to the self-hostable aspects of open source. The self-hosted offering is about giving back to the community. Think of it rather as a voluntary service for the public good.

We are happy to offer people the option to [self-host our web analytics product](https://plausible.io/self-hosted-web-analytics) and be in even better control of their experience. It is completely free (as in beer) to use.

Self-hosting does bring a large volume of support inquiries. This means that we need to be better at balancing our limited time between reactive tasks such as troubleshooting issues from self-hosters and proactive ones such as delivering new features and support to the customers that do support us.

To provide a better service and experience to people who actually pay our bills, we're making a change. 

There's no longer any guarantee that, we as creators of Plausible, will be able to help out with your self-hosting issues. We will read all messages and will respond to some messages too. If there’s a case where we’re aware of the problem and the solution, we will share it, but there is no guarantee that we will troubleshoot each self-hosting case as things depend on the individual setup.

If you want a nice, easy and convenient experience, and want to know that you're helping us make this project sustainable, do sign up for [our cloud version](https://plausible.io) where everything works out of the box. 

If you want to manage your own infrastructure, do use the self-hosted version but be prepared to troubleshoot your issues, [read our documentation](https://plausible.io/docs) or get community support in the forum.

The donations are an entirely voluntary way for self-hosters to contribute to the continuous development of the project. If you donate to Plausible Analytics as a self-hoster, you help us make Plausible sustainable. Donations are made on GitHub and are very appreciated. See [how you can become a sponsor of Plausible](https://github.com/sponsors/plausible).

We're hoping to see the user support for self-hosted analytics becomes more mutual. Our community of many self-hosters should actively take part in helping troubleshoot issues for new self-hosting users.

So if you can, please do contribute back to the self-hosted community with your solutions to issues. We encourage self-hosters to help answer questions and help people out in [our public forum on GitHub](https://github.com/plausible/analytics/discussions).

## Self-hosted analytics will become a twice a year, long term release 

Plausible Analytics in the cloud is pretty much updated daily with tweaks, fixes and additions. Plausible self-hosted is released less frequently and we never had a fixed schedule or made any promises about a schedule until now.

You can expect new versions of Plausible Self-Hosted to be released twice per year from now on. All the new features will be battle-tested first in the cloud on thousands of websites running Plausible Analytics before becoming a part of the self-hosted release. 

After speaking to some other maintainers of popular open source projects, it seems like a schedule that works well for everyone. 

Self-hosters would need to upgrade their setup less frequently which saves them time and reduces their workload. Same for us, we would need to cut a new self-hosted release less frequently and would be able to put more effort into creating a better release.

This means that any new feature that we announce and release on the cloud may take a bit longer to make its way to the self-hosted version. 

Think of it like the long term releases you may be familiar with in Debian, Ubuntu and other Linux distributions.

Their long-term releases are stable and sometimes lack the latest features, but you save the hassle of needing to upgrade your complex infrastructure too frequently and potentially face a breaking change.

## Things we couldn't do without open source

As you can see, Plausible is a young startup in a highly competitive market. It is not easy to grow, thrive or survive having to compete against giants such as Google and against a "free" product such as [Google Analytics](https://plausible.io/vs-google-analytics). 

In addition to that, there are also numerous other [Google Analytics alternatives](https://plausible.io/blog/google-analytics-alternatives) we are up against.

As an open-source company, we also had to spend way too much of our limited time thinking about things that our proprietary competitors never have even to spend a minute thinking about.

We're fortunate to be in a situation where things are going well and we can afford to take some time to consider these aspects and see how we can improve the experience of self-hosters too. And we're hoping this change will do that.

Building an open-source business is challenging, but it should not cloud our opinion of the whole open source community and its benefits. We both love open source and believe being open source is the best way to stay transparent in an industry full of companies not focused on privacy.

Here are some of the great benefits of being open source and why I recommend other startups go open source too:

* The fact that we have a community that we most probably couldn't have if we were not transparent and open source is precious.
* The fact that you can view our source code to verify whether our actions match our words is valuable and builds trust.
* The fact that we've had many valuable contributions such as those who helped us reduce the size of [our script](https://plausible.io/lightweight-web-analytics) or those who build integrations with other tools.
* The fact that many people are happy to contribute by writing about, recommending and spreading the word about Plausible Analytics. 

This is the real strength of open source software and what makes it valuable to the world of surveillance capitalism that we live in.

As relatively new maintainers of an open source project, it's not easy to know what to expect. 

But after this year, we are more aware of the potential issues and can communicate more clearly to help set the future expectations. 

That makes it fair to all, especially those who help us continue working on and putting our time on building and growing Plausible Analytics. Thanks!
