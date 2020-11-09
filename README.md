# vue-cli-plugin-electron-vuetify

<div align="center">
  <img width="500" src="/assets/electron-vuetify-banner.png" alt="electron-vuetify">
</div>

vue-cli plugin to easily scaffold Vuetify 2.x w/ Electron 9.0

> This plugin/preset is still very much a work in progress. Currently it is just a port of the old [electron-vuetify](https://github.com/MajesticPotatoe/electron-vuetify) repository.

## Feature Set

- electron 9 w/ electron-builder + electron-updater
- routing w/ vue-router
- sass
- vuetify 2.x
- vuetify eslint
- vuetify-cli-preset
- vuex + vuex-pathify
- offline fonts

## Getting Started

> It is currently recommended to only use this preset to start a new project via the provided preset. In the future, a more robust setup may be created to handle the addition to existing projects.

Using the latest version of `@vue/cli` - run the following command:

```bash
  vue create --preset majesticpotatoe/vue-cli-plugin-electron-vuetify my-app
```

> Currently theres an issue I am looking to resolve with preset configurations, For the time being prompts have been enabled. Make sure you select Electron v9.0.0.

Electron-vuetify is set up in a way to be used as both a standard SPA as well as an Electron app from the same codebase. There are 2 sets of commands for dev server and build:

### Development Environment

```bash
  // standard app
  yarn serve

  // electron app
  yarn electron:serve
```

### Building

```bash
  // standard app
  yarn build

  // electron app
  yarn electron:build
```

### Build Configuration

Building is performed using [electron-builder](https://www.npmjs.com/package/electron-builder) with assistance of the [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder). Configuration is performed via `pluginOptions.electronBuilder` found in `vue.config.js`. A simple config for a window has been included.

For more info regarding electron-builder, its configuration and caveats, visit the [electron docs](https://www.electron.build/).

### Auto Update

Auto updating is performed by [electron-updater](https://www.npmjs.com/package/electron-updater). This works by using a github repository to prompt and update your electron app when a new version is published. You will need to make sure you update the `repository` in your `package.json` to the repository you wish to publish to.

> Publishing is enabled by default via the `pluginOptions.electronBuilder.builderOptions.win.publish` setting in `vue.config.js`.

For more info regarding electron updater, its configuration and caveats, visit the [electron docs](https://www.electron.build/auto-update).

## Electron Stores

To maintain proper compilation between standard and electron apps, all electron state functionalities are placed in their own store. When running in electron, these stores are not loaded.

> It is recommended to keep electron based components separate and disable their rendering with use of `process.env.IS_ELECTRON`

### window

controls aspects of the electron window.

#### states

| Name | Default | Description |
| --- | --- | --- |
| **fullscreen** | `false` | window is in a _fullscreen_ state |
| **maximized** | `false` | window is in a _maximized_ state |

#### actions

| Name | Description |
| --- | --- | --- |
| **closeWin** | closes the electron window |
| **minimizeWin** | _minimizes_ the electron window |
| **toggleFullscreen** | toggles the electron window between a _fullscreen_ and _normal_ state |
| **toggleMaximize** | toggles the electron window between a _maximized_ and _normal_ state |

## Roadmap

- Installation for existing applications
- More in depth configuration
  - Splash screen option
  - Online/Offline Fonts
  - Vuetify supported icon sets
  - Addition build templates (osx, linux, mobile?)
  - and more...
- Vue 3/Vuetify 3 (when support is released)
