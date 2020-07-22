---
layout: post
title: Moving Plausible to Germany and running on 100% renewable energy
description: A look into our server move to Germany. And we're now powered by
  sustainable energy. Plausible is now made in, run from and stored in the EU.
slug: made-in-eu
date: 2020-06-04T10:13:10.546Z
author: marko-saric
---
In the last few weeks, we've spent most of our efforts on behind the scenes projects and improvements. Here's the summary of the progress that we've already [informed you](https://plausible.io/blog/may-2020-recap) about:

* We were able to reduce the Plausible Analytics script from 1.4 KB to 679 B so everyone can have an even faster loading site
* Your website stats dashboard is much faster to load now. You'll notice the dashboard loading some 3 seconds faster for the average site and for those with higher visitor numbers the difference will be even larger
* We can now accommodate order of magnitude larger websites too with tens of millions of page views per month in traffic numbers. If you have a large website and want to test our simple, lightweight and privacy friendly alternative to Google Analytics, do [sign up for a free trial](https://plausible.io/register)

Concluding our back-end development efforts at this time, we have now moved all of the website data from servers in the UK to servers in Germany. 

This makes us more comfortable in the long run in terms of data security and privacy especially considering the doubts surrounding Brexit and its impact on the privacy laws in the UK. And of no less importance, we're now running on 100% renewable energy which should further minimize our impact on the planet. 

Let's look closer at these details.

1. Ordered list
{:toc}

## Moving the data to Germany

Our main priority has always been and will continue to be [not to collect and store any personal data](https://plausible.io/data-policy) in the first place. We're private by design and we minimize any data collection in general. Whatever we do store such as your website traffic stats is kept fully secured and encrypted. You can read more about it on [our about page](https://plausible.io/about).

Some members of the community raised concern that our database, customer and site data was hosted on a server in the UK. Especially with the concerns about how Brexit will impact GDPR and other privacy laws in the UK, it made sense to move the data to the European Union to ensure being covered by its strict laws on data privacy in the future.

[PrivacyTools.io](https://www.privacytools.io/providers/#ukusa) is a great resource and they have a deep dive into this and have more info on why being hosted in the USA but also in the UK is not the best for data privacy and security purposes. The UK is the founding member and a part of the [Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes):

> "The UKUSA Agreement is an agreement between the United Kingdom, United States, Australia, Canada, and New Zealand to cooperatively collect, analyze, and share intelligence. Members of this group, known as the Five Eyes, focus on gathering and analyzing intelligence from different parts of the world."

So now all the data is hosted, stored and processed on a server in Germany that complies with and will continue to comply with strict European Union privacy laws. Germany is not part of the Five Eyes but is part of Fourteen Eyes which should be less bad. But again our priority is to not collect and store anything personal so this is less of a concern.

Now we're confident and comfortable with Germany as an integral part of the EU that our server will continue to adhere to all the GDPR and other strong European and German privacy standards, laws and regulations even after the Brexit. Plausible Analytics is now fully made in, run from and stored in the EU!

## Moving to being 100% powered by renewable energy

Our server is now hosted with DigitalOcean and located in a data center in Frankfurt am Main. It is placed on the [German Commercial Internet Exchange](https://en.wikipedia.org/wiki/DE-CIX)(DE-CIX) which is the second-largest Internet exchange point worldwide by peak traffic and the largest one in Europe.

We're now 100% powered by renewable and sustainable energy which is great in further minimizing our impact on the planet. Plausible Analytics script [weights less than 1 KB](https://plausible.io/lightweight-web-analytics) which is more than 45 times smaller than the recommended Google Analytics Global Site Tag implementation.

If you replace Google Analytics with Plausible Analytics you will reduce your page size by approximately 45 KB for each visitor. With 10,000 monthly visitors that will be a saving of 450,000 KB (0.45 GB) per month. Almost half a GB less of data will be transferred per month for every 10,000 visitors.

That brings us to more than 5 GB of data transfer per year saved. Even a saving of 45 KB in scripts can make a huge difference in reducing the carbon footprint of your website.

The estimated numbers vary a lot from study to study and by which type of network is used, but [Website Carbon Calculator](https://www.websitecarbon.com/) has set the energy usage at 1.8 kWh (kilowatt‐hours) for every GB of data transfer. That would result in almost 10 kWh (9.72 kWh) saved per year for one website of 10,000 monthly visitors only by reducing the size of one analytics script by [moving from Google Analytics to Plausible Analytics](https://plausible.io/vs-google-analytics).

Another number that is not easy to get a definitive answer to is the carbon intensity of the electricity generation. The Website Carbon Calculator sets this at 475 g CO2 per kWh. This means that the almost 10 kWh saved per year for one single website of 10,000 monthly visitors ends up saving more than 4.5 kg (4.617 kg to be exact) of CO2 emissions.

So almost five kilograms in the yearly reduction of CO2 emissions for one website of 10,000 monthly visitors alone from a saving of 45 KB in JavaScript. With all this now being 100% powered by renewable energy, our impact on the planet is even more minimal.

These numbers are all estimates but you can imagine if millions of website owners and Google Analytics users end up making a similar reduction in their website size too. The total reduction in the carbon footprint of the web would be immense.

## Give Plausible Analytics a chance

After using Google Analytics for many years we believe we have created a better alternative for some site owners and some use cases. Plausible Analytics gives you a web analytics tool that is:

* [Fully open source](https://plausible.io/open-source-website-analytics) with the code available on GitHub
* Simple to understand and get insights from in one minute
* A lightweight script of under 1 KB so your site keeps loading fast
* Doesn’t use cookies so there’s no need for cookie banners
* Doesn’t collect personal data so no need for GDPR and CCPA consent prompts
 
If this sounds interesting, do [register for a trial](https://plausible.io/register). Our script is under 1 KB so you can try and run it alongside Google Analytics. The free trial is for 30 days, there are no restrictions on the usage and no credit card is required either.