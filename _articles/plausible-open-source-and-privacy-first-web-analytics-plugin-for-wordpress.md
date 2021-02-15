---
layout: article
title: "Plausible: Open source and privacy-first web analytics plugin for WordPress"
description: Plausible Analytics is an open source web analytics plugin for
  WordPress that is a simple to use, lightweight (< 1 KB) and privacy-friendly
  Google Analytics alternative.
permalink: /wordpress-analytics-plugin
---
Plausible Analytics is an open source web analytics plugin for WordPress that is a simple to use, lightweight (< 1 KB) and privacy-friendly Google Analytics alternative.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://wordpress.org/plugins/plausible-analytics/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">On WordPress</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics WordPress plugin](/assets/images/privacy-focused-web-analytics.png "Plausible Analytics WordPress plugin")

1. Ordered list
{:toc}

## How is Plausible Analytics different from Google Analytics?

Plausible Analytics is built to be a more modern [alternative to Google Analytics](https://plausible.io/vs-google-analytics) and other traditional analytics solutions. Here's what makes us different:

* Plausible unlike Google Analytics doesn't use cookies and doesn't track any personal data. You don't need to bother your visitors with GDPR consent banners. Read more on what makes Plausible a [privacy-first web analytics](https://plausible.io/privacy-focused-web-analytics)

* Plausible unlike Google Analytics is [built for speed and performance](https://plausible.io/lightweight-web-analytics). Our script is under 1 KB in weight which is 45 times more lightweight than the Google Analytics script. Your site will not be slowed down

* Plausible unlike Google Analytics is [simple to use](https://plausible.io/simple-web-analytics) and get useful insights from. All the main metrics are displayed on one page including top pages, top referral sources, external link clicks and goal conversions. 

* Plausible like WordPress but unlike Google Analytics is [fully open source software](https://plausible.io/open-source-website-analytics). You can review our code and contribute to the development. You can even self-host Plausible on your server and manage your infrastructure

## What are the other features of Plausible Analytics for WordPress?

* Our WordPress plugin excludes your own visits to your website from being counted in your analytics by default
* We make it easy to [track 404 error pages](https://plausible.io/blog/track-404-errors) that people visit so you can fix them and redirect them to more appropriate pages
* We make it easy to [track clicks on external links](https://plausible.io/blog/track-outbound-link-clicks) so you can see which of your affiliate links are more popular than others
* We make it easy for you to serve our script as a first-party connection from a subdomain such as stats.yoursite.com or plausible.yoursite.com. This makes your stats more accurate as it avoids the adblockers 
 
## How to install Plausible Analytics WordPress plugin

Here's how you can install the Plausible Analytics plugin on your WordPress site:

* Go into the "Plugins" section in the left-hand side navigation within your WordPress dashboard
* Click on "Add New"
* In the search box in the top right, type "Plausible Analytics" and press enter

![Search and install the "Plausible Analytics" WordPress plugin](/uploads/wordpress-plugin-search.png)

* Click on the "Install Now" button on the listing of our official "Plausible Analytics" plugin
* After the installation is finished, click on the "Activate" button

![Activate our WordPress plugin](/uploads/activate-our-wordpress-plugin.png)

* "Plausible Analytics" entry will now show up in the "Settings" section in the left-hand side navigation of your WordPress dashboard. Click on it to explore the different options available
* Select the options that you want and click on the "Save Changes" button
* If you have a cache plugin activated, do purge the cache just in case

![Plausible Analytics WordPress plugin settings](/uploads/plausible-analytics-wordpress-plugin-settings.png)

That's it! You are now counting your site stats with a privacy-first web analytics tool. You can now go to our website and access your Plausible Analytics account to view the dashboard.

There are some optional Plausible features that we recommend you enable too. Here's a look at those.

### How to track external link clicks 

Outbound link clicks won’t show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up.

* To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "Goals" section. 
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form.

![Visit the "Goals" section in your Plausible account](/docs/img/goal-conversions.png)

* Select Custom event as the goal trigger and enter this exact name: Outbound Link: Click.

![Select Custom event and create a goal](/docs/img/outbound-link-click-goal.png)

* Next, click on the "Add goal" button and you’ll be taken back to the Goals page. 

After you've completed this process, all the external link clicks will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "Outbound Link: Click" goal as soon as the first external link click has been tracked.

### How to track 404 error pages

404 error pages won't show up automatically in your Plausible dashboard. You'll have to configure the goal for them to show up.

To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section. You should see a prompt to add a goal.

Click on the "+ Add goal" button to go to the goal creation form.

Select Custom event as the goal trigger and enter this exact name: 404.

Next, click on the "Add goal" button and you'll be taken back to the Goals page. After you've completed this process, all the 404 error pages will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. You'll see "404" goal as soon as the first visit on an error page has been tracked.

Click on "404" to see the full list of all visits on all error pages and have your dashboard filtered by error pages only. Click on a particular error page URL to filter the dashboard by those clicks only and get the full overview of that specific URL. Then you can figure out how your visitors discover the broken links and fix them.

### How to exclude admins from being tracked

By default, our WordPress plugin excludes your own visits from being counted in the stats. 

However, if you'd like to count your own visits, you can enable the tracking for yourself too.

### How to serve our script as a first-party connection from your domain name

If you'd like to serve our script as a first party connection from your subdomain (such as plausible.yourdomain.com or stats.yourdomain.com), you need to enable the custom domain feature in your Plausible Analytics account. You can see the instructions here.

After you've completed the setup process on our website, you can then switch on the custom domain feature in our WordPress plugin too.

## Contribute to the development of the Plausible Analytics WordPress plugin

Thanks to [Mehul Gohil](https://mehulgohil.com/) for helping us build the Plausible Analytics WordPress plugin and for keeping it up to date with the latest features.

You too can contribute to our Plausible Analytics WordPress plugin on GitHub. You can add your feature requests, upvote existing request or even contribute with your own code.

This is [our main GitHub repo](https://github.com/plausible/analytics) and [our WordPress plugin repo](https://github.com/plausible/wordpress).