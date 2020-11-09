const {
  readFileSync,
  unlinkSync,
  writeFileSync,
} = require('fs')

module.exports = (api, opts, rootOpts) => {
  if (opts.installElectronVuetify) {
    api.extendPackage({
      author: 'author <author@email.com>',
      description: 'a new electron-vuetify app',
      devDependencies: {
        '@mdi/font': '^5.6.55',
        'electron': '^9.0.0',
        'electron-devtools-installer': '^3.1.0',
        'electron-updater': '^4.3.1',
        'roboto-fontface': '^0.10.0',
        'vue-cli-plugin-electron-builder': '~2.0.0-rc.5',
        'vuex-pathify': '^1.4.1',
      },
      main: 'background.js',
      productName: 'A-Electron-Vuetify-App',
      scripts: {
        'electron:build': 'vue-cli-service electron:build',
        'electron:serve': 'vue-cli-service electron:serve',
        'postinstall': 'electron-builder install-app-deps',
        'postuninstall': 'electron-builder install-app-deps',
      },
      repository: {
        'type': 'git',
        'url': 'https://github.com/',
      },
    })

    api.render('./template', {
      ...opts,
    });

    api.onCreateComplete(() => {
      const offlineFontLines = `\nimport 'roboto-fontface/css/roboto/roboto-fontface.css'\nimport '@mdi/font/css/materialdesignicons.css'`

      // get content
      const mainPath = api.resolve('./src/main.js')
      let contentMain = readFileSync(mainPath, { encoding: 'utf-8' })
      const lines = contentMain.split(/\r?\n/g).reverse()

      // inject import
      const lastImportIndex = lines.findIndex(line => line.match(/^import/));
      lines[lastImportIndex] += offlineFontLines;
      
      // modify main.js
      contentMain = lines.reverse().join('\n');
      writeFileSync(mainPath, contentMain, { encoding: 'utf-8' });

      // remove old files
      const dispose = [
        'plugins/webfontloader.js',
        'assets/logo.png',
        'components/app/Btn.vue',
      ]
      for (const filePath of dispose) {
        try {
          unlinkSync(api.resolve(`./src/${filePath}`))
        } catch(err) {
          console.error(`Unable to remove: ${filePath}\n`)
        }
      }
    })
  }
}