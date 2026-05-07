---
layout: article
title: "Ad cost calculator: CPC, CPM and CPA"
description: "Calculate your cost per click, cost per mille and cost per acquisition from a single set of campaign numbers. Know what you are paying for your advertising."
permalink: /ad-cost-calculator
---

<p style="font-size: 0.8125rem; margin-bottom: 1.5rem;"><a href="/tools">← All tools</a></p>

Ad spend is easy to increase. Knowing whether the increase is working is harder. CPC, CPM and CPA are the three numbers that tell you what you actually paid: per click, per thousand impressions and per conversion.

Enter your campaign numbers once and see whichever metrics you have data for.

1. Ordered list
{:toc}

## Ad cost calculator

<style>
@media (max-width: 600px) {
  .calc-grid-3 { grid-template-columns: 1fr !important; }
  .calc-grid-2 { grid-template-columns: 1fr !important; }
}
</style>

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">

  <div style="margin-bottom: 1.25rem;">
    <label for="u-spend" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Ad spend</label>
    <input type="text" id="u-spend" value="1,000" style="width: 12rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
  </div>

  <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
    <div>
      <label for="u-clicks" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Clicks <span style="font-weight: 400; color: #9ca3af; font-size: 0.8125rem;">→ CPC</span></label>
      <input type="text" id="u-clicks" value="2,500" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="u-impressions" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Impressions <span style="font-weight: 400; color: #9ca3af; font-size: 0.8125rem;">→ CPM</span></label>
      <input type="text" id="u-impressions" value="100,000" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="u-conversions" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Conversions <span style="font-weight: 400; color: #9ca3af; font-size: 0.8125rem;">→ CPA</span></label>
      <input type="text" id="u-conversions" value="25" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>

  <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
    <div id="u-cpc-card" style="padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
      <div id="u-cpc-label" style="font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">CPC</div>
      <div id="u-cpc-value" style="font-size: 2.25rem; font-weight: 800; color: #d1d5db; line-height: 1;">—</div>
      <div style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">per click</div>
    </div>
    <div id="u-cpm-card" style="padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
      <div id="u-cpm-label" style="font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">CPM</div>
      <div id="u-cpm-value" style="font-size: 2.25rem; font-weight: 800; color: #d1d5db; line-height: 1;">—</div>
      <div style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">per 1,000 impressions</div>
    </div>
    <div id="u-cpa-card" style="padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
      <div id="u-cpa-label" style="font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">CPA</div>
      <div id="u-cpa-value" style="font-size: 2.25rem; font-weight: 800; color: #d1d5db; line-height: 1;">—</div>
      <div style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">per conversion</div>
    </div>
  </div>

  <div id="u-derived" style="display: none; margin-top: 1rem;">
    <div style="font-size: 0.75rem; font-weight: 600; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">Derived from your data</div>
    <div class="calc-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div id="u-ctr-card" style="padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; display: none;">
        <div id="u-ctr-label" style="font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">CTR</div>
        <div id="u-ctr-value" style="font-size: 2.25rem; font-weight: 800; color: #111827; line-height: 1;">—</div>
        <div style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">click-through rate</div>
      </div>
      <div id="u-cr-card" style="padding: 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; display: none;">
        <div id="u-cr-label" style="font-size: 0.75rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Conversion rate</div>
        <div id="u-cr-value" style="font-size: 2.25rem; font-weight: 800; color: #111827; line-height: 1;">—</div>
        <div style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">of clicks that convert &middot; <a href="/conversion-rate-calculator" style="color: #4f46e5; text-decoration: none;">improve it →</a></div>
      </div>
    </div>
  </div>

  <div id="u-hint" style="margin-top: 1rem; text-align: center; font-size: 0.8125rem; color: #9ca3af; display: none;">Enter ad spend and at least one metric above to see your results.</div>

</div>

<script>
(function() {
  var spendInput = document.getElementById('u-spend');
  var clicksInput = document.getElementById('u-clicks');
  var impressionsInput = document.getElementById('u-impressions');
  var conversionsInput = document.getElementById('u-conversions');

  var cpcCard = document.getElementById('u-cpc-card');
  var cpmCard = document.getElementById('u-cpm-card');
  var cpaCard = document.getElementById('u-cpa-card');
  var cpcLabel = document.getElementById('u-cpc-label');
  var cpmLabel = document.getElementById('u-cpm-label');
  var cpaLabel = document.getElementById('u-cpa-label');
  var cpcValueEl = document.getElementById('u-cpc-value');
  var cpmValueEl = document.getElementById('u-cpm-value');
  var cpaValueEl = document.getElementById('u-cpa-value');
  var derivedRow = document.getElementById('u-derived');
  var ctrCard = document.getElementById('u-ctr-card');
  var crCard = document.getElementById('u-cr-card');
  var ctrLabel = document.getElementById('u-ctr-label');
  var crLabel = document.getElementById('u-cr-label');
  var ctrValueEl = document.getElementById('u-ctr-value');
  var crValueEl = document.getElementById('u-cr-value');
  var hint = document.getElementById('u-hint');

  function parseDecimal(s) {
    return parseFloat((s || '').replace(/,/g, '')) || 0;
  }

  function formatDecimal(input) {
    var raw = input.value.replace(/[^0-9.]/g, '');
    var parts = raw.split('.');
    if (parts.length > 2) parts = [parts[0], parts.slice(1).join('')];
    var intStr = parts[0].replace(/^0+(\d)/, '$1');
    var intNum = parseInt(intStr, 10);
    var formatted = intStr === '' ? '' : intNum.toLocaleString('en-US');
    if (parts.length === 2) formatted += '.' + parts[1];
    input.value = formatted;
  }

  function formatInteger(input) {
    var digits = input.value.replace(/[^0-9]/g, '');
    var num = parseInt(digits, 10);
    input.value = num ? num.toLocaleString('en-US') : '';
  }

  function formatResult(val) {
    return (Math.round(val * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  function setActive(card, labelEl, valueEl, value) {
    card.style.background = '#fff';
    card.style.border = '2px solid #4f46e5';
    labelEl.style.color = '#4f46e5';
    valueEl.style.color = '#111827';
    valueEl.textContent = value;
  }

  function setInactive(card, labelEl, valueEl) {
    card.style.background = '#f3f4f6';
    card.style.border = '1px solid #e5e7eb';
    labelEl.style.color = '#9ca3af';
    valueEl.style.color = '#d1d5db';
    valueEl.textContent = '—';
  }

  function calculate() {
    var spend = parseDecimal(spendInput.value);
    var clicks = parseInt(clicksInput.value.replace(/[^0-9]/g, ''), 10) || 0;
    var impressions = parseInt(impressionsInput.value.replace(/[^0-9]/g, ''), 10) || 0;
    var conversions = parseInt(conversionsInput.value.replace(/[^0-9]/g, ''), 10) || 0;
    var anyResult = false;

    if (spend > 0 && clicks > 0) {
      setActive(cpcCard, cpcLabel, cpcValueEl, formatResult(spend / clicks));
      anyResult = true;
    } else {
      setInactive(cpcCard, cpcLabel, cpcValueEl);
    }

    if (spend > 0 && impressions > 0) {
      setActive(cpmCard, cpmLabel, cpmValueEl, formatResult((spend / impressions) * 1000));
      anyResult = true;
    } else {
      setInactive(cpmCard, cpmLabel, cpmValueEl);
    }

    if (spend > 0 && conversions > 0) {
      setActive(cpaCard, cpaLabel, cpaValueEl, formatResult(spend / conversions));
      anyResult = true;
    } else {
      setInactive(cpaCard, cpaLabel, cpaValueEl);
    }

    hint.style.display = (spend > 0 && !anyResult) ? 'block' : 'none';

    var hasCtr = clicks > 0 && impressions > 0;
    var hasCr = clicks > 0 && conversions > 0;

    if (hasCtr) {
      var ctr = (clicks / impressions) * 100;
      ctrValueEl.textContent = formatResult(ctr) + '%';
      ctrCard.style.background = '#fff';
      ctrCard.style.border = '2px solid #4f46e5';
      ctrLabel.style.color = '#4f46e5';
      ctrValueEl.style.color = '#111827';
    }
    ctrCard.style.display = hasCtr ? 'block' : 'none';

    if (hasCr) {
      var cr = (conversions / clicks) * 100;
      crValueEl.textContent = formatResult(cr) + '%';
      crCard.style.background = '#fff';
      crCard.style.border = '2px solid #4f46e5';
      crLabel.style.color = '#4f46e5';
      crValueEl.style.color = '#111827';
    }
    crCard.style.display = hasCr ? 'block' : 'none';

    derivedRow.style.display = (hasCtr || hasCr) ? 'block' : 'none';
  }

  spendInput.addEventListener('input', function() { formatDecimal(spendInput); calculate(); });
  clicksInput.addEventListener('input', function() { formatInteger(clicksInput); calculate(); });
  impressionsInput.addEventListener('input', function() { formatInteger(impressionsInput); calculate(); });
  conversionsInput.addEventListener('input', function() { formatInteger(conversionsInput); calculate(); });
  calculate();
})();
</script>

## CPC, CPM and CPA: what they measure

**Cost per click, or CPC**, is what you paid for each visitor an ad sent to your site. It is the right metric when the click itself is the goal, or when comparing campaigns on the same channel. It says nothing about what happens after the click. Formula: ad spend divided by clicks.

**Cost per mille, or CPM**, is what you paid per thousand impressions. It is a reach metric, not a performance metric. A low CPM means your ad is being shown cheaply. Whether anyone clicks or converts is a separate question. Formula: ad spend divided by impressions, multiplied by 1,000.

**Cost per acquisition, or CPA**, is what you paid to get one conversion. Whether that is a sale, a signup or a lead depends on how you define it. CPA is the metric that most directly links spend to business outcome, which also makes it the one most exposed to bad data. Formula: ad spend divided by conversions.

In practice you need all three. A strong CPC with a bad CPA means clicks are cheap but the landing experience is failing. A low CPM with no conversion tracking is just cheap reach with no proof of return.

When you have enough data, the calculator also surfaces two derived metrics. **Click-through rate** (clicks divided by impressions) tells you what share of people who saw the ad actually clicked it. **Conversion rate** (conversions divided by clicks) tells you what share of those clicks turned into something useful. A high CPC paired with a strong conversion rate can still be profitable. A cheap CPC with a near-zero conversion rate is not.

## Why your CPA is only as good as your tracking

CPA divides spend by conversions. The spend number is exact. The conversion number often is not.

Cookie consent banners cause some visitors to decline tracking. When that happens, Google Analytics does not record the conversion. The visitor came, converted and left no trace. Your conversion count shrinks, your CPA goes up, and the campaign looks less efficient than it actually was. Our [cookie banner traffic loss calculator](/cookie-banner-traffic-loss-calculator) can help you estimate the size of that gap.

Ad blockers strip tracking scripts. For audiences that skew technical, the gap between actual and recorded conversions can be significant.

GA4 applies sampling and modelling on high-traffic properties. The conversion totals in your reports may be estimates rather than exact counts.

Plausible tracks conversions without cookies, so it does not require consent to record a goal completion. The result is a more complete conversion count to feed into your CPA calculation.

This does not mean replacing your ad platform's conversion signal entirely. Platforms need that signal for optimisation. But Plausible gives you an independent count that is less subject to consent drop-off and sampling distortion, so you can check whether the platform's numbers are in the right range.

## How to track ad conversions in Plausible

To connect ad spend to conversion data in Plausible, you need goals set up in your dashboard and UTM parameters in your ad URLs.

**Set up goals**: Define what counts as a conversion. [Pageview goals](https://plausible.io/docs/pageview-goals) work without any code if the conversion results in a page load, such as a `/thank-you` URL. For button clicks and other interactions that do not change the URL, [custom event goals](https://plausible.io/docs/custom-event-goals) let you track those with a small snippet. For form submissions, Plausible has [automated form submission tracking](https://plausible.io/docs/form-submissions-tracking) that requires no custom code at all.

**Tag your ad URLs**: Add `utm_source`, `utm_medium` and `utm_campaign` parameters to every ad URL. Use the [UTM builder](/utm-builder) to generate clean, consistent URLs, or the [UTM checker](/utm-checker) to validate existing tags before they fragment your campaign data. Plausible captures these parameters automatically and breaks down goal completions by campaign, so you can calculate CPA per campaign directly from your dashboard without relying on the ad platform's attribution model.

**Add revenue tracking**: If your conversions have a monetary value, [ecommerce revenue tracking](https://plausible.io/docs/ecommerce-revenue-tracking) lets you record the value alongside each conversion. This lets you compare revenue against spend per campaign rather than just counting conversions.
