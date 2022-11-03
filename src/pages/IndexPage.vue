<template>
  <q-page class="row">
    <div
      class="col-12"
      :class="{
        'q-pt-lg': screen.gt.xs,
      }"
    >
      <div
        class="text-center text-white q-px-md watson"
        :class="{
          'text-h2 q-mb-md q-mt-xl': screen.gt.xs,
          'text-h4 q-mb-sm q-mt-lg': screen.xs,
        }"
      >
        {{ t('company') }}
      </div>
      <div
        class="text-center text-white q-px-md"
        :class="{
          'text-h5': screen.gt.xs,
          'text-h6': screen.xs,
        }"
      >
        {{ t('subtitle') }}
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

      <div class="row q-mx-md q-mx-md-xl">
        <div class="col-6 col-md-3 q-pl-md-xl">
          <q-btn
            icon="request_quote"
            label="Free Quote"
            stack
            glossy
            color="primary"
            :size="screen.gt.xs ? 'xl' : 'lg'"
            class="full-width"
            no-caps
            to="/contact"
          />
        </div>
        <div class="col-6 col-md-3 q-pl-md q-pl-md-xl">
          <q-btn
            icon="collections"
            label="Gallery"
            stack
            glossy
            color="primary"
            :size="screen.gt.xs ? 'xl' : 'lg'"
            class="full-width"
            no-caps
            to="/gallery"
          />
        </div>
        <div class="col-6 col-md-3 q-pl-md-xl q-pt-md q-pt-md-none">
          <q-btn
            icon="info"
            label="About Us"
            stack
            glossy
            color="primary"
            :size="screen.gt.xs ? 'xl' : 'lg'"
            class="full-width"
            no-caps
            to="/about"
          />
        </div>
        <div class="col-6 col-md-3 q-pl-md q-pl-md-xl q-pt-md q-pt-md-none">
          <q-btn
            icon="question_mark"
            label="FAQ"
            stack
            glossy
            color="primary"
            :size="screen.gt.xs ? 'xl' : 'lg'"
            class="full-width"
            no-caps
            to="/faq"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'IndexPage',

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
</style>
