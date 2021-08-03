---
layout: post
title: How we scaled customer support for 4k+ subscribers and 1k+ monthly trials
  without adding dedicated personnel
description: How we scaled our two-person bootstrapped startup to support 4k+
  subscribers, 1k+ trials per month and a growing open source community before
  looking for any help.
slug: /scaling-customer-support
date: 2021-08-03T14:52:03.158Z
author: marko-saric
image: /uploads/scaling-customer-support.png
image-alt: Scaling customer support as a bootstrapped SaaS
---
We recently started onboarding a new team member to help us with customer support. This is an excellent time to summarize how we scaled our two-person bootstrapped startup to support 4,000+ subscribers, 1,000+ trials per month and a growing open source community before looking for any help.

We've grown from 400 MRR to 33,000 MRR and from less than 100 subscribers to more than 4,000 since April 2020. With all this success also comes a growing volume of support requests. I was a bit worried about our ability to cope with customer support without dedicated full-time customer support personnel but we manage it. Here's a look at things we did to make it to this scale

1. Ordered list
{:toc}

## Scaling customer support without degrading the experience

The vital fact to stress is that we've achieved this without degrading the customer support experience. People still get fast responses from real humans and people get a personal experience too.

We don't use any of the "best practices" for scaling customer support either:

* We don't use any no-reply email addresses
* We don't use any automated AI chat bots that engage people
* There are no endless waiting times to hear back from us. Most people writing during working hours European time hear back within minutes
* We keep all of our contact details easy to find
* We allow people to contact us wherever they prefer, be it via email, GitHub or social media
* We don't do any prioritization according to the subscription tier or customer lifetime value. All responses are pretty much first come, first serve

## The importance of customer support 

You cannot ignore customer support as a bootstrapped startup. Customer support experience is a significant part of the overall brand experience. Some people may decide not to go with your service if they get poor support. Some may be so annoyed they talk about it on social media and on review sites.

A fast and personal customer support experience can make people share positive stories about your brand on social media. And a brand like Plausible that [rejects to pay Google and Facebook to do the marketing for us](https://plausible.io/blog/best-marketing-practices) relies on word of mouth from people that are enjoying our product to help us spread the message.

These are the people who pay our bills and people without whom Plausible wouldn't exist. Being able to interact with them, accommodate them and make their experience better is very valuable. Every team member, be it a founder, a developer or a marketer should get regular experience with customer support to better understand the product they're working on and the customer they're serving.

While at university, I had a part-time job at an online gaming company doing customer support. This was useful in giving me some real-world experience, providing some cash for my student life and taught me an important lesson.

People that answer customer support questions understand your business the best. They hear from prospects and customers all the time. They know what the frequently requested features are, what annoying bugs people complain about, what competing brands people compare the product against and so on. 

This means that customer support needs to be in very close communication with the rest of the business if you want to provide an outstanding product and user-friendly experience. Essential insights that should be prioritized will come from the customer support team.

## How we deal with customer support

As in every early-stage startup, any role is fluid and you do what needs to be done. In Plausible, customer support is my responsibility alongside other marketing and communication tasks. 

We allow people to contact us on any platform where we're active. People reach out to us via email, via GitHub, on Twitter and Mastodon too. I aim to answer all emails and messages as soon as possible and pretty much every day I can finish at inbox zero before logging off for the day. 

Getting back to people quickly is probably the most important thing you can do when it comes to customer service. We frequently hear back from people being delighted at how quickly they get responses to their questions and can get on with their Plausible experience. 

I respond to most of the messages but sometimes if the question is too technical so that I don't know how to answer it, I get my co-founder Uku involved to answer those questions better. 

We try to offer a great service to all subscribers and not only to important prospects. There are no sales calls and no wining and dining as part of the onboarding process.

I have had to politely decline one request for a full day of meetings with one company that was exploring Plausible. We exchanged a few emails, had a quick call and then updated our publicly available documents to make sure all their questions were answered so anyone else could get those answers too.

This may be disappointing to some that expect us to have a sales team that can give them hours of our time but the only way we can manage it is for everyone to be treated fairly and equally. 

## All the fancy tools we use for customer support

We use pretty much no specialized tools to help us deal with customer support. This is what we do use:

* We switched to [HEY for Work](https://www.hey.com/work/) a few months ago to make the process easier and faster when communicating with each other. Before, we were forwarding emails or using messaging tools to discuss specific cases, while HEY allows us to talk privately within an email thread. It saves some time and makes the process smoother and easier to deal with.

* HEY makes other things easier for me. I keep all the emails to respond to in the "Reply Later" section and I keep all the emails for which I require some information before I can respond in "Set Aside". HEY also has this great "Focus & Reply" functionality that allows me to reply to all my "Reply Later" emails without distraction.

* I use a clipboard manager on my Linux machine to track the canned responses to the most frequently asked questions. I have about 50 on my list. This makes it simple to copy the answer and paste it into an email reply. Then, after a moment of work on personalizing the email to the relevant situation, it is ready to be sent. 

* I use TweetDeck to deal with all the incoming mentions and other messages on Twitter where we have a growing audience. I have several columns in there including one for our mentions, one for direct messages and one that searches for people talking about Plausible without directly tagging us. TweetDeck allows me to get a distraction-free experience in which I can hide any likes and retweets.

* One trick I use is to search Twitter for people talking about Plausible without @ mentioning us. This way I find people that say Plausible Analytics, plausible.io or share our posts. I can then interact with them. I would miss out on these tweets if I just looked at our notifications.

* We have a simple, self-hosted CRM called [Kaffy](https://aesmail.github.io/kaffy/) that gives us the basic info about a customer such as when the account was created, the status of the account, the email used to register and sites added to the account. This helps troubleshoot specific questions.

* We also have a self-hosted [Sentry](https://sentry.io) instance that allows people to leave user feedback in app if they encounter any bugs or errors. We review that feedback and get back to people that need help.

* I also frequently use [Paddle](https://paddle.com/), our payment processor, their CRM and their customer support team for specific queries about billing, invoicing and payments. We let Paddle deal with all of the payment side of things and it is beneficial to have them deal with card issues and similar. 

## Common customer support topics become a priority 

After seeing a growth in support questions, our first step was to look for ways to be more efficient. We're self-funded and without any outside investment so we also need to be extra frugal and focused on sustainability. 

Suppose we can solve a common issue by improving our product or by better explaining a functionality. In that case, we choose that option rather than ignore the problem and simply throw money at it by hiring people to deal with support.

When I notice a similar question pop up often, we act on it by fixing things and improving the app itself. If several people struggle with something, it becomes our development priority.

We may communicate about it better in the app, we may link to the docs or even improve the feature to avoid the same issue in the future.

This also leads us to Plausible development being focused on fast, simple to use and easy to understand solutions. If we can release a feature that is obvious and it just works, it will lead to a higher level of customer satisfaction and no difference in customer support volume.

The product itself being minimal and easy to use makes it possible for us to serve thousands of customers and trials without being overwhelmed with customer support. So acting on feedback and improving things is one of the principles behind the development of Plausible.

## An up-to-date and detailed documentation is a must

Having a documentation has dramatically helped us reduce the number of questions.

[Our docs](https://plausible.io/docs) are the fastest and simplest way for people to get answers to their questions. I put a lot of effort into our docs, spend a lot of time on them and make sure to keep them up to date with any new questions we are getting. 

We use [Docusaurus](https://docusaurus.io/) for our docs and the [Algolia DocSearch](https://www.algolia.com/ref/docsearch) to allow people an easy way to search the docs and find answers.

Having docs also gives me easy answers that I can copy/paste into emails if someone doesn't check the docs. I also often link to the docs when we get some questions already answered in the docs.

And when hearing from people, so many have told us how useful they found the documentation. I never understood the value of documentation until I started working on the Plausible documentation. Now I feel it’s a vital part of customer support and recommend it to every startup.

## Link prominently to the docs and make them easy to find

What's the point of putting so much effort into the documentation if you're not going to make it very easy to discover?

We prominently share the link to the docs in the top menu for our logged in users and we also place a link to the docs on the top of our “Contact” page:

> Our Documentation is a great place for most answers. We put a lot of effort into making our documentation be as detailed and as up to date as possible so you can quickly find answers to any question you might have. Can’t find what you're looking for in the documentation? Please do contact us using the email address below. 

## Frequently asked questions on the contact page

Some frequently asked questions with brief responses are also placed on [our contact page](https://plausible.io/contact). If we get a specific question several times, I add the quick answer on the contact page.

It often happens that when I add a new answer to the FAQ section on the contact page, we pretty much never hear about that question again.

## Pick the right technology 

One of the significant decisions Uku made and helped us scale was to pick the right technology. Over a year ago, our dashboard started getting slow even for sites with tens of thousands of visitors so [we switched to ClickHouse as the database](https://plausible.io/blog/may-2020-recap). That has enabled us to grow to where we are now. 

[ClickHouse](https://clickhouse.tech/) runs crazy fast, we're counting more than half a billion pageviews per month and we're serving sites with tens of millions of monthly page views (even one site with 150 million monthly page views) without any issues. Plausible loads faster for a site with tens of millions of visitors than Google Analytics loads for a site with hundreds of visitors.

And our dashboard being fast-loading and accessible at any time to all of our users is a key element that reduces the need to get in touch with us. 

We also keep a public [status page](https://plausible.io/status) with any downtime or scheduled downtime clearly visible which is another reason people have less need to reach out to us.

## Be flexible in things you work on

The tasks I spend my time on over the last eight months or so since we got all this traction have completely changed. 

When I joined Plausible as a co-founder, I spent 90% of my time writing blog posts and doing marketing outreach trying to get people to talk to us. Now I spend 90% of my time on community management, public relations and customer support talking to people that reach out to us.

At first, I wasn't sure if it was good to reduce the amount of time I spend on proactive marketing activities and spend that time on the more reactive tasks. Now I see it as a natural part of the journey. So be flexible and understand that this is normal and your role may change as you progress.

The early work was focused on increasing brand awareness and attracting people to try Plausible. Now that so many people are showing interest, we better treat them nicely and give them a great experience to stick with us.

People who try Plausible and have a great and valuable experience transitioning from Google Analytics help drive word of mouth and proactive marketing buzz. I can always get back to doing more marketing, when we have customer support in place.

## Self-hosted support should be mutual

Plausible is [a fully open source product](https://plausible.io/open-source-website-analytics). We have [a self-hosted offering](https://plausible.io/self-hosted-web-analytics) which is about giving back to the community. It's completely free as in beer to use and it’s not some inferior product with “light” features. You get the same dashboard using our cloud product as you do self-hosting it.

Self-hosting does bring a large volume of support inquiries. And pretty much all of them are highly technical, as managing your server infrastructure is no easy feat. 

Early on, we tried to deal with self-hosting inquiries in the same way as inquiries from our paying subscribers but that turned out to be an impossible task as each question depended on the individual setup.

We've since [set the expectations straight](https://plausible.io/blog/building-open-source) and made self-hosted community support only. To provide a better service and experience to people who pay our bills and make Plausible possible, we no longer guarantee that we will help out with self-hosting issues. We will read all messages and may respond to some messages but expectations are clear. 

If you want a simple, easy and convenient experience, and want to know that you’re helping us make this project sustainable, do sign up for our cloud version where everything works out of the box.

If you want to manage your own infrastructure, do use the self-hosted version but be prepared to troubleshoot your issues, read our documentation or get community support in the forum.

## Being able to disconnect and get some time off

Until now, there's never been more work than we could handle for a sustained period of time. There have been some crazy days or weeks but it comes with the territory of being a fast-growing startup. Our current setup suffers if one of us goes on holiday and cannot check emails at all. 

Since I've joined Plausible in March 2020, I have pretty much looked at our customer support inbox every single day including most weekends. In my previous jobs, I used to take two weeks off and put an out of office message without worrying about anything. 

That is a bit more challenging in a bootstrapped startup and we're looking to get some help with this. Summer 2020 was a bit easier to skip as we were in full-on lockdown due to the pandemic but we're hoping to get some time off this summer to recharge. This is one of the reasons why we recently started onboarding Robert to help us with customer support among other things.

Robert is a developer so the idea is for him to also help on the development side of things. Many of our custom support inquiries are very technical in nature so it really helps to be tech-savvy when answering the questions. 

Short term, after few weeks of training, Robert can help us offload some customer support queries so we can take some time off this summer without being glued to our screens all the time.

## What other steps could we take and what could we get better at?

We have several options open to us in the future. We may not use them but it is nice to know that there are solutions in case customer support becomes difficult to handle:

* The obvious one would be to funnel all the customer support queries into one place. We could either decide to use a tool that allows us to deal with email, social media and GitHub in one place or we could simply say no guarantee for timely responses to questions in social media, only via email. This would help not spread us too thin.

* We could also introduce customer support office hours and be transparent about them. I've noticed companies setting up autoresponder saying that you can expect responses during working hours on working days only. Right now we respond at any time be it in the evening or the weekend. It would be nice to set some more realistic expectations so people contacting us know that we may not respond on the weekends.

* A large percentage of our support questions are from the people just starting out. The questions are normally about the integration of our snippet into their site. In the line of "I just inserted your and visited my site but my visit doesn't show in the dashboard". These are routine support questions that require a bit of technical expertise viewing site source or using the browser console to answer. We're looking to help people troubleshoot this on their own.

* We also often hear questions about invoices. In the line of "I cannot find my invoice from July last year, can you please resend it?". We plan to create a billing section within our account settings that allow people to view and download their historical invoices at any time.

* We get a fair number of feature requests. Until now, I have tried to contact them again after the feature has been completed but haven't really followed through 100%. It could be nice to find a simple way to categorize feature requests so we can easily contact them all after the feature they asked for is live on the platform.

Growing your brand to get more social media mentions, more buzz and signups, also leads to more emails and questions, so think about doing customer support more efficiently and not getting too overwhelmed. Good luck!