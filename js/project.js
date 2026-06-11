/**
 * Project detail page — renders a single case study from ?id=<slug>.
 */

/**
 * Figures section — renders only when the project has images.
 * Entries are plain path strings or { src, caption } objects.
 */
const renderFigures = (project) => {
  const images = project.images || [];
  if (!images.length) return '';

  return `
    <section class="project-body">
      <span class="body-label mono">Figures</span>
      <div class="figure-grid">
        ${images.map((img, i) => {
          const src = typeof img === 'string' ? img : img.src;
          const caption = typeof img === 'string' ? '' : (img.caption || '');
          return `
            <figure class="project-figure">
              <img src="${src}" alt="${caption || `${project.title}, figure ${i + 1}`}" loading="lazy">
              <figcaption class="mono">Fig. ${pad2(i + 1)}${caption ? ` · ${caption}` : ''}</figcaption>
            </figure>`;
        }).join('')}
      </div>
    </section>`;
};

const renderProjectDetail = () => {
  const root = document.getElementById('projectDetail');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = id ? getProjectById(id) : null;

  if (!project) {
    document.title = 'Project not found | Shoaib Majid Dar';
    root.innerHTML = `
      <div class="container not-found">
        <p class="mono" style="color: var(--accent); margin-bottom: 1rem;">404 / Not in the index</p>
        <h1>That project isn't filed here.</h1>
        <p>The link may be outdated, or the entry was renamed.</p>
        <a href="portfolio.html" class="btn btn-primary">Back to the index</a>
      </div>`;
    return;
  }

  const idx = getProjectIndex(project.id);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  document.title = `${project.title} | Shoaib Majid Dar`;

  root.innerHTML = `
    <header class="project-hero">
      <div class="container">
        <a href="portfolio.html" class="crumb mono">&larr; Index of work</a>
        <span class="proj-num mono">Case study № ${pad2(idx + 1)} / ${pad2(PROJECTS.length)}</span>
        <h1>${project.title}</h1>
      </div>
    </header>

    <div class="container">
      <dl class="project-meta">
        <div>
          <dt class="mono">Company</dt>
          <dd>${project.company}</dd>
        </div>
        <div>
          <dt class="mono">Role</dt>
          <dd>${project.role}</dd>
        </div>
        <div>
          <dt class="mono">Period</dt>
          <dd>${project.period}</dd>
        </div>
        <div>
          <dt class="mono">Stack</dt>
          <dd class="tag-row">${project.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</dd>
        </div>
      </dl>

      <section class="project-body">
        <span class="body-label mono">Overview</span>
        <div>
          ${project.overview.map((p, i) => `<p class="${i === 0 ? 'lede' : ''}">${p}</p>`).join('')}
        </div>
      </section>

      ${renderFigures(project)}

      <section class="project-body">
        <span class="body-label mono">Highlights</span>
        <ol class="highlight-list">
          ${project.highlights.map((h) => `<li><span>${h}</span></li>`).join('')}
        </ol>
      </section>
    </div>

    <nav class="project-pagination" aria-label="Project navigation">
      ${prev ? `
        <a class="pagination-link prev" href="project.html?id=${prev.id}">
          <span class="mono">&larr; Previous</span>
          <span class="pagination-title">${prev.title}</span>
        </a>` : `
        <span class="pagination-link prev disabled">
          <span class="mono">&larr; Previous</span>
          <span class="pagination-title">·</span>
        </span>`}
      ${next ? `
        <a class="pagination-link next" href="project.html?id=${next.id}">
          <span class="mono">Next &rarr;</span>
          <span class="pagination-title">${next.title}</span>
        </a>` : `
        <span class="pagination-link next disabled">
          <span class="mono">Next &rarr;</span>
          <span class="pagination-title">·</span>
        </span>`}
    </nav>`;
};

document.addEventListener('DOMContentLoaded', renderProjectDetail);
