document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    let isOpen = false;

    envelope.addEventListener('click', function() {
        if (!isOpen) {
            envelope.classList.add('open');
            isOpen = true;
            
            // Transition to months page after animation completes
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        }
    });
});