<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader/> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    // 'the-header': TheHeader,
    // TheHeader: TheHeader,
    TheHeader
  },
  data() {
    return {
      activeUser: {
        name: 'Anand Raja',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>