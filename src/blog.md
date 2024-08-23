---
layout: index
title: Blog
permalink: /blog/
---
## Blog posts

{%- for post in collections.blog %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}