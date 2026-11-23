---
layout: article
title: "Plausible MCP server: ask your AI assistant about your website stats"
description: "Connect your AI assistant to Plausible's official MCP server and ask questions about your traffic, sources and conversions. Read-only, no API key and included on all plans."
permalink: /mcp-server
cta_headline: "Explore your stats with your AI assistant"
---
Plausible is built so you can check your stats in a minute and get on with your day. Some questions take more than one look though. What changed since last week? Which posts are losing search traffic? What goes in the monthly report?

With the official Plausible MCP server you ask those questions in plain language. Connect ChatGPT, Claude, Grok, Cursor or another compatible assistant and it gets the answers from your Plausible stats. There is no API key to create and no queries to write.

Your assistant gets read-only access to the same aggregated stats you see in your dashboard. Plausible doesn't collect personal data, so there are no visitor profiles to hand over. It's included on all plans at no extra charge.

**[Connect your assistant →](/docs/mcp)**

{% include cta-buttons.html
  secondary_link="/docs/mcp"
  secondary_text="Read the setup guide"
%}

1. Ordered list
{:toc}

## Understand what changed

See which sources and pages account for changes in your traffic. Start with a comparison, then ask your assistant to break down the results.

> Compare last week with the previous week. Which sources and pages account for the biggest changes in traffic?

Follow up with “Break that down by landing page” to explore further.

## Review your content's performance

Find the blog posts gaining or losing search visitors, with numbers you can use to decide what to investigate.

> Which blog posts gained or lost the most organic search visitors last month compared with the previous month? Show the absolute and percentage changes.

Tell your assistant how to identify your blog posts, such as pages whose paths start with /blog/.

## Prepare a report

Ask your assistant to turn your stats into a report you can review or share with your team.

> Create a short report for last month with traffic trends, top sources and signup conversions. Compare it with the previous month, include a chart and highlight anything worth investigating.

Plausible supplies the stats. Your assistant creates the summaries, charts and reports using the tools it supports. If your team has several sites, say which one you mean. For conversion questions, you need to have the relevant [goals configured](/docs/goal-conversions).

## Connect in three steps

1. **Add Plausible.** Add `https://plausible.io/mcp` as a connection in a compatible AI assistant.
2. **Sign in and choose your team.** Sign in to Plausible and authorize access for the team you want to use.
3. **Ask a question.** Include the dates you want to explore.

[Follow the setup guide](/docs/mcp) for the details, including steps for [Claude](/docs/mcp#connect-in-claude), [ChatGPT](/docs/mcp#connect-in-chatgpt), [Grok](/docs/mcp#connect-in-grok) and [Cursor](/docs/mcp#connect-in-cursor).

## You choose what to connect

Your assistant can read stats for the sites you have access to in your selected team. It cannot change your settings or data. You can revoke access at any time in your Plausible account's Connected apps settings.

Connecting an assistant is optional. The stats you request are shared with that provider and handled under its terms and privacy settings. [Read about privacy and access](/docs/mcp#privacy-and-access).

## Stats in your assistant or visits from AI assistants?

The MCP server lets your assistant read your Plausible stats. [AI traffic analytics](/track-ai-traffic) shows the visits AI assistants send to your website. You can use both: ask your assistant how much traffic the AI Assistants channel sent you last month.

## Frequently asked questions

### What do I need to get started?

A Plausible account that is a member of the team whose sites you want to query, and a compatible AI assistant such as ChatGPT, Claude, Grok or Cursor. The MCP server is included on all plans and works during the free trial. Your assistant may have its own subscription requirements.

### What is MCP?

Model Context Protocol (MCP) is a way for AI tools to connect to other services. Plausible's MCP server lets your assistant request stats to answer your questions.

### Can my assistant see everything in my dashboard?

It follows your plan. Custom properties and revenue metrics are available on plans that include them. Funnels are not available through the MCP server.

### Is there a limit on how much I can ask?

Starter and Growth include 300 requests per hour and Business includes 600. The allowance is per team and one question can use several requests. [See request limits](/docs/mcp#request-limits).
