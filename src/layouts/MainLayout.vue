<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white glossy">
        <q-btn
          v-if="screen.xs"
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
        />

        <q-btn to="/" :aria-label="t('company')" class="watson" flat dense>
          <!-- Note: v-html is not recommended for use, however used to keep text in i18n -->
          <span v-html="t('companyMultiline')" />
        </q-btn>

        <q-space />

        <q-tabs v-if="screen.gt.xs" inline-label shrink stretch>
          <q-route-tab
            v-for="(menuItem, index) in menuList"
            :key="menuItem.label + index"
            :icon="menuItem.icon"
            :label="menuItem.label"
            :to="menuItem.path"
          />
        </q-tabs>

        <q-space v-if="screen.gt.xs" />

        <q-btn v-if="screen.gt.xs" to="/contact" outline>
          <q-icon name="mail" left />
          {{ t('contact') }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" bordered class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <template
            v-for="(menuItem, index) in menuList"
            :key="menuItem.label + index"
          >
            <q-item
              clickable
              :active="menuItem.path === currentPath"
              v-ripple
              :to="menuItem.path"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </template>

          <q-item
            clickable
            :active="'/contact' === currentPath"
            v-ripple
            to="/contact"
          >
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>
            <q-item-section>{{ t('contact') }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer flat class="footer-bg-color q-py-md">
      <div class="text-caption text-center">
        Copyright &copy; {{ new Date().getFullYear() }}, {{ t('company') }}. All
        Rights Reserved.
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const { t } = useI18n();
    const quasar = useQuasar();
    const screen = ref(quasar.screen);
    const drawer = ref(false);
    const route = useRoute();
    const currentPath = ref(route.path);

    const menuList = [
      {
        icon: 'home',
        label: 'Home',
        path: '/',
      },
      {
        icon: 'info',
        label: 'About',
        path: '/about',
      },
      {
        icon: 'collections',
        label: 'Gallery',
        path: '/gallery',
      },
      {
        icon: 'question_mark',
        label: 'FAQ',
        path: '/faq',
      },
    ];

    return {
      t,
      screen,
      drawer,
      currentPath,
      menuList,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}

.q-page-container {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/wood-background.jpeg') no-repeat 0 0;
  background-size: cover;
}

.footer-bg-color {
  background: none;
  color: #fff;
}
</style>
