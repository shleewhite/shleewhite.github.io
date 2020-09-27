import {
  LitElement,
  html,
  css
} from 'lit-element';

class SiteFooter extends LitElement {
  static get styles() {
    return css `
      footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: var(--medium-space);
        justify-items: center;
        border-top: 1px solid var(--background-darker-c)
      }

      footer > * {
        margin-top: var(--small-space);
      }

      ul {
        list-style-type: none;
      }

      p {
        font-weight: bold;
        font-size: var(--small-t);
      }

      a {
        color: var(--body-c);
        text-decoration: none;
      }

      a:hover, a:focus {
        text-decoration: underline;
        outline: none;
      }
    `;
  }

  render() {
    return html `
      <footer>
        <ul>
          <li>
            <a href="www.linkedin.com/in/lee-white-522ab1a1/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="github.com/shleewhite">
              GitHub
            </a>
          </li>
          <li>
            <a href="codepen.io/shleewhite">
              Codepen
            </a>
          </li>
          <li>
            <a href="twitter.com/shleewhite">
              Twitter
            </a>
          </li>
          <li>
            <a href="www.instagram.com/_bitchstitch_/">
              Instagram
            </a>
          </li>
        </ul>
        <p>Pronouns: She/Her</p>
        <a href="mailto:me@shleewhite.com">me@shleewhite.com</a>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);