// Importing the main App component which serves as the root component for the application
import App from "./App";

// Importing the method to create a root for rendering React components
import { createRoot } from "react-dom/client";

// Importing global styles for the app
import './styles/App.css';

// Finding the root DOM element and rendering the App component inside it
createRoot(document.getElementById('root')).render(
  <App />  // Rendering the main App component
);