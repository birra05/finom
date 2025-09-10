# Finom Banner — Test Task
## Summary
### Task 
Create a responsive banner

### Demo
You can view the banner here:
🚀 [Live Preview on GitHub Pages](https://birra05.github.io/finom/)

## Resources
### Requirements
1. The project build must be available by direct URL (e.g. CodeSandbox, GitHub Pages, or your own server).
2. The banner should be “alive”, so use some hover states to your taste.
3. The breakpoint for mobile is **600px and below**, but the banner should be responsive for any device width (minimum 320px).
4. “More Information” is an external link — use [finom.co](https://finom.co) as the href.
5. Clicking on the cross icon must remove the banner from the DOM.
6. If you have questions like “What should the banner do if ...” (e.g. text is too long)

### Screenshots
| Desktop | Mobile |
|---------|--------|
| ![Banner Desktop](assets/screenshots/screenshot-desktop.png) | ![Banner Mobile](assets/screenshots/screenshot-mobile.png) |

---

## Implemented Features

### Structure
- Semantic HTML5 layout (`<main>`, `<article>`, `<h2>`, `<ul><li>`).
- BEM class naming convention.
- Code split into `normalize.css`, `style.css`, and `script.js`.

### Styling
- CSS custom properties (colors, spacing, line-height, transition).
- Mobile-first responsive design (320px → ∞, breakpoint at 600px).
- Hover states with smooth transitions (`transition`).
- Optimized SVG icons and retina images (`@2x`).

### Accessibility (a11y)
- `role="region"` + `aria-labelledby` on the banner container.
- `aria-label="Close"` on the dismiss button.
- `aria-hidden="true"` on decorative elements (coins background, close icon, checkmarks).
- Decorative icons use `alt=""` to avoid redundancy.
- Safe external links: `target="_blank" rel="noopener noreferrer"`.

### Functionality
- Close button removes the banner from the DOM (`data-target-action="close"`).
- Flexible spacing system via CSS variables.
- Cross-browser fallback for viewport height (`100dvh` + `min-height: 100vh`).

### Optimization
- Script loaded at the end of `<body>` (non-blocking).
- Local fonts included in WOFF2 + WOFF formats.  
  - Downloaded from Google Fonts, only required weights were implemented.  
  - Converted from TTF to WOFF/WOFF2 using [Transfonter](https://transfonter.org/).  
- SVG icons optimized via [SVGOMG](https://jakearchibald.github.io/svgomg/).
- Normalize.css used to ensure consistent styling across browsers. 

---

## Conclusion
The banner meets all requirements:  
- **Accessible** for screen readers and keyboard users.  
- **Responsive** across devices (desktop & mobile).  
- **Secure** for fintech use cases (safe external links, no vulnerabilities).  
- **Maintainable** thanks to CSS custom properties and clear structure.  


