# Basic Calculator

![Basic Calculator](https://github.com/user-attachments/assets/64d8de47-885d-4249-ad14-0c3eb6a4106c)

A simple yet functional calculator web application that performs basic arithmetic operations with a clean and user-friendly interface.

## 🎯 Features

- **Addition**: Add two numbers
- **Subtraction**: Subtract second number from first
- **Multiplication**: Multiply two numbers
- **Division**: Divide first number by second with zero-division error handling
- **Clean Interface**: Modern styling with purple gradient theme
- **Input Validation**: Handles numeric inputs properly
- **Error Handling**: Displays appropriate error message for division by zero

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern design principles
- **JavaScript (ES6)**: Calculator logic and DOM manipulation

## 📁 File Structure

```
Basic Caculator/
├── index.html    # Main HTML structure
├── styles.css    # CSS styling and layout
└── script.js     # JavaScript functionality
```

## 🚀 How to Run

1. **Direct Browser Access:**
   - Open `index.html` in any modern web browser

2. **Local Server:**
   ```bash
   # Navigate to the project directory
   cd "Basic Caculator"
   
   # Start a local server
   python3 -m http.server 8000
   
   # Visit http://localhost:8000 in your browser
   ```

3. **VS Code Live Server:**
   - Install Live Server extension
   - Right-click on `index.html` → "Open with Live Server"

## 💡 How to Use

1. Enter the first number in the "Enter First Number" field
2. Enter the second number in the "Enter Second Number" field
3. Click on any operation button (ADD, SUBTRACT, MULTIPLY, DIVIDE)
4. The result will be displayed below the buttons

## 🔧 Code Structure

### HTML (`index.html`)
- Clean semantic structure with input fields and operation buttons
- Linked CSS and JavaScript files
- Result display area

### CSS (`styles.css`)
- Modern purple gradient background
- Centered layout with flexbox
- Responsive design elements
- Button styling with hover effects

### JavaScript (`script.js`)
- Four main functions: `add()`, `subtract()`, `multiply()`, `divide()`
- DOM manipulation to get input values and display results
- Error handling for division by zero
- Number validation and conversion

## 🎨 Design Features

- **Color Scheme**: Purple gradient background with white container
- **Typography**: Clean, readable fonts
- **Layout**: Centered design with proper spacing
- **Buttons**: Consistent styling with visual feedback
- **Responsive**: Works on different screen sizes

## 🐛 Error Handling

- **Division by Zero**: Displays "Error: Division by zero" message
- **Invalid Input**: JavaScript `Number()` function handles string conversion
- **Empty Fields**: Returns NaN which is handled gracefully

## 🔄 Future Enhancements

Potential improvements for this calculator:

- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Decimal number support with precision control
- [ ] Keyboard input support
- [ ] History of calculations
- [ ] Advanced operations (square root, percentage, etc.)
- [ ] Theme customization options

## 📝 Learning Objectives

This project demonstrates:

- Basic JavaScript DOM manipulation
- Event handling with onclick functions
- CSS styling and layout techniques
- HTML form elements and structure
- Error handling in JavaScript
- User interface design principles

---

**Note**: This is an educational project demonstrating basic web development concepts with HTML, CSS, and JavaScript.