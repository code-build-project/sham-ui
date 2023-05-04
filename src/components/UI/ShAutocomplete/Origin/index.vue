<template lang="pug">
.autocomplete
    sh-input-origin(
        :modelValue="modelValue"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        @update:modelValue="updateValue"
        @focus="onFocus"
        @blur="onBlur"
    )
        template(v-slot:left)
            slot(name="left")

        template(v-slot:right)
            slot(name="right")

    ul.list(v-show="isShowList")
        li.item(
            v-for="(option, index) in filteredOptions"
            :key="option + index"
            @click="updateValue(option)"
        ) {{ option }}

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ShInputOrigin from '@/components/UI/ShInput/Origin/index.vue';

const props = withDefaults(
    defineProps<{
        modelValue?: number | string,
        placeholder?: string,
        isDisabled?: boolean,
        options?: string[],
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

const filteredOptions = computed<string[]>(() => {
    return props.options.filter((option) => {
        return option.startsWith(props.modelValue as string);
    });
});

const isShowList = computed<boolean>(() => {
    return !!(isFocus.value && filteredOptions.value.length);
});

// BLOCK "focus and blur"
const isFocus = ref<boolean>(false);

function onFocus(): void {
    isFocus.value = true;
    emit('focus');
}

function onBlur(): void {
    setTimeout( () => {
        isFocus.value = false;
        emit('blur');
    }, 100);
}

</script>

<style lang="sass" scoped>
.autocomplete
    position: relative

.list
    position: absolute
    width: 100%
    min-height: 40px
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