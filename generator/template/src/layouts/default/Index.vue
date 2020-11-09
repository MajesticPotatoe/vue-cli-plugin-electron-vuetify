<template>
  <v-app>
    <default-system-bar />

    <default-view />

    <default-updater />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultSystemBar: () => import(/* webpackChunkName: "default-system-bar" */ './SysBar'),
      DefaultUpdater: () => process.env.IS_ELECTRON ? import(/* webpackChunkName: "default-updater" */ './Updater') : null,
      DefaultView: () => import(/* webpackChunkName: "default-view" */'./View'),
    },
  }
</script>
