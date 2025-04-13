// Script para o site de portfólio


import 'js/header.js';

document.addEventListener('DOMContentLoaded', function() {
    
    // Animação de fade-in para elementos à medida que são rolados para a viewport
    const fadeElements = document.querySelectorAll('.project-card, .personal-project, .note-card');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplica estilos iniciais
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verifica no carregamento da página
    checkFade();
    
    // Verifica durante o scroll
    window.addEventListener('scroll', checkFade);
    
    // Validação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Validação básica
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Por favor, insira seu nome');
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Por favor, insira seu email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Por favor, insira um email válido');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Por favor, insira sua mensagem');
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            if (isValid) {
                // Ainda não está ok
                const formGroups = contactForm.querySelectorAll('.form-group');
                const submitBtn = contactForm.querySelector('.submit-btn');
                
                formGroups.forEach(group => group.style.display = 'none');
                submitBtn.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<p>Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.</p>';
                successMessage.style.color = 'var(--accent-color)';
                successMessage.style.padding = '20px 0';
                successMessage.style.textAlign = 'center';
                successMessage.style.fontSize = '1.1rem';
                
                contactForm.appendChild(successMessage);
                
                // Reset form após 5 segundos
                setTimeout(() => {
                    contactForm.reset();
                    formGroups.forEach(group => group.style.display = 'block');
                    submitBtn.style.display = 'block';
                    successMessage.remove();
                }, 5000);
            }
        });
    }
    
    // Função para mostrar erro no formulário
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = '#ff3860';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }
        
        input.style.borderColor = '#ff3860';
    }
    
    // Função para remover erro no formulário
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = 'var(--border-color)';
    }
    
    // Valida formato de email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Efeito de digitação para o título principal
    const nameElement = document.querySelector('.heading-name');
    
    if (nameElement) {
        const originalText = nameElement.innerHTML;
        nameElement.innerHTML = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                nameElement.innerHTML += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
    
    // Efeito de destaque em hover nos cards de projetos
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Aumenta o brilho da borda
            this.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.3)';
            
            // Destaca o título
            const title = this.querySelector('h3');
            if (title) {
                title.style.transform = 'scale(1.05)';
                title.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            
            const title = this.querySelector('h3');
            if (title) {
                title.style.transform = '';
            }
        });
    });
    
    // Botão para volta ao topo
    const body = document.querySelector('body');
    const scrollTopBtn = document.createElement('button');
    
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '30px';
    scrollTopBtn.style.right = '30px';
    scrollTopBtn.style.backgroundColor = 'var(--accent-color)';
    scrollTopBtn.style.color = 'var(--primary-bg)';
    scrollTopBtn.style.width = '50px';
    scrollTopBtn.style.height = '50px';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.transition = 'opacity 0.3s ease';
    scrollTopBtn.style.zIndex = '999';
    scrollTopBtn.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    
    body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
            setTimeout(() => {
                scrollTopBtn.style.opacity = '1';
            }, 10);
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                scrollTopBtn.style.display = 'none';
            }, 300);
        }
    });
    
    // Modos para o formulário de contato
    // Verifica se há dados de formulário salvos no localStorage
    if (contactForm) {
        const savedFormData = localStorage.getItem('contactFormData');
        
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            
            for (const key in formData) {
                const input = document.getElementById(key);
                if (input) {
                    input.value = formData[key];
                }
            }
        }
        
        // Salva dados do formulário enquanto o usuário digita
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                const formData = {};
                
                formInputs.forEach(input => {
                    formData[input.id] = input.value;
                });
                
                localStorage.setItem('contactFormData', JSON.stringify(formData));
            });
        });
        
        // Limpa os dados salvos após envio bem-sucedido
        contactForm.addEventListener('submit', function() {
            localStorage.removeItem('contactFormData');
        });
    }
});