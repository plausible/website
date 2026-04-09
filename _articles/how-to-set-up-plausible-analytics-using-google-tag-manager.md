---
layout: article
title: "Plausible Analytics for Google Tag Manager: official template, no cookies, no code"
description: Set up privacy-friendly website analytics through Google Tag Manager
  in minutes. No code changes needed, no cookie banners, and accurate data from
  day one.
permalink: /gtm-template
---
If you already use Google Tag Manager, adding Plausible takes a few minutes and no code changes. Our official GTM template is available in the template gallery and handles everything: pageview tracking, custom events, file downloads and more.

Unlike heavier analytics tools, Plausible collects no personal data, requires no cookie banner and won’t slow your site down. Once it’s running, you get accurate, privacy-friendly analytics in one clean dashboard.

<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow"> <a href="https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" style="color: white;">GTM template</a> </div> <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"> <a href="https://plausible.io/plausible.io" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a> </div> </div>

![Plausible Analytics Google Tag Manager template](/uploads/plausible-gtm-setup.png "Plausible Analytics Google Tag Manager template")

This GTM integration method is optional. You can always use the [direct Plausible setup](https://plausible.io/docs/plausible-script) instead. It only takes a few lines of code. If you’re using another platform, you can also check out our [integration guides](https://plausible.io/docs/integration-guides) for instructions specific to your setup. 

1. Ordered list
{:toc}

## Before you begin

Make sure you have:

* Access to your **Google Tag Manager** account.
* A **Plausible Analytics** account (you can create one as shown below). 
* The ability to edit or publish containers in GTM.

## Get started with Plausible Analytics

If you don't have a Plausible account yet, [create a free account](https://plausible.io/register). We offer a free 30-day trial with no credit card required.

Once you have:

1. [Registered for an account](https://plausible.io/docs/register-account), 
2. [Added your site details](https://plausible.io/docs/add-website)

You will see the following screen, where you can select "Tag Manager" from the four available installation method tabs.

![tag manager installation method in plausible](/uploads/tag-manager-installation.png "tag manager installation method in plausible")

You can always come back to this screen if you have an existing account, in the "**Site installation**" area under "**General**" in your [site settings](https://plausible.io/docs/website-settings).

Once on this screen, copy the displayed site's script ID and save it for later as you'll need it in a couple of minutes.

## Install the Plausible template in GTM

The simplest way is to find it in the [Google Tag Manager template gallery](https://tagmanager.google.com/gallery/#/) and add it directly from your GTM dashboard. Here’s the direct link to the [Plausible Analytics GTM template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template).

![Plausible GTM Template](/uploads/plausible-gtm-template.png "Plausible GTM Template")

### Create a new Tag

Once you’ve installed the template, you should create a new "**Tag**" that uses it. To do this:

In the main Google Tag Manager dashboard, browse to "**Tags**" and click "**New**" to create a new tag.

![Plausible GTM Template New Tag](/uploads/plausible-gtm-template-new-tag.png "Plausible GTM Template New Tag")

From the list of available tag templates, choose the Plausible Analytics tag template you just installed.

![Plausible GTM Template New Tag Template](/uploads/plausible-gtm-template-new-tag-template.png "Plausible GTM Template New Tag Template")

Once inside, you’ll see a **Type** option with two choices: **Initialization** or **Custom Event**.

* **Initialization:** This is mandatory for Plausible Analytics to run on your site and should be set up with one tag only.
* **Custom events:** This is optional and you can set up as many tags as you want. This enables you to attach event tags to different triggers in GTM so you can send custom event data to Plausible.

![plausible gtm tag basic settings](/uploads/plausible-gtm-tag-basic-settings.png "plausible gtm tag basic settings")

### Setting up the Initialization Tag

Let’s first look at setting up the Initialization Tag, as this is the only mandatory step to get Plausible Analytics running with Google Tag Manager.

When you create a new tag with the Plausible Analytics template and select ‘Initialization’, there is one required field: ‘Script ID’. You can find it in Plausible during site onboarding under the "Tag Manager" tab or later in "Site Settings" → "General" → "Site Installation" → "Tag Manager".

Scroll down to the “Triggering” section. For the tag trigger, select "All Pages" and "Page View" as the trigger, so Plausible captures data on all pages.

That’s it for a basic installation. The Plausible script will now run on all pageviews and capture the core set of data.

#### Additional configuration options

You can also set up enhanced measurements in this tag. Some boxes are pre-ticked. Uncheck any you don't need and enable the ones you want to track.

You can also do simple 404 tracking and set Custom Properties for pageviews (see Custom Properties section below).

**To enable 404 Page tracking**, check the box and enter the title of your website’s 404 page.

![init-tag-settings](/uploads/init-tag-settings.png "init-tag-settings in plausible gtm")

Here is the overview of the optional configuration options:

| **Optional Configuration**     | **Explanation**                                                                                                                                                                                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File Downloads**             | Whether to automatically [track file downloads](https://plausible.io/docs/file-downloads-tracking)                                                                                                                                                                                               |
| **Form Submissions**           | Whether to automatically [track form submissions](https://plausible.io/docs/form-submissions-tracking)                                                                                                                                                                                            |
| **Outbound Links**             | Automatically [track clicks on outbound links](https://plausible.io/docs/outbound-link-click-tracking)                                                                                                                                                                                            |
| **Hash Based Routing**         | Automatically track page paths that use a `#` in the URL. [See hash-based routing docs](https://plausible.io/docs/hash-based-routing)                                                                                                                                                                          |
| **Custom Properties**          | Allows you to attach [custom properties](https://plausible.io/docs/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview event. These can be configured using Google Tag Manager variables.                                                    |
| **Capture on Localhost**       | Whether to capture events on localhost                                                                                                                                                                                                                                                            |
| **Logging**                    | Whether to log on ignored events. When enabled, any ignored events are logged to the browser console with a warning.                                                                                                                                                                              |
| **Auto Capture Pageviews**     | Whether to automatically capture pageviews. If this is unchecked, the script will be loaded and ready to receive events but no pageviews will be sent. You would need to recreate pageview events by creating another tag with the trigger "**Page View**" or similar to send the event manually. |
| **Custom File Download Types** | Override the default file extensions for tracking file downloads, so only your custom file type downloads will be tracked instead.                                                                                                                                                                |

That's it. Just check the boxes for the things you'd like to track and you will find the relevant data in your dashboard, no coding needed.

### Creating Custom Event Tags (Optional)

Unlike the Initialization Tag, you can create as many Custom Event Tags as you want. This all depends on what GTM triggers you would like to use to send data to Plausible Analytics.

[Read the custom events documentation](https://plausible.io/docs/custom-event-goals). 

In this section, we will walk through a quick example of how it works and cover the additional configuration options.

When you create a new tag and select ‘Custom Event’, you will see only one mandatory field: ‘Event Name’.

This is the name of the custom event that you’ve set up in Plausible (click the icon on the right to set this value using a GTM variable).

For a very simple event, you then just need to select a Trigger. Two of the most useful triggers are the: 

* **Clicks - All Elements** trigger that fires any time someone clicks an element on your site
* **Clicks - Just Links** which fires any time someone clicks a link on your site

You can find these options by going to Triggers > New (+) > Trigger Configuration. Then in the sidebar you will see the different trigger types, including the click options mentioned above.

**As an example**, if we wanted to send an event called “Login Click” every time someone clicked the button that had text “Login”, we would have a tag that looks like this:

![setting up a custom event in plausible through gtm](/uploads/setting-up-a-custom-event-in-plausible-through-gtm.png "setting up a custom event in plausible through gtm")

The trigger is set up as ‘Click - All Elements’ and looks like this:

![trigger for custom event](/uploads/trigger-for-custom-event.png "trigger for custom event")

You can also configure Custom Properties (see below) and Revenue Tracking data to be sent with the custom event. To add revenue data, tick the checkbox and enter the currency and amount that should be associated with the event. For example, if you want the amount to be $10.29, it should look like this:

![revenue tracking through plausible gtm config](/uploads/revenue-tracking-in-plausible-gtm.png "revenue tracking through plausible gtm config")

See the [full revenue tracking documentation](https://plausible.io/docs/ecommerce-revenue-tracking) for more details.

### Add Custom Properties (Optional)

The Plausible GTM tag lets you send [custom properties](https://plausible.io/docs/custom-props/introduction) (extra data) with every pageview.

Both the Initialization Tag and the Custom Event Tags give you the option to configure one or more custom properties. **In the case of the Initialization Tag, these custom properties will be attached to pageviews, while for Custom Events, they will be attached to that specific event**.

As a simple example, you could send the full URL of a page to Plausible for every pageview or event by using the Built-In GTM Variable ‘Page URL’.

To do this, click ‘Add Custom Property’ in the Initialization Tag. In the ‘Custom Property Name’ input box, enter the name you want to use in Plausible. In our case, we can call it ‘page_url’.

Click the icon next to the ‘Custom Property Value’ input box to see a list of all the available GTM Variables. Select ‘Page URL’ and it will populate the text field as {{Page URL}}.

![new custom property](/uploads/new-custom-property.png "new custom property")

\
Note: if you know the ID of your GTM variable ahead of time you can just type it directly into the input box.

You can take things a step further by defining your own custom GTM variables. As an example, you could send the Page Title as a custom prop. Rather than choosing from the list of available variables, create a New Variable by clicking the plus sign in the upper right corner.

You can then give this variable a name, like Page Title and select JavaScript Variable.

![choose variable type](/uploads/choose-variable-type.png "choose variable type")

Under Global Variable name, enter ‘document.title’. This will automatically take the title of the page using JavaScript and make it available as your GTM variable.

![variable configuration](/uploads/variable-configuration.png "variable configuration")

Finally, to send this to Plausible you would just need to give it a name like ‘page_title’.

With both of those variables set up, your final custom props configuration would look like this:

![custom props configured in plausible gtm template](/uploads/custom-props-configured-in-plausible-gtm-template.png "custom props configured in plausible gtm template")

\
You can use this custom properties setup for either pageviews or custom events. The configuration is the same for both.

## Test your setup

Before publishing, always verify that everything works as expected. To test:

1. Click the blue Preview button in your GTM dashboard.
2. A new tab will open showing your website with the GTM container active.
3. In the Tag Assistant Preview panel, confirm that the Plausible tag fires correctly. You can see additional information about the events that trigger the tag and the data that is being sent.

If you see the tag firing and data appearing in your Plausible dashboard, your setup is complete!

## What’s next?

Now that your site is tracking with Plausible via GTM, you can:

* [Get the most out of your Plausible experience](https://plausible.io/docs/your-plausible-experience)
* [Connect your Google Search Console to Plausible](https://plausible.io/docs/google-search-console-integration) to see the search terms driving your traffic directly in your dashboard
* Customize your reporting by [connecting with Looker Studio](https://plausible.io/docs/looker-studio)

If you haven't tried Plausible yet, sign up for a free 30-day trial, no credit card required. Thousands of teams including Basecamp, Sentry and the Python Software Foundation trust Plausible with their analytics.