---
layout: article
title: "Cookie banner traffic loss calculator"
description: "Estimate how many website visitors are invisible to Google Analytics because of cookie consent banner declines."
permalink: /cookie-banner-traffic-loss-calculator
---
Most analytics tools use cookies and collect personal data to identify visitors. Both require consent. Consent requires a banner. And every visitor who declines or simply ignores the banner disappears from your data entirely.

Google Analytics cannot track what it has no permission to touch. The result is a gap between the traffic you actually have and the traffic your dashboard shows you. This calculator estimates the size of that gap.

## Cookie banner traffic loss calculator

Enter your reported monthly visitors and adjust the consent acceptance rate to match your audience:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
    <div>
      <label for="cb-visitors" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Monthly visitors (as reported by GA)</label>
      <input type="text" id="cb-visitors" value="28,400" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="cb-rate" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Consent acceptance rate (%)</label>
      <input type="text" id="cb-rate" value="57" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div style="margin-top: 0.375rem; display: flex; gap: 0.375rem; flex-wrap: wrap;">
        <button id="cb-eu-preset" type="button" style="background: none; border: 1px solid #d1d5db; border-radius: 0.25rem; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: #4f46e5; cursor: pointer; font-family: inherit;">EU avg (45%)</button>
        <button id="cb-global-preset" type="button" style="background: none; border: 1px solid #d1d5db; border-radius: 0.25rem; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: #4f46e5; cursor: pointer; font-family: inherit;">Global avg (55%)</button>
        <button id="cb-us-preset" type="button" style="background: none; border: 1px solid #d1d5db; border-radius: 0.25rem; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: #4f46e5; cursor: pointer; font-family: inherit;">US avg (70%)</button>
      </div>
    </div>
  </div>

  <div id="cb-result" style="display: none;">
    <div style="margin-bottom: 1rem;">
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.375rem;">
        <span style="color: #4f46e5;">GA sees: <span id="cb-bar-seen-pct"></span></span>
        <span style="color: #dc2626;">GA misses: <span id="cb-bar-missed-pct"></span></span>
      </div>
      <div style="display: flex; height: 1.25rem; border-radius: 0.375rem; overflow: hidden; border: 1px solid #e5e7eb;">
        <div id="cb-bar-seen" style="background: #4f46e5; transition: width 0.3s;"></div>
        <div style="background: #fca5a5; flex: 1;"></div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">True visitors/month</div>
        <div id="cb-true-visitors" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 2px solid #dc2626; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #dc2626; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Invisible per month</div>
        <div id="cb-hidden-visitors" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Data gap</div>
        <div id="cb-hidden-percent" style="font-size: 1.75rem; font-weight: 800; color: #dc2626; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">of traffic hidden</div>
      </div>
    </div>

    <div style="padding: 0.75rem 1rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.375rem; text-align: center; font-size: 0.875rem; color: #991b1b;">
      Over a year, approximately <strong><span id="cb-annual-num"></span> visitors</strong> are missing from your analytics.
    </div>
  </div>

  <div id="cb-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter your monthly visitors and consent acceptance rate above.</div>
</div>

<script>
(function() {
  var visitorsInput = document.getElementById('cb-visitors');
  var rateInput = document.getElementById('cb-rate');
  var result = document.getElementById('cb-result');
  var placeholder = document.getElementById('cb-placeholder');

  function fmtPct(val) {
    var r = Math.round(val * 10) / 10;
    return (r % 1 === 0 ? r.toFixed(0) : r.toFixed(1)) + '%';
  }

  function formatInteger(input) {
    var digits = input.value.replace(/[^0-9]/g, '');
    var num = parseInt(digits, 10);
    input.value = num ? num.toLocaleString('en-US') : '';
  }

  function normalizeDecimal(input) {
    var val = input.value.replace(',', '.').replace(/[^0-9.]/g, '');
    var parts = val.split('.');
    if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
    input.value = val;
  }

  function calculate() {
    var visitors = parseInt(visitorsInput.value.replace(/[^0-9]/g, ''), 10);
    var rate = parseFloat(rateInput.value.replace(',', '.'));

    if (!visitors || !rate || visitors <= 0 || rate <= 0 || rate >= 100) {
      result.style.display = 'none';
      placeholder.style.display = 'block';
      return;
    }

    var trueVisitors = Math.round(visitors / (rate / 100));
    var hiddenVisitors = trueVisitors - visitors;
    var hiddenPercent = (1 - rate / 100) * 100;
    var annualHidden = hiddenVisitors * 12;

    document.getElementById('cb-true-visitors').textContent = trueVisitors.toLocaleString('en-US');
    document.getElementById('cb-hidden-visitors').textContent = hiddenVisitors.toLocaleString('en-US');
    document.getElementById('cb-hidden-percent').textContent = fmtPct(hiddenPercent);
    document.getElementById('cb-annual-num').textContent = annualHidden.toLocaleString('en-US');
    document.getElementById('cb-bar-seen').style.width = rate.toFixed(1) + '%';
    document.getElementById('cb-bar-seen-pct').textContent = fmtPct(rate);
    document.getElementById('cb-bar-missed-pct').textContent = fmtPct(hiddenPercent);

    result.style.display = 'block';
    placeholder.style.display = 'none';
  }

  document.getElementById('cb-eu-preset').addEventListener('click', function() { rateInput.value = '45'; calculate(); });
  document.getElementById('cb-global-preset').addEventListener('click', function() { rateInput.value = '55'; calculate(); });
  document.getElementById('cb-us-preset').addEventListener('click', function() { rateInput.value = '70'; calculate(); });

  visitorsInput.addEventListener('input', function() { formatInteger(visitorsInput); calculate(); });
  rateInput.addEventListener('input', function() { normalizeDecimal(rateInput); calculate(); });

  calculate();
})();
</script>

If you want to close this gap entirely, [Plausible Analytics](https://plausible.io) is built without cookies, without personal data collection and without any cross-site tracking. Because nothing personal is collected, no consent banner is required under most privacy regulations and every visitor is counted, not just the ones who clicked accept.

## What consent rate should I use?

If you have access to your consent management platform's data, use the actual acceptance rate from there. That will give you the most accurate estimate.

If you do not have that data, these are reasonable starting points based on published research:

* **EU/EEA-focused sites**: 40–50%. GDPR requires that declining consent be as easy as accepting it. Sites that comply properly see lower acceptance rates. A clearly labeled "Reject All" button will reduce acceptances.
* **Mixed global audiences**: 50–60%
* **US-focused sites**: 65–75%. CCPA requirements are less restrictive than GDPR and do not require an opt-in consent model.

Banner design has a significant effect. Hiding the reject option or using dark patterns can push acceptance higher, but those practices carry legal risk under GDPR and are increasingly scrutinized by data protection authorities.

## Why the gap grows with EU traffic

GDPR requires that declining consent be as easy as accepting it. A compliant banner must make "Reject All" as prominent and accessible as "Accept All." That legal requirement directly pushes acceptance rates down on sites that serve European visitors. Sites that bury the reject option or use dark patterns to discourage it may see higher acceptance, but risk regulatory action.

Beyond regulation, privacy-conscious audiences decline at higher rates regardless of where the banner is required. Technical readers, developer communities and ad-heavy sites where visitors associate cookies with ad tracking all tend to see wider gaps.

A study by Orbit Media comparing Google Analytics 4 to Plausible found that GA4 captured only 55.6% of actual traffic, with consent declines as the primary cause. We cover this in more detail in our [guide to web analytics accuracy](/most-accurate-web-analytics).

## The bounce effect

The data gap has a second dimension that the calculator above does not capture.

Some visitors leave immediately when they see a cookie banner, without clicking accept or decline. They close the tab. These visitors never register in analytics at all, not even as a declined consent event. They are not counted in your GA totals. They are not counted in the invisible visitors estimate above.

The banner itself is friction. A fraction of your audience treats it as a reason to leave.

This means the true traffic gap is likely larger than the estimate above.

## Where the data gap hits hardest

The consent rate in the calculator above is a single average across all your visitors. In practice, it varies significantly by traffic source, and the variation matters.

Visitors who arrive directly or through a branded search already know you. They chose to come. That prior relationship makes them more likely to trust your site and accept the consent prompt. Their data tends to be relatively well represented in GA.

Visitors arriving from a paid ad or a non-branded organic search are encountering your site for the first time. There is no prior relationship, no established trust. They are more likely to decline. These are also the visitors you spent money to acquire, the ones whose behavior you most need to understand to evaluate whether your campaigns are working.

The result is that GA's blind spot is largest where it matters most. You get a reasonably complete picture of your returning audience, and a distorted picture of the new visitors you are actively trying to grow.

This is not a limitation you can route around with better attribution models or consent mode estimates. It is structural to any analytics tool that depends on visitor consent.

## How cookieless analytics closes the gap

Cookie consent banners exist because personal data is being collected and stored. Remove the personal data collection, and the legal basis for requiring consent goes away. More on why banners exist and what they mean for your site in our [cookie consent banners explainer](/blog/cookie-consent-banners).

Plausible does not use cookies. It does not store any personal data. Sessions and pageviews are measured using aggregate, anonymized counts with no persistent identifiers. Because nothing personal is collected, there is nothing to consent to, and no banner is required in most jurisdictions including under GDPR and CCPA.

Every visitor shows up. The ones who would have declined, the ones who would have bounced from the banner, the ones who block tracking scripts out of habit. None of them disappear.

The consent acceptance rate stops being a variable in your analytics accuracy because consent is no longer part of the equation.

Whether a consent banner is required depends on your specific setup, audience location and any other tools running on your site. If you are running Plausible alongside other tracking tools that use cookies, those tools may still require consent. For a detailed legal assessment of when consent is and is not required, see our [guide written by a data protection lawyer](/blog/legal-assessment-gdpr-eprivacy). Nothing on this page is legal advice.

If your GA data shows 28,400 visitors per month with a 45% consent rate, your actual traffic is closer to 51,600. Switching to Plausible does not manufacture traffic. It makes the traffic you already have visible.
