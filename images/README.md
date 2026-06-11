# Project images

Drop screenshots/photos for the case studies in this folder, then list them in
the matching project's `images` array in `js/projects-data.js`:

```js
images: [
  'images/quoting-01.png',
  { src: 'images/quoting-02.png', caption: 'Live quote view' }
]
```

A "Figures" section appears automatically on that project's page once the
array has entries. Plain strings get an auto-numbered caption (Fig. 01, …);
use `{ src, caption }` to add your own label.

Projects expecting images:
- `quoting-platform`   — Installation Quoting Platform
- `formio-field-data`  — Form.io Field Data Suite
- `technician-field-app` — Technician Field App & Automations
- `pid-digitization`   — P&ID Digitization for HAZOP
