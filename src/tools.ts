const assertHtml = (script: string, style: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iframe</title>
    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@2.7.14/dist/vue.esm.browser.min.js"
        }
      }
    </script>
    <style>
      ${style}
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      ${script}
    </script>
  </body>
</html>
  `;
};

export { assertHtml };
