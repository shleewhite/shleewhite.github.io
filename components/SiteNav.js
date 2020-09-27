import {
  LitElement,
  html,
  css
} from 'lit-element';

class SiteNav extends LitElement {
  static get properties() {
    return {
      isRoot: {
        type: Boolean
      },
    }
  }

  static get styles() {
    return css `
      nav {
        display: grid;
        grid-template-columns: 1fr auto auto;
        column-gap: var(--medium-space);
      }

      .home {
        font-family: "Retrology", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: var(--large-t);
        color: var(--primary-c);
        text-decoration: none;
      }

      .nav-item {
        align-self: start;
        text-decoration: none;
        color: var(--body-c);
        font-size: var(--medium-t);
      }

      .nav-item:hover, .nav-item:focus, .home:focus, .home:hover {
        border-bottom: 8px solid var(--primary-c);
        outline: none;
      }
    `;
  }

  constructor() {
    super();
    this.isRoot = false;
  }

  render() {
    return html `
      <nav>
      <span>
        ${this.isRoot ? html`` :
    html`<a href="/" class="home">Lee White</a>`
}
      </span>
        <a href="/" class="nav-item">
          <span>About</span>
        </a>
        <a href="/portfolio.html" class="nav-item">
          <span>Portfolio</span>
        </a>
      </nav>
    `;
  }
}

customElements.define('site-nav', SiteNav);