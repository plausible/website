---
layout: post
title: How to use UTM parameters to track your campaigns and understand dark traffic
description: UTM parameters help you understand where your traffic comes from. Learn what they are, how to use them and how to track your campaigns in Plausible Analytics.
slug: utm-tracking-tags
date: 2020-09-29T15:06:06.455Z
last_modified_at: 2026-04-15
author: marko-saric
image: /uploads/utm-campaign-tracking.png
image-alt: UTM campaign tracking with Plausible Analytics
---
UTM parameters help you understand where your traffic is coming from. They can illuminate dark traffic, track paid campaigns and pinpoint which content drives results.

[Plausible Analytics](https://plausible.io/) has full UTM tag support out-of-the-box.

1. Ordered list
{:toc}

## What does UTM stand for?

UTM stands for Urchin Tracking Module. Urchin was an analytics company Google acquired in 2005 and turned into [Google Analytics](https://plausible.io/vs-google-analytics). The UTM parameter format they introduced became the standard and is now supported by all major analytics tools.

A lot of website traffic [doesn't have a referrer header](https://plausible.io/blog/referrer-policy). This traffic is called dark traffic. You may know it as "Direct / None" in your Plausible Analytics dashboard.

Dark traffic includes clicks from emails, clicks from documents, clicks from mobile messengers, bookmarks, people typing in the URL directly into the browser and many other mechanisms. Site owners cannot see which referrer sources are sending that traffic.

By default, Plausible Analytics attempts to uncover traffic originating from Android apps which is traditionally categorized as direct traffic in Google Analytics and other analytics tools.

The volume of "android-app" entries in your Plausible "Top Sources" report will vary based on your site and audience. For sites with significant mobile traffic, this recovers 10% or more previously unattributed traffic from apps like Gmail, Slack and Telegram.

Tagging your links with UTM parameters is a solution to minimize dark traffic even further.

## How do I see UTM campaign stats in Plausible Analytics?

When you have UTM tagged links in your emails, social media and other platforms, you can see clicks on these links in your Plausible Analytics dashboard. You can see referral sources of your traffic, even those that would otherwise be listed as "Direct / None": 

* In your "Top Sources" report you can filter by medium, source, campaign, term and content tabs which include all the visits to your sites from tagged links.

* You can click on any of your individual UTM tags to drill down and get a full report based on that specific UTM tag:

1. See which content on your site is visited by people that clicked on the links tagged with that UTM
2. See which of your goals and events people that click on tagged URLs convert on
3. See details about visitors that click on the tagged URLs such as what country they are from and what device, browser and OS they use

## How do I generate UTM tagged links? 

UTM parameters are bits of text that you add to your URLs and links that you share. Here's what a link looks like when it's tagged with UTM parameters:

`https://yourdomain.com?utm_medium=social&utm_source=Twitter&utm_campaign=milestone`

UTM parameters are all the tags that come after the question mark (`?`) in the URL above:

* utm_medium=social
* utm_source=Twitter
* utm_campaign=milestone

Individual parameters are separated by the ampersand (`&`) symbol.

You can tag all your links manually or use the builder below.

## UTM tag builder

Enter your URL and campaign details below to generate a tagged link:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; gap: 0.875rem;">
    <div>
      <label for="utm-url" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Website URL <span style="color: #ef4444;">*</span></label>
      <input type="url" id="utm-url" placeholder="https://yourdomain.com" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-source" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Source (utm_source) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="utm-source" placeholder="e.g. newsletter, twitter, google" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-medium" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Medium (utm_medium)</label>
      <input type="text" id="utm-medium" placeholder="e.g. email, social, cpc" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-campaign" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Name (utm_campaign)</label>
      <input type="text" id="utm-campaign" placeholder="e.g. spring-sale, product-launch" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-term" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Term (utm_term)</label>
      <input type="text" id="utm-term" placeholder="e.g. analytics software (for paid search)" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-content" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Content (utm_content)</label>
      <input type="text" id="utm-content" placeholder="e.g. banner-top, link-footer" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div id="utm-result" style="display: none; margin-top: 1.25rem;">
    <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">Your tagged URL</label>
    <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
      <div id="utm-output" style="flex: 1; padding: 0.75rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; word-break: break-all; color: #1f2937; line-height: 1.5;"></div>
      <button id="utm-copy" style="flex-shrink: 0; padding: 0.5rem 1rem; background: #4f46e5; color: #fff; font-size: 0.875rem; font-weight: 500; border: none; border-radius: 0.375rem; cursor: pointer; font-family: inherit;">Copy</button>
    </div>
  </div>
</div>

<script>
(function() {
  var fields = ['utm-url', 'utm-source', 'utm-medium', 'utm-campaign', 'utm-term', 'utm-content'];

  function buildUrl() {
    var url = document.getElementById('utm-url').value.trim();
    var source = document.getElementById('utm-source').value.trim();
    if (!url || !source) {
      document.getElementById('utm-result').style.display = 'none';
      return;
    }
    var params = [];
    params.push('utm_source=' + encodeURIComponent(source));
    var medium = document.getElementById('utm-medium').value.trim();
    if (medium) params.push('utm_medium=' + encodeURIComponent(medium));
    var campaign = document.getElementById('utm-campaign').value.trim();
    if (campaign) params.push('utm_campaign=' + encodeURIComponent(campaign));
    var term = document.getElementById('utm-term').value.trim();
    if (term) params.push('utm_term=' + encodeURIComponent(term));
    var content = document.getElementById('utm-content').value.trim();
    if (content) params.push('utm_content=' + encodeURIComponent(content));
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    document.getElementById('utm-output').textContent = url + separator + params.join('&');
    document.getElementById('utm-result').style.display = 'block';
  }

  fields.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', buildUrl);
  });

  document.getElementById('utm-copy').addEventListener('click', function() {
    var text = document.getElementById('utm-output').textContent;
    var btn = document.getElementById('utm-copy');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = 'Copied!';
      setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
    }
  });
})();
</script>

## Types of UTM parameters

UTM parameters consist of:

### UTM Source

`utm_source`: The name of the campaign source where you plan to share the link. Such as the name of your newsletter or the name of the social network you're doing a campaign on. 

The `utm_source` parameter is required. Make sure to use it in all UTM tagged links.

### UTM Medium

`utm_medium`: The name of the channel where the link is placed. Such as email or paid social media posts.

You can organize and group `utm_medium` tags within a few of your main marketing strategies:

* "email" for all email marketing campaigns
* "social" for organic content posted on your social media channels
* "social-paid" for paid campaigns posted on social media
* "cpc" for pay per click advertising such as search engine paid advertising
* "display" for any advertising banner campaigns you run on other websites
* "affiliate" for all affiliate marketing campaigns
* "referral" for all organic campaigns on other websites

### UTM Campaign

`utm_campaign`: The name of your individual campaign. Such as "November+newsletter" or "Black+Friday+sale".

`utm_campaign` is the most flexible of all the UTM tags. You can put anything you want. Launches, sales, features, specific topics...

### UTM Term

`utm_term`: The name of the keyword for your paid search ad campaign.

### UTM Content

`utm_content`: The name of the specific link.

In some campaigns, you may have multiple links pointing to the same location. For instance two different links to your landing page in an email. `utm_content` allows you to differentiate between these two links and see which one performs best.

## Why are UTM parameters so valuable?

UTM parameters help you understand the big picture and referral sources that bring traffic to your site. But they also help you understand the small details such as what specific social media content works best in terms of driving conversions. Here are some use cases where UTMs can make a difference:

### Track your dark traffic

Facebook is a big source of traffic for many websites but the Facebook referrer only includes the fact that the visitor came from Facebook. Facebook never sends the post or comment ID where someone clicked. You can get this data by including UTM tags in the links you share on Facebook.

X (formerly Twitter) is similar in that it sets the referrer to their link shortener, so you can see the shortened link but not the actual post that brought the traffic. UTM tags help you solve this.

### Track your email marketing campaigns

Any clicks on links in emails, whether personal or newsletters, are classified as "direct / none". UTM tags are the right tool for understanding your email traffic.

Any links that you include in any of your emails should be tagged. At the top level, you can use `utm_source=email` to see how many visitors you're getting from emails.

But you can go even further. For instance, you could track clicks on the link you have placed in your email signature:

`?utm_medium=email&utm_source=personal&utm_campaign=signature`

Or you could track individual newsletter that you send out to your subscribers:

`?utm_medium=email&utm_source=my-newsletter&utm_campaign=november-edition`

For email newsletter campaigns, a useful naming convention could be to include the date the email was sent and the subject line as your `utm_campaign` tag.

Note that many email platforms like Mailchimp, ConvertKit and HubSpot can auto-generate UTM parameters for links in your campaigns. Check your platform's settings before tagging links manually.

### Compare paid vs organic social media activities 

Social media typically sends dark traffic referrals. So by tagging the content you share in social media, you can bring light to some of your activities. 

One way to do that would be to tag all your organic (non-paid) social media links with a `utm_medium=social` tag and all your paid social media posts with a `utm_medium=social-paid` tag.

This will show a clear split in your website referral traffic between visitors and activity coming from "social" and "social-paid". It makes it easier to analyze and understand the results you're getting from your campaigns.

### Check the results of each individual social media post

You can go even deeper than the paid vs organic social media split. You could analyze each individual post that you share using the `utm_campaign` tags. Here's an example:

`https://yourdomain.com?utm_medium=social-paid&utm_source=facebook&utm_campaign=black-friday-sale`

Or:

`https://yourdomain.com?utm_medium=social&utm_source=facebook&utm_campaign=new-season-announcement`

This lets you see the difference between paid and organic posts, and compare the results of individual campaigns side by side.

### Analyze influencers, affiliates and creators you're sponsoring

UTM tags are useful in the world of affiliate marketing, influencer marketing and other sponsorships such as when sponsoring a specific newsletter. 

Tag all the links they post with unique UTM tags so you can measure what results each drives, compare them and decide which are worth continuing.

### Analyze your guest blogging and content syndication campaigns 

In content marketing, companies do many guest blogging and content syndication campaigns. Some of these are hard to track as some websites don't send a referral header. UTM tags are a solution to these.

Simply tag all the links in the different guest posts and other syndication activities to be able to see how many clicks and other results they drive.

## Best practices for UTM tags and other things to know

### Never use UTMs on internal links

Only tag links that point to your site from external sources. If you add UTM parameters to links within your own site, it overwrites the original referral source for that session. A visitor who arrived from your newsletter will suddenly appear as a new direct visit when they click an internally tagged link. This corrupts your traffic attribution data.

### UTM tags are case-sensitive

UTM tags are case-sensitive so `utm_source=Twitter` and `utm_source=twitter` will show separately in the "UTM Source" tab within the "Campaigns" section in the "Top Sources" report of your Plausible dashboard. 

Be consistent in your UTM naming practices. Keep all the tag names consistent to keep your dashboard clean and tidy and make it easier to analyze results.

### Plausible merges UTM tags that are identical to referral sources

We merge all identical sources in the "All" tab of the "Top Sources" report in your Plausible Analytics dashboard.

For instance, clicks from X that are not tagged by UTMs are labeled with the referral source X. If you tag links you share on X with `utm_source=Twitter` or `utm_source=twitter`, we merge those clicks alongside other X clicks in the "All" tab to give you a combined view.

If you want to isolate your UTM tagged clicks from organic clicks, use the "UTM Source" tab within the "Campaigns" section of your "Top Sources" report, which shows only traffic from tagged links.

### You cannot use spaces in UTM tags

You cannot just include `utm_medium=social paid` as spaces are not supported. Either call it `utm_medium=social-paid`, `utm_medium=social+paid` or `utm_medium=social%20paid`.

### Plausible converts plus signs into spaces

We recommend the plus sign or `%20` as Plausible will automatically convert those into spaces. For instance, if you use `social+paid` or `social%20paid` in your links, it will be displayed as `social paid` in your Plausible Analytics dashboard.

### Note the standard URL syntax for query strings

As explained earlier, to specify query parameters you start with a `?` and follow each consecutive parameter with `&`. If you use the question mark twice, the first part is ignored and only the last part is used. 

So try to avoid URLs with more than a single question mark in them. If the URL already has a question mark in it, simply use the ampersand symbol instead of the initial question mark at the start of your UTM. 

### Have a consistent campaign naming convention

Do you see too many campaign names and other sources in your UTM report? Is it difficult to get a good overview? Try to create a better and more consistent campaign naming convention for you and your team.

Keeping `utm_source` consistent from platform to platform lets you see all activity in one place. If you tag all links you share on Facebook with `utm_source=facebook`, you can filter by that source in your Plausible dashboard.

That becomes impossible if you mix `Facebook`, `facebook` and `facebook-paid` across different links.

### How to test UTM parameters

If you get no traffic from links tagged with UTM parameters, then your UTM report in Plausible Analytics will be empty. 

In order to test whether your UTM tagged link works, simply click on it and check your Plausible Analytics dashboard. Your visit should immediately show on the dashboard.

Note that in Plausible Analytics the referral sources are counted only when they start a new session so you won't be able to use this method to test your links multiple times each day. Our session length is one day long.

## Try Plausible UTM campaign tracking

Plausible Analytics includes UTM campaign tracking out-of-the-box. You get a 30-day free trial with no credit card required. [Register here](https://plausible.io/register).