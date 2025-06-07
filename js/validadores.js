// Função para exibir uma mensagem de erro associada a um campo de input.
export function showError(input, message) {
    const inputGrupo = input.parentElement;
    inputGrupo.classList.add('error');
    let errorTextElement = inputGrupo.querySelector('.error-text');
    if (!errorTextElement) {
        // Cria o elemento 'small' para o texto do erro se ele não existir.
        errorTextElement = document.createElement('small');
        errorTextElement.className = 'error-text';
        inputGrupo.appendChild(errorTextElement);
    }
    errorTextElement.innerText = message;
}

// Função para limpar a mensagem de erro de um campo de input.
export function clearError(input) {
    const inputGrupo = input.parentElement;
    inputGrupo.classList.remove('error');
    const errorText = inputGrupo.querySelector('.error-text');
    if (errorText) {
        errorText.innerText = '';
    }
}

// Valida se o campo nome completo foi preenchido e contém pelo menos duas palavras.
export function validateNome(nomeInput) {
    const nome = nomeInput.value.trim();
    if (nome === '') {
        showError(nomeInput, 'O nome completo é obrigatório.');
        return false;
    } else if (nome.split(' ').length < 2) {
        showError(nomeInput, 'Por favor, insira o nome completo (nome e sobrenome).');
        return false;
    } else {
        clearError(nomeInput);
        return true;
    }
}

// Valida a data de nascimento: obrigatória, formato válido, não futura e dentro de um limite de idade (100 anos).
export function validateDataNascimento(dataNascimentoInput) {
    const dateValue = dataNascimentoInput.value;
    if (dateValue === '') {
        showError(dataNascimentoInput, 'A data de nascimento é obrigatória.');
        return false;
    }

    // Tenta converter o valor do input para um objeto Date.
    const dataNascimento = new Date(dateValue);
    if (isNaN(dataNascimento.getTime())) {
        showError(dataNascimentoInput, 'Formato de data inválido.');
        return false;
    }

    // Pega a data atual e zera as horas para comparar apenas as datas.
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Define uma data mínima (100 anos atrás).
    const dataMinima = new Date();
    dataMinima.setFullYear(hoje.getFullYear() - 100);
    dataMinima.setHours(0, 0, 0, 0);

    if (dataNascimento > hoje) {
        showError(dataNascimentoInput, 'A data de nascimento não pode ser no futuro.');
        return false;
    } else if (dataNascimento < dataMinima) {
        showError(dataNascimentoInput, `Data muito antiga (antes de ${dataMinima.toLocaleDateString('pt-BR')}).`);
        return false;
    } else {
        clearError(dataNascimentoInput);
        return true;
    }
}

// Valida o CPF: obrigatório, 11 dígitos e não pode ser uma sequência de números repetidos.
export function validateCpf(cpfInput) {
    const cpf = cpfInput.value.replace(/\D/g, '');
    if (cpf === '') {
        // Remove caracteres não numéricos.
        showError(cpfInput, 'O CPF é obrigatório.');
        return false;
    } else if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        showError(cpfInput, 'CPF inválido.');
        return false;
    } else {
        clearError(cpfInput);
        return true;
    }
}

// Valida o telefone: obrigatório e deve ter 10 ou 11 dígitos.
export function validateTelefone(telefoneInput) {
    const telefone = telefoneInput.value.replace(/\D/g, '');
    if (telefone === '') {
        showError(telefoneInput, 'O telefone é obrigatório.');
        return false;
    } else if (telefone.length < 10 || telefone.length > 11) {
        showError(telefoneInput, 'Telefone inválido (10 ou 11 dígitos).');
        return false;
    } else {
        clearError(telefoneInput);
        return true;
    }
}

// Valida o e-mail: opcional, mas se preenchido, deve ter um formato válido.
export function validateEmail(emailInput) {
    const email = emailInput.value.trim();
    if (email === '') {
        clearError(emailInput);
        return true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(emailInput, 'Formato de e-mail inválido.');
        return false;
    }
    clearError(emailInput);
    return true;
}

// Valida os campos do endereço: rua, número, bairro e CEP são obrigatórios. CEP deve ter 8 dígitos.
export function validateEndereco(ruaInput, numeroInput, bairroInput, cepInput) {
    let isValid = true;

    if (ruaInput.value.trim() === '') {
        showError(ruaInput, 'A rua é obrigatória.');
        isValid = false;
    } else { clearError(ruaInput); }

    if (numeroInput.value.trim() === '') {
        showError(numeroInput, 'O número é obrigatório.');
        isValid = false;
    } else { clearError(numeroInput); }

    if (bairroInput.value.trim() === '') {
        showError(bairroInput, 'O bairro é obrigatório.');
        isValid = false;
    } else { clearError(bairroInput); }

    const cep = cepInput.value.replace(/\D/g, '');
    if (cep === '') {
        showError(cepInput, 'O CEP é obrigatório.');
        isValid = false;
    } else if (cep.length !== 8) {
        showError(cepInput, 'CEP inválido (8 dígitos).');
        isValid = false;
    } else { clearError(cepInput); }

    return isValid;
}

// Valida o e-mail do funcionário: obrigatório e deve seguir o formato nome.sobrenome@saveus.com.br.
export function validateEmailFuncionario(emailInput) {
    const email = emailInput.value.trim();
    const regex = /^[a-zA-Z]+\.[a-zA-Z]+@saveus\.com\.br$/;

    if (email === '') {
        showError(emailInput, 'O e-mail é obrigatório.');
        return false;
    } else if (!regex.test(email)) {
        showError(emailInput, 'Esse e-mail não é da nossa base.');
        return false;
    } else {
        clearError(emailInput);
        return true;
    }
}

// Valida a senha: obrigatória e deve ter no mínimo 6 caracteres.
export function validateSenha(senhaInput) {
    const senha = senhaInput.value.trim();
    if (senha === '') {
        showError(senhaInput, 'A senha é obrigatória.');
        return false;
    } else if (senha.length < 6) {
        showError(senhaInput, 'A senha deve ter no mínimo 6 caracteres.');
        return false;
    } else {
        clearError(senhaInput);
        return true;
    }
}

// Adiciona os event listeners quando o DOM estiver completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastro-form');

    // Configuração para o formulário de cadastro de civis.
    if (cadastroForm) {
        const nomeInput = document.getElementById('nome');
        const dataNascimentoInput = document.getElementById('data-nascimento');
        const cpfInput = document.getElementById('cpf');
        const telefoneInput = document.getElementById('telefone');
        const emailContatoInput = document.getElementById('email-contato');
        const ruaInput = document.getElementById('rua');
        const numeroInput = document.getElementById('numero');
        const bairroInput = document.getElementById('bairro');
        const cepInput = document.getElementById('cep');

        // Adiciona validação "on blur" (quando o campo perde o foco).
        nomeInput.addEventListener('blur', () => validateNome(nomeInput));
        dataNascimentoInput.addEventListener('blur', () => validateDataNascimento(dataNascimentoInput));
        cpfInput.addEventListener('blur', () => validateCpf(cpfInput));
        telefoneInput.addEventListener('blur', () => validateTelefone(telefoneInput));

        if (emailContatoInput) {
            emailContatoInput.addEventListener('blur', () => validateEmail(emailContatoInput));
        }

        [ruaInput, numeroInput, bairroInput, cepInput].forEach(input => {
            input.addEventListener('blur', () => validateEndereco(ruaInput, numeroInput, bairroInput, cepInput));
        });

        // Validação ao submeter o formulário de cadastro.
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isEmailContatoValid = emailContatoInput ? validateEmail(emailContatoInput) : true;

            const isValid =
                validateNome(nomeInput) &&
                validateDataNascimento(dataNascimentoInput) &&
                validateCpf(cpfInput) &&
                validateTelefone(telefoneInput) &&
                isEmailContatoValid &&
                validateEndereco(ruaInput, numeroInput, bairroInput, cepInput);

            if (isValid) {
                alert('Você foi cadastrado com sucesso!');
                window.location.href = 'paginacivil.html';
            } else {
                alert('Corrija os erros antes de continuar.');
            }
        });
    }

    // Configuração para o formulário de login de funcionários.
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        const emailInputLogin = document.getElementById('email');
        const senhaInputLogin = document.getElementById('senha');

        // Credenciais corretas (idealmente, isso viria de um backend seguro).
        const CORRECT_EMAIL = 'nome.sobrenome@saveus.com.br';
        const CORRECT_PASSWORD = 'SaveUs@2025';

        // Adiciona validação "on blur" para os campos de login.
        emailInputLogin.addEventListener('blur', () => validateEmailFuncionario(emailInputLogin));
        senhaInputLogin.addEventListener('blur', () => validateSenha(senhaInputLogin));

        // Validação ao submeter o formulário de login.
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isEmailValid = validateEmailFuncionario(emailInputLogin);
            const isSenhaValid = validateSenha(senhaInputLogin);

            if (!isEmailValid || !isSenhaValid) {
                alert('Por favor, corrija os erros no formulário de login.');
                return;
            }

            const enteredEmail = emailInputLogin.value.trim();
            const enteredSenha = senhaInputLogin.value.trim();

            // Verifica se o e-mail e senha correspondem aos valores corretos.
            if (enteredEmail === CORRECT_EMAIL) {
                if (enteredSenha === CORRECT_PASSWORD) {
                    alert('Login efetuado com sucesso!');
                    window.location.href = 'paginafuncionario.html';
                } else {
                    showError(senhaInputLogin, 'Senha incorreta.');
                    alert('Senha incorreta.');
                    senhaInputLogin.value = '';
                    senhaInputLogin.focus();
                }
            } else {
                showError(emailInputLogin, 'E-mail não cadastrado ou incorreto.');
                alert('E-mail não cadastrado ou incorreto.');
                senhaInputLogin.value = '';
                emailInputLogin.focus();
            }
        });
    }
});