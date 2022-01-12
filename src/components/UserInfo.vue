<template>
  <section>
    <base-card>
      <template v-slot:header> <!-- v-slot:header and #header are same -->
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default> <!-- v-slot:default and #default are same -->
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>
