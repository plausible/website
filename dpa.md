---
layout: page
title: Plausible Analytics Data Processing Agreement
description: Plausible Analytics Data Processing Agreement (DPA) that you agree to when you sign up for a Plausible Analytics product.
permalink: "/dpa"
---

Thank you for using Plausible Analytics!

Plausible Analytics is a European company and our data infrastructure is based in Germany covered by the EU's strong data privacy laws. Processing and storing data in a secure, fair, and transparent way is extremely important to us. 

This Data Processing Agreement (“DPA”) is an addendum to the [Terms of Service](https://plausible.io/terms) between Plausible Analytics and the customer. 

If you are accepting this DPA on behalf of your customer, you warrant that: (a) you have full legal authority to bind your customer to this DPA; (b) you have read and understand this DPA; and (c) you agree, on behalf of your customer, to this DPA.

These service terms incorporate the Plausible Analytics Data Processing Agreement” (“DPA”), when the General Data Protection regulation (“GDPR”) applies to your use of Plausible Analytics services to process visitor data as defined in the DPA. We protect and secure your visitor data to the high standards set out in the agreement.

## Definitions

* “You” or “customer” refers to the company or organization that signs up to use the Plausible Analytics to analyze website’s visitors.

* In the course of providing the Plausible Analytics service to customer pursuant to the agreement, Plausible Analytics may process visitor data on behalf of customer.

* In this Data Processing Agreement (“DPA”), “Data Protection Legislation” means the General Data Protection Regulation (Regulation (EU) 2016/279), and all other applicable laws relating to processing of visitor data and privacy that may exist in any relevant jurisdiction.

* “data controller”, “data processor”, “data subject”, “personal data” and “processing” shall be interpreted in accordance with applicable Data Protection Legislation.

* The parties agree that customer is the data controller and that Plausible Analytics is its data processor in relation to visitor data that is processed in the course of providing the service.

## Privacy and security of your visitor data

We take many measures to protect and secure your data through backups, redundancies, and encryption. When you use our service to measure your website stats, Plausible Analytics will collect information about your visitors. 

You entrust us with your site data and we take that trust to heart. You agree that Plausible Analytics may process your data as described in our data policy and for no other purpose. We do our best to deserve that trust by being open about [who we are, how we work](https://plausible.io/about), and keeping an open door to [your feedback](https://plausible.io/contact).

You own all right, title, and interest to your website data. We obtain no rights from you to your website data. We do not collect and analyze personal information from web users and use these behavioral insights to sell advertisements. When using Plausible Analytics, you 100% own and control all of your website data. We don’t sell or share your site data to any third-parties, and we don’t abuse your visitor’s privacy.

Even though the purpose of Plausible Analytics is to track the usage of a website, this can still be done without tracking, collecting or storing any personal data or personally identifiable information (PII), without using cookies and while respecting the privacy of your website visitors.

By using Plausible Analytics, all the site measurement is carried out absolutely anonymously. We minimize data collection in general. We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page.

We do not attempt to generate a device-persistent identifier because they are considered personal data under GDPR. We do not use cookies, browser cache nor the local storage. We do not store, retrieve nor extract anything from visitor’s devices. The data we process cannot be used to identify any single individual.

Every single HTTP request sends the IP address and the User-Agent to the server so that’s what we use. We generate a daily changing identifier using the visitor’s IP address and User-Agent. To anonymize these datapoints and make them impossible to relate back to the user, we run them through a hash function with a rotating salt.

> hash(daily_salt + website_domain + ip_address + user_agent)

This generates a random string of letters and numbers that is used to calculate unique visitor numbers for the day. The raw data IP address and User-Agent are never stored in our logs, databases or anywhere on disk at all.

Old salts are deleted every 24 hours to avoid the possibility of linking visitor information from one day to the next. Forgetting used salts also removes the possibility of the original IP addresses being revealed in a brute-force attack. The raw IP address and User-Agent are rendered completely inaccessible to anyone, including ourselves.

The group of data subjects affected by the processing of their data under this agreement includes end-users of the controller’s websites which make use of the service provided by the processor.

You can find more information about our processing of your visitor data and what types/categories of data we collect on your behalf in our publicly available [data policy](https://plausible.io/data-policy).

## Organizational and technical security measures

All of the data that we do track is kept fully secured, encrypted and hosted on renewable energy powered server in Germany. This ensures that all of the website data is being covered by the European Union’s strict laws on data privacy. Your visitor data never leaves the EU and EU-owned cloud infrastructure. You can read about Hetzner and their server security certifications [here](https://www.hetzner.com/unternehmen/zertifizierung/).

For encryption, we use https in transit and the hashing process at rest. Our hashing process is much stronger than encryption. Encryption implies that there's a key that can decrypt and reveal the raw data. In our database the raw IP address and User Agent are rendered completely inaccessible to anyone, including ourselves. In addition to this, we use strict firewall rules and private encrypted networking. We keep offsite backups with replication including strong bcrypt passwords.

Plausible Analytics is open source software which means that our source code is available and accessible on GitHub so anyone can check it out and audit it. You can read it, inspect it and review it to understand how it works and to ensure it keeps the data private and secure. This gives you and everyone else full transparency on how we handle the website traffic data. 

With more than 15,000 GitHub stars, there are a lot of eyes on our code and it is this transparency and openness that means that open source products can be more trustworthy than proprietary and closed source products. Our software is updated several times per week and we also have a way for people to report [any security vulnerabilities](https://plausible.io/vulnerability-disclosure-program).

A more detailed overview about our security practices can be found on [plausible.io/security](https://plausible.io/security).
     
## Processor’s obligations with respect to the controller

* Plausible Analytics will process visitor data only in accordance with instructions from customer through the settings of the service, i.e. (a) to operate, maintain and support the infrastructure used to provide the service; (b) to comply with customer’s instructions and processing instructions in their use, management and administration of the service; (c) as otherwise instructed through settings of the service. Plausible Analytics will only process visitor data in accordance with the agreement.
 
* Plausible Analytics shall notify customer without undue delay if, in Plausible Analytics’s opinion, an instruction for the processing of visitor data given by customer infringes applicable Data Protection Legislation.

* Plausible Analytics shall guarantee the confidentiality of visitor data processed hereunder.

* We as humans can access your data to help you with support requests you make and to maintain and safeguard Plausible Analytics to ensure the security of your data and the service as a whole. Plausible Analytics shall ensure that all Plausible Analytics personnel required to access the visitor data are trained in GDPR and data privacy, informed of the confidential nature of the data and comply with the obligations sets out in this agreement.

* Plausible Analytics shall implement and maintain appropriate technical and organisational security measures designed to protect the visitor data against unauthorised or unlawful processing and against accidental loss, destruction, damage, theft, alteration or disclosure. These measures shall be appropriate to the harm which might result from any unauthorised or unlawful processing, accidental loss, destruction, damage or theft of the visitor data and having regard to the nature of the visitor data which is to be protected.

* We do work with sub-processors. With each vendor, we assess their commitment to privacy and we sign a data processing agreement with them that include the controller-processor Standard Contractual Clauses. Any such subcontractors will be permitted to process data only to deliver the services Plausible Analytics has retained them to provide, and they shall be prohibited from using data for any other purpose. Plausible Analytics shall notify the controller when modifying the list of subprocessors using our in-app notifications, email and/or blog. The controller is able to legitimately object and may terminate the agreement.

* The only two cloud services we use as subcontractors that come in touch with your site data are BunnyWay d.o.o. (Slovenian owned for our CDN) and Hetzner Online GmbH (German owned for our servers). All of your site data is securely stored in the EU on EU-owned server infrastructure and it never leaves the EU. You can find the list of other cloud services and third party services that we use in our [privacy policy](https://plausible.io/privacy). 

* If Plausible Analytics becomes aware of any accidental, unauthorised or unlawful security breach, destruction, loss, alteration, or disclosure of the personal data that is processed by Plausible Analytics in the course of providing the service, it shall without undue delay (not later than 48 hours after having become aware of it), notify customer by email and provide customer with a description of the incident as well as periodic updates to information about the incident, including its impact on customer content. Plausible Analytics shall additionally take action to investigate the incident and reasonably prevent or mitigate the effects of the incident.

* Plausible Analytics shall not on its own authority rectify, erase or restrict the processing of visitor data that is being processed on behalf of the controller (unless this is required by law or the Processor Terms of Service), but shall only do so on documented instructions from the controller and in accordance to the data retention rules associated to the controller subscription plan.

* Plausible Analytics shall assist the controller in complying with the obligations concerning the security of personal data. Plausible will also provide assistance to the controller for DPIAs. Where a data subject asserts their rights as a data subject, this request will be forwarded to the controller without delay.

## How we handle delete instructions

You can choose to [delete your account](https://plausible.io/docs/delete-account) and [delete your site stats](https://plausible.io/docs/delete-site-data) at any time. We provide simple no-questions-asked deletion links. 

All your stats will be permanently deleted immediately when you delete your Plausible Analytics account or when you delete your site stats. We cannot recover this information once it has been permanently deleted.

## Customer undertakings and Plausible Analytics assistance

* Customer warrants that it has all necessary rights to provide to Plausible Analytics the visitor data for processing in connection with the provision of the Plausible Analytics Services.

* Customer shall comply at all times with Data Protection Legislations in respect of all visitor data it provided to Plausible Analytics pursuant to the Agreement.

* Customer understands, as a controller, that it is responsible (as between customer and Plausible Analytics) for:

1. determining the lawfulness of any processing, performing any required data protection impact assessments, and accounting to regulators and individuals, as may be needed;

2. providing relevant privacy notices to data subjects as may be required in your jurisdiction;

3. implementing your own appropriate technical and organizational measures to ensure and demonstrate processing in accord with this DPA;

4. notifying any relevant regulators or authorities of any incident as may be required by law in your jurisdiction.

## Liability and Indemnity

* Each party indemnifies the other and holds them harmless against all claims, actions, third party claims, losses, damages and expenses incurred by the indemnified party and arising directly or indirectly out of or in connection with a breach of this DPA.

## Duration and Termination

* The DPA is effective as of October 21, 2020 and replaces and supersedes any previously agreed data processing agreement between you and Plausible Analytics relating to the GDPR. 

* Termination or expiration of this DPA shall not discharge the parties from the confidentiality obligations herein.

## Are customers required to sign the Plausible Analytics DPA?

In order to use our products and services, you need to accept our DPA. By using our product you are agreeing to our terms of service, and you are automatically accepting our DPA and do not need to sign a separate document. We provide the same privacy rights and protection to all customers.

## Can a customer share the Plausible Analytics DPA with its customers?

Yes. The DPA is a publicly available document and customers who wish to share it with their customers to confirm our security measures and other terms may feel free to do so.

## Do customers need to notify anyone upon accepting our DPA?

No. You are not required to notify us or any third party upon accepting our DPA though, as mentioned above, you are free to do so.

## Contact Us

If you have a question about the Data Processing Agreement (DPA), please [contact us](https://plausible.io/contact).

If you have any questions or concerns regarding your information and personal data, please contact us at [privacy@plausible.io](mailto:privacy@plausible.io).

Last updated: November 27, 2023
