 <template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Task </v-card-title>
      <v-card-text
        >Edit the title of this task:
        <v-text-field
          v-model="taskTitle"
          @keyup.enter="saveUpdatedTask"
          label="Title"
          single-line
          hide-details
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>

        <v-btn
          color="primary darken-1"
          text
          @click="saveUpdatedTask"
          :disabled="taskTitleInvalidCheck"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: ["task"],
  data: () => {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalidCheck() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveUpdatedTask() {
      if (!this.taskTitleInvalidCheck) {
        this.$emit("close");
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("updateTaskTitleAction", payload);
      }
    },
  },
  mounted: function () {
    this.taskTitle = this.task.title;
  },
};
</script>
