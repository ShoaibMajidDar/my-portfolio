/**
 * Portfolio index — renders the project ledger.
 * Each row links to project.html?id=<slug>, the full case study.
 */

const renderProjectLedger = () => {
  const list = document.getElementById('projectsLedger');
  if (!list) return;

  list.innerHTML = PROJECTS.map((project, i) => `
    <a class="ledger-row reveal d${Math.min(i % 4 + 1, 4)}" href="project.html?id=${project.id}"
       aria-label="${project.title}, open case study">
      <span class="ledger-num">№ ${pad2(i + 1)}</span>
      <span class="ledger-title">${project.title}</span>
      <span class="ledger-context">${project.company}<br>${project.year}</span>
      <span class="ledger-stack">${project.tags.slice(0, 3).join(' · ')}</span>
      <span class="ledger-arrow" aria-hidden="true">&rarr;</span>
    </a>
  `).join('');

  // Rows are injected after the initial reveal pass — observe them now.
  if (typeof initReveals === 'function') initReveals();
};

document.addEventListener('DOMContentLoaded', renderProjectLedger);
