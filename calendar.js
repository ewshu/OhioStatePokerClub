// Calendar functionality
class Calendar {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.events = this.getSampleEvents();
        
        this.init();
    }

    init() {
        this.renderCalendar();
        this.bindEvents();
    }

    getSampleEvents() {
        // Generate events for current year (2025) with recurring Tuesday/Thursday events
        const events = {
            // Original sample events
            '2025-01-15': {
                title: 'Weekly Game Night',
                time: '7:00 PM - 11:00 PM',
                location: 'Student Union, Room 205',
                description: 'Join us for our weekly casual poker night. All skill levels welcome!',
                type: 'game-night'
            },
            '2025-01-22': {
                title: 'Beginner\'s Workshop',
                time: '6:00 PM - 8:00 PM',
                location: 'Baker Hall, Room 120',
                description: 'Learn the basics of poker strategy and game theory. Perfect for newcomers!',
                type: 'workshop'
            },
            '2025-01-29': {
                title: 'Monthly Tournament',
                time: '5:00 PM - 12:00 AM',
                location: 'Student Union, Ballroom A',
                description: 'Our monthly tournament with prizes for the top 3 players!',
                type: 'tournament'
            },
            '2025-02-05': {
                title: 'Strategy Session',
                time: '6:00 PM - 8:00 PM',
                location: 'Baker Hall, Room 120',
                description: 'Advanced strategy discussion and hand analysis.',
                type: 'workshop'
            },
            '2025-02-12': {
                title: 'Weekly Game Night',
                time: '7:00 PM - 11:00 PM',
                location: 'Student Union, Room 205',
                description: 'Join us for our weekly casual poker night. All skill levels welcome!',
                type: 'game-night'
            },
            '2025-02-26': {
                title: 'Monthly Tournament',
                time: '5:00 PM - 12:00 AM',
                location: 'Student Union, Ballroom A',
                description: 'Our monthly tournament with prizes for the top 3 players!',
                type: 'tournament'
            }
        };

        // Add recurring Tuesday events for 2025
        const tuesdayEvents = [
            '2025-01-07', '2025-01-14', '2025-01-21', '2025-01-28',
            '2025-02-04', '2025-02-11', '2025-02-18', '2025-02-25',
            '2025-03-04', '2025-03-11', '2025-03-18', '2025-03-25',
            '2025-04-01', '2025-04-08', '2025-04-15', '2025-04-22', '2025-04-29',
            '2025-05-06', '2025-05-13', '2025-05-20', '2025-05-27',
            '2025-06-03', '2025-06-10', '2025-06-17', '2025-06-24',
            '2025-07-01', '2025-07-08', '2025-07-15', '2025-07-22', '2025-07-29',
            '2025-08-05', '2025-08-12', '2025-08-19', '2025-08-26',
            '2025-09-02', '2025-09-09', '2025-09-16', '2025-09-23', '2025-09-30',
            '2025-10-07', '2025-10-14', '2025-10-21', '2025-10-28',
            '2025-11-04', '2025-11-11', '2025-11-18', '2025-11-25',
            '2025-12-02', '2025-12-09', '2025-12-16', '2025-12-23', '2025-12-30'
        ];

        // Add recurring Thursday events for 2025
        const thursdayEvents = [
            '2025-01-02', '2025-01-09', '2025-01-16', '2025-01-23', '2025-01-30',
            '2025-02-06', '2025-02-13', '2025-02-20', '2025-02-27',
            '2025-03-06', '2025-03-13', '2025-03-20', '2025-03-27',
            '2025-04-03', '2025-04-10', '2025-04-17', '2025-04-24',
            '2025-05-01', '2025-05-08', '2025-05-15', '2025-05-22', '2025-05-29',
            '2025-06-05', '2025-06-12', '2025-06-19', '2025-06-26',
            '2025-07-03', '2025-07-10', '2025-07-17', '2025-07-24', '2025-07-31',
            '2025-08-07', '2025-08-14', '2025-08-21', '2025-08-28',
            '2025-09-04', '2025-09-11', '2025-09-18', '2025-09-25',
            '2025-10-02', '2025-10-09', '2025-10-16', '2025-10-23', '2025-10-30',
            '2025-11-06', '2025-11-13', '2025-11-20', '2025-11-27',
            '2025-12-04', '2025-12-11', '2025-12-18', '2025-12-25'
        ];

        // Add Tuesday events
        tuesdayEvents.forEach(date => {
            events[date] = {
                title: 'Tuesday Poker Night',
                time: '8:00 PM',
                description: 'Buy in is $5 and Signups are on the Discord Announcements tab.',
                type: 'game-night'
            };
        });

        // Add Thursday events
        thursdayEvents.forEach(date => {
            events[date] = {
                title: 'Thursday Free Play',
                time: '8:00 PM',
                description: 'This is free to play. Signups are on the Discord Announcements tab.',
                type: 'free-play'
            };
        });

        return events;
    }

    renderCalendar() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        document.getElementById('currentMonth').textContent = 
            `${monthNames[this.currentMonth]} ${this.currentYear}`;

        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startingDay = firstDay.getDay();
        const monthLength = lastDay.getDate();

        const calendarDays = document.getElementById('calendarDays');
        calendarDays.innerHTML = '';

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarDays.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= monthLength; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;

            const dateString = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            
            // Make all dates clickable
            dayElement.setAttribute('data-date', dateString);
            dayElement.style.cursor = 'pointer';
            
            if (this.events[dateString]) {
                dayElement.classList.add('has-event');
            }

            // Highlight today
            if (day === this.currentDate.getDate() && 
                this.currentMonth === this.currentDate.getMonth() && 
                this.currentYear === this.currentDate.getFullYear()) {
                dayElement.classList.add('today');
            }

            calendarDays.appendChild(dayElement);
        }
    }

    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.renderCalendar();
            this.bindCalendarDayClicks(); // Re-bind clicks after render
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.renderCalendar();
            this.bindCalendarDayClicks(); // Re-bind clicks after render
        });

        // Initial binding of calendar day clicks
        this.bindCalendarDayClicks();
    }

    bindCalendarDayClicks() {
        // Bind calendar day clicks - make all dates clickable
        const calendarDays = document.getElementById('calendarDays');
        calendarDays.addEventListener('click', (e) => {
            if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('empty')) {
                const dateString = e.target.getAttribute('data-date');
                this.showEventDetails(dateString);
            }
        });
    }

    showEventDetails(dateString) {
        const event = this.events[dateString];
        const eventDetails = document.getElementById('eventDetails');
        
        if (event) {
            const date = new Date(dateString);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            
            eventDetails.innerHTML = `
                <div class="event-info-display">
                    <h3>${event.title}</h3>
                    <p class="event-date">${formattedDate}</p>
                    <p><i class="fas fa-clock"></i> <strong>Time:</strong> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${event.location}</p>
                    <p><i class="fas fa-info-circle"></i> <strong>Description:</strong></p>
                    <p class="event-description">${event.description}</p>
                    <button class="btn btn-primary rsvp-btn">RSVP for this Event</button>
                </div>
            `;
            
            // Add RSVP functionality
            const rsvpBtn = eventDetails.querySelector('.rsvp-btn');
            rsvpBtn.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'RSVP Sent!';
                this.style.background = '#10b981';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.disabled = false;
                }, 2000);
            });
        } else {
            eventDetails.innerHTML = `
                <p class="default-message">No events scheduled for ${new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}, check back later.</p>
            `;
        }
    }
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Calendar();
});

// RSVP functionality for event cards
document.addEventListener('DOMContentLoaded', () => {
    const rsvpButtons = document.querySelectorAll('.event-actions .btn-primary');
    
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'RSVP Sent!';
            this.style.background = '#10b981';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.disabled = false;
            }, 2000);
        });
    });
});
