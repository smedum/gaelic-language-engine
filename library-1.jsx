<!DOCTYPE html>
<html lang="gd">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Leabharlann Fuaim Ghàidhlig | Scottish Gaelic Audio Library</title>
  <meta name="color-scheme" content="light dark" />
  <style>
    /* ========= Design System (Easily retheme for other languages) ========= */
    :root {
      /* Brand */
      --brand-ink: #0e2a3a;          /* deep loch blue */
      --brand-accent: #6b4a8c;       /* heather purple */
      --brand-emerald: #2f6f4e;      /* Highland green */
      --brand-crimson: #c2413b;      /* warm red for recording */

      /* Surface & Border */
      --surface-0: #ffffff;
      --surface-1: #f6f8fb;
      --surface-glass: rgba(255, 255, 255, 0.7);
      --border: #e6ecf3;

      /* Text */
      --text-1: #1c2430;
      --text-2: #5e6b7a;

      /* Shadows & Radii */
      --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
      --shadow-md: 0 6px 18px rgba(15, 23, 42, 0.10);
      --shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.14);
      --radius-sm: 10px;
      --radius-md: 14px;
      --radius-lg: 22px;

      /* Feedback */
      --success: #2f7d3d;
      --warning: #b7791f;
      --error: #b42318;

      /* Focus */
      --focus: #4f46e5;

      /* Transitions */
      --ease: cubic-bezier(.22,1,.36,1);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --surface-0: #0b1220;
        --surface-1: #0f172a;
        --surface-glass: rgba(12, 17, 31, 0.6);
        --border: #1f2a44;
        --text-1: #e7edf7;
        --text-2: #9aa5b1;
        --shadow-sm: 0 1px 2px rgba(0,0,0,.4);
        --shadow-md: 0 6px 18px rgba(0,0,0,.45);
        --shadow-lg: 0 16px 40px rgba(0,0,0,.55);
      }
    }

    /* ========= Global ========= */
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      color: var(--text-1);
      background:
        radial-gradient(1200px 500px at 10% -10%, #c6dff6 0%, transparent 60%),
        radial-gradient(1200px 500px at 110% -10%, #cfbde6 0%, transparent 60%),
        var(--surface-1);
      min-height: 100dvh;
      line-height: 1.55;
    }
    .container {
      width: min(1100px, 92vw);
      margin: 0 auto;
      padding-block: 24px 64px;
    }
    /* Accessible focus */
    :focus-visible {
      outline: 2px solid var(--focus);
      outline-offset: 3px;
      border-radius: 6px;
    }

    /* ========= Header ========= */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: saturate(1.2) blur(12px);
      background: linear-gradient(180deg, var(--surface-glass), transparent 70%);
      border-bottom: 1px solid var(--border);
    }
    .site-header .inner {
      width: min(1100px, 92vw);
      margin: 0 auto;
      padding: 14px 0;
      display: flex;
      align-items: center;
      gap: 18px;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--brand-ink);
      text-decoration: none;
    }
    .brand-logo {
      width: 36px; height: 36px;
      display: grid; place-items: center;
      background: conic-gradient(from 220deg, #27506b, #6b4a8c, #2f6f4e);
      color: #fff; font-weight: 800; border-radius: 10px;
      box-shadow: var(--shadow-md);
    }
    .brand h1 {
      font-size: clamp(1.05rem, 1.4vw + .7rem, 1.35rem);
      margin: 0; letter-spacing: .2px;
    }
    .subtitle {
      color: var(--text-2);
      font-size: .9rem;
    }

    /* ========= Navigation Tabs ========= */
    .nav-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .nav-tab {
      appearance: none;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text-2);
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all .2s var(--ease);
    }
    .nav-tab:hover {
      background: var(--surface-0);
      color: var(--text-1);
    }
    .nav-tab.active {
      background: var(--brand-ink);
      color: #fff;
      border-color: var(--brand-ink);
    }

    /* ========= Sections ========= */
    .section {
      margin-top: 26px;
      background: var(--surface-0);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      overflow: clip;
    }
    .section[hidden] { display: none; }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 20px;
      border-bottom: 1px solid var(--border);
      background:
        linear-gradient(180deg, rgba(255,255,255,.6), rgba(255,255,255,0));
    }
    .section-title {
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .section-title h2 {
      margin: 0;
      font-size: clamp(1.05rem, 1.3vw + .8rem, 1.45rem);
      color: var(--brand-ink);
    }
    .section-body { padding: 18px; }

    /* ========= Controls & Buttons ========= */
    .toolbar {
      display: flex; gap: 10px; flex-wrap: wrap; align-items: center;
    }
    .btn {
      appearance: none; border: 1px solid var(--border);
      background: var(--surface-0);
      color: var(--text-1);
      padding: 12px 16px;
      border-radius: 12px;
      font-weight: 600;
      letter-spacing: .2px;
      display: inline-flex; align-items: center; gap: 10px;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: transform .2s var(--ease), box-shadow .2s var(--ease), background .2s;
    }
    .btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
    .btn:active { transform: translateY(0); }
    .btn[disabled] { opacity: .55; pointer-events: none; }
    .btn-primary { background: linear-gradient(180deg, #2c5f7d, #234b61); color: #fff; border-color: transparent; }
    .btn-danger { background: linear-gradient(180deg, #c44536, #a8372a); color:#fff; border-color: transparent; }
    .btn-success { background: linear-gradient(180deg, #2f7d3d, #256432); color:#fff; border-color: transparent; }
    .btn-ghost { background: transparent; }
    .btn-icon {
      width: 44px; height: 44px; padding: 0;
      justify-content: center; font-size: 18px;
      border-radius: 50%;
    }

    /* Recording indicator */
    .rec-indicator {
      display: none; align-items: center; gap: 10px;
      color: var(--brand-crimson); font-weight: 700;
    }
    .rec-indicator.active { display: inline-flex; }
    .dot {
      width: 12px; height: 12px; border-radius: 50%;
      background: var(--brand-crimson);
      box-shadow: 0 0 0 0 rgba(194, 65, 59, .6);
      animation: pulse 1.6s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(194, 65, 59, .6); }
      70% { box-shadow: 0 0 0 12px rgba(194, 65, 59, 0); }
      100% { box-shadow: 0 0 0 0 rgba(194, 65, 59, 0); }
    }

    /* Inputs */
    .form-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 14px;
    }
    .field {
      grid-column: span 12;
      display: grid; gap: 8px;
    }
    .field label { font-weight: 700; color: var(--text-1); }
    .req { color: var(--error); margin-left: 4px; }
    .input, .select, .textarea {
      width: 100%;
      padding: 12px 14px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--surface-0);
      color: var(--text-1);
      transition: border .2s var(--ease), box-shadow .2s var(--ease);
    }
    .input:focus, .select:focus, .textarea:focus {
      border-color: var(--brand-accent);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--brand-accent) 20%, transparent);
      outline: none;
    }
    .textarea { min-height: 90px; resize: vertical; }

    @media (min-width: 720px) {
      .field.sm-6 { grid-column: span 6; }
      .field.sm-4 { grid-column: span 4; }
    }

    /* Audio player container */
    .audio-wrap {
      border: 1px dashed var(--border);
      border-radius: var(--radius-md);
      padding: 12px;
      background: color-mix(in oklab, var(--surface-0) 70%, transparent);
      display: none;
    }
    .audio-wrap.active { display: block; }

    /* Library controls */
    .filters {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    @media (min-width: 800px) {
      .filters {
        grid-template-columns: 1.4fr .9fr .9fr .9fr;
      }
    }

    .search {
      display: flex; align-items: center; gap: 10px;
      border: 1px solid var(--border);
      background: var(--surface-0);
      border-radius: 12px; padding: 10px 12px;
    }
    .search input {
      border: none; outline: none; width: 100%;
      background: transparent; color: var(--text-1);
      font-size: 1rem;
    }

    /* Cards grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 18px; margin-top: 16px;
    }
    .card {
      border: 1px solid var(--border);
      background: var(--surface-0);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform .2s var(--ease), box-shadow .2s var(--ease), border-color .2s;
      overflow: hidden;
    }
    .card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); border-color: color-mix(in srgb, var(--brand-ink) 18%, var(--border)); }
    .card-inner { padding: 16px; display: grid; gap: 12px; }
    .title { font-weight: 800; color: var(--brand-ink); font-size: 1.25rem; }
    .subtitle-translation { color: var(--text-2); font-style: italic; }

    .tags { display: flex; gap: 8px; flex-wrap: wrap; }
    .tag {
      font-size: .82rem; font-weight: 700;
      padding: 6px 10px; border-radius: 999px;
      border: 1px solid var(--border);
      background: color-mix(in oklab, var(--surface-0) 70%, transparent);
    }
    .tag.dialect { color: var(--brand-ink); background: color-mix(in srgb, #e6f3ff 70%, var(--surface-0)); }
    .tag.category { color: var(--brand-accent); background: color-mix(in srgb, #f0e6ff 70%, var(--surface-0)); }

    .meta { color: var(--text-2); font-size: .92rem; }
    .notes {
      background: color-mix(in srgb, var(--surface-1) 50%, transparent);
      border: 1px solid var(--border);
      padding: 10px 12px;
      border-radius: 10px;
      color: var(--text-1);
      font-size: .95rem;
    }

    .card-actions { display: flex; gap: 8px; }
    .btn-small { padding: 10px 12px; border-radius: 10px; font-size: .92rem; }

    /* Empty state */
    .empty {
      text-align: center; color: var(--text-2);
      padding: 40px 10px;
    }
    .empty-emoji { font-size: 56px; opacity: .5; }

    /* Toast */
    .toast {
      position: fixed; right: 16px; bottom: 16px;
      display: grid; gap: 10px;
      z-index: 100;
    }
    .toast .item {
      background: var(--surface-0);
      border: 1px solid var(--border);
      border-left: 6px solid var(--success);
      padding: 12px 14px;
      border-radius: 12px;
      color: var(--text-1);
      box-shadow: var(--shadow-md);
      animation: slideIn .28s var(--ease);
      max-width: min(90vw, 360px);
    }
    .toast .item.error { border-left-color: var(--error); }
    @keyframes slideIn {
      from { transform: translateY(10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Modal (confirm delete) */
    .modal {
      position: fixed; inset: 0; display: none;
      place-items: center; z-index: 120;
      background: rgba(0,0,0,.4);
      padding: 16px;
    }
    .modal.active { display: grid; }
    .modal-card {
      width: min(520px, 92vw);
      background: var(--surface-0);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      padding: 18px;
    }
    .modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 14px; }

    /* ========= LEARNER'S SECTION STYLES ========= */
    .learner-intro {
      background: linear-gradient(135deg, color-mix(in srgb, var(--brand-accent) 10%, transparent), color-mix(in srgb, var(--brand-emerald) 10%, transparent));
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: 20px;
      margin-bottom: 20px;
    }
    .learner-intro h3 {
      margin-top: 0;
      color: var(--brand-accent);
    }

    /* IPA Guide */
    .ipa-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .ipa-card {
      border: 1px solid var(--border);
      background: var(--surface-0);
      border-radius: var(--radius-md);
      padding: 14px;
      transition: all .2s var(--ease);
    }
    .ipa-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
    .ipa-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .ipa-emoji {
      font-size: 2rem;
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      background: color-mix(in srgb, var(--brand-accent) 10%, transparent);
      border-radius: 12px;
    }
    .ipa-info {
      flex: 1;
    }
    .ipa-symbol {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--brand-ink);
      font-family: 'Courier New', monospace;
    }
    .ipa-desc {
      font-size: .88rem;
      color: var(--text-2);
    }
    .ipa-examples {
      background: color-mix(in srgb, var(--surface-1) 40%, transparent);
      border-radius: 8px;
      padding: 10px;
      font-size: .92rem;
    }
    .ipa-examples strong {
      color: var(--brand-accent);
    }

    /* Pronunciation Tips */
    .tips-grid {
      display: grid;
      gap: 14px;
      margin-top: 16px;
    }
    .tip-card {
      border: 1px solid var(--border);
      background: var(--surface-0);
      border-radius: var(--radius-md);
      padding: 16px;
      display: flex;
      gap: 14px;
      align-items: start;
    }
    .tip-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }
    .tip-content h4 {
      margin: 0 0 8px 0;
      color: var(--brand-ink);
    }
    .tip-content p {
      margin: 0;
      color: var(--text-2);
      line-height: 1.6;
    }

    /* Interactive Practice */
    .practice-card {
      border: 2px solid var(--brand-accent);
      background: color-mix(in srgb, var(--brand-accent) 5%, var(--surface-0));
      border-radius: var(--radius-md);
      padding: 20px;
      margin-top: 16px;
    }
    .practice-word {
      text-align: center;
      margin: 20px 0;
    }
    .practice-gaelic {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--brand-ink);
      margin-bottom: 8px;
    }
    .practice-translation {
      font-size: 1.2rem;
      color: var(--text-2);
      font-style: italic;
    }
    .practice-phonetic {
      font-size: 1.1rem;
      color: var(--brand-accent);
      font-family: 'Courier New', monospace;
      margin-top: 8px;
    }
    .practice-controls {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    /* Waveform visualization */
    .waveform {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
      background: color-mix(in srgb, var(--surface-1) 30%, transparent);
      border-radius: 8px;
      padding: 10px;
      margin: 12px 0;
    }
    .wave-bar {
      width: 4px;
      background: var(--brand-accent);
      border-radius: 2px;
      transition: height .15s ease;
      opacity: 0.6;
    }
    .wave-bar.active {
      opacity: 1;
      background: var(--brand-emerald);
    }

    /* Stress pattern indicator */
    .stress-pattern {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;
      margin: 12px 0;
    }
    .syllable {
      padding: 8px 14px;
      border-radius: 8px;
      background: color-mix(in srgb, var(--surface-1) 50%, transparent);
      border: 2px solid var(--border);
      font-weight: 600;
      transition: all .2s ease;
    }
    .syllable.stressed {
      background: var(--brand-accent);
      color: white;
      border-color: var(--brand-accent);
      transform: scale(1.15);
      font-size: 1.1em;
    }

    /* Broad/Slender indicator */
    .consonant-type {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: .85rem;
      font-weight: 700;
      margin: 0 4px;
    }
    .consonant-type.broad {
      background: color-mix(in srgb, #ff9800 20%, transparent);
      color: #e65100;
    }
    .consonant-type.slender {
      background: color-mix(in srgb, #2196f3 20%, transparent);
      color: #0d47a1;
    }

  </style>
</head>
<body>
  <!-- Sticky Header -->
  <header class="site-header" role="banner">
    <div class="inner">
      <a class="brand" href="#" aria-label="Home">
        <div class="brand-logo" aria-hidden="true">G</div>
        <div>
          <h1>Leabharlann Fuaim Ghàidhlig</h1>
          <div class="subtitle">Scottish Gaelic Audio Digital Library</div>
        </div>
      </a>
      <div class="toolbar" aria-label="Global actions">
        <button id="exportBtn" class="btn btn-ghost" title="Export library JSON">⬇️ Export</button>
        <label class="btn btn-ghost" title="Import library JSON">
          ⬆️ Import
          <input id="importInput" type="file" accept="application/json" hidden />
        </label>
        <button id="clearAllBtn" class="btn btn-ghost" title="Clear all data">🧹 Clear</button>
      </div>
    </div>
  </header>

  <main class="container" role="main">
    <!-- Navigation -->
    <nav class="nav-tabs" role="tablist">
      <button class="nav-tab active" data-tab="record" role="tab" aria-selected="true">🎙️ Record</button>
      <button class="nav-tab" data-tab="library" role="tab" aria-selected="false">📚 Library</button>
      <button class="nav-tab" data-tab="learner" role="tab" aria-selected="false">🎓 Learner's Guide</button>
    </nav>

    <!-- Recording Section -->
    <section id="recordSection" class="section" aria-labelledby="rec-title">
      <div class="section-header">
        <div class="section-title">
          <h2 id="rec-title">Clàr Fuaim | Record Audio</h2>
          <span class="rec-indicator" id="recIndicator"><span class="dot" aria-hidden="true"></span> Recording…</span>
        </div>
        <div class="toolbar">
          <button id="startBtn" class="btn btn-primary" aria-pressed="false">🎙️ Start | Tòisich</button>
          <button id="stopBtn" class="btn btn-danger" disabled>⏹️ Stop | Stad</button>
          <button id="saveBtn" class="btn btn-success" disabled>💾 Save | Sàbhail</button>
          <button id="discardBtn" class="btn" disabled>🗑️ Discard</button>
        </div>
      </div>
      <div class="section-body">
        <div id="audioWrap" class="audio-wrap" aria-live="polite">
          <audio id="audioPlayer" controls preload="metadata" style="width:100%"></audio>
        </div>

        <!-- Metadata -->
        <form id="metaForm" class="form-grid" aria-label="Recording details" hidden>
          <div class="field sm-6">
            <label for="gaelicWord">Facal/Abairt Ghàidhlig | Gaelic Word/Phrase <span class="req">*</span></label>
            <input id="gaelicWord" class="input" type="text" required placeholder="e.g., Madainn mhath" />
          </div>
          <div class="field sm-6">
            <label for="englishTranslation">Eadar-theangachadh | English Translation <span class="req">*</span></label>
            <input id="englishTranslation" class="input" type="text" required placeholder="e.g., Good morning" />
          </div>
          <div class="field sm-4">
            <label for="dialect">Dualchainnt | Speaker Dialect <span class="req">*</span></label>
            <select id="dialect" class="select" required>
              <option value="">Select…</option>
              <option>Lewis</option>
              <option>Skye</option>
              <option>Uist</option>
              <option>Barra</option>
              <option>Mainland (Sutherland/Ross-shire)</option>
              <option>Canadian (Nova Scotia)</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field sm-4">
            <label for="category">Roinn-seòrsa | Category <span class="req">*</span></label>
            <select id="category" class="select" required>
              <option value="">Select…</option>
              <option>Greetings</option>
              <option>Nature</option>
              <option>Weather</option>
              <option>Seafaring</option>
              <option>Animals</option>
              <option>Family</option>
              <option>Storytelling</option>
              <option>Songs</option>
              <option>Daily Life</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field sm-4">
            <label for="recordedOn">Date</label>
            <input id="recordedOn" class="input" type="date" />
          </div>
          <div class="field sm-6">
            <label for="speakerDetails">Fiosrachadh mu neach-labhairt | Speaker Details (optional)</label>
            <textarea id="speakerDetails" class="textarea" placeholder="Name, age, region…"></textarea>
          </div>
          <div class="field sm-6">
            <label for="additionalNotes">Notaichean | Notes (optional)</label>
            <textarea id="additionalNotes" class="textarea" placeholder="Context, usage, pronunciation notes…"></textarea>
          </div>
          <div class="toolbar" style="margin-top:6px">
            <button type="button" id="submitMetaBtn" class="btn btn-success">✅ Save to Library</button>
            <button type="button" id="cancelMetaBtn" class="btn">❌ Cancel</button>
          </div>
        </form>
      </div>
    </section>

    <!-- Library Section -->
    <section id="librarySection" class="section" aria-labelledby="lib-title" hidden>
      <div class="section-header">
        <div class="section-title">
          <h2 id="lib-title">📚 Leabharlann | Library</h2>
          <span id="libCount" class="subtitle">0 recordings preserved</span>
        </div>
        <div class="filters" aria-label="Search and filters">
          <div class="search" role="search">
            🔎
            <input id="searchInput" type="search" placeholder="Search Gaelic, translation, notes…" aria-label="Search library" />
          </div>
          <select id="filterDialect" class="select" aria-label="Filter by dialect">
            <option value="">All dialects</option>
            <option>Lewis</option>
            <option>Skye</option>
            <option>Uist</option>
            <option>Barra</option>
            <option>Mainland (Sutherland/Ross-shire)</option>
            <option>Canadian (Nova Scotia)</option>
            <option>Other</option>
          </select>
          <select id="filterCategory" class="select" aria-label="Filter by category">
            <option value="">All categories</option>
            <option>Greetings</option>
            <option>Nature</option>
            <option>Weather</option>
            <option>Seafaring</option>
            <option>Animals</option>
            <option>Family</option>
            <option>Storytelling</option>
            <option>Songs</option>
            <option>Daily Life</option>
            <option>Other</option>
          </select>
          <select id="sortOrder" class="select" aria-label="Sort">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="gaelic-az">Gaelic A–Z</option>
            <option value="gaelic-za">Gaelic Z–A</option>
          </select>
        </div>
      </div>
      <div class="section-body">
        <div id="grid" class="grid" aria-live="polite"></div>
        <div id="emptyState" class="empty" hidden>
          <div class="empty-emoji">🎙️</div>
          <p>Chan eil clàran ann fhathast — No recordings yet.</p>
          <p>Use "Start | Tòisich" above to create your first entry.</p>
        </div>
      </div>
    </section>

    <!-- Learner's Section -->
    <section id="learnerSection" class="section" aria-labelledby="learner-title" hidden>
      <div class="section-header">
        <div class="section-title">
          <h2 id="learner-title">🎓 Stiùireadh Luchd-ionnsachaidh | Learner's Guide</h2>
        </div>
      </div>
      <div class="section-body">
        <!-- Introduction -->
        <div class="learner-intro">
          <h3>📖 Welcome to Scottish Gaelic Pronunciation</h3>
          <p>Scottish Gaelic has unique sounds that don't exist in English. This guide uses emoji symbols to help you understand the International Phonetic Alphabet (IPA) and master authentic pronunciation.</p>
          <p><strong>Key Concept:</strong> Gaelic consonants can be <span class="consonant-type broad">🔶 Broad (caol)</span> or <span class="consonant-type slender">💎 Slender (leathann)</span> depending on surrounding vowels.</p>
        </div>

        <!-- IPA Guide with Emoji -->
        <h3 style="color: var(--brand-accent); margin-top: 30px;">🗣️ Sound Guide | Stiùireadh Fuaimean</h3>
        <div class="ipa-grid">
          <!-- Vowels -->
          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">😮</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[a]</div>
                <div class="ipa-desc">Open vowel (like "father")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>cat</em> (cat), <em>bàta</em> (boat)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">😊</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ɛ]</div>
                <div class="ipa-desc">Open-mid vowel (like "bed")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>te</em> (tea), <em>beag</em> (small)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">😁</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[i]</div>
                <div class="ipa-desc">Close front vowel (like "see")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>sìth</em> (peace), <em>fìor</em> (true)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🙃</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ɔ]</div>
                <div class="ipa-desc">Open-mid back vowel (like "thought")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>bò</em> (cow), <em>mòr</em> (big)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">😯</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[u]</div>
                <div class="ipa-desc">Close back vowel (like "boot")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>cù</em> (dog), <em>dùn</em> (fort)
            </div>
          </div>

          <!-- Consonants -->
          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">💨</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[x]</div>
                <div class="ipa-desc">Voiceless velar fricative (like "loch")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>loch</em> (lake), <em>ach</em> (but)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🌬️</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ç]</div>
                <div class="ipa-desc">Voiceless palatal fricative (softer "ch")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>cich</em> (breast), <em>nighean</em> (girl)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🎵</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ɣ]</div>
                <div class="ipa-desc">Voiced velar fricative</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>dh</em> in <em>dhachaigh</em> (home)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🌊</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ʃ]</div>
                <div class="ipa-desc">Voiceless postalveolar fricative (like "sh")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>sìos</em> (down), <em>seinn</em> (sing)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🔔</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[ɲ]</div>
                <div class="ipa-desc">Palatal nasal (like Spanish "ñ")</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>cnoc</em> (hill), <em>ainm</em> (name)
            </div>
          </div>

          <div class="ipa-card">
            <div class="ipa-header">
              <div class="ipa-emoji">🎸</div>
              <div class="ipa-info">
                <div class="ipa-symbol">[r]</div>
                <div class="ipa-desc">Trilled "r" (rolled)</div>
              </div>
            </div>
            <div class="ipa-examples">
              <strong>Examples:</strong> <em>ruadh</em> (red), <em>rìgh</em> (king)
            </div>
          </div>
        </div>

        <!-- Pronunciation Tips -->
        <h3 style="color: var(--brand-accent); margin-top: 30px;">💡 Pronunciation Tips | Comhairle Fuaimneachaidh</h3>
        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-icon">🔶</div>
            <div class="tip-content">
              <h4>Broad Consonants (Caol)</h4>
              <p>Consonants surrounded by <strong>a, o, u</strong> are "broad" and pronounced with the back of the tongue. Example: <em>bàta</em> [paːt̪ə] - the 't' is broad.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-icon">💎</div>
            <div class="tip-content">
              <h4>Slender Consonants (Leathann)</h4>
              <p>Consonants surrounded by <strong>e, i</strong> are "slender" and pronounced with the front of the tongue, often with a slight 'y' sound. Example: <em>bìth</em> [piː] - the 'b' is slender.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-icon">⚡</div>
            <div class="tip-content">
              <h4>Stress Patterns</h4>
              <p>In Gaelic, stress almost always falls on the <strong>first syllable</strong> of a word. Example: <em>MAD-ainn mhath</em> (good morning).</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🎭</div>
            <div class="tip-content">
              <h4>Lenition (Sèimheachadh)</h4>
              <p>When you see 'h' after a consonant (like <em>bh, ch, dh, fh, gh, mh, ph, sh, th</em>), the sound changes dramatically. <em>bh</em> becomes [v], <em>mh</em> becomes [v], <em>ch</em> becomes [x] or [ç].</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🌟</div>
            <div class="tip-content">
              <h4>Silent Letters</h4>
              <p>Some letters are silent: <em>fh</em> is always silent (except in <em>fhèin</em>), and <em>dh/gh</em> can be silent or become a soft fricative depending on position.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🎯</div>
            <div class="tip-content">
              <h4>Long vs Short Vowels</h4>
              <p>Vowels with accents (à, è, ì, ò, ù) are <strong>long</strong> - hold them twice as long as short vowels. This changes meaning: <em>bàta</em> (boat) vs <em>bata</em> (stick).</p>
            </div>
          </div>
        </div>

        <!-- Interactive Practice -->
        <h3 style="color: var(--brand-accent); margin-top: 30px;">🎯 Interactive Practice | Cleachdadh Eadar-ghnìomhach</h3>
        <div class="practice-card">
          <div class="practice-word">
            <div class="practice-gaelic" id="practiceGaelic">Madainn mhath</div>
            <div class="practice-translation" id="practiceTranslation">Good morning</div>
            <div class="practice-phonetic" id="practicePhonetic">[ˈmat̪ɪɲ va]</div>
          </div>

          <!-- Stress Pattern Visualization -->
          <div class="stress-pattern" id="stressPattern">
            <div class="syllable stressed">MA</div>
            <div class="syllable">dainn</div>
            <div class="syllable">mhath</div>
          </div>

          <!-- Waveform Visualization -->
          <div class="waveform" id="waveform">
            <div class="wave-bar" style="height: 20px;"></div>
            <div class="wave-bar" style="height: 35px;"></div>
            <div class="wave-bar" style="height: 45px;"></div>
            <div class="wave-bar" style="height: 30px;"></div>
            <div class="wave-bar" style="height: 25px;"></div>
            <div class="wave-bar" style="height: 40px;"></div>
            <div class="wave-bar" style="height: 50px;"></div>
            <div class="wave-bar" style="height: 35px;"></div>
            <div class="wave-bar" style="height: 20px;"></div>
            <div class="wave-bar" style="height: 15px;"></div>
            <div class="wave-bar" style="height: 30px;"></div>
            <div class="wave-bar" style="height: 45px;"></div>
            <div class="wave-bar" style="height: 40px;"></div>
            <div class="wave-bar" style="height: 25px;"></div>
            <div class="wave-bar" style="height: 15px;"></div>
          </div>

          <!-- Consonant Type Breakdown -->
          <div style="text-align: center; margin: 16px 0;">
            <strong>Consonant Analysis:</strong><br>
            <span class="consonant-type broad">🔶 m (broad)</span>
            <span class="consonant-type slender">💎 d (slender)</span>
            <span class="consonant-type slender">💎 n (slender)</span>
            <span class="consonant-type broad">🔶 mh (broad, lenited)</span>
            <span class="consonant-type broad">🔶 th (broad)</span>
          </div>

          <div class="practice-controls">
            <button class="btn btn-primary" id="playPracticeBtn">▶️ Play Audio</button>
            <button class="btn" id="nextWordBtn">⏭️ Next Word</button>
            <button class="btn" id="showBreakdownBtn">🔍 Show Breakdown</button>
          </div>

          <div id="breakdown" style="margin-top: 20px; padding: 16px; background: var(--surface-1); border-radius: 10px; display: none;">
            <h4 style="margin-top: 0;">Detailed Breakdown:</h4>
            <ul style="line-height: 1.8;">
              <li><strong>Ma-</strong>: Stressed first syllable, broad 'm' [m]</li>
              <li><strong>-dainn</strong>: Slender 'd' [t̪], palatal 'n' [ɲ]</li>
              <li><strong>mhath</strong>: Lenited 'mh' [v], broad 'th' [h]</li>
            </ul>
          </div>
        </div>

        <!-- Practice from Library -->
        <div id="libraryPractice" style="margin-top: 30px; display: none;">
          <h3 style="color: var(--brand-accent);">📚 Practice from Your Library</h3>
          <p style="color: var(--text-2);">Select recordings from your library to practice pronunciation with real native speaker audio.</p>
          <div id="practiceLibraryGrid" class="grid"></div>
        </div>
      </div>
    </section>
  </main>

  <!-- Toasts -->
  <div id="toast" class="toast" aria-live="polite" aria-atomic="true"></div>

  <!-- Confirm Modal -->
  <div id="confirmModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="confirmTitle" aria-hidden="true">
    <div class="modal-card">
      <h3 id="confirmTitle">Delete recording?</h3>
      <p id="confirmDesc">This action cannot be undone.</p>
      <div class="modal-actions">
        <button id="confirmCancel" class="btn">Cancel</button>
        <button id="confirmOk" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>

  <script>
    /* ========= App State ========= */
    const STORAGE_KEY = 'gaelic_audio_library';
    const MAX_SIZE = 50 * 1024 * 1024; // ~50MB

    const AppState = {
      mediaRecorder: null,
      chunks: [],
      currentBlob: null,
      currentURL: null,
      isRecording: false,
      recordings: [],
      pendingDeleteId: null,
      filters: {
        query: '',
        dialect: '',
        category: '',
        sort: 'newest'
      },
      currentTab: 'record',
      practiceWords: [
        { gaelic: 'Madainn mhath', translation: 'Good morning', phonetic: '[ˈmat̪ɪɲ va]', syllables: ['MA', 'dainn', 'mhath'], stressed: 0 },
        { gaelic: 'Feasgar math', translation: 'Good afternoon', phonetic: '[ˈfɛskər ma]', syllables: ['FEAS', 'gar', 'math'], stressed: 0 },
        { gaelic: 'Tapadh leat', translation: 'Thank you', phonetic: '[ˈt̪apəɣ lɛht̪]', syllables: ['TA', 'padh', 'leat'], stressed: 0 },
        { gaelic: 'Slàinte mhath', translation: 'Good health (cheers)', phonetic: '[ˈs̪l̪aːɲtʲə va]', syllables: ['SLÀIN', 'te', 'mhath'], stressed: 0 },
        { gaelic: 'Ciamar a tha thu?', translation: 'How are you?', phonetic: '[ˈkʲimər ə ha u]', syllables: ['CIA', 'mar', 'a', 'tha', 'thu'], stressed: 0 },
        { gaelic: 'Tha gu math', translation: 'Well/fine', phonetic: '[ha gu ma]', syllables: ['THA', 'gu', 'math'], stressed: 0 }
      ],
      currentPracticeIndex: 0
    };

    /* ========= Elements ========= */
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);
    const els = {
      // Tabs
      navTabs: $$('.nav-tab'),
      recordSection: $('#recordSection'),
      librarySection: $('#librarySection'),
      learnerSection: $('#learnerSection'),

      // Recording
      startBtn: $('#startBtn'),
      stopBtn: $('#stopBtn'),
      saveBtn: $('#saveBtn'),
      discardBtn: $('#discardBtn'),
      recIndicator: $('#recIndicator'),
      audioWrap: $('#audioWrap'),
      audioPlayer: $('#audioPlayer'),
      metaForm: $('#metaForm'),
      gaelicWord: $('#gaelicWord'),
      englishTranslation: $('#englishTranslation'),
      dialect: $('#dialect'),
      category: $('#category'),
      speakerDetails: $('#speakerDetails'),
      additionalNotes: $('#additionalNotes'),
      recordedOn: $('#recordedOn'),
      submitMetaBtn: $('#submitMetaBtn'),
      cancelMetaBtn: $('#cancelMetaBtn'),

      // Library
      libCount: $('#libCount'),
      grid: $('#grid'),
      emptyState: $('#emptyState'),
      searchInput: $('#searchInput'),
      filterDialect: $('#filterDialect'),
      filterCategory: $('#filterCategory'),
      sortOrder: $('#sortOrder'),

      // Global
      exportBtn: $('#exportBtn'),
      importInput: $('#importInput'),
      clearAllBtn: $('#clearAllBtn'),
      toast: $('#toast'),
      confirmModal: $('#confirmModal'),
      confirmCancel: $('#confirmCancel'),
      confirmOk: $('#confirmOk'),

      // Learner
      practiceGaelic: $('#practiceGaelic'),
      practiceTranslation: $('#practiceTranslation'),
      practicePhonetic: $('#practicePhonetic'),
      stressPattern: $('#stressPattern'),
      waveform: $('#waveform'),
      playPracticeBtn: $('#playPracticeBtn'),
      nextWordBtn: $('#nextWordBtn'),
      showBreakdownBtn: $('#showBreakdownBtn'),
      breakdown: $('#breakdown'),
      libraryPractice: $('#libraryPractice'),
      practiceLibraryGrid: $('#practiceLibraryGrid')
    };

    /* ========= Init ========= */
    init();
    function init() {
      loadFromStorage();
      bindEvents();
      renderLibrary();
      updatePracticeWord();
    }

    function bindEvents() {
      // Tabs
      els.navTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
      });

      // Recording
      els.startBtn.addEventListener('click', startRecording);
      els.stopBtn.addEventListener('click', stopRecording);
      els.saveBtn.addEventListener('click', () => toggleMetaForm(true));
      els.discardBtn.addEventListener('click', discardCurrent);
      els.submitMetaBtn.addEventListener('click', saveWithMetadata);
      els.cancelMetaBtn.addEventListener('click', () => toggleMetaForm(false));

      // Filters
      els.searchInput.addEventListener('input', e => { AppState.filters.query = e.target.value.trim().toLowerCase(); renderLibrary(); });
      els.filterDialect.addEventListener('change', e => { AppState.filters.dialect = e.target.value; renderLibrary(); });
      els.filterCategory.addEventListener('change', e => { AppState.filters.category = e.target.value; renderLibrary(); });
      els.sortOrder.addEventListener('change', e => { AppState.filters.sort = e.target.value; renderLibrary(); });

      // Import/Export
      els.exportBtn.addEventListener('click', exportLibrary);
      els.importInput.addEventListener('change', importLibrary);
      els.clearAllBtn.addEventListener('click', () => confirmDeleteAll());

      // Modal
      els.confirmCancel.addEventListener('click', () => showModal(false));
      els.confirmOk.addEventListener('click', () => { 
        if (AppState.pendingDeleteId === 'ALL') { 
          clearAll(); 
        } else { 
          deleteRecording(AppState.pendingDeleteId); 
        } 
        showModal(false); 
      });

      // Learner practice
      els.playPracticeBtn.addEventListener('click', playPracticeAudio);
      els.nextWordBtn.addEventListener('click', nextPracticeWord);
      els.showBreakdownBtn.addEventListener('click', toggleBreakdown);
    }

    /* ========= Tab Navigation ========= */
    function switchTab(tabName) {
      AppState.currentTab = tabName;
      
      // Update tab buttons
      els.navTabs.forEach(tab => {
        const isActive = tab.dataset.tab === tabName;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive);
      });

      // Show/hide sections
      els.recordSection.hidden = tabName !== 'record';
      els.librarySection.hidden = tabName !== 'library';
      els.learnerSection.hidden = tabName !== 'learner';

      // Update learner section if needed
      if (tabName === 'learner') {
        updateLearnerLibrary();
      }
    }

    /* ========= Recording ========= */
    async function startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        AppState.mediaRecorder = new MediaRecorder(stream);
        AppState.chunks = [];

        AppState.mediaRecorder.addEventListener('dataavailable', ev => {
          if (ev.data?.size) AppState.chunks.push(ev.data);
        });

        AppState.mediaRecorder.addEventListener('stop', () => {
          AppState.currentBlob = new Blob(AppState.chunks, { type: 'audio/webm' });
          if (AppState.currentURL) URL.revokeObjectURL(AppState.currentURL);
          AppState.currentURL = URL.createObjectURL(AppState.currentBlob);
          els.audioPlayer.src = AppState.currentURL;
          els.audioWrap.classList.add('active');
          stream.getTracks().forEach(t => t.stop());
        });

        AppState.mediaRecorder.start();
        AppState.isRecording = true;
        updateRecUI(true);
        toast('Recording started');
      } catch (error) {
        console.error(error);
        toast('Microphone permission denied or unsupported browser.', true);
      }
    }

    function stopRecording() {
      if (AppState.mediaRecorder && AppState.isRecording) {
        AppState.mediaRecorder.stop();
        AppState.isRecording = false;
        updateRecUI(false);
        els.saveBtn.disabled = false;
        els.discardBtn.disabled = false;
        toast('Recording stopped');
      }
    }

    function discardCurrent() {
      if (AppState.currentURL) URL.revokeObjectURL(AppState.currentURL);
      AppState.currentBlob = null;
      AppState.currentURL = null;
      AppState.chunks = [];
      els.audioPlayer.removeAttribute('src');
      els.audioWrap.classList.remove('active');
      els.saveBtn.disabled = true;
      els.discardBtn.disabled = true;
      toggleMetaForm(false);
      toast('Recording discarded');
    }

    function updateRecUI(active) {
      els.startBtn.disabled = active;
      els.stopBtn.disabled = !active;
      els.recIndicator.classList.toggle('active', active);
    }

    function toggleMetaForm(show) {
      els.metaForm.hidden = !show;
      if (show) {
        els.recordedOn.value = new Date().toISOString().slice(0, 10);
        els.gaelicWord.focus();
      } else {
        els.gaelicWord.value = '';
        els.englishTranslation.value = '';
        els.dialect.value = '';
        els.category.value = '';
        els.speakerDetails.value = '';
        els.additionalNotes.value = '';
      }
    }

    function saveWithMetadata() {
      if (!els.gaelicWord.value.trim()) { toast('Please enter the Gaelic word/phrase.', true); els.gaelicWord.focus(); return; }
      if (!els.englishTranslation.value.trim()) { toast('Please enter the English translation.', true); els.englishTranslation.focus(); return; }
      if (!els.dialect.value) { toast('Please select a dialect.', true); els.dialect.focus(); return; }
      if (!els.category.value) { toast('Please select a category.', true); els.category.focus(); return; }
      if (!AppState.currentBlob) { toast('No recording to save.', true); return; }

      const reader = new FileReader();
      reader.onloadend = () => {
        const audioDataURL = reader.result;
        const approxSize = audioDataURL.length;
        if (approxSize > MAX_SIZE) {
          toast('Recording too large. Please record a shorter clip.', true);
          return;
        }

        const languageItem = {
          id: Date.now(),
          gaelicWord: els.gaelicWord.value.trim(),
          englishTranslation: els.englishTranslation.value.trim(),
          dialect: els.dialect.value,
          category: els.category.value,
          speakerDetails: els.speakerDetails.value.trim(),
          additionalNotes: els.additionalNotes.value.trim(),
          audioData: audioDataURL,
          dateRecorded: (els.recordedOn.value ? new Date(els.recordedOn.value) : new Date()).toISOString()
        };

        AppState.recordings.unshift(
