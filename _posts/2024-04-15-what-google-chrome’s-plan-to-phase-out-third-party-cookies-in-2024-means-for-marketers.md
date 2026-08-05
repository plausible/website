---
layout: post
title: Did Google phase out third-party cookies? What happened in Chrome
description: Google no longer plans to phase out third-party cookies in Chrome. Here is what changed, the current status and what marketers should do now.
slug: chrome-third-party-cookies
date: 2024-04-15T10:11:15.235Z
author: hricha-shandily
image: /uploads/google-third-party-cookie-announcement-2025.png
image-alt: Google's April 2025 Privacy Sandbox announcement about third-party cookie choice in Chrome
last_modified_at: 2026-08-04
---
No. The much-discussed third-party cookie phase-out never actually happened in Chrome.

If you spent years reading announcements, preparing for deadlines and being told that the cookieless future was just around the corner, you didn't imagine it. Google first delayed the change, then changed direction, and finally decided to keep Chrome's existing approach to third-party cookies. After all that build-up, marketers were more or less back where they started.

In [April 2025](https://privacysandbox.google.com/blog/privacy-sandbox-next-steps), Google confirmed that it would not introduce the new standalone cookie prompt it had proposed either. Instead, people would continue to manage third-party cookies through Chrome's privacy and security settings. The UK's Competition and Markets Authority independently records [Google's decision and the subsequent case closure](https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes).

So, are third-party cookies staying? In Chrome, yes, for now. But that doesn't make them a safe foundation for your marketing. Safari already blocks them by default, Firefox heavily restricts them, and Chrome users can block them too. On top of that, privacy rules and consent choices limit when tracking data can be collected and used.

Let's untangle what happened, what is true today and what marketers should do with this very confusing non-phase-out.

1. Ordered list
{:toc}

{% include cta-box.html
  headline="Understand your website traffic without cookies or cross-site tracking"
  link="/cookieless-web-analytics"
  link_text="Explore cookieless analytics"
  secondary_link="/register"
  secondary_text="Start free trial"
%}

## What happened to Google's third-party cookie phase-out?

Google first [announced](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html) in January 2020 that Chrome would phase out support for third-party cookies within two years. In their place, Google planned to develop a new set of technologies under its Privacy Sandbox initiative.

Then the deadline started moving. In [June 2021](https://blog.google/products-and-platforms/products/chrome/updated-timeline-privacy-sandbox-milestones/), it was pushed to late 2023. In [July 2022](https://blog.google/products-and-platforms/products/chrome/update-testing-privacy-sandbox-web/), it moved again, this time to the second half of 2024.

There was still every reason to believe the phase-out would happen. On January 4, 2024, Chrome [restricted third-party cookies for 1% of users](https://blog.google/products-and-platforms/products/chrome/privacy-sandbox-tracking-protection/) as a test. Google said the restriction would eventually expand to everyone.

It never did.

In [July 2024](https://privacysandbox.google.com/blog/privacy-sandbox-update), Google scrapped the universal phase-out and proposed giving people a new, informed choice about third-party cookies instead. Then, in [April 2025](https://privacysandbox.google.com/blog/privacy-sandbox-next-steps), it dropped that proposed prompt as well. Chrome would simply keep the cookie controls it already had. The [CMA's case record](https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes) documents both changes.

This wasn't just a matter of interpreting Google's wording. The UK's Competition and Markets Authority recorded the same outcome: Google had decided neither to deprecate third-party cookies nor to roll out the standalone prompt. The CMA [closed its Privacy Sandbox commitments case](https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes) in October 2025.

### The timeline in brief
Regulatory bodies like [GDPR (General Data Protection Regulation)](https://plausible.io/blog/legal-assessment-gdpr-eprivacy) and [CCPA (California Consumer Privacy Act)](https://plausible.io/blog/google-analytics-ccpa) work to protect individual privacy by regulating the collection, processing, and usage of personal information by online businesses.

| Date | What Google announced |
|---|---|
| January 2020 | Chrome would phase out third-party cookies, initially within two years. |
| January 2024 | Chrome began restricting third-party cookies for 1% of users as a test. |
| July 2024 | Google moved away from a universal phase-out and proposed a user-choice model. |
| April 2025 | Google kept Chrome's existing third-party-cookie settings and abandoned the proposed standalone prompt. |

## Why do so many articles still say third-party cookies are going away?

Because, until July 2024, that was Google's stated plan. Many explainers, strategy documents and product roadmaps were built around it. Some of those pages still explain cookies perfectly well; their Chrome deadline is simply out of date. At the time of our August 2026 review, even a [Google Ads support page](https://support.google.com/google-ads/answer/14762010?hl=en) still described the abandoned phase-out as an upcoming change.

There is another reason the old phrase persists: “third-party cookies are going away” has become shorthand for the wider decline of cross-site tracking. [Safari blocks third-party cookies by default](https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/). [Firefox blocks known cross-site tracking cookies and isolates many others](https://support.mozilla.org/en-US/kb/third-party-trackers). Chrome lets people [block third-party cookies](https://support.google.com/chrome/answer/95647), and does so by default in Incognito mode.

In other words, Chrome didn't kill third-party cookies, but neither did Google make them universally available. When you read advice about the “cookieless future,” check the update date and look for both turning points: July 2024 and April 2025.

## Are third-party cookies still available in Chrome?

Yes. In a regular Chrome window, people can choose whether to allow or block them. [Chrome blocks third-party cookies by default in Incognito mode](https://support.google.com/chrome/answer/95647), and an administrator may control the setting on a managed work or school device.

For marketers, the important part is not whether Chrome technically supports the cookie. It is whether the cookie will be available for the particular person you are trying to reach or measure. Sometimes it will be. Sometimes their browser, browsing mode, settings or choices will get in the way. Google's [technical overview of third-party cookie restrictions](https://privacysandbox.google.com/cookies/prepare/overview) also notes that availability can be affected by browser restrictions, developer flags and enterprise policies. A system that depends on third-party cookies will therefore always be working with a partial view.

## What are third-party cookies?

A cookie is a small piece of data that a website asks your browser to store. The browser can send it back later so the website, or another service embedded in it, recognizes that browser.

The easiest way to understand first-party and third-party cookies is to look at who sets them:

- **First-party cookies** belong to the website you intentionally visited. They can keep you signed in, remember what's in your cart or save your preferences.
- **Third-party cookies** belong to another domain whose code is present on that website. Advertising and tracking companies have used them to recognize the same browser on many sites, build a picture of its activity, retarget visitors and attribute conversions.

Imagine looking at a pair of shoes, leaving the store and then seeing those exact shoes in ads on several unrelated websites. Third-party cookies have traditionally helped make that possible. When the same tracking company appears on many sites, it can [connect one browser's activity across them](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#privacy_and_tracking). MDN has a useful [technical explanation](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies) if you want to go deeper.

## Why did Google reverse its plan?

There isn't one neat answer, and Google didn't offer one. What we do know is that the plan had to account for the interests of publishers, advertisers, developers, privacy advocates and regulators, who did not necessarily want the same thing.

The CMA had also been [investigating whether removing third-party cookies and replacing some of their functions with Privacy Sandbox tools could create competition problems](https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes). In [July 2024](https://privacysandbox.google.com/blog/privacy-sandbox-update), Google moved from universal deprecation to a proposed user-choice model. In [April 2025](https://privacysandbox.google.com/blog/privacy-sandbox-next-steps), it decided to retain Chrome's existing controls instead.

So the reversal does not mean Google decided cross-site tracking was harmless. It means removing third-party cookies from Chrome turned out to be far more complicated than announcing their retirement. Google still said it would strengthen tracking protection in Incognito mode.

## Does this mean marketers can continue as before?

Technically, some can. Strategically, they shouldn't.

Google removed the deadline, not the weaknesses of third-party-cookie-based marketing:

- [Browser restrictions and user settings can block them](https://privacysandbox.google.com/cookies/prepare/overview), so the data is incomplete from the start.
- People may decline consent. In the UK, for example, [non-essential cookies generally require consent](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/). California gives eligible consumers a [right to opt out](https://oag.ca.gov/privacy/ccpa) of the sale or sharing of personal information for cross-context behavioral advertising.
- Using a third party to [recognize the same browser across different sites](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies#privacy_and_tracking) is exactly the kind of tracking that browsers and privacy advocates have pushed back against.
- Any measurement strategy that can be changed by a browser setting, platform decision or new rule is a fragile one.

Third-party cookies may continue to be one input in your advertising. Just don't make them the floor the rest of your strategy stands on.

## What does the decision mean for advertising, analytics and remarketing?

### Advertising and remarketing

Remarketing hasn't suddenly stopped working. Where third-party cookies are available, and where you have met the relevant consent and legal requirements, some advertising systems can still use them.

But the reachable audience changes with the browser, browsing mode and person's choices. That makes contextual and intent-based advertising useful complements: reach someone because of what they are reading or searching for now, instead of relying entirely on a profile assembled from where they have been.

### Conversion tracking and attribution

Advertising platforms are already filling the gaps with a mixture of observed data, first-party data and modeling. Google Ads, for example, can show [observed and modeled conversions together](https://support.google.com/google-ads/answer/10081327). Its enhanced-conversions feature can also use [hashed first-party customer data](https://support.google.com/google-ads/answer/9888656) to supplement conversion measurement.

That doesn't make the numbers useless. It just means we should read them for what they are: a platform's best account of what happened, not a perfect event-by-event recording of every customer's journey.

You can still measure plenty once someone reaches your website. Campaign parameters, landing pages and conversion goals can connect a campaign with on-site actions without building a cross-site profile. Our guide to [tracking Google Ads and other paid campaigns](/blog/google-ads-tracking) shows how.

### Website analytics

Website analytics does not inherently require third-party cookies. You can understand which sources bring people to your site, which pages they visit and whether they complete your goals without following them elsewhere on the web. Plausible's [data policy](/data-policy), for example, explains how our measurement works without cookies, persistent identifiers or cross-site tracking.

Chrome's reversal doesn't weaken the case for privacy-first analytics. It only removes one deadline that had forced marketers to think about it.

## What should marketers do now?

### Strengthen first-party and zero-party relationships

Start with the relationship you actually have with your audience. Product usage, purchases, account preferences, newsletter signups, surveys and customer conversations can tell you far more than a trail of visits to unrelated websites.

But don't treat “first-party” as a magic privacy label. Collect what you need, explain why you need it and protect it properly. The term describes who collected the data; it does not automatically make every use of that data responsible or exempt from privacy requirements.

### Use contextual and intent-based acquisition

Someone searching for a solution is already telling you something useful: what they want at that moment. You don't need a month-long browsing history to respond to that intent. Google Ads can [match Search ads to people's search terms](https://support.google.com/google-ads/answer/14996023), while [contextual targeting matches ads to relevant website, video or app content](https://support.google.com/campaignmanager/answer/16587084).

This is also where good content and clear positioning earn their keep. They attract the right people because the subject and message are relevant, not because an identifier followed someone around until they clicked.

### Measure campaigns without cross-site profiles

Ask the questions you actually need answered. Which campaign brought people here? Which landing page held their attention? Did they sign up, download something or buy? Campaign parameters, referrers, aggregate traffic patterns and clearly defined goals can answer these questions without tracking a person across the web.

[Cookieless web analytics](/cookieless-web-analytics) can show where visitors came from, what they viewed and whether they completed an important action, without cookies or persistent personal profiles.

### Embrace privacy-first analytics

Moving away from third-party cookies does not mean marketing in the dark. Privacy-first analytics can still show which channels and campaigns work, which content people engage with and whether they complete the actions that matter.

With an open-source tool such as [Plausible Analytics](/open-source-website-analytics), you can inspect how that measurement works. Plausible uses no cookies or persistent identifiers, does not collect or store personal data that can identify an individual, and reports aggregated website statistics. Learn more about our approach to [privacy-friendly web analytics](/privacy-focused-web-analytics).

Of course, changing your analytics tool doesn't magically make your entire organization compliant with every privacy law. Your other tools and data practices still matter. But it does remove a large amount of unnecessary data collection from a part of your stack you use every day.

### Treat platform attribution as an estimate

Attribution has always looked more certain on a dashboard than it is in real life. A report cannot directly observe an interaction if it receives no linkable data. Google Ads itself says that browser restrictions, consent choices and technical limitations create gaps it tries to fill through [conversion modeling](https://support.google.com/google-ads/answer/12443859).

Use attribution to compare patterns and make better decisions, not as an unquestionable record of why every person converted. Pair it with aggregate trends, experiments and the wonderfully low-tech habit of asking customers how they found you.

## Frequently asked questions

<style>
  .chrome-cookies-faq {
    margin-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .chrome-cookies-faq details {
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
  }

  .chrome-cookies-faq summary {
    align-items: center;
    color: #111827;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    list-style: none;
  }

  .chrome-cookies-faq summary::-webkit-details-marker {
    display: none;
  }

  .chrome-cookies-faq summary::after {
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

  .chrome-cookies-faq details[open] summary::after {
    content: "-";
  }

  .chrome-cookies-faq p {
    color: #4b5563;
    line-height: 1.7;
    margin: 0.75rem 2.75rem 0 0;
  }
</style>

<div class="chrome-cookies-faq">
<details>
  <summary>Is Google still phasing out third-party cookies?</summary>
  <p>No. In <a href="https://privacysandbox.google.com/blog/privacy-sandbox-next-steps">April 2025</a>, Google confirmed that Chrome would keep its existing approach. It would not phase out third-party cookies or introduce the standalone prompt proposed in 2024. The <a href="https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes">CMA's official case record</a> independently confirms both decisions. People can continue to control third-party cookies in Chrome's settings.</p>
</details>

<details>
  <summary>Does Chrome block third-party cookies by default?</summary>
  <p>Not for everyone in regular browsing. People can <a href="https://support.google.com/chrome/answer/95647">choose to allow or block them</a>, and Chrome blocks them by default in Incognito mode. Managed-device policies and site exceptions can affect the setting too. Safari and Firefox apply stronger restrictions to cross-site tracking by default.</p>
</details>

<details>
  <summary>Are third-party cookies going away in 2026?</summary>
  <p>No. As of this article's August 2026 update, Chrome has no 2026 deadline for removing them. <a href="https://privacysandbox.google.com/blog/privacy-sandbox-next-steps">Google's April 2025 announcement</a> retained Chrome's existing approach, and the <a href="https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes">CMA's October 2025 case closure</a> records that Google decided against both deprecation and the proposed prompt. Availability still varies from one browser and user to another.</p>
</details>

<details>
  <summary>Should marketers still prepare for a cookieless future?</summary>
  <p>Prepare for an incomplete-cookie future, not a magical day when every third-party cookie disappears. Build direct customer relationships, use contextual and intent-based acquisition, measure what happens on your own website and avoid making cross-site recognition the one thing holding your strategy together.</p>
</details>
</div>

## What is the current takeaway?

The deadline is gone. The direction of travel isn't.

Chrome continues to support third-party cookies and lets people control them through [existing settings](https://support.google.com/chrome/answer/95647). But “not phased out” does not mean universally available, dependable or privacy-friendly.

As marketers, we don't need to panic about the next Chrome deadline anymore. We can use that breathing room to build something better: useful content, direct customer relationships, sensible campaign measurement and analytics that don't depend on watching people across the web.
