const relative = require('./relative-path.cjs');

module.exports = function ({
  page
}) {
  return `
  <nav>
    <span>
      ${page.url === "/" ? `` : 
      `<a href="${relative(page.url, "/")}" class="home">Lee White</a>`
      }
    </span>
    <a href="${relative(page.url, "/")}" class="nav-item">
      <span>About</span>
    </a>
    <a href="${relative(page.url, "/portfolio")}" class="nav-item">
      <span>Portfolio</span>
    </a>
  </nav>`;
};