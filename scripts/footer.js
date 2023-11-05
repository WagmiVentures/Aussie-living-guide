//define a function to generate the page footer

export function renderPageFooter() {
  const footerHTML = `
        <div class="footer-title">[ By the Royal Decree of Her Royal Highness, aka, your mom ]</div>
        <div class="footer-developer">&#169 🌌🔫👑👊</div>
    `;

  document.querySelector(".footer").innerHTML = footerHTML;
}
