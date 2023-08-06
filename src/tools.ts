const assertHtml = (script: string, style: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iframe</title>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@2.7.14/dist/vue.esm.browser.min.js",
          "element-ui": "https://unpkg.com/element-ui@2.15.13/lib/index.js"
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
      await import('vue').then(res => {
        window.Vue = res.default
      })
      await import('element-ui')
      ${script}
    </script>
  </body>
</html>
  `;
};

export { assertHtml };
