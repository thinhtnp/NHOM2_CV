document.addEventListener('DOMContentLoaded', function() {
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.getElementById('profile').classList.remove('hidden');
      window.scrollTo({ top: document.getElementById('profile').offsetTop, behavior: 'smooth' });
    });
  }

  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    if (topBtn) {
      topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });

  const modeToggle = document.getElementById('modeToggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }

  const tkdFlip = document.querySelector('.tkd .flip-card');
  if (tkdFlip) {
    tkdFlip.addEventListener('click', () => {
      const slider = document.getElementById('medalSlider');
      if (slider) slider.classList.toggle('hidden');
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const topBtn = document.getElementById('topBtn');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // === INTRO TYPEWRITER ===
  function typeIntro() {
    const text = "WELCOME TO MY PROFILE";
    const speed = 100;
    let i = 0;

    function type() {
      if (i < text.length) {
        document.getElementById("intro-typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // === BANNER TYPEWRITER ===
  function typeBanner() {
    const lines = [
      "Xin chào, mình là Nguyễn Ngọc Như Ý",
      "Hello, I am Nguyen Ngoc Nhu Y",
      "你好，我是阮玉如意"
    ];
    const speed = 100;         // tốc độ gõ ký tự
    const eraseSpeed = 50;     // tốc độ xóa
    const delayBetweenLine = 1000;  // delay giữa các dòng
    const delayAfterFull = 2000;    // delay sau khi gõ hết 3 dòng
    let lineIndex = 0;
    let charIndex = 0;
    let fullText = "";

    function typeLine() {
      if (charIndex < lines[lineIndex].length) {
        fullText += lines[lineIndex].charAt(charIndex);
        document.getElementById("banner-typewriter").innerHTML = fullText.replace(/\n/g, "<br>");
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        fullText += "\n";
        charIndex = 0;
        lineIndex++;
        if (lineIndex < lines.length) {
          setTimeout(typeLine, delayBetweenLine);
        } else {
          setTimeout(eraseAll, delayAfterFull);
        }
      }
    }

    function eraseAll() {
      if (fullText.length > 0) {
        fullText = fullText.slice(0, -1);
        document.getElementById("banner-typewriter").innerHTML = fullText.replace(/\n/g, "<br>");
        setTimeout(eraseAll, eraseSpeed);
      } else {
        lineIndex = 0;
        charIndex = 0;
        setTimeout(typeLine, speed);
      }
    }

    typeLine();
  }

  // === CHẠY CẢ INTRO VÀ BANNER ===
  typeIntro();
  typeBanner();
});
document.addEventListener('DOMContentLoaded', function() {
  const butterfliesContainer = document.querySelector('.butterflies');
  const butterflyCount = 10; // số lượng bướm

  for (let i = 0; i < butterflyCount; i++) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * 100 + '%';
    butterfly.style.animationDuration = (5 + Math.random() * 3) + 's';
    butterfly.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
    butterfly.style.opacity = 0.7 + Math.random() * 0.3;
    butterfliesContainer.appendChild(butterfly);
  }
});
document.addEventListener('scroll', () => {
  document.querySelectorAll('.bar span').forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
      const width = bar.style.getPropertyValue('--w') || '0%';
      bar.style.width = width;
    }
  });
});
