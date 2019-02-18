---
title: You probably don't need a single-page application
layout: post
---

The meteoric rise of front-end frameworks like React, Angular, Vue.js, Elm, etc. has made single-page applications ubiquitous on the web. For many developers, these have become part of their 'default' toolset. When they start a new project, they grab the tools they know already: a REST API on the backend, and a React/Angular/Vue/Elm frontend.

Is there something wrong with these tools? Absolutely not. In fact, I love working with them. However, I would only choose this architecture when an actual requirement is pushing me in that direction. If there are no specific reasons to build a single-page application, I will go with a traditional server-rendered architecture every day of the week. It is simpler and allows you to move faster:

* **Stateless requests**<br />
Traditional web servers are built to be stateless. This means that each endpoint can be reasoned about and tested in isolation. SPAs, by contrast, have to explicitly define how all state is loaded, refreshed, and discarded by the frontend during the whole session. This introduces new caching/synchronization problems that just don't exist in the server-rendered world.

* **The browser knows how to deal with a traditional architecture**<br />
If you go with the SPA route, you'll always need extra code to emulate trivial browser features. I've spent many hours making sure that browser history is managed just right, that the loading animation looks smooth, restoring the scroll position when the user navigates through history, etc. It's a mess.

* **Fewer, more mature tools**<br />
Frameworks like Rails, Phoenix, Lavarel, etc. have been around for a while and they are very stable. I learned Rails about 5 years ago and my knowledge is still completely relevant. Around the same time, I also learned Gulp, CoffeeScript, BackboneJS, and SASS, all of which have been superseded by newer tools. Avoid the [Javascript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) by not relying so much on Javascript!

* **SEO for free**<br />
Single-page apps have to add extra infrastructure and code to make sure they can be indexed by crawlers. If you need SEO on your dynamic pages, it's much easier to accomplish with a server-rendered architecture.

All of this means that single-page applications impose more complexity and cognitive load on the developers. In my experience as a developer, complexity and cognitive load are the single biggest factors in software bugs and development slowdown.

### When to go for the single page app

As I said, the default choice in most cases should be the traditional server-rendered application. However, there are some requirements that might *force* you to opt for the single-page application architecture:

* Core functionality is real-time (e.g Slack)
* Rich UI interactions are core to the product (e.g Trello)
* Lots of state shared between screens (e.g. Spotify)

These products absolutely have to use a single-page architecture to work properly. This is why it's the right choice for these companies. However, many web-based products do not have these requirements and this complexity can be avoided.

### Hybrid solutions

Even if your app needs some real-time capabilities or rich interactions, you don't need to use the SPA paradigm for your whole app. A great approach is to embed small frontend applications into a traditional architecture.

Github uses this hybrid approach. The backbone of their website is a traditional rails app but some areas, like the projects tab, are built as embedded frontend applications. It's a beautiful solution that combines the best of both worlds. The great thing is that you can start simple and gradually add more complex UI interactions with this approach.

I believe that my current project, [Plausible](https://plausible.io/), will evolve in this direction. The main UI of the app will need rich interactions in the future, but the rest of the app can stay with the server-rendered architecture.

### It all comes down to tradeoffs

As with everything in programming, there isn't a single answer in the SPA vs traditional architecture dilemma. There are cases where it makes sense to go with a SPA because you need a snappy, real-time UI. However, we should recognize that this comes at a cost to the development speed. And if a single-page app is not a requirement, we can avoid the additional complexity and move much quicker by going the traditional route.

Picking the right architecture for the job makes a huge difference in productivity, and ultimately, success. We should aim to have both architectures in our toolbox, so we can use the optimal solution in each case.
