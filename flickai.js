document.getElementById('ask-btn').onclick = function() {
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value.trim();
    if (question) {
        getAnswer(question);
        questionInput.value = '';
    } else {
        alert('Please enter a question.');
    }
};

document.getElementById('voice-btn').onclick = function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const spokenQuestion = event.results[0][0].transcript;
        document.getElementById('question-input').value = spokenQuestion;
        getAnswer(spokenQuestion);
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error: ', event.error);
    };
};

function getAnswer(question) {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = 'Thinking...';

    fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(question)}&format=json`)
        .then(response => response.json())
        .then(data => {
            const answer = data.Abstract || 'I could not find an answer.';
            responseDiv.textContent = answer;
            speakAnswer(answer);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            responseDiv.textContent = 'Error fetching answer.';
        });
}

function speakAnswer(answer) {
    const speech = new SpeechSynthesisUtterance(answer);
    window.speechSynthesis.speak(speech);
}
