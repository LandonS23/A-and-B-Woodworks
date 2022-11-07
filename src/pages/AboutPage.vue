<template>
  <q-page class="row">
    <div
      class="col-12"
      :class="{
        'q-pt-lg': screen.gt.xs,
      }"
    >
      <div
        class="text-center text-white q-px-md q-mt-lg watson"
        :class="{
          'text-h2 q-mb-md': screen.gt.xs,
          'text-h4 q-mb-sm': screen.xs,
        }"
      >
        About Us
      </div>
      <div
        class="text-center text-white q-px-md"
        :class="{
          'text-h5': screen.gt.xs,
          'text-h6': screen.xs,
        }"
      >
        {{ t('lineOfWork') }}
      </div>

      <q-img
        src="~/assets/logo.svg"
        spinner-color="white"
        class="logo q-my-lg"
        fit="contain"
      />

      <div
        class="text-center text-white text-subtitle1 text-bold text-italic q-mb-xl"
      >
        {{ t('saying') }}
      </div>

      <div class="text-center text-white text-body1 q-mx-md q-mx-md-auto about">
        {{ t('about') }}
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'AboutPage',

  setup() {
    const { t } = useI18n();
    const quasar = useQuasar();
    const screen = ref(quasar.screen);

    return {
      t,
      screen,
    };
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 150px;

  @media (min-width: $breakpoint-md-min) {
    height: 250px;
  }
}

.about {
  max-width: 900px;
}
</style>
