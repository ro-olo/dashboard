const toggleButton = document.getElementById('toggle_theme');
            toggleButton.addEventListener('click', function() {
                const root = document.documentElement;
                root.classList.toggle('dark');
            });