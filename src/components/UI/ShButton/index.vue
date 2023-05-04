<template lang="pug">
sh-button-origin(
    :isLoading="isLoading"
    :isDisabled="isDisabled"
    :class="componentClasses"
    @click="onClick"
)
    slot

</template>

<script setup lang="ts">
import { computed } from 'vue';
import ShButtonOrigin from '@/components/UI/ShButton/Origin/index.vue';

const props = withDefaults(
    defineProps<{
        isLoading?: boolean,
        isDisabled?: boolean,
        size?: string,
        variant?: string,
        type?: string,
    }>(),
    {
        isLoading: false,
        isDisabled: false,
        size: 'medium',
        variant: 'default',
        type: 'primary',
    },
);

const emit = defineEmits<{
    (e: 'click'): void
}>();

const componentClasses = computed<string[]>(() => {
    return [
        'size-' + props.size,
        'variant-' + props.variant,
        'type-' + props.type,
    ];
});

function onClick(): void {
    emit('click');
}
</script>

<style scoped lang="sass">
.size
    &-small
        height: 32px
        font-size: 14px
    &-medium
        height: 40px
        font-size: 16px
    &-large
        height: 48px
        font-size: 18px

@mixin getType($primary, $secondary)
    &:is(.variant-default)
        background: $primary
        color: $secondary
        &:deep(.loader-circle)
            border-color: $secondary
            border-bottom-color: transparent
    &:is(.variant-outline)
        background: transparent
        border: 1px solid $primary
        color: $primary
        &:deep(.loader-circle)
            border-color: $primary
            border-bottom-color: transparent
    &:is(.variant-text)
        background: transparent
        color: $primary
        &:deep(.loader-circle)
            border-color: $primary
            border-bottom-color: transparent

.type
    &-default
        @include getType($color-dark-1, $color-white-1)
    &-primary
        @include getType($color-blue-1, $color-white-1)
    &-light
        @include getType($color-gray-4, $color-dark-1)
    &-danger
        @include getType($color-red-1, $color-white-1)
    &-success
        @include getType($color-green-1, $color-white-1)

</style>