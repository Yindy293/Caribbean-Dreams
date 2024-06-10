document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('about-toggle').addEventListener('click', function() {
        var content = document.getElementById('about-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('tips-toggle').addEventListener('click', function() {
        var content = document.getElementById('tips-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
