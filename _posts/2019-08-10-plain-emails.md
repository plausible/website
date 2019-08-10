---
layout: post
title: Plain emails are a win-win
---

If you've ever had to develop transactional HTML emails with slick designs, you'll
know that it's a complete mess. The incompatibilities between email clients are way worse
than what you see with different browsers. Testing emails is extremely difficult, and
there's a seemingly endless number of problems with various clients.

Luckily there's a really simple solution to this problem: just send plain
transactional emails instead with minimal/no design. Email clients were never designed
for complex layouts and graphics. Instead of abusing the format for something its not
intended for, let's respect it and use it to our advantage instead.

Before we go on, of course there are cases where it makes sense to design complex HTML emails for
better readability. For example, I'm planning to add a weekly (or monthyl) email report
to [Plausible](https://plausible.io) in the future. Such a report needs to fit a lot of
data in a scannable format, so I will probably lean towards a designed email template.

However, most transactional emails don't require design. Here's the email
you receive when you reset your password on Plausible:


![Plausible password reset](/blog/assets/images/plausible_password_reset.png)

No fuss, straight to the point without any distracting elements. It's hard to see how
adding colours, logos and buttons to the email would improve it.

### More than just time savings

Avoiding the complexity of HTML templates can save a lot of time in design and development.
But and even greater win is that plain emails also have
[better deliverability and response rates](https://blog.hubspot.com/marketing/plain-text-vs-html-emails-data).

HMTL elements and images have a negative effect on deliverability because they tend to trip spam
filters. Over-designed emails can definitely feel spammy to the reader as well, not just the AI.
I'm guessing it's due to the ridiculous amount of unsolicited marketing emails
that we all receive on a daily basis. They are almost exclusively complex HTML templates with
loads of images.

Plain emails get more responses because they feel much more personal than HTML emails. People
associate designed emails with marketing and one-way mass communication. On the other hand, plain
emails look like the emails you get from a coworker or a friend. It feels more natural to hit
'reply' on them.

This is why plain emails are a win-win: not only do they simplify the development process but they
also reach more people. My takeaway is that we should only get into complex HTML templates if they are completely
necessary to enhance the user experience. We should accept that using them sacrifices deliverability,
open rates, and development time. The upside of using email designs must be huge to outweight
outweigh the negative consequences of using them.
