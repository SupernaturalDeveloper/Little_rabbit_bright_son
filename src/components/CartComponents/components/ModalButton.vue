<template>
    <el-button
        v-if="text"
        :style="'color:' + color"
        text
        @click="centerDialogVisible = true"
        >{{ title }}</el-button
    >
    <el-button v-else text>{{ title }}</el-button>
    <el-dialog v-model="centerDialogVisible" :title="title" width="30%" center>
        <span>{{ text }}</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="confirm">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>
  <script lang="ts" setup>
    import { ref, defineProps, defineEmits } from "vue";
    defineProps({
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        color: {
            type: String,
            default: "#333",
        },
    });
    const emits = defineEmits(["confirm"]);
    let centerDialogVisible = ref(false);
    const confirm = () => {
        emits("confirm", true);
        centerDialogVisible.value = false;
    };
</script>
  <style scoped>
    .dialog-footer button:first-child {
        margin-right: 10px;
    }
</style>