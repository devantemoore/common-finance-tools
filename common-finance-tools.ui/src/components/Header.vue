<script lang="ts">
    import {ref, computed} from 'vue'
    import { useRoute } from 'vue-router';
    import constants from '@/data/constants'
</script>
<script setup lang="ts">
    const route = useRoute();
    const drawer = ref(false);
    const view = computed(() => route.name)
    const items = ref([...constants.menu_links])
</script>
<template>
    <v-app-bar color="secondary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ view }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
</template>