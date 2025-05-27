const { createApp } = Vue;

createApp({
    data() {
        return {
            scrolled: false,
            activeSection: 'home',
            submitting: false,
            formMessage: '',
            formMessageType: '',
            greeting: 'Olá, eu sou',
            name: 'José Brito',
            title: 'Desenvolvedor Full Stack & Cientista de Dados',
            description: 'Criando experiências digitais excepcionais com foco em inovação e qualidade. Especializado em desenvolvimento web moderno e análise de dados.',
            
            aboutText: {
                paragraph1: 'Sou desenvolvedor de software, apaixonado por tecnologia e inovação, com sólida experiência no desenvolvimento de soluções web e mobile. Atuo na criação de sistemas para a área da saúde, aplicando boas práticas de desenvolvimento, organização de equipes e metodologias ágeis. Minha trajetória começou com análise de dados e evoluiu naturalmente para o desenvolvimento full stack.',
                paragraph2: 'Atualmente, trabalho com tecnologias como Laravel (PHP), Vue.js, Flutter e Python, além de modelagem de bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (Firebase). Possuo experiência em controle de versão com Git, deploy de aplicações em servidores Apache e práticas de desenvolvimento orientado a microsserviços. Participo ativamente de todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega e manutenção.',
                paragraph3: 'Além do desenvolvimento de software, também tenho experiência em análise de dados, criação de dashboards em Power BI e aplicação de machine learning para geração de insights. Acredito que unir desenvolvimento, dados e tecnologia é fundamental para criar soluções inteligentes, escaláveis e que realmente impactem a sociedade, especialmente na área da saúde, onde atuo atualmente.',

            },

            skills: [
                {
                    name: 'Frontend',
                    items: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5 & CSS3', 'Flutter']
                },
                {
                    name: 'Backend',
                    items: ['PHP', 'Laravel', 'Nest.js', 'Python', 'Node.js', 'RESTful APIs', 'OOP', 'Microsserviços']
                },
                {
                    name: 'Banco de Dados',
                    items: ['PostgreSQL', 'MySQL', 'Firebase', 'NoSQL']
                },
                {
                    name: 'Cloud & DevOps',
                    items: ['Git/GitHub', 'Docker', 'CI/CD', 'Linux', 'Deploy', 'Apache']
                },
                {
                    name: 'Data Science & Analytics',
                    items: ['Python', 'Pandas', 'R', 'Scikit-learn', 'Machine Learning', 'Power BI', 'Análise de Dados']
                },
                {
                    name: 'Metodologias e Soft Skills',
                    items: ['Modelagem de Dados', 'Metodologias Ágeis', 'Full-Stack', 'Backend', 'Frontend', 'Inglês (Avançado)', 'Português (Nativo)']
                }
            ],


            projects: [
                {
                    id: 1,
                    title: 'Monitora Saúde',
                    description: 'Plataforma de indicadores de saúde para apoio à tomada de decisão, gestão pública e análise epidemiológica.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
                    gradient: 'linear-gradient(135deg, #00ff9d 0%, #00cc7d 100%)'
                },
                {
                    id: 2,
                    title: 'RENAVEH',
                    description: 'Sistema web para cadastro e acompanhamento de notificações hospitalares, facilitando a gestão de dados de saúde.',
                    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
                    gradient: 'linear-gradient(135deg, #00cc7d 0%, #007f66 100%)'
                },
                {
                    id: 3,
                    title: 'CADSERV',
                    description: 'Sistema para gerenciamento de informações dos servidores vinculados à SAPAPVS, com relatórios e controle administrativo.',
                    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
                    gradient: 'linear-gradient(135deg, #00e6a8 0%, #00b374 100%)'
                },
                {
                    id: 4,
                    title: 'HANS+',
                    description: 'Aplicativo mobile para auxiliar pacientes e profissionais no acompanhamento do tratamento da hanseníase, com registro de medicamentos e sintomas.',
                    technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
                    gradient: 'linear-gradient(135deg, #00ff9d 0%, #66ffcc 100%)'
                },
                {
                    id: 5,
                    title: 'Maranhão Livre da Fome',
                    description: 'Sistema web para acompanhamento de famílias em situação de vulnerabilidade, com foco em saúde e segurança alimentar.',
                    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
                    gradient: 'linear-gradient(135deg, #00cc7d 0%, #00b374 100%)'
                },
                // {
                //     id: 6,
                //     title: 'Portal REACT',
                //     description: 'Blog institucional da Rede de Aplicação em Ciência e Tecnologia da UFMA, focado em divulgação científica e tecnológica.',
                //     technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
                //     gradient: 'linear-gradient(135deg, #00e6a8 0%, #00ff9d 100%)'
                // },
                // {
                //     id: 7,
                //     title: 'PlandoX 2',
                //     description: 'Microsserviço de análise estatística com suporte a modelos de machine learning, automação de dados e relatórios.',
                //     technologies: ['Python', 'FastAPI', 'Pandas', 'Scikit-learn', 'Docker'],
                //     gradient: 'linear-gradient(135deg, #007f66 0%, #00cc7d 100%)'
                // }
            ],


            education: [
                {
                    id: 1,
                    degree: 'Mestrado em Ciência da Computação',
                    institution: 'Universidade Federal do Maranhão (UFMA)',
                    period: '2025 - 2027 (Previsão)',
                    description: 'Programa de pós-graduação focado em áreas como Inteligência Artificial, Aprendizado de Máquina, Desenvolvimento de Software e Pesquisa Aplicada.'
                },
                {
                    id: 2,
                    degree: 'Bacharelado em Engenharia da Computação',
                    institution: 'Universidade Federal do Maranhão (UFMA)',
                    period: '2021 - 2026 (Previsão de Conclusão)',
                    description: 'Curso que proporciona competências sólidas em Programação, Arquitetura de Computadores, Redes, Sistemas Operacionais, Banco de Dados e Automação.'
                },
                {
                    id: 3,
                    degree: 'Bacharelado em Ciência e Tecnologia (Interdisciplinar)',
                    institution: 'Universidade Federal do Maranhão (UFMA)',
                    period: '2021 - 2024 (Concluído)',
                    description: 'Fundamentação robusta e multidisciplinar que integra conceitos de matemática, física, computação, estatística e fundamentos de engenharia. Esta formação estabelece uma base ampla e a capacidade de adaptação a novas tecnologias.'
                },
            ],

            contactInfo: [
                {
                    type: 'email',
                    label: 'Email',
                    value: 'josevictorbritoc@gmail.com',
                    link: 'mailto:josevictorbritoc@gmail.com',
                    icon: 'fas fa-envelope'
                },
                {
                    type: 'phone',
                    label: 'Telefone',
                    value: '+55 (98) 9898500-7941',
                    link: 'tel:+559898985007941',
                    icon: 'fas fa-phone'
                },
                {
                    type: 'linkedin',
                    label: 'LinkedIn',
                    value: '/in/josevbrito',
                    link: 'https://linkedin.com/in/josevbrito',
                    icon: 'fab fa-linkedin'
                }
            ],

            socialLinks: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/josevbrito',
                    icon: 'fab fa-github'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/in/josevbrito',
                    icon: 'fab fa-linkedin'
                },
                {
                    name: 'Instagram',
                    url: 'https://instagram.com/josevbrito_',
                    icon: 'fab fa-instagram'
                }
            ],

            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.updateActiveSection();
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            this.scrolled = scrollTop > 50;
            this.updateActiveSection();
        },

        updateActiveSection() {
            const sections = ['home', 'about', 'projects', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    this.activeSection = sections[i];
                    break;
                }
            }
        },

        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        },

        async submitForm() {
            if (!this.form.name || !this.form.email || !this.form.message) {
                this.showFormMessage('Por favor, preencha todos os campos.', 'error');
                return;
            }

            this.submitting = true;
            
            // Simulação de envio de formulário
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                console.log('Formulário enviado:', this.form);
                
                this.showFormMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                this.resetForm();
            } catch (error) {
                this.showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
            } finally {
                this.submitting = false;
            }
        },

        showFormMessage(message, type) {
            this.formMessage = message;
            this.formMessageType = type;
            
            setTimeout(() => {
                this.formMessage = '';
                this.formMessageType = '';
            }, 5000);
        },

        resetForm() {
            this.form = {
                name: '',
                email: '',
                message: ''
            };
        },

        // Método para adicionar efeitos de typing
        typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        },

        // Método para lazy loading de imagens
        lazyLoadImages() {
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('loading');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        },

        // Método para detectar tema do sistema
        detectSystemTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                document.body.classList.add('light-theme');
            }
        },

        // Método para copiar email para clipboard
        copyEmail() {
            navigator.clipboard.writeText('jose.brito@email.com').then(() => {
                this.showFormMessage('Email copiado para a área de transferência!', 'success');
            });
        },

        // Método para scroll suave personalizado
        smoothScrollTo(targetPosition, duration = 1000) {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    },

    computed: {
        featuredProjects() {
            return this.projects.slice(0, 3);
        },

        experienceYears() {
            const startYear = 2019;
            const currentYear = new Date().getFullYear();
            return currentYear - startYear;
        },

        isFormValid() {
            return this.form.name.length > 2 && 
                this.form.email.includes('@') && 
                this.form.message.length > 10;
        }
    },

    watch: {
        activeSection(newSection) {
            if (history.pushState) {
                history.pushState(null, null, `#${newSection}`);
            }
        }
    }
}).mount('#app');
