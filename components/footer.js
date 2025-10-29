class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #0a2540;
                    color: white;
                    padding: 4rem 2rem 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    color: #00bfff;
                }
                
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-section ul li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-section ul li a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .footer-section ul li a:hover {
                    color: #00bfff;
                }
                
                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background: #00bfff;
                    transform: translateY(-3px);
                }
                
                .footer-bottom {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>ABEAU TECH</h3>
                        <p>Votre partenaire en solutions réseau et WiFi professionnelles au Bénin depuis 2 ans.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Liens Rapides</h3>
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="produits.html">Produits</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="a-propos.html">À Propos</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Nos Services</h3>
                        <ul>
                            <li><a href="services.html">Installation WiFi</a></li>
                            <li><a href="services.html">Réseaux Entreprise</a></li>
                            <li><a href="services.html">Sécurité Réseau</a></li>
                            <li><a href="services.html">Maintenance</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contactez-nous</h3>
                        <div class="contact-info">
                            <div class="contact-item">
                                <i data-feather="map-pin"></i>
                                <span>Cotonou, Bénin</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="phone"></i>
                                <span>+229 40 55 07 85</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="mail"></i>
                                <span>contact@abeautech.bj</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="clock"></i>
                                <span>Lun-Ven: 8h-18h</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} ABEAU TECH. Tous droits réservés.</p>
                </div>
            </footer>
        `;
        
        // Initialize feather icons in footer
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);