---
layout: post
title: Open source licensing and why we're changing Plausible to the AGPL license
description: We're changing our license as we've become aware that there are
  risks associated with permissive open source licenses that corporations that
  don't care about open source are happy to take advantage of.
slug: open-source-licenses
date: 2020-10-12T12:45:17.338Z
author: marko-saric
---
Plausible Analytics is a software as a service open source web analytics project. With the [increase in popularity](https://plausible.io/blog/startup-marketing) of Plausible in recent months, we've become aware that there are risks associated with permissive open source licenses that corporations that don't care about open source are happy to take advantage of.

So we're making a change to our license. This change doesn't affect anyone subscribing to the Plausible Analytics Cloud and anyone who's running Plausible Analytics Self-Hosted on their server. Everything stays the same. 

The change will affect corporations that want to take our code and use it to create and sell proprietary tools that directly compete with us. Let's look at the details.

## Risks associated with permissive open source licenses

It's the first time the two of us are involved in building and growing an open source project. And there are some things we didn't consider when we chose the license. 

Here are a couple of events that made us aware of the risks with a permissive open source license: 

* There's been at least one case where a corporation has taken parts of our code, made it closed source and started selling it as a direct competitor

* We've had approaches from large corporations that want us to help them so they can sell Plausible Self-Hosted to their tens of thousands of clients without wanting to contribute anything to our project. They offer publicity in return

These corporations use Google Analytics to track their users, have Facebook pixels to target the same users with advertising across the web and so on. Everything [we stand against](https://plausible.io/about).

Their motives don't seem to be to make the web more privacy-friendly and reduce the dominance of Google. It seems purely a business opportunity to make money from open source.	

## Choosing an open source license for the cloud

We're trying to [make open source sustainable](https://plausible.io/blog/open-source-funding) by having people find value and pay for open source software without needing donations from the big tech.

It's tough to become sustainable providing open source software competing with a free product from Google, and it makes it even tougher when providing our software with zero strings attached to the corporations that want to compete with us by selling our own software.

So we want a "don't be evil" license and here's what we are trying to accomplish with it:

* We want to prevent corporations from taking our code and using it as part of their closed-source proprietary products

* We want to prevent corporations from offering Plausible as a service without contributing to the open source project

* We want to prevent corporations from confusing people and making them think that the service they sell is in any shape or form approved by the original team

And we don't want this to in any way impact the actual use case Plausible is built for. A completely open source and self-hostable web analytics tool that helps people de-Googlify their sites and respect the privacy of their visitors.

## Plausible is now AGPLv3 licensed 

So how do we accomplish all that? We do it by changing our license. Plausible Analytics has now changed the license from the MIT to a newer licensing scheme called GNU General Public License V3 (AGPLv3). Plausible version can be [found here](https://github.com/plausible/analytics/blob/master/LICENSE.md).

This change makes no difference to any of you who subscribe to Plausible Cloud or who self-host Plausible, but it may upset a few corporations who tried to use our software to directly compete with us without contributing back. 

AGPL is a license Google has a problem with as they're not prepared to divulge their closed source code. Google is opposed to the AGPL and [state](https://opensource.google/docs/using/agpl-policy/): "Code licensed under the GNU Affero General Public License (AGPL) MUST NOT be used at Google".

The goal of the AGPL license is to maximize user freedom and to encourage companies to contribute to open source. We're a user facing, standalone application. We're not a library or a piece of a bigger project. We're not looking for Google's donations so we're happy to be AGPL-licensed. It is the right license for Plausible Analytics. 

## What is an open source license?

Software licenses are legal and binding contracts between the producers of the software and the users of the software governing the use and redistribution of said software.

Every piece of software that you use has a license. Majority of it is proprietary and closed source. This means that it's a black box. Nobody can look into it to verify what's happening behind the scenes.

[Open source software](https://plausible.io/open-source-website-analytics) is fully transparent. The source code and the way open source software is built is available and accessible to the public. Anyone can view, review and inspect the code to understand how it works and to verify whether the actions match with the words. This is essential in the market of [privacy focused web analytics](https://plausible.io/privacy-focused-web-analytics). 

Corporations and proprietary software cannot always be trusted when personal data is in question. The only way to prove your trust is to allow the public and the experts to look into your code and verify that you practice what you preach. It is this transparency and openness that means that open source products can be more trustworthy than proprietary products.

Here's a closer look at the open source licenses, how they compare and why we chose the AGPL license.

## What is the MIT license? 

> Permissive license: "Do whatever you want with this, just don't sue me"

[The MIT license](https://opensource.org/licenses/MIT) is a permissive license. It is extremely short. This is the license we started with.

### What are the restrictions with the MIT license?

There are none. Corporations can use MIT licensed software any way they want. They can take your open source software and build closed-source and commercial products based on it. They have no legal reasons to contribute back to the open source.

### What are the benefits of the MIT license?

The benefit of this is that anyone can use your software for any purpose whatsoever so that could open your software up for getting used by more corporations. 

One famous case is Apple taking BSD (which was licensed with a permissive license) and creating OSX based on it. They were not able to do that with Linux as Linux was not licensed with an MIT-like license. 

This is great if you only care about the spread of your code, but not so great if you'd like to encourage more companies to contribute back to the world of open source. But there's a license for that too.

## What is the GNU GPLv3 license?

> Copyleft license: "If you make a derivative work of this, and distribute it to others then you have to provide the source code under this license"

[The GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) was authored by Richard Stallman and published in 1989. It is the most popular license. Some of the largest open source projects such as Linux and WordPress are GPL-licensed.

### What are the restrictions with GPL?

GPL license helps minimize the possibility that corporations can take advantage and profit from open source software without contributing back to the project and the open source. It basically says that as we open sourced our code so should you too so everyone can benefit from it.

### What's the issue with the GPL license? 

The problem with the GPL license is that it didn't imagine cloud computing and how the cloud would come to dominate the world of software. Cloud companies download open source software, modify it, run it on their servers and resell it as a service.

They're not actually "distributing" the software because users never have the software installed on their computers. It means that cloud corporations have no obligations to contribute their modifications back to the open source community. 

And this is against the spirit of free and open source software. So there's a license that considers cloud computing too.

### What is GNU AGPLv3?

> Copyleft license: "If you make a derivative work of this, and distribute it or run it as a service on a server to others then you have to provide the source code under this license"

In the early 2000s, Stallman and others tried to close this cloud computing loophole and protect open source from this abuse by creating a new license. The [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html) (AGPL) was born. 

### What are the benefits of the AGPLv3?

The AGLP license is identical to the original GPL license with the only additional term being to allow users who interact with the licensed software over a network to receive the source for that program. 

AGPL is designed to ensure corporations contribute back to the open source community even when running the software as a service in the cloud.

If you used AGPL-licensed code in your web service in the cloud, you are required to open source it. It basically prevents corporations that never had any intention to contribute to open source from profiting from the open source work.

It explicitly prohibits corporations from parasitically competing with an open source project. They won't be able to take the code, make changes to it and sell it as a competing product without contributing those changes back to the original project.

Here's that extra paragraph: 

> "If you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there".

### What are the restrictions with the AGPLv3?

* A corporation needs to be clear and provide a prominent mention and link to the original project so people that are considering to use their version of software can be aware of the original source

* If a corporation modifies the original software, they need to open source and publish their modifications by for instance contributing back to the original project

So how can a corporation commercialize a FOSS project without open sourcing their modified code? They can purchase a commercial license to remove the copyleft restrictions and in that way support the original project.

### Free Software Foundation recommends the AGPLv3 license for projects in the cloud

Free Software Foundation and the GNU project [state](https://www.gnu.org/licenses/licenses.html): 

> "We recommend that people consider using the GNU AGPL for any software which will commonly be run over a network". 

> "If it is likely that others will make improved versions of your program to run on servers and not distribute their versions to anyone else, and you're concerned that this will put your released version at a disadvantage, we recommend the GNU Affero General Public License (AGPL). The AGPL's terms are almost identical to the GPL's; the sole substantive difference is that it has an extra condition to ensure that people who use the software over a network will be able to get the source code for it."

This seems the exact license for the Plausible Analytics use case. And Google is opposed to it. So we take AGPL for the win!