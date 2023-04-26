<template lang="pug">
.input(
    :class="inputClasses"
    @click="clickInput"
)
    slot(name="left")
    
    input.field(
        ref="refInput"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
    )

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

withDefaults(
    defineProps<{
        modelValue?: number | string,
        type?: string,
        placeholder?: string,
    }>(),
    {
        modelValue: '',
        type: 'text',
        placeholder: '',
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
}>();

const isFocus = ref<boolean>(false);
const refInput = ref<null | HTMLInputElement>(null);

const inputClasses = computed<object>(() => {
    return {
        'input_focused': isFocus.value,
    };
});

function clickInput(): void {
    refInput.value?.focus();
}

function onFocus(): void {
    isFocus.value = true;
}

function onBlur(): void {
    isFocus.value = false;
}

function onInput(event: Event): void {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>

<style lang="sass" scoped>
.input
    @extend .flex_row-center
    border: 1px solid $color-gray-3
    border-radius: 8px
    padding: 0 12px
    height: 40px
    cursor: text
    background: $color-white-1
    &:hover,
    &_focused
        border-color: $color-gray-2
        border-color: $color-gray-2

.field
    width: 100%
    font-weight: 500
    font-size: 14px
    color: $color-dark-1
    outline: none
    border: none
    background: transparent
    caret-color: $color-blue-1
    &::placeholder
        font-size: 14px
        color: $color-gray-2

</style>