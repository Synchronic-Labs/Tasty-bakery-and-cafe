/* ==========================================================
   Tasty Bakery & Cafe — builds the menu from js/menu-data.js
   You normally don't need to edit this file.
   ========================================================== */
(function () {
  "use strict";

  var DATA = window.TASTY_MENU;
  var menuEl = document.getElementById("menu");
  var chipsEl = document.getElementById("chips");
  var bar = document.getElementById("bar");
  var emptyEl = document.getElementById("empty");

  if (!DATA || !Array.isArray(DATA.categories)) {
    menuEl.innerHTML = '<p class="empty">The menu could not be loaded. Please check js/menu-data.js.</p>';
    return;
  }

  var CURRENCY = DATA.currency || "ETB";

  /* ---------- line icons (24×24, stroke = currentColor) ---------- */
  var ICONS = {
    breakfast:
      '<path d="M4.5 10h12v4.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z"/><path d="M16.5 11.5h1.2a2.3 2.3 0 0 1 0 4.6h-1.6"/><path d="M3 21.5h15"/><path d="M8.5 3.2c-.9 1.2.9 2.2 0 3.5M12.5 3.2c-.9 1.2.9 2.2 0 3.5"/>',
    salad:
      '<path d="M3 12h18a9 7.5 0 0 1-18 0z"/><path d="M7.5 12c-1.2-2.8-.3-5.6 2.6-6.8 1 2.9.1 5.6-2.6 6.8z"/><path d="M12.5 12c-.2-3 1.8-5.2 5-5.4.2 3-1.8 5.2-5 5.4z"/><path d="M10.5 5.5c.8-1.2 2-1.8 3.2-1.8"/>',
    soup:
      '<path d="M3 11h18a9 7.5 0 0 1-18 0z"/><path d="M8 21h8"/><path d="M9 3.2c-1 1.3 1 2.4 0 3.8M12.5 2.5c-1 1.3 1 2.4 0 3.8M16 3.2c-1 1.3 1 2.4 0 3.8"/>',
    traditional:
      '<circle cx="12" cy="12" r="9.2"/><circle cx="8.8" cy="9" r="2"/><circle cx="14.8" cy="9.6" r="2.3"/><circle cx="10" cy="15.2" r="2.1"/><circle cx="15.4" cy="15.4" r="1.5"/>',
    fish:
      '<path d="M3 12c3-5.4 9-6 13-2l5-3.6v11.2L16 14c-4 4-10 3.4-13-2z"/><circle cx="7.4" cy="11.2" r=".9" fill="currentColor" stroke="none"/><path d="M10.6 9.4c.9 1.6.9 3.6 0 5.2"/>',
    pizza:
      '<path d="M12 21.5 3.4 6.8a17.5 17.5 0 0 1 17.2 0z"/><path d="M5 9.6a15 15 0 0 1 14 0"/><circle cx="10" cy="12" r="1.2"/><circle cx="14.2" cy="12.6" r="1.2"/><circle cx="12" cy="16.6" r="1.2"/>',
    wrap:
      '<g transform="rotate(35 12 12)"><rect x="8" y="2.2" width="8" height="19.6" rx="4"/><path d="M8.2 8c2.5 1 5.1 1 7.6 0"/><path d="M8.6 12.6c2.3 1.4 4.5 1.4 6.8 0"/></g>',
    burger:
      '<path d="M4 10.5a8 6.5 0 0 1 16 0z"/><path d="M3.5 12.6c1.4 1 2.9 1 4.3 0s2.9-1 4.2 0 2.9 1 4.2 0 2.9-1 4.3 0"/><rect x="3.5" y="14.4" width="17" height="2.6" rx="1.3"/><path d="M4 18.6h16v.4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9.5 7.6h.01M12.5 6.6h.01M14.8 8.1h.01"/>',
    drinks:
      '<path d="M5.5 8h13l-1.6 13H7.1z"/><path d="M12.5 8 14.6 2.5H18"/><path d="M5.9 11.2h12.2"/><rect x="8.6" y="13.4" width="2.6" height="2.6" rx=".5"/><rect x="12.4" y="15" width="2.6" height="2.6" rx=".5"/>'
  };

  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.traditional) + "</svg>";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function slug(s, i) {
    var out = String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return out || "section-" + i;
  }

  function formatPrice(p) {
    var n = Number(p);
    if (!isFinite(n)) return esc(p);
    return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  /* ---------- render ---------- */
  var sectionsHtml = "";
  var chipsHtml = "";

  DATA.categories.forEach(function (cat, ci) {
    var id = slug(cat.id || cat.title, ci);
    cat._id = id;

    chipsHtml +=
      '<a class="chip" href="#' + id + '" data-target="' + id + '">' +
      icon(cat.icon) + "<span>" + esc(cat.title) + "</span></a>";

    var itemsHtml = (cat.items || []).map(function (it) {
      var searchText = [it.am, it.en, it.desc, cat.title].join(" ").toLowerCase();
      return (
        '<li class="item" data-search="' + esc(searchText) + '">' +
          '<div class="item__names">' +
            (it.am ? '<span class="item__am" lang="am">' + esc(it.am) + "</span>" : "") +
            (it.en ? '<span class="item__en">' + esc(it.en) + "</span>" : "") +
          "</div>" +
          '<span class="item__price">' + formatPrice(it.price) +
            "<small>" + esc(CURRENCY) + "</small></span>" +
          (it.desc ? '<p class="item__desc">' + esc(it.desc) + "</p>" : "") +
        "</li>"
      );
    }).join("");

    sectionsHtml +=
      '<section class="cat" id="' + id + '" aria-labelledby="h-' + id + '">' +
        '<div class="cat__head">' +
          '<h2 class="cat__title" id="h-' + id + '">' + esc(cat.title) + "</h2>" +
          '<span class="cat__icon">' + icon(cat.icon) + "</span>" +
        "</div>" +
        '<ul class="items">' + itemsHtml + "</ul>" +
      "</section>";
  });

  menuEl.innerHTML = sectionsHtml;
  chipsEl.innerHTML = chipsHtml;

  var sections = Array.prototype.slice.call(menuEl.querySelectorAll(".cat"));
  var chips = Array.prototype.slice.call(chipsEl.querySelectorAll(".chip"));
  var items = Array.prototype.slice.call(menuEl.querySelectorAll(".item"));

  /* ---------- active chip follows scrolling ---------- */
  var activeId = null;
  var clickLockUntil = 0;

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    chips.forEach(function (c) {
      var on = c.getAttribute("data-target") === id;
      if (on) {
        c.setAttribute("aria-current", "true");
        // keep the active chip visible inside the horizontal strip
        var left = c.offsetLeft - (chipsEl.clientWidth - c.offsetWidth) / 2;
        chipsEl.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
      } else {
        c.removeAttribute("aria-current");
      }
    });
  }

  function barHeight() { return bar.getBoundingClientRect().height; }

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    // shadow under the bar once it sticks
    bar.classList.toggle("is-stuck", bar.getBoundingClientRect().top <= 0 && y > 0);

    // back-to-top button
    toTop.classList.toggle("is-visible", y > 700);

    if (Date.now() < clickLockUntil) return;

    var line = barHeight() + 24;
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      var s = sections[i];
      if (s.hidden) continue;
      if (s.getBoundingClientRect().top - line <= 0) current = s.id;
    }
    // at the very bottom, highlight the last visible section
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
      var visible = sections.filter(function (s) { return !s.hidden; });
      if (visible.length) current = visible[visible.length - 1].id;
    }
    setActive(current || (sections[0] && sections[0].id));
  }

  chips.forEach(function (c) {
    c.addEventListener("click", function (e) {
      var id = c.getAttribute("data-target");
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      clickLockUntil = Date.now() + 900;
      setActive(id);
      var top = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - barHeight() + 1;
      window.scrollTo({ top: top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", "#" + id);
    });
  });

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---------- search ---------- */
  var openBtn = document.getElementById("searchOpen");
  var closeBtn = document.getElementById("searchClose");
  var form = document.getElementById("searchForm");
  var input = document.getElementById("searchInput");

  function openSearch() {
    chipsEl.hidden = true;
    openBtn.hidden = true;
    form.hidden = false;
    input.focus();
    // bring the bar to the top so results show right under it
    var menuTop = menuEl.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - barHeight();
    if ((window.scrollY || window.pageYOffset) < menuTop) {
      window.scrollTo({ top: menuTop, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  }

  function closeSearch() {
    input.value = "";
    filter("");
    form.hidden = true;
    chipsEl.hidden = false;
    openBtn.hidden = false;
    openBtn.focus();
    onScroll();
  }

  function filter(q) {
    q = q.trim().toLowerCase();
    var words = q.split(/\s+/).filter(Boolean);
    var shown = 0;

    items.forEach(function (li) {
      var text = li.getAttribute("data-search");
      var match = words.every(function (w) { return text.indexOf(w) !== -1; });
      li.hidden = !match;
      if (match) shown++;
    });

    sections.forEach(function (s) {
      s.hidden = !s.querySelector(".item:not([hidden])");
    });

    if (q && shown === 0) {
      emptyEl.textContent = "Nothing on the menu matches “" + q + "”.";
      emptyEl.hidden = false;
    } else {
      emptyEl.hidden = true;
    }
  }

  openBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);
  input.addEventListener("input", function () { filter(input.value); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSearch();
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    input.blur(); // hides the phone keyboard
  });

  /* ---------- back to top ---------- */
  var toTop = document.getElementById("toTop");
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });

  /* ---------- go ---------- */
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; onScroll(); });
  }, { passive: true });
  window.addEventListener("resize", onScroll);

  onScroll();

  // open at a section if the link has one, e.g.  .../#burger
  if (location.hash) {
    var start = document.getElementById(location.hash.slice(1));
    if (start) setTimeout(function () { start.scrollIntoView(); }, 0);
  }
})();
