/**
 * وب‌سایت رسمی مسلم یوسفی | وکیل پایه یک دادگستری و مشاور حقوقی
 * تعاملات داینامیک، دسته‌بندی خدمات، مودال اطلاعات تماس و رزرو
 */

// 1. بانک جامع داده‌های خدمات حقوقی
const legalServicesData = [
    {
        id: "melki-sanad",
        category: "melki",
        categoryName: "دعاوی ملکی و ثبتی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        title: "الزام به تنظیم سند رسمی و دعاوی اراضی",
        shortDesc: "پیگیری تخصصی پرونده‌های الزام به اخذ پایان‌کار، صورتمجلس تفکیکی و انتقال رسمی اسناد املاک مسکونی و تجاری.",
        fullDesc: "دعاوی الزام به تنظیم سند رسمی از پیچیده‌ترین پرونده‌های ملکی در محاکم دادگستری هستند که نیازمند اثبات وقوع عقد بیع، احراز مالکیت رسمی خوانده و رفع موانع ثبتی نظیر توقیف یا بازداشت ملک است. بررسی دقیق قولنامه، مبایعه‌نامه و استعلام ثبتی پیش از طرح دعوا امری ضروری است.",
        features: [
            "الزام به اخذ پایان‌کار و صورت‌مجلس تفکیکی",
            "مطالبه خسارت تأخیر تأدیه و وجه التزام قراردادی",
            "ابطال یا فسخ مبایعه‌نامه‌های معارض"
        ],
        requiredDocs: [
            "اصل و کپی مبایعه‌نامه یا قولنامه خرید",
            "گواهی عدم حضور صادره از دفترخانه اسناد رسمی",
            "استعلام آخرین وضعیت ثبتی پلاک ثبتی ملک",
            "کارت ملی و مدارک سجلی خریدار"
        ]
    },
    {
        id: "melki-khal",
        category: "melki",
        categoryName: "دعاوی ملکی و ثبتی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 9h6"/><path d="M15 15h6"/></svg>`,
        title: "خلع ید، تصرف عدوانی و تخلیه ید",
        shortDesc: "رفع تصرفات غیرقانونی، دعاوی ممانعت از حق، مزاحمت ملکی و تخلیه فوری اماکن مسکونی و تجاری (سرقفلی).",
        fullDesc: "در دعوای خلع ید، احراز مالکیت رسمی خواهان رکن اصلی رسیدگی است؛ در حالی که در تصرف عدوانی، سبق تصرف خواهان و لحوق تصرف خوانده ملاک قرار می‌گیرد. تفکیک دقیق عنوان خواسته تأثیر مستقیمی بر پذیرش دعوا در دادگاه خواهد داشت.",
        features: [
            "دستور تخلیه فوری شورای حل اختلاف",
            "خلع ید غاصبانه از اراضی زراعی و املاک شهری",
            "مطالبه اجرت‌المثل ایام تصرف با ارجاع به کارشناسی"
        ],
        requiredDocs: [
            "سند رسمی مالکیت یا حکم اثبات مالکیت قطعی",
            "تأمین دلیل وضعیت تصرفات با جلب نظر کارشناس",
            "اظهارنامه رسمی ابلاغ‌شده به متصرف",
            "قرارداد اجاره (در صورت دعوای تخلیه)"
        ]
    },
    {
        id: "keyfari-kolahbardari",
        category: "keyfari",
        categoryName: "دعاوی کیفری و جزایی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
        title: "کلاهبرداری، خیانت در امانت و جرایم مالی",
        shortDesc: "تنظیم شکواییه تخصصی کیفری، دفاع در دادسرا و دادگاه کیفری دو و یک در پرونده‌های حیف و میل اموال و کلاهبرداری.",
        fullDesc: "اثبات مانور متقلبانه و بردن مال دیگری نیازمند استخراج دقیق ارکان مادی و معنوی جرم کلاهبرداری است. تنظیم دادخواست مطالبه ضرر و زیان ناشی از جرم همزمان با تعقیب کیفری، مسیر بازگشت اموال مالباخته را تسریع می‌بخشد.",
        features: [
            "طرح شکواییه کلاهبرداری سنتی و اینترنتی",
            "پیگیری اتهام خیانت در امانت اسناد و اموال",
            "درخواست صدور قرار تأمین خواسته جهت توقیف اموال متهم"
        ],
        requiredDocs: [
            "رسیدهای واریزی بانکی و پیرینت تراکنش‌ها",
            "قراردادها، پیام‌ها، چت‌ها و پرینت مکالمات",
            "شهادت شهود و صورتجلسات انتظامی",
            "مشخصات هویتی و آدرس متهم (در صورت وجود)"
        ]
    },
    {
        id: "keyfari-zarb",
        category: "keyfari",
        categoryName: "دعاوی کیفری و جزایی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: "نزاع، ضرب و جرح، تصادفات و دیه",
        shortDesc: "پیگیری پرونده‌های ایراد صدمه بدنی، تصادفات رانندگی، مطالبه ارش و دیه از صندوق تأمین خسارت‌های بدنی و بیمه.",
        fullDesc: "در دعاوی ایراد ضرب و جرح و تصادفات، ارجاع به هنگام به پزشکی قانونی و تطبیق گواهی‌های صادره با مواد قانون مجازات اسلامی در باب دیات، از حقوق اصلی بزه دیده محافظت می‌کند.",
        features: [
            "اعتراض تخصصی به نظریات پزشکی قانونی و ارش",
            "مطالبه دیه از مقصر حادثه و شرکت‌های بیمه‌گر",
            "پیگیری دیه از بیت‌المال یا صندوق خسارت‌های بدنی"
        ],
        requiredDocs: [
            "کروکی تصادف راهور یا گزارش کلانتری",
            "گواهی‌های طول درمان و قطعی پزشکی قانونی",
            "بیمه‌نامه مقصر حادثه و اوراق بازجویی دادسرا"
        ]
    },
    {
        id: "hoghooghi-chek",
        category: "hoghooghi",
        categoryName: "دعاوی حقوقی و مالی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
        title: "مطالبه چک صیادی، سفته و اسناد تجاری",
        shortDesc: "صدور اجراییه مستقیم قانون جدید چک، توقیف فوری حساب‌های بانکی و اموال صادرکننده و ظهرنویسان در اجرای احکام.",
        fullDesc: "با توجه به قانون جدید صدور چک، امکان تقاضای صدور اجراییه مستقیم بدون نیاز به دادرسی طولانی فراهم شده است. در خصوص سایر مطالبات و سفته‌ها نیز اجرای قرار تأمین خواسته پیش از ابلاغ به بدهکار، مانع از انتقال اموال می‌گردد.",
        features: [
            "صدور اجراییه مستقیم بدون پرداخت هزینه دادرسی سنگین",
            "توقیف پلاک ثبتی، خودرو و انسداد کد ملی بدهکار",
            "مطالبه خسارت تأخیر تأدیه بر اساس شاخص بانک مرکزی"
        ],
        requiredDocs: [
            "اصل لاشه چک و گواهینامه عدم پرداخت بانک",
            "کد رهگیری چک برگشتی در سامانه صیاد",
            "اصل سفته‌ها و واخواست‌نامه بانکی"
        ]
    },
    {
        id: "hoghooghi-talab",
        category: "hoghooghi",
        categoryName: "دعاوی حقوقی و مالی",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
        title: "مطالبه وجه، خسارات قراردادی و الزامات",
        shortDesc: "طرح دادخواست مطالبه وجوه واریزی بدون جهت، خسارات ناشی از عدم انجام تعهد و دادخواست‌های اعسار از پرداخت.",
        fullDesc: "رسیدگی به تعهدات قراردادی مستلزم بررسی شروط ضمن عقد، اثبات تقصیر و تخلف طرف مقابل و اثبات وقوع خسارت واقعی است. اتخاذ موضع قانونی صحیح از تضییع حقوق شما جلوگیری خواهد کرد.",
        features: [
            "مطالبه وجوه واریزی به اشتباه (ماده ۳۰۱ قانون مدنی)",
            "مطالبه خسارت عدم انجام تعهد و وجه التزام",
            "تقاضای ابطال قراردادهای صوری و ربوی"
        ],
        requiredDocs: [
            "رسیدهای بانکی و فاکتورهای معتبر",
            "قرارداد پایه یا توافق‌نامه‌های کتبی",
            "اظهارنامه‌های رسمی ابلاغ‌شده پیشین"
        ]
    },
    {
        id: "khanevadeh-mehriyeh",
        category: "khanevadeh",
        categoryName: "دعاوی خانواده و ارث",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        title: "مطالبه مهریه، نفقه و اجرت‌المثل ایام زوجیت",
        shortDesc: "توقیف اموال، ممنوع‌الخروجی، اجرای ثبت و دادگاه خانواده، دفاع در برابر اعسار و تقسیط مهریه.",
        fullDesc: "وصول مهریه ابتدا از اداره ثبت اسناد و املاک پیگیری می‌شود و در صورت عدم شناسایی مال، در دادگاه خانواده اقامه دعوا می‌گردد. حفظ آرامش موکل و حفظ حقوق شرعی و قانونی سرلوحه کار ماست.",
        features: [
            "ممنوع‌الخروجی زوج و توقیف اموال در اجرای ثبت",
            "توقیف حقوق، حساب بانکی، سهام و املاک",
            "مطالبه نفقه معوقه زوجه و فرزندان مشترک"
        ],
        requiredDocs: [
            "سند رسمی ازدواج (عقدنامه)",
            "شناسنامه و کارت ملی زوجه",
            "لیست اموال شناخته‌شده زوج (در صورت وجود)"
        ]
    },
    {
        id: "khanevadeh-tarakah",
        category: "khanevadeh",
        categoryName: "دعاوی خانواده و ارث",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        title: "انحصار وراثت، تحریر و تقسیم ترکه",
        shortDesc: "اخذ گواهی حصر وراثت، مهر و موم ترکه، ارزیابی رسمی ماترک متوفی و صدور دستور فروش املاک مشاعی موروثی.",
        fullDesc: "اختلاف میان وراث در خصوص تقسیم اموال متوفی یکی از پرچالش‌ترین پرونده‌های قضایی است. طی مراحل تحریر ترکه، تعیین سهام قانونی و در صورت عدم امکان تقسیم، صدور دستور فروش ملک مشاعی بهترین راهکار است.",
        features: [
            "اخذ سریع گواهی انحصار وراثت از شورای حل اختلاف",
            "دستور فروش ملک مشاعی غیرقابل افراز",
            "ابطال وصیت‌نامه‌های عادی مازاد بر ثلث"
        ],
        requiredDocs: [
            "گواهی فوت متوفی",
            "استشهادیه انحصار وراثت و شناسنامه وراث",
            "اسناد مالکیت ماترک و اموال متوفی"
        ]
    },
    {
        id: "qarardad-tanzim",
        category: "qarardad",
        categoryName: "تنظیم اسناد و قراردادها",
        icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
        title: "تنظیم تخصصی قراردادهای تجاری و مشارکت در ساخت",
        shortDesc: "نگارش حرفه‌ای مبایعه‌نامه، اجاره‌نامه، قرارداد پیش‌فروش، شراکت، صلح‌نامه و تعیین داوری مرضی‌الطرفین.",
        fullDesc: "پیشگیری از بروز دعوا همواره بسیار کم‌هزینه‌تر و مطمئن‌تر از طرح دعوا در دادگستری است. حضور وکیل در جلسه تنظیم قرارداد و تدوین دقیق شروط فسخ و ضمانت‌اجراها از میلیاردها تومان ضرر احتمالی جلوگیری می‌نماید.",
        features: [
            "تنظیم قرارداد جامع مشارکت در ساخت با ضمانت اجرایی قوی",
            "درج شرط داوری تخصصی جهت تسریع در حل اختلاف",
            "بررسی اسناد و حضور در جلسات امضای قرارداد"
        ],
        requiredDocs: [
            "پیش‌نویس قرارداد یا موضوع توافق طرفین",
            "مدارک هویتی و مالکیتی طرفین قرارداد",
            "جواز ساخت، پروانه یا مشخصات فنی ملک (در صورت مشارکت)"
        ]
    }
];

// 2. مقداردهی اولیه پس از بارگذاری DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    renderServicesGrid('all');
    initServiceFilters();
    initServiceModal();
    initConsultationForm();
    initFaqAccordion();
    initFooterServiceLinks();
});

// مدیریت اسکرول هدر
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// منوی ریسپانسیو موبایل
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // بستن منو با کلیک روی هر لینک
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.classList.remove('active');
        });
    });
}

// رندر کارت‌های خدمات
function renderServicesGrid(filter = 'all') {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    const filtered = filter === 'all' 
        ? legalServicesData 
        : legalServicesData.filter(item => item.category === filter);

    container.innerHTML = filtered.map(item => `
        <article class="service-card" data-service-id="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
            <div>
                <div class="service-card-top">
                    <div class="service-icon-wrap">${item.icon}</div>
                    <span class="service-category-badge">${item.categoryName}</span>
                </div>
                <h3 class="service-card-title">${item.title}</h3>
                <p class="service-card-desc">${item.shortDesc}</p>
                
                <ul class="service-features-list">
                    ${item.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div class="service-card-footer">
                <span class="service-action-hint">
                    اطلاعات تماس و مشاوره
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </span>
                <span class="service-call-pill">دفتر چاراویماق</span>
            </div>
        </article>
    `).join('');

    // اتصال رویداد کلیک به هر کارت
    container.querySelectorAll('.service-card').forEach(card => {
        const id = card.getAttribute('data-service-id');
        card.addEventListener('click', () => openServiceModal(id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(id);
            }
        });
    });
}

// دکمه‌های فیلتر خدمات
function initServiceFilters() {
    const buttons = document.querySelectorAll('#servicesFilter .filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            renderServicesGrid(category);
        });
    });
}

// باز کردن و بستن مودال اختصاصی خدمات
function initServiceModal() {
    const modal = document.getElementById('serviceModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', closeServiceModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeServiceModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeServiceModal();
        }
    });
}

function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('modalDynamicContent');
    const service = legalServicesData.find(s => s.id === serviceId);
    if (!modal || !content || !service) return;

    content.innerHTML = `
        <div class="modal-header-block">
            <div class="modal-icon-badge">${service.icon}</div>
            <div>
                <span class="modal-cat-tag">${service.categoryName}</span>
                <h3>${service.title}</h3>
            </div>
        </div>

        <p class="modal-description-full">${service.fullDesc}</p>

        <h4 class="modal-section-subtitle">مدارک و مستندات لازم جهت بررسی در جلسه حضوری:</h4>
        <ul class="modal-docs-list">
            ${service.requiredDocs.map(doc => `
                <li>
                    <span class="dot">●</span>
                    <span>${doc}</span>
                </li>
            `).join('')}
        </ul>

        <div class="modal-contact-box">
            <h4>هماهنگی مشاوره و بررسی پرونده «${service.title}»</h4>
            <p>
                جهت اتخاذ بهترین تصمیم و تحلیل اسناد توسط <strong>آقای مسلم یوسفی (وکیل پایه یک دادگستری)</strong>، 
                حضور در دفتر وکالت به همراه اصل یا کپی مدارک توصیه می‌شود. همچنین پیگیری پرونده‌های در دست اقدام از طریق تماس با منشی دفتر امکان‌پذیر است.
            </p>

            <div class="modal-contact-buttons">
                <a href="tel:+989143239673" class="btn-gold-solid">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>تماس تلفنی با شماره ۰۹۱۴۳۲۳۹۶۷۳</span>
                </a>
                <a href="sms:+989143239673" class="btn-dark-outline">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>ارسال پیامک نوبت‌دهی (SMS)</span>
                </a>
            </div>

            <div style="margin-top: 14px; font-size: 0.82rem; color: #cbd5e1;">
                📍 <strong>نشانی دفتر:</strong> استان آذربایجان شرقی، چاراویماق، قره آغاج، بلوار ۲۲ بهمن
            </div>
        </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// فرم ثبت درخواست نوبت مشاوره
function initConsultationForm() {
    const form = document.getElementById('consultationForm');
    const alert = document.getElementById('formSuccessAlert');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // دریافت فیلدها
        const name = form.fullName.value.trim();
        const phone = form.phoneNum.value.trim();
        const caseType = form.caseType.value;
        const meetingType = form.querySelector('input[name="meetingType"]:checked')?.value || 'حضوری';
        const details = form.caseDetails.value.trim();

        if (!name || !phone) return;

        // شبیه‌سازی ثبت موفق و ارائه بازخورد کاربردی
        form.style.display = 'none';
        if (alert) {
            alert.style.display = 'flex';
            alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// آکاردئون پرسش‌های متداول
function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-accordion .faq-item');
    items.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (!questionBtn) return;

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // بستن سایر موارد
            items.forEach(i => i.classList.remove('active'));
            // باز یا بسته کردن این مورد
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // باز بودن پیش‌فرض اولین پرسش
    if (items.length > 0) {
        items[0].classList.add('active');
    }
}

// لینک‌های فوتر برای باز کردن سریع خدمات
function initFooterServiceLinks() {
    const triggers = document.querySelectorAll('[data-service-trigger]');
    triggers.forEach(trig => {
        trig.addEventListener('click', (e) => {
            e.preventDefault();
            // اسکرول به سکشن خدمات
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
            // باز کردن اولین سرویس ملکی یا مرتبط
            if (legalServicesData.length > 0) {
                setTimeout(() => {
                    openServiceModal(legalServicesData[0].id);
                }, 400);
            }
        });
    });
}
