
/* ==================================================
   PROJETO PATAS SEGURAS
   Funcionalidade 1: validar o formulário.
   Funcionalidade 2: mostrar ou ocultar informações.
   ================================================== */


/* ==================================================
   FUNCIONALIDADE 1 — FORMULÁRIO VALIDADO
   ================================================== */

// Procura o formulário pelo seu ID.
const contactForm = document.getElementById("contact-form");

// Só executa esta parte se o formulário existir na página atual.
if (contactForm) {

    // Local onde serão mostradas as mensagens de erro ou sucesso.
    const feedback = document.getElementById("form-feedback");

    // Detecta quando o usuário tenta enviar o formulário.
    contactForm.addEventListener("submit", function(event) {

        // Impede o envio e o recarregamento padrão da página.
        event.preventDefault();

        // Lê os valores dos campos e remove espaços extras.
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const estado = document.getElementById("estado").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Guarda os problemas encontrados durante a validação.
        const erros = [];

        // O nome deve ter no mínimo três caracteres.
        if (nome.length < 3) {
            erros.push("O nome deve ter pelo menos 3 caracteres.");
        }

        // Verifica se o e-mail contém uma estrutura básica válida.
        const arroba = email.indexOf("@");
        const ponto = email.lastIndexOf(".");

        if (
            email === "" ||
            arroba < 1 ||
            ponto < arroba + 2 ||
            ponto === email.length - 1
        ) {
            erros.push("Digite um e-mail válido.");
        }

        // Verifica se o estado foi selecionado.
        if (estado === "") {
            erros.push("Selecione seu estado.");
        }

        // Verifica se o assunto foi selecionado.
        if (assunto === "") {
            erros.push("Selecione um assunto.");
        }

        // A mensagem precisa ter pelo menos dez caracteres.
        if (mensagem.length < 10) {
            erros.push("A mensagem deve ter pelo menos 10 caracteres.");
        }

        // Remove o estilo da mensagem anterior.
        feedback.classList.remove("error", "success");

        // Se houver erros, mostra o que precisa ser corrigido.
        if (erros.length > 0) {

            feedback.classList.add("error");

            feedback.textContent =
                "Revise os campos: " + erros.join(" ");

        } else {

            // Se todos os campos forem válidos, mostra a confirmação.
            feedback.classList.add("success");

            feedback.textContent =
                "Validação concluída! Esta confirmação é simulada: " +
                "nenhum e-mail foi enviado e nenhum dado foi coletado " +
                "ou armazenado.";

            // Limpa os campos após a demonstração de sucesso.
            contactForm.reset();
        }

    });

}


/* ==================================================
   FUNCIONALIDADE 2 — MOSTRAR E OCULTAR INFORMAÇÕES
   ================================================== */

// Seleciona o botão e o conteúdo que será exibido.
const toggleButton = document.getElementById("toggle-details");
const participationDetails = document.getElementById("participation-details");

// Verifica se os dois elementos existem na página atual.
if (toggleButton && participationDetails) {

    // Registra o evento de clique no botão.
    toggleButton.addEventListener("click", function() {

        // Verifica se o conteúdo está escondido.
        const estaOculto = participationDetails.hidden;

        // Inverte a visibilidade do conteúdo.
        participationDetails.hidden = !estaOculto;

        // Atualiza o estado acessível do botão.
        toggleButton.setAttribute(
            "aria-expanded",
            String(estaOculto)
        );

        // Troca o texto conforme o estado da interação.
        if (estaOculto) {

            toggleButton.textContent = "Ocultar formas de ajudar";

        } else {

            toggleButton.textContent = "Ver formas de ajudar";

        }

    });

}
