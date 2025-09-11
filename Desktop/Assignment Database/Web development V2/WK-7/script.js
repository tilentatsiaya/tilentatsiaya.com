// DOM Elements
const pendulum = document.querySelector('.string');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const speedSlider = document.getElementById('speed');
const angleSlider = document.getElementById('angle');
const speedValue = document.getElementById('speed-value');
const angleValue = document.getElementById('angle-value');

// Initial animation state
let isAnimating = false;

// Update animation speed
function updateSpeed(speed) {
    // Invert speed: higher slider value = faster swing
    let duration = (6 - speed); // if slider is 0.5–5, duration becomes 5.5–1
    pendulum.style.setProperty('--speed', `${duration}s`);
    speedValue.textContent = parseFloat(speed).toFixed(1);
}


// Update swing angle
function updateAngle(angle) {
    pendulum.style.setProperty('--angle', angle);
    angleValue.textContent = angle;
}

// Start animation
function startAnimation() {
    pendulum.classList.add('moving');
    isAnimating = true;
}

// Stop animation
function stopAnimation() {
    pendulum.classList.remove('moving');
    isAnimating = false;
}

// Event listeners
startBtn.addEventListener('click', startAnimation);
stopBtn.addEventListener('click', stopAnimation);

speedSlider.addEventListener('input', (e) => updateSpeed(e.target.value));
angleSlider.addEventListener('input', (e) => updateAngle(e.target.value));

// Initialize defaults
updateSpeed(speedSlider.value);
updateAngle(angleSlider.value);
