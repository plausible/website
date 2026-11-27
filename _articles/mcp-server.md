---
layout: article
title: "Plausible MCP server: ask your AI assistant about your website stats"
description: "Connect your AI assistant to Plausible's official MCP server and ask questions about your traffic, sources and conversions. Read-only, no API key and included on all plans."
permalink: /mcp-server
image: /uploads/plausible-mcp.png
cta_headline: "Explore your stats with your AI assistant"
---
Plausible is built so you can check your stats in a minute and get on with your day. If you’re already working with an AI assistant, you can ask about your website right there too. How many people visited yesterday? What changed since last week? What goes in the monthly report?

With the official Plausible MCP server you ask those questions in plain language, without leaving your conversation. Connect ChatGPT, Claude, Grok, Cursor or another compatible assistant and it gets the answers from your Plausible stats. There is no API key to create and no queries to write.

Your assistant gets read-only access to the same aggregated stats you see in your dashboard. Plausible doesn't collect personal data, so there are no visitor profiles to hand over. It's included on all plans at no extra charge.

**[Connect your assistant →](/docs/mcp)**

{% include cta-buttons.html
  secondary_link="/docs/mcp"
  secondary_text="Read the setup guide"
%}

![Plausible dashboard alongside a ChatGPT conversation ranking blog posts by Google search traffic](/uploads/plausible-mcp.png)

1. Ordered list
{:toc}

## Chat with your website stats

Open your dashboard when you want to see your stats at a glance, or ask your assistant when you have a question. You can check yesterday’s traffic, compare this month with last month, find your top pages and traffic sources, see which campaigns brought signups or draft an update for your team. Ask follow-up questions as you go, without switching tabs.

Start with whatever you’re curious about. Here are a few examples of how you can take a question further.

### Find what drove a traffic change

Understand where a rise or fall in traffic came from so you know what to look into next. If traffic jumped after a launch, you could start with a question like this.

> Compare last week’s traffic with the week before. Which sources and landing pages contributed most to the change?

### Decide which pages to improve

Find pages that already attract visitors but could do more to turn those visits into signups. You can ask your assistant to compare landing pages by traffic and signup rate using your Plausible stats.

If you also connect Google Search Console to your assistant separately, you can bring search clicks into that comparison. Connecting Plausible alone does not give your assistant access to Search Console. With both connected, try:

> Compare my top landing pages from Google Search last month. Which ones got plenty of clicks in Search Console but had a low signup rate among Google visitors in Plausible?

### Check how a campaign performed

See whether a newsletter, launch or paid campaign brought visitors who signed up, so you can decide what to repeat or change.

Use the UTM campaign names from your campaign links and make sure signups are configured as a [goal](/docs/goal-conversions). Replace the names and dates below with your own.

> Compare the UTM campaigns `spring-launch` and `spring-newsletter` for April 2026 by visitors, signup conversions and signup rate. Which brought the most signups?

### Draft a monthly update

Turn your traffic and conversion figures into a first draft you can review and share with your team. Give your assistant the same brief you’d give a teammate.

> Draft a short update for my team. Compare last month’s traffic and signups with the month before, and highlight which sources changed most.

Review the draft and add context, like a newsletter you sent or a campaign you paused.

## Connect in three steps

To try these questions with your own stats, connect Plausible to your AI assistant. You’ll sign in with your Plausible account and choose a team, with no API key to create.

1. In your AI assistant, add `https://plausible.io/mcp` as a connection.
2. Sign in to Plausible as prompted and choose the team you want your assistant to access.
3. Return to your chat and start asking questions about your stats.

Find complete instructions for your assistant in the [setup guide](/docs/mcp).

## What your assistant can access

Your assistant can access your Plausible dashboard's aggregated stats. You can disconnect it anytime under **Connected apps** in your Plausible account.

When you ask a question, Plausible shares the stats your assistant requests with its provider. The provider handles those stats under its own terms and privacy settings. [Read about privacy and access](/docs/mcp#privacy-and-access).

## Frequently asked questions

<style>
  .mcp-faq {
    margin-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .mcp-faq details {
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
  }

  .mcp-faq summary {
    align-items: center;
    color: #111827;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    list-style: none;
  }

  .mcp-faq summary::-webkit-details-marker {
    display: none;
  }

  .mcp-faq summary::after {
    align-items: center;
    background: #eef2ff;
    border-radius: 9999px;
    color: #4f46e5;
    content: "+";
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 1.25rem;
    height: 1.75rem;
    justify-content: center;
    line-height: 1;
    margin-left: 1rem;
    width: 1.75rem;
  }

  .mcp-faq details[open] summary::after {
    content: "-";
  }

  .mcp-faq p {
    color: #4b5563;
    line-height: 1.7;
    margin: 0.75rem 2.75rem 0 0;
  }
</style>

<div class="mcp-faq">
<details>
  <summary>What do I need to get started?</summary>
  <p>A Plausible account that is a member of the team whose sites you want to query, and a compatible AI assistant such as ChatGPT, Claude, Grok or Cursor. The MCP server is included on all plans and works during the free trial. Your assistant may have its own subscription requirements.</p>
</details>

<details>
  <summary>What is MCP?</summary>
  <p>Model Context Protocol (MCP) is a way for AI tools to connect to other services. Plausible's MCP server lets your assistant request stats to answer your questions.</p>
</details>

<details>
  <summary>Can my assistant see everything in my dashboard?</summary>
  <p>It follows your plan. Custom properties and revenue metrics are available on plans that include them. Funnels are not available through the MCP server.</p>
</details>

<details>
  <summary>Is there a limit on how much I can ask?</summary>
  <p>Starter and Growth include 300 requests per hour and Business includes 600. The allowance is per team and one question can use several requests. <a href="/docs/mcp#request-limits">See request limits</a>.</p>
</details>

<details>
  <summary>Is this the same as tracking traffic from AI assistants?</summary>
  <p>Plausible’s <a href="/track-ai-traffic">AI traffic analytics</a> shows visits to your website from tools like ChatGPT, Claude and Grok. The MCP connection lets you ask your assistant about your Plausible stats, including those visits. For example: “How many visitors came from AI assistants last month?”</p>
</details>
</div>
