---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
nav: true
nav_order: 2
description: "Publications by categories in reversed chronological order."
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>
