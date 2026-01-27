// Ranger Challenge App - Main Application Logic

class RangerChallengeApp {
    constructor() {
        this.currentView = 'home';
        this.currentCategory = null;
        this.currentTask = null;
        this.progress = this.loadProgress();

        this.init();
    }

    init() {
        this.renderCategories();
        this.updateOverallProgress();
        this.attachEventListeners();
        this.registerServiceWorker();
    }

    // ===== Storage =====
    loadProgress() {
        const saved = localStorage.getItem('rc-progress');
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem('rc-progress', JSON.stringify(this.progress));
    }

    isTaskCompleted(taskId) {
        return this.progress[taskId] === true;
    }

    toggleTaskCompletion(taskId) {
        this.progress[taskId] = !this.progress[taskId];
        this.saveProgress();
        this.updateOverallProgress();
    }

    getCategoryProgress(category) {
        const total = category.tasks.length;
        const completed = category.tasks.filter(t => this.isTaskCompleted(t.id)).length;
        return { completed, total, percent: Math.round((completed / total) * 100) };
    }

    getOverallProgress() {
        let total = 0;
        let completed = 0;
        APP_DATA.categories.forEach(cat => {
            cat.tasks.forEach(task => {
                total++;
                if (this.isTaskCompleted(task.id)) completed++;
            });
        });
        return { completed, total, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
    }

    // ===== Rendering =====
    renderCategories() {
        const container = document.getElementById('categories');
        container.innerHTML = APP_DATA.categories.map(cat => {
            const progress = this.getCategoryProgress(cat);
            return `
        <div class="category-card" data-category="${cat.id}" style="--card-accent: ${cat.accentColor}">
          <div class="category-icon">${ICONS[cat.icon]}</div>
          <h3 class="category-title">${cat.title}</h3>
          <div class="category-meta">
            <span>${progress.completed}/${progress.total} tasks</span>
          </div>
          <div class="category-progress-bar">
            <div class="category-progress-fill" style="width: ${progress.percent}%"></div>
          </div>
        </div>
      `;
        }).join('');
    }

    renderTaskList(category) {
        const container = document.getElementById('taskList');
        container.innerHTML = category.tasks.map(task => {
            const completed = this.isTaskCompleted(task.id);
            return `
        <div class="task-item ${completed ? 'completed' : ''}" data-task="${task.id}">
          <div class="task-checkbox ${completed ? 'checked' : ''}" data-task-toggle="${task.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="task-info">
            <div class="task-title">${task.title}</div>
            <div class="task-time">${task.timeStandard}</div>
          </div>
          <svg class="task-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      `;
        }).join('');
    }

    renderTaskDetail(task) {
        const completed = this.isTaskCompleted(task.id);
        const container = document.getElementById('detailContent');

        let stepsHtml = '';
        if (task.steps && task.steps.length > 0) {
            stepsHtml = `
        <div class="detail-section">
          <h3 class="detail-section-title">Performance Steps</h3>
          <ol class="step-list">
            ${task.steps.map(step => `
              <li>
                <strong>${step.title}</strong>
                ${step.substeps ? `
                  <ol class="substep-list">
                    ${step.substeps.map(sub => `<li>${sub}</li>`).join('')}
                  </ol>
                ` : ''}
              </li>
            `).join('')}
          </ol>
        </div>
      `;
        }

        let measuresHtml = '';
        if (task.performanceMeasures && task.performanceMeasures.length > 0) {
            measuresHtml = `
        <div class="detail-section">
          <h3 class="detail-section-title">Performance Measures (GO/NO-GO)</h3>
          <ul>
            ${task.performanceMeasures.map(m => `<li>${m}</li>`).join('')}
          </ul>
        </div>
      `;
        }

        container.innerHTML = `
      <div class="detail-header">
        <h2 class="detail-title">${task.title}</h2>
        <div class="detail-meta">
          <span class="detail-badge time">⏱ ${task.timeStandard}</span>
          ${task.taskBasis ? `<span class="detail-badge">📋 ${task.taskBasis}</span>` : ''}
        </div>
      </div>

      ${task.conditions ? `
        <div class="detail-section">
          <h3 class="detail-section-title">Conditions</h3>
          <p>${task.conditions}</p>
        </div>
      ` : ''}

      ${task.standards ? `
        <div class="detail-section">
          <h3 class="detail-section-title">Standards</h3>
          <p>${task.standards}</p>
        </div>
      ` : ''}

      ${stepsHtml}
      ${measuresHtml}

      <button class="mark-complete-btn ${completed ? 'completed' : ''}" data-complete-task="${task.id}">
        ${completed ? '✓ Completed' : 'Mark as Complete'}
      </button>
    `;
    }

    renderProgressView() {
        const overall = this.getOverallProgress();
        const container = document.getElementById('categories');

        container.innerHTML = `
      <div class="progress-view" style="grid-column: 1 / -1;">
        <div class="progress-header">
          <h2>Your Progress</h2>
          <div class="overall-progress">
            <svg viewBox="0 0 36 36">
              <path class="progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <path class="progress-bar" stroke-dasharray="${overall.percent}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            </svg>
            <span class="progress-text">${overall.percent}%</span>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${overall.completed}</div>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${overall.total - overall.completed}</div>
            <div class="stat-label">Remaining</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${overall.total}</div>
            <div class="stat-label">Total</div>
          </div>
        </div>

        <h3 style="margin-bottom: var(--space-md); color: var(--text-secondary);">By Category</h3>
        ${APP_DATA.categories.map(cat => {
            const prog = this.getCategoryProgress(cat);
            return `
            <div class="task-item" style="margin-bottom: var(--space-sm);">
              <div class="category-icon" style="width: 32px; height: 32px; color: ${cat.accentColor}">${ICONS[cat.icon]}</div>
              <div class="task-info" style="flex: 1;">
                <div class="task-title">${cat.title}</div>
                <div class="category-progress-bar" style="margin-top: 4px;">
                  <div class="category-progress-fill" style="width: ${prog.percent}%; background: ${cat.accentColor}"></div>
                </div>
              </div>
              <span style="color: var(--text-muted); font-size: var(--font-size-sm);">${prog.completed}/${prog.total}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    }

    renderSettingsView() {
        const container = document.getElementById('categories');

        container.innerHTML = `
      <div class="settings-view" style="grid-column: 1 / -1;">
        <h2>Settings</h2>
        
        <div class="settings-section">
          <div class="settings-section-title">App Info</div>
          <div class="settings-list">
            <div class="settings-item">
              <span class="settings-item-label">Version</span>
              <span class="settings-item-value">1.0.0 POC</span>
            </div>
            <div class="settings-item">
              <span class="settings-item-label">Based On</span>
              <span class="settings-item-value">EIB/ESB Handbook 2021</span>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">Data</div>
          <div class="settings-list">
            <div class="settings-item" id="exportData">
              <span class="settings-item-label">Export Progress</span>
              <span class="settings-item-value">→</span>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">Danger Zone</div>
          <button class="reset-btn" id="resetProgress">Reset All Progress</button>
        </div>

        <div class="settings-section" style="text-align: center; color: var(--text-muted); font-size: var(--font-size-sm);">
          <p>RC PRO - Ranger Challenge Training</p>
          <p style="margin-top: 4px;">Built for offline use • Add to Home Screen for best experience</p>
        </div>
      </div>
    `;
    }

    updateOverallProgress() {
        const overall = this.getOverallProgress();
        const progressBar = document.querySelector('.header .progress-bar');
        const progressText = document.querySelector('.header .progress-text');

        if (progressBar) {
            progressBar.setAttribute('stroke-dasharray', `${overall.percent}, 100`);
        }
        if (progressText) {
            progressText.textContent = `${overall.percent}%`;
        }
    }

    // ===== Navigation =====
    showView(viewName) {
        const categories = document.getElementById('categories');
        const taskView = document.getElementById('taskView');
        const detailView = document.getElementById('detailView');

        // Hide all views
        categories.classList.remove('hidden');
        taskView.classList.add('hidden');
        detailView.classList.add('hidden');

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });

        this.currentView = viewName;

        if (viewName === 'home') {
            this.renderCategories();
        } else if (viewName === 'progress') {
            this.renderProgressView();
        } else if (viewName === 'settings') {
            this.renderSettingsView();
        }
    }

    showCategory(categoryId) {
        const category = APP_DATA.categories.find(c => c.id === categoryId);
        if (!category) return;

        this.currentCategory = category;

        document.getElementById('categories').classList.add('hidden');
        document.getElementById('taskView').classList.remove('hidden');
        document.getElementById('taskViewTitle').textContent = category.title;

        this.renderTaskList(category);
    }

    showTaskDetail(taskId) {
        const task = this.currentCategory?.tasks.find(t => t.id === taskId);
        if (!task) return;

        this.currentTask = task;

        document.getElementById('taskView').classList.add('hidden');
        document.getElementById('detailView').classList.remove('hidden');

        this.renderTaskDetail(task);
    }

    goBack() {
        const detailView = document.getElementById('detailView');
        const taskView = document.getElementById('taskView');

        if (!detailView.classList.contains('hidden')) {
            // Go back from detail to task list
            detailView.classList.add('hidden');
            taskView.classList.remove('hidden');
            this.currentTask = null;
        } else if (!taskView.classList.contains('hidden')) {
            // Go back from task list to categories
            taskView.classList.add('hidden');
            document.getElementById('categories').classList.remove('hidden');
            this.currentCategory = null;
        }
    }

    // ===== Event Listeners =====
    attachEventListeners() {
        // Category cards
        document.getElementById('categories').addEventListener('click', (e) => {
            const card = e.target.closest('.category-card');
            if (card) {
                this.showCategory(card.dataset.category);
            }
        });

        // Task list
        document.getElementById('taskList').addEventListener('click', (e) => {
            // Checkbox toggle
            const checkbox = e.target.closest('[data-task-toggle]');
            if (checkbox) {
                e.stopPropagation();
                const taskId = checkbox.dataset.taskToggle;
                this.toggleTaskCompletion(taskId);
                checkbox.classList.toggle('checked');
                checkbox.closest('.task-item').classList.toggle('completed');
                this.renderCategories();
                return;
            }

            // Task detail
            const taskItem = e.target.closest('.task-item');
            if (taskItem) {
                this.showTaskDetail(taskItem.dataset.task);
            }
        });

        // Detail view
        document.getElementById('detailContent').addEventListener('click', (e) => {
            const completeBtn = e.target.closest('[data-complete-task]');
            if (completeBtn) {
                const taskId = completeBtn.dataset.completeTask;
                this.toggleTaskCompletion(taskId);
                this.renderTaskDetail(this.currentTask);
                this.renderCategories();
            }
        });

        // Back buttons
        document.getElementById('backBtn').addEventListener('click', () => this.goBack());
        document.getElementById('detailBackBtn').addEventListener('click', () => this.goBack());

        // Bottom nav
        document.querySelector('.bottom-nav').addEventListener('click', (e) => {
            const btn = e.target.closest('.nav-btn');
            if (btn) {
                this.showView(btn.dataset.view);
            }
        });

        // Settings actions
        document.getElementById('categories').addEventListener('click', (e) => {
            if (e.target.closest('#resetProgress')) {
                if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                    this.progress = {};
                    this.saveProgress();
                    this.updateOverallProgress();
                    this.renderSettingsView();
                }
            }
            if (e.target.closest('#exportData')) {
                const data = JSON.stringify(this.progress, null, 2);
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'rc-progress-backup.json';
                a.click();
                URL.revokeObjectURL(url);
            }
        });
    }

    // ===== Service Worker =====
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('SW registered:', reg.scope))
                .catch(err => console.log('SW registration failed:', err));
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new RangerChallengeApp();
});
