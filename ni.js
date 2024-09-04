// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // هنا يمكنك إضافة تعليمات JavaScript للتفاعل مع البيانات أو إرسالها إلى الخادم

    console.log('Username:', username);
    console.log('Password:', password);
});
