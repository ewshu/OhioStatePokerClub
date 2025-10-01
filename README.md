# Ohio State Poker Club Website

A modern, responsive website for the Ohio State University Poker Club featuring an interactive calendar, event management, and contact forms.

## Features

### 🏠 Home Page
- Hero section with animated poker cards
- Feature highlights showcasing club benefits
- Call-to-action sections
- Responsive design with modern animations

### 📖 About Page
- Club history and mission
- Core values and leadership information
- Interactive mission cards
- Professional layout with engaging visuals

### 📅 Events Page
- **Interactive Calendar**: Click on dates to view event details
- Monthly navigation with previous/next month controls
- Event cards with RSVP functionality
- Modal popups for detailed event information
- Sample events for January and February 2024

### 📞 Contact Page
- Contact form with validation
- Club contact information and office hours
- FAQ section with expandable answers
- Newsletter subscription option
- Social media links

## Technical Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Modern CSS**: CSS Grid, Flexbox, and custom properties
- **Interactive Elements**: Hover effects, animations, and transitions
- **Form Validation**: Real-time validation with error messages
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers

## File Structure

```
OhioStatePokerClub/
├── index.html          # Home page
├── about.html          # About page
├── events.html         # Events page with calendar
├── contact.html        # Contact page with form
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript functionality
├── calendar.js         # Calendar and events functionality
├── contact.js          # Contact form functionality
└── README.md           # Project documentation
```

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Navigate** between pages using the navigation menu
4. **Test the calendar** by clicking on dates with events
5. **Try the contact form** with validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Adding Events
Edit the `getSampleEvents()` function in `calendar.js` to add or modify events:

```javascript
'2024-01-15': {
    title: 'Weekly Game Night',
    time: '7:00 PM - 11:00 PM',
    location: 'Student Union, Room 205',
    description: 'Join us for our weekly casual poker night!',
    type: 'game-night'
}
```

### Changing Colors
Modify the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #dc2626;
    --secondary-color: #f97316;
    --accent-color: #667eea;
}
```

### Adding New Pages
1. Create a new HTML file
2. Copy the navigation structure from existing pages
3. Add your content
4. Update the navigation links

## Dependencies

- **Font Awesome 6.0.0**: Icons
- **Google Fonts (Inter)**: Typography
- **No build tools required**: Pure HTML, CSS, and JavaScript

## Future Enhancements

- [ ] User authentication system
- [ ] Event RSVP database
- [ ] Admin panel for event management
- [ ] Real-time notifications
- [ ] Member directory
- [ ] Tournament brackets
- [ ] Photo gallery
- [ ] Blog/news section

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for the Ohio State University Poker Club. All rights reserved.

## Support

For questions or support, please contact the club leadership or create an issue in the repository.

---

**Built with ❤️ for the Ohio State University Poker Club**
