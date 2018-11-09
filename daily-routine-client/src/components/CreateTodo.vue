<template>
  <div>
   <h3>Create New Todo</h3>
   <div id="div_create_todo_form">
     <input type="text" name="title" v-model="title" placeholder="Title" />
     <br/>
     <input type="text" name="description" v-model="description" placeholder="Enter description here." />
     <br/>
     <input type="text" name="time" v-model="time" placeholder="Time" />
     <br/>
     <button @click="create_todo" >Add todo</button>
   </div>
  </div>
</template>

<script>
import CreateTodoService from '@/services/CreateTodo'

export default {
  name: 'CreateTodo',
  data () {
    return {
      title: '',
      description: '',
      time: ''
    }
  },
  methods: {
    async create_todo () {
      console.log('button clicked')
      const response = await CreateTodoService.create({
        title: this.title,
        description: this.description,
        time: this.time
      })
      console.log('response from server', response)
    }
  }
}
</script>

<style>

</style>
