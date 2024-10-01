---
layout: post
title: "WordPress plugin: Track popular searches on your site"
description: Easily track the popular search terms visitors are using on your
  WordPress site. Optimize your site and improve user experience.
slug: wordpress-search-tracking
date: 2024-09-28T15:08:11.500Z
author: hricha-shandily
image: /uploads/wordpress-search-queries-tracking-with-plugin.png
image-alt: Wordpress search queries tracking with Plausible plugin
---
**TL;DR:**

* Overview of useful WordPress plugins for implementing site search forms and displaying customizable search results.
* Tracking accurate, advanced site search analytics with one-click.
* Combining search analytics with purchase data, along with other metrics like pages visited and geographies, to create a comprehensive purchase journey analysis.
* GDPR-compliant, user-friendly, WordPress plugin. No consent banner required.

Having a search experience built in your WordPress website is many times a major expectation from your visitors. 

This is especially true if you run an e-commerce store, a publication or a blog, a knowledge-base, an aggregator website like one for booking buses/hotels/flights, matching job profiles or dating profiles, a books/songs library, etc. 

An on-site search bar is great for user-experience as it instantly matches them to what they are looking for. It is also a fantastic way of getting customer insights directly from the horse’s mouth: knowing about their demands, preferences, sales opportunities, current trends, stock-up requirements, etc.

Tracking what your customers are looking for when they land on your website can help understand if they:

1. Find what they were looking for, i.e. do you even offer what they are searching for?
2. Convert or not, when they found what they were searching for?

Both these answers open doors to relevant actions that will improve your business. To illustrate, assume you sell socks in an eCommerce store.

With site search terms data, you find out that visitors were searching for “red Christmas ankle socks” but it is not something you currently sell. If there are enough searches for the same, maybe you should stock these socks up.

Or maybe, you should not stock them up in case you don’t cater to seasonal searches or cannot ship to the country where these searches came from.

Alternatively, let’s say you already sell “red Christmas ankle socks” and the data tells you that your site visitors found what they were searching for but didn’t buy from your site. Then, you’ll know that something is not working right for them: your product quality, pictures, description, pricing, shipping time, reviews, etc.

Or say, you run a blog on B2B marketing. If you find out about the topics your readers typically search for, you can prioritize those articles.

In this article, we are sharing how you can implement an end-to-end search tracking –– right from getting the search functionality up in your site to mapping it to other relevant business analytics, so you can make data-informed business decisions.

1. Ordered list
{:toc}

## Implementing site search in WordPress

The default WordPress search function is an option, but it is usually considered basic. 

Here is a quick, high-level overview of some popular plugins that you can check out, followed by a deeper analysis of features.

| **Plugin name**                          | **Pricing options**                          | **Rating** | **Active installations** |
| ---------------------------------------- | -------------------------------------------- | ---------- | ------------------------ |
| SearchWP Live Ajax Search                | Free; paid plans starting $99/year           | 4.9        | 50,000+                  |
| Ivory Search                             | Free; paid plans starting $19.99/year        | 4.9        | 100,000+                 |
| Relevanssi                               | Free; paid plans starting $131/year          | 4.8        | 100,000+                 |
| Ajax Search Lite                         | Free; $39 for a regular license              | 4.7        | 80,000+                  |
| Jetpack Search                           | Free; paid plans starting $70/year           | 4.4        | 5,000+                   |
| Better Search                            | Free & open source; pro license available    | 4.5        | 7,000+                   |
| Search & Filter                          | Free; paid plans starting $25/year           | 4.6        | 50,000+                  |
| WP Search with Algolia                   | Free; paid plans starting with pay-as-you-go | 4.5        | 7,000+                   |
| WP Extended Search                       | Free & open-source                           | 4.9        | 20,000+                  |
| FiboSearch – Ajax Search for WooCommerce | Free; paid plans starting $49/year           | 4.9        | 100,000+                 |



Let’s explore each option in more depth.

### SearchWP Live Ajax Search

[SearchWP](https://wordpress.org/plugins/searchwp-live-ajax-search/) plugin provides real-time, Ajax-powered search results with indexing capabilities. One of the most popular plugins for this purpose, it constantly offers thoughtful, newer and powerful features.

Usually suitable for websites with diverse content types requiring flexible search customization.

Key features include:

* Real-time Ajax search for instant results.
* Templates to make custom, embeddable search forms.
* Indexes, extracts, searches and presents various content types like custom post types, custom fields, taxonomies, PDF/Office documents, and more.
* Search results support Boolean search and keyword stemming.
* Integrates with Multisite, WPML, eCommerce platforms, and more.
* Analytics on search queries, visitor clicks, click-through-rates.
* Customizable search result ordering for better relevance.

Things to consider:

* Might be an overkill for smaller websites that don’t need complex indexing.
* Requires some technical setup for users unfamiliar with advanced search customization.
* Paid versions can be expensive for smaller budgets.

### Ivory Search

[Ivory Search – WordPress Search Plugin](https://wordpress.org/plugins/add-search-to-menu/) is another preferred one. It helps you display custom search forms in various areas of your site, including the header, footer, sidebar, widget areas, navigation menu, or within posts, pages, and custom post types. You can embed these forms using shortcodes.

Key features include:

* Searches WooCommerce products, including SKU and attributes, with customizable results.
* Indexes media files (images, audio, video, PDFs) by title, caption, and description.
* Creates unlimited search forms tailored for specific content types.
* Displays search forms in headers, footers, navigation menus, or anywhere using shortcodes.
* Highlights searched terms and supports fuzzy matching and keyword stemming.
* Controls the display order of search results based on multiple criteria.
* Excludes specific content types from search results.

Things to consider:

* Can be challenging for beginners to configure the unlimited search form options without proper guidance.
* Lacks advanced search filtering options like Boolean search or keyword stemming.

### Relevanssi

[Relevanssi](https://wordpress.org/plugins/relevanssi/) is another powerful plugin that enhances WordPress search by prioritizing relevance in search results and supporting partial word matching, fuzzy matching, and customizable excerpts.

Key features include:

* Search results sorted by relevance rather than date.
* Fuzzy Matching, i.e. supports partial word matching for flexible searches.
* Custom Excerpts, i.e. highlights search terms within results for better visibility.
* Searches comments, tags, categories, and custom fields.
* Allows for AND/OR searches and phrase searching.
* Tracks search queries, popular searches, and queries with no results.
* Compatible with WordPress multisite installations.
* Includes the ability to index custom content types and taxonomies.

Things to consider:

* Can be resource-heavy, especially on large sites with lots of content.
* Setting up custom excerpts or configuring advanced search options may require technical knowledge.
* Costlier than its alternatives.
* No real-time Ajax search, which may be a drawback for users wanting instant results. Although, Relevanssi offers that option as a [separate plugin](https://wordpress.org/plugins/relevanssi-live-ajax-search/).

### Ajax Search Lite

[Ajax Search Lite](https://wordpress.org/plugins/ajax-search-lite/) plugin delivers real-time search results with customizable layout options and filtering by categories or tags. It integrates easily into most themes and supports image-based search results. More suitable for small to medium-sized sites.

Key features include:

* Provides real-time results as users type.
* Flexible styles and layout options to match site design.
* Filters search results by content type (posts, pages, custom types).
* Allows searching within specific categories and tags.
* Responsive design: Optimized for mobile devices.
* Keyword suggestions: Auto-suggestions for better search accuracy.
* Displays images in search results for visual engagement.
* Offers custom results layout. Modify result display (list or grid format).
* Shortcode integration: Easy to add to posts, pages, or widgets.
* Compatible with most WordPress themes without major changes.

Things to consider:

* Lacks advanced analytics or search tracking, limiting insights into user search behavior.
* More suitable for smaller or mid-sized sites; large sites may find performance limitations.
* Limited integration with eCommerce platforms, making it less ideal for product-heavy sites. Has basic support for WooCommerce.

### Jetpack Search

[Jetpack Search](https://wordpress.org/plugins/jetpack-search/) plugin offers fast, scalable, and real-time search results with advanced language support and relevance algorithms, making it a considerable choice for large, multilingual websites.

Key features include:

* Provides real-time search results without page reloads.
* Allows users to filter by categories, tags, dates, and custom taxonomies.
* Customizable design.
* Updates the search index within minutes of site changes.
* Supports eCommerce product searches.
* Handles advanced language analysis for 38 languages.
* Spelling correction: Fast and accurate correction of search queries.
* Modern ranking algorithms: Ensures highly relevant search results based on user behavior.

Things to consider:

* Jetpack's overall plugin can be resource-intensive and may slow down smaller sites.
* Lacks analytics.
* Customization options for search display are not as advanced as some other plugins.

### Better Search

[Better Search – Relevant search results for WordPress](https://wordpress.org/plugins/better-search/) plugin is simple and open-sourced.

Key features include:

* Prioritizes relevance-based search, not date-based.
* Allows template customization for tailored search result displays.
* Search heatmaps: Tracks popular search terms to understand user behavior.
* Supports custom post types, extends search capabilities beyond posts and pages.
* Works with popular caching plugins to ensure performance.
* Easy to install and configure without requiring advanced technical knowledge.

Things to consider:

* Lacks real-time search or Ajax functionality, which can feel slower.
* Customization options for the appearance of search results are limited compared to other plugins.
* Analytics and tracking features are not as detailed as some alternatives.

### Search & Filter

[Search & Filter](https://wordpress.org/plugins/search-filter/) plugin refines your content discovery with filtering options. Narrow down results using Categories, Tags, Custom Taxonomies, Post Types, and Publication Dates –– or combine these criteria for precision. This system can replace traditional search boxes, allowing users to filter posts and pages effortlessly. 

Key features include:

* Custom search and filtering by categories, tags, custom taxonomies, and post types
* Flexible input types including dropdowns, checkboxes, and radio buttons
* Ajax functionality for results without page reloads
* Result ordering by criteria like date and title
* Drag & drop editor for easy form customization
* eCommerce compatibility
* Shortcode and widget support for placing search forms anywhere
* Multilingual support compatible with WPML

Things to consider:

* No built-in auto-suggestion features, which could limit user experience.
* Lacks analytics and search query tracking.

### WP Search with Algolia

[WP Search with Algolia](https://wordpress.org/plugins/wp-search-with-algolia/) plugin integrates Algolia’s fast and scalable infrastructure for real-time search results, considerable for large sites with high traffic and developers needing advanced customization.

Key features include:

* Integrates the search tool Algolia directly into a WordPress website, using API keys.
* Instant search results: Provides real-time results as users type.
* Autocomplete suggestions: Enhances user experience with predictive text suggestions.
* Customizable search: Allows full customization of search behavior and display.
* Supports multiple content types: Indexes posts, pages, and custom post types.
* Scalable performance: Leverages Algolia’s infrastructure for fast and efficient search, even on large sites.
* Developer-friendly: Offers hooks and filters for further customization.

Things to consider:

* Requires an Algolia account.
* Initial setup might be complex for users without technical knowledge, as it involves API key integration​.

### WP Extended Search

[WP Extended Search](https://wordpress.org/plugins/wp-extended-search/) plugin is free and open-source. It adds advanced search filters for post titles, content, categories, tags, and metadata. The setup is user-friendly, and the plugin is lightweight, making it suitable for most WordPress sites.

Key features include:

* Advanced search filters: Customize searches across post titles, content, excerpts, metadata, categories, and tags.
* Multiple search combinations: Allows for flexible search criteria configurations.
* Custom post type support: Enables searching across custom content types.
* Exclusion options: Exclude specific content types or posts from search results.
* Easy setup: User-friendly interface for quick configuration.
* Lightweight and fast: Minimal performance impact on site speed.

Things to consider:

* Doesn’t offer real-time or Ajax-based search, limiting responsiveness.
* Limited design customization options for search results display.
* Lacks analytics or search term tracking.

### FiboSearch – Ajax Search for WooCommerce

[FiboSearch – Ajax Search for WooCommerce](https://wordpress.org/plugins/ajax-search-for-woocommerce/) plugin provides instant product search results with product previews (images, prices, and descriptions) and supports searching by SKU and product attributes.

Key features include:

* Instant product search results: Shows live search results as users type.
* Detailed product previews: Displays product images, prices, and descriptions directly in search results.
* Allows searches by SKU and other WooCommerce product attributes.
* Customizable search box and results: Offers design options to match your site's styling.
* Filters search results by product categories.
* Mobile optimization: Ensures smooth functionality on mobile devices.
* Tracks and displays search queries data, for insights.

Things to consider:

* Its focus on WooCommerce means it is not that suitable for non-eCommerce websites.
* Analytics are basic compared to more detailed search behavior tracking offered by some of its alternatives.

*Side note*: These lists are purely informational, based on the available information in October 2024. We do not endorse either of the above mentioned plugins.

## Site search plugins lack analytics

As illustrated above, many plugins don’t even offer basic analytic data, since their main focus is to help WordPress site owners implement the search widget and relevant results.

For eg., The JetPack Search [FAQ](https://jetpack.com/support/search/frequently-asked-questions/) clearly states that “The dashboard does not record the terms your readers use when using the Jetpack Search form on your site (or any other search forms on your site).”

Only a few plugins allow you to track and filter basic search statistics by time period, whether results were found, specific search strings and substrings, etc. 

No plugins offer granular insights.

Site owners need supporting data along with basic site search analytics to be able to draw a complete picture of the user journey––from searching to converting––and make real business decisions.

Site search data coupled with other important data, like:

* Geographical data (where particular searches came from) 
* Conversion data (whether a search resulted in a purchase/add-to-cart/wishlist or not)
* Total traffic data
* Visit duration data
* Landing pages visited data
* Entry and Exit pages data
* Devices, operating systems, browsers data
* etc.,

…is the best kind of data. 

It provides you with all the necessary information –– an end-to-end view from search terms to conversions –– to make important business decisions. It’s like SEO, but internally for your site.

Therefore, you need a analytics plugin in your WordPress toolkit.

## Plausible WordPress plugin for accurate site search and web analytics

Plausible Analytics is a lightweight, super-simple, web analytics [plugin for WordPress](https://wordpress.org/plugins/plausible-analytics/). The best part is that all it takes is one click to enable site search terms tracking.

Plausible works regardless of the site search plugin or WordPress theme or custom code you use. If there’s a search happening on your site, with the help of any technology, Plausible can track and display the data for you.

### Features in the Plausible WordPress plugin

* Track any and all search terms used on your site.
* See how many search results are generated for each search term your visitors use.
* Link site searches to any important business goals.
* Track data from any search plugin you use.
* Easy, single-page dashboard.
* Minimal development. Up in minutes.
* Updated regularly.

### Plausible is more powerful than Google Analytics, for site search tracking and other data

Google Analytics 4 also offers site search tracking as an enhanced measurement. But Plausible is better at it for the following reasons.

#### Showing the number of search results generated

Plausible Analytics plugin can show you how many search results are generated for each search term your visitors use. For eg., If a visitor searches for "paid ads guide" on your top marketing articles compilation site, the plugin can tell you that the search returned 20 results.

GA4 does not have this capability.

#### Comparing site search data with regular traffic

In Plausible, you get a single dashboard with all your traffic data. For site search data, you simply add it as a filter in the same dashboard and see a holistic view.

![Comparing site search data with regular traffic](/uploads/search-queries-in-plausible.jpg "Comparing site search data with regular traffic")

In Google Analytics, if you want to compare total sessions with the ones that had searches, you need to build two different cohorts/audience segments in a complex settings panel: “Sessions with site search” and “sessions without site search”, then utilize it all as dimensions in a [Free Form report](https://support.google.com/analytics/answer/9327972?hl=en#zippy=%2Cin-this-article) to start analyzing data.

![Free form report in GA4](/uploads/free-form-report-in-ga4.jpg "Free form report in GA4")

#### Ease of reporting

To be able to see a simple site search report, you need to first build a complex Free Form report, understanding and choosing from different dimensions and adding them correctly.

![building a free form report in GA4](/uploads/building-free-form-report-in-ga4.jpg "building a free form report in GA4")

Similarly, joining site search data with other useful data like conversion data, landing pages visited data, or SEO data is more cumbersome in Google Analytics 4, requiring either creating an even more unnecessarily complex Free Form report from scratch, or switching between this Free Form report and Traffic and User Acquisition reports, hidden beneath layers of menus.

While doing that, you also need to ensure that Google Tag Manager settings are at par, with all the parameters in place with proper character limits.

In Plausible, the site search tracking setup is basically one toggle, and the analysis happens on a single-page, user-friendly report, with even more accurate insights and less cumbersome work than GA4.

Even the SEO data (directly sourced from Google Search Console), channels acquisition data (i.e., the “Traffic Acquisition” report in GA4), pages data, and all the other data is available on one single page report.

Plausible provides more accurate insights because our script doesn’t require a consent banner setup, while GA4 does and consent banner declines cause a [data loss of 55%](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/), in comparison to Plausible.

Plausible Analytics is a [simpler alternative](https://plausible.io/simple-web-analytics) to Google Analytics 4. We: 

* Are more accurate
* Are [lightweight](https://plausible.io/lightweight-web-analytics)
* Block bot traffic by default
* Are less blocked by ad blockers and privacy-first browsers
* have compliances in-built, no consent banner needed
* Are open-source and privacy-first, and more accepted by aware end-users

## Getting started with the Plausible plugin

Get started with Plausible Analytics by [creating a free account](https://plausible.io/register). You can test all features with a 30-day trial, with no credit card required. Just sign up with your name and email—it’s quick and easy.

While this account can be used on any website, we recommend using our [official WordPress plugin](https://wordpress.org/plugins/plausible-analytics/) for a much easier and quicker installation. For doing so, head over to your WordPress dashboard and follow the following steps.

* Go into the “Plugins” section in the left-hand side navigation and click on “Add New.”
* In the search box, type “Plausible Analytics” and press enter. 
* Click the “Install Now” button on the listing of our official “Plausible Analytics” plugin. After the installation is finished, click “Activate.”
* Next, you'll be guided through our setup tutorial to configure the plugin and its various options. 
* You'll also find a 'Plausible Analytics' entry in the 'Settings' menu on the left-hand side of your WordPress dashboard. Click it to explore more features.
* In the 'Domain Name' field, enter the same domain from your Plausible account, but remove 'https' and 'www' (e.g., yourdomain.com).
* Back in Plausible site settings, generate a plugin token and paste it into the 'Plugin Token' field in the plugin settings. This lets you manage everything directly in the WordPress plugin.

We explain these steps, along with other useful settings than just site search tracking, in more detail in our [official WordPress plugin guide](https://plausible.io/wordpress-analytics-plugin).

T﻿his way, you will ensure that the supporting data, like conversion data, effective marketing channels, traffic, geographies, etc., start collecting. Meanwhile, turn on site search tracking.

### Enable site search tracking with a switch

In the “Enhanced measurements” section of the Plausible WordPress plugin settings, enable the “Search queries” option.

![enable search queries setting in plausible plugin for wordpress](/uploads/search-queries-wp-plugin-setting.png "enable search queries setting in plausible plugin for wordpress")

That’s it. Your site search tracking is activated, with no additional action required. 

N﻿ow, whenever a search takes place in your site, it will be visible in your Plausible and WordPress dashboard along with the data on what was searched, how many times out of total traffic, how many results were displayed, conversion rate, etc. Let's explore this in more detail below.

## Plausible in action

You can feel the Plausible experience by visiting our [live demo link](https://plausible.io/plausible.io), where our website’s statistics are completely, publicly available.

Next, let’s understand how to use your Plausible dashboard for understanding the site search data. You can also have a look at our [list](https://plausible.io/blog/woocommerce-analytics-plugin#best-practices-for-using-plausible-analytics-for-woocommerce) of best practices to ensure a fully functioning Plausible dashboard.

### Filter Plausible dashboard by “Goal is WP Search Queries”

When you turn on the “Search Queries” setting in your WordPress plugin settings as explained above, search term tracking is auto-implemented as a [goal](https://plausible.io/docs/goal-conversions) in Plausible by the name of “WP Search Queries.” You can edit this display name though.

You can click on this entry from the “Goals” section of the dashboard or use the [Filter](https://plausible.io/docs/filters-segments) option to segment your dashboard by this goal only. Once done, you will be able to view:

* **Unique visitors vs unique & total conversions, with conversion rate**. Since “WP Seach Queries” is implemented as a goal, the conversion in this context means that successful searches were conducted.
* **Other data related to the activity that took place during** the sessions in which searches were done.
* **The exact search queries** (case-sensitive) that took place. These queries are auto-implemented in the form of [custom properties](https://plausible.io/docs/custom-props/introduction), so no additional setup is needed on your end.

![WP search queries filter on Plausible dashboard](/uploads/wp-search-queries-filter.png "WP search queries filter on Plausible dashboard")

How to read this report?

In the year so far, we had 32 unique visitors, out of which 3 visitors searched for something on the site 8 times. They all came from Direct sources. They exited the website from different pages (details mentioned). They came from the mentioned cities and used the mentioned browsers. They searched for “tshirt”, “Hoodie” and “hoodie.”

That’s the insight you get in an instant. Furthermore, you can go as deep as needed by clicking on any entry in this report. Let’s say you want to see the specific data for the search term: “tshirt.”

### See related analytics for a particular search term

Now you can simply click on the entry “tshirt”, or use the Filter feature. This way, all the data in the report will be related to “tshirts” searches only: the marketing acquisition channels, the geographical data, the top/entry/exit pages, and everything else. 

If you want to see if tshirts lead to an actual purchase on the site, you can visualize that with the help of [funnels](https://plausible.io/docs/funnel-analysis).

![search to purchase funnel in plausible](/uploads/tshirt-search-to-purchase-funnel.jpg "search to purchase funnel in plausible")

*P.S. The funnel in this example has been setup for a demo WooCommerce store. If you actually use WooCommerce, check out [here](https://plausible.io/blog/woocommerce-analytics-plugin) how to enable your store’s tracking in a single click, with our WordPress plugin.*

Apart from completing purchases, you can track any goal related to the search term. A goal can be anything for your website: a successful purchase, a newsletter subscription, a product sign-up, event sign-up, wishlisting of items, etc. And any of that can be tracked from successful site searches to meeting that goal!

## Some more tips

* Create [audience segments](https://plausible.io/audience-segmentation) with the help of filtering options, to save answers to particular business questions.
* [Export the search statistics](https://plausible.io/docs/export-stats) as a CSV file.
* [Link Google Search Console](https://plausible.io/docs/google-search-console-integration) with Plausible to understand search data from Google, in addition to on-site search as well.

**Get started and [install the plugin for free now](https://wordpress.org/plugins/plausible-analytics/)** We are waiting to see what you do with it!