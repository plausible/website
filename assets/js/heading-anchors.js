(function() {
  var content = document.querySelector('[data-heading-anchors]');
  if (!content) return;

  var headings = content.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]');

  headings.forEach(function(heading) {
    if (heading.querySelector('.heading-anchor')) return;

    var anchor = document.createElement('a');
    anchor.className = 'heading-anchor';
    anchor.href = '#' + encodeURIComponent(heading.id);
    anchor.setAttribute('aria-label', 'Link to ' + heading.textContent.trim());
    anchor.textContent = '#';
    heading.appendChild(anchor);
  });
})();
