class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `<h2 class="text-white">Cinta Quran</h2>`;
    }
}
   
customElements.define('app-bar', AppBar);