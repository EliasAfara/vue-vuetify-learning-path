<template>
  <div class="no-tasks">
    <v-icon size="100" color="primary  "> mdi-check </v-icon>
    <div class="text-h5 primary--text">No tasks</div>
  </div>
</template>

<script>
export default {
  name: "NoTasks",
};
</script>

<style lang="sass">
.no-tasks
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>