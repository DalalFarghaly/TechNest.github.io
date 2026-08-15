// ============================================================
// CONFIGURATION - EDIT THESE VALUES
// ============================================================

// STEP 1: Get your Google Apps Script Web App URL
// Go to: Google Sheets > Extensions > Apps Script
// Deploy as Web App and copy the URL here
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzxUEWpO1qqzswYVwfq1UpQ2H0MV4LkLmweI2u2VxnAXFovU5Kq9KxfLUO1mVdFE-D/exec";

// ============================================================
// TRANSLATION SYSTEM
// ============================================================

const translations = {
    en: {
        'brand-name': 'DF Labs',
        'nav-home': 'Home',
        'nav-samples': 'Samples',
        'nav-program': 'Program',
        'nav-camp': 'Free Camp',
        'nav-contact': 'Contact',
        'nav-join': 'Join Now',
        'lang-toggle': 'Arabic',
        'hero-badge': 'New cohort opening soon',
        'hero-title': 'Where your first line of code <span class="accent">turns</span> into a real skill.',
        'hero-sub': 'Understand. Master. Build. Go Beyond.',
        'hero-sub-ar': 'افهم. أتقن. ابنِ. وانطلق أبعد.',
        'hero-sub-desc': 'DF Labs helps students truly understand programming, master their school curriculum, achieve their best results, and take their first step into the world of technology.',
        'hero-sub-desc-ar': 'DF Labs يساعد الطلاب على فهم البرمجة بعمق، وإتقان المنهج، وتحقيق أفضل نتائجهم، واتخاذ أول خطوة نحو عالم التكنولوجيا.',
        'hero-btn-primary': 'Join the Program',
        'hero-btn-secondary': 'See Sample Lessons',
        'samples-tag': 'Sample Lessons',
        'samples-title': 'See what you\'ll build.',
        'samples-desc': 'Here\'s a peek at three real lessons from the DF Labs program.',
        'samples-desc-ar': 'لمحة عن ثلاثة دروس حقيقية من برنامج DF Labs.',
        'slide-1-title': 'HTML & CSS Basics',
        'slide-1-desc': 'Build your first webpage from scratch',
        'slide-2-title': 'JavaScript Interactivity',
        'slide-2-desc': 'Make your pages come alive with JS',
        'slide-3-title': 'Full Project Build',
        'slide-3-desc': 'Combine everything into a real project',
        'slides-join-btn': 'Ready to start building? Join Now',
        'slides-join-btn-ar': '/ مستعد للبدء؟ انضم الآن',
        'program-tag': 'The Program',
        'program-title': 'Built to take you from lesson zero to a finished project.',
        'program-desc': 'Three stages, real projects, steady support.',
        'program-desc-ar': 'ثلاث مراحل، مشاريع حقيقية، ودعم مستمر.',
        'program-1-title': '01 — Foundations',
        'program-1-desc': 'Get comfortable with the basics',
        'program-1-detail': 'Core concepts explained simply, with small exercises after every idea.',
        'program-1-detail-ar': 'أساسيات مشروحة ببساطة، مع تمارين صغيرة بعد كل فكرة.',
        'program-2-title': '02 — Build',
        'program-2-desc': 'Work on a real project',
        'program-2-detail': 'Apply what you\'ve learned to something you can actually show off.',
        'program-2-detail-ar': 'طبّق ما تعلمته على مشروع حقيقي يمكنك عرضه بفخر.',
        'program-3-title': '03 — Grow',
        'program-3-desc': 'Get feedback and go further',
        'program-3-detail': 'Instructor review, next steps, and a path to keep building.',
        'program-3-detail-ar': 'مراجعة من المعلم، وخطوات تالية، ومسار لمواصلة التعلم.',
        'camp-tag': '🎯 Free Opportunity',
        'camp-title': 'Start Your Journey — Join Our Free Programming Basics Camp',
        'camp-desc': 'Introductory camp designed for absolute beginners. Learn the fundamentals of programming in a supportive, interactive environment — completely free.',
        'camp-desc-ar': 'معسكر تمهيدي مصمم للمبتدئين تمامًا. تعلم أساسيات البرمجة في بيئة داعمة وتفاعلية — مجانًا تمامًا.',
        'camp-btn': 'Reserve Your Spot — Free',
        'camp-btn-ar': '/ احجز مكانك — مجانًا',
        'camp-details-1': 'Join us for a free basic camp before we start our journey together.',
        'camp-details-1-ar': 'انضم إلينا في معسكر أساسي مجاني قبل أن نبدأ رحلتنا معًا.',
        'camp-details-2': '✨ No previous experience needed — just bring your curiosity and enthusiasm!',
        'camp-details-2-ar': '✨ لا حاجة لخبرة سابقة — فقط أحضر فضولك وحماسك!',
        'camp-spots': '⚡ Limited spots available — first come, first served',
        'camp-spots-ar': '⚡ أماكن محدودة — من الأسبق يحجز',
        'camp-card-title': 'Programming Basics Camp',
        'camp-card-item-1': '✅ 5 sessions',
        'camp-card-item-2': '✅ Live online classes',
        'camp-card-item-3': '✅ Beginner-friendly',
        'camp-card-start': '📅 Starts: 20 August 2026',
        'register-tag': 'Join the Program',
        'register-title': 'Ready when you are.',
        'register-desc': 'Leave your details and we\'ll reach out with the next steps.',
        'register-desc-ar': 'اترك بياناتك وسنتواصل معك بالخطوات التالية.',
        'register-name': 'Full name',
        'register-name-ar': '/ الاسم الكامل',
        'register-name-placeholder': 'Your name',
        'register-email': 'Email',
        'register-email-ar': '/ البريد الإلكتروني',
        'register-email-placeholder': 'you@example.com',
        'register-phone': 'Phone / WhatsApp',
        'register-phone-ar': '/ الهاتف',
        'register-phone-placeholder': '+20 ...',
        'register-submit': 'Submit',
        'register-submit-ar': '/ إرسال',
        'footer-about-title': '👨‍🏫 About Me',
        'footer-about-desc': 'I\'m a passionate programming teacher dedicated to making coding accessible and exciting for high school students.',
        'footer-badge-1': '🎓 3+ Years Teaching',
        'footer-badge-2': '💻 Full-Stack Developer',
        'footer-contact-title': '📬 Contact',
        'footer-whatsapp-badge': '💬 WhatsApp',
        'footer-location': '📍 Cairo, Egypt',
        'footer-hours': '🕐 Sun-Thu 9AM - 5PM',
        'footer-links-title': '🔗 Quick Links',
        'footer-link-home': 'Home',
        'footer-link-samples': 'Sample Lessons',
        'footer-link-camp': 'Free Camp',
        'footer-link-program': 'Program',
        'footer-link-join': 'Join Class',
        'footer-connect-title': '🌟 Connect',
        'footer-social-linkedin': '🔗 LinkedIn',
        'footer-social-youtube': '▶️ YouTube',
        'footer-social-github': '🐙 GitHub',
        'footer-social-whatsapp': '💬 WhatsApp',
        'footer-cred-1': '🏅 Programming Instructor',
        'footer-cred-2': '📖 B.Sc. Computer Science',
        'footer-copyright': '© 2026 DalalFarghaly — Building the next generation of coders 🚀',
        'footer-mission': '"Every student can code when taught with patience and passion."'
    },
    ar: {
        'brand-name': 'DF Labs',
        'nav-home': 'الرئيسية',
        'nav-samples': 'نماذج دروس',
        'nav-program': 'البرنامج',
        'nav-camp': 'معسكر مجاني',
        'nav-contact': 'اتصل بنا',
        'nav-join': 'انضم الآن',
        'lang-toggle': 'English',
        'hero-badge': 'دفعة جديدة قريباً',
        'hero-title': 'حيث يتحول أول سطر من كودك <span class="accent">إلى مهارة</span> حقيقية.',
        'hero-sub': 'افهم. أتقن. ابنِ. وانطلق أبعد.',
        'hero-sub-ar': 'Understand. Master. Build. Go Beyond.',
        'hero-sub-desc': 'DF Labs يساعد الطلاب على فهم البرمجة بعمق، وإتقان المنهج، وتحقيق أفضل نتائجهم، واتخاذ أول خطوة نحو عالم التكنولوجيا.',
        'hero-sub-desc-ar': 'DF Labs helps students truly understand programming, master their school curriculum, achieve their best results, and take their first step into the world of technology.',
        'hero-btn-primary': 'انضم للبرنامج',
        'hero-btn-secondary': 'شاهد نماذج الدروس',
        'samples-tag': 'نماذج دروس',
        'samples-title': 'شاهد ما ستبنيه.',
        'samples-desc': 'لمحة عن ثلاثة دروس حقيقية من برنامج DF Labs.',
        'samples-desc-ar': 'Here\'s a peek at three real lessons from the DF Labs program.',
        'slide-1-title': 'أساسيات HTML & CSS',
        'slide-1-desc': 'ابنِ أول صفحة ويب من الصفر',
        'slide-2-title': 'تفاعل مع JavaScript',
        'slide-2-desc': 'اجعل صفحاتك تنبض بالحياة باستخدام JS',
        'slide-3-title': 'بناء مشروع كامل',
        'slide-3-desc': 'اجمع كل شيء في مشروع حقيقي',
        'slides-join-btn': 'مستعد للبدء؟ انضم الآن',
        'slides-join-btn-ar': '/ Ready to start building? Join Now',
        'program-tag': 'البرنامج',
        'program-title': 'مصمم ليأخذك من الدرس صفر إلى مشروع مكتمل.',
        'program-desc': 'ثلاث مراحل، مشاريع حقيقية، ودعم مستمر.',
        'program-desc-ar': 'Three stages, real projects, steady support.',
        'program-1-title': '٠١ — الأساسيات',
        'program-1-desc': 'تعرف على الأساسيات',
        'program-1-detail': 'أساسيات مشروحة ببساطة، مع تمارين صغيرة بعد كل فكرة.',
        'program-1-detail-ar': 'Core concepts explained simply, with small exercises after every idea.',
        'program-2-title': '٠٢ — بناء',
        'program-2-desc': 'اعمل على مشروع حقيقي',
        'program-2-detail': 'طبّق ما تعلمته على مشروع حقيقي يمكنك عرضه بفخر.',
        'program-2-detail-ar': 'Apply what you\'ve learned to something you can actually show off.',
        'program-3-title': '٠٣ — نمو',
        'program-3-desc': 'احصل على ملاحظات وتقدم أكثر',
        'program-3-detail': 'مراجعة من المعلم، وخطوات تالية، ومسار لمواصلة التعلم.',
        'program-3-detail-ar': 'Instructor review, next steps, and a path to keep building.',
        'camp-tag': '🎯 فرصة مجانية',
        'camp-title': 'ابدأ رحلتك — انضم لمعسكر أساسيات البرمجة المجاني',
        'camp-desc': 'معسكر تمهيدي مصمم للمبتدئين تمامًا. تعلم أساسيات البرمجة في بيئة داعمة وتفاعلية — مجانًا تمامًا.',
        'camp-desc-ar': 'Introductory camp designed for absolute beginners. Learn the fundamentals of programming in a supportive, interactive environment — completely free.',
        'camp-btn': 'احجز مكانك — مجانًا',
        'camp-btn-ar': '/ Reserve Your Spot — Free',
        'camp-details-1': 'انضم إلينا في معسكر أساسي مجاني قبل أن نبدأ رحلتنا معًا.',
        'camp-details-1-ar': 'Join us for a free basic camp before we start our journey together.',
        'camp-details-2': '✨ لا حاجة لخبرة سابقة — فقط أحضر فضولك وحماسك!',
        'camp-details-2-ar': '✨ No previous experience needed — just bring your curiosity and enthusiasm!',
        'camp-spots': '⚡ أماكن محدودة — من الأسبق يحجز',
        'camp-spots-ar': '⚡ Limited spots available — first come, first served',
        'camp-card-title': 'معسكر أساسيات البرمجة',
        'camp-card-item-1': '✅ ٥ جلسات',
        'camp-card-item-2': '✅ دروس مباشرة عبر الإنترنت',
        'camp-card-item-3': '✅ مناسب للمبتدئين',
        'camp-card-start': '📅 يبدأ: ٢٠ أغسطس ٢٠٢٦',
        'register-tag': 'انضم للبرنامج',
        'register-title': 'جاهز عندما تكون مستعداً.',
        'register-desc': 'اترك بياناتك وسنتواصل معك بالخطوات التالية.',
        'register-desc-ar': 'Leave your details and we\'ll reach out with the next steps.',
        'register-name': 'الاسم الكامل',
        'register-name-ar': '/ Full name',
        'register-name-placeholder': 'اسمك',
        'register-email': 'البريد الإلكتروني',
        'register-email-ar': '/ Email',
        'register-email-placeholder': 'example@email.com',
        'register-phone': 'الهاتف / واتساب',
        'register-phone-ar': '/ Phone / WhatsApp',
        'register-phone-placeholder': '+٢٠ ...',
        'register-submit': 'إرسال',
        'register-submit-ar': '/ Submit',
        'footer-about-title': '👨‍🏫 عني',
        'footer-about-desc': 'أنا معلم برمجة شغوف بتعليم البرمجة لطلاب المرحلة الثانوية.',
        'footer-badge-1': '🎓 أكثر من ٣ سنوات تدريس',
        'footer-badge-2': '💻 مطور متكامل',
        'footer-contact-title': '📬 تواصل معي',
        'footer-whatsapp-badge': '💬 واتساب',
        'footer-location': '📍 القاهرة، مصر',
        'footer-hours': '🕐 الأحد-الخميس ٩ص - ٥م',
        'footer-links-title': '🔗 روابط سريعة',
        'footer-link-home': 'الرئيسية',
        'footer-link-samples': 'نماذج دروس',
        'footer-link-camp': 'معسكر مجاني',
        'footer-link-program': 'البرنامج',
        'footer-link-join': 'انضم للفصل',
        'footer-connect-title': '🌟 تواصل',
        'footer-social-linkedin': '🔗 لينكد إن',
        'footer-social-youtube': '▶️ يوتيوب',
        'footer-social-github': '🐙 جيت هاب',
        'footer-social-whatsapp': '💬 واتساب',
        'footer-cred-1': '🏅 معلم برمجة',
        'footer-cred-2': '📖 بكالوريوس علوم حاسوب',
        'footer-copyright': '© ٢٠٢٦ دلال فرغلي — نبني الجيل القادم من المبرمجين 🚀',
        'footer-mission': '"كل طالب يمكنه تعلم البرمجة عندما يُعلَّم بالصبر والشغف."'
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updatePageLanguage(currentLang);
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    if (langToggle && langText) {
        langToggle.classList.toggle('active', currentLang === 'ar');
    }
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    localStorage.setItem('preferredLanguage', currentLang);
}

function updatePageLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key] !== undefined) {
            if (t[key].includes('<') && t[key].includes('>')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key] !== undefined) {
            element.placeholder = t[key];
        }
    });
}

// Load saved language
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updatePageLanguage(currentLang);
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.classList.toggle('active', currentLang === 'ar');
        }
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
    }
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// ============================================================
// SLIDESHOW FUNCTIONALITY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('#slideshowDots button');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, 4500);
    }

    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // Dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopAutoSlide();
            showSlide(index);
            setTimeout(startAutoSlide, 3000);
        });
    });

    // Arrow clicks
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            prevSlide();
            setTimeout(startAutoSlide, 3000);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            nextSlide();
            setTimeout(startAutoSlide, 3000);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            prevSlide();
            setTimeout(startAutoSlide, 3000);
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            nextSlide();
            setTimeout(startAutoSlide, 3000);
        }
    });

    // Pause on hover
    const container = document.querySelector('.slideshow-container');
    if (container) {
        container.addEventListener('mouseenter', stopAutoSlide);
        container.addEventListener('mouseleave', startAutoSlide);
    }

    // Start auto-slide
    startAutoSlide();
});

// ============================================================
// GOOGLE SHEETS CONNECTION
// ============================================================

/**
 * Submits form data to Google Sheets via Apps Script Web App
 * @param {Object} formData - Contains name, email, phone fields
 * @returns {Promise} - Resolves when submission is complete
 */
async function submitToGoogleSheets(formData) {
    if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error('Google Apps Script URL not configured. Please set GOOGLE_APPS_SCRIPT_URL in script.js');
    }

    try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return { success: true };
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        throw error;
    }
}

// ============================================================
// FORM HANDLING
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) {
        console.warn('Registration form not found on page');
        return;
    }

    form.addEventListener('submit', handleFormSubmit);

    async function handleFormSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!validateForm(name, email)) return;

        const formData = {
            name: name,
            email: email,
            phone: phone || 'Not provided',
            timestamp: new Date().toISOString(),
            source: 'DF Labs Website'
        };

        showMessage(currentLang === 'ar' ? '⏳ جاري الإرسال...' : '⏳ Submitting... Please wait.', 'loading');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';

        try {
            await submitToGoogleSheets(formData);
            showMessage(
                currentLang === 'ar'
                    ? '✅ شكراً! سنتواصل معك قريباً.'
                    : '✅ Thank you! We\'ll reach out to you soon.',
                'success'
            );
            form.reset();
        } catch (error) {
            showMessage(
                currentLang === 'ar'
                    ? '❌ حدث خطأ. حاول مرة أخرى أو تواصل معنا مباشرة.'
                    : '❌ Something went wrong. Please try again.',
                'error'
            );
        } finally {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }

    function validateForm(name, email) {
        const errorMsg = currentLang === 'ar'
            ? 'الرجاء إدخال اسمك الكامل.'
            : 'Please enter your full name.';
        const emailError = currentLang === 'ar'
            ? 'الرجاء إدخال بريد إلكتروني صحيح.'
            : 'Please enter a valid email address.';

        if (!name) {
            showMessage(errorMsg, 'error');
            return false;
        }
        if (!email) {
            showMessage(emailError, 'error');
            return false;
        }
        if (!isValidEmail(email)) {
            showMessage(emailError, 'error');
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(text, type) {
        if (!messageDiv) return;
        messageDiv.textContent = text;
        messageDiv.className = type;
        messageDiv.style.display = 'block';
        messageDiv.style.whiteSpace = 'pre-line';

        if (type === 'success') {
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 6000);
        }
        if (type === 'loading') {
            setTimeout(() => {
                if (messageDiv.className === 'loading') {
                    messageDiv.style.display = 'none';
                }
            }, 10000);
        }
    }
});

// ============================================================
// GENERATE SPACE DOTS DYNAMICALLY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const heroChip = document.querySelector('.hero-chip');

    if (heroChip) {
        const dotsContainer = document.createElement('span');
        dotsContainer.className = 'space-dots';
        dotsContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
        `;

        const colors = ['var(--teal-light)', 'var(--teal)', 'var(--purple-mid)', '#FFFFFF', 'rgba(152,232,222,0.5)'];
        const sizes = [2, 3, 4, 5, 6, 7, 8];

        for (let i = 0; i < 40; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot-bg';

            const size = sizes[Math.floor(Math.random() * sizes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const duration = 2 + Math.random() * 6;
            const delay = Math.random() * 3;
            const opacity = 0.15 + Math.random() * 0.35;

            dot.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: ${color};
                top: ${top}%;
                left: ${left}%;
                animation: float-dot ${duration}s ease-in-out ${delay}s infinite;
                opacity: ${opacity};
            `;

            dotsContainer.appendChild(dot);
        }

        heroChip.insertBefore(dotsContainer, heroChip.firstChild);
    }
});

// ============================================================
// INTERACTIVE LOGO BACKGROUND
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const heroChip = document.querySelector('.hero-chip');

    if (heroChip) {
        heroChip.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const img = this.querySelector('img');
            if (img) {
                img.style.transform = `translate(${x * 15}px, ${y * 15}px) rotate(${x * 2}deg)`;
                img.style.transition = 'transform 0.1s ease-out';
            }
        });

        heroChip.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'translate(0, 0) rotate(0deg)';
            }
        });
    }
});

// ============================================================
// TESTING & DEBUGGING
// ============================================================

/**
 * Test function to verify Google Sheets connection
 * Open browser console and run: testGoogleSheetsConnection()
 */
function testGoogleSheetsConnection() {
    if (!GOOGLE_APPS_SCRIPT_URL) {
        console.error('❌ GOOGLE_APPS_SCRIPT_URL is not set in script.js');
        return;
    }

    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        timestamp: new Date().toISOString(),
        source: 'Test'
    };

    console.log('🔍 Testing connection to:', GOOGLE_APPS_SCRIPT_URL);
    console.log('📤 Sending test data:', testData);

    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
    })
    .then(() => {
        console.log('✅ Test data sent successfully!');
        console.log('📋 Check your Google Sheet for a new row with test data.');
        console.log('🗑️ Remember to delete the test row when done.');
    })
    .catch((error) => {
        console.error('❌ Test failed:', error);
    });
}

// Expose test function globally for console testing
window.testGoogleSheetsConnection = testGoogleSheetsConnection;
