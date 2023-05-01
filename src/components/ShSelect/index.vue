<template lang="pug">
.select
    .label(
        v-if="$slots.default || label"
        :class="labelClasses"
    )
        slot {{ label }}

    sh-input-origin(
        :modelValue="modelValue"
        :class="componentClasses"
        isReadonly
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        @focus="onFocus"
        @blur="onBlur"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")
                v-icon.icon-clear(
                    v-show="isClearable && modelValue"
                    path="img/clearField.svg"
                    @click="clearField"
                )

            v-icon.icon-chevron(
                path="img/chevron.svg"
                :class="iconClasses"
            )

    .message(v-if="message") {{ message }}

    ul.list(v-show="isFocus")
        li.item(
            v-for="option in options"
            :key="option.id"
            @mousedown="updateValue(option.text)"
        ) {{ option.text }}

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import ShInputOrigin from '@/components/ShInput/Origin/index.vue';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        placeholder?: string,
        isDisabled?: boolean,
        label?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        isClearable?: boolean,
        message?: string,
        options: { id: string, value: string, text: string }[],
    }>(),
    {
        modelValue: '',
        placeholder: '',
        isDisabled: false,
        label: '',
        size: 'medium',
        variant: 'default',
        isError: false,
        isClearable: false,
        message: '',
        options: () => [],
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

function updateValue(value: number | string) {
    emit('update:modelValue', value as string);
}

const isFocus = ref<boolean>(false);

function onFocus(): void {
    isFocus.value = true;
    emit('focus');
}

function onBlur(): void {
    isFocus.value = false;
    emit('blur');
}

function clearField() {
    updateValue('');
}

const labelClasses = computed<object>(() => {
    return {
        'label-underline': props.variant === 'underline',
        'label-error': props.isError,
    };
});

const componentClasses = computed<string[] | object>(() => {
    return [
        'size-' + props.size,
        'variant-' + props.variant,
        {
            'error': props.isError,
        },
    ];
});

const iconClasses = computed<object>(() => {
    return {
        'icon-chevron-invert': isFocus.value,
    };
});

</script>

<style lang="sass" scoped>
.select
    position: relative
    &:deep(.input),
    &:deep(.field)
        cursor: pointer

.label
    margin-left: 5px
    font-weight: 500
    font-size: 12px
    color: $color-gray-2
    margin-left: 5px
    margin-bottom: 5px
    &-underline
        margin-left: 0
        margin-bottom: 0
    &-error
        color: $color-red-1

.icon-clear
    width: 20px
    height: 20px
    fill: $color-gray-2
    cursor: pointer

.icon-chevron
    width: 30px
    height: 30px
    fill: $color-gray-2
    &-invert
        transform: rotate(180deg)

.list
    position: absolute
    width: 100%
    min-height: 50px
    max-height: 200px
    background-color: $color-white-1
    border-radius: 4px
    box-shadow: 0 3px 19px $color-gray-3
    overflow-y: auto
    z-index: 1

.item
    @extend %flex_row-center
    cursor: pointer
    padding: 9px 0 9px 15px
    min-height: 35px
    font-size: 14px
    color: $color-dark-1
    &:hover
        background: $color-gray-4

.message
    position: absolute
    margin-top: 5px
    margin-left: 5px
    color: $color-gray-2
    font-size: 12px

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

.variant
    &-outline
        background: transparent
    &-underline
        border: none
        border-radius: 0
        border-bottom: 1px solid $color-gray-3
        background: transparent
        padding: 0
        & + .message
            margin-left: 0

.error
    border-color: $color-red-1
    &:hover,
    &_focused
        border-color: $color-red-1
    & + .message
        color: $color-red-1

</style>