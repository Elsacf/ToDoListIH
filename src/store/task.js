import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      this.tasks = tasks;
    },
    async addTask(title, userId) {
      const { data: [task], error } = await supabase
        .from('tasks')
        .insert([
          { title, user_id: userId },
        ]);
      if (error) throw error;
      console.log(task);
      if (task) this.tasks.push(task);
    },
    async deleteTaskItem(taskId) {
      const { data: task, error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: taskId });

      if (error) throw error;
      if (task) {
        const taskIndex = this.tasks.findIndex((elem) => elem.id === taskId);
        this.tasks.splice(taskIndex, 1);
      }
    },
    async checkTaskItem(taskId, isComplete) {
      const { data: task, error } = await supabase
        .from('tasks')
        .update({ is_complete: isComplete })
        .match({ id: taskId });

      if (error) throw error;
      if (task) {
        const taskIndex = this.tasks.findIndex((elem) => elem.id === taskId);
        this.tasks[taskIndex].is_complete = task[0].is_complete;
      }
    },
    async editTaskItem(taskId, title) {
      const { data: task, error } = await supabase
        .from('tasks')
        .update({ title })
        .match({ id: taskId });

      if (error) throw error;
      if (task) {
        const taskIndex = this.tasks.findIndex((elem) => elem.id === taskId);
        this.tasks[taskIndex].title = task[0].title;
      }
    },
  },
});
