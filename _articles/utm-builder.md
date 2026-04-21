---
layout: article
title: "UTM Builder"
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
    </div>
    <div>
      <label for="utm-source" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Source (utm_source) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="utm-source" placeholder="e.g. newsletter, twitter, google" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-medium" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Medium (utm_medium)</label>
      <input type="text" id="utm-medium" placeholder="e.g. email, social, cpc" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-campaign" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Name (utm_campaign)</label>
      <input type="text" id="utm-campaign" placeholder="e.g. spring-sale, product-launch" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-term" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Term (utm_term)</label>
      <input type="text" id="utm-term" placeholder="e.g. analytics software (for paid search)" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
    <div>
      <label for="utm-content" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Campaign Content (utm_content)</label>
      <input type="text" id="utm-content" placeholder="e.g. banner-top, link-footer" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none;" />
    </div>
  </div>
  <div id="utm-result" style="margin-top: 1.25rem;">
    <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">Your tagged URL</label>
    <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
      <div id="utm-output" style="flex: 1; padding: 0.75rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.375rem; word-break: break-all; color: #9ca3af; line-height: 1.5;">Fill in the URL and source above to generate your tagged link.</div>
      <button id="utm-copy" style="flex-shrink: 0; padding: 0.5rem 1rem; background: #4f46e5; color: #fff; font-size: 0.875rem; font-weight: 500; border: none; border-radius: 0.375rem; cursor: pointer; font-family: inherit; visibility: hidden;">Copy</button>
    </div>
  </div>
</div>

<script>
(function() {
  var fields = ['utm-url', 'utm-source', 'utm-medium', 'utm-campaign', 'utm-term', 'utm-content'];

  function buildUrl() {
    var url = document.getElementById('utm-url').value.trim();
    var source = document.getElementById('utm-source').value.trim();
    var output = document.getElementById('utm-output');
    var copyBtn = document.getElementById('utm-copy');
    if (!url || !source) {
      output.textContent = 'Fill in the URL and source above to generate your tagged link.';
      output.style.color = '#9ca3af';
      copyBtn.style.visibility = 'hidden';
      return;
    }
    var params = [];
    params.push('utm_source=' + encodeURIComponent(source));
    var medium = document.getElementById('utm-medium').value.trim();
    if (medium) params.push('utm_medium=' + encodeURIComponent(medium));
    var campaign = document.getElementById('utm-campaign').value.trim();
    if (campaign) params.push('utm_campaign=' + encodeURIComponent(campaign));
    var term = document.getElementById('utm-term').value.trim();
    if (term) params.push('utm_term=' + encodeURIComponent(term));
    var content = document.getElementById('utm-content').value.trim();
    if (content) params.push('utm_content=' + encodeURIComponent(content));
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    output.textContent = url + separator + params.join('&');
    output.style.color = '#1f2937';
    copyBtn.style.visibility = 'visible';
  }

  fields.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', buildUrl);
  });

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
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      btn.textContent = 'Copied!';
      setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
    }
  });
})();
</script>

## UTM parameters

**utm_source** (required): The platform or channel sending the traffic. Examples: `newsletter`, `twitter`, `linkedin`, `google`.

**utm_medium**: The type of channel. Examples: `email`, `social`, `cpc`, `affiliate`.

**utm_campaign**: The name of the specific campaign. Examples: `spring-sale`, `product-launch`, `may-newsletter`.

**utm_term**: The keyword for paid search ads. Used to identify which search terms are driving clicks and conversions.

**utm_content**: Distinguishes between multiple links in the same campaign. Useful when two links in one email point to the same page. Examples: `banner-top`, `link-footer`, `cta-button`.

## Best practices

- **Use lowercase consistently.** `utm_source=Twitter` and `utm_source=twitter` appear as separate entries in your campaigns report.
- **Never tag internal links.** UTMs on links within your own site overwrite the original referral source for that session and corrupt your attribution data.
- **Use hyphens or plus signs instead of spaces.** Plausible converts plus signs to spaces, so `spring+sale` shows as `spring sale` in your dashboard.
- **Keep naming consistent across your team.** Mixing `facebook`, `Facebook` and `fb` across campaigns makes the data impossible to compare.

For a full walkthrough including how UTM data appears in your Plausible dashboard, see [How to use UTM parameters to track your campaigns](/blog/utm-tracking-tags).
