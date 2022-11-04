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
        Frequently Asked Questions
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
      <div
        class="text-white text-bold q-mx-md q-mx-md-xl q-mt-lg"
        :class="{
          'text-h4': screen.gt.xs,
          'text-h5': screen.xs,
        }"
      >
        {{ t('q1') }}
      </div>

      <q-list dense class="text-white q-mx-md q-mx-md-xl q-mt-md">
        <q-item v-for="(answer, index) in q1Answers" :key="`q1-answer${index}`">
          <q-item-section avatar>
            <q-icon color="white" name="radio_button_checked" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1">{{ answer }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div
        class="text-white text-bold q-mx-md q-mx-md-xl q-mt-lg"
        :class="{
          'text-h4': screen.gt.xs,
          'text-h5': screen.xs,
        }"
      >
        {{ t('q2') }}
      </div>

      <q-list dense class="text-white q-mx-md q-mx-md-xl q-mt-md">
        <q-item v-for="(answer, index) in q2Answers" :key="`q2-answer${index}`">
          <q-item-section avatar>
            <q-icon color="white" name="radio_button_checked" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1">{{ answer }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'FAQPage',

  setup() {
    const { t } = useI18n();
    const quasar = useQuasar();
    const screen = ref(quasar.screen);
    const q1Answers = [
      'High-quality work that provides a long-lasting result',
      'Your safety',
      'It saves you money in the long run as you can avoid costly repairs',
    ];
    const q2Answers = [
      'Interior trim',
      'Cabinets',
      'Mantels',
      'Stairs',
      'More!',
    ];

    return {
      t,
      screen,
      q1Answers,
      q2Answers,
    };
  },
});
</script>

<style lang="scss" scoped></style>
