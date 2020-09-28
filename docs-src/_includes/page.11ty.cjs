const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {
    title,
    page,
    content
  } = data;
  return `
<!doctype html>

<html lang="en" color-mode="light">
  <head>
    <meta charset="utf-8">
    <meta name="color-scheme" content="dark light">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${relative(page.url, '/docs.css')}">
    <script type="text/js" src="${relative(
      page.url,
      '/cmps/list-card.bundled.js'
    )}"></script>
    <script type="text/js" src="${relative(
      page.url,
      '/cmps/mode-toggle.bundled.js'
    )}"></script>
  </head>
  <body>
    ${nav(data)}
    <div id="main-wrapper">
      <main>
        ${content}
      </main>
    </div>
    ${footer()}

    <script>
    const modeToggle = document.querySelector('mode-toggle');

    if (localStorage.getItem('color-mode') === 'dark' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 
      !localStorage.getItem('color-mode'))) {
      document.documentElement.setAttribute('color-mode', 'dark');
      modeToggle.isPressed = true;
    } else {
      document.documentElement.setAttribute('color-mode', 'light');
    }

    const states = {
      pressed: {
        label: 'Dark Mode',
        icon: '../icons/svg/002-eye.svg',
        color: '#303030',
      },
      notPressed: {
        label: 'Light Mode',
        icon: '../icons/svg/001-witness.svg',
        color: '#1e555c'
      }
    }

    const events = {
      onclick: (event) => {
        if (!modeToggle.isPressed) {
          document.documentElement.setAttribute('color-mode', 'light');
          localStorage.setItem('color-mode', 'light');
        } else {
          document.documentElement.setAttribute('color-mode', 'dark');
          localStorage.setItem('color-mode', 'dark');
        }
      }
    }

    modeToggle.states = states;
    modeToggle.events = events;
  </script>
  </body>
</html>`;
};