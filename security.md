---
layout: page
title: Plausible Analytics Security Practices
description: Here’s a detailed overview of the technical and organizational security measures we use to secure Plausible and protect your data.
permalink: "/security"
---

Plausible Analytics is a privacy-first web analytics startup that’s built to enable you to comply with GDPR, CCPA and other privacy regulations that impact your business. You entrust us with your site data and we take that trust to heart. We’re committed to being transparent, securing your data, eliminating systems vulnerability and ensuring continuity of access.

## TL;DR

Here's a brief summary of our data security practices:

* All data is encrypted in transit
* All visitor data is irreversibly hashed
* All data is hosted in the EU on EU-owned servers
* User passwords are hashed and salted
* You can enable two-factor authentication (2FA)
* You can configure Single Sign-On (SSO)
* Our software is updated multiple times per week
* There is a public changelog 
* Regular vulnerability scans are conducted 
* All data is backed up on remote backups
* Data access is firewalled and user-restricted
* Our code is transparent and you can audit our code base
* Performance is monitored and uptime is disclosed
* Data can be exported via CSV or stats API
* We don’t collect nor store any personal or sensitive data
* We don’t store debit/credit card details
* We don’t store any data outside the EU
* We don’t outsource our software development
* We don’t outsource our infrastructure management 
* We don’t sell, share or in any other way monetize your data

Here’s a more detailed overview of the technical and organizational security measures we use to secure Plausible and protect your data.

## Data minimization

Plausible is a privacy-first tool so we don’t collect or store personal or sensitive data. Even though the purpose of Plausible is to track the usage of a website, this can still be done without tracking, collecting or storing any personal data or personally identifiable information (PII), without using cookies and while respecting the privacy of your website visitors.

By using Plausible, all the site measurement is carried out absolutely anonymously. We minimize data collection in general. We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page.

## Personal data

We don't use cookies, browser cache or local storage. We don't store, retrieve or extract anything from visitor’s devices. The data we process cannot be used to identify any single individual.

Every HTTP request sends the IP address and the User-Agent to the server so we use that. We generate a daily changing identifier utilizing the visitor’s IP address and User-Agent. To anonymize these data points and make them impossible to relate to the user, we run them through a hash function with a rotating salt. 

This generates a random string of letters and numbers to calculate unique visitor numbers for the day. The salt is rotated and deleted every 24 hours making the hash irreversible. The raw data IP address and User-Agent are never stored in our logs, databases or anywhere on disk at all.

For full details, please look at our [data policy](https://plausible.io/data-policy).

## Data encryption

To protect against access, modification or theft of the data, the data is encrypted in transit and at rest. Our hashing process increases the security of your visitor data by making it irreversible. 

Our hashing process provides robust security for your data. Unlike encryption, which is a reversible process using a decryption key, hashing irreversibly transforms your data into a unique string of characters. The use of salts in our hashing process adds an extra layer of protection by preventing the original IP addresses from being revealed in a brute force attack.

In our database, the raw IP address and user agent are completely inaccessible to anyone, including us.

## Server location

All the site data we do collect is kept encrypted in Germany on servers owned by a German company (Hetzner). This ensures that all of the website data is being covered by the European Union’s strict laws on data privacy. Your website data never leaves the EU and EU-owned cloud infrastructure. 

## Data ownership

You own all right, title, and interest to your website data. We obtain no rights from you to your website data. We don't collect and analyze personal information from web users and use these behavioral insights to sell advertisements. When using Plausible Analytics, you 100% own and control all of your website data. We don’t sell or share your site data to any third-parties, and we don’t abuse your visitor’s privacy.

## Data portability

You can export your data at any time in the [CSV format](https://plausible.io/docs/export-stats) or by using our [stats API](https://plausible.io/docs/stats-api).

## Data deletion

You are fully in control of any of the website stats we collect on your behalf. We claim no rights. It’s your data. You can permanently [delete your Plausible account](https://plausible.io/docs/delete-account) and/or permanently [delete all of your site data](https://plausible.io/docs/delete-site-data) within your settings at any time.

## User identification and authorization

Passwords for signing in are hashed and salted. You can [enable two-factor authentication (2FA)](https://plausible.io/docs/2fa) as an extra security layer for your Plausible account. You can require all your team members to enable 2FA too. You can also [configure Single Sign-On (SSO)](https://plausible.io/docs/sso) for your team, including the option to restrict access so only users logging in through SSO can access your account.

We list your active logged-in sessions in your account settings where we also allow you to remotely [log out of your account on other devices](https://plausible.io/docs/login-management). All logged-in sessions automatically expire after 14 days of inactivity. If you [change your account password](https://plausible.io/docs/reset-password), we automatically log out any of your sessions on your other devices.

## Data sharability 

We give you complete control over how you choose to share the data you collect. Only you can [invite and remove users](https://plausible.io/docs/users-roles) and apply permission levels in your account. Only you can choose to create [shared links](https://plausible.io/docs/shared-links), select [email recipients](https://plausible.io/docs/email-reports) or make your dashboards [open to the public](https://plausible.io/docs/visibility).

## Internal access controls

Our team doesn’t have a reason to access or process customer data on a day to day basis. Processing is fully automated. It’s only if there’s a problem with an account or to help resolve a customer support question that we might need to access your data.

We use role-based access controls. Access to our servers is strictly limited to specific individuals within our team. We log all logins to help us identify and investigate potential security breaches. Additionally, we use multi-factor authentication to prevent unauthorized access to our systems.

## Backups and disaster recovery

In the unlikely event of a loss of production data, we have a disaster recovery plan in place. Your data is not only safely stored, but also easily recoverable. We also perform offsite backups.

## Subprocessors 

We’ve tried hard to limit external services that we use and none of them have access to see or download the data. No third-party vendors are involved other than the hosting company that owns the servers where our data is stored (Hetzner) and our global CDN (Bunny). Both are European-owned companies.

For full details, take a look at our [privacy policy](https://plausible.io/privacy).

## Payment information

All our payments are processed through Paddle. Paddle is PCI DSS SAQ A compliant. Using Paddle means we don’t need to store your payment card details and other payment information. They are sent encrypted directly to Paddle. We don’t store them anywhere.

## Physical security

Plausible is hosted within data centers provided by Hetzner. As such, we take advantage of their physical, environmental and infrastructure controls. Hetzner is accredited with the ISO 27001 security certificate which covers their physical security controls.

For further information about the security of the server and the hardware itself, [here’s what Hetzner says](https://www.hetzner.com/unternehmen/zertifizierung/) about their security practices. 

## Availability and infrastructure monitoring 

We do extensive application and infrastructure monitoring. We maintain redundancy throughout our infrastructure in order to minimize the risk of low or slow availability or loss of data. We aim to provide continuous availability.

Our commitment to an uninterrupted service includes the use of robust security measures such as rate limiting and DDoS protection to provide resilience and ongoing availability.

In addition to these measures, we actively monitor data ingestion and service health from various geo locations. This global monitoring strategy allows us to proactively identify and address any potential issues, ensuring a seamless experience for users across different regions.

You can see our current and historical availability on [our status page](https://status.plausible.io).

## You can audit our entire code base

Our entire code base and the development are available to the public so they can be independently audited and verified by third-party experts for security or compliance. Anyone can see and verify whether we do what we claim. There is a public changelog and we have many eye-balls on what we’re doing [on our GitHub page](https://github.com/plausible/analytics).

## Software quality assurance

Plausible is updated several times per week. We use an ever-expanding and comprehensive set of automated tests running after each code change as part of our software quality assurance. This complements our software development practices which include code reviews.

## Data privacy and other legal documents 

Our legal docs including our [terms of service](https://plausible.io/terms), [privacy policy](https://plausible.io/privacy), [data policy](https://plausible.io/data-policy) and [data processing agreement](https://plausible.io/dpa) are all publicly available and include the full details on what we do and how. These docs are written to answer specific questions about our data privacy practices. 

## Reporting security problems

If you’ve found a security vulnerability with the Plausible codebase, you can disclose it responsibly by sending a summary to us. We’ll review the potential threat. We appreciate your patience and understanding that some reports will take time to fix and the process may involve a review of our codebase for similar problems. It’s crucial we can trust you not to disclose the vulnerability to anyone until a few days after we release the fix.

More details can be found in [our vulnerability disclosure program](https://plausible.io/vulnerability-disclosure-program).

We’re incredibly thankful for people who take the time to share their findings with us. Whether it's a tiny bug that you’ve found or a security vulnerability, all reports help us to continuously improve Plausible for everyone. Thank you!

## Security questions or concerns?

If you have any questions or concerns regarding our security practices, please [contact us](https://plausible.io/contact).

Last updated: July 22, 2025
