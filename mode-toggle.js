import {
  LitElement,
  html,
  css
} from 'lit-element';

export class ModeToggle extends LitElement {
  static get properties() {
    return {
      states: {
        value: Object,
      },
      isPressed: {
        value: Boolean,
        attribute: 'is-pressed',
        reflect: true,
      },
      label: {
        value: String,
      },
      events: {
        type: Object,
      }
    }
  }

  static get styles() {
    return css `
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
    `;
  }

  _handleClick(event) {
    this.isPressed = !this.isPressed;
    this.events.onclick !== undefined ? this.events.onclick(event) : null;
  }

  render() {
    const {
      pressed,
      notPressed
    } = this.states

    const content = this.isPressed ? notPressed : pressed;

    return html `
      <button
        aria-pressed="${this.isPressed}"
        aria-label="${this.label}"
        @click="${this._handleClick}"
        style="background-color: ${content.color};"
      >
        <img src="${content.icon}" />
        <span>${content.label}</span>
      </button>
    `;
  }
}

window.customElements.define('mode-toggle', ModeToggle);