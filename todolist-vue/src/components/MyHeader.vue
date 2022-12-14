<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
    </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
    name: "MyHeader",
    methods: {
        add(e) {
            if (e.target.value == "") return;
            // 将用户的输入包装成一个todo对象
            const todoObj = { id: nanoid(), title: e.target.value, done: false };
            this.receive(todoObj);
            e.target.value = "";
        }
    },
    props: ["receive"]
}
</script>

<style scoped>
.todo-header {
    widows: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input {
    width: 600px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
}
</style>