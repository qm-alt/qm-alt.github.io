// Update Jam Digital
function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    const day = now.toLocaleString('default', { weekday: 'long' });
    const date = now.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
    dateElement.textContent = `${day}, ${date}`;
}

setInterval(updateTime, 1000);
updateTime();

// Update Kalender
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    const currentYear = now.getFullYear();
    currentMonthElement.textContent = `${currentMonth} ${currentYear}`;
    
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    
    calendarGrid.innerHTML = '';
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        dayCell.classList.add('day');
        
        if (day === now.getDate()) {
            dayCell.classList.add('current-day');
        }
        
        calendarGrid.appendChild(dayCell);
    }
}

generateCalendar();
