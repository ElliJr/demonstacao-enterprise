document.querySelectorAll('.sidebar button').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all buttons
        document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        this.classList.add('active');
        // Hide all sections
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        // Show selected section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});