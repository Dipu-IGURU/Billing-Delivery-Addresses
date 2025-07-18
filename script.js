document.addEventListener('DOMContentLoaded', function() {
    const plainPackagingBtn = document.getElementById('plainPackaging');
    let isSelected = false;

    plainPackagingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isSelected = !isSelected;
        if (isSelected) {
            plainPackagingBtn.classList.add('selected');
        } else {
            plainPackagingBtn.classList.remove('selected');
        }
    });

    // Prevent form submission for demo
    document.getElementById('addressForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (Demo only)');
    });
}); 