// Menu ativo com base na seção visível
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu li a');
    
    // Verifica qual página está aberta
    function checkCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
        
        // Se estiver em uma página com seções, configura o scroll spy
        if (sections.length > 0) {
            window.addEventListener('scroll', debounce(makeSectionActive, 100));
            makeSectionActive(); // Ativa inicialmente
        }
    }
    
    // Função para destacar seção ativa durante rolagem
    function makeSectionActive() {
        // Obtém posição atual de rolagem
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        // Verifica cada seção e encontra a que está mais visível
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Remove o 'active' de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Verifica se o href do link contém o id da seção ativa
            const href = link.getAttribute('href');
            if (href.includes(currentSection) || (href.includes('#') && href.split('#')[1] === currentSection)) {
                link.classList.add('active');
            } else if (currentSection === "" && (href === "index.html" || href === "")) {
                // Se nenhuma seção estiver ativa e estiver na página inicial
                link.classList.add('active');
            }
        });
    }
    
    // Função de debounce para melhorar performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Inicializa
    checkCurrentPage();
    
    // Adiciona eventos de clique para navegação suave em links internos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Se for um link com âncora na mesma página
            if (href.includes('#') && !href.startsWith('http')) {
                const targetId = href.split('#')[1];
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});