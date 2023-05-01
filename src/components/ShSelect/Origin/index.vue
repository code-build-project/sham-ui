<template lang="pug">
.select
    sh-input-origin(
        :modelValue="modelValue"
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

            v-icon.icon(
                path="img/chevron.svg"
                :class="iconClasses"
            )

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

withDefaults(
    defineProps<{
        modelValue?: number | string,
        placeholder?: string,
        isDisabled?: boolean,
        options: { id: string, value: string, text: string }[],
    }>(),
    {
        modelValue: '',
        placeholder: '',
        isDisabled: false,
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

const iconClasses = computed<object>(() => {
    return {
        'icon-invert': isFocus.value,
    };
});

</script>

<style lang="sass" scoped>
.select
    position: relative
    &:deep(.input),
    &:deep(.field)
        cursor: pointer

.icon
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

</style>