# Non-published docs

This is the directory for info about what this is, how it works and how to poke the website.

## What is it?
It's a static website generator that takes Markdown, data files, and templates, and generates a static website. This website gets checed in to the `gh-pages` branch of the repository, and is then served by GitHub Pages.

## How does it work?
The website is built by software called eleventy. It's Javascript, based on Node.js.

## How do I edit the content?
Edit the markdown files in the `src` directory. For styling, edit the `src/css/main.css` file. Images live in `src/images`.

## What is the file content?
Mostly, it's Markdown, as understood by [Markdown-it](https://markdown-it.github.io/). The data files are JSON, and the templates are Nunjucks.
The Markdown files also have Front Matter, which is a way of adding metadata to a file, are these blocks at the top of the file:
```
---
title: This ends up in the title metadata
layout: The name of the template to use
permalink: /permalink/
---
```
The permalink is used to give a static URL to the page. If you don't specify one, it will be generated from the title.

The events are a JSON list, with name, date, location and description. Just add them. The URLs are generated from the name and date.

## How does the GitHub Pages deployment work?
The `.github/workflows/build-and-deploy.yml` contains a workflow that install Node.js, installs eleventy, and then builds the website. The results are checked in to the `gh-pages` branch of the repository, and another Pages workflow deploys that branch to the URL.