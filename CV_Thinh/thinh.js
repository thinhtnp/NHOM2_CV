// Preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
        }, 1000);
    }, 1500);
});

// Particle.js
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#00dbde", "#fc00ff", "#ff2a6d", "#05d9e8"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#05d9e8",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Trang giới thiệu hoành tráng
    const enterBtn = document.getElementById('enter-btn');
    const introPage = document.querySelector('.intro-page');
    const cvContainer = document.querySelector('.cv-container');
    
    // Hiệu ứng liquid button
    enterBtn.addEventListener('mousemove', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        this.querySelector('.liquid').style.transform = `rotate(${x * 0.5}deg)`;
    });
    
    // Hiệu ứng khi nhấn nút "Khám phá ngay"
    enterBtn.addEventListener('click', function() {
        // Hiệu ứng nhấn
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Hiệu ứng biến mất trang giới thiệu
        introPage.style.opacity = '0';
        introPage.style.transition = 'opacity 1s ease, transform 1s ease';
        introPage.style.transform = 'scale(1.1)';
        
        // Hiển thị nội dung CV sau khi trang giới thiệu biến mất
        setTimeout(() => {
            introPage.style.display = 'none';
            cvContainer.style.display = 'block';
            
            // Kích hoạt hiệu ứng cho banner
            document.querySelector('.banner-content').classList.add('animated');
            
            // Cuộn lên đầu trang
            window.scrollTo(0, 0);
            
            // Kích hoạt các hiệu ứng scroll
            checkScroll();
            checkSkills();
            
            // Khởi tạo floating navigation
            initFloatingNav();
        }, 1000);
    });
    
    // Kiểm tra nếu người dùng ấn Esc thì bỏ qua trang giới thiệu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            introPage.style.display = 'none';
            cvContainer.style.display = 'block';
            document.querySelector('.banner-content').classList.add('animated');
            checkScroll();
            checkSkills();
            initFloatingNav();
        }
    });
    
    // Floating Navigation
    function initFloatingNav() {
        const floatingNav = document.querySelector('.floating-nav');
        const navItems = floatingNav.querySelectorAll('a');
        
        // Hiệu ứng xuất hiện
        setTimeout(() => {
            floatingNav.classList.add('active');
        }, 1500);
        
        // Hiệu ứng hover
        navItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.color = getRandomNeonColor();
            });
            
            item.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = '';
                    this.style.color = 'var(--text-color)';
                }
            });
        });
    }
    
    function getRandomNeonColor() {
        const colors = ['#ff2a6d', '#05d9e8', '#d300c5', '#00ff9d'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    
    backToTop.addEventListener('mouseenter', function() {
        this.querySelector('.back-to-top-tooltip').style.opacity = '1';
        this.querySelector('.back-to-top-tooltip').style.top = '-50px';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.querySelector('.back-to-top-tooltip').style.opacity = '0';
        this.querySelector('.back-to-top-tooltip').style.top = '-40px';
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll Events
    window.addEventListener('scroll', function() {
        // Back to Top Button
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Highlight menu khi scroll
        highlightMenu();
    });
    
    // Hiệu ứng khi scroll đến các section
    function checkScroll() {
        const sections = document.querySelectorAll('.section');
        const projects = document.querySelectorAll('.project-item');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
                
                // Thêm hiệu ứng đặc biệt cho từng section
                if (section.classList.contains('skills-section')) {
                    animateSkills();
                }
                
                if (section.classList.contains('projects-section')) {
                    animateProjects();
                }
            }
        });
        
        // Hiệu ứng cho từng project item
        projects.forEach((project, index) => {
            const projectTop = project.getBoundingClientRect().top;
            
            if (projectTop < windowHeight - 100) {
                setTimeout(() => {
                    project.classList.add('visible');
                }, index * 200);
            }
        });
    }
    
    // Hiệu ứng cho thanh kỹ năng
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-level');
        skillBars.forEach((bar, index) => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
                bar.style.boxShadow = `0 0 10px ${getRandomNeonColor()}`;
            }, index * 200);
        });
    }
    
    // Hiệu ứng cho các dự án
    function animateProjects() {
        const projects = document.querySelectorAll('.project-item');
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
                project.style.boxShadow = `0 10px 30px rgba(0, 219, 222, 0.3)`;
            }, index * 200);
        });
    }
    
    // Highlight menu khi scroll đến section tương ứng
    function highlightMenu() {
        const scrollPosition = window.scrollY + 100;
        const floatingNavItems = document.querySelectorAll('.floating-nav a');
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                floatingNavItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                        item.style.color = getRandomNeonColor();
                        item.style.transform = 'scale(1.2)';
                    }
                });
            }
        });
    }
    
    // Kiểm tra ngay khi load trang
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
    
    // Hiệu ứng hover cho các item
    document.querySelectorAll('.project-item, .info-item, .hobby-item, .career-goal, .contact-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = `0 15px 30px ${getRandomNeonColor()}80`;
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.zIndex = '';
        });
    });
    
    // Hiệu ứng cho social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});