<template lang="pug">
sh-checkbox-origin(
    :modelValue="modelValue"
    :keyField="keyField"
    :isDisabled="isDisabled"
    :class="componentClasses"
    @update:modelValue="updateValue"
)
    slot Название флажка

</template>

<script setup lang="ts">
import { computed } from 'vue';
import ShCheckboxOrigin from '@/components/UI/ShCheckbox/Origin/index.vue';

const props = withDefaults(
    defineProps<{
        modelValue?: boolean,
        keyField: string,
        isDisabled?: boolean,
        size?: string,
        type?: string,
    }>(),
    {
        modelValue: false,
        keyField: 'key-id',
        isDisabled: false,
        size: 'medium',
    },
);

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();

function updateValue(value: boolean): void {
    emit('update:modelValue', value);
}

const componentClasses = computed<string[]>(() => {
    return [
        'size-' + props.size,
    ];
});

</script>

<style lang="sass" scoped>
.size
    &-small
        &:deep(.label)
            &:before
                width: 12px
                height: 12px
        &:deep(.name)
            font-size: 12px
            margin-left: 6px
    &-large
        &:deep(.label)
            &:before
                width: 17px
                height: 17px
        &:deep(.name)
            font-size: 16px
            margin-left: 10px

</style>