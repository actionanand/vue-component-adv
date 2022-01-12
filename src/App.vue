<template>
  <div>
    <!-- <TheHeader/> --> <!-- we can use like this also -->
    <the-header></the-header>
    <button @click="selectThisComp('active-goals')">Active Goals</button>
    <button @click="selectThisComp('manage-goals')">Manage Goals</button>
    <!-- dynamic comp -->
    <component :is="selectedComponent"></component>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- <course-goals>
      <template #default="slotProps">
        <h2>
          {{ slotProps.item }}
        </h2>
        <p>{{ slotProps['anotherprop'] }}</p>
      </template>
    </course-goals> -->

    <!-- <template> tag can be skipped if only default slot is present -->
    <course-goals #default="slotProps"> <!-- v-slot:default and #default are same -->
      <h2>
        {{ slotProps.item }}
      </h2>
      <p>{{ slotProps['anotherprop'] }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    // 'the-header': TheHeader,
    // TheHeader: TheHeader,
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Anand Raja',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-goals'
    };
  },
  methods: {
    selectThisComp(cmp) {
      this.selectedComponent = cmp;
    }
  }
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