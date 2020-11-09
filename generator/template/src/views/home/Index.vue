<template>
  <app-container
    id="home"
    class="text-center fill-height"
    tag="section"
  >
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-black mb-3">
          Electron-Vuetify
        </h1>
        <p class="body-2 text-uppercase font-weight-regular">
          A feature rich boilerplate for Electron 9 and Vuetify 2.x
        </p>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="require('./../../assets/icons/svg/vuetify.svg')"
          class="mb-6"
          contain
          height="150"
        />

        <h2 class="body-2 font-weight-black">
          Important Links
        </h2>

        <v-responsive
          class="mx-auto my-4"
          max-width="60"
        >
          <v-divider />
        </v-responsive>

        <v-responsive
          class="mx-auto"
          max-width="400"
        >
          <v-row
            class="mx-auto"
            dense
          >
            <v-col
              v-for="[link, text, icon] in links"
              :key="link"
              cols="12"
            >
              <v-btn
                :href="link"
                block
                depressed
                target="_blank"
              >
                <v-icon
                  left
                  v-text="icon"
                />

                {{ text }}
              </v-btn>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>

      <v-col cols="6">
        <h2 class="body-2 font-weight-black">
          Features
        </h2>

        <v-responsive
          class="mx-auto my-4"
          max-width="60"
        >
          <v-divider />
        </v-responsive>

        <v-responsive class="mx-auto">
          <v-row
            class="mx-auto"
            justify="center"
            no-gutters
          >
            <v-col
              v-for="(feat,i) in features"
              :key="`feat-${i}`"
              class="text-center"
              cols="12"
            >
              <div
                class="col col-12 overline grey--text text--darken-4 pa-1"
                v-text="feat"
              />
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </app-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    features: [
      'Electron 9 w/ electron-builder + electron-updater',
      'Pre-configure template',
      'Routing w/ vue-router',
      'SASS',
      'Vuetify 2.x',
      'Vuetify ESLint',
      'Vuetify CLI Plugin (Coming soon)',
      'Vuetify CLI Preset',
      'Vuex + Vuex-pathify',
    ],
    links: [
      ['//github.com/vuetifyjs/vuetify', 'Github', 'mdi-github'],
      ['//vuetifyjs.com', 'Documentation', 'mdi-file-document'],
      ['//community.vuetifyjs.com', 'Community', 'mdi-account-multiple'],
      ['//github.com/users/johnleider/sponsors', 'Support Vuetify', 'mdi-vuetify'],
      ['//github.com/users/majesticpotatoe/sponsors', 'Support MajesticPotatoe', 'mdi-github'],
    ],
  }),
}
</script>
