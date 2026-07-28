(function() {
  var content = document.querySelector('.post .post-content');
  if (!content) return;

  var toc = content.querySelector('#markdown-toc');
  var tocContainer = document.querySelector('.post .post-toc');
  if (!toc || !tocContainer) return;

  var panel = tocContainer.querySelector('.post-toc-panel');
  if (!panel) return;

  var sidebarToc = toc.cloneNode(true);
  sidebarToc.removeAttribute('id');
  sidebarToc.querySelectorAll('[id]').forEach(function(element) {
    element.removeAttribute('id');
  });
  sidebarToc.classList.add('post-toc-list');
  panel.appendChild(sidebarToc);

  var contentLayout = tocContainer.closest('.post-content-layout');
  if (contentLayout) contentLayout.classList.add('toc-ready');

  var headings = Array.prototype.slice.call(content.querySelectorAll('h2[id], h3[id], h4[id], h5[id], h6[id]'));
  var links = Array.prototype.slice.call(sidebarToc.querySelectorAll('a[href^="#"]'));
  var linksById = {};

  links.forEach(function(link) {
    try {
      linksById[decodeURIComponent(link.hash.slice(1))] = link;
    } catch (e) {
      linksById[link.hash.slice(1)] = link;
    }
  });

  var currentId = null;
  function setActiveHeading() {
    var active = null;
    var threshold = 140;

    headings.forEach(function(heading) {
      if (heading.getBoundingClientRect().top <= threshold) active = heading;
    });
    if (!active && headings.length) active = headings[0];
    if (!active || active.id === currentId) return;

    currentId = active.id;
    sidebarToc.querySelectorAll('.toc-active, .toc-active-branch').forEach(function(item) {
      item.classList.remove('toc-active', 'toc-active-branch');
    });

    var activeLink = linksById[currentId];
    if (!activeLink) return;

    var item = activeLink.closest('li');
    if (item) {
      item.classList.add('toc-active');
      var parent = item.parentElement && item.parentElement.closest('li');
      while (parent) {
        parent.classList.add('toc-active-branch');
        parent = parent.parentElement && parent.parentElement.closest('li');
      }
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function() {
      setActiveHeading();
      ticking = false;
    });
  }, { passive: true });

  function revealToc() {
    window.requestAnimationFrame(function() {
      setActiveHeading();
      tocContainer.classList.remove('invisible');
    });
  }

  if (document.readyState === 'complete') {
    revealToc();
  } else {
    window.addEventListener('pageshow', revealToc, { once: true });
  }
})();
