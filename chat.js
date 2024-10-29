document.getElementById('send-btn').onclick = function() {
    const messageInput = document.getElementById('message-input');
    const messageContent = messageInput.value;
    if (messageContent.trim()) {
        addMessage(messageContent, 'sent');
        messageInput.value = '';
        simulateReceivedMessage();
    } else {
        alert('Please enter a message.');
    }
};

function addMessage(content, type) {
    const messagesContainer = document.getElementById('messages-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

function simulateReceivedMessage() {
    setTimeout(() => {
        const receivedMessage = "This is a response message!";
        addMessage(receivedMessage, 'received');
    }, 1000);
}

// Chat list with specific names
const chatList = [
    "Rahul", "Shubhankar", "Bishal", "Gautam", "Sita",
    "Rama Mam", "DSA Mam", "Roshani", "Sarita", "Mohan"
];

const chatListContainer = document.getElementById('chat-list');
chatList.forEach(name => {
    const chatItem = document.createElement('div');
    chatItem.className = 'chat-item';
    chatItem.textContent = name;
    chatItem.onclick = function() {
        loadChat(name);
    };
    chatListContainer.appendChild(chatItem);
});

function loadChat(name) {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = ''; // Clear previous messages
    messagesContainer.appendChild(createMessage(`Chat with ${name} started!`, 'received'));
}

function createMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = content;
    return messageDiv;
}

document.getElementById('group-chat-btn').onclick = function() {
    alert("Group Chat feature coming soon!");
};

document.getElementById('call-btn').onclick = function() {
    alert("Call feature coming soon!");
};
