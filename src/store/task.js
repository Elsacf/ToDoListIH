import { defineStore } from 'pinia';
import supabase from '../supabase';
import userStore from './user';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },
    async addTask(newTask) {
      const { tasks, error } = await supabase
        .from('tasks')
        .insert([
          {
            user_id: userStore().user.id,
            title: newTask,
            is_complete: false,
            inserted_at: new Date(),
          },
        ]);
      if (error) throw error;
      if (tasks) this.tasks = this.tasks.push();
    },
    // async checkTaskItem(check, id) {
    //   const { data: tasks } = await supabase
    //     .from('tasks')
    //     .update({ is_complete: check })
    //     .match({ id });

    //   this.tasks.title = tasks;
    // },
    // async deleteTaskItem(id) {
    //   const { data: tasks } = await supabase
    //     .from('tasks')
    //     .delete()
    //     .match({ id });

    //   this.tasks = tasks;
    // },
    // async editTaskItem(title, id) {
    //   const { data: tasks } = await supabase
    //     .from('tasks')
    //     .update(title)
    //     .match({ id });

    //   this.tasks = tasks;
    // },
  },
});