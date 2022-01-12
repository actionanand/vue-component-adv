<template>
  <h2> Manage Goals </h2>
  <div>
    <input type="text" ref="goal">
    <button @click="setGoal">set goal</button>
  </div>
  <error-alert v-if="isValueInvalid">
    <h2>Input is invalid!</h2>
    <p>Please enter atleast some characters...</p>
    <button @click="confirmError">Okay</button>
  </error-alert>
</template>

<script>
import ErrorAlert from './ErrorAler.vue';

export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isValueInvalid: false
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      if(enteredGoal.trim() === '') {
        this.isValueInvalid = true;
      }
    },
    confirmError() {
      this.isValueInvalid = false;
    }
  }
}
</script>