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
        Contact Us
      </div>
      <div
        class="text-center text-white q-px-md q-mb-md q-mb-md-xl"
        :class="{
          'text-h5': screen.gt.xs,
          'text-h6': screen.xs,
        }"
      >
        {{ t('owner') }}
      </div>

      <div class="row q-col-gutter-lg contact-card q-mx-auto">
        <div class="col-12 col-md-6">
          <q-img
            src="~/assets/logo.svg"
            spinner-color="white"
            class="logo"
            fit="contain"
          />
        </div>
        <div class="col-12 col-md-6 column flex-center">
          <q-btn
            class="text-center text-white"
            :class="{
              'text-h4': screen.gt.xs,
              'text-h5': screen.xs,
            }"
            flat
            dense
            no-caps
            :href="`tel:${t('phone')}`"
          >
            <q-icon name="phone" left />
            {{ t('phone') }}
          </q-btn>
          <q-btn
            class="text-center text-white"
            :class="{
              'text-h4': screen.gt.xs,
              'text-h5': screen.xs,
            }"
            flat
            dense
            no-caps
            :href="`mailto:${t('email')}`"
          >
            <q-icon name="mail" left />
            {{ t('email') }}
          </q-btn>
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
  name: 'ContactPage',

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

.contact-card {
  max-width: 900px;
}
</style>
