import{L as e,c as t,h as s}from"./lit-element-8d10a31a.js";class i extends e{static get properties(){return{states:{value:Object},isPressed:{value:Boolean,attribute:"is-pressed",reflect:!0},label:{value:String},events:{type:Object}}}static get styles(){return t`
      :root {
        max-width: 100%;
      }
      button {
        font-family: inherit;
        font-size: 100%;
        padding: 1em;
        border: none;
        border-radius: 5px;
        color: white;
        display: grid;
        grid-template-columns: 50px 125px;
        align-items: center;
        justify-items: center;
      }

      img {
        margin: auto;
        height: 2em;
        width: 2em;
      }
    `}_handleClick(e){this.isPressed=!this.isPressed,void 0!==this.events.onclick&&this.events.onclick(e)}render(){const{pressed:e,notPressed:t}=this.states,i=this.isPressed?t:e;return s`
      <button
        aria-pressed="${this.isPressed}"
        aria-label="${this.label}"
        @click="${this._handleClick}"
        style="background-color: ${i.color};"
      >
        <img src="${i.icon}" />
        <span>${i.label}</span>
      </button>
    `}}window.customElements.define("mode-toggle",i);export{i as ModeToggle};
