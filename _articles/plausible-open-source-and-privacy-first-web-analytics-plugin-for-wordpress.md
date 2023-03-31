---
layout: article
title: "Plausible: Open source and privacy-first web analytics plugin for WordPress"
description: Plausible Analytics is an open source web analytics plugin for
  WordPress that is a simple to use, lightweight (< 1 KB) and privacy-friendly
  Google Analytics alternative.
permalink: /wordpress-analytics-plugin
---
Plausible Analytics is an open source web analytics plugin for WordPress that is a easy to use, lightweight (< 1 KB) and privacy-friendly Google Analytics alternative.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://wordpress.org/plugins/plausible-analytics/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">On WordPress</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics WordPress plugin](/assets/images/privacy-focused-web-analytics.png "Plausible Analytics WordPress plugin")

1. Ordered list
{:toc}

## How is Plausible Analytics different from Google Analytics?

Plausible Analytics is built to be a more modern [alternative to Google Analytics](https://plausible.io/vs-google-analytics) and other traditional analytics solutions. Here's what makes us different:

* Plausible, unlike Google Analytics, doesn't use cookies, doesn't use any other long term identifers and doesn't track any personal data. We're also exclusively powered by [EU-owned cloud infrastructure](https://plausible.io/blog/google-analytics-illegal). Read more on what makes Plausible a [privacy-first web analytics](https://plausible.io/privacy-focused-web-analytics)

* Plausible, unlike Google Analytics, is [built for speed and performance](https://plausible.io/lightweight-web-analytics). Our script is under 1 KB in size, which is 45 times more lightweight than the Google Analytics script. Plausible will not slow down your site

* Plausible, unlike Google Analytics, is [simple to use](https://plausible.io/simple-web-analytics) and get valuable insights from. All the key metrics are displayed on one page, including top content, top referral sources, external link clicks and goal conversions

* Plausible like WordPress but unlike Google Analytics is [fully open source software](https://plausible.io/open-source-website-analytics). You can inspect and review our source code to verify that our actions match with our words

* Plausible, unlike Google Analytics, is not a free as in beer product. We don't sell or share your site data and we don't use it for any other purpose. We choose the subscription business model rather than surveillance capitalism. We're solely funded by the fees our subscribers pay us

* There's a 30 day free trial with no credit card required. If you find Plausible useful, you can get on a paid subscription. The plans start at $9/month or $7.5/month when billed annually and are based on the number of page views your sites have. You can see the [pricing here](https://plausible.io/#pricing)

## What are the other features of Plausible Analytics for WordPress?

* Our WordPress plugin excludes your own visits to your website from being counted in your analytics by default. You can also optionally exclude other user roles
* Track 404 error pages that people visit so you can fix them and redirect them to more appropriate pages
* Track clicks on external links so you can see which of your affiliate links are more popular than others
* Track file downloads so you can see which of your documents are more popular than others
* Setup goals and custom events using CSS class names so you can track conversions and analyze conversion attribution
* Exclude specific pages from being tracked
* Check your Plausible stats directly in your WordPress dashboard
 
## How to get started with Plausible Analytics

To use Plausible Analytics, you need to register an account. To explore the product, we offer you a free 30-day trial. There are no restrictions on your usage during the free trial and no credit card is required to sign up.

[Click here to register](https://plausible.io/register). It is a simple process and we only ask for your name and email address.

![Register your Plausible account](/docs/img/register-account.png)

After you verify your email address, you need to enter the domain name of the website you want to track. 

Please, remove https and www from the URL, just keep the hostname (`yourdomain.com`). For example, if your site is `https://www.yourdomain.com` then the part to enter in the "Domain" field is `yourdomain.com`.

If you would like to track a subdomain such as `blog.yourdomain.com` then please include the subdomain. Plausible Analytics essentially sees different subdomains as different sites.

For example, if your subdomain is `https://blog.yourdomain.com` then the part to enter in the "Domain" field is `blog.yourdomain.com`.

![Enter the domain name of the website you want to track](/docs/img/website-details.png)

That's it! You have now registered for an account and you have added your website. Now you need to go to your WordPress dashboard and activate the Plausible Analytics WordPress plugin.

## How to install Plausible Analytics WordPress plugin

Here's how you can install the Plausible Analytics plugin on your WordPress site:

* Go into the "Plugins" section in the left-hand side navigation within your WordPress dashboard
* Click on "Add New"
* In the search box in the top right, type "Plausible Analytics" and press enter

![Search and install the "Plausible Analytics" WordPress plugin](/uploads/wordpress-plugin-search.png)

* Click on the "Install Now" button on the listing of [our official "Plausible Analytics" plugin](https://wordpress.org/plugins/plausible-analytics/)
* After the installation is finished, click on the "Activate" button

![Activate our WordPress plugin](/uploads/activate-our-wordpress-plugin.png)

* "Plausible Analytics" entry will now show up in the "Settings" section in the left-hand side navigation of your WordPress dashboard. Click on it to explore the various options available
* Select the options and features that you want to enable and click on the "Save Changes" button
* If you have a caching plugin activated, do purge the cache just in case

![Plausible Analytics WordPress plugin settings](/uploads/plausible-analytics-wordpress-plugin-settings.png)

That's it! You are now counting your site stats with a privacy-first web analytics tool. You can now go to our website and access your Plausible Analytics account to view the dashboard.

There are some optional features that you enable in the plugin settings. Here's a look at those.

## How to view your stats directly in your WordPress dashboard

You can view your Plausible stats directly in your WordPress dashboard without needing to visit our own website. Here's how to enable that: 

* You need to create a secure and private shared link in your Plausible account first. The shared link is secure and impossible to guess

![Create a shared link in your Plausible account](/docs/img/shared-stats.png)

* In the "Visibility" area of your website settings in your Plausible account there's a "Shared links" section where you can create your shared link. Click on the "+ new link" button to do so

* Keep the password field blank as it's not possible to view password-protected shared links within your WordPress dashboard

* Click the "Create shared link" button and your new shared link will be displayed

* Enable the "View your stats in your WordPress dashboard" setting in our WordPress plugin settings and paste your shared link 

* Click on the "Save Changes" button to save it and to enable you to view your stats in your WordPress dashboard

* You can now go to the "Dashboard" section in the left hand side of your WordPress admin navigation menu. Then click on "Analytics" to view your site statistics within your WordPress dashboard

## How to setup custom events to track goal conversions

Plausible Analytics plugin makes it easy to setup custom events and track actions such as purchases, signups, button clicks or form submissions.

You need to tag the site element you want to track with a CSS class name directly in your WordPress editor. Here's how:

* You can click on any block element you want to track such as a button or a form. This will open up the block menu on the right-hand side of your screen

![Click on any block element you want to track](/docs/img/wordpress-button-css-class-name.png)

* You can then click on "Advanced" and add a CSS class name in the "Additional CSS class(es)" field. Add the CSS class name in this format: `plausible-event-name=MyEventName`. For instance, if you want to track form submissions on your contact form, you could use: `plausible-event-name=Form+Submit`

![Add a CSS class name in the "Additional CSS class(es)" field](/docs/img/wordpress-css-class-name.png)

Custom events won't show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up. Here's how:

* To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form 
* Select Custom event as the goal trigger and enter the name of the custom event you are triggering. The name must match the one you added as a CSS class name on your site for conversions to appear in your analytics dashboard. So in our example where you added a CSS class name `plausible-event-name=Form+Submit`, the goal to add to your Plausible account is `Form Submit` (plus is replaced by a space)
* Next, click on the "Add goal" button and you'll be taken back to the Goals page

When you navigate back to your Plausible dashboard, you should see the number of visitors who triggered the custom event. Custom events are listed at the bottom of your dashboard and will appear as soon as the first conversion has been tracked.

## How to track file downloads

File downloads tracking is essential for many site owners and Plausible helps you automate this process. Plausible Analytics plugin can capture a file download event each time a link is clicked and that link contains a file extension. 

Our "File Downloads Tracking" captures a file download event each time a link is clicked with a document, presentation, text file, compressed file, video, audio or other common file type. Both internal and external files downloads are tracked. These file extensions are tracked by default:

`.pdf, .xlsx, .docx, .txt, .rtf, .csv, .exe, .key, .pps, .ppt, .pptx, .7z, .pkg, .rar, .gz, .zip, .avi, .mov, .mp4, .mpeg, .wmv, .midi, .mp3, .wav, .wma`

File downloads won't show up automatically in your Plausible dashboard. You'll have to configure the goal for them to show up. Here's how:

* To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "Goals" section
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form
* Select Custom event as the goal trigger and enter this exact name: **File Download**
* Next, click on the "Add goal" button and you’ll be taken back to the Goals page

After you've completed this process, all the file downloads will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "File Download" goal as soon as the first link that leads to a file has been tracked.

## How to track external link clicks 

Outbound links play a significant role on the open web, but how do you track clicks on outbound links using your WordPress analytics? Plausible Analytics plugin can help you automate external link click tracking on your WordPress site.

Outbound link clicks won’t show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up. Here's how:

* To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "Goals" section
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form

![Visit the "Goals" section in your Plausible account](/docs/img/goal-conversions.png)

* Select Custom event as the goal trigger and enter this exact name: **Outbound Link: Click**

![Select Custom event and create a goal](/docs/img/outbound-link-click-goal.png)

* Next, click on the "Add goal" button and you’ll be taken back to the Goals page

After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "Outbound Link: Click" goal as soon as the first external link click has been tracked.

Learn more in "[How to track outbound link clicks using your website analytics](https://plausible.io/blog/track-outbound-link-clicks)"

## How to track 404 error pages

Having 404 error pages on your WordPress site can lead to a bad user experience, a negative first impression, and even damage your search engine rankings and traffic you get from Google.

Plausible Analytics plugin can help you identify those broken links and 404 page not found errors.

404 error pages won't show up automatically in your Plausible dashboard. You'll have to configure the goal for them to show up. Here's how:

* To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section. You should see a prompt to add a goal
* Click on the "+ Add goal" button to go to the goal creation form
* Select Custom event as the goal trigger and enter this exact name: **404**

![Select Custom event and create a 404 goal](/docs/img/404-error-pages-goal.png)

* Next, click on the "Add goal" button and you'll be taken back to the Goals page 

After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "404" goal as soon as the first visit on an error page has been tracked. Click on "404" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. 

Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

Learn more in: "[How to track, identify and fix 404 error pages on your website](https://plausible.io/blog/track-404-errors)"

## How to exclude admins and other roles from being tracked

By default, our WordPress plugin excludes your own visits from being counted in the stats. You can optionally choose to exclude visits from being counted for other user roles too.

However, if you'd like to count your visits, you can enable this. Switch on the "Track analytics for administrator" feature.

## How to enable hash-based URL tracking

Does your site contain hash-based URLs such as `yourdomain.com/blog-post#specific-subheading` or `yourdomain.com/#contact`?

Normally the hash part of the URL is discarded in your Plausible dashboard but you can enable "Hash-based routing" in your Plausible WordPress plugin settings to preserve the hash-based routing in your stats so you can see the different pages your visitors have viewed.

## How to exclude specific pages from being tracked

In the "Exclude specific pages from being tracked" section of our WordPress plugin settings, you can add a list of page paths that you don't want to be counted in your website analytics.

Any pages you list should be comma-separated, with asterisks to indicate unspecified regions of the pathname. All entries must begin with a `/`, and should not include the trailing slash as we account for this automatically.

* Asterisks (*) expand to any stretch (of length >=0) of the page path and can be on either end or in the middle of any entry, but can't be in the place of slashes.
* Double asterisks (**) expand to any stretch (of length >=0) of the page path, can be on either end or in the middle of any entry, and can represent any characters, even slashes.

Here are some common use cases and examples for how to exclude pages:

| exclusion rule | pages that will match |
| ------------- | ------------- |
| `/blog4` | `/blog4` and exactly `/blog4` with nothing before or after it, so not `/blog45` nor `/blog4/new` nor `/blog` |
| `/rule/*` | `/rule/<anything>`, with `<anything>` being any set of characters (length >=0), but not a forward slash - for example, both `/rule/1` as well as `/rule/general-rule-14`, but not `/rule/4/details` nor `/rules` |
| `/how-to-*` | `/how-to-<anything>` - for example, `/how-to-play` or `/how-to-succeed`, but not `how-to-/blog` |
| `/*/admin` | `/<anything>/admin` - for example, `/sites/admin`, but not `/sites/admin/page-2` nor `/sites/2/admin` nor `/admin` |
| `/*/priv/*` | `/<anything>/priv/<anything>` - for example, `/admin/priv/sites`, but not `/priv` nor `/priv/page` nor `/admin/priv` |
| `/rule/*/*` | `/rule/<anything>/<anything>` - for example, `/rule/4/new/` or `/rule/10/edit`, but not `/rule` nor `/rule/10/new/save` |
| `/wp/**` | `/wp<anything, even slashes>` - for example, `/wp/assets/subdirectory/another/image.png` or `/wp/admin`, and everything in between, but not `/page/wp`

## How to track visitors who use Internet Explorer

The default Plausible script won't work on Internet Explorer because it uses the document.currentScript API to read configuration options. But you can enabled the "IE compatibility" mode in your Plausible WordPress plugin settings to count visitors who use the Internet Explorer browser.

## I've installed Plausible but stats don't track

You may discover a conflict between the Plausible script and other plugins you are using on your site. Especially performance optimization plugins may cause conflicts.

Plausible script is optimized for performance by default and there's no reason to use any other tricks and techniques on it.

We've built our plugin so it avoids most potential conflicts with performance optimization plugins so we recommend you to use our plugin rather than manually insert our script in order to avoid these issues.

### Troubleshoot conflicts with WP Rocket

You can try to troubleshoot your installation by experimenting with these tips:

* Use our official WordPress plugin to install Plausible on your site instead of manually adding our snippet into the header section of your site

* Disable the "Combine JavaScript Files" settings in WP Rocket

### Troubleshoot conflicts with SiteGround Optimizer

SiteGround Optimizer is another popular performance optimization plugin. If you have issues with your Plausible installation when using the SiteGround Optimizer, you can try one of the following steps:

* Use our official WordPress plugin instead of manually installing our snippet into your site

* Turn off the "combine JavaScript" setting in SiteGround Optimizer

## Contribute to the development of our WordPress plugin

You can contribute to our WordPress plugin too. Add your feature requests, upvote existing request or even contribute with your code. Here's [our main GitHub repo](https://github.com/plausible/analytics) and [our WordPress plugin repo](https://github.com/plausible/wordpress).

Enjoying Plausible Analytics and our WordPress plugin? Please consider leaving a comment in [the official WordPress plugin directory](https://wordpress.org/plugins/plausible-analytics/).