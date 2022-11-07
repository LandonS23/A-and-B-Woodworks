<template>
  <q-page class="row">
    <div
      class="col-12"
      :class="{
        'q-pt-lg': screen.gt.xs,
      }"
    >
      <div
        class="text-center text-white q-px-md q-my-lg watson"
        :class="{
          'text-h2': screen.gt.xs,
          'text-h4': screen.xs,
        }"
      >
        Gallery
      </div>

      <div
        class="pa-carousel-widget"
        style="width: 100%; height: 600px; display: none"
        data-link="https://photos.app.goo.gl/5HNAYVSVPNx7ind59"
        data-title="A &amp; B Woodworks"
        data-description="Album of A &amp; B Woodworks work"
      >
        <object
          data="https://lh3.googleusercontent.com/jYabzUw-pNqUFhiOzwoLhee5E5NSoNa4by1Y2Y1mN-_iXiOge5Oax6I6AFKBrmjl9z0DuYo67QcRzRu-2bnqOuDjSpvESJ1kN44a-X8WRBvjLWnqHg6ZvcsysJo5MEIuCzxo0Vpjwt8=w1920-h1080"
        ></object>
        <object
          data="https://lh3.googleusercontent.com/nEdNElul2IDxA02rMa0Ljjwjes8xE91cMxDncCysGUso8ut81QKl6leHxJLd6kYtloPeA2zs4jS254svH2BOQzJEjAc1WLDD0oUWKEhCCMMkSPjbYYjDzQyjNWQzprXkdinW1_qRCO0=w1920-h1080"
        ></object>
        <object
          data="https://lh3.googleusercontent.com/qAODWhaNVDLgib3A-A9N7lCW1fukEpmIkvdgQyTYEyRrgli2tv4NC_VUefbPLYDNqlPH3BdMbzfmF6H0abAcozJKL7_ROcuqFBD3_TRkZd6g2AADzUJvLSksLFxcI3ZPzvsu2rQ9g34=w1920-h1080"
        ></object>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useMeta, useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'GalleryPage',

  setup() {
    const { t } = useI18n();
    const quasar = useQuasar();
    const screen = ref(quasar.screen);

    useMeta({
      script: {
        gallery: {
          src: 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js',
        },
      },
    });

    return {
      t,
      screen,
    };
  },
});
</script>

<style lang="scss" scoped></style>
