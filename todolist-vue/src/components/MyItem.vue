<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleClick(todo.id)">
                <span>{{ todo.title }}</span>
            </label>
            <button class="btn btn-danger" @click="deleteT(todo.id)">删除</button>
        </li>
    </div>
</template>

<script>
export default {
    name: "MyItem",
    props: ["todo", "checkTodo", "deleteTodo"], // 声明接收对象
    methods: {
        handleClick(id) {
            // 通知app将对应的todo对象done取反
            this.checkTodo(id);
        },
        deleteT(id) { // 删除
            if (confirm("确定删除吗？")) {
                // 通知app删除
                this.deleteTodo(id);
            }
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-left: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li::before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>