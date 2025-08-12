https://github.com/VasudevKrishna07/React-ToDo

# React To-Do List Assignment

A modern, responsive To-Do List application built with React and Vite. This project demonstrates the use of functional components, state management, props, event handling, and modern UI design.

## ✨ Features

- **Add Tasks**: Add new to-do items with a clean input interface
- **Mark Complete**: Toggle tasks between completed and incomplete states
- **Edit Tasks**: Click the edit button to modify existing tasks inline
- **Delete Tasks**: Remove tasks you no longer need
- **Real-time Stats**: View total, completed, and remaining task counts
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🏗️ Project Structure

```
react-todo-assignment/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx  
│   │   ├── Header.css
│   │   ├── ToDoList.jsx  
│   │   ├── ToDoList.css
│   │   ├── ToDoItem.jsx      
│   │   └── ToDoItem.css
│   ├── App.jsx             
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd react-todo-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)
   - The application should be running without errors

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📋 Assignment Requirements Coverage

### 1. React Application Setup
- ✅ New React project using Vite
- ✅ Application runs without errors

### 2. Components
- ✅ **App Component**: Main component managing state and coordinating other components
- ✅ **Header Component**: Displays application title and subtitle
- ✅ **ToDoList Component**: Renders the list of to-do items dynamically
- ✅ **ToDoItem Component**: Individual to-do item with interactive controls

### 3. State and Props
- ✅ **State Management**: `todos` and `inputValue` state managed in App component
- ✅ **Props Usage**: All necessary state and functions passed down as props
- ✅ **Data Flow**: Each component correctly uses props to display and manage data

### 4. Lists
- ✅ **Dynamic Rendering**: ToDoList uses `map()` function to render items
- ✅ **Unique Keys**: Each to-do item has a unique `key` prop (using `todo.id`)

### 5. Event Handling
- ✅ **Add New Item**: `addTodo()` function with input handling and Enter key support
- ✅ **Mark Complete**: `toggleTodo()` function to toggle completion status
- ✅ **Delete Item**: `deleteTodo()` function to remove items
- ✅ **Edit Items**: Complete inline editing with `editTodo()` function, save/cancel options

### 6. Styling and User Experience
- ✅ **Modern Design**: Gradient backgrounds, smooth animations, and hover effects
- ✅ **Responsive Layout**: Mobile-first design that works on all screen sizes
- ✅ **User-Friendly Interface**: Intuitive controls with visual feedback

### 7. Submission
- ✅ **GitHub Repository**: Complete project structure ready for version control
- ✅ **README Instructions**: Comprehensive setup and usage instructions

## 💡 Key Features Explained

### State Management
- **todos**: Array storing all to-do items with id, text, and completed properties
- **inputValue**: Current value of the add-task input field
- **isEditing**: Local state in ToDoItem for edit mode toggle
- **editText**: Local state storing temporary edit text

### Event Handling Implementation
1. **Adding Tasks**: Input validation, Enter key support, automatic input clearing
2. **Toggling Completion**: Immutable state updates using spread operator
3. **Deleting Tasks**: Array filtering to remove specific items
4. **Editing Tasks**: Inline editing with save/cancel functionality, Escape key support

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Props Down**: Data flows down from App to child components
- **Events Up**: Event handlers are passed down and called from child components
- **Reusability**: Components are designed to be reusable and maintainable

## 🎨 Styling Approach

- **CSS Variables**: Consistent color scheme and spacing
- **Flexbox Layout**: Responsive and flexible layouts
- **CSS Animations**: Smooth transitions and micro-interactions
- **Mobile-First**: Responsive design starting from mobile screens
- **Modern Aesthetics**: Gradient backgrounds, rounded corners, and clean typography

## 🛠️ Technical Implementation

### Functional Components
All components use modern React functional component syntax with hooks.

### State Management
Uses `useState` hook for local component state management.

### Event Handling
Comprehensive event handling for all user interactions including keyboard events.

### Performance Considerations
- Unique keys for list items prevent unnecessary re-renders
- Event handler optimization with proper function definitions
- CSS transitions for smooth user experience

## 🔧 Customization

You can customize the application by:
- Modifying CSS variables in the CSS files for different color schemes
- Adding new features like task categories or due dates
- Implementing local storage to persist tasks
- Adding task priorities or search functionality

## 📱 Browser Support

This application works in all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🐛 Troubleshooting

**Port already in use?**
- The dev server will automatically use the next available port
- Check your terminal output for the correct URL

**Styling not loading?**
- Ensure all CSS files are properly imported in their respective components
- Check that the file paths are correct

**Components not rendering?**
- Verify all components are properly exported and imported
- Check the browser console for any JavaScript errors

## 📚 Learning Outcomes

This project demonstrates:
- Modern React development with Vite
- Component-based architecture
- State management with hooks
- Props and component communication
- Event handling and user interactions
- Responsive CSS design
- Modern JavaScript ES6+ features

---
