const template = document.createElement("template");
template.innerHTML = `
<footer>
 <div class="DROITE">
<div class="phrase">
  <i class="bx bx-map"></i>
  <h4>497 SAFI, CA 95673</h4>
</div>
<div class="phrase">
  <i class="bx bx-mobile"></i>
  <h4>+44 345 678 903</h4>
</div>
<div class="phrase">
  <i class="bx bxl-gmail"></i>
  <h4>contact@YouCodeTravel.com</h4>
</div>
</div>
<div class="CENTER">
<h3>Subscribe to our newsletter</h3>
<div class="button_mail">
  <input type="email" class="email" placeholder="Email Address" />
  <button class="ok">OK</button>
</div>
</div>
<div class="GAUCHE">
<img src="../image/logo.png" class="logo_footer" alt="" />
</div>
</footer>
`;

class footre_descktop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template.innerHTML;
  }
}

customElements.define("resume-app", footre_descktop);
