class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1A1A1A;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    display: block;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .footer-links a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: white;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-links a {
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background-color: #0052FF;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.875rem;
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="#" class="footer-logo">Mäkimattila</a>
<p class="text-gray-400 mb-4">Digitaalisen erinomaisuuden arkkitehdit</p>
<div class="social-links">
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="dribbble"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Palvelut</h4>
                    <div class="footer-links">
                        <a href="#">Verkkosuunnittelu</a>
                        <a href="#">Tekoälykehitys</a>
                        <a href="#">Brändistrategia</a>
                        <a href="#">UX-konsultointi</a>
</div>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Yritys</h4>
                    <div class="footer-links">
                        <a href="about.html">Tietoa Meistä</a>
                        <a href="process.html">Prosessi</a>
<a href="#">Uramahdollisuudet</a>
                        <a href="contact.html">Yhteystiedot</a>
</div>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Juridiset</h4>
                    <div class="footer-links">
                        <a href="#">Tietosuojakäytäntö</a>
                        <a href="#">Käyttöehdot</a>
                        <a href="#">Evästekäytäntö</a>
</div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} Mäkimattila. Kaikki oikeudet pidätetään.
</div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
