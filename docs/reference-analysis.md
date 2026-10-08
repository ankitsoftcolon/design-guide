# Reference analysis

Reviewed on October 8, 2026.

## Sources

- [Rendered invoice creator](https://srbthemes.kcubeinfotech.com/domiex/html-2.4.0/apps-invoice-create.html)
- [Theme configuration](https://srbthemes.kcubeinfotech.com/domiex/docs/html/theme.html)
- [Boxed layout documentation](https://srbthemes.kcubeinfotech.com/domiex/docs/html/layouts-boxed.html)

The invoice page was inspected in the browser and its Boxed setting was selected. The documentation establishes Inter, the primary OKLCH blue scale, a 15rem default sidebar, a roughly 75px top bar, and compact form and card typography. The supplied primary palette is reproduced exactly.

## Observed visual language

The boxed reference places the whole application inside visible outer margins. A white header spans the shell; the sidebar has a separating border, navigation groups, outlined icons, compact rows, and a colored active entry. White cards use restrained rounding and thin neutral borders. Form fields have compact heights and quiet focus styling. The invoice groups company details, dates/status, products, totals, payment details, and terms.

## Implementation decisions

Bluebox keeps these proportions and restrained surfaces with original branding. The maximum width is configurable at 1480px; it remains visibly boxed at large desktop widths. Neutral surfaces, semantic status colors, radii, and shadows are theme adaptations rather than exact measured reference values. The outer background is a subdued blue-gray adaptation of the reference colored surround.

Inter is locally bundled. After review, the user requested larger typography; body/navigation/table text now uses 14px, supporting text 12–14px, and page headings 26px. Responsive form grids collapse, and wide tables scroll inside their containers.

The invoice benchmark was built and inspected, then removed at the user’s request. The final application focuses on the design system showcase.

The user requested a light-only theme. Dark overrides and the theme switcher were removed. Shared semantic tokens style every registry component, including portaled menus and overlays.
