
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('composer');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');


    /**
     * Adiciona uma mensagem.
     */
    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = `<p>${text}</p>`;

        messages.appendChild(msgDiv);
        messages.scrollTop = messages.scrollHeight;
    };

    /**
     * Resposta Simples do Bot.
     */
    const getBotResponse = (userText) => {
        let response = 'Desculpe, não entendi. Sou uma demonstração.';
        const lowerText = userText.trim().toLowerCase();

        if (lowerText.includes('oi') || lowerText.includes('olá')) {
            response = 'Olá! Como posso ajudar você hoje?';
        } else if (lowerText.includes('ajuda')) {
            response = 'Estou aqui! Tente perguntar algo simples.';
        }

        setTimeout(() => addMessage(response, 'assistant'), 500);
    };

    // ---  Função de Envio Principal (Centralizada) ---

    const handleSubmission = () => {
        const userText = input.value.trim();

        if (userText) {
            addMessage(userText, 'user');
            getBotResponse(userText);
            
            input.value = ''; 
            if (input.tagName.toLowerCase() === 'textarea') {
                input.rows = 1; 
            }
        }
    };

    

    //  Envio pelo botão do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        handleSubmission();
    });

    
    input.addEventListener('keydown', (event) => {
        
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            handleSubmission(); 
        }
    });

    // --- . Inicialização ---
    
    addMessage('Olá! Eu sou o TecBot. Como posso te ajudar?', 'assistant');
    input.focus();
});