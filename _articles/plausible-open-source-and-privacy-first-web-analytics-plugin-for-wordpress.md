---
layout: article
title: "Plausible: Privacy-first web analytics plugin for WordPress"
description: Plausible Analytics is a web analytics plugin for WordPress that is
  a simple to use, lightweight and privacy-friendly Google Analytics
  alternative.
permalink: /wordpress-analytics-plugin
---
Plausible Analytics is an open source web analytics plugin for WordPress that is an easy to use, lightweight and privacy-friendly Google Analytics alternative.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://wordpress.org/plugins/plausible-analytics/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">On WordPress</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics WordPress plugin](/assets/images/privacy-focused-web-analytics.png "Plausible Analytics WordPress plugin")

1. Ordered list
{:toc}

## How is Plausible Analytics different from Google Analytics?

Plausible Analytics is built to be a more modern [alternative to Google Analytics](https://plausible.io/vs-google-analytics) and other traditional analytics solutions. Here's what makes us different:

* Plausible, unlike Google Analytics, doesn't use cookies, doesn't use any long-term identifiers and doesn't track any personal data. We're exclusively powered by [EU-owned cloud infrastructure](https://plausible.io/blog/google-analytics-illegal). Read more on what makes Plausible a [privacy-first web analytics](https://plausible.io/privacy-focused-web-analytics)
* Plausible, unlike Google Analytics, is [built for speed and performance](https://plausible.io/lightweight-web-analytics). Plausible will not slow down your site
* Plausible, unlike Google Analytics, is [simple to use](https://plausible.io/simple-web-analytics) and get valuable insights from. All the key metrics are displayed on one page, including top posts, referral sources, engagement metrics (time on page, scroll depth, bounce rate and more), external link clicks and goal conversions
* Plausible like WordPress but unlike Google Analytics is [open source software](https://plausible.io/open-source-website-analytics). You can inspect and review our source code to verify that our actions match with our words
* Plausible, unlike Google Analytics, is not a free as in beer product. We don't sell or monetize your site data. We choose the subscription business model rather than surveillance capitalism and are solely funded by the fees our subscribers pay us
* There's a 30-day free trial with no credit card required. If you find Plausible useful, you can get on a paid subscription. The plans start at $9 per month and are based on the number of page views your sites have. You can see the [pricing here](https://plausible.io/#pricing)

## What are the other features of Plausible Analytics for WordPress?

* Track **clicks on external links** so you can see which of your affiliate links are more popular than others
* **Track file downloads** so you can see which of your documents are more popular than others
* **Track successful form submissions** to see conversion rates and conversion attribution of your campaigns 
* **Setup goals and custom events using CSS class names** so you can track conversions and analyze conversion attribution
* Check your Plausible **stats dashboard directly in your WordPress** dashboard
* **Track 404 error pages** that people visit so you can fix them and redirect them to more appropriate pages
* Track **post authors, categories and custom taxonomies**
* Track **logged in vs logged out traffic**
* Send **custom properties alongside pageviews or custom events**
* Track **purchases and revenue for your ecommerce store**
* Track **WooCommerce and Easy Digital Downloads sales** with automatic events such as add to cart, checkout and the purchase funnel
* Track *site search terms*
* **Exclude specific pages from being tracked**
* **Exclude admins from being tracked**. You can exclude editors, authors and contributors from being tracked too
* **Allow specific user roles (editors, authors or contributors) to access the stats dashboard**
* See a **link to the post stats in the toolbar** while browsing your site

## How to get started with Plausible Analytics

To use Plausible Analytics, you need to register an account. To explore the product, we offer you a free 30-day trial. No credit card is required to sign up.

[Click here to register](https://plausible.io/register). It is a simple process and we only ask for your name and email address.

![Register your Plausible account](/docs/img/register-account.png)

After you verify your email address, you need to enter the domain name of the website you want to track. 

Please, remove `https` and `www` from the URL, just keep the hostname (`yourdomain.com`). For example, if your site is `https://www.yourdomain.com` then the part to enter in the "Domain" field is `yourdomain.com`.

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

* You will then be taken through our get started guide to set up the plugin and the different options
* "Plausible Analytics" entry will also show up in the "Settings" section in the left-hand side navigation of your WordPress dashboard. Click on it to further explore the various options available

![Plausible Analytics WordPress plugin settings](/uploads/plausible-analytics-wordpress-plugin-settings.png)

That's it! You are now counting your site stats with a privacy-first web analytics tool. You can now go to our website and access your Plausible Analytics account to view the dashboard.

There are some features that you can enable in the plugin. Here's a look at those.

## Insert your domain name and plugin token

In the "**Domain Name**" field, make sure you use the same domain name as you've added it to your Plausible account. Please remove `https` and `www` from the domain name, just keep the hostname (`yourdomain.com`).

To automate the plugin setup, you need to generate a plugin token in your Plausible site settings and paste it into the "**Plugin Token**" field in the plugin. This will make it so that you can take all the actions directly in the settings area of our WordPress plugin without needing to visit your Plausible site settings.

You'll find a link to where to go to generate the token directly in the plugin itself.

![Create Plugin Token](/docs/img/plausible-plugin-api-token.png)

After you generate a token, you'll be able to see a list of all your plugin tokens in your Plausible site settings in the "**Integrations**" section at any time.

### Oops! The token you used is invalid

Are you seeing the "**Oops! The Plugin Token you used is invalid**" error message after trying to connect your plugin token? 

Here are the most common causes of that error:

* Do make sure that you're inserting the plugin token and not some other key. The plugin token is always in this format: `plausible-plugin-xxxxxxxxxxxx`. 
* Do make sure to create the plugin token for the exact site that you're trying to connect to as plugin tokens are site specific
* If both of these are fine, then please create a new plugin token and then try to connect it to the plugin once again

## How to view your stats directly in your WordPress dashboard

You can view your Plausible stats dashboard directly in your WordPress dashboard without needing to visit our website.

In the "View your stats in your WordPress dashboard" section of the plugin settings, enable the "View stats in WordPress" option.

You can now go to the "Dashboard" section in the left hand side of your WordPress admin navigation menu. Then click on "Analytics" to view your site statistics within your WordPress dashboard.

The site statistics within your WordPress dashboard are available to the administrators by default. In the "Show stats dashboard to additional user roles" section of our WordPress plugin, you can also grant access to the stats dashboard to editors, authors and contributors.

## How to enable a proxy to get more accurate stats

Plausible script is not blocked to the same extent as Google Analytics but we're blocked by some blocklist maintainers who have taken the stance that they want to block every tracking script and don't want to have the responsibility to judge what's good and what's bad.

Site owners feel unfairly targeted and an innocent casualty of this arms race between blocklist maintainers and the adtech industry. Site owners want some data to figure out what's going on and learn what they can do to improve. It's unfortunate for them to lose valuable, privacy-friendly insights that help them create a better user experience.

We've introduced a proxy feature after hearing from so many site owners who expect privacy-first analytics not to be blocked. We wanted to give a choice to people that use Plausible Analytics.

* **Not concerned about missing data?** Simply run our default script. A portion of your visitors will block it but otherwise it works all fine. In our testing, between 6% and 26% of people block scripts all depending on the type of the site and the audience. In more extreme cases, with very tech-savvy referral sources these numbers can get up to 60%
* **Are you concerned about missing data?** Proxy our script. We've made it easy to do so in our WordPress plugin
* In the "Bypass adblockers" section of our WordPress plugin settings, turn on the "Enable proxy" option

![Enable proxy in our WordPress plugin](/docs/img/plausible-wordpress-plugin-proxy.png)

* If you have a caching plugin enabled, please make sure to clear the cache for the changes to take effect
* Enabling the proxy will make our script run as a first-party connection from your domain name. The proxy uses WordPress' API with a randomly generated endpoint, starting with `yourdomain.com/wp-json` and it creates a randomly named folder and file in the `/wp-content/uploads/` directory

### Stats not being recorded after enabling the proxy?

We've put a lot of effort to ensure that the proxy works smoothly and have taken measures to prevent conflicts with popular performance optimization and caching plugins. However, sometimes things might not go as planned.

Many problems with proxy activation are due to restrictive firewall or security settings, where PHP may not be allowed to fetch and copy external resources to the server.

In case plugin conflicts arise with your WordPress, it might cause the stats not to be recorded properly. So please give your integration a quick double-check after you enable the proxy to make sure the stats are being recorded. 

Some of the common issues that prevent the proxy from being setup correctly are:

* **Browser console errors**: After enabling the proxy, visit your website and check the browser console for any error messages related to the proxied script. [See more here](https://plausible.io/docs/troubleshoot-integration)
* **SSL Certificate Usage**: If your site uses an SSL certificate, please go into your WordPress general settings and make sure to add the `s` in the `https://` both in the `WordPress Address (URL)` and `Site Address (URL)` fields. Then please do try to enable the proxy again
* **Firewall or Security Settings**: Do you or your hosting company have any firewall or other security plugins activated that may affect the ability for WordPress to create files? Please do disable these or do put your proxy file path and directory in the allow list. Then please do try to enable the proxy again
* **Caching**: Do you have any caching enabled either within your WordPress admin dashboard, within your hosting company or Cloudflare? Please try to clear all caches and then try to enable the proxy again
* **File Permissions**: Do you have correct permissions for WordPress to be able to create files in the uploads directory? The folder permissions (755) for the `/wp-content/uploads/` directory and file permission (644) are needed
* **PHP error logs**: Do check your PHP error logs after trying to enable the proxy. You may find helpful messages there to guide further troubleshooting

After making any changes, remember to disable the proxy and clear all caches. Then, try enabling the proxy again and clear all caches once more.

### If the proxy script is slow

We will send you a notification if the proxy takes too long (>500ms) to send pageviews. This probably means the speed module failed to install automatically. To resolve this:

* Access your server using (S)FTP, SSH or your host
* Navigate to the directory of the Plausible plugin, usually `wp-content/plugins/plausible-analytics`
* Open the `mu-plugin` directory within the plugin directory and copy the `plausible-proxy-speed-module.php` file to the `wp-content/mu-plugins` folder (if the `mu-plugins` folder doesn't exist within `wp-content`, create it before copying the file)

## How to track external link clicks

Outbound links play a significant role on the open web and Plausible Analytics plugin can help you automate external link click tracking on your WordPress site.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Outbound links" option.

All the external link clicks will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "Outbound Link: Click" goal as soon as the first external link click has been tracked.

## How to track cloaked affiliate link clicks

Plausible Analytics plugin can help you automate cloaked affiliate link click tracking on your WordPress site.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Cloaked affiliate links" option.

All the cloaked affiliate link clicks will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "Affiliate Link: Click" goal as soon as the first cloaked affiliate link click has been tracked.

## How to track file downloads

File downloads tracking is essential for many site owners and Plausible helps you automate this process. Our file downloads tracking captures a file download event each time a link is clicked with a document, presentation, text file, compressed file, video, audio or other common file type. 

Both internal and external files downloads are tracked. These file extensions are tracked:

`.pdf, .xlsx, .docx, .txt, .rtf, .csv, .exe, .key, .pps, .ppt, .pptx, .7z, .pkg, .rar, .gz, .zip, .avi, .mov, .mp4, .mpeg, .wmv, .midi, .mp3, .wav, .wma, .dmg`

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "File downloads" option.

All the file downloads will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "File Download" goal as soon as the first link that leads to a file has been recorded.

## How to track form completions

Form submissions tracking is essential for many site owners and Plausible helps you automate this process. Our form submissions tracking captures a form completion event upon each successful form submission on your site. 

We have verified and tested this tracking with Contact Form 7, WP Forms, Ninja Forms and Elementor Forms but it should work for most other forms plugins as well. 

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Form completions" option.

All the successful form completions will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "WP Form Completions" goal as soon as the first successful for submission has been recorded. If you have multiple forms on your site, you can click on the "WP Form Completions" goal to see the breakdown over different pages the forms were submitted from.

## How to setup custom events to track goal conversions

Plausible Analytics plugin makes it easy to set up custom events and track actions such as signups or button clicks.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Custom events" option.

Now you need to tag the site elements you want to track. No JavaScript knowledge is required to do this. The only thing you need is to tag the site element you want to track with a CSS class name directly in your WordPress editor. Here's how:

* You can click on any block element you want to track. This will open up the block menu on the right-hand side of your screen

![Click on any block element you want to track](/docs/img/wordpress-button-css-class-name.png)

* You can then click on "Advanced" and add a CSS class name in the "Additional CSS class(es)" field. Add the CSS class name in this format: `plausible-event-name=MyEventName`. For instance, if you want to track signup button clicks, you could use: `plausible-event-name=Signup+Submit`

![Add a CSS class name in the "Additional CSS class(es)" field](/docs/img/wordpress-css-class-name.png)

Custom events won't show up automatically in your Plausible dashboard. You’ll have to configure the goal for them to show up. Here's how:

* To configure a goal, go to your website's settings in your Plausible Analytics account and visit the "Goals" section
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form 
* Select Custom event as the goal trigger and enter the name of the custom event you are triggering. The name must match the one you added as a CSS class name on your site for conversions to appear in your analytics dashboard
* In our example where you added a CSS class name `plausible-event-name=Signup+Submit`, the goal to add to your Plausible account is `Signup Submit` (plus is replaced by a space)
* Next, click on the "Add goal" button and you'll be taken back to the Goals page

When you navigate back to your Plausible dashboard, you should see the number of visitors who triggered the custom event. Custom events are listed at the bottom of your dashboard in the "Goal Conversions" section. Your custom event will appear there as soon as the first conversion has been recorded.

For more details on custom events, please check out [this documentation page](https://plausible.io/docs/custom-event-goals).

## How to send custom properties

You can attach custom properties when sending pageviews or custom events to create custom metrics. Custom properties allow you to collect and analyze metrics that we don't track automatically.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Authors and categories" option to do so.

This will then start sending your post author names, post categories and custom taxonomies as custom properties alongside pageviews. You can then filter your Plausible dashboard by a specific author to see all the relevant stats for the posts published by that particular writer or a specific category to see the popularity of a category.

Authors, categories and custom taxonomies work out of the box as soon as they're enabled, but if you prefer you can manually send additional custom properties alongside custom events or pageviews. Here's how to do so:

### Custom properties for custom events

Let's say you have a button both in the header and footer of your site. 

In addition to tracking button clicks, you might want to know which section of your site the button was clicked on. Instead of creating separate goals for each button, you can send a custom property instead:

`plausible-event-<property>=<value>` allows you to define custom properties that are sent with your custom event. For example `plausible-event-position=footer`. The full CSS class name would look like this:

`plausible-event-name=Signup+Submit plausible-event-position=footer`

You can add as many of these classes as you want. And the names can be anything that you want. Custom properties will show up automatically on your dashboard as long as you've added the goal itself. You don't need to manually add them in your settings.

For more details on custom events and custom properties, please check out [this documentation page](https://plausible.io/docs/custom-event-goals).

### Custom properties for pageviews

Post authors, categories and custom taxonomies are tracked out of the box as soon as the "Authors and categories" option is enabled in the "Enhanced measurements" section of our WordPress plugin settings.

For more details on how to send other custom properties for pageviews, please check out [this documentation page](https://plausible.io/docs/custom-props/for-pageviews#2-add-your-custom-properties-to-your-plausible-snippet).

## How to track ecommerce revenue

Plausible Analytics plugin has a built-in support for [tracking of WooCommerce store activity](https://plausible.io/blog/woocommerce-analytics-plugin) and Easy Digital Downloads as well. Revenue attribution helps you determine which marketing campaigns and landing pages result in the most revenue for your business or ecommerce store.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Ecommerce revenue" option. This will automatically set up and start tracking several WooCommerce or Easy Digital Downloads custom events:

* Add to Cart
* Remove from Cart
* Start Checkout
* Complete Purchase (including revenue)
* Visit /product*

Several custom properties ([also known as custom dimensions in Google Analytics](https://plausible.io/blog/custom-dimensions-analytics)) will start being recorded as well for further analysis:

* product_type
* product_cat
* pa_color
* tax
* cart_total
* cart_total_items
* price
* product_id
* product_name
* quantity 
* shipping
* subtotal
* subtotal_tax
* tax_class
* total
* total_tax
* variation_id

A purchase funnel will be created as well looking at the user journey all the way from viewing a product to completing a purchase. This will help you see the drop-off rates between the different steps and understand your cart abandonment rate.

All this is done automatically for you and you don't need to manually set up any custom events nor make any changes to your code.

### If you're not using WooCommerce or Easy Digital Downloads for your store

You can manually configure the actions you want to track regardless of the technology you use to power your store. Here's how:

* To configure a goal, go to your website’s settings in your Plausible Analytics account and visit the "Goals" section
* You should see a prompt to add a goal. Click on the "+ Add goal" button to go to the goal creation form
* Select "Custom event" as the goal trigger, enter the goal name in the "Event name" field, tick to "Enable Revenue Tracking" and set the currency of your choice
* This currency will be used for total and average revenue metrics in the dashboard. Note that the currency for a specific event cannot be changed later.
* Next, click on the "Add goal" button and you’ll be taken back to the Goals page
* You can now start sending revenue data from your site alongside custom events using JavaScript or the CSS class name approach:

`plausible-event-name=Purchase plausible-revenue-amount=10.29 plausible-revenue-currency=EUR`

For full details on sending revenue data, [take a look here](https://plausible.io/docs/ecommerce-revenue-tracking#3-start-sending-the-revenue-data-from-your-site).

## How to track 404 error pages

Having 404 error pages on your WordPress site can lead to a bad user experience, a negative first impression, and even damage your search engine rankings and traffic you get from Google.

Plausible Analytics plugin can help you identify those broken links and 404 page not found errors. 

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "404 error pages" option.

All the 404 error pages will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see "404" goal as soon as the first visit on an error page has been tracked. 

## How to enable site search tracking

Plausible Analytics plugin can help you understand the activity on your search form and identify the search terms your visitors are searching for. It can also help you know how many results your search results show for the different search terms. 

All this can help you better understand the needs of your audience enabling you to create a better website and more relevant content that answers questions people have.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Search queries" option.

All the search activity will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

You'll see the "WP Search Queries" goal as soon as the first search has been recorded. 

We have a complete guide on WordPress search tracking and effectively using this feature in Plausible [here](https://plausible.io/blog/wordpress-search-tracking).

## How to track logged-in user status

Plausible Analytics plugin can help you understand the status of your logged in or your logged out users.

In the "Enhanced measurements" section of our WordPress plugin settings, enable the "Logged-in user status" option.

All the user status will start being tracked and will be displayed in the "Goal Conversions" report of your Plausible Analytics dashboard. 

In the "Properties" tab of the "Goal Conversions" report, you'll see the "user_logged_in" property as soon as the first visitor has been recorded. 

## How to enable hash-based URL tracking

Does your site contain hash-based URLs such as `yourdomain.com/blog-post#specific-subheading` or `yourdomain.com/#contact`?

Normally the hash part of the URL is discarded in your Plausible dashboard. You can enable "Hash-based routing" in your Plausible WordPress plugin settings to preserve the hash-based routing in your stats and see the different pages your visitors have viewed.

In the "Enhanced measurements" section of the Plausible WordPress plugin settings, enable the "Hash-based routing" option.

## How to track visitors who use Internet Explorer

The default Plausible script won't work on Internet Explorer because it uses the `document.currentScript` API to read configuration options. 

In the "Enhanced measurements" section of our WordPress plugin settings, you can enable the "IE compatibility" mode to count visitors who use the Internet Explorer browser.

## How to exclude specific pages from being tracked

In the "Exclude specific pages from being tracked" section of our WordPress plugin settings, you can add a list of page paths that you don't want to be counted in your website analytics.

Any pages you list should be comma-separated. All entries must begin with a `/`, and should not include the trailing slash as we account for this automatically. 

You can use an asterisk (`*`) to match patterns in your page path URLs. Asterisks can be placed on either end or in the middle of any page path URL. You can for instance exclude all of your articles within a specific directory by setting this pageview goal `/subdirectory-to-exclude*`.

## How to exclude admins and other roles from being tracked

By default, our WordPress plugin excludes your own "administrator" visits from being counted in the stats. You can optionally choose to exclude visits from being counted for other user roles too including authors, editors and contributors. Go to the "Track analytics for user roles" section of our WordPress plugin to do so.

If you'd like to count your visits, you can do so as well. Simply enable the user role that you prefer to track.

## Enjoying Plausible Analytics and our WordPress plugin?

Most of our subscribers come from word of mouth, so if you love Plausible, we'd appreciate if you'd consider leaving a comment in [the official WordPress plugin directory](https://wordpress.org/plugins/plausible-analytics/). Thank you!