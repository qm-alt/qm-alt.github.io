document.getElementById('send-btn').addEventListener('click', function () {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value;

    if (message.trim() !== "") {
        let chatBox = document.getElementById('chat-box');

        // Membuat elemen div untuk pesan baru
        let messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        messageDiv.innerText = message;

        // Menambahkan pesan ke chat box
        chatBox.appendChild(messageDiv);

        // Kosongkan input setelah mengirim pesan
        messageInput.value = "";

        // Scroll ke bagian paling bawah
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
