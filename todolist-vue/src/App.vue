<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyList></MyList>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
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
