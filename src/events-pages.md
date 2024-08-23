---
pagination:
  data: events
  size: 1
  alias: event
permalink: "events/{{ event.name | slug }}/"
layout: index
title: "Event: {{ event.name }}"
---

{{ event.name }} - {{ event.date }}

{{ event.description }}

Event will be held at {{ event.location }}.