---
title: 'Markdown + Tailwind'
layout: ../layouts/main.astro
setup: |
  import Button from '../components/Button.astro';
---

<div class="grid place-items-center h-screen content-center">
    <Button class="bg-slate-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-slate-400 hover:shadow-xl transition-colors">Tailwind Button in Markdown!</Button>
    <a href="/" class="p-4 underline">Go home...</a>
</div>
