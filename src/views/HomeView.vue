<template>
  <div class="Container">
    <h1 class="Header">TODO-Liste</h1>
    <div class="Add-Task">
      <input @keyup.enter="Store.AddTask" v-model="Store.Task" type="text" placeholder="Neue Aufgabe hinzuzufügen" class="TextBox"/>
      <button @click="Store.AddTask" type="submit" class="Submit"></button>
    </div>

    <ul class="Task-List">
      <li class="Task-List-Item" v-for="(Task,index) in Store.Tasks" :key="index">
        <label class="Task-List-Item-Label">
          <input type="checkbox">
          <span>{{Task.Name}}</span>
        </label>
        <span @click="Store.DeleteTask(index)" class="Delete-Button" title="Löschen"></span>
        <span @click="Store.EditTask(index)" class="Edit-Button" title="Bearbeiten"></span>
      </li>
    </ul>

  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
  
  const Store = useCounterStore()
    


</script>

<style>

*{
  box-sizing: border-box;
}
:root{
  --checkbox-color: rgb(202, 60, 60);
  --checkbox-shadow: rgb(238, 156, 167, 0.2);
  --add-buttob: rgb(255, 255, 255);
  --add-buttob-shadow:rgba(40, 40, 40, 0.5);
}

body{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: 
  linear-gradient(150deg, #6E698C 4%, #F2ACAC 50%),
  linear-gradient(90deg, #212940 50%, #BF6D65 18%),
  linear-gradient(118deg, #313B59 60%, #313B59 54%),
  linear-gradient(58deg, #BF6D65 15%, #212940 23%),
  linear-gradient(58deg, #F2ACAC 15%, #6E698C 23%);
  background-blend-mode: normal, lighten, multiply, hard-light;
  font-family: sans-serif;
  overflow: hidden;
}
::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track{
  border-radius: 5px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background-color: #313B59;
}

input{
  outline: none;
}

ul{
  list-style: none;
  padding: 0;
}
.Container{
  max-width: 600px;
  width: 450px;
  max-height: 100%;
  background-color: rgba(255, 255, 255, 0.329);
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
  color: #222;
}

.Header{
  font-size: 25px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: rgb(40, 40, 40);
}

.Submit{
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: none;
  background: var(--add-buttob);
  color: black;
  background-image: url(circle.png);
  background-size: 18px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 12px 0 var(--add-buttob-shadow);
}

.Add-Task{
  height: 40px;
  font-size: 14px;
  display: flex;
}

.TextBox{
  width: 100%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(40, 40, 40);
  background-color: transparent;
  margin-right: 15px;
  color: rgb(40, 40, 40);
  box-shadow: none;
  border-radius: 0;
}

.TextBox::placeholder{
  color: rgb(40, 40, 40);

}

.Task-List{
  max-height: 400px;
  height: auto;
  overflow: hidden;
  overflow-y: scroll;
}

.Task-List-Item{
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
}

.Task-List-Item input{
  width: 16px;
  height: 16px;
  border: 1px solid rgb(40, 40, 40);
  border-radius: 50%;
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  appearance: none;
}

.Task-List-Item input:hover{
  border-color: var(--checkbox-color);
  box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.Task-List-Item input:checked{
  background-size: 10px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--checkbox-color);
}

.Task-List-Item input:checked+span{
  color: rgb(40, 40, 40);
  text-decoration: line-through rgb(40, 40, 40);
}

.Task-List-Item-Label{
  display: flex;
  align-items: flex-start;
  color: rgb(40, 40, 40);
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.Delete-Button{
  margin-left: auto;
  margin-right: 5px;
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(trash.png);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}

.Edit-Button{
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(Edit.png);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}
</style>