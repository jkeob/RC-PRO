// Ranger Challenge App - Main Application Logic

class RangerChallengeApp {
  constructor() {
    this.currentView = 'home';
    this.currentCategory = null;
    this.currentTask = null;
    this.currentMode = 'learn'; // 'learn' or 'test'
    this.currentScenario = 0;
    this.revealedAnswers = {};
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
      const hasLearnTest = task.hasLearnTestMode || task.hasFlashcards;
      return `
        <div class="task-item ${completed ? 'completed' : ''}" data-task="${task.id}">
          <div class="task-checkbox ${completed ? 'checked' : ''}" data-task-toggle="${task.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div class="task-info">
            <div class="task-title">${task.title}</div>
            <div class="task-time">${task.timeStandard}${hasLearnTest ? ' • <span class="learn-test-badge">Learn/Test</span>' : ''}</div>
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

    // Check if this task has Learn/Test mode
    if (task.hasLearnTestMode) {
      this.renderLearnTestTask(task, container, completed);
      return;
    }

    // Check if this task has flashcards
    if (task.hasFlashcards) {
      this.renderFlashcardTask(task, container, completed);
      return;
    }

    // Standard task rendering
    this.renderStandardTask(task, container, completed);
  }

  renderStandardTask(task, container, completed) {
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

  renderLearnTestTask(task, container, completed) {
    const modeToggle = `
      <div class="learn-test-toggle">
        <button class="mode-btn ${this.currentMode === 'learn' ? 'active' : ''}" data-mode="learn">
          📚 Learn
        </button>
        <button class="mode-btn ${this.currentMode === 'test' ? 'active' : ''}" data-mode="test">
          ✍️ Test
        </button>
      </div>
    `;

    let contentHtml = '';
    if (this.currentMode === 'learn') {
      contentHtml = this.renderLearnMode(task);
    } else {
      contentHtml = this.renderTestMode(task);
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

      ${task.noGoCriteria ? `
        <div class="no-go-warning">
          <strong>⚠️ NO-GO:</strong> ${task.noGoCriteria}
        </div>
      ` : ''}

      ${modeToggle}
      
      <div class="mode-content">
        ${contentHtml}
      </div>

      <button class="mark-complete-btn ${completed ? 'completed' : ''}" data-complete-task="${task.id}">
        ${completed ? '✓ Completed' : 'Mark as Complete'}
      </button>
    `;
  }

  renderLearnMode(task) {
    const learn = task.learnContent;
    if (!learn) return '<p>No learn content available.</p>';

    let html = '';

    // Purpose
    if (learn.purpose) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Purpose</h3>
          <p>${learn.purpose}</p>
        </div>
      `;
    }

    // Call Flow (MEDEVAC)
    if (learn.callFlow) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Call Flow</h3>
          <ol class="step-list">
            ${learn.callFlow.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
    }

    // Format (MEDEVAC 9-Line)
    if (learn.format) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">9-Line Format</h3>
          <div class="format-grid">
            ${learn.format.map(line => `
              <div class="format-line">
                <div class="line-header">
                  <span class="line-number">Line ${line.line}</span>
                  <strong>${line.name}</strong>
                </div>
                ${line.description ? `<p class="line-desc">${line.description}</p>` : ''}
                ${line.codes ? `
                  <ul class="code-list">
                    ${line.codes.map(code => `<li>${code}</li>`).join('')}
                  </ul>
                ` : ''}
                ${line.example ? `<div class="example">Example: <code>${line.example}</code></div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Three Transmissions (old format - keep for backwards compatibility)
    if (learn.threeTransmissions) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Three Transmissions (Grid Mission)</h3>
          <div class="format-grid">
            ${learn.threeTransmissions.grid.map(t => `
              <div class="format-line">
                <div class="line-header">
                  <span class="line-number">${t.transmission}</span>
                  <strong>${t.name}</strong>
                </div>
                <div class="example">${t.example}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Overview (CFF)
    if (learn.overview) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">📋 Overview — The CFF Process</h3>
          <ol class="step-list">
            ${learn.overview.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
    }

    // Transmission Details (new CFF format)
    if (learn.transmissionDetails) {
      const td = learn.transmissionDetails;
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">${td.first.title}</h3>
          <ul class="element-list">
            ${td.first.elements.map(e => `<li>${e}</li>`).join('')}
          </ul>
          <div class="examples-box">
            <div class="example"><strong>Grid:</strong> <code>${td.first.gridExample}</code></div>
            <div class="example"><strong>Polar:</strong> <code>${td.first.polarExample}</code></div>
          </div>
        </div>

        <div class="detail-section">
          <h3 class="detail-section-title">${td.second.title}</h3>
          <ul class="element-list">
            ${td.second.elements.map(e => `<li>${e}</li>`).join('')}
          </ul>
          <div class="examples-box">
            <div class="example"><strong>Grid:</strong> <code>${td.second.gridExample}</code></div>
            <div class="example"><strong>Polar:</strong> <code>${td.second.polarExample}</code></div>
          </div>
        </div>

        <div class="detail-section">
          <h3 class="detail-section-title">${td.third.title}</h3>
          <ul class="element-list">
            ${td.third.elements.map(e => `<li>${e}</li>`).join('')}
          </ul>
          <div class="example"><strong>Example:</strong> <code>${td.third.example}</code></div>
        </div>
      `;
    }

    // MTO Example
    if (learn.mtoExample) {
      html += `
        <div class="detail-section mto-section">
          <h3 class="detail-section-title">📞 Message To Observer (MTO)</h3>
          <p>${learn.messageToObserver}</p>
          <div class="example mto-example"><code>${learn.mtoExample}</code></div>
        </div>
      `;
    }

    // Effects Options
    if (learn.effectsOptions) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">📊 Battle Damage Assessment (Effects)</h3>
          <ul class="element-list">
            ${learn.effectsOptions.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Preparation steps
    if (learn.preparation) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Preparation</h3>
          <ol class="step-list">
            ${learn.preparation.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      `;
    }

    // Adjust Fire (CFF)
    if (learn.adjustFire) {
      const af = learn.adjustFire;
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">🎯 Adjust Fire — Bracketing</h3>
          ${af.explanation ? `<p class="section-intro">${af.explanation}</p>` : ''}
          
          <div class="adjust-subsection">
            <h4>Spotting</h4>
            <p>${af.spotting}</p>
            ${af.spottingExample ? `<div class="example"><strong>Example:</strong> ${af.spottingExample}</div>` : ''}
          </div>

          ${af.correctionFormat ? `
            <div class="adjust-subsection">
              <h4>Correction Format</h4>
              <div class="example"><code>${af.correctionFormat}</code></div>
              ${af.correctionExample ? `<div class="example"><strong>Example:</strong> <code>${af.correctionExample}</code></div>` : ''}
            </div>
          ` : ''}
          
          <div class="bracket-guide">
            <h4>Bracket Guide</h4>
            <ul>
              ${af.bracketGuide.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          ${af.keyRule ? `<div class="key-rule">${af.keyRule}</div>` : ''}

          ${af.shotProcedure ? `
            <div class="adjust-subsection">
              <h4>Shot/Splash Procedure</h4>
              <ol class="shot-procedure">
                ${af.shotProcedure.map(s => `<li>${s}</li>`).join('')}
              </ol>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Danger Close (CFF)
    if (learn.dangerClose) {
      html += `
        <div class="detail-section danger-close-section">
          <h3 class="detail-section-title">⚠️ DANGER CLOSE</h3>
          <p class="danger-definition">${learn.dangerClose.definition}</p>
          
          <div class="danger-distances">
            <h4>Danger Close Distances</h4>
            <table class="distance-table">
              <tr><th>Weapon System</th><th>Distance</th></tr>
              ${learn.dangerClose.distances.map(d => `<tr><td>${d.weapon}</td><td>${d.distance}</td></tr>`).join('')}
            </table>
          </div>
          
          <div class="danger-procedure">
            <h4>Procedure</h4>
            <ol>
              ${learn.dangerClose.procedure.map(p => `<li>${p}</li>`).join('')}
            </ol>
          </div>
          
          <div class="danger-warnings">
            ${learn.dangerClose.warnings.map(w => `<div class="warning-item">${w}</div>`).join('')}
          </div>
        </div>
      `;
    }

    // Equipment (Radio)
    if (learn.equipment) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Equipment Needed</h3>
          <ul>
            ${learn.equipment.map(e => `<li>${e}</li>`).join('')}
          </ul>
          ${learn.batteryCheck ? `<p class="tip"><strong>Battery Tip:</strong> ${learn.batteryCheck}</p>` : ''}
        </div>
      `;
    }

    // Steps (Radio setup)
    if (learn.steps) {
      html += `
        <div class="detail-section">
          <h3 class="detail-section-title">Setup Steps</h3>
          ${learn.steps.map(step => `
            <div class="setup-step">
              <h4>${step.title}</h4>
              <ol class="substep-list">
                ${step.substeps.map(sub => `<li>${sub}</li>`).join('')}
              </ol>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Tips
    if (learn.tips) {
      html += `
        <div class="detail-section tips-section">
          <h3 class="detail-section-title">💡 Tips for Success</h3>
          <ul>
            ${learn.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Common Errors
    if (learn.commonErrors) {
      html += `
        <div class="detail-section errors-section">
          <h3 class="detail-section-title">⚠️ Common Errors</h3>
          <ul>
            ${learn.commonErrors.map(err => `<li>${err}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Troubleshooting (Radio)
    if (learn.troubleshooting) {
      html += `
        <div class="detail-section errors-section">
          <h3 class="detail-section-title">🔧 Troubleshooting</h3>
          <ul>
            ${learn.troubleshooting.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Pocket Card
    if (learn.pocketCard) {
      html += `
        <div class="detail-section pocket-card">
          <h3 class="detail-section-title">📋 Pocket Card</h3>
          <div class="card-content">
            ${learn.pocketCard.map(item => `<div class="card-line">${item}</div>`).join('')}
          </div>
        </div>
      `;
    }

    return html;
  }

  renderTestMode(task) {
    const scenarios = task.testScenarios;
    if (!scenarios || scenarios.length === 0) {
      return '<p>No practice scenarios available for this task.</p>';
    }

    const scenario = scenarios[this.currentScenario];
    const isRevealed = this.revealedAnswers[`${task.id}-${scenario.id}`];

    let answerHtml = '';
    if (task.id === 'm1-medevac') {
      answerHtml = this.renderMedevacAnswer(scenario, isRevealed);
    } else if (task.id === 'p1-cff') {
      answerHtml = this.renderCffAnswer(scenario, isRevealed);
    }

    return `
      <div class="scenario-nav">
        <button class="scenario-nav-btn" data-scenario-prev ${this.currentScenario === 0 ? 'disabled' : ''}>← Prev</button>
        <span class="scenario-counter">${this.currentScenario + 1} / ${scenarios.length}</span>
        <button class="scenario-nav-btn" data-scenario-next ${this.currentScenario === scenarios.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>

      <div class="scenario-card">
        <h4 class="scenario-title">${scenario.title}</h4>
        <p class="scenario-situation">${scenario.situation}</p>
        ${scenario.yourCallSign ? `<p class="scenario-info"><strong>Your Call Sign:</strong> ${scenario.yourCallSign}</p>` : ''}
        ${scenario.yourFreq ? `<p class="scenario-info"><strong>Your Frequency:</strong> ${scenario.yourFreq}</p>` : ''}
      </div>

      <div class="worksheet-section">
        <h4>📝 Build Your Response</h4>
        <p class="worksheet-instructions">Practice building your response, then check the answer key below.</p>
      </div>

      <button class="reveal-btn ${isRevealed ? 'revealed' : ''}" data-reveal-answer="${task.id}-${scenario.id}">
        ${isRevealed ? '✓ Answer Revealed' : '🔓 Reveal Answer Key'}
      </button>

      <div class="answer-section ${isRevealed ? 'visible' : 'hidden'}">
        <h4>✅ Answer Key</h4>
        ${answerHtml}
      </div>
    `;
  }

  renderMedevacAnswer(scenario, isRevealed) {
    const a = scenario.answer;
    return `
      <div class="answer-grid">
        <div class="answer-line"><span class="line-label">Line 1:</span> ${a.line1}</div>
        <div class="answer-line"><span class="line-label">Line 2:</span> ${a.line2}</div>
        <div class="answer-line"><span class="line-label">Line 3:</span> ${a.line3}</div>
        <div class="answer-line"><span class="line-label">Line 4:</span> ${a.line4}</div>
        <div class="answer-line"><span class="line-label">Line 5:</span> ${a.line5}</div>
        <div class="answer-line highlight">— "OVER" —</div>
        <div class="answer-line"><span class="line-label">Line 6:</span> ${a.line6}</div>
        <div class="answer-line"><span class="line-label">Line 7:</span> ${a.line7}</div>
        <div class="answer-line"><span class="line-label">Line 8:</span> ${a.line8}</div>
        <div class="answer-line"><span class="line-label">Line 9:</span> ${a.line9}</div>
      </div>
    `;
  }

  renderCffAnswer(scenario, isRevealed) {
    const a = scenario.answer;
    return `
      <div class="answer-grid">
        <div class="answer-line"><span class="line-label">1st Trans:</span> ${a.first}</div>
        <div class="answer-line"><span class="line-label">2nd Trans:</span> ${a.second}</div>
        <div class="answer-line"><span class="line-label">3rd Trans:</span> ${a.third}</div>
        <div class="answer-line highlight"><span class="line-label">MTO:</span> ${a.mto}</div>
        <div class="answer-line"><span class="line-label">Adjustments:</span> ${a.adjustments}</div>
        <div class="answer-line highlight"><span class="line-label">EOM:</span> ${a.eom}</div>
      </div>
    `;
  }

  renderFlashcardTask(task, container, completed) {
    const flashcards = task.flashcards;
    if (!flashcards || flashcards.length === 0) {
      this.renderStandardTask(task, container, completed);
      return;
    }

    const currentCard = this.currentScenario % flashcards.length;
    const card = flashcards[currentCard];
    const isFlipped = this.revealedAnswers[`flashcard-${task.id}-${currentCard}`];

    container.innerHTML = `
      <div class="detail-header">
        <h2 class="detail-title">${task.title}</h2>
        <div class="detail-meta">
          <span class="detail-badge">🎴 Flashcards</span>
        </div>
      </div>

      <div class="flashcard-nav">
        <button class="scenario-nav-btn" data-flashcard-prev ${currentCard === 0 ? 'disabled' : ''}>← Prev</button>
        <span class="scenario-counter">${currentCard + 1} / ${flashcards.length}</span>
        <button class="scenario-nav-btn" data-flashcard-next ${currentCard === flashcards.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>

      <div class="flashcard ${isFlipped ? 'flipped' : ''}" data-flip-card="${task.id}-${currentCard}">
        <div class="flashcard-front">
          <h3>${card.name}</h3>
          <p class="flashcard-type">${card.type}</p>
          <p class="flashcard-hint">Tap to reveal details</p>
        </div>
        <div class="flashcard-back">
          <h4>${card.name}</h4>
          <div class="flashcard-details">
            ${card.color ? `<div><strong>Color/Markings:</strong> ${card.color}</div>` : ''}
            ${card.fuseDelay ? `<div><strong>Fuse Delay:</strong> ${card.fuseDelay}</div>` : ''}
            ${card.casualtyRadius ? `<div><strong>Casualty Radius:</strong> ${card.casualtyRadius}</div>` : ''}
            ${card.killRadius ? `<div><strong>Kill Radius:</strong> ${card.killRadius}</div>` : ''}
            ${card.weight ? `<div><strong>Weight:</strong> ${card.weight}</div>` : ''}
            ${card.duration ? `<div><strong>Duration:</strong> ${card.duration}</div>` : ''}
            ${card.effect ? `<div><strong>Effect:</strong> ${card.effect}</div>` : ''}
            ${card.burnTime ? `<div><strong>Burn Time:</strong> ${card.burnTime}</div>` : ''}
            ${card.burnTemp ? `<div><strong>Burn Temp:</strong> ${card.burnTemp}</div>` : ''}
            ${card.use ? `<div><strong>Use:</strong> ${card.use}</div>` : ''}
            ${card.warning ? `<div class="warning"><strong>⚠️ Warning:</strong> ${card.warning}</div>` : ''}
            ${card.safetyRadius ? `<div><strong>Safety:</strong> ${card.safetyRadius}</div>` : ''}
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h3 class="detail-section-title">Employment Steps</h3>
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
              <span class="settings-item-value">2.0.0 RC</span>
            </div>
            <div class="settings-item">
              <span class="settings-item-label">Based On</span>
              <span class="settings-item-value">Ranger Challenge Training</span>
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
    this.currentMode = 'learn'; // Reset to learn mode
    this.currentScenario = 0; // Reset scenario
    this.revealedAnswers = {}; // Reset revealed answers

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
      // Complete button
      const completeBtn = e.target.closest('[data-complete-task]');
      if (completeBtn) {
        const taskId = completeBtn.dataset.completeTask;
        this.toggleTaskCompletion(taskId);
        this.renderTaskDetail(this.currentTask);
        this.renderCategories();
        return;
      }

      // Mode toggle (Learn/Test)
      const modeBtn = e.target.closest('[data-mode]');
      if (modeBtn) {
        this.currentMode = modeBtn.dataset.mode;
        this.currentScenario = 0;
        this.revealedAnswers = {};
        this.renderTaskDetail(this.currentTask);
        return;
      }

      // Scenario navigation
      if (e.target.closest('[data-scenario-prev]')) {
        if (this.currentScenario > 0) {
          this.currentScenario--;
          this.renderTaskDetail(this.currentTask);
        }
        return;
      }
      if (e.target.closest('[data-scenario-next]')) {
        const scenarios = this.currentTask.testScenarios;
        if (scenarios && this.currentScenario < scenarios.length - 1) {
          this.currentScenario++;
          this.renderTaskDetail(this.currentTask);
        }
        return;
      }

      // Reveal answer
      const revealBtn = e.target.closest('[data-reveal-answer]');
      if (revealBtn) {
        const key = revealBtn.dataset.revealAnswer;
        this.revealedAnswers[key] = true;
        this.renderTaskDetail(this.currentTask);
        return;
      }

      // Flashcard flip
      const flashcard = e.target.closest('[data-flip-card]');
      if (flashcard) {
        const key = `flashcard-${flashcard.dataset.flipCard}`;
        this.revealedAnswers[key] = !this.revealedAnswers[key];
        this.renderTaskDetail(this.currentTask);
        return;
      }

      // Flashcard navigation
      if (e.target.closest('[data-flashcard-prev]')) {
        if (this.currentScenario > 0) {
          this.currentScenario--;
          this.renderTaskDetail(this.currentTask);
        }
        return;
      }
      if (e.target.closest('[data-flashcard-next]')) {
        const flashcards = this.currentTask.flashcards;
        if (flashcards && this.currentScenario < flashcards.length - 1) {
          this.currentScenario++;
          this.renderTaskDetail(this.currentTask);
        }
        return;
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
