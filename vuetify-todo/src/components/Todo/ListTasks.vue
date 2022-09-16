<template>
  <v-list class="pt-0" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
export default {
  name: "ListTasks",
  components: {
    task: require("./Task.vue").default,
  },
};
</script>

<style>
</style>