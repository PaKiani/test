// تغییر رنگ هدر با کلیک روی دکمه
const changeColorBtn = document.getElementById('changeColorBtn');
const siteHeader = document.getElementById('siteHeader');

// آرایه‌ای از رنگ‌های مختلف برای هدر
const headerColors = [
    'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
    'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
    'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
    'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)'
];

// بارگذاری رنگ ذخیره شده از localStorage
let currentColorIndex = localStorage.getItem('headerColorIndex') || 0;

// اعمال رنگ ذخیره شده
siteHeader.style.background = headerColors[currentColorIndex];

changeColorBtn.addEventListener('click', function() {
    // تغییر به رنگ بعدی
    currentColorIndex = (parseInt(currentColorIndex) + 1) % headerColors.length;
    
    // اعمال رنگ جدید
    siteHeader.style.background = headerColors[currentColorIndex];
    
    // ذخیره در localStorage
    localStorage.setItem('headerColorIndex', currentColorIndex);
    
    // افکت روی دکمه
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// منوی همبرگری برای موبایل
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    this.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// بستن منو هنگام کلیک روی لینک‌ها
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// شبیه‌سازی کامیت Git
const simulateCommitBtn = document.getElementById('simulateCommit');
const commitHistory = document.getElementById('commitHistory');
const commitList = document.getElementById('commitList');

// آرایه‌ای از پیام‌های کامیت
const commitMessages = [
    "اولین کامیت: ایجاد پروژه اولیه",
    "اضافه کردن فایل‌های HTML و CSS",
    "ایجاد فایل JavaScript برای تعاملات",
    "اضافه کردن واکنش‌گرایی برای موبایل",
    "رفع باگ‌های کوچک در استایل‌ها",
    "به‌روزرسانی دکمه تغییر رنگ",
    "اضافه کردن انیمیشن‌های جدید",
    "بهینه‌سازی کدهای CSS",
    "اضافه کردن منوی همبرگری برای موبایل",
    "به‌روزرسانی فوتر و اطلاعات تماس"
];

// شبیه‌سازی کامیت‌های اولیه
for (let i = 0; i < 3; i++) {
    addCommitToHistory(commitMessages[i]);
}

simulateCommitBtn.addEventListener('click', function() {
    // انتخاب یک پیام تصادفی
    const randomIndex = Math.floor(Math.random() * commitMessages.length);
    const commitMessage = commitMessages[randomIndex];
    
    // اضافه کردن کامیت به تاریخچه
    addCommitToHistory(commitMessage);
    
    // نمایش تاریخچه اگر مخفی است
    commitHistory.style.display = 'block';
    
    // افکت روی دکمه
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // ایجاد یک hash شبیه‌سازی شده برای کامیت
    const commitHash = generateCommitHash();
    
    // نمایش پیام موفقیت
    showNotification(`کامیت جدید با hash ${commitHash} ایجاد شد!`);
});

function addCommitToHistory(message) {
    const commitItem = document.createElement('li');
    
    // ایجاد تاریخ شبیه‌سازی شده
    const now = new Date();
    const dateString = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} - ${now.getHours()}:${now.getMinutes()}`;
    
    // ایجاد hash شبیه‌سازی شده
    const commitHash = generateCommitHash();
    
    commitItem.textContent = `${commitHash} - ${message} (${dateString})`;
    commitList.appendChild(commitItem);
    
    // اسکرول به آخرین کامیت
    commitItem.scrollIntoView({ behavior: 'smooth' });
}

function generateCommitHash() {
    // ایجاد یک hash تصادفی 7 کاراکتری شبیه به Git
    const chars = '0123456789abcdef';
    let hash = '';
    for (let i = 0; i < 7; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
    }
    return hash;
}

function showNotification(message) {
    // ایجاد عنصر نوتیفیکیشن
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #6a11cb;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: 500;
        animation: fadeInOut 3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // حذف نوتیفیکیشن بعد از 3 ثانیه
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// اضافه کردن استایل انیمیشن برای نوتیفیکیشن
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; bottom: 0; }
        15% { opacity: 1; bottom: 20px; }
        85% { opacity: 1; bottom: 20px; }
        100% { opacity: 0; bottom: 0; }
    }
`;
document.head.appendChild(style);