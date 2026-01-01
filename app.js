// وقتی صفحه کامل لود شد اجرا می‌شود
document.addEventListener("DOMContentLoaded", () => {
    console.log("صفحه لود شد!");

    const header = document.querySelector(".site-header");
    const btn = document.getElementById("changeColorBtn");

    btn.addEventListener("click", () => {
        header.style.backgroundColor = randomColor();
    });
});

// تابع ساخت رنگ رندوم
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
