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
        :readonly="isReadonly"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
    )

    slot(name="right")

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        type?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
    }>(),
    {
        modelValue: '',
        type: 'text',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const isFocus = ref<boolean>(false);
const refInput = ref<null | HTMLInputElement>(null);

const inputClasses = computed<object>(() => {
    return {
        'input_focused': isFocus.value,
        'disabled': props.isDisabled,
    };
});

function clickInput(): void {
    refInput.value?.focus();
}

function onFocus(): void {
    isFocus.value = true;
    emit('focus');
}

function onBlur(): void {
    isFocus.value = false;
    emit('blur');
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

.disabled
    pointer-events: none
    opacity: 0.8

</style>