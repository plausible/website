---
layout: article
title: How to set up Plausible Analytics using Google Tag Manager
description: This document walks through how you can set up Plausible Analytics
  using Google Tag Manager.
permalink: /gtm-template
---
To make integrating Plausible with Google Tag Manager easier, we’ve published a GTM template that lets you set up Plausible Analytics quickly and without any code.

## Install the Plausible GTM template

The simplest way to install the custom template is to locate it in the [Google Tag Manager template gallery](https://tagmanager.google.com/gallery/#/) where you can install it directly from your Google Tag Manager dashboard. Here’s the direct link to the [Plausible Analytics GTM template](https://tagmanager.google.com/gallery/#/owners/plausible/templates/plausible-gtm-template). 

## Create a new Tag

Once you’ve installed the template, you should create a new "**Tag**" that uses it.  To do this:

* In the main Google Tag Manager dashboard, browse to "**Tags**" and click "**New**" to create a new tag
* From the list of available tag templates, choose the Plausible Analytics tag template you just installed
* The only required field in the tag configuration is "**Script ID**". You can find it in Plausible during site onboarding under the "**Tag Manager**" tab or later in "**Site Settings**" → "**General**" → "**Site Installation**" → "**Tag Manager**"
* Other optional configuration options are described below in the section "**Tag Configuration**"
* For the tag trigger, you should select "**All Pages** - "**Page View**", which will ensure that Plausible will capture data on all pages

## Tag Configuration

The tag has the following optional configuration options:

| **Optional Configuration** | **Explanation** |
|---------------------------|-----------------|
| **File Downloads**            | Whether to automatically [track file downloads](https://plausible.io/docs/file-downloads-tracking) |
| **Form Submissions**          | Whether to automatically [track form submissions](https://plausible.io/docs/form-submissions-tracking) |
| **Outbound Links**            | Automatically [track clicks on outbound links](https://plausible.io/docs/outbound-link-click-tracking) |
| **Hash Based Routing**        | Automatically track page paths that use a `#` in the URL, [described here](https://plausible.io/docs/hash-based-routing) |
| **Custom Properties**         | Allows you to attach [custom properties](https://plausible.io/docs/custom-props/introduction) (also known as custom dimensions in Google Analytics) when sending a pageview event. These can be configured using Google Tag Manager variables. |
| **Capture on Localhost**      | Whether to capture events on localhost |
| **Logging**                   | Whether to log on ignored events. When enabled, any ignored events are logged to the browser console with a warning |
| **Auto Capture Pageviews**    | Whether to automatically capture pageviews. If this is unchecked, the script will be loaded and ready to receive events but no pageviews will be sent. You would need to recreate pageview events by creating another tag with the trigger "**Page View**" or similar to send the event manually |

## Testing

You can test that everything is working as expected by using Google Tag Manager’s Preview mode.  You can enter Preview mode by clicking the blue Preview button in the Google Tag Manager dashboard. This opens a new tab with your website running the GTM container where you can see if Plausible Analytics is running and capturing data properly. In the Tag Assistant Preview tab, you can see additional information about the events that trigger the tag and the data that is being sent.