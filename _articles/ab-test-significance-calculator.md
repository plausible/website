---
layout: article
title: "A/B test significance calculator"
description: "Check whether the difference between your A/B test variants is statistically significant and work out how many visitors your test needs."
permalink: /ab-test-significance-calculator
---
<p style="font-size: 0.8125rem; margin-bottom: 1.5rem;"><a href="/tools">← All tools</a></p>

Variant B converts at 3.8% and variant A at 3.0%. That looks like a win. But with a few thousand visitors in a test, a gap like that can show up by pure chance.

Enter the visitors and conversions of each variant to see whether the difference is statistically significant. If it isn't yet, the calculator tells you roughly how many more visitors your test needs.

No account required. Everything runs in your browser and the numbers you enter never leave your device.

1. Ordered list
{:toc}

## A/B test significance calculator

<style>
@media (max-width: 600px) {
  .calc-grid-2, .calc-grid-3 { grid-template-columns: 1fr !important; }
}
</style>

Enter the numbers from your test:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div class="calc-grid-2" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
    <div>
      <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Variant A (original)</div>
      <label for="ab-a-visitors" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Visitors</label>
      <input type="text" inputmode="numeric" id="ab-a-visitors" value="2,500" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none; margin-bottom: 0.75rem;" />
      <label for="ab-a-conversions" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Visitors who converted</label>
      <input type="text" inputmode="numeric" id="ab-a-conversions" value="75" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <div style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Variant B</div>
      <label for="ab-b-visitors" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Visitors</label>
      <input type="text" inputmode="numeric" id="ab-b-visitors" value="2,500" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none; margin-bottom: 0.75rem;" />
      <label for="ab-b-conversions" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Visitors who converted</label>
      <input type="text" inputmode="numeric" id="ab-b-conversions" value="95" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div style="margin-bottom: 1rem;">
    <label for="ab-confidence" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Confidence level</label>
    <select id="ab-confidence" style="width: 100%; max-width: 12rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; background: #fff;">
      <option value="0.90">90%</option>
      <option value="0.95" selected>95%</option>
      <option value="0.99">99%</option>
    </select>
  </div>
  <div id="ab-result" style="display: none;">
    <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">A converts at</div>
        <div id="ab-a-rate" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">B converts at</div>
        <div id="ab-b-rate" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">B vs A</div>
        <div id="ab-change" style="font-size: 1.75rem; font-weight: 800; line-height: 1;"></div>
      </div>
    </div>
    <div id="ab-verdict-box" style="padding: 1.25rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center;">
      <div id="ab-verdict" style="font-size: 1.25rem; font-weight: 800; color: #111827; line-height: 1.3; margin-bottom: 0.5rem;"></div>
      <div id="ab-detail" style="color: #4b5563; line-height: 1.5;"></div>
    </div>
  </div>
  <div id="ab-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter the visitors and conversions of both variants to check your result.</div>
</div>

## How many visitors does your test need?

Planning a test? Enter your current conversion rate and the smallest improvement you care about to see how many visitors you need before you can call a winner:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
    <div>
      <label for="ss-rate" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Current conversion rate (%)</label>
      <input type="text" inputmode="decimal" id="ss-rate" value="3" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="ss-effect" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Improvement to detect (%)</label>
      <input type="text" inputmode="decimal" id="ss-effect" value="20" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="ss-daily" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Daily visitors in the test</label>
      <input type="text" inputmode="numeric" id="ss-daily" value="1,000" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="ss-confidence" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Confidence level</label>
      <select id="ss-confidence" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; background: #fff;">
        <option value="0.90">90%</option>
        <option value="0.95" selected>95%</option>
        <option value="0.99">99%</option>
      </select>
    </div>
  </div>
  <div style="font-size: 0.8125rem; color: #6b7280; margin-bottom: 1rem;">An improvement of 20% means going from a 3% conversion rate to 3.6%.</div>
  <div id="ss-result" style="display: none;">
    <div class="calc-grid-3" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Per variant</div>
        <div id="ss-per" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">visitors</div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">In total</div>
        <div id="ss-total" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">visitors</div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Test length</div>
        <div id="ss-days" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div id="ss-days-label" style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">days</div>
      </div>
    </div>
  </div>
  <div id="ss-placeholder" style="padding: 1.25rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center; color: #9ca3af;">Enter your conversion rate and the improvement you want to detect.</div>
</div>

<script>
(function() {
  var Z_POWER = 0.8416; // 80% statistical power
  var Z_TWO_SIDED = { '0.90': 1.6449, '0.95': 1.96, '0.99': 2.5758 };

  // Chance of a standard normal value above |z| (Zelen and Severo approximation)
  function upperTail(z) {
    var x = Math.abs(z);
    var t = 1 / (1 + 0.2316419 * x);
    var d = 0.3989422804014327 * Math.exp(-x * x / 2);
    return d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  }

  // Visitors needed per variant to detect the difference between rates p1 and p2
  function sampleSize(p1, p2, zAlpha) {
    var pBar = (p1 + p2) / 2;
    var a = zAlpha * Math.sqrt(2 * pBar * (1 - pBar));
    var b = Z_POWER * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
    return Math.ceil(Math.pow(a + b, 2) / Math.pow(p2 - p1, 2));
  }

  function parseInteger(input) {
    return parseInt(input.value.replace(/[^0-9]/g, ''), 10);
  }

  function formatInteger(input) {
    var num = parseInteger(input);
    input.value = isNaN(num) ? '' : num.toLocaleString('en-US');
  }

  function parseDecimal(input) {
    return parseFloat(input.value.replace(',', '.'));
  }

  function normalizeDecimal(input) {
    var val = input.value.replace(',', '.').replace(/[^0-9.]/g, '');
    var parts = val.split('.');
    if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('');
    input.value = val;
  }

  function percent(x) {
    return (x * 100).toFixed(2) + '%';
  }

  function show(resultEl, placeholderEl, message) {
    if (message) {
      resultEl.style.display = 'none';
      placeholderEl.style.display = 'block';
      placeholderEl.textContent = message;
    } else {
      resultEl.style.display = 'block';
      placeholderEl.style.display = 'none';
    }
  }

  // Significance calculator
  var aVisitors = document.getElementById('ab-a-visitors');
  var aConversions = document.getElementById('ab-a-conversions');
  var bVisitors = document.getElementById('ab-b-visitors');
  var bConversions = document.getElementById('ab-b-conversions');
  var abConfidence = document.getElementById('ab-confidence');
  var abResult = document.getElementById('ab-result');
  var abPlaceholder = document.getElementById('ab-placeholder');
  var abEmpty = abPlaceholder.textContent;

  function calculateSignificance() {
    var n1 = parseInteger(aVisitors), c1 = parseInteger(aConversions);
    var n2 = parseInteger(bVisitors), c2 = parseInteger(bConversions);
    if (!n1 || !n2 || isNaN(c1) || isNaN(c2)) return show(abResult, abPlaceholder, abEmpty);
    if (c1 > n1 || c2 > n2) return show(abResult, abPlaceholder, 'Visitors who converted can\'t be higher than visitors. Enter the visitors who converted, not total conversions.');
    if (c1 + c2 === 0) return show(abResult, abPlaceholder, 'Neither variant has any conversions yet. Let the test run longer.');

    var level = abConfidence.value;
    var p1 = c1 / n1, p2 = c2 / n2;
    var pooled = (c1 + c2) / (n1 + n2);
    var se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
    var z = se > 0 ? (p2 - p1) / se : 0;
    var pValue = se > 0 ? 2 * upperTail(z) : 1;
    var significant = pValue < 1 - parseFloat(level);
    var levelLabel = Math.round(parseFloat(level) * 100) + '%';

    document.getElementById('ab-a-rate').textContent = percent(p1);
    document.getElementById('ab-b-rate').textContent = percent(p2);

    var changeEl = document.getElementById('ab-change');
    if (p1 > 0) {
      var change = (p2 - p1) / p1 * 100;
      changeEl.textContent = (change > 0 ? '+' : '') + change.toFixed(1) + '%';
    } else {
      changeEl.textContent = 'n/a';
    }
    changeEl.style.color = !significant ? '#111827' : (p2 > p1 ? '#16a34a' : '#dc2626');

    var pText = pValue < 0.001 ? 'below 0.001' : pValue.toFixed(3);
    var verdict = document.getElementById('ab-verdict');
    var detail = document.getElementById('ab-detail');
    var box = document.getElementById('ab-verdict-box');

    if (significant) {
      verdict.textContent = p2 > p1 ? 'B converts better than A' : 'B converts worse than A';
      box.style.borderColor = p2 > p1 ? '#16a34a' : '#dc2626';
      detail.textContent = 'The difference is statistically significant at ' + levelLabel + ' confidence (p-value ' + pText + '). If the variants performed the same, a gap this large would be very unlikely to show up by chance.';
    } else {
      verdict.textContent = 'Not significant yet';
      box.style.borderColor = '#4f46e5';
      var text = 'The difference could still be random noise (p-value ' + pText + '). ';
      if (p1 !== p2 && p1 > 0 && p1 < 1 && p2 < 1) {
        var needed = sampleSize(p1, p2, Z_TWO_SIDED[level]);
        var have = Math.min(n1, n2);
        text += 'To confirm a difference this size at ' + levelLabel + ' confidence, you need about ' + needed.toLocaleString('en-US') + ' visitors per variant. You have ' + have.toLocaleString('en-US') + ' so far.';
      } else {
        text += 'Let the test run longer.';
      }
      detail.textContent = text;
    }
    show(abResult, abPlaceholder);
  }

  [aVisitors, aConversions, bVisitors, bConversions].forEach(function(input) {
    input.addEventListener('input', function() { formatInteger(input); calculateSignificance(); });
  });
  abConfidence.addEventListener('change', calculateSignificance);
  calculateSignificance();

  // Sample size calculator
  var ssRate = document.getElementById('ss-rate');
  var ssEffect = document.getElementById('ss-effect');
  var ssDaily = document.getElementById('ss-daily');
  var ssConfidence = document.getElementById('ss-confidence');
  var ssResult = document.getElementById('ss-result');
  var ssPlaceholder = document.getElementById('ss-placeholder');
  var ssEmpty = ssPlaceholder.textContent;

  function calculateSampleSize() {
    var rate = parseDecimal(ssRate) / 100;
    var effect = parseDecimal(ssEffect) / 100;
    var daily = parseInteger(ssDaily);
    if (!rate || !effect || rate <= 0 || rate >= 1 || effect <= 0) return show(ssResult, ssPlaceholder, ssEmpty);
    var target = rate * (1 + effect);
    if (target >= 1) return show(ssResult, ssPlaceholder, 'That improvement would take your conversion rate above 100%. Try a smaller one.');

    var perVariant = sampleSize(rate, target, Z_TWO_SIDED[ssConfidence.value]);
    var total = perVariant * 2;
    document.getElementById('ss-per').textContent = perVariant.toLocaleString('en-US');
    document.getElementById('ss-total').textContent = total.toLocaleString('en-US');

    var daysEl = document.getElementById('ss-days');
    var daysLabel = document.getElementById('ss-days-label');
    if (daily) {
      var days = Math.ceil(total / daily);
      daysEl.textContent = days.toLocaleString('en-US');
      daysLabel.textContent = days === 1 ? 'day' : 'days';
    } else {
      daysEl.textContent = '?';
      daysLabel.textContent = 'add daily visitors';
    }
    show(ssResult, ssPlaceholder);
  }

  ssRate.addEventListener('input', function() { normalizeDecimal(ssRate); calculateSampleSize(); });
  ssEffect.addEventListener('input', function() { normalizeDecimal(ssEffect); calculateSampleSize(); });
  ssDaily.addEventListener('input', function() { formatInteger(ssDaily); calculateSampleSize(); });
  ssConfidence.addEventListener('change', calculateSampleSize);
  calculateSampleSize();
})();
</script>

Small improvements need a lot of traffic. Detecting a 20% lift on a 3% conversion rate takes around 14,000 visitors per variant. Detecting a 5% lift takes over 200,000. If your site doesn't get that kind of traffic, test bigger changes. A new headline or a different offer moves the numbers more than a new button color.

## How to read the result

Statistically significant at 95% confidence means that if both variants performed the same, a gap this large would show up by chance less than 5% of the time. The p-value is that chance. The lower it is, the more you can trust the result.

Significant doesn't mean big. With enough visitors, a tiny lift becomes significant and still isn't worth shipping. Look at the size of the change too.

Decide how many visitors you need before you start and check the result once you get there. If you check every day and stop the moment the result turns significant, you will ship winners that aren't real. Results swing a lot in the first days of a test.

Run your test for at least a full week, ideally two, so both weekday and weekend visitors are in it.

Testing more than two variants? Compare each one against your original separately and use 99% confidence. The more comparisons you make, the more likely one of them looks like a winner by luck.

## Measure your test without cookies

You don't need a heavy testing suite to measure an A/B test. Your testing tool or a few lines of your own code show each visitor a variant. Plausible counts how each variant converts without cookies and without collecting personal data, so measuring the test adds nothing to your cookie banner.

See [how to measure A/B tests with Plausible](https://plausible.io/docs/ab-testing) for the full setup.

## Where to find these numbers in Plausible

Use the number of visitors who converted, not the total number of conversions. A visitor who signs up twice counts once. Counting them twice makes a result look more certain than it is.

**Variants on different URLs**: Filter your dashboard by your goal, open the **Entry Pages** tab in the **Top Pages** report and open its details view. It shows each variant's total visitors and the visitors who converted (**Conversions**).

**Variants on the same URL**: If you send the variant as a [custom property](https://plausible.io/docs/custom-props/introduction) (Business plan), open the **Properties** tab in the **Goals** section and choose `variant`. Without a goal filter, the **Visitors** column shows how many visitors saw each variant. Filter by your goal and the same column shows how many of them converted.

## How the calculator works

The significance calculator runs a two-sided two-proportion z-test on the numbers you enter. The sample size calculator assumes your traffic is split evenly between two variants and uses 80% statistical power. That means if the improvement you're looking for really exists, a test of that size has an 80% chance of detecting it.

Once you have a real winner, use the [conversion rate calculator](/conversion-rate-calculator) to see what the improvement is worth in extra conversions per month.
