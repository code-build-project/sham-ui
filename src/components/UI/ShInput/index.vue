<template lang="pug">
.input-wrap
    .label(v-if="isLabel")
        slot {{ label }}

    sh-input-origin(
        :modelValue="modelValue"
        :class="componentClasses"
        :type="isPassword ? 'password' : type"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        :isReadonly="isReadonly"
        :maxlength="maxlength"
        @input="onInput"
        @focus="emit('focus')"
        @blur="emit('blur')"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")

            v-icon.icon(
                v-show="isIconClear"
                path="img/clearField.svg"
                @click="clearField"
            )


    .message(v-if="message") {{ message }}

</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import ShInputOrigin from '@/components/UI/ShInput/Origin/index.vue';
import formatters from '@/helpers/formatters';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        type?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        maxlength?: string,
        autocomplete?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        message?: string,
        isClearable?: boolean,
        label?: string,
        isPassword?: boolean,
        format?: string,
    }>(),
    {
        modelValue: '',
        type: 'text',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        maxlength: '',
        autocomplete: 'on',
        size: 'medium',
        variant: 'default',
        isError: false,
        message: '',
        isClearable: false,
        label: '',
        isPassword: false,
        format: '',
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
  (e: 'input', event: Event): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const componentClasses = computed<string[] | object>(() => {
    return [
        'size-' + props.size,
        'variant-' + props.variant,
        {
            'error': props.isError,
        },
    ];
});

// BLOCK "label"
const slots = useSlots();

const isLabel = computed<boolean>(() => {
    return !!(slots.default || props.label);
});

// BLOCK "input"
function onInput(event: Event) {
    if (props.format) {
        (event.target as HTMLInputElement).value = formatters[props.format]((event.target as HTMLInputElement).value);
    }

    emit('update:modelValue', (event.target as HTMLInputElement).value);
    emit('input', event);
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!(props.isClearable && props.modelValue);
});

function clearField() {
    emit('update:modelValue', '');
}

</script>

<style lang="sass" scoped>
.input-wrap
    position: relative

.label
    font-weight: 500
    font-size: 12px
    color: $color-gray-2
    margin-left: 5px
    margin-bottom: 5px

.message
    position: absolute
    margin-top: 5px
    margin-left: 5px
    color: $color-gray-2
    font-size: 12px

.icon
    width: 20px
    height: 20px
    fill: $color-gray-2
    cursor: pointer

.size
    &-small
        height: 32px
        padding: 0 10px
        &:deep(.field)
            font-size: 12px
            &::placeholder
                font-size: 12px
    &-medium
        height: 40px
        padding: 0 12px
        &:deep(.field)
            font-size: 14px
            &::placeholder
                font-size: 14px
    &-large
        height: 48px
        padding: 0 14px
        &:deep(.field)
            font-size: 16px
            &::placeholder
                font-size: 16px

.input-wrap
    &:has(.size-small)
        .label,
        .message
            font-size: 10px
    &:has(.size-large)
        .label,
        .message
            font-size: 14px

.variant
    &-outline
        background: transparent
    &-underline
        border: none
        border-radius: 0
        border-bottom: 1px solid $color-gray-3
        background: transparent
        padding: 0

.input-wrap:has(.variant-underline)
    .label
        margin-left: 0
        margin-bottom: 0
    .message
        margin-left: 0

.error
    border-color: $color-red-1
    &:hover,
    &_focused
        border-color: $color-red-1

.input-wrap:has(.error)
    .label,
    .message
        color: $color-red-1

</style>