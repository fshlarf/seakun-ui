<template>
    <div class="form-group">
        <label v-if="label">{{ label }}</label>
        <input
            class="form-control"
            :placeholder="placeholder"
            :type="type"
            v-bind="$attrs"
            v-on="$listeners"
            :value="value"
            @input="$emit('update', $event.target.value)"
        />
        <p class="error-msg" v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        errorMessage: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        value: {
            type: [String, Number],
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
    },
    model: {
        prop: "value",
        event: "update",
    },
};
</script>

<style lang="scss" scoped>
.error-msg {
    color: red;
    font-size: 14px;
    margin-top: 3px;
}
</style>