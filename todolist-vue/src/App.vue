<template>
  <div id="app">
    <MyHeader :receive="receive"></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAll="clearAll"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: true },
        { id: "002", title: "睡觉", done: false },
        { id: "003", title: "喝水", done: true },
      ]
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  methods: {
    receive(todoObj) {
      this.todos.unshift(todoObj);
    },
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done;
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id;
      })
    },
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done;
      })
    },
    clearAll() {
      this.todos = this.todos.filter(todo => {
        return !todo.done;
      })
    }
  }
}
</script>

<style>
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #da4f49;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  widows: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
