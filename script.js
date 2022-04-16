// client is on port 5500
// socket server is on port 3000
// index.html (frontend) <-> script is client-side server <->  index.js is backend socket server

const socket = io('http://localhost:3000')

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

let name = prompt('What is your name');
socket.emit('new-user', name);