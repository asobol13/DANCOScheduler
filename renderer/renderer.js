import { BrowserWindow } from 'electron';

// Create a new window.
const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  title: 'Danco Flight Department',
});

// Load the index.html file into the window.
mainWindow.loadFile('index.html');