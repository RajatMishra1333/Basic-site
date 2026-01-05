// Navigation function
function nextPage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        window.location.href = 'page2.html';
    } else if (currentPage === 'page2.html') {
        window.location.href = 'page3.html';
    } else if (currentPage === 'page3.html') {
        window.location.href = 'page4.html';
    }
}

// Add animation to buttons on load
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s both`;
    });
});

// Prevent accidental back navigation
window.addEventListener('beforeunload', function(e) {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'page4.html') {
        e.preventDefault();
        e.returnValue = '';
    }
});
