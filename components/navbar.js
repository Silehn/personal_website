class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(249, 249, 249, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
                }
                
                nav {
                    max-width: 1440px;
                    margin: 0 auto;
                    padding: 1.0rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1A1A1A;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #1A1A1A;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #0052FF;
                }
                
                .cta-button {
                    background-color: #0052FF;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .cta-button:hover {
                    background-color: #003bb3;
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                    <a href="https://makimattila.fi" class="logo">Mäkimattila</a>
<div class="nav-links">
                <a href="process.html">Prosessit</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="pricing.html">Hinnasto</a>
</div>
<a href="contact.html" class="cta-button">Ota Yhteyttä</a>
</nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
