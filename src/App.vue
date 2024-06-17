<template>
  <v-app>
    <NavigationBar />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar />
  </v-app>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import BottomBar from '@/components/BottomBar.vue';
export default { components: { NavigationBar, BottomBar } }
</script>
