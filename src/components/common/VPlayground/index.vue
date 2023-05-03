<template lang="pug">
.playground
    .header
        | Playground
        .header-icons
            v-icon(
                class="header-icon-bulb"
                path="img/bulb.svg"
                @click="setTheme"
            )
            v-icon(
                class="header-icon-tag"
                path="img/tag.svg"
                @click="showCode"
            )
            v-icon(
                class="header-icon-full"
                path="img/fullscreen.svg"
            )

    .field(
        ref="refField"
        :class="fieldClasses"
    )
        slot
        .field-resize
            v-icon(
                class="field-resize-icon"
                path="img/resize.svg"
                @mousedown="drag"
            )

    .code(:class="codeClasses")
        .code-template(v-html="codeTemplate")

    .parameters
        template(
            v-for="(item, key, index) in parameters"
            :key="item.id"
        )
            .new-string(v-if="index !== 0 && !item.isInline")

            v-radio-button.parameters-radio(
                v-if="item.elementType === 'radio'"
                :modelValue="item.value"
                :keyField="item.id"
                :radioList="item.variantList"
                @update:modelValue="setParameter(key, $event)"
            ) {{ item.title }}

            v-switch.parameters-switch(
                v-if="item.elementType === 'switch'"
                :modelValue="item.isChecked"
                :keyField="item.id"
                @update:modelValue="setParameter(key, $event)"
            ) {{ item.title }}

            v-input-title.parameters-input(
                v-if="item.elementType === 'input'"
                :modelValue="item.value"
                :placeholder="item.placeholder"
                @update:modelValue="setParameter(key, $event)"
            ) {{ item.title }}

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import VSwitch from '@/components/common/VSwitch/index.vue';
import VInputTitle from '@/components/common/VInput/Title/index.vue';
import VRadioButton from '@/components/common/VRadioButton/index.vue';
import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';

withDefaults(
    defineProps<{
        parameters?: TypeParameter,
        codeTemplate?: string,
    }>(),
    {
        codeTemplate: '',
    },
);

const emit = defineEmits<{
    (e: 'changeParameter', data: TypeData): void,
}>();

function setParameter(key: string | number, value: string | boolean | number): void {
    let dynamicValue: string | boolean = '';

    if (typeof value === 'string') {
        dynamicValue = value;
    } else if (typeof value === 'boolean') {
        dynamicValue = value;
    }

    emit('changeParameter', { key: key as string, value: dynamicValue });
}

// BLOCK "code show"
let isCodeShow = ref<boolean>(false);

const codeClasses = computed<object>(() => {
    return {
        'code_open': isCodeShow.value,
    };
});

function showCode(): void {
    isCodeShow.value = !isCodeShow.value;
}

// BLOCK "field theme change"
let isLight = ref<boolean>(false);

function setTheme(): void {
    isLight.value = !isLight.value;
}

const fieldClasses = computed<object>(() => {
    return {
        'field-dark': isLight.value,
    };
});

// BLOCK "field resize"
const refField = ref<null | HTMLInputElement>(null);

function drag(e: MouseEvent): void {
    let dragX = e.clientX;

    document.onmousemove = function onMouseMove(e: MouseEvent): void {
        if (!refField.value) {
            return;
        }

        const maxWidthField = 768;
        const newWidth = refField.value.offsetWidth + e.clientX - dragX;

        if (newWidth < maxWidthField) {
            refField.value.style.width = newWidth + 'px';
            dragX = e.clientX;
        }
    };

    document.onmouseup = function onMouseLeave(): void {
        document.onmousemove = document.onmouseup = null;
    };
}

</script>

<style scoped lang="sass">
.playground
    width: 100%
    border: 1px solid $color-gray-3
    border-radius: 8px
    overflow: hidden
    background: $color-gray-5

.header
    @extend %flex_row-center-between
    padding: 0 20px
    height: 56px
    color: $color-dark-1
    font-weight: 600
    border-bottom: 1px solid $color-gray-3
    &-icons
        @extend %flex_row-center-center
    &-icon-bulb
        width: 24px
        height: 24px
        fill: $color-gray-2
        cursor: pointer
        margin-top: -4px
    &-icon-tag
        width: 25px
        height: 25px
        fill: $color-gray-2
        cursor: pointer
        margin-left: 15px
    &-icon-full
        width: 24px
        height: 24px
        fill: $color-gray-2
        cursor: pointer
        margin-left: 15px
    &-icon-dark
        fill: $color-dark-2

.field
    @extend %flex_row-center-center
    min-height: 168px
    position: relative
    background: $color-white-1
    overflow: hidden
    padding-right: 16px
    &-resize
        @extend %flex_row-center
        width: 16px
        height: 100%
        background: $color-gray-5
        border-left: 1px solid $color-gray-3
        position: absolute
        right: 0
        cursor: col-resize
        user-select: none
    &-resize-icon
        width: 16px
        height: 16px
        fill: $color-gray-2
    &-dark
        background: $color-dark-1

.code
    max-height: 0
    transition: all 0.5s linear
    overflow: hidden
    padding: 0 15px
    user-select: text
    border-top: 1px solid $color-gray-3
    position: relative
    scrollbar-gutter: stable
    &-template
        margin-top: 15px
    &_open
        max-height: 700px
        border-bottom: 1px solid $color-gray-3
        animation: show-scroll 1s linear forwards

@keyframes show-scroll
    from
        overflow: hidden
    to
        overflow-y: auto

.parameters
    @extend %flex_wrap
    min-height: 176px
    padding: 20px
    &-radio
        margin-right: 35px
    &-switch
        margin-right: 35px
    &-input
        width: 200px
        margin-right: 35px

.new-string
    width: 100%
    height: 32px

</style>