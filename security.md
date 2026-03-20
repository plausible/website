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
* All visitor data is hosted in the EU on EU-owned servers
* User passwords are hashed and salted
* You can enable two-factor authentication (2FA)
* You can configure Single Sign-On (SSO)
* Our software is updated multiple times per week
* We maintain a public changelog
* Regular vulnerability scans are conducted 
* All data is backed up on remote backups
* Data access is firewalled and user-restricted
* Our code is transparent and can be audited
* Performance is monitored and uptime is disclosed
* Data can be exported via CSV or stats API
* We don’t collect or store personal data about website visitors that can be used to identify individuals
* We don’t store debit or credit card details
* We do not store visitor data outside the EU
* We don’t outsource our software development
* We don’t outsource our infrastructure management 
* We do not sell your data and only share it with trusted service providers where necessary to operate and provide the service

Here’s a more detailed overview of the technical and organizational security measures we use to secure Plausible and protect your data.

## Data minimization

Plausible is a privacy-first tool so we don’t collect or store personal data that can be used to identify individuals. Even though the purpose of Plausible is to track the usage of a website, this can still be done without tracking, collecting or storing personal data, without using cookies and while respecting the privacy of your website visitors.

By using Plausible, all the site measurement is carried out in an anonymous and privacy-friendly way. We minimize data collection in general. We measure only the most essential data points and nothing else.

## Personal data

We don't use cookies, browser cache or local storage. We don't store, retrieve or extract anything from visitor devices. The data we process cannot be used to identify any single individual.

Every HTTP request sends the IP address and the User-Agent to the server so we use that. We generate a daily changing identifier utilizing the visitor’s IP address and User-Agent. To anonymize these data points and make them impossible to relate to the user, we run them through a hash function with a rotating salt. 

This generates a random string to calculate unique visitor numbers for the day. The salt is rotated and deleted every 24 hours. The raw IP address and User-Agent are never stored in logs, databases or anywhere on disk.

For full details, please look at our [data policy](https://plausible.io/data-policy).

## Data encryption

To protect against access, modification or theft of data, all data is encrypted in transit and secured at rest. 

We use hashing techniques to ensure that visitor data cannot be reversed or used to identify individuals. The use of rotating salts adds an additional layer of protection.

## Server location

All visitor data is kept encrypted in Germany on servers owned by a German company (Hetzner). This ensures that all website data is covered by the European Union’s strict data protection laws. Visitor data does not leave the EU.

## Data ownership

You retain full ownership and control of your website data. We do not sell your data and only share it with trusted service providers where necessary to operate and provide the service.

## Data portability

You can export your data at any time in [CSV format](https://plausible.io/docs/export-stats) or by using our [stats API](https://plausible.io/docs/stats-api).

## Data deletion

You are fully in control of any website data we collect on your behalf. You can permanently [delete your Plausible account](https://plausible.io/docs/delete-account) and/or permanently [delete all of your site data](https://plausible.io/docs/delete-site-data) at any time.

## User identification and authorization

Passwords are hashed and salted. You can [enable two-factor authentication (2FA)](https://plausible.io/docs/2fa) as an extra security layer. You can also configure [Single Sign-On (SSO)](https://plausible.io/docs/sso).

We list active sessions in your account settings and allow you to remotely [log out of other devices](https://plausible.io/docs/login-management). Sessions expire automatically after inactivity.

## Data sharing controls

You control how your data is shared. You can invite users, assign permissions, create shared links, configure email reports or make dashboards public.

## Internal access controls

Our team does not access customer data on a routine basis. Access is limited to cases such as support requests or system maintenance.

We use role-based access controls and restrict server access to specific individuals. All access is logged and monitored.

## Backups and disaster recovery

We maintain backups and disaster recovery procedures to protect against data loss. Backups are stored securely and used only for recovery purposes.

## Subprocessors 

We use a limited number of subprocessors where necessary to provide the service. These are carefully selected and bound by data protection agreements.

For more details, see our [privacy policy](https://plausible.io/privacy).

## Payment information

Payments are handled by Paddle. We do not store payment card details.

## Physical security

Plausible is hosted within data centers provided by Hetzner, which maintains strong physical and environmental security controls.

## Availability and infrastructure monitoring 

We monitor application performance and infrastructure to maintain reliability and availability.

We aim to provide continuous availability but do not guarantee uninterrupted service. You can view current and historical uptime on our [status page](https://status.plausible.io).

## You can audit our entire code base

Our code is open source and publicly available. This allows independent verification of our security and privacy practices.

## Software quality assurance

We deploy updates frequently and use automated testing and code reviews to maintain quality.

## Data privacy and legal documents 

Our legal documents including our [terms of service](https://plausible.io/terms), [privacy policy](https://plausible.io/privacy), [data policy](https://plausible.io/data-policy) and [data processing agreement](https://plausible.io/dpa) are publicly available.

## Reporting security problems

If you discover a vulnerability, please report it responsibly. Details are available in our [vulnerability disclosure program](https://plausible.io/vulnerability-disclosure-program).

## Security questions or concerns?

If you have any questions about our security practices, please [contact us](https://plausible.io/contact).

---

Last updated: March 2026  
Clarifications only. No material changes to data handling.
