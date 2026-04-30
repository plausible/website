---
layout: article
title: "Conversion rate calculator"
description: "Calculate your website conversion rate, the traffic you need to hit your goals, and the impact of small improvements."
permalink: /conversion-rate-calculator
---
Conversion rate is one of the most useful numbers you can track on a website. It tells you not just how many people visited, but how many did something that mattered.

Two visitors who buy are worth more than a hundred who bounce. Understanding your conversion rate helps you decide where to focus: on getting more traffic, or on making better use of the traffic you already have.

1. Ordered list
{:toc}

## Conversion rate calculator

<style>
@media (max-width: 600px) {
  .calc-grid-3 { grid-template-columns: 1fr !important; }
}
</style>

Adjust the numbers to match your site:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
    <div>
      <label for="cr-visitors" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Monthly visitors</label>
      <input type="text" id="cr-visitors" value="10,000" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="cr-conversions" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Monthly conversions</label>
      <input type="text" id="cr-conversions" value="150" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div id="cr-result" style="padding: 1.25rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center; display: none;">
    <div style="font-size: 0.8125rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Your conversion rate</div>
    <div id="cr-rate" style="font-size: 3rem; font-weight: 800; color: #111827; line-height: 1;"></div>
  </div>
  <div id="cr-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter visitors and conversions above to calculate your rate.</div>
</div>

<script>
(function() {
  var visitorsInput = document.getElementById('cr-visitors');
  var conversionsInput = document.getElementById('cr-conversions');
  var result = document.getElementById('cr-result');
  var placeholder = document.getElementById('cr-placeholder');
  var rateEl = document.getElementById('cr-rate');

  function formatInteger(input) {
    var digits = input.value.replace(/[^0-9]/g, '');
    var num = parseInt(digits, 10);
    input.value = num ? num.toLocaleString('en-US') : '';
  }

  function calculate() {
    var visitors = parseInt(visitorsInput.value.replace(/[^0-9]/g, ''), 10);
    var conversions = parseInt(conversionsInput.value.replace(/[^0-9]/g, ''), 10);
    if (!visitors || !conversions || visitors <= 0 || conversions < 0) {
      result.style.display = 'none';
      placeholder.style.display = 'block';
      return;
    }
    var rate = (conversions / visitors) * 100;
    rateEl.textContent = rate.toFixed(2) + '%';
    result.style.display = 'block';
    placeholder.style.display = 'none';
  }

  visitorsInput.addEventListener('input', function() { formatInteger(visitorsInput); calculate(); });
  conversionsInput.addEventListener('input', function() { formatInteger(conversionsInput); calculate(); });
  calculate();
})();
</script>

## Traffic goal calculator

Know your conversion rate? Enter it below along with your target to find out how much traffic you need:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
    <div>
      <label for="tg-target" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Target conversions per month</label>
      <input type="text" id="tg-target" value="500" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="tg-rate" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Conversion rate (%)</label>
      <input type="text" id="tg-rate" value="2.5" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div id="tg-result" style="padding: 1.25rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center; display: none;">
    <div style="font-size: 0.8125rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Monthly visitors needed</div>
    <div id="tg-visitors" style="font-size: 3rem; font-weight: 800; color: #111827; line-height: 1;"></div>
  </div>
  <div id="tg-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter your target and conversion rate above.</div>
</div>

<script>
(function() {
  var targetInput = document.getElementById('tg-target');
  var rateInput = document.getElementById('tg-rate');
  var result = document.getElementById('tg-result');
  var placeholder = document.getElementById('tg-placeholder');
  var visitorsEl = document.getElementById('tg-visitors');

  function parseDecimal(s) {
    return parseFloat(s.replace(',', '.'));
  }

  function normalizeDecimal(input) {
    var val = input.value.replace(',', '.').replace(/[^0-9.]/g, '');
    var parts = val.split('.');
    if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
    input.value = val;
  }

  function calculate() {
    var target = parseInt(targetInput.value.replace(/[^0-9]/g, ''), 10);
    var rate = parseDecimal(rateInput.value);
    if (!target || !rate || target <= 0 || rate <= 0 || rate > 100) {
      result.style.display = 'none';
      placeholder.style.display = 'block';
      return;
    }
    var needed = Math.ceil(target / (rate / 100));
    visitorsEl.textContent = needed.toLocaleString('en-US');
    result.style.display = 'block';
    placeholder.style.display = 'none';
  }

  targetInput.addEventListener('input', function() { calculate(); });
  rateInput.addEventListener('input', function() { normalizeDecimal(rateInput); calculate(); });
  calculate();
})();
</script>

## Improvement impact calculator

See how much a small conversion rate improvement is worth in terms of additional conversions:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
    <div>
      <label for="imp-visitors" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Monthly visitors</label>
      <input type="text" id="imp-visitors" value="10,000" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="imp-current" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Current rate (%)</label>
      <input type="text" id="imp-current" value="2" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="imp-new" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Improved rate (%)</label>
      <input type="text" id="imp-new" value="2.5" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div id="imp-result" style="display: none;">
    <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Before</div>
        <div id="imp-before" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">conversions/mo</div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">After</div>
        <div id="imp-after" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">conversions/mo</div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Extra per month</div>
        <div id="imp-extra" style="font-size: 1.75rem; font-weight: 800; color: #16a34a; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">conversions</div>
      </div>
    </div>
  </div>
  <div id="imp-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter visitors and both conversion rates to see the difference.</div>
</div>

<script>
(function() {
  var visitorsInput = document.getElementById('imp-visitors');
  var currentInput = document.getElementById('imp-current');
  var newInput = document.getElementById('imp-new');
  var result = document.getElementById('imp-result');
  var placeholder = document.getElementById('imp-placeholder');

  function parseDecimal(s) {
    return parseFloat(s.replace(',', '.'));
  }

  function normalizeDecimal(input) {
    var val = input.value.replace(',', '.').replace(/[^0-9.]/g, '');
    var parts = val.split('.');
    if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
    input.value = val;
  }

  function calculate() {
    var visitors = parseInt(visitorsInput.value.replace(/[^0-9]/g, ''), 10);
    var current = parseDecimal(currentInput.value);
    var improved = parseDecimal(newInput.value);
    if (!visitors || !current || !improved || visitors <= 0 || current <= 0 || improved <= current) {
      result.style.display = 'none';
      placeholder.style.display = 'block';
      return;
    }
    var before = Math.round(visitors * (current / 100));
    var after = Math.round(visitors * (improved / 100));
    var extra = after - before;
    document.getElementById('imp-before').textContent = before.toLocaleString('en-US');
    document.getElementById('imp-after').textContent = after.toLocaleString('en-US');
    document.getElementById('imp-extra').textContent = '+' + extra.toLocaleString('en-US');
    result.style.display = 'block';
    placeholder.style.display = 'none';
  }

  visitorsInput.addEventListener('input', function() {
    var digits = visitorsInput.value.replace(/[^0-9]/g, '');
    var num = parseInt(digits, 10);
    visitorsInput.value = num ? num.toLocaleString('en-US') : '';
    calculate();
  });
  currentInput.addEventListener('input', function() { normalizeDecimal(currentInput); calculate(); });
  newInput.addEventListener('input', function() { normalizeDecimal(newInput); calculate(); });
  calculate();
})();
</script>

## What is a good conversion rate?

Conversion rate varies widely depending on what you define as a conversion and what type of site you run.

Some general benchmarks:

* **E-commerce purchases**: 1% to 3% is typical, above 4% is strong
* **Lead generation forms**: 3% to 8% is common, above 10% is good
* **Free trial or account signups**: 2% to 5% for paid traffic, higher from organic or direct
* **Newsletter subscriptions**: 1% to 3% for cold traffic, higher from engaged audiences

These are rough guides. A "good" conversion rate depends on your traffic sources, price point and what you are asking visitors to do. A free email signup converts at a much higher rate than a high-ticket purchase.

The more useful question is not "is my rate good?" but "is my rate improving?"

## Why conversion rate matters more than traffic

Getting more traffic is not always the answer. If your site converts at 1%, doubling your traffic doubles your conversions but costs money and effort. Improving your conversion rate from 1% to 2% achieves the same result without buying more traffic.

In practice the two work together: you need enough traffic to test ideas meaningfully, and you need a reasonable conversion rate to justify growing traffic. But most sites have more room to improve conversion than to double their visitor count.

## How to track conversions in Plausible

Plausible lets you track goals without writing any code. You can define what counts as a conversion and monitor it alongside your traffic.

**Pageview goals**: If your conversion results in a page load, such as a `/thank-you` or `/order-confirmed` page, you can [track it as a pageview goal](https://plausible.io/docs/pageview-goals) with no code changes at all.

**Custom events**: For button clicks or other interactions that do not change the URL, you can use [custom event goals](https://plausible.io/docs/custom-event-goals). A small snippet attached to the element is all you need.

**Form tracking**: Plausible also includes [codeless form submission tracking](https://plausible.io/docs/form-submissions-tracking) that picks up form completions without any custom code.

Once a goal is set up, it appears in your dashboard alongside your traffic data, so you can see your conversion rate directly and filter by source, page or campaign to understand where conversions actually come from.

You can also add revenue tracking to goals to see the monetary value of conversions and compare it across channels. See [ecommerce revenue tracking](https://plausible.io/docs/ecommerce-revenue-tracking) for details.
