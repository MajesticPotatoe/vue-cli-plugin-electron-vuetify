# vue-cli-plugin-electron-vuetify

vue-cli plugin to easily scaffold Vuetify 2.x w/ Electron 9.0

> This plugin/preset is still very much a work in progress. Currently it is just a port of the old electron-vuetify repository.

## Feature Set

- electron 9 w/ electron-builder (beta)
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

> Currently theres an issue with preset configurations, For the time being prompts have been added. Make sure you select Electron v9.0.0.

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
