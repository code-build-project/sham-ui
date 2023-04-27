<template lang="pug">
button.button(
        :class="componentClasses"
        @click="onClick"
    )
    .loader(v-if="isLoading")
        .loader-circle

    .text
        slot Button

</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        isLoading?: boolean,
        isDisabled?: boolean,
    }>(),
    {
        isLoading: false,
        isDisabled: false,
    },
);

const componentClasses = computed<object>(() => {
    return {
        'loading': props.isLoading,
        'disabled': props.isDisabled,
    };
});

const emit = defineEmits<{
    (e: 'click'): void
}>();

function onClick(): void {
    if (props.isLoading || props.isDisabled) {
        return;
    }

    emit('click');
}

</script>

<style scoped lang="sass">
.button
    @extend .flex_row-center-center
    position: relative
    padding: 12px 20px
    background: $color-blue-1
    color: $color-white-1
    border: none
    border-radius: 8px
    font-weight: 600
    font-size: 16px
    overflow: hidden
    &:hover
        filter: brightness(97%)
    &:active
        opacity: 0.9

.loader
    @extend .flex_row-center-center
    position: absolute
    width: 100%
    height: 100%
    &-circle
        width: 18px
        height: 18px
        border: 2.5px solid $color-white-1
        border-bottom-color: transparent
        border-radius: 50%
        box-sizing: border-box
        animation: rotation 0.9s linear infinite
        @keyframes rotation
            0%
                transform: rotate(0deg)
            100%
                transform: rotate(360deg)

.loading
    pointer-events: none
    opacity: 0.9
    .text
        opacity: 0

.disabled
    opacity: 0.8
    cursor: not-allowed
    &.button
        &:hover
            filter: brightness(100%)
        &:active
            opacity: 0.8

</style>