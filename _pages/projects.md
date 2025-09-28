---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
nav: true
nav_order: 3
description: "A growing collection of research projects and portfolio items."
---

{% for post in site.portfolio %}
  {% include archive-single.html %}
{% endfor %}
