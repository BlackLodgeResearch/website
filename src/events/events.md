---
layout: index
title: Events
permalink: /events/
pagination:
  data: events
  size: 15
---

## Events, future and past
<ul>
{% for event in events %}
  <li><a href="/events/{{ event.name | slug }}-{{ event.date | slug }}/">{{ event.name }}</a></li> 
{% endfor %}
</ul>