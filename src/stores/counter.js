import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    Task:'',
    EditedTask: null,
    Tasks:[
  
    ]     
  }),
  getters: {
    
  },
  actions: {
    AddTask(){
      if(this.Task.length === 0) return;

      if(this.EditedTask===null){
        this.Tasks.push({
        Name: this.Task,
        State:0
      })
      }
      else{
        this.Tasks[this.EditedTask].Name=this.Task;
        this.EditedTask=null;
      }
      this.Task='';
    },
    DeleteTask(index){
      this.Tasks.splice(index,1);
    },
    EditTask(index){
      this.Task=this.Tasks[index].Name;
      this.EditedTask=index;
    }
  }
})
