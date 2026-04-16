// Smooth Scroll and Music Trigger
document.getElementById('play-trigger').addEventListener('click', () => {
    document.getElementById('beautiful').scrollIntoView({ behavior: 'smooth' });
    
    // Attempt to play music if user interacts (browsers often require this)
    const musicContainer = document.getElementById('music-container');
    musicContainer.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/hub-vSPrUvo?autoplay=1&loop=1&playlist=hub-vSPrUvo" frameborder="0" allow="autoplay"></iframe>`;
});

// Parallax Effect for the Full-Width Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image-full');
    const scrollPos = window.pageYOffset;
    if (hero) {
        // Adjusting calculation for fixed background attachment or manual parallax
        const offsetTop = hero.offsetTop;
        const height = hero.offsetHeight;
        if (scrollPos > offsetTop - window.innerHeight && scrollPos < offsetTop + height) {
            hero.style.backgroundPositionY = `${(scrollPos - offsetTop) * 0.3}px`;
        }
    }
});

// Subtle "Typewriter" effect for the main title
const title = document.getElementById('main-title');
const originalText = title.innerText;
title.innerText = "";

let i = 0;
function typeTitle() {
    if (i < originalText.length) {
        title.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeTitle, 150);
    }
}

window.onload = () => {
    typeTitle();
};

// Subtle Light Leak effect
function createLightLeak() {
    const leak = document.createElement('div');
    leak.className = 'light-leak';
    leak.style.position = 'fixed';
    leak.style.top = Math.random() * 100 + '%';
    leak.style.left = Math.random() * 100 + '%';
    leak.style.width = '40vw';
    leak.style.height = '40vw';
    leak.style.background = 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)';
    leak.style.borderRadius = '50%';
    leak.style.pointerEvents = 'none';
    leak.style.zIndex = '5';
    leak.style.opacity = '0';
    leak.style.transition = 'opacity 4s ease';
    
    document.body.appendChild(leak);
    
    setTimeout(() => leak.style.opacity = '1', 100);
    setTimeout(() => {
        leak.style.opacity = '0';
        setTimeout(() => leak.remove(), 4000);
    }, 4000);
}

setInterval(createLightLeak, 6000);
