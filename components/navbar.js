class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(10, 37, 64, 0.9);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .logo {
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .logo span {
                    color: #00bfff;
                }
                
                ul {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                
                a {
                    color: white;
                    text-decoration: none;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                a:hover {
                    color: #00bfff;
                }
                
                a.active {
                    color: #00bfff;
                }
                
                a.active:after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #00bfff;
                }
                
                .nav-cta {
                    background: #00bfff;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    transition: all 0.3s ease;
                }
                
                .nav-cta:hover {
                    background: #0099cc;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 191, 255, 0.3);
                    color: white;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    ul {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: rgba(10, 37, 64, 0.98);
                        padding: 1rem 0;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    
                    ul.open {
                        display: flex;
                    }
                    
                    ul li {
                        padding: 0.75rem 2rem;
                        width: 100%;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="/" class="logo">
                    ABEAU<span>TECH</span>
                </a>
                
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
                
                <ul id="nav-menu">
                    <li><a href="/" class="active">Accueil</a></li>
                    <li><a href="produits.html">Produits</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="a-propos.html">À Propos</a></li>
                    <li><a href="contact.html" class="nav-cta">Contact</a></li>
                </ul>
            </nav>
        `;
        
        // Initialize mobile menu toggle
        const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navMenu = this.shadowRoot.querySelector('#nav-menu');
        
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            feather.replace();
        });
        
        // Update active link based on current page
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.shadowRoot.querySelectorAll('a');
        
        links.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if ((currentPath === 'index.html' && linkPath === '/') || 
                (currentPath !== 'index.html' && linkPath === currentPath)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);