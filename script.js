const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
  });
}

const revealEls = document.querySelectorAll('.fx-up-1, .fx-up-2, .fx-up-3, .fx-stagger');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.transition = 'opacity .6s ease, transform .6s ease';
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
      io.unobserve(entry.target);
    }
  })
},{threshold:.18});
revealEls.forEach(el=>io.observe(el));

const cards = document.querySelectorAll('[data-tilt]');
cards.forEach(card=>{
  let rAF = null;
  const bounds = ()=> card.getBoundingClientRect();
  const onMove = (e)=>{
    const b = bounds();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    const rx = (+y * 6).toFixed(2);
    const ry = (-x * 6).toFixed(2);
    if (rAF) cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(()=>{
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    });
  };
  const reset = ()=>{
    card.style.transform = '';
  };
  card.addEventListener('mousemove', onMove);
  card.addEventListener('mouseleave', reset);
});

const back = document.querySelector('.backtotop');
const header = document.querySelector('.site-header');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY || document.documentElement.scrollTop;
  if (back) back.classList.toggle('show', y > 600);
  if (header) header.toggleAttribute('data-elevated', y > 12);
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});

// Reveal on scroll
const aboutBlocks = document.querySelectorAll('.about-block');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  aboutBlocks.forEach(block => {
    const boxTop = block.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      block.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
