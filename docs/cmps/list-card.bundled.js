import{L as t,c as a,h as s}from"./lit-element-8d10a31a.js";class r extends t{static get properties(){return{contributers:{type:String},date:{type:String},tags:{type:Array}}}static get styles(){return a`
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
        margin: var(--smallest-space) 0px;
        padding: var(--smallest-space);
        font-weight: bold;
        background-color: var(--primary-c);
        border-radius: 2px;
        width: max-content;
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

      @media (min-width: 320px) and (max-width: 767px) {
        h3 {
          margin: 0;
          width: unset;
        }
      }
    `}constructor(){super(),this.tags=[]}connectedCallback(){super.connectedCallback(),this.style.setProperty("--tag-col-num",this.tags.length),this.style.setProperty("--footer-col-num",void 0===this.contributers?2:3)}render(){return s`
      <div class="list-card" role="listitem">
        <h3>
          <slot name="title"></slot>
        </h3>
        
        <div class="list-card__body">
          <slot name="desc"></slot>
        </div>
        ${this.tags.length>0?s`<ul class="list-card__tag-list">
            ${this.tags.map(t=>s`<li class="list-card__tag">${t}</li>`)}
          </ul>`:s``}
        <div class="list-card__footer">
          ${void 0!==this.contributers?s`<span>with ${this.contributers}</span>`:s``}
          <span>
            <slot name="footer-link"></slot>
          </span>
          <span>
            ${this.date}
          </span>
        </div>
      </div>
    `}}window.customElements.define("list-card",r);export{r as ListCard};
