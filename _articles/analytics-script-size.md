---
layout: article
title: "How much JavaScript does Google Analytics add to your site?"
description: "Google Analytics adds 135KB of JavaScript for every new visitor. Add GTM and a cookie consent banner and you're past 285KB. Plausible adds 2.5KB and needs none of it."
permalink: /google-analytics-script-size
---
Google Analytics (GA4) is the most widely used analytics tool on the web and one of the heaviest scripts you can add to a site. The size of that script compounds into gigabytes of data transferred every month.

[Plausible Analytics](https://plausible.io/) was built differently: to give you what you need without the weight of a platform designed for advertising and audience building.

## Script size comparison

These are gzipped sizes, which is what browsers actually receive over the wire.

<div style="margin: 1.5rem 0; font-family: inherit;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
    <div style="padding: 1.5rem; background: #f9fafb; border: 2px solid #4f46e5; border-radius: 0.5rem; text-align: center;">
      <div style="font-size: 0.8125rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">Plausible</div>
      <div style="font-size: 2.75rem; font-weight: 800; color: #111827; line-height: 1;">{{ site.data.site.plausible_script_kb }}<span style="font-size: 1.375rem; font-weight: 600;">KB</span></div>
      <div style="font-size: 0.8125rem; color: #6b7280; margin-top: 0.5rem;">gzipped</div>
    </div>
    <div style="padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center;">
      <div style="font-size: 0.8125rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">Google Analytics</div>
      <div style="font-size: 2.75rem; font-weight: 800; color: #111827; line-height: 1;">{{ site.data.site.ga4_script_kb }}<span style="font-size: 1.375rem; font-weight: 600;">KB</span></div>
      <div style="font-size: 0.8125rem; color: #6b7280; margin-top: 0.5rem;">gzipped</div>
    </div>
  </div>
  <p style="text-align: center; color: #6b7280; font-size: 0.875rem; margin: 0.75rem 0 0;">Google Analytics is {{ site.data.site.script_ratio }}x larger than Plausible</p>
</div>

That's the script alone. Most GA4 users also run Google Tag Manager and a cookie consent banner. Configure your setup in the calculator below to see the full cost.

## Monthly impact calculator

Enter your monthly visitors and configure your Google Analytics setup to see the real data cost.

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div>
    <label for="calc-pageviews" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Monthly visitors</label>
    <input type="text" id="calc-pageviews" value="100,000" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
  </div>
  <div style="margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid #e5e7eb;">
    <div style="font-weight: 600; color: #374151; margin-bottom: 0.75rem;">What else do you use with GA4?</div>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <label id="card-gtm" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.625rem 0.75rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer;">
        <input type="checkbox" id="opt-gtm" style="margin: 0; accent-color: #4f46e5; width: 15px; height: 15px; flex-shrink: 0;" />
        <span style="flex: 1; font-weight: 500; color: #374151;">Google Tag Manager</span>
        <span style="font-size: 0.75rem; color: #9ca3af;">+45KB typical</span>
      </label>
      <div style="font-size: 0.75rem; color: #6b7280; margin: 0.25rem 0 0.125rem;">Cookie consent banner</div>
      <label id="card-cookiebot" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.625rem 0.75rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer;">
        <input type="checkbox" id="opt-cookiebot" style="margin: 0; accent-color: #4f46e5; width: 15px; height: 15px; flex-shrink: 0;" />
        <span style="flex: 1; font-weight: 500; color: #374151;">Cookiebot</span>
        <span style="font-size: 0.75rem; color: #9ca3af;">+35KB</span>
      </label>
      <label id="card-onetrust" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.625rem 0.75rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; cursor: pointer;">
        <input type="checkbox" id="opt-onetrust" style="margin: 0; accent-color: #4f46e5; width: 15px; height: 15px; flex-shrink: 0;" />
        <span style="flex: 1; font-weight: 500; color: #374151;">OneTrust</span>
        <span style="font-size: 0.75rem; color: #9ca3af;">+121KB</span>
      </label>
    </div>
  </div>
  <div id="calc-result" style="margin-top: 1.25rem;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 2px solid #4f46e5; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Plausible</div>
        <div id="calc-plausible" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">per month</div>
        <div style="font-size: 0.75rem; color: #4f46e5; font-weight: 500; margin-top: 0.375rem;">No cookie banner needed</div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div id="calc-ga4-label" style="font-size: 0.75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">Google Analytics</div>
        <div id="calc-ga4" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">per month</div>
        <div id="calc-ga4-breakdown" style="font-size: 0.7rem; color: #9ca3af; margin-top: 0.375rem; line-height: 1.5;"></div>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Data saved per month</div>
        <div id="calc-savings" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
      </div>
      <div style="padding: 1rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; text-align: center;">
        <div style="font-size: 0.75rem; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">CO2 saved per year</div>
        <div id="calc-co2" style="font-size: 1.75rem; font-weight: 800; color: #111827; line-height: 1;"></div>
        <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">estimated</div>
      </div>
    </div>
  </div>
</div>

<script>
(function() {
  var input = document.getElementById('calc-pageviews');
  var plausibleKB = {{ site.data.site.plausible_script_kb }};
  var ga4BaseKB = {{ site.data.site.ga4_script_kb }};
  var co2KgPerKb = ({{ site.data.site.co2_kwh_per_gb }} * {{ site.data.site.co2_kg_per_kwh }}) / (1024 * 1024);

  function formatSize(kb) {
    var mb = kb / 1024;
    var gb = mb / 1024;
    var tb = gb / 1024;
    if (tb >= 1) return tb.toFixed(1) + ' TB';
    if (gb >= 1) return gb.toFixed(1) + ' GB';
    if (mb >= 1) return Math.round(mb) + ' MB';
    return Math.round(kb) + ' KB';
  }

  function formatCO2(kg) {
    if (kg >= 1000) return (kg / 1000).toFixed(1) + ' tonnes';
    if (kg >= 10) return Math.round(kg) + ' kg';
    return kg.toFixed(1) + ' kg';
  }

  function setCardStyle(id, active) {
    var card = document.getElementById(id);
    card.style.borderColor = active ? '#4f46e5' : '#e5e7eb';
    card.style.background = active ? '#eef2ff' : '#fff';
  }

  function calculate() {
    var visitors = parseInt(input.value.replace(/[^0-9]/g, ''), 10);
    if (!visitors || visitors <= 0) return;

    var gtmChecked = document.getElementById('opt-gtm').checked;
    var cbChecked = document.getElementById('opt-cookiebot').checked;
    var otChecked = document.getElementById('opt-onetrust').checked;
    var gtmKB = gtmChecked ? 45 : 0;
    var consentKB = cbChecked ? 35 : otChecked ? 121 : 0;
    var totalGA4KB = ga4BaseKB + gtmKB + consentKB;

    var labelParts = ['Google Analytics'];
    if (gtmChecked) labelParts.push('GTM');
    if (cbChecked) labelParts.push('Cookiebot');
    if (otChecked) labelParts.push('OneTrust');
    document.getElementById('calc-ga4-label').textContent = labelParts.join(' + ');

    var breakdownParts = ['GA4 ' + ga4BaseKB + 'KB'];
    if (gtmChecked) breakdownParts.push('GTM ' + gtmKB + 'KB');
    if (consentKB > 0) breakdownParts.push((cbChecked ? 'Cookiebot' : 'OneTrust') + ' ' + consentKB + 'KB');
    document.getElementById('calc-ga4-breakdown').textContent = breakdownParts.length > 1 ? breakdownParts.join(' + ') + ' = ' + totalGA4KB + 'KB' : '';

    document.getElementById('calc-plausible').textContent = formatSize(visitors * plausibleKB);
    document.getElementById('calc-ga4').textContent = formatSize(visitors * totalGA4KB);
    document.getElementById('calc-savings').textContent = formatSize(visitors * (totalGA4KB - plausibleKB));
    document.getElementById('calc-co2').textContent = formatCO2(visitors * (totalGA4KB - plausibleKB) * 12 * co2KgPerKb);
  }

  input.addEventListener('input', function() {
    var digits = input.value.replace(/[^0-9]/g, '');
    var num = parseInt(digits, 10);
    input.value = num ? num.toLocaleString('en-US') : '';
    calculate();
  });

  document.getElementById('opt-gtm').addEventListener('change', function() {
    setCardStyle('card-gtm', this.checked);
    calculate();
  });

  document.getElementById('opt-cookiebot').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('opt-onetrust').checked = false;
      setCardStyle('card-onetrust', false);
    }
    setCardStyle('card-cookiebot', this.checked);
    calculate();
  });

  document.getElementById('opt-onetrust').addEventListener('change', function() {
    if (this.checked) {
      document.getElementById('opt-cookiebot').checked = false;
      setCardStyle('card-cookiebot', false);
    }
    setCardStyle('card-onetrust', this.checked);
    calculate();
  });

  calculate();
})();
</script>

<p style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.75rem;">Script sizes measured from CDN. GTM size varies by container configuration. Consent platform sizes vary by version and setup. CO2 estimate uses {{ site.data.site.co2_kwh_per_gb }} kWh per GB (network energy, <a href="https://sustainablewebdesign.org/" style="color: #9ca3af;">Sustainable Web Design model</a>) and {{ site.data.site.co2_kg_per_kwh }} kg CO2 per kWh (<a href="https://www.iea.org/reports/electricity-2025/emissions" style="color: #9ca3af;">IEA global average</a>).</p>

## What those gigabytes actually mean

Data transfer uses electricity at every hop: your server, the network between them, your visitor's device. The exact energy cost varies by region and infrastructure, but less data always means less electricity used.

Across your traffic, switching from a heavy analytics stack to a lightweight one reduces the total data transferred by gigabytes each month. Add GTM and a consent banner and the gap compounds further.

If you want to estimate the full carbon footprint of your site, the [Website Carbon Calculator](https://www.websitecarbon.com/) gives you a per-visitor CO2 estimate.

## What most GA4 users actually load

The 135KB figure is just the GA4 script itself. Most sites using GA4 have more on top of it.

**Google Tag Manager** is how most teams deploy GA4. GTM loads as a separate script before firing GA4's `gtag.js` as a second request. A minimal GTM container adds around 30-50KB gzipped. Larger containers with many configured tags can reach 150KB+ on their own.

**Cookie consent platforms** are required when you use GA4, because GA4 places cookies and collects personal data. Cookiebot adds around 35KB gzipped. OneTrust is heavier at around 121KB gzipped.

**Multiple network requests** compound the problem. GA4 does not load once and stop. It makes separate requests to Google's collection servers on each page load, in addition to the initial script download.

A representative breakdown for a site running GTM + GA4 + OneTrust:

| Script | Gzipped size |
|--------|-------------|
| Google Analytics (gtag.js) | 135KB |
| Google Tag Manager (gtm.js) | 30-50KB+ |
| OneTrust banner SDK | 121KB |
| **Total** | **285-305KB+** |

Compared to Plausible: one script, 2.5KB. No cookie banner needed.

## Why the difference

Google Analytics is built to support advertising attribution, remarketing, cross-site audience building and hundreds of built-in reports. All of that gets downloaded for every visitor whether you use those features or not.

Plausible is built for a narrower purpose: how many people visited, where they came from and what they did. Less scope means less code.

Because Plausible does not use cookies or collect personal data, you do not need a cookie consent banner at all. That removes the entire consent layer from your page, not just the analytics script.

Script weight also affects your [Core Web Vitals](https://plausible.io/blog/page-experience-web-vitals) scores. These are Google's measures of page speed and responsiveness, and they influence search rankings.

Third-party scripts compete for main thread time even when loaded asynchronously, which directly impacts Largest Contentful Paint and Interaction to Next Paint. Removing a heavy analytics stack is one of the most reliable ways to improve those scores.

For the full picture on analytics and website performance, see [lightweight web analytics](/lightweight-web-analytics).
