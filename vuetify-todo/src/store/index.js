import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Eat breakfast",
        done: false,
      },
      {
        id: 3,
        title: "Go to work",
        done: false,
      },
      {
        id: 4,
        title: "Go to sleep",
        done: false,
      },
      {
        id: 5,
        title: "Watch TV",
        done: false,
      },
    ],
    snackbar: {
      show: false,
      message: "",
    },
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      let newId = state.tasks.length + 1 + Math.random();
      state.tasks.push({
        id: newId,
        title: newTaskTitle,
        done: false,
      });
    },
    doneTask(state, id) {
      state.tasks.find((task) => task.id === id).done = true;
      console.log(state.tasks);
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, message) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.message = message;
      }, timeout);
    },
  },
  actions: {
    addTaskAction({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task added Successfully!");
    },
    deleteTaskAction({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task deleted Successfully!");
    },
  },
  modules: {},
});
