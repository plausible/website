---
layout: article
title: "UTM builder"
description: Generate UTM tagged links for your campaigns. Fill in the details below and copy the tagged URL to use in your emails, social posts and ads.
permalink: /utm-builder
---
Campaign traffic is invisible without tagging. Clicks from emails, newsletters and social media often arrive with no referral data, showing up as "direct" in your analytics. UTM parameters fix that: small tags you append to links that tell your analytics tool exactly where a click came from.

[Plausible Analytics](https://plausible.io/) reads UTM tags out-of-the-box, with no cookies, no consent prompts and no Google account required. Build your tagged links below.

## UTM tag builder

Enter your URL and campaign details to generate a tagged link:

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div style="display: grid; gap: 0.875rem;">
    <div>
      <label for="utm-url" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Website URL <span style="color: #ef4444;">*</span></label>
      <input type="url" id="utm-url" placeholder="https://yourdomain.com" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-url-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
    <div>
      <label for="utm-source" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Source (utm_source) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="utm-source" placeholder="e.g. newsletter, linkedin, facebook" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-source-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
    <div>
      <label for="utm-medium" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Medium (utm_medium)</label>
      <input type="text" id="utm-medium" placeholder="e.g. email, social, cpc" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-medium-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
    <div>
      <label for="utm-campaign" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Name (utm_campaign)</label>
      <input type="text" id="utm-campaign" placeholder="e.g. spring-sale, product-launch" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-campaign-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
    <div>
      <label for="utm-term" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Term (utm_term)</label>
      <input type="text" id="utm-term" placeholder="e.g. accounting-software, project-management" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-term-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
    <div>
      <label for="utm-content" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Content (utm_content)</label>
      <input type="text" id="utm-content" placeholder="e.g. banner-top, link-footer" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
      <div id="utm-content-warn" style="display: none; margin-top: 0.3rem; font-size: 0.75rem; color: #b45309;"></div>
    </div>
  </div>
  <div id="utm-result" style="margin-top: 1.25rem;">
    <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">Your tagged URL</label>
    <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
      <div id="utm-output" style="flex: 1; padding: 0.75rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; word-break: break-all; color: #9ca3af; line-height: 1.5;">Fill in the URL and source above to generate your tagged link.</div>
      <button id="utm-copy" style="flex-shrink: 0; width: 5.5rem; padding: 0.5rem 1rem; background: #4f46e5; color: #fff; font-size: 0.875rem; font-weight: 500; border: none; border-radius: 0.375rem; cursor: pointer; font-family: inherit; visibility: hidden;">Copy</button>
    </div>
  </div>
  <div id="utm-campaign-note" style="display: none; margin-top: 1rem; font-size: 0.8125rem; color: #6b7280;">Find your clicks on UTM tagged links in the Campaigns tab in your Plausible dashboard.</div>
</div>

<p style="margin-top: -0.5rem; font-size: 0.875rem;">Already have a UTM link? <a href="/utm-checker">Check and clean it up →</a></p>

<script>
(function() {
  var utmFields = ['utm-source', 'utm-medium', 'utm-campaign', 'utm-term', 'utm-content'];
  var allFields = ['utm-url'].concat(utmFields);

  function getWarnings(val, fieldId) {
    var warnings = [];
    if (!val) return warnings;
    if (val !== val.toLowerCase()) {
      if (fieldId === 'utm-source') {
        warnings.push('Mixed case: Google Analytics counts "' + escHtml(val) + '" and "' + escHtml(val.toLowerCase()) + '" as separate sources everywhere. Plausible auto-consolidates utm_source variants in the Sources tab and preserves the raw value in the Campaigns tab.');
      } else {
        warnings.push('Mixed case: "' + escHtml(val) + '" and "' + escHtml(val.toLowerCase()) + '" will be treated as separate values in your analytics.');
      }
    }
    if (/\s/.test(val)) {
      warnings.push('Contains spaces. Use hyphens or plus signs instead: "' + escHtml(val.replace(/\s+/g, '-')) + '"');
    }
    return warnings;
  }

  function updateWarnings() {
    utmFields.forEach(function(id) {
      var w = document.getElementById(id + '-warn');
      if (!w) return;
      var val = document.getElementById(id).value.trim();
      var warnings = getWarnings(val, id);
      if (warnings.length) {
        w.style.display = 'block';
        w.innerHTML = warnings.map(function(msg) { return '⚠ ' + msg; }).join('<br>');
      } else {
        w.style.display = 'none';
        w.innerHTML = '';
      }
    });
  }

  function buildUrl() {
    var url = document.getElementById('utm-url').value.trim();
    var source = document.getElementById('utm-source').value.trim();
    var output = document.getElementById('utm-output');
    var copyBtn = document.getElementById('utm-copy');
    var note = document.getElementById('utm-campaign-note');

    if (!url || !source) {
      output.textContent = 'Fill in the URL and source above to generate your tagged link.';
      output.style.color = '#9ca3af';
      copyBtn.style.visibility = 'hidden';
      note.style.display = 'none';
      return;
    }

    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

    var medium = document.getElementById('utm-medium').value.trim();
    var campaign = document.getElementById('utm-campaign').value.trim();
    var term = document.getElementById('utm-term').value.trim();
    var content = document.getElementById('utm-content').value.trim();

    var params = ['utm_source=' + encodeURIComponent(source)];
    if (medium) params.push('utm_medium=' + encodeURIComponent(medium));
    if (campaign) params.push('utm_campaign=' + encodeURIComponent(campaign));
    if (term) params.push('utm_term=' + encodeURIComponent(term));
    if (content) params.push('utm_content=' + encodeURIComponent(content));

    var hashIndex = url.indexOf('#');
    var baseUrl = hashIndex !== -1 ? url.slice(0, hashIndex) : url;
    var fragment = hashIndex !== -1 ? url.slice(hashIndex) : '';
    var separator = baseUrl.indexOf('?') === -1 ? '?' : '&';
    output.textContent = baseUrl + separator + params.join('&') + fragment;
    output.style.color = '#1f2937';
    copyBtn.style.visibility = 'visible';
    note.style.display = 'block';
  }

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  allFields.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function() { buildUrl(); updateWarnings(); });
  });

  var urlInput = document.getElementById('utm-url');
  var urlWarnEl = document.getElementById('utm-url-warn');
  urlInput.addEventListener('blur', function() {
    var val = urlInput.value.trim();
    if (!val) { urlWarnEl.style.display = 'none'; return; }
    var testUrl = /^https?:\/\//i.test(val) ? val : 'https://' + val;
    var hostname = testUrl.replace(/^https?:\/\//i, '').split(/[/?#]/)[0];
    if (hostname && hostname.indexOf('.') === -1) {
      urlWarnEl.style.display = 'block';
      urlWarnEl.textContent = '⚠ This URL looks incomplete. Did you forget the domain extension? e.g. ' + hostname + '.com';
    } else {
      urlWarnEl.style.display = 'none';
    }
  });
  urlInput.addEventListener('focus', function() { urlWarnEl.style.display = 'none'; });

  document.getElementById('utm-copy').addEventListener('click', function() {
    var text = document.getElementById('utm-output').textContent;
    var btn = document.getElementById('utm-copy');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      btn.textContent = 'Copied!';
      setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
    }
  });
})();
</script>

## UTM parameters

**utm_source** (required): The platform or channel sending the traffic. Examples: `newsletter`, `linkedin`, `facebook`, `google`.

**utm_medium**: The type of channel. Examples: `email`, `social`, `cpc`, `affiliate`.

**utm_campaign**: The name of the specific campaign. Examples: `spring-sale`, `product-launch`, `may-newsletter`.

**utm_term**: The keyword for paid search ads. Used to identify which search terms are driving clicks and conversions. Examples: `accounting-software`, `project-management-tool`, `buy-crm`.

**utm_content**: Distinguishes between multiple links in the same campaign. Useful when two links in one email point to the same page. Examples: `banner-top`, `link-footer`, `cta-button`.

## Best practices

- **Use lowercase for UTM values.** In Google Analytics, `utm_source=LinkedIn` and `utm_source=linkedin` are counted as two separate sources in every report. Plausible automatically consolidates utm_source variants in the Sources tab, so your top-level traffic view stays clean regardless. For all other UTM fields, mixed case means separate entries in your analytics.
- **Never tag internal links.** UTMs on links within your own site overwrite the original referral source for that session and corrupt your attribution data.
- **Hyphens and plus signs both work instead of spaces.** Plausible converts plus signs to spaces, so `spring+sale` shows as `spring sale` in your dashboard. Either format works. Avoid raw spaces: they encode as `%20` and break easily when links are copied by hand.
- **Keep naming consistent in your UTM campaigns.** In Google Analytics, `facebook`, `Facebook` and `fb` appear as three separate sources with no grouping. Plausible automatically consolidates known platform variants in the Sources tab, so all traffic from the same platform shows together regardless of how links were tagged. The Campaigns tab preserves raw values exactly as tagged, so inconsistent naming will fragment your campaign-level analysis.

For a full walkthrough including how UTM data appears in your Plausible dashboard, see [How to use UTM parameters to track your campaigns](/blog/utm-tracking-tags).
