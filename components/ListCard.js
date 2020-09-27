import {
  LitElement,
  html,
  css
} from 'lit-element';

class ListCard extends LitElement {
  static get properties() {
    return {
      contributers: {
        type: String
      },
      date: {
        type: String
      },
      tags: {
        type: Array,
      }
    }
  }

  static get styles() {
    return css `
      :host {
        --tag-c: #727779;
        --tag-text-c: #000;
        --tag-col-num: 0;
        --footer-col-num: 2;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --tag-c: #C0C0C0;
        }
      }

      .list-card {
        background-color: var(--background-darker-c);
        margin: var(--medium-space) 0px;
        padding: var(--small-space);
        border-radius: 5px;
      }

      h3 {
        color: var(--primary-c);
        margin: var(--smallest-space) 0px;
        font-weight: normal;
      }

      .list-card__tag-list {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(var(--tag-col-num), auto);
        padding: 0px;
        width: max-content;
        column-gap: var(--smallest-space);
      }

      .list-card__tag {
        background-color: var(--tag-c);
        border-radius: 15px;
        padding: var(--smallest-space);
        width: max-content;
        color: var(--tag-text-c);
        opacity: 0.75;
        font-size: 1em;
      }

      .list-card__body {
        color: var(--body-c);
        margin: 0px;
      }

      .list-card__footer {
        color: var(--body-c);
        display: grid;
        grid-template-columns: repeat(var(--footer-col-num), auto);
      }

      .list-card__footer span:first-child {
        justify-self: start;
      }

      .list-card__footer span:last-child {
        justify-self: end;
      }
    `;
  }

  constructor() {
    super();
    this.tags = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty("--tag-col-num", this.tags.length);
    this.style.setProperty("--footer-col-num", this.contributers === undefined ? 2 : 3);
  }

  render() {
    return html `
      <div class="list-card" role="listitem">
        <h3>
          <slot name="title"></slot>
        </h3>
        
        <div class="list-card__body">
          <slot name="desc"></slot>
        </div>
        ${this.tags.length > 0 ? 
          html`<ul class="list-card__tag-list">
            ${this.tags.map((item) => (
              html`<li class="list-card__tag">${item}</li>`
            ))}
          </ul>` : html``
        }
        <div class="list-card__footer">
          ${this.contributers !== undefined ? 
            html`<span>with ${this.contributers}</span>` :
            html``
          }
          <span>
            <slot name="footer-link"></slot>
          </span>
          <span>
            ${this.date}
          </span>
        </div>
      </div>
    `;
  }
}

customElements.define('list-card', ListCard);