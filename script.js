// Função global para abrir WhatsApp com mensagem personalizada
function openWhatsApp(msg) {
    var numero = '351911547964';
    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
}

// Envio do formulário para WhatsApp
document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value.trim();
    var zona = document.getElementById('zona').value.trim();
    var tipo = document.getElementById('tipo').value;

    if (!nome || !zona || !tipo) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var mensagem = 'Olá, meu nome é ' + nome +
                   '. Moro em ' + zona +
                   ' e gostaria de agendar uma limpeza do tipo: ' + tipo +
                   '. Pode enviar um orçamento?';

    openWhatsApp(mensagem);
});

// Alternar menu no mobile
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});
