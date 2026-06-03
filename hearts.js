const COLORS = [
  '#7a1530', '#c2607a', '#a03050', '#d4708a', '#8a2040', '#b85070'
];
const CHARS = ['♥', '❤', '♡', '♥', '❤'];
const ANIMS = ['floatUp', 'floatSway', 'floatUp'];

function initHearts() {
  const bg = document.getElementById('hearts-bg');
  if (!bg) return;

  // Floating particles
  for (let i = 0; i < 32; i++) {
    const el = document.createElement('span');
    el.className = 'heart-particle';
    el.textContent = CHARS[i % CHARS.length];
    const size = Math.random() * 22 + 10;
    el.style.cssText = `
      left: ${(i / 32 * 100 + (Math.random() * 3 - 1.5)).toFixed(1)}%;
      font-size: ${size}px;
      color: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
      animation-name: ${ANIMS[i % ANIMS.length]};
      animation-duration: ${(Math.random() * 10 + 9).toFixed(1)}s;
      animation-delay: ${(Math.random() * 12).toFixed(1)}s;
    `;
    bg.appendChild(el);
  }

  // Twinkling static hearts
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('span');
    el.className = 'heart-twinkle';
    el.textContent = '♥';
    const size = 8 + (i % 3) * 6;
    el.style.cssText = `
      left: ${((i / 14) * 100 + 2).toFixed(1)}%;
      top: ${(10 + (i % 5) * 17).toFixed(1)}%;
      font-size: ${size}px;
      color: ${COLORS[i % COLORS.length]};
      animation-duration: ${(2 + (i % 3)).toFixed(1)}s;
      animation-delay: ${(i * 0.7).toFixed(1)}s;
    `;
    bg.appendChild(el);
  }
}

document.addEventListener('DOMContentLoaded', initHearts);
