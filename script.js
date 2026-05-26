let min_completed = 500; // Modify me!
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

const header = document.getElementById('total_minutes_completed_element');
const container = document.getElementById('progress_bar_element');

if (percent_complete > 30) {
    container.appendChild(header);
    header.style.color = '#fafafa';
}