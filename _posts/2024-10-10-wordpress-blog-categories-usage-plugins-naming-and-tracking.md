---
layout: post
title: "WordPress blog categories: how to use, advanced plugins, and performance
  tracking"
description: What are categories in WordPress posts, difference from tags, how
  to use, list of plugins, & how to optimize.
slug: wordpress-blog-categories
date: 2024-10-10T09:38:52.038Z
author: hricha-shandily
image: /uploads/wordpress-post-categories.png
image-alt: "using categories in wordpress "
---
Most of the time, we visit a site or a blog with a goal (or at least intent) in mind. Imagine you're searching for home workout ideas and land on a fitness blog with hundreds of unorganized posts. You were likely looking for something specific, like "yoga for beginners" or "quick cardio routines."

The presence of such categories helps readers quickly find the content they’re after and makes navigation easier.

Without categories, visitors have to deal with too much scrolling, no overview of what all the content is about, rapid switching of context, and just clutter! You may still find something interesting to read but it could be random.

But if you have a WordPress blog yourself, you may want more from the situation –– you want the visitor to be able to see everything that you offer and take with them back a valuable experience.

Moreover, while a new blog may start with only a few articles, as the content grows, posts can get buried in an unorganized collection. Site searches can be helpful but have a different purpose and depend on the visitor’s limited context, are too specific, and need advanced plugins to show results properly.

If you need something more presentable and user-friendly, you can start categorizing your posts in WordPress.

1. Ordered list
{:toc}

## What are categories in WordPress posts?

Categories in WordPress help organize related posts, by following a commonality among such posts. You have to manually define these categories (unless using a plugin), as we explain in one of the sections below.

Categories work by giving a high-level overview of the topics in the blog. Think of food/recipe blogs that you have seen. They usually categorize their posts by breakfast, lunch, and dinner. Or by easy, intermediate, and advanced.

Or, think of how a travel aggregator’s blog categorizes its blog into city getaways, weekend getaways, mountains, beaches, etc. Imagine landing on such a blog without categories, and getting confused about where to even start.

Basically, categories help in the following: 

* Organizing and presenting information based on the way users expect to consume it.
* Providing structure to your site.
* Helping search engines understand a content piece better (sometimes), and improve SEO.
* Planning your content better, keeping a balance amongst the things you post.

## What is the difference between categories and tags in WordPress?

Categories and tags are commonly confused, since both help organize content and both help search engines understand your content better. But think of it like walking into a clothing store. 

You see a female, male and kids section. Those are high-level categories, created for a smooth experience for both the customers and staff.

Let’s say you went to the kids section. Here, each shirt could be tagged with different (but sharing with many other shirts) kinds of attributes. Size, color, price, new in stock. These are like tags.

So the difference is simple –– You choose categories for a high-level categorization of your content and don’t change it again and again quickly. It may be 3-8 categories depending upon your niche, use case, and volume.

And you choose tags, like keywords, for each specific post to define what it’s about –– they are pretty much meta tags!

Say, you teach digital marketing on your blog. Your categories could be “Social media,” “paid ads,” “SEO.” But your individual posts within each could be about, for eg., mastering LinkedIn hashtags, exploring newsletter advertising, or doing SEO with AI, respectively.

Tags would be more specific to each post –– like keywords. For example, if you write a blog post about using hashtags on LinkedIn, you might use the tags: “hashtags,” “LinkedIn tips,” “social media strategy,” and “organic reach.”

Categories help organize the broader structure of your content, while tags provide more detailed descriptions to help readers and search engines identify the specific focus of each post. Categories are stable, while tags can be more flexible and change with each new post.

A post can be a part of multiple categories and tags as well.

## How to add categories to your WordPress posts?

While writing a post in WordPress, open the sidebar to your right and locate the Categories metabox. You will see the option to add and select (multiple selections are possible) categories.

![Setting categories and tags in wordpress post editor](/uploads/categories-in-wp-editor.jpg "Setting categories and tags in wordpress post editor")

You can even add a “Parent category” if you need more hierarchy. Hierarchy, by the way, is not possible with tags. Right below that, you can add tags too. The tip is to simply write the top 2-8 keywords related to the post.

You will also notice an “Uncategorized” category. This is the default WordPress category. It can be edited. You can assign any other category as default by visiting Settings -> Writing, in your dashboard. But having one default category is always mandatory.

You can also add and manage categories through your dashboard, by locating “Posts” in the left sidebar and visiting “Categories.” Here, you can add a description as well, and choose to make it public if your theme supports it.

Other common questions include:

### How to edit or delete categories?

Visit the Posts -> Categories from your dashboard. Here, you can edit, quick-edit (just the name and slug), or delete that category as well.

You can use the bulk actions to delete multiple categories at once.

### What happens to posts or pages associated with a category that is deleted in WordPress?

When a category is deleted, all the posts listed under that category get auto-assigned to the default category. From our example above, a deleted post would have gone into the default “Uncategorized” category.

If a post was under multiple categories, the other categories would remain unaffected.

The other thing to note is that pages don’t have categories in WordPress, this is only related to blog posts.

### How to convert categories to tags?

This is also possible in the same Categories Settings screen. Find the link to “category to tag converter” at the right-bottom side of the screen to start the process.

### How to add categories to a menu?

You can even add categories to your menu bar for easy access. There are three ways to do this, as explained in-depth [here](https://wordpress.com/support/menus/add-categories-to-a-menu/).

## WordPress plugins to enhance and simplify category management

The default WordPress categories feature is solid. There are many available plugins for more advanced needs. For instance, if you need categories for not only posts but also pages, media, etc., or you want to be able to generate categories automatically.

Let’s have a look at some of the plugins and what they can do:

### TaxoPress

TaxoPress basically works to categorize and tag all your WordPress content: pages, WooCommerce product categories and bbPress topic tags. It also integrates with multiple AI tools to suggest tags automatically.

It also shows lists of related posts with similar tags and categories, allows you to create a customizable display of all the terms in one taxonomy, and do many other things.

Rated at 4.6, updated regularly, and 60k+ active installations. If you need more advanced features, there's a Pro version too. Check out the [full overview](https://wordpress.org/plugins/simple-tags/).

### Category Order and Taxonomy Terms Order

This plugin allows you to easily reorder your WordPress categories, tags, and any custom taxonomies using a drag-and-drop interface. It doesn’t require coding knowledge and automatically updates your site's taxonomy order both on the front end and in the admin panel.

It works with hierarchical taxonomies and offers flexibility in sorting options. It’s available in multiple languages.

Rated at 4.5, updated regularly, and 500k+ active installations. If you need more features, there's an advanced version too. Check out the [full overview](https://wordpress.org/plugins/taxonomy-terms-order/).

### No Category Base (WPML)

This plugin removes the default "/category/" base from WordPress category URLs, making them cleaner (e.g., from mysite.com/category/my-category to mysite.com/my-category). 

It requires no setup, works with multiple sub-categories, redirects old category links, and is compatible with SEO practices and WPML. It’s simple, lightweight, and works out of the box without breaking other plugins.

Rated at 4.6, updated regularly, and 100k+ active installations. Check out the [full overview](https://wordpress.org/plugins/no-category-base-wpml/).

### Media Library Categories

This plugin allows you to organize media items in your WordPress library using categories. It adds category management features to your media library, enabling you to add, edit, or remove categories. 

You can also bulk assign categories to multiple items and filter media based on categories when using the gallery shortcode. The premium version adds more functionality, such as filtering categories while inserting media into posts or pages.

Rated at 4.2, updated regularly, and 20k+ active installations.  If you need more advanced features, there's a Pro version too. Check out the [full overview](https://wordpress.org/plugins/wp-media-library-categories/).

### Real Category Management: Content Management in Category Folders

This one helps you organize WordPress content like posts, pages, and WooCommerce products by displaying categories as folder structures, similar to a file manager.

You can easily drag and drop content into categories, create, rename, or delete categories, and rearrange them. It supports hierarchical taxonomies and custom post types, but the free version is limited to posts. 

Rated at 4.0, updated regularly, and 3k+ active installations.  If you need more advanced features, there's a Pro version too. Check out the [full overview](https://wordpress.org/plugins/real-category-library-lite/).

### List category posts

This plugin allows you to display posts from a specific category on any post or page using a simple shortcode. You can customize how posts are displayed, including the number of posts, ordering, and what details (like author or excerpt) to show. 

It supports custom CSS for styling and includes a widget for easier integration. You can also enable features like AJAX pagination and create custom templates for advanced layouts.

Rated at 4.7, updated regularly, and 100k+ active installations. Check out the [full overview](https://wordpress.org/plugins/list-category-posts/).

## How to decide on the perfect categories for your posts?

When you're just starting, don't overthink category names—just jot down your upcoming blog topics and group them in a way that feels natural. 

It's also fine to skip categories altogether in the beginning and focus on creating high-quality content and building an audience. You can always come back to it later.

If you are a few blog posts old, and have some readership as well, it’s time to analyze some data:

**General data**: Understand what your audience likes, what’s trending, and make/adjust your categories accordingly. This can be done by directly interacting through support tickets, sales calls, social media, surveys, etc.

Again taking a recipes blog example: if you were just starting out and instinctively categorized your posts into breakfast, lunch and dinner. After building some audience, you realized that students living far from families consume your content the most. 

In this case, you could reverse-engineer your specific audience’s needs and consider recreating the categories as 10-minute meals, kitchen hacks, beginner friendly, etc. That brings us to keyword research as well.

**Keyword data**: Another thing that can help with naming categories is keyword research. 

For eg. If you never researched and found out that your student audience also searches for “cheap and easy meals,” you could have easily skipped having that as a category, which could have further cost you your readership.

**Web analytics data**: You may be having a web analytics solution in place like Google Analytics or Plausible. Start seeing which kinds of posts get the most traffic and engagement. 

This will help you understand your strong points that also resonate with the audience. Now you can double down on such posts and create categories accordingly.

When your categories have also been there for some time, you can start analyzing their performance as well, like we explain in the last section of the article.

### Examples of categories

Here are a couple of our favorite examples for some inspiration:

1. The Basecamp Articles page is clearly demarcated into six categories: Project Management, Remote Work, Leadership, Productivity, Entrepreneurship, Agency, and Design.

   ![example of Basecamp's blog categories](/uploads/basecamp-articles-categories.png "example of Basecamp's blog categories")

   Visit [this page](https://basecamp.com/articles) to see the complete design.
2. The [GitLab blog](https://about.gitlab.com/blog/) also features different categories as you see below. Clicking on either of them takes you to a dedicated page of related blog posts.

   ![example of Gitlab's blog categories](/uploads/gitlab-blog-categories.png "example of Gitlab's blog categories")

## Tracking the performance of your categories

If you care about finding out how certain categories actually affect traffic, engagement and conversions on your WordPress site, the Plausible web analytics plugin can help with that. 

You will be able to track sessions on your site where certain categories’ posts were viewed, while understanding more things about those sessions –– which channels they were acquired from, what was the average time spent on the site, bounce rates, landing pages visited, goals achieved, etc.

To make this possible, you need to turn on a setting called “Authors and categories” within the Plausible [plugin](https://wordpress.org/plugins/search/plausible/). The plugin itself takes less than 2 minutes to set up, and tracking categories –– no matter how and where you implement them –– is basically a switch which needs to be turned on.

Start by installing the plugin using this [guide](https://plausible.io/wordpress-analytics-plugin). Once done, open your WordPress dashboard and go to “Plugins” in the left-sidebar. Locate “Plausible Analytics” and go to its settings. Find the “Enhanced Measurements” section, and turn on “Authors and categories.”

![turning on Authors and Categories setting in Plausible plugin settings](/uploads/wp-plausible-plugin-settings-authors-and-categories.jpg "turning on Authors and Categories setting in Plausible plugin settings")

This setup will start sending post author names, categories, and custom taxonomies as [custom properties](https://plausible.io/docs/custom-props/introduction) with each pageview. You can filter your Plausible dashboard ([live demo](https://plausible.io/plausible.io)) by a specific category (and/or author) to see stats for their posts or to check a category’s popularity.

For eg. Look at this demo newswebsite.com’s dashboard. It has multiple categories and by using the [filtering](https://plausible.io/docs/filters-segments#use-the-filter-button-for-more-powerful-segmenting-and-matching) feature, we can select “opinion” and “activism” for example.

![filter by categories in Plausible dashboard](/uploads/filter-by-category-newswebsite.jpg "filter by categories in Plausible dashboard")

Then, we get the following dashboard, where we can see how these categories are associated with 81.8k unique visitors, 92.5k total visits, and 125k pageviews –– all indicating an upwards trend as well. This means that the category is resonating well with the audience!

But look at the decreasing views per visit and visit duration, and the increasing bounce rate. This is indicative of the low engaging factor of these categories. So now we know that it has to be improved!

![Plausible dashboard filtered by categories](/uploads/newswebsite-category-filter.png "Plausible dashboard filtered by categories")

Similarly, you can look at other metrics of this report and even click on any such entry to filter the dashboard further.

For eg. We can see that after Direct traffic, newsletters and Google results are what brings the most traffic to this category of pages. Beside this report, we can also see which articles within this category actually perform the best.

And by playing around a bit, we can find out which pages were these sessions welcomed to (entry pages) or where they exited from. Or get deeper information like [UTM campaigns](https://plausible.io/blog/utm-tracking-tags) that helped bring people to this category, the locations and devices used.

And most importantly, you can find out if any [goals](https://plausible.io/docs/goal-conversions) were converted during such sessions –– sales, signups, visits to certain pages, etc.

### Is Plausible worth it?

We encourage everyone to go through our free 30-day trial. Our plugin is highly rated at 4.9 stars, take pride in being a [simpler alternative](https://plausible.io/simple-web-analytics) to Google Analytics 4. We:

* Are proven to be [more accurate](https://www.orbitmedia.com/blog/inaccurate-google-analytics-traffic-sources/)
* Are [lightweight](https://plausible.io/lightweight-web-analytics) by at least 75 times as compared to GA4 script
* Block bot traffic by default
* Are less blocked by ad blockers and privacy-first browsers
* Have compliances in-built, no consent banner needed from our side
* Are open-source and privacy-first, and more accepted by aware end-users

Take [a look](https://wordpress.org/plugins/search/plausible/)! :D