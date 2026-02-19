---
layout: article
title: "Plausible: Lightweight web analytics tool that doesn't slow down your site"
description: Replacing Google Analytics with a lightweight web analytics tool
  can have a significant effect on the page load time of your website.
permalink: /lightweight-web-analytics
---
Plausible Analytics script is lightweight. It's much smaller than the Google Analytics Global Site Tag. Plausible will reduce your page weight and will prevent your site from loading slow.

Having a fast loading website is one of the key elements of modern web development. Replacing your website analytics script from Google Analytics to a lightweight web analytics tool such as [Plausible Analytics](https://plausible.io/) can have a significant effect on the page load time and the carbon footprint too. Let's take a closer look.

![Plausible: A lightweight web analytics tool](/uploads/plausible-lightweight-script.png "Plausible: A lightweight web analytics tool")

1. Ordered list
{:toc}

## Why should I care about my website speed?

What are the benefits of a fast loading website and why is site speed an important factor to consider? Let's take a look at some of the key elements:

1. **People are impatient** and the slower your site loads the higher chance a significant part of your first-time visitors will close the browser tab or click on the back button. Page load time directly impacts the [bounce rate](https://plausible.io/blog/bounce-rate#understanding-bounce-rate). The average bounce rate for sites loading in under 2 seconds is 9% and it increases with the time spent loading. Bounce rate is at [38%](https://royal.pingdom.com/page-load-time-really-affect-bounce-rate/) for pages that take 5 seconds to load. Aim for your site to load within 2 seconds.
2. Search engines such as Google have **page speed as one of their ranking factors** which determine how sites rank in the search results. A slower page speed may result in your site ranking lower and getting fewer visitors from search than a faster loading site. Learn more about [Core Web Vitals](https://plausible.io/blog/page-experience-web-vitals).
3. Browsers such as the Chrome browser are starting to **warn their users when they are about to visit a slow loading site**.
4. A lighter and faster site generally means that less data is being transmitted and loaded which means that less electricity is used. **A lighter site emits less carbon** for each and every visitor.

## How do web analytics scripts affect the page size and page load time?

Web analytics like any other website element add extra page weight and extra loading time to your website. 

### Does Google Analytics slow down my website?

Google Analytics is the most popular web analytics solution that is installed on [more than 50% of all websites](https://w3techs.com/technologies/history_overview/traffic_analysis/all) on the web. The recommended way to start tracking your website using Google Analytics is to install the Global Site Tag (gtag.js) tracking code on all of your pages.

Google Analytics script you need to integrate into your site looks like this:

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
</script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XXXXXXXXXX');
</script>
```

https://www.googletagmanager.com/gtag/js weighs \~75 KB and this script downloads another JavaScript file called the Google Analytics tag (https://www.google-analytics.com/analytics.js) which adds an additional \~100 KB to your page size.

**These two tracking scripts combined add ~175 KB of page weight to each and every page load**.

### Matomo

A popular open-source alternative to Google Analytics is [Matomo (formerly known as Piwik)](https://plausible.io/vs-matomo). Matomo too is installed on millions of websites.

To track your website traffic using Matomo, you need to integrate the matomo.js script to your pages. It looks like this:

```
<!-- Matomo -->
<script type="text/javascript">
var _paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//{$MATOMO_URL}/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', {$IDSITE}]);
var d=document, g=d.createElement('script'),
s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true;
g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
</script>
<!-- End Matomo Code -->
```

This matomo.js script adds 22.8 KB to the page size of your website.

### Plausible is lightweight web analytics

Every KB matters when you want to keep your site fast to load. Plausible is built with simplicity, speed and performance in mind. Plausible is also running on 100% renewable energy which should further minimize our impact on the planet. 

**Plausible script is lightweight. It's 22 times smaller than the Matomo script and more than 75 times smaller than the Google Analytics Global Site Tag.**

Even if a site owner figures out that there's a way to load Google Analytics script without using the Global Site Tag, Plausible is still more than 17 times lighter.

Plausible script you need to integrate into your site looks like this:

```
<script defer data-domain="domain.com"
src="https://plausible.io/js/script.js"></script>
```

## How can I test my website speed and the script size of my analytics provider?

[GTmetrix](https://gtmetrix.com/) is a great free resource for measuring the speed of your site. It gives you a brief overview with useful metrics such as the PageSpeed Score, the time it takes to fully load your website and the total page size.

Another interesting report within GTmetrix is the Waterfall chart. It presents you with a request-by-request visualization of the page load of your website. Every element that your site loads is listed with its size and timeline.

You'll see your CSS in here, your images and other media elements and you'll see any JavaScript as well. Identify the script(s) from your analytics provider to see what page weight they add to your site.

This is how the waterfall chart looks for the Plausible home page. In this list, you can see the script.js which is our tracking script, the same scripts that our users use too.

![Plausible home page elements, loading time and the script size](/uploads/plausible-script-size-test.png "Plausible home page elements, loading time and the script size")

## Why is the Google Analytics tracking script so heavy?

Google's Global Site Tag and the Universal Analytics script can be considered bloat if you care about only the most useful website stats and want to make your site as lean and fast as possible.

Why is it so heavy? Global Site Tag is a centralized script that can help you integrate many other Google services and features such as conversion tracking and remarketing while **Google Analytics itself tracks hundreds of different metrics for more than 125 individual reports**.

Some people can benefit from all these but most website owners don't have a use for the vast majority of these services, integrations, reports and individual metrics.

Google Analytics is overkill and a not so [privacy-friendly website analytics](https://plausible.io/data-policy) solution for the problem of simply figuring out how many people visit your site, where they discovered it in the first place and what type of content they consume.

Plausible aims to focus on the essential metrics only which makes our script lightweight as we don't collect any personal data.

This also makes our [simple web analytics](https://plausible.io/simple-web-analytics) easy to use and get useful insights from. No education or prior experience is required. There are also other reasons why we believe Plausible is a great [Google Analytics alternative](https://plausible.io/vs-google-analytics).

## What else can I do to reduce the size and have a fast loading website?

Here are some of the actions you can take to speed up your website:

1. When you plan to add a new element to your website, do ask yourself if it's necessary. You'll find that **many elements are unnecessary** and you may consider leaving them out or removing them.
2. **Use system fonts** where it is possible. System fonts are already on the devices of your visitors so no extra page weight and loading time will be added.
3. **Use fewer images and videos**. Images and videos are much heavier than simple text so reducing the usage of multimedia elements can make a huge difference.
4. Optimize the images that you do use by **resizing and compressing** them to a smaller size. Your visitors won't notice much or any difference at all. [ImageOptim](https://imageoptim.com/mac) is a great tool for this and so is [Squoosh](https://squoosh.app/) by Google.
5. **Implement lazy loading** on your images and video so they do not load unless the visitor scrolls down to the areas where they are placed.

## How much electricity does my website consume?

Try and run your site through the [Website Carbon Calculator](https://www.websitecarbon.com/). It gives you an estimation of how many g of CO2 is produced for every visitor to your site.

![Plausible Analytics website carbon footprint](/uploads/plausible-carbon-footprint.png "Plausible Analytics website carbon footprint")

Let's do a bit of a calculation. The Google Tag Manager way of integrating Google Analytics into a website adds a total script size of 75 KB.

Plausible script itself is lightweight. **If you replace Google Analytics with Plausible you will reduce your page size by 74 KB for each visitor**.

With 100K monthly visitors, that will be a saving of 74,00,000 KB (7 GB) per month. 7 GB less of data will be transferred per month for every 100K visitors.

That brings us to 84 GB of data transfer per year saved. Even a saving of 74 KB in scripts can really make a huge difference in reducing the carbon footprint of your website.

The estimated numbers [vary a lot from study to study](https://onlinelibrary.wiley.com/doi/full/10.1111/jiec.12630) and by which type of network is used, but Website Carbon Calculator has set the energy usage at 0.2 kWh (kilowatt‐hours) for every GB of data transfer.

**That would result in almost 16.8 kWh saved per year for one website of 100K monthly visitors only by reducing one analytics script**.

Another number that is not easy to get a definitive answer to is the [carbon intensity of the electricity generation](https://www.eea.europa.eu/data-and-maps/indicators/overview-of-the-electricity-production-2/assessment-4). Website Carbon Calculator sets this at 494 g CO2 per kWh.

This means that the 16.8 kWh saved per year for one single website of 100K monthly visitors ends up saving  8.2 kg of CO2 emissions.

**So eight kilograms in the yearly reduction of CO2 emissions for one website of 100K monthly visitors alone from a saving of 74 KB in JavaScript**.

These numbers are all estimates but you can imagine if millions of website owners and Google Analytics users end up making a similar reduction in their website size too. The total reduction in the carbon footprint of the web would be immense.

## Give Plausible a try as your lightweight web analytics tool

Plausible is a simple, open-source and lightweight site analytics tool. Our analytics script is 22 times smaller than the Matomo script and 75 times smaller than the Google Analytics Global Site Tag. On top of that, we're also running on 100% green energy.

[Sign up for a 30-day free trial](https://plausible.io/register) to explore our simple web analytics dashboard while getting a faster website that produces less carbon emissions.