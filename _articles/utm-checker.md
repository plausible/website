---
layout: article
title: "UTM checker"
description: Paste a UTM-tagged URL to validate it, spot naming issues and get a clean corrected version ready to copy.
permalink: /utm-checker
---
UTM links accumulate mess. A teammate copies a URL and tweaks it by hand. Someone uses `Facebook` where everyone else uses `facebook`. Spaces sneak in. The result is fragmented campaign data that is hard to filter and impossible to compare.

Paste a tagged URL below. The checker splits it into its parts, flags issues, and generates a clean suggested URL ready to copy.

## UTM link checker

<div style="margin: 1.5rem 0; padding: 1.5rem; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; font-family: inherit;">
  <div>
    <label for="chk-input" style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.25rem;">Paste your tagged URL</label>
    <textarea id="chk-input" rows="3" placeholder="https://yourdomain.com?utm_source=LinkedIn&utm_medium=Social&utm_campaign=spring sale" style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; font-family: inherit; box-sizing: border-box; outline: none; resize: vertical;"></textarea>
  </div>

  <div id="chk-no-utm" style="display: none; margin-top: 1.25rem; padding: 0.875rem 1rem; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 0.375rem; color: #6b7280;">
    No UTM parameters found in this URL. <a href="/utm-builder" style="color: #4f46e5;">Build one from scratch →</a>
  </div>

  <div id="chk-result" style="display: none; margin-top: 1.25rem;">

    <div style="font-weight: 600; color: #374151; margin-bottom: 0.625rem;">Parameters</div>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden;">
      <thead>
        <tr style="background: #f3f4f6;">
          <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb; width: 30%;">Parameter</th>
          <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Value</th>
          <th style="text-align: left; padding: 0.5rem 0.75rem; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb; width: 20%;">Status</th>
        </tr>
      </thead>
      <tbody id="chk-tbody"></tbody>
    </table>

    <div id="chk-issues" style="display: none; margin-top: 1rem; padding: 0.875rem 1rem; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 0.375rem;">
      <div style="font-weight: 600; color: #92400e; margin-bottom: 0.5rem;">Issues found</div>
      <div id="chk-issues-list" style="font-size: 0.8125rem; color: #78350f; line-height: 1.7;"></div>
    </div>

    <div id="chk-clean-wrap" style="display: none; margin-top: 1rem;">
      <div style="font-weight: 600; color: #374151; margin-bottom: 0.5rem;">Suggested clean URL</div>
      <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
        <div id="chk-clean-output" style="flex: 1; padding: 0.75rem; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 0.375rem; word-break: break-all; color: #166534; line-height: 1.5; font-family: monospace; font-size: 0.8125rem;"></div>
        <button id="chk-clean-copy" style="flex-shrink: 0; width: 5.5rem; padding: 0.5rem 1rem; background: #4f46e5; color: #fff; font-size: 0.875rem; font-weight: 500; border: none; border-radius: 0.375rem; cursor: pointer; font-family: inherit;">Copy</button>
      </div>
      <div id="chk-clean-caption" style="font-size: 0.75rem; color: #6b7280; margin-top: 0.375rem;"></div>
    </div>

  </div>
</div>

<p style="margin-top: -0.5rem; font-size: 0.875rem;">Building a new link instead? <a href="/utm-builder">Use the UTM builder →</a></p>

<script>
(function() {
  var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  var labels = {
    utm_source: 'utm_source (required)',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_term: 'utm_term',
    utm_content: 'utm_content'
  };

  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function normalize(val) {
    return val.toLowerCase().replace(/\s+/g, '-');
  }

  function getIssues(key, val) {
    var issues = [];
    if (val !== val.toLowerCase()) {
      if (key === 'utm_source') {
        issues.push({ type: 'case', msg: '<strong>' + key + '</strong>: "' + escHtml(val) + '" has mixed case. Google Analytics counts "' + escHtml(val) + '" and "' + escHtml(val.toLowerCase()) + '" as separate sources everywhere. Plausible auto-consolidates utm_source variants in the Sources tab and preserves the raw value in the Campaigns tab.' });
      } else {
        issues.push({ type: 'case', msg: '<strong>' + key + '</strong>: "' + escHtml(val) + '" has mixed case. "' + escHtml(val) + '" and "' + escHtml(val.toLowerCase()) + '" will be treated as separate values in your analytics.' });
      }
    }
    if (/\s/.test(val)) {
      issues.push({ type: 'space', msg: '<strong>' + key + '</strong>: contains spaces. Use hyphens or plus signs instead: "' + escHtml(val.replace(/\s+/g,'-')) + '"' });
    }
    return issues;
  }

  function parseUrl(raw) {
    raw = raw.trim();
    if (!raw) return null;
    var hashIndex = raw.indexOf('#');
    if (hashIndex !== -1) raw = raw.slice(0, hashIndex);
    var qIndex = raw.indexOf('?');
    if (qIndex === -1) return { base: raw, params: {} };
    var base = raw.slice(0, qIndex);
    var query = raw.slice(qIndex + 1);
    var params = {};
    query.split('&').forEach(function(part) {
      var eq = part.indexOf('=');
      if (eq === -1) return;
      var k = decodeURIComponent(part.slice(0, eq).replace(/\+/g,' '));
      var v = decodeURIComponent(part.slice(eq + 1).replace(/\+/g,' '));
      params[k] = v;
    });
    return { base: base, params: params };
  }

  function buildCleanUrl(base, allParams, utmValues) {
    var changes = [];
    var cleanBase = base;
    if (/^http:\/\//i.test(cleanBase)) {
      cleanBase = 'https://' + cleanBase.slice(7);
      changes.push('http upgraded to https');
    } else if (!/^https:\/\//i.test(cleanBase)) {
      cleanBase = 'https://' + cleanBase;
      changes.push('https:// added');
    }
    var lowercased = false, spacesReplaced = false;
    var utmParts = utmKeys.filter(function(k) { return utmValues[k] !== undefined; }).map(function(k) {
      var val = utmValues[k];
      if (val !== val.toLowerCase()) lowercased = true;
      if (/\s/.test(val)) spacesReplaced = true;
      return k + '=' + encodeURIComponent(normalize(val));
    });
    if (lowercased) changes.push('values lowercased');
    if (spacesReplaced) changes.push('spaces replaced with hyphens');
    if (!utmParts.length) return null;
    var nonUtmParts = Object.keys(allParams)
      .filter(function(k) { return utmKeys.indexOf(k) === -1; })
      .map(function(k) { return encodeURIComponent(k) + '=' + encodeURIComponent(allParams[k]); });
    var url = cleanBase + '?' + nonUtmParts.concat(utmParts).join('&');
    var caption = changes.length ? changes.slice(0, -1).join(', ') + (changes.length > 1 ? ' and ' : '') + changes[changes.length - 1] : '';
    caption = caption.charAt(0).toUpperCase() + caption.slice(1) + (caption ? '.' : '');
    return { url: url, caption: caption };
  }

  function check() {
    var raw = document.getElementById('chk-input').value;
    var noUtm = document.getElementById('chk-no-utm');
    var result = document.getElementById('chk-result');

    if (!raw.trim()) {
      noUtm.style.display = 'none';
      result.style.display = 'none';
      return;
    }

    var parsed = parseUrl(raw);
    if (!parsed) {
      noUtm.style.display = 'none';
      result.style.display = 'none';
      return;
    }

    var utmValues = {};
    utmKeys.forEach(function(k) {
      if (parsed.params[k] !== undefined) utmValues[k] = parsed.params[k];
    });

    var hasUtm = Object.keys(utmValues).length > 0;
    if (!hasUtm) {
      noUtm.style.display = 'block';
      result.style.display = 'none';
      return;
    }

    noUtm.style.display = 'none';
    result.style.display = 'block';

    var allIssues = [];
    if ((raw.match(/\?/g) || []).length > 1) {
      var fixedQ = (function(s) { var i = s.indexOf('?'); return s.slice(0, i + 1) + s.slice(i + 1).replace(/\?/g, '&'); })(raw);
      allIssues.push({ type: 'syntax', msg: '<strong>Multiple ? found.</strong> Only the first ? starts the query string. Use & to separate additional parameters: <code>' + escHtml(fixedQ) + '</code>' });
    }
    if (!/^https?:\/\//i.test(raw.trim())) {
      allIssues.push({ type: 'protocol', msg: '<strong>No protocol found.</strong> The URL should start with https://' });
    } else if (/^http:\/\//i.test(raw.trim())) {
      allIssues.push({ type: 'protocol', msg: '<strong>URL uses http:// instead of https://.</strong> Campaign links should use HTTPS.' });
    }
    var hostname = raw.trim().replace(/^https?:\/\//i, '').split(/[/?#]/)[0];
    if (hostname && hostname.indexOf('.') === -1) {
      allIssues.push({ type: 'domain', msg: '<strong>URL looks incomplete.</strong> The domain appears to be missing an extension (e.g. .com or .io).' });
    }
    var missingSource = utmValues['utm_source'] === undefined;
    if (missingSource) {
      allIssues.push({ type: 'missing', msg: '<strong>utm_source is missing.</strong> This is the only required parameter. Without it your analytics cannot attribute the visit to a source.' });
    }

    var tbodyRows = utmKeys.filter(function(k) { return utmValues[k] !== undefined; }).map(function(k) {
      var val = utmValues[k];
      var issues = getIssues(k, val);
      allIssues = allIssues.concat(issues);
      var statusCell;
      if (issues.length) {
        statusCell = '<td style="padding: 0.5rem 0.75rem; color: #b45309; white-space: nowrap;">⚠ ' + issues.map(function(i) { return i.type === 'case' ? 'mixed case' : 'has spaces'; }).join(', ') + '</td>';
      } else {
        statusCell = '<td style="padding: 0.5rem 0.75rem; color: #15803d; white-space: nowrap;">✓ OK</td>';
      }
      return '<tr style="border-top: 1px solid #e5e7eb;">'
        + '<td style="padding: 0.5rem 0.75rem; color: #374151; white-space: nowrap; font-family: monospace;">' + escHtml(labels[k]) + '</td>'
        + '<td style="padding: 0.5rem 0.75rem; color: #111827; font-family: monospace; word-break: break-all;">' + escHtml(val) + '</td>'
        + statusCell
        + '</tr>';
    });

    document.getElementById('chk-tbody').innerHTML = tbodyRows.join('');

    var issuesEl = document.getElementById('chk-issues');
    var issuesList = document.getElementById('chk-issues-list');
    if (allIssues.length) {
      issuesList.innerHTML = allIssues.map(function(i) { return '⚠ ' + i.msg; }).join('<br>');
      issuesEl.style.display = 'block';
    } else {
      issuesEl.style.display = 'none';
    }

    var hasDomainIssue = allIssues.some(function(i) { return i.type === 'domain'; });
    var hasSyntaxIssue = allIssues.some(function(i) { return i.type === 'syntax'; });
    var needsClean = allIssues.length > 0 && !missingSource && !hasDomainIssue && !hasSyntaxIssue;
    var cleanWrap = document.getElementById('chk-clean-wrap');
    if (needsClean) {
      var cleanResult = buildCleanUrl(parsed.base, parsed.params, utmValues);
      document.getElementById('chk-clean-output').textContent = cleanResult.url;
      document.getElementById('chk-clean-caption').textContent = cleanResult.caption;
      cleanWrap.style.display = 'block';
    } else {
      cleanWrap.style.display = 'none';
    }
  }

  document.getElementById('chk-input').addEventListener('input', check);

  document.getElementById('chk-clean-copy').addEventListener('click', function() {
    var text = document.getElementById('chk-clean-output').textContent;
    var btn = document.getElementById('chk-clean-copy');
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

## Common UTM mistakes

In Google Analytics, the issues below create fragmented campaign data that is hard to filter and impossible to compare. [Plausible](https://plausible.io/) automatically consolidates many of these inconsistencies in your Sources tab, the Campaigns tab gives you a faithful record of exactly what was sent. Link quality there is entirely up to you.

**Mixed case across campaigns.** UTM values are case-sensitive. In Google Analytics, `utm_source=LinkedIn` and `utm_source=linkedin` are two separate sources in every report. Plausible automatically consolidates utm_source variants in the Sources tab, so your top-level traffic view stays clean. For all other UTM fields, mixed case means separate entries in your analytics. Lowercase everything.

**Spaces in values.** Plausible converts plus signs to spaces, so `spring+sale` appears as `spring sale` in your dashboard. Hyphens work too. Avoid raw spaces: they encode as `%20` and break easily when links are copied by hand.

**Inconsistent source names.** In Google Analytics, `fb`, `facebook` and `Facebook` are three separate sources with no grouping. Plausible automatically consolidates known platform variants in the Sources tab, so all traffic from the same platform shows together. The Campaigns tab gives you a faithful record of exactly what was sent. Inconsistent naming will still show as separate entries there.

**Tagging internal links.** A UTM tag on a link inside your own site overwrites the original referral source for that session. If someone arrived from your newsletter and then clicks a UTM-tagged link on your homepage, the newsletter attribution is gone. Only tag external links.

**Skipping utm_medium.** Source tells you where. Medium tells you what kind of channel. Without medium, you cannot distinguish a newsletter campaign from a banner ad on the same site. It takes one extra field and pays off every time you need to compare channels.

For a full guide to UTM parameters including how they appear in your Plausible dashboard, see [How to use UTM parameters to track your campaigns](/blog/utm-tracking-tags).
