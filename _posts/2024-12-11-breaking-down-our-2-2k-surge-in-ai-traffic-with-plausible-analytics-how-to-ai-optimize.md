---
layout: post
title: Breaking down our 2.2K% surge in AI traffic with Plausible Analytics
  (+how to AI-optimize)
description: AI is the new way people search for stuff, and reach relevant
  websites. What should you do to catch up?
slug: /ai-referral-traffic-and-optimization
date: 2024-12-11T15:50:31.760Z
author: hricha-shandily
image: /uploads/ai-traffic-growth-in-plausible-in-2024.jpg
image-alt: Plausible dashboard with AI segmented traffic
---
In 2024, the Plausible website saw a ~2,200% increase in referral traffic from four AI search engines: ChatGPT, Perplexity, Claude, and Phind (refer to the screenshot above). These numbers were in the 100's in 2023. 

AI has officially taken over the way we search for things on our minds and get answers. Earlier, the AI models used to have a knowledge cutoff date with no internet access and had limited use cases. Eventually, the information became more up-to-date and transformed the way AI chats were used.

Similarly, AI has started citing its sources now and started sending traffic to websites. Many businesses and individuals are curious about how they can start appearing or being mentioned more in the answers given by AI – a so-called “AI optimization” or “AI search optimization.”

The need seems to be somewhat more urgent given the lower click through rates to websites from Google SERPs because of Google AI overviews. Gartner [says](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents) search engine use will drop by about 25% by 2026,  because of AI chatbots and other virtual assistants.

Coming back to our traffic surge from AI channels, we did not exactly apply any “AI search optimization” techniques but something seems to have worked well for us. We will analyze this traffic in the Plausible dashboard to figure out what that is.

While we are at it, we did figure out some AI optimization “techniques” that are worth noting. Let’s go.

1. Ordered list
{:toc}

## Analyzing Plausible’s AI search traffic boost in 2024

AI traffic can be isolated using the [Top Sources report](https://plausible.io/docs/top-referrers) (click on any source to filter the dashboard by it) or by straight away using the Filter button on the dashboard. We used the AI search engines we could identify from our list of Referrer URLs in the Filter modal:

![filter by source](/uploads/ai-traffic-filters.jpg "filter by source")

### Figuring out where AI chats mention Plausible and send traffic

We have a pre-made Entry Pages report in Plausible. After filtering the dashboard with only AI traffic, we looked at this report to figure out where such people entered our site from.

This would directly correlate with what subject was being discussed in those AI chats before the visitor came to Plausible. Here’s the screenshot of our top entry pages from AI channels:

![Where AI referred traffic enters the site from ](/uploads/entry-pages-from-ai.jpg "Where AI referred traffic enters the site from ")

The clear winner is our homepage and from our SEO data, support chats, and social media mentions –– we know that Plausible is usually mentioned in the discussions related to these topics:

* Privacy-friendly analytics, 
* GDPR compliance and no need for cookie consent banners
* Open-source
* Self-hosted
* Our data processing methods
* Simpler alternative to Google Analytics
* Lightweight script

So, is it possible that if we chatted with an AI bot about any of such topics, it will mention and/or cite Plausible? We can confirm that first-hand.

Another thing before trying that, that also hints towards the legibility of this hypothesis is the entry pages listed second, third, and so on, after the homepage.

These ones also talk about the topics for which Plausible is usually referred: GDPR compliance, self-hosted analytics, open-source, our data policy, cookie consent banners, and so on. So the hypothesis is matching so far.

Let’s confirm it by asking ChatGPT and Perplexity––our two topmost performing AI channels––with the laziest prompt ever (because niche prompts would do well anyway):

![citations from chatgpt](/uploads/citation-from-chatgpt.png "citations from chatgpt")

^ That’s ChatGPT sending traffic to the second topmost mentioned entry page, i.e. `/blog/legal-assessment-gdpr-eprivacy`.

P.S. I used the “Search the web” option along with the prompt to ensure ChatGPT returned some links from Bing (Bing is the search engine used by ChatGPT). If you use a regular prompt, you may or may not get citations.

Another thing ChatGPT did while sending this specific traffic was add a UTM source automatically to it. This is what I got after clicking the link suggested above: “<https://plausible.io/blog/legal-assessment-gdpr-eprivacy?utm_source=chatgpt.com>

By the way, these UTM sources are also visible in the [UTM reports](https://plausible.io/blog/utm-tracking-tags) in Plausible, making it even further easier to track traffic back to its originating source.

Let’s try the same exercise with Perplexity AI. It returned the same citation to the same blog post as above. 

![perplexity citations](/uploads/perplexity-citations.png "perplexity citations")

#### Isn’t there a better way to track my brand’s visibility across AI search tools?

Other than manually confirming hypotheses, a more sophisticated method would have been somehow monitoring AI conversation trends. We need data for that directly from AI search engines.

But unlike publicly available search engine results, AI chats are personal and not publicly available to assess.

There are some Enterprise-focused companies offering AI brand visibility services where a lot of manual work is anyway put in to determine which conversations the brand is mentioned by AI and how that compares against their competitors.

Hence, when analyzing your AI traffic in your web analytics tool, some manual work would be required at this stage (as of Dec 2024).

### Was this “qualified” traffic?

Qualified traffic is high quality traffic, i.e. people who would be genuinely interested in the things your business, or at least website, offers. Any other traffic is not useful for meeting business goals.

To figure out if the traffic we were getting from AI channels was qualified or not, we saw two things:

* What did they do on the site?
* Were any conversions met from this?

#### What did they do on the site?

For this, we can simply look at the “Top Pages” report. This is an overview of the top pages visited in the sessions coming from AI channels. So it is a good indicator of what was happening in those sessions: an insight not completely offered by the Entry pages report.

Here’s the screenshot of our site’s top pages visited in the sessions acquired from AI channels:

![top pages](/uploads/top-pages.jpg "top pages")

This indicates that after the homepage (which was by the way, scrolled 58% of the page length indicating that many visitors read most of the important info we like to offer on our homepage), the second-most visited page was the free trial registration page!

That is great news, since we know that the journey taken by these folks, that started from searching about a relevant topic on AI tools, included visiting our registration page too. So far so good! 

But did actual conversions occur? We don’t have to guess because we have a [goal](https://plausible.io/docs/goal-conversions) for that. We will look at this info in the next section. Before that, we can quickly look at the other top performing pages in AI-acquired sessions. 

These consist of our live stats page (which we also utilize as a product demo), activating an account, adding sites to Plausible, visiting our documentation, and other pages we have about the topics for which Plausible is popular (as listed in the Entry pages section above).

That is very good qualified traffic, in my opinion!

#### Were any conversions met from this?

Exactly these goals were met in AI-acquired sessions:

![goal conversions](/uploads/goal-conversions.jpg "goal conversions")

If we look at one of the funnels, we also know how many people entered the sign up flow and completed it:

![funnel conversions](/uploads/funnel-conversions.jpg "funnel conversions")

P.S. All of this info is openly available in our [live demo](https://plausible.io/plausible.io?filters=((is,referrer,(chatgpt.com,perplexity.ai,claude.ai,phind.com,chat.openai.com)))&period=year&comparison=off&keybindHint=X) as well.

### When?

If you notice the top graph, there's been a spike in AI-acquired traffic from mid-August and has maintained those traffic levels ever since. Hmm, what could have happened at that time? 

A little digging revealed that ChatGPT had a [stable release](https://en.wikipedia.org/wiki/ChatGPT) on August 8. This could be it!

So what? The only conclusion from this is that not much was needed to be done from our side to get “AI-featured”. Since AI models are in heavy development and will continue to be for the foreseeable future, they will continue looking for good information on the web and keep getting better at it.

So if we focus on creating valuable content –– AI will hopefully proactively pick it up at some point. This arguably depends on other factors like brand authority as well, but that’s for a deeper discussion later in this article.

### How do we approach content and marketing at Plausible that may have helped with this AI traffic boost?

At the core of everything is a thoughtful product, built over the years that continues to improve with customer feedback. We like to focus on real problems and real people. This is why we get organically featured in social media, search engines, and communities.

Whenever we decide on a new topic to write about, we like to understand what the ideal reader might be seeking from it. This helps us understand the intent behind the topic and helps us match it. Intent matching triumphs keyword matching for us.

This aligns with Google’s regular “helpful content updates” as well, which regularly penalizes websites for trying to hack the algorithm. This confirms that only useful content that understands the problem and offers real solutions will do well in the long run and not necessarily the one being optimized for searches.

Since AI tools pick their knowledge from search engines, it’s quite obvious that if a search engine likes you (high brand authority) –– you are more likely to be noticed by AI as well. 

## What can you *really* do?

Let’s look at the things that can practically be done to ensure best chances of being featured by AI in its answers.

### Identify your low hanging fruits

Figure out what you are already being mentioned for, if at all. You can use the web analytics tool of your choice for this purpose and do some hypothesis and reverse-engineering like we did above.

This gives you a good starting point to see what works well for you and why. From there, you can improve what’s already working and gradually explore related topics. Over time, this will help you get recognized for a wider range of topics in your industry.

### Focus on those AI channels that cite the most.

For instance, Perplexity AI’s USP since the beginning was to always cite its sources. And where does Perplexity get its information from?

It’s Microsoft Bing! And so does ChatGPT.

So you can shift your focus from not just trying to rank well in Google but Bing as well.

And of course, there are the Google AI overviews that use citations too. While they may not always lead to clicks, that’s no reason to stop creating helpful content for your audience or striving to get cited.

So yes, SEO is still your best bet in many ways. Speaking of which:

### Get better at SEO – but the way Google looks at it

This isn’t an isolated advice but if you want to optimize for Google AI overviews, you need to:

* Create high-quality, authoritative content directly addressing user intent.
* Optimize for top organic rankings with strong click-through rates (CTR).
* Regularly update content to maintain freshness and relevance.
* Address related queries to broaden coverage for AI Overviews.
* Incorporate multimedia like videos for diverse content formats.
* Align with EEAT principles: Expertise, Authoritativeness, and Trustworthiness.

There’s someone who looked at Google AI overview’s [patent](https://richsanger.com/how-googles-ai-overview-works-for-seo/) and therefore it is more than safe to say that above practices should help.

Another experiment would be to try out different content formats since Google AI overviews fetch their answers from different types of content formats like text, images, videos, etc.

### Consider adding an `llms.txt` file

Have you ever used a `robots.txt` file for your site? It’s used by websites to give instructions to web crawlers/spiders/bots about which pages or sections of the site they are allowed to crawl and index.

It is a plain text file that is placed at the root of a website and contains directives that guide web crawlers on how to interact with the website’s content. 

Now, “llms.txt” files are making an appearance. According to [the](https://llmstxt.org/) proposal:

> We propose that those interested in providing LLM-friendly content add a /llms.txt file to their site. This is a markdown file that provides brief background information and guidance, along with links to markdown files (which can also link to external sites) providing more detailed information. This can be used, for instance, in order to provide information necessary for coders to use a library, or as part of research to learn about a person or organization and so forth. You are free to use the llms.txt logo on your site to indicate your support if you wish.

Even though there’s nothing official about this, if you notice the list of projects already using an `llms.txt` file in [this library](https://llmstxt.site/), you will notice that Anthropic itself uses it too. And who is Anthropic? It’s the creator of Claude AI. So there must be some merit in this optimization.

Thank us later.

### Write content for citation and reference purposes

If this is relevant for your industry, it will help to create citation-worthy content. Usually what gets cited, in ChatGPT for example, is this:

![when does chatgpt cite resources](/uploads/when-does-chatgpt-cite-resources.jpg "when does chatgpt cite resources")

Please do note that this doesn’t always apply to situations when ChatGPT users use the “search the web” functionality while prompting. This is because this feature refers to real-time results fetched from the web anyway.

### Cover topics well 

Don’t stop at an isolated content piece but address related questions and cover the subject in-depth because AI chat tools allow follow-up queries.

### Optimize for natural language and voice search

This has been a growing SEO technique as well but makes a lot of sense for “AI optimization.” Why? Because voice search is becoming a key way people find information.

Try to match natural, conversational language rather than traditional typing patterns. People tend to phrase their queries in a more conversational tone when using voice search. 

## Conclusion

AI can help multiply your brand’s visibility. Just get going with relevant and qualitative content, and start tracking AI-referred traffic in an analytics tool. All the best!