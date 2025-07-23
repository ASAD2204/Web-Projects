# Basketball Score Counter

![Basketball Score Counter](https://github.com/user-attachments/assets/460eea03-a63b-45fd-87fe-685ee125235a)

A digital basketball scoreboard application that tracks scores for home and guest teams with support for different point values (1, 2, and 3 points).

## 🎯 Features

- **Dual Team Scoring**: Separate counters for HOME and GUEST teams
- **Multiple Point Values**: Support for 1-point, 2-point, and 3-point scoring
- **Digital Display**: Large, easy-to-read score displays
- **Reset Functionality**: Reset both scores to zero
- **Professional Design**: Basketball-themed styling with sport-appropriate fonts

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with custom fonts and responsive design
- **JavaScript (ES6)**: Score tracking logic and DOM manipulation
- **Google Fonts**: Cursed Timer ULIL font for authentic scoreboard look

## 📁 File Structure

```
BasketBallScoreCounter/
├── index.html    # Main HTML structure
├── index.css     # CSS styling and layout
└── index.js      # JavaScript functionality
```

## 🚀 How to Run

1. **Direct Browser Access:**
   - Open `index.html` in any modern web browser

2. **Local Server:**
   ```bash
   # Navigate to the project directory
   cd BasketBallScoreCounter
   
   # Start a local server
   python3 -m http.server 8000
   
   # Visit http://localhost:8000 in your browser
   ```

3. **VS Code Live Server:**
   - Install Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

## 💡 How to Use

### Scoring Points:
- **Home Team**: Click the +1, +2, or +3 buttons under the HOME section
- **Guest Team**: Click the +1, +2, or +3 buttons under the GUEST section
- **Reset**: Click the "Reset" button to set both scores back to 0

### Point Values:
- **+1**: Free throws, technical fouls
- **+2**: Regular field goals, layups, dunks
- **+3**: Three-point shots

## 🔧 Code Structure

### HTML (`index.html`)
- Clean semantic structure with team sections
- Score display areas with unique IDs
- Button groups for each team
- Google Fonts integration

### CSS (`index.css`)
- Dark theme with professional scoreboard appearance
- Custom font from Google Fonts (Cursed Timer ULIL)
- Flexbox layout for responsive design
- Button styling with hover effects
- Large, readable score displays

### JavaScript (`index.js`)
- Global variables to track home and guest scores
- Reusable functions for different point values:
  - `add1()`: Adds 1 point to the selected team
  - `add2()`: Adds 2 points to the selected team
  - `add3()`: Adds 3 points to the selected team
- Reset functionality to clear all scores
- Class-based team identification for button handling

## 🎨 Design Features

- **Color Scheme**: Dark blue background with white text and red score displays
- **Typography**: Cursed Timer ULIL font for authentic digital scoreboard feel
- **Layout**: Symmetrical design with clear team separation
- **Visual Hierarchy**: Large scores, clear team labels, organized button layout
- **Responsive Design**: Works on different screen sizes

## 🎮 Interactive Elements

- **Score Displays**: Large, prominent numbers in red for visibility
- **Buttons**: Consistent styling across all point value buttons
- **Reset Button**: Centered reset functionality
- **Hover Effects**: Visual feedback on button interactions

## 🏀 Basketball Scoring Context

This scoreboard supports standard basketball scoring:

- **Free Throws**: 1 point each
- **Field Goals**: 2 points (inside the three-point line)
- **Three-Pointers**: 3 points (beyond the three-point line)
- **Technical Fouls**: 1 point to opposing team

## 🔄 Future Enhancements

Potential improvements for this scoreboard:

- [ ] Timer functionality for game periods
- [ ] Foul tracking for each team
- [ ] Quarter/period tracking
- [ ] Sound effects for scoring
- [ ] Game statistics (shooting percentage, etc.)
- [ ] Save/load game data
- [ ] Multiple game formats (NBA, NCAA, FIBA)
- [ ] Player-specific scoring
- [ ] Shot clock timer

## 📝 Learning Objectives

This project demonstrates:

- Event-driven JavaScript programming
- Dynamic DOM manipulation
- CSS custom fonts and responsive design
- Function reusability and code organization
- User interface design for sports applications
- Class-based element identification in JavaScript

## 🎯 Use Cases

Perfect for:
- Recreational basketball games
- School sports events
- Youth league games
- Practice sessions
- Gym scorekeeping
- Tournament tracking

---

**Note**: This is an educational project demonstrating interactive web development with practical sports application functionality.