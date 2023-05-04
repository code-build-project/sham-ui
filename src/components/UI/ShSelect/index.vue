<template lang="pug">
.select
    .label(
        v-if="isLabel"
        :class="labelClasses"
    )
        slot {{ label }}

    sh-input-origin(
        :modelValue="valueInput"
        :class="componentClasses"
        isReadonly
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        @click="clickInput"
        @focus="emit('focus')"
        @blur="onBlur"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")
                div(
                    v-show="isIconClear"
                    @click.stop="clearField"
                )
                    v-icon.icon-clear(path="img/clearField.svg")

            v-icon.icon-chevron(
                path="img/chevron.svg"
                :class="iconClasses"
            )

    .message(v-if="message") {{ message }}

    ul.list(
        v-show="isOpenList"
        @focus="handleFocus"
        @focusout="handleFocusOut"
        tabindex="-1"
    )
        li.item(
            v-for="option in options"
            :key="option.id"
            @click.prevent="updateValue(option.id)"
        )
            v-check-box(
                v-if="isMultiple"
                :modelValue="modelValue.includes(option.id)"
                :keyField="option.id"
            ) {{ option.value }}

            div(v-else) {{ option.value }}

</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import VCheckBox from '@/components/common/VCheckBox/index.vue';
import ShInputOrigin from '@/components/UI/ShInput/Origin/index.vue';

type Option = {
    id: string,
    value: string,
}

const props = withDefaults(
    defineProps<{
        modelValue?: string | string[],
        placeholder?: string,
        isDisabled?: boolean,
        label?: string,
        size?: string,
        variant?: string,
        isError?: boolean,
        isClearable?: boolean,
        message?: string,
        isMultiple?: boolean,
        options: Option[],
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
        isMultiple: false,
        options: () => [],
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', id: string | string[]): void
  (e: 'focus'): void
  (e: 'blur'): void
}>();

const componentClasses = computed<string[] | object>(() => {
    return [
        'size-' + props.size,
        'variant-' + props.variant,
        {
            'error': props.isError,
            'focus': isOpenList.value,
        },
    ];
});

const iconClasses = computed<object>(() => {
    return {
        'icon-chevron-invert': isOpenList.value,
    };
});

// BLOCK "label"
const slots = useSlots();

const isLabel = computed<boolean>(() => {
    return !!(slots.default || props.label);
});

const labelClasses = computed<object>(() => {
    return {
        'label-underline': props.variant === 'underline',
        'label-error': props.isError,
    };
});

// BLOCK "focus and blur"
let isOpenList = ref<boolean>(false);
let isFocusList = ref<boolean>(false);

function clickInput(): void {
    isOpenList.value = !isOpenList.value;
}

function onBlur(): void {
    setTimeout( () => {
        if (props.isMultiple && isFocusList.value) {
            return;
        }

        isOpenList.value = false;
        emit('blur');
    }, 100);
}

function handleFocus() {
    if (!props.isMultiple) {
        return;
    }
    isFocusList.value = true;
}

function handleFocusOut() {
    if (!props.isMultiple) {
        return;
    }
    isFocusList.value = false;
    onBlur();
}

// BLOCK "show and update value"
const valueInput = computed<string>(() => {
    if (props.isMultiple && Array.isArray(props.modelValue)) {
        let values: string[] = [];
    
        props.modelValue.forEach(value => {
            const newItem = props.options.find((item) => value === item.id);
            if (newItem) {
                values.push(newItem.value);
            }
        });

        return values.join(', ');
    }

    const item = props.options.find((item) => props.modelValue === item.id);
    return item?.value || '';
});

function updateValue(id: string): void {
    if (props.isMultiple) {
        let array: string[] = props.modelValue.slice() as string[];

        if (array.includes(id)) {
            array.splice(array.indexOf(id), 1);
        } else {
            array.push(id);
        }

        emit('update:modelValue', array.slice());
    } else {
        emit('update:modelValue', id);
    }
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return !!(props.isClearable && props.modelValue.length);
});

function clearField() {
    if (props.isMultiple) {
        emit('update:modelValue', []);
    } else {
        emit('update:modelValue', '');
    }
}

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
    min-width: 25px
    max-width: 25px
    height: 25px
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

.focus
    border-color: $color-gray-2

.size
    &-small
        height: 32px
        padding: 0 10px
        &:deep(.field)
            font-size: 12px
            &::placeholder
                font-size: 12px
        & + .message
            font-size: 10px
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
        & + .message
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