let min_completed = 10000; // Modify me!
const goal_min = 30000 // Modify me!

// Progress made
let percent_complete = Math.min((min_completed / goal_min) * 100, 100)

const prog_bar = document.querySelector('.progress_bar')

prog_bar.style.setProperty(
    '--progress_bar_width',
    percent_complete + '%'
);

document.getElementById('min_complete').textContent = min_completed.toLocaleString();
document.getElementById('goal_min').textContent = goal_min.toLocaleString();

// // Reload the animation
// prog_bar.style.animation = 'none';
// prog_bar.offsetWidth; // "Force reflow"
// prog_bar.style.animation = 'progress_bar 2s ease forwards'