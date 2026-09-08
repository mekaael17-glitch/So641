document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const processBtn = document.getElementById('processBtn');

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    processBtn.addEventListener('click', () => {
        if (!imagePreview.src || imagePreview.style.display === 'none') {
            alert('الرجاء اختيار صورة أولاً!');
            return;
        }
        alert('جاري معالجة الصورة بالذكاء الاصطناعي...');
    });
});
