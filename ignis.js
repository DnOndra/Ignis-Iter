document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const searchBar = document.querySelector('.search-bar');
    const navLinks = document.querySelectorAll('nav a');
    const contentBlocks = document.querySelectorAll('.text-block');
    const images = document.querySelectorAll('.image-container img');
    const sponsorImage = document.querySelector('.doly-logo');

    logo.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    logo.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });

    searchBar.addEventListener('focus', function() {
        this.style.backgroundColor = 'rgba(82, 82, 82, 0.3)';
        this.style.transition = 'background-color 0.3s ease';
    });

    searchBar.addEventListener('blur', function() {
        this.style.backgroundColor = 'rgba(82, 82, 82, 0.219)';
        this.style.transition = 'background-color 0.3s ease';
    });

    searchBar.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();

        contentBlocks.forEach(function(contentBlock) {
            const text = contentBlock.textContent.toLowerCase();

            if (text.includes(searchText)) {
                searchBar.style.backgroundColor = 'orange';
            } else {
                searchBar.style.backgroundColor = 'rgba(82, 82, 82, 0.3)';
            }
        });
    });

    searchBar.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const searchText = this.value.toLowerCase();

            contentBlocks.forEach(function(contentBlock) {
                const text = contentBlock.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    searchBar.style.backgroundColor = 'orange';
                } else {
                    searchBar.style.backgroundColor = 'rgba(82, 82, 82, 0.3)';
                }
            });
        }
    });

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('mouseover', function() {
            this.style.color = 'orange';
            this.style.transition = 'color 0.3s ease';
        });

        navLink.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.transition = 'color 0.3s ease';
        });
    });

    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });

    sponsorImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    sponsorImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });

    sponsorImage.addEventListener('click', function() {
        window.location.href = 'https://www.pekelnedoly.cz/';
    });

    logo.addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com/p/Ignis-Iter-100064605793150/';
    });

    const editIcon = document.createElement('img');
    editIcon.src = 'https://cdn-icons-png.freepik.com/512/8367/8367683.png';
    editIcon.alt = 'Edit';
    editIcon.style.position = 'fixed';
    editIcon.style.left = '20px';
    editIcon.style.top = '20px';
    editIcon.style.width = '80px';
    editIcon.style.height = '80px';
    editIcon.style.cursor = 'pointer';
    editIcon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    editIcon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
    editIcon.addEventListener('click', function() {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeycScSsMD6NI32L0LSYvqD8Z8moO5y0Ul6FSrQ_Wn8GUqO8w/viewform?fbzx=-4611751694584212060';
    });
    document.body.appendChild(editIcon);
});
