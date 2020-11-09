module.exports = {
  devServer: {
    disableHostCheck: true
  },
  // example build parameters
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'ElectronVuetify',
        appId: 'org.majesticpotatoe.electronvuetify',
        win: {
          icon: './src/assets/icons/win/icon.ico',
          target: 'nsis',
          // use this to auto-publish. Repository required in package.json
          // publish: ['github']
        },
        files: []
      },
      mainProcessFile: 'src/background.js',
      nodeIntegration: true
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
