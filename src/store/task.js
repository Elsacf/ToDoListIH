import { defineStore } from 'pinia';
import supabase from '../supabase';
import userStore from './user';

export default defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        title: '',
        is_complete: '',

      },
    ],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    async addTask(title) {
      const { data: tasks } = await supabase
        .from('tasks')
        .insert([
          {
            user_id: userStore().user.id,
            title,
            is_complete: false,
          },
        ]);
      this.tasks = tasks;
    },
    async checkTaskItem(check, id) {
      const { data: tasks } = await supabase
        .from('tasks')
        .update({ is_complete: check })
        .match({ id });

      this.tasks = tasks;
    },
    async deleteTaskItem(id) {
      const { data: tasks } = await supabase
        .from('tasks')
        .delete()
        .match({ id });

      this.tasks = tasks;
    },
    async editTaskItem(title, id) {
      const { data: tasks } = await supabase
        .from('tasks')
        .update(title)
        .match({ id });

      this.tasks = tasks;
    },
  },
});
