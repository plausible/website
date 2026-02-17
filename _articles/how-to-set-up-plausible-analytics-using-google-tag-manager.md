---
layout: article
title: How to set up Plausible Analytics with our Google Tag Manager template
description: To make integrating Plausible with Google Tag Manager easier, we’ve
  published a GTM template that lets you set up Plausible Analytics quickly and
  without any code.
permalink: /gtm-template
---
Plausible Analytics is an easy-to-use, lightweight, and privacy-friendly [Google Analytics alternative](https://plausible.io/vs-google-analytics).

If you already use Google Tag Manager (GTM) to manage scripts on your site, you can integrate Plausible with it, no need to touch your website’s code. GTM lets you keep all your scripts organized in one place and makes it easy to update or remove tags later on.

We’ve built a **Plausible GTM template** to make this setup even smoother.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">GTM template</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics Google Tag Manager template](/uploads/plausible-gtm-setup.png "Plausible Analytics Google Tag Manager template")

This GTM integration method is optional. You can always use the [direct Plausible setup](https://plausible.io/docs/plausible-script) instead, it’s even simpler and only takes a few lines of code to get started. If you’re using another platform, you can also check out our [integration guides](https://plausible.io/docs/integration-guides) for instructions specific to your setup. 

1. Ordered list
{:toc}

## Why use Plausible Analytics?

Plausible is built to give you [privacy-friendly](https://plausible.io/privacy-focused-web-analytics), [lightweight](https://plausible.io/lightweight-web-analytics) analytics with a clean, modern dashboard and minimal overhead. We don’t collect personal data, so you can avoid many GDPR/CCPA consent headaches.

Unlike feature-heavy tools, Plausible surfaces the key metrics you care about (engagement, top pages, referral sources, conversions) on [one clean interface](https://plausible.io/simple-web-analytics).

## B﻿efore you begin

Make sure you have:

* Access to your **Google Tag Manager** account.
* A **Plausible Analytics** account (you can create one as shown below). 
* The ability to edit or publish containers in GTM.

## G﻿et started with Plausible Analytics

To use Plausible Analytics, you need to register an account if you haven't already. To help explore Plausible, we offer a free 30-day trial (no credit card required). [Click here to register](https://plausible.io/register). 

O﻿nce you have:

1. ﻿[Registered for an account](https://plausible.io/docs/register-account), 
2. [Added your site details](https://plausible.io/docs/add-website)

Y﻿ou will see the following screen, where you can select "Tag Manager" from the 4 tabs depicting the 4 different installation methods.

![tag manager installation method in plausible](/uploads/tag-manager-installation.png "tag manager installation method in plausible")

Y﻿ou can also always come back to this screen if you have an existing account, in the "**Site installation**" area under "**General**" in your [site settings](https://plausible.io/docs/website-settings).

O﻿nce on this screen, copy the displayed site's script ID and save it for later as you'll need it in a couple of minutes.

## Install the Plausible template in GTM

The simplest way to install the custom template is to locate it in the [Google Tag Manager template gallery](https://tagmanager.google.com/gallery/#/) where you can install it directly from your Google Tag Manager dashboard. Here’s the direct link to the [Plausible Analytics GTM template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template).

![Plausible GTM Template](/uploads/plausible-gtm-template.png "Plausible GTM Template")

### Create a new Tag

Once you’ve installed the template, you should create a new "**Tag**" that uses it. To do this:

In the main Google Tag Manager dashboard, browse to "**Tags**" and click "**New**" to create a new tag.

![Plausible GTM Template New Tag](/uploads/plausible-gtm-template-new-tag.png "Plausible GTM Template New Tag")

From the list of available tag templates, choose the Plausible Analytics tag template you just installed.

![Plausible GTM Template New Tag Template](/uploads/plausible-gtm-template-new-tag-template.png "Plausible GTM Template New Tag Template")

Once inside, you’ll see a **Type** option with two choices: **Initialization** or **Custom Event**.

* **Initialization:** This is mandatory for Plausible Analytics to run on your site and should be set up with one tag only.
* **Custom events:** This is optional and you can set up as many tags as you want. This enables you to attach event tags to different triggers in GTM so you can send custom event data to Plausible.

![plausible gtm tag basic settings](/uploads/plausible-gtm-tag-basic-settings.png "plausible gtm tag basic settings")

### Setting up the Initialization Tag

Let’s first look at setting up the Initialization Tag, as this is the only mandatory step to get Plausible Analytics running with Google Tag Manager.

When you create a new tag with the Plausible Analytics template and select ‘Initialization’, there is one required field: ‘Script ID’. You can find it in Plausible during site onboarding under the "Tag Manager" tab or later in "Site Settings" → "General" → "Site Installation" → "Tag Manager".

Scroll down to the “Triggering” section. For the tag trigger, you should select "All Pages" - "Page View", which will ensure that Plausible will capture data on all pages.

And that’s it! For a very simple Plausible installation, you could stop here and the Plausible script will run on all pageviews and capture the core set of data.

#### A﻿dditional configuration options

Optionally, in this tag you can also set up some enhanced measurements. Some boxes are pre-ticked which you can uncheck if you wish to. And check the ones that you would like to track.

Y﻿ou can also do simple 404 tracking and set Custom Properties for pageviews (see Custom Properties section below).

**To enable 404 Page tracking**, simply check the box and enter the title of your website’s 404 page.

![init-tag-settings](/uploads/init-tag-settings.png "init-tag-settings in plausible gtm")

H﻿ere is the overview of the optional configuration options:

| **Optional Configuration**     | **Explanation**                                                                                                                                                                                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File Downloads**             | Whether to automatically [track file downloads](https://plausible.io/docs/file-downloads-tracking) ﻿                                                                                                                                                                                              |
| **Form Submissions**           | Whether to automatically [track form submissions](https://plausible.io/docs/form-submissions-tracking)                                                                                                                                                                                            |
| **Outbound Links**             | Automatically [track clicks on outbound links](https://plausible.io/docs/outbound-link-click-tracking)                                                                                                                                                                                            |
| **Hash Based Routing**         | Automatically track page paths that use a `#` in the URL, [described here](https://plausible.io/docs/hash-based-routing)                                                                                                                                                                          |
| **Custom Properties**          | Allows you to attach [custom properties](https://plausible.io/docs/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview event. These can be configured using Google Tag Manager variables.                                                    |
| **Capture on Localhost**       | Whether to capture events on localhost                                                                                                                                                                                                                                                            |
| **Logging**                    | Whether to log on ignored events. When enabled, any ignored events are logged to the browser console with a warning.                                                                                                                                                                              |
| **Auto Capture Pageviews**     | Whether to automatically capture pageviews. If this is unchecked, the script will be loaded and ready to receive events but no pageviews will be sent. You would need to recreate pageview events by creating another tag with the trigger "**Page View**" or similar to send the event manually. |
| **Custom File Download Types** | Override the default file extensions for tracking file downloads, so only your custom file type downloads will be tracked instead.                                                                                                                                                                |

T﻿hat's it. Just check the boxes for the things you'd like to track and you will find the relevant data in your dashboard, no coding needed.

### Creating Custom Event Tags (Optional)

Unlike the Initialization Tag, you can create as many Custom Event Tags as you want. This all depends on what GTM triggers you would like to use to send data to Plausible Analytics.

[L﻿earn about custom events here](https://plausible.io/docs/custom-event-goals). 

In this section, we will run through a quick example of how it works and then run through additional configuration options.

When you create a new tag and select ‘Custom Event’, you will see only one mandatory field: ‘Event Name’.

This is the name of the custom event that you’ve set up in Plausible (if you click the icon on the right, you can set this value using a GTM variable if you would like).

For a very simple event, you then just need to select a Trigger. Two of the most useful triggers are the: 

* **Clicks - All Elements** trigger that fires any time someone clicks an element on your site
* **Clicks - Just Links** which fires any time someone clicks a link on your site

You can find these options by going to Triggers > New (﻿+) > Trigger Configuration. Then in the sidebar you will see the different trigger types, including the click options mentioned above.

**As an example**, if we wanted to send an event called “Login Click” every time someone clicked the button that had text “Login”, we would have a tag that looks like this:

![setting up a custom event in plausible through gtm](/uploads/setting-up-a-custom-event-in-plausible-through-gtm.png "setting up a custom event in plausible through gtm")

And a trigger set up as ‘Click - All Elements’ that looks like this:

![trigger for custom event](/uploads/trigger-for-custom-event.png "trigger for custom event")

Additionally, we can configure Custom Properties (see below) and Revenue Tracking data to be sent with the custom event. To add revenue data, simply tick the checkbox and enter the currency and amount that should be associated with the event. For example, if you want the amount to be $10.29, it should look like this:

![revenue tracking through plausible gtm config](/uploads/revenue-tracking-in-plausible-gtm.png "revenue tracking through plausible gtm config")

You can find more details about setting up revenue tracking on your site [here](https://plausible.io/docs/ecommerce-revenue-tracking).

### Add Custom Properties (Optional)

The Plausible GTM tag lets you send [custom properties](https://plausible.io/docs/custom-props/introduction) (extra data) with every pageview.

Both the Initialization Tag and the Custom Event Tags give you the option to configure one or more custom properties. **In the case of the Initialization Tag, these custom properties will be attached to pageviews, while for Custom Events, they will be attached to that specific event**.

As a simple example, you could send the full URL of a page to Plausible for every pageview or event by using the Built-In GTM Variable ‘Page URL’.

To do this, you would first click ‘Add Custom Property’ in the Initialization Tag. Then in the ‘Custom Property Name’ input box you will put whatever the name of the event is in Plausible. In our case, we can call it ‘page_url’.

Then we can click the icon next to the ‘Custom Property Value’ input box to see a list of all the available GTM Variables. Then we will simply select ‘Page URL’ and you will see that it populates our text field as {{Page URL}}. 

![new custom property](/uploads/new-custom-property.png "new custom property")

\
Note: if you know the ID of your GTM variable ahead of time you can just type it directly into the input box.

You can take things a step further by defining your own custom GTM variables. As an example, you could send the Page Title as a custom prop. Instead of choosing from the list of available variables, you will instead create a New Variable by clicking on the plus sign in the upper right corner.

You can then give this variable a name, like Page Title and select Javascript Variable.

![choose variable type](/uploads/choose-variable-type.png "choose variable type")

Then under Global Variable name, you simply enter ‘document.title’. This will automatically take the title of the page using Javascript and make it available as your GTM variable.

![variable configuration](/uploads/variable-configuration.png "variable configuration")

Finally, to send this to Plausible you would just need to give it a name like ‘page_title’.

With both of those variables set-up, your final custom props configuration would look like this:

![custom props configured in plausible gtm template](/uploads/custom-props-configured-in-plausible-gtm-template.png "custom props configured in plausible gtm template")

\
You could use this custom properties set-up for either pageviews or custom events, the configuration of the custom props is the same for both.

## Test your setup

Before publishing, always verify that everything works as expected. To test:

1. Click the blue Preview button in your GTM dashboard.
2. A new tab will open showing your website with the GTM container active.
3. In the Tag Assistant Preview panel, confirm that the Plausible tag fires correctly. You can see additional information about the events that trigger the tag and the data that is being sent.

If you see the tag firing and data appearing in your Plausible dashboard, your setup is complete!

## What’s next?

Now that your site is tracking with Plausible via GTM, you can:

* [G﻿et the most out of your Plausible experience](https://plausible.io/docs/your-plausible-experience)
* [Connect your Google Search Console to Plausible](https://plausible.io/docs/google-search-console-integration) for seeing the search terms driving you traffic directly in the Plausible dashboard
* C﻿ustomize your reporting by [connecting with Looker Studio](https://plausible.io/docs/looker-studio)

E﻿njoy Plausible!