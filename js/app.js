const AppState = {
    currentView: 'landing',
    isMobileMenuOpen: false,

    // Questionnaire State
    questions: [
        {
            id: 1,
            text: "Kegiatan apa yang paling Anda nikmati di waktu luang?",
            options: [
                { id: "a", text: "Membaca buku sains atau teknologi", category: "tek" },
                { id: "b", text: "Menggambar, mendesain, atau membuat karya seni", category: "seni" },
                { id: "c", text: "Berdiskusi, menulis, atau memecahkan masalah sosial", category: "sos" },
                { id: "d", text: "Menghitung keuangan atau merencanakan bisnis", category: "eko" }
            ]
        },
        {
            id: 2,
            text: "Saat menghadapi masalah kompleks, bagaimana cara Anda menyelesaikannya?",
            options: [
                { id: "a", text: "Menganalisis data dan mencari pola logis", category: "tek" },
                { id: "b", text: "Mencari pendekatan kreatif yang out of the box", category: "seni" },
                { id: "c", text: "Berkomunikasi dengan orang lain untuk mencari jalan tengah", category: "sos" },
                { id: "d", text: "Memperhitungkan untung-rugi secara efisien", category: "eko" }
            ]
        },
        {
            id: 3,
            text: "Lingkungan kerja seperti apa yang Anda impikan di masa depan?",
            options: [
                { id: "a", text: "Laboratorium, perusahaan tech, atau ruang riset", category: "tek" },
                { id: "b", text: "Studio kreatif, agency, atau ruang kerja fleksibel", category: "seni" },
                { id: "c", text: "Lembaga masyarakat, sekolah, atau instansi publik", category: "sos" },
                { id: "d", text: "Perkantoran korporat, startup, atau institusi finansial", category: "eko" }
            ]
        }
    ],
    currentQuestionIndex: 0,
    answers: {},
    previousView: null,

    // Study Programs Database
    programs: [
        { id: "cs", name: "Teknik Informatika", category: "tek", icon: "fa-laptop-code", desc: "Fokus mendalam pada rekayasa perangkat lunak, pengembangan algoritma kompleks, struktur data, hingga inovasi kecerdasan buatan (AI) dan keamanan siber. Lulusan dipersiapkan untuk menjadi inovator di industri teknologi global.", cost: "Rp 8-12 Juta/Semester", duration: "8 Semester", career: "Software Engineer, Data Scientist, AI Specialist" },
        { id: "is", name: "Sistem Informasi", category: "tek", icon: "fa-network-wired", desc: "Menjembatani dua dunia: teknologi informasi dan strategi bisnis. Anda akan mempelajari bagaimana merancang, mengelola, dan mengimplementasikan sistem teknologi untuk memecahkan masalah operasional perusahaan secara efisien.", cost: "Rp 7-10 Juta/Semester", duration: "8 Semester", career: "IT Consultant, Systems Analyst, Product Manager" },
        { id: "dkv", name: "Desain Komunikasi Visual (DKV)", category: "seni", icon: "fa-palette", desc: "Mempelajari seni penyampaian pesan yang efektif melalui elemen visual. Program ini melatih kreativitas Anda dalam ilustrasi, tipografi, desain UI/UX, dan branding untuk menciptakan karya yang memiliki dampak sosial maupun komersial.", cost: "Rp 9-15 Juta/Semester", duration: "8 Semester", career: "Graphic Designer, Art Director, UI/UX Designer" },
        { id: "arch", name: "Arsitektur", category: "seni", icon: "fa-building", desc: "Menggabungkan seni estetika dan perhitungan teknik yang presisi. Anda akan difokuskan pada perancangan ruang, struktur bangunan, tata kota, hingga arsitektur berkelanjutan (green design) yang ramah lingkungan dan fungsional.", cost: "Rp 10-15 Juta/Semester", duration: "8 Semester", career: "Arsitek, Urban Planner, Interior Designer" },
        { id: "psy", name: "Psikologi", category: "sos", icon: "fa-brain", desc: "Menyelami kompleksitas pikiran, emosi, dan perilaku manusia. Anda akan dibekali keahlian asesmen psikologis, observasi, dan konseling untuk membantu pengembangan potensi individu dalam ranah klinis, industri, maupun pendidikan.", cost: "Rp 7-11 Juta/Semester", duration: "8 Semester", career: "HRD, Konselor, Peneliti, Psikolog (lanjutan)" },
        { id: "ir", name: "Hubungan Internasional", category: "sos", icon: "fa-earth-americas", desc: "Mempelajari dinamika politik, ekonomi, dan sosial antarnegara serta peran organisasi global. Sangat cocok bagi Anda yang memiliki ketertarikan pada isu-isu diplomasi, hukum internasional, dan kebijakan publik lintas batas.", cost: "Rp 8-12 Juta/Semester", duration: "8 Semester", career: "Diplomat, Analis Kebijakan, Konsultan Internasional" },
        { id: "mgmt", name: "Manajemen", category: "eko", icon: "fa-chart-pie", desc: "Membentuk jiwa kepemimpinan strategis dalam mengelola sumber daya organisasi. Kurikulum mencakup manajemen keuangan, pemasaran, operasi, dan sumber daya manusia untuk mencapai target bisnis di era yang kompetitif.", cost: "Rp 7-10 Juta/Semester", duration: "8 Semester", career: "Business Manager, Entrepreneur, Management Trainee" },
        { id: "acc", name: "Akuntansi", category: "eko", icon: "fa-calculator", desc: "Seni pencatatan, klasifikasi, dan pelaporan transaksi keuangan secara presisi dan akuntabel. Program ini mencetak profesional analitis yang andal dalam audit, perpajakan, dan sistem informasi akuntansi untuk transparansi entitas bisnis.", cost: "Rp 7-10 Juta/Semester", duration: "8 Semester", career: "Akuntan, Auditor, Analis Keuangan, Tax Consultant" }
    ],
    recommendationResult: [],

    // Elements
    navLinks: document.querySelectorAll('.nav-item'),
    views: document.querySelectorAll('.view'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    navContainer: document.getElementById('nav-links'),
    logo: document.querySelector('.logo')
};

function initApp() {
    setupNavigation();

    // Simulate initial route based on hash (if any), otherwise landing
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        navigateTo(hash);
    } else {
        navigateTo('landing');
    }
}

function setupNavigation() {
    // Add click listeners to nav buttons
    AppState.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!e.target.disabled) {
                const route = e.target.getAttribute('data-route');
                navigateTo(route);

                // Close mobile menu if open
                if (AppState.isMobileMenuOpen) {
                    toggleMobileMenu();
                }
            }
        });
    });

    // Logo click returns to landing
    AppState.logo.addEventListener('click', () => {
        navigateTo('landing');
    });

    // Mobile menu toggle
    AppState.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Landing Page CTA Button
    const btnStart = document.getElementById('btn-start-simulation');
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            navigateTo('questionnaire');
        });
    }
}

function toggleMobileMenu() {
    AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen;
    AppState.mobileMenuBtn.setAttribute('aria-expanded', AppState.isMobileMenuOpen);

    if (AppState.isMobileMenuOpen) {
        AppState.navContainer.classList.add('show');
    } else {
        AppState.navContainer.classList.remove('show');
    }
}

function navigateTo(route) {
    if (AppState.currentView && AppState.currentView !== route) {
        AppState.previousView = AppState.currentView;
    }

    // Basic validation
    const targetView = document.getElementById(`view-${route}`);
    if (!targetView) return;

    AppState.currentView = route;
    window.location.hash = route;

    // Update Nav UI
    AppState.navLinks.forEach(link => {
        if (link.getAttribute('data-route') === route) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update Views UI
    AppState.views.forEach(view => {
        if (view.id === `view-${route}`) {
            view.classList.remove('hidden');
            view.classList.add('active');
            view.removeAttribute('aria-hidden');

            // Render view content if needed
            renderView(route);
        } else {
            view.classList.add('hidden');
            view.classList.remove('active');
            view.setAttribute('aria-hidden', 'true');
        }
    });
}

// Function placeholder for injecting content into views
function renderView(route) {
    if (route === 'questionnaire') {
        renderQuestion();
    }
}

function renderQuestion() {
    const q = AppState.questions[AppState.currentQuestionIndex];
    const total = AppState.questions.length;

    // Update Progress
    const progressText = document.getElementById('quiz-progress-text');
    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressText) progressText.innerText = `Pertanyaan ${AppState.currentQuestionIndex + 1} dari ${total}`;
    if (progressBar) progressBar.style.width = `${((AppState.currentQuestionIndex + 1) / total) * 100}%`;

    // Render Options
    const content = document.getElementById('quiz-content');
    if (!content) return;

    let html = `
        <h3 class="question-text">${q.text}</h3>
        <div class="options-grid">
    `;

    q.options.forEach(opt => {
        const isSelected = AppState.answers[q.id] === opt.category;
        html += `<button class="option-btn ${isSelected ? 'selected' : ''}" data-category="${opt.category}">${opt.text}</button>`;
    });

    html += `</div>`;
    content.innerHTML = html;

    // Setup Option Click Events
    const optionBtns = content.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove selected from others
            optionBtns.forEach(b => b.classList.remove('selected'));
            // Add selected
            e.target.classList.add('selected');
            // Save answer
            AppState.answers[q.id] = e.target.getAttribute('data-category');

            // Enable Next button
            document.getElementById('btn-quiz-next').disabled = false;
        });
    });

    // Setup Navigation Buttons
    const btnPrev = document.getElementById('btn-quiz-prev');
    const btnNext = document.getElementById('btn-quiz-next');

    if (btnPrev) {
        btnPrev.disabled = false;
        // Re-attach safely
        const newBtnPrev = btnPrev.cloneNode(true);
        btnPrev.parentNode.replaceChild(newBtnPrev, btnPrev);
        newBtnPrev.addEventListener('click', () => {
            if (AppState.currentQuestionIndex > 0) {
                AppState.currentQuestionIndex--;
                renderQuestion();
            } else {
                navigateTo('landing');
            }
        });
    }

    if (btnNext) {
        // Disable next if not answered
        btnNext.disabled = !AppState.answers[q.id];
        // Change text on last question
        btnNext.innerHTML = AppState.currentQuestionIndex === total - 1 ? 'Lihat Rekomendasi <i class="fa-solid fa-arrow-right"></i>' : 'Selanjutnya <i class="fa-solid fa-arrow-right"></i>';

        const newBtnNext = btnNext.cloneNode(true);
        btnNext.parentNode.replaceChild(newBtnNext, btnNext);
        newBtnNext.addEventListener('click', () => {
            if (AppState.currentQuestionIndex < total - 1) {
                AppState.currentQuestionIndex++;
                renderQuestion();
            } else {
                // Finish Quiz -> calculate and go to recommendation
                finishQuiz();
            }
        });
    }
}

function finishQuiz() {
    calculateRecommendation();

    // Enable recommendation tab
    const recTab = document.querySelector('.nav-item[data-route="recommendation"]');
    if (recTab) {
        recTab.disabled = false;
        recTab.removeAttribute('aria-disabled');
    }

    navigateTo('recommendation');
}

function calculateRecommendation() {
    // Count categories
    const counts = { tek: 0, seni: 0, sos: 0, eko: 0 };
    Object.values(AppState.answers).forEach(cat => {
        if (counts[cat] !== undefined) counts[cat]++;
    });

    // Sort categories by score descending
    const sortedCats = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    // Get top categories. If there's a tie, they both go.
    const topCat = sortedCats[0];
    const secondCat = sortedCats[1];

    // Filter programs based on top categories
    let recommended = AppState.programs.filter(p => p.category === topCat || p.category === secondCat);

    // Shuffle slightly to give random top 3 if more than 3 match
    recommended.sort(() => 0.5 - Math.random());

    AppState.recommendationResult = recommended.slice(0, 3);
}

// Function placeholder for injecting content into views
function renderView(route) {
    if (route === 'questionnaire') {
        renderQuestion();
    } else if (route === 'recommendation') {
        renderRecommendation();
    } else if (route === 'comparison') {
        renderComparison();
    } else if (route === 'summary') {
        renderSummary();
    } else if (route === 'all-programs') {
        renderAllPrograms();
    }
}

function renderRecommendation() {
    const container = document.getElementById('view-recommendation');
    if (!container) return;

    let html = `
        <div class="text-center" style="margin-top: 2rem; margin-bottom: 4rem;">
            <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--color-text-dark); margin-bottom: 1rem;">Rekomendasi Program Studi</h2>
            <p class="text-muted" style="font-size: 1.125rem;">Berdasarkan hasil analisis profil minat & bakat Anda, berikut adalah 3 program studi yang paling cocok:</p>
        </div>
        <div class="recommendation-grid">
    `;

    AppState.recommendationResult.forEach((prog, index) => {
        // Delay animation slightly for each card
        const delay = index * 0.15;
        let rankLabel = index === 0 ? '<div class="rank-badge">✨ Sangat Cocok</div>' : '';
        html += `
            <div class="recommendation-card" style="animation: fadeIn 0.5s ${delay}s both;">
                ${rankLabel}
                <div class="card-icon-wrapper">
                    <i class="fa-solid ${prog.icon}"></i>
                </div>
                <h3>${prog.name}</h3>
                <p class="desc">${prog.desc}</p>
                <div class="card-footer">
                    <button class="btn btn-primary" style="width: 100%; border-radius: 8px;" onclick="openProgramModal('${prog.id}')">Detail Prodi</button>
                </div>
            </div>
        `;
    });

    html += `</div>
        <div class="page-actions">
            <button class="btn btn-primary btn-lg" onclick="goToComparison()">
                <i class="fa-solid fa-code-compare"></i> Bandingkan Program
            </button>
        </div>
    `;
    container.innerHTML = html;
}

function goToComparison() {
    const compTab = document.querySelector('.nav-item[data-route="comparison"]');
    const sumTab = document.querySelector('.nav-item[data-route="summary"]');
    if (compTab) {
        compTab.disabled = false;
        compTab.removeAttribute('aria-disabled');
    }
    if (sumTab) {
        sumTab.disabled = false;
        sumTab.removeAttribute('aria-disabled');
    }
    navigateTo('comparison');
}

function renderComparison() {
    const container = document.getElementById('view-comparison');
    if (!container) return;

    let html = `
        <div class="text-center" style="margin-top: 2rem; margin-bottom: 4rem;">
            <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--color-text-dark); margin-bottom: 1rem;">Perbandingan Program Studi</h2>
            <p class="text-muted" style="font-size: 1.125rem;">Bandingkan spesifikasi detail dari program studi rekomendasi Anda secara <strong>head-to-head</strong>.</p>
        </div>
        
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Aspek</th>
    `;

    AppState.recommendationResult.forEach(prog => {
        html += `<th>${prog.name}</th>`;
    });

    html += `
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="aspect-label">Deskripsi</td>
    `;

    AppState.recommendationResult.forEach(prog => {
        html += `<td>${prog.desc}</td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td class="aspect-label">Lama Kuliah</td>
    `;

    AppState.recommendationResult.forEach(prog => {
        html += `<td><span class="badge-neutral">${prog.duration}</span></td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td class="aspect-label">Estimasi Biaya</td>
    `;

    AppState.recommendationResult.forEach(prog => {
        html += `<td><span class="text-accent font-semibold">${prog.cost}</span></td>`;
    });

    html += `
                    </tr>
                    <tr>
                        <td class="aspect-label">Prospek Karir</td>
    `;

    AppState.recommendationResult.forEach(prog => {
        html += `<td>${prog.career}</td>`;
    });

    html += `
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="page-actions">
            <button class="btn btn-outline btn-lg" onclick="navigateTo('recommendation')"><i class="fa-solid fa-arrow-left"></i> Kembali ke Rekomendasi</button>
            <button class="btn btn-primary btn-lg" onclick="navigateTo('summary')">Lihat Ringkasan Akhir <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `;

    container.innerHTML = html;
}

function renderSummary() {
    const container = document.getElementById('view-summary');
    if (!container) return;

    // Calculate simple stats
    const topProg = AppState.recommendationResult[0];

    let html = `
        <div class="summary-container" style="max-width: 800px; margin: 0 auto; background: var(--color-surface); padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-md); border: 1px solid var(--color-border);">
            <div class="text-center" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--color-border);">
                <h2><i class="fa-solid fa-ranking-star text-primary"></i> Ringkasan Profil Anda</h2>
                <p class="text-muted" style="margin-top: 0.5rem;">Berdasarkan simulasi kuesioner yang telah diisi.</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Kecocokan Tertinggi</h3>
                <div style="background: rgba(79, 70, 229, 0.05); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--color-primary);">
                    <h4 style="color: var(--color-primary); font-size: 1.25rem;">${topProg ? topProg.name : 'Belum ada data'}</h4>
                    <p style="margin-top: 0.5rem; color: var(--color-text-muted);">${topProg ? topProg.desc : ''}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 3rem;">
                <h3 style="margin-bottom: 1rem;">Rekomendasi Lainnya</h3>
                <ul style="list-style-type: none;">
    `;

    for (let i = 1; i < AppState.recommendationResult.length; i++) {
        html += `<li style="padding: 1rem 0; border-bottom: 1px dashed var(--color-border);"><i class="fa-solid fa-check text-accent" style="margin-right: 0.5rem;"></i> <strong>${AppState.recommendationResult[i].name}</strong></li>`;
    }

    html += `
                </ul>
            </div>
            
            <div class="page-actions">
                <button class="btn btn-outline btn-lg" onclick="navigateTo('comparison')"><i class="fa-solid fa-arrow-left"></i> Kembali</button>
                <button class="btn btn-primary btn-lg" onclick="document.querySelector('.nav-item[data-route=\\'all-programs\\']').click()">
                    Selanjutnya (Daftar Prodi) <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function resetSimulation() {
    AppState.currentQuestionIndex = 0;
    AppState.answers = {};
    AppState.recommendationResult = [];

    // Disable tabs
    const recTab = document.querySelector('.nav-item[data-route="recommendation"]');
    const compTab = document.querySelector('.nav-item[data-route="comparison"]');
    const sumTab = document.querySelector('.nav-item[data-route="summary"]');

    if (recTab) { recTab.disabled = true; recTab.setAttribute('aria-disabled', 'true'); }
    if (compTab) { compTab.disabled = true; compTab.setAttribute('aria-disabled', 'true'); }
    if (sumTab) { sumTab.disabled = true; sumTab.setAttribute('aria-disabled', 'true'); }

    navigateTo('landing');
}

function renderAllPrograms() {
    const grid = document.getElementById('all-programs-grid');
    if (!grid) return;

    let html = '';

    AppState.programs.forEach((prog, index) => {
        const delay = index * 0.1;
        html += `
            <div class="recommendation-card" style="animation: fadeIn 0.5s ${delay}s both;">
                <div class="card-icon-wrapper">
                    <i class="fa-solid ${prog.icon}"></i>
                </div>
                <h3>${prog.name}</h3>
                <p class="desc">${prog.desc}</p>
                <div class="card-footer">
                    <button class="btn btn-outline" style="width: 100%; border-radius: 8px;" onclick="openProgramModal('${prog.id}')">Lihat Detail</button>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function openProgramModal(id) {
    const prog = AppState.programs.find(p => p.id === id);
    if (!prog) return;

    const categoryMap = {
        'tek': 'Teknologi',
        'seni': 'Seni & Desain',
        'sos': 'Sosial & Humaniora',
        'eko': 'Ekonomi & Bisnis'
    };
    const catName = categoryMap[prog.category] || prog.category.toUpperCase();

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div class="card-icon-wrapper" style="margin: 0 auto 1rem;">
                <i class="fa-solid ${prog.icon}"></i>
            </div>
            <h2 id="modal-title" style="color: var(--color-text-dark); margin-bottom: 0.5rem;">${prog.name}</h2>
            <span class="badge-neutral" style="display: inline-block;">Kategori: ${catName}</span>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; color: var(--color-primary);">Deskripsi</h4>
            <p style="color: var(--color-text-muted); line-height: 1.6;">${prog.desc}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(0,0,0,0.02); padding: 1rem; border-radius: 8px;">
                <span style="display: block; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">Lama Kuliah</span>
                <strong style="color: var(--color-text-dark);">${prog.duration}</strong>
            </div>
            <div style="background: rgba(0,0,0,0.02); padding: 1rem; border-radius: 8px;">
                <span style="display: block; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">Estimasi Biaya</span>
                <strong class="text-accent">${prog.cost}</strong>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; color: var(--color-primary);">Prospek Karir</h4>
            <p style="color: var(--color-text-muted); line-height: 1.6;">${prog.career}</p>
        </div>
    `;

    const modal = document.getElementById('program-modal');
    modal.classList.remove('hidden');

    // Add event listener to close button inside modal HTML just injected, wait, we have a fixed close btn in index.html
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.onclick = closeProgramModal;
}

function closeProgramModal() {
    const modal = document.getElementById('program-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Settings Menu Logic
function initSettingsMenu() {
    const settingsBtn = document.getElementById('settings-toggle');
    const settingsMenu = document.getElementById('settings-menu');
    const themeSwitch = document.getElementById('theme-switch');
    const animSwitch = document.getElementById('anim-switch');

    // Toggle menu
    if (settingsBtn && settingsMenu) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsMenu.classList.toggle('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
                settingsMenu.classList.add('hidden');
            }
        });
    }

    // Init Theme
    const savedTheme = localStorage.getItem('simprodi_theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeSwitch) themeSwitch.checked = true;
    }
    
    if (themeSwitch) {
        themeSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('simprodi_theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('simprodi_theme', 'light');
            }
        });
    }

    // Init Animation
    const savedAnim = localStorage.getItem('simprodi_animation') || 'on';
    if (savedAnim === 'off') {
        document.documentElement.setAttribute('data-animation', 'false');
        if (animSwitch) animSwitch.checked = true;
    }
    
    if (animSwitch) {
        animSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-animation', 'false');
                localStorage.setItem('simprodi_animation', 'off');
            } else {
                document.documentElement.removeAttribute('data-animation');
                localStorage.setItem('simprodi_animation', 'on');
            }
        });
    }

    // Init Contrast
    const contrastSwitch = document.getElementById('contrast-switch');
    const savedContrast = localStorage.getItem('simprodi_contrast') || 'normal';
    if (savedContrast === 'high') {
        document.documentElement.setAttribute('data-contrast', 'high');
        if (contrastSwitch) contrastSwitch.checked = true;
    }
    
    if (contrastSwitch) {
        contrastSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-contrast', 'high');
                localStorage.setItem('simprodi_contrast', 'high');
            } else {
                document.documentElement.removeAttribute('data-contrast');
                localStorage.setItem('simprodi_contrast', 'normal');
            }
        });
    }

    // Init Font Size
    const fontDecrease = document.getElementById('font-decrease');
    const fontReset = document.getElementById('font-reset');
    const fontIncrease = document.getElementById('font-increase');
    
    let currentFontSize = parseInt(localStorage.getItem('simprodi_fontsize')) || 100;
    
    const applyFontSize = (size) => {
        document.documentElement.style.fontSize = size + '%';
        localStorage.setItem('simprodi_fontsize', size);
    };

    if (currentFontSize !== 100) {
        applyFontSize(currentFontSize);
    }

    if (fontDecrease) {
        fontDecrease.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent closing menu
            currentFontSize = Math.max(80, currentFontSize - 10);
            applyFontSize(currentFontSize);
        });
    }

    if (fontReset) {
        fontReset.addEventListener('click', (e) => {
            e.stopPropagation();
            currentFontSize = 100;
            applyFontSize(currentFontSize);
        });
    }

    if (fontIncrease) {
        fontIncrease.addEventListener('click', (e) => {
            e.stopPropagation();
            currentFontSize = Math.min(130, currentFontSize + 10);
            applyFontSize(currentFontSize);
        });
    }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initSettingsMenu();

    // Setup modal backdrop click to close
    const modal = document.getElementById('program-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProgramModal();
            }
        });
    }

    // Accessibility: Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProgramModal();
        }
    });
});
