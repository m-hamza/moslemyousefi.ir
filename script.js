(() => {
  const phone = '+989143239673';
  const serviceData = {
    consulting: {
      title: 'مشاوره حقوقی تخصصی',
      body: 'موضوع، اسناد و شرایط پرونده بررسی می‌شود تا مسیرهای قانونی، نکات مهم و اقدام‌های لازم روشن شود. برای مسائل مهم، مراجعه حضوری با مدارک مرتبط پیشنهاد می‌شود.'
    },
    representation: {
      title: 'قبول وکالت پرونده',
      body: 'پس از بررسی موضوع و مستندات، در صورت امکان و توافق، شرایط همکاری وکالت مشخص می‌شود. پذیرش پرونده منوط به بررسی حرفه‌ای و توافق طرفین است.'
    },
    property: {
      title: 'دعاوی ملکی و ثبتی',
      body: 'موضوعاتی مانند اختلافات مالکیت، قراردادهای ملکی، تخلیه، اسناد و مسائل ثبتی حسب مورد بررسی می‌شوند. همراه داشتن مدارک و اسناد ملک برای مشاوره مفید است.'
    },
    family: {
      title: 'دعاوی خانواده',
      body: 'موضوعات مربوط به طلاق، مهریه، نفقه، حضانت و دیگر اختلافات خانوادگی با توجه به شرایط و اسناد پرونده بررسی می‌شوند.'
    },
    criminal: {
      title: 'دعاوی کیفری و دفاع',
      body: 'برای پرونده‌های کیفری، بررسی دقیق ابلاغیه‌ها، شکواییه، ادله و روند رسیدگی اهمیت دارد. در صورت نیاز، مدارک را برای مشاوره حضوری همراه بیاورید.'
    },
    commercial: {
      title: 'چک، سفته و مطالبات',
      body: 'اسناد تجاری، بدهی‌ها، مطالبات و اختلافات مالی از نظر حقوقی بررسی می‌شوند. اصل یا تصویر واضح اسناد برای بررسی اولیه مفید است.'
    },
    drafting: {
      title: 'تنظیم دادخواست و لایحه',
      body: 'متن دادخواست یا لایحه با توجه به موضوع، خواسته، مستندات و وضعیت پرونده تنظیم یا بررسی می‌شود.'
    },
    notice: {
      title: 'اظهارنامه و شکواییه',
      body: 'برای بیان رسمی مطالبه یا شروع پیگیری کیفری، متن اظهارنامه یا شکواییه بر مبنای موضوع و مدارک موجود بررسی و تنظیم می‌شود.'
    },
    contracts: {
      title: 'تنظیم و بررسی قرارداد',
      body: 'مفاد قرارداد، تعهدات طرفین، شروط مهم، ضمانت اجرا و ریسک‌های احتمالی قبل از امضا یا در زمان اختلاف بررسی می‌شود.'
    },
    inheritance: {
      title: 'ارث، وصیت و انحصار وراثت',
      body: 'مسائل مربوط به ترکه، سهم‌الارث، وصیت و انحصار وراثت با توجه به وضعیت قانونی و اسناد موجود بررسی می‌شوند.'
    },
    administrative: {
      title: 'امور اداری و دیوانی',
      body: 'موضوعات حقوق عمومی، اداری و دعاوی مرتبط، حسب مورد و پس از بررسی اسناد و تصمیم یا اقدام اداری ارزیابی می‌شوند.'
    },
    'case-review': {
      title: 'بررسی و ارزیابی پرونده',
      body: 'روند پرونده، اسناد و ابلاغیه‌ها مرور می‌شوند تا موارد قابل پیگیری، نقص مدارک و اقدام‌های احتمالی مشخص شود.'
    }
  };

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navWrap = document.querySelector('.nav-wrap');
  const nav = document.querySelector('.nav');
  if (navToggle && navWrap && nav) {
    navToggle.addEventListener('click', () => {
      const open = navWrap.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navWrap.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Service filtering + modal
  const cards = [...document.querySelectorAll('.service-card')];
  const filters = [...document.querySelectorAll('.filter')];
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  const openService = (key) => {
    const data = serviceData[key];
    if (!data || !modal) return;
    modalTitle.textContent = data.title;
    modalBody.textContent = data.body;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const close = modal.querySelector('.modal-close');
    if (close) close.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cards.forEach(card => card.addEventListener('click', () => openService(card.dataset.service)));
  modal?.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      const target = filter.dataset.filter;
      cards.forEach(card => {
        const visible = target === 'all' || card.dataset.category === target;
        card.style.display = visible ? '' : 'none';
      });
    });
  });

  // Appointment form opens a pre-filled SMS.
  const form = document.getElementById('appointmentForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const mode = document.getElementById('mode').value;
    const message = document.getElementById('message').value.trim();
    const text = [
      'سلام، برای هماهنگی مشاوره حقوقی درخواست دارم.',
      `نام: ${name}`,
      `موضوع: ${subject}`,
      `نوع درخواست: ${mode}`,
      message ? `توضیح: ${message}` : ''
    ].filter(Boolean).join('\n');
    const smsUrl = `sms:${phone}?body=${encodeURIComponent(text)}`;
    window.location.href = smsUrl;
  });

  // Subtle reveal on scroll.
  const revealables = document.querySelectorAll('.service-card, .step, .contact-card, .faq-list details, .about-stat');
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 }) : null;
  revealables.forEach(el => observer?.observe(el));
})();
