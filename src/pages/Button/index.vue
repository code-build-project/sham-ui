<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Button
            p.text
                | The v-btn component replaces the standard html button with
                | a material design theme and a multitude of options. Any color
                | helper class can be used to alter the background or text color.
                | Try out an interactive screencast on how Vuetify buttons work.

            v-playground.playground(
                :parameters="buttonOrigin"
                :codeTemplate="codeTemplate"
                @changeParameter="setParameter(buttonOrigin, $event)"
            )
                sh-button(
                    :isLoading="buttonOrigin.loading.checked"
                    :isDisabled="buttonOrigin.disabled.checked"
                ) {{ buttonOrigin.text.value || 'My button' }}

        .field
            h3.sub-title Стилизованная кнопка
            p.text Эта кнопка с разными вариациями

            v-playground.playground(
                :parameters="buttonStylized"
                :codeTemplate="codeTemplate"
                @changeParameter="setParameter(buttonStylized, $event)"
            )
                sh-button-stylized(
                    :variant="buttonStylized.variant.value"
                    :type="buttonStylized.type.value"
                    :size="buttonStylized.size.value"
                    :isLoading="buttonStylized.loading.checked"
                    :isDisabled="buttonStylized.disabled.checked"
                ) {{ buttonStylized.text.value || 'My button' }}

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ShButton from '@/components/ShButton/index.vue';
import ShButtonStylized from '@/components/ShButton/Stylized/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeTemplate from '@/components/ShButton/codeTemplate';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const buttonOrigin: TypeParameter = reactive({
    text: { 
        id: 'text',
        elementType: 'input',
        title: 'TEXT BUTTON',
        value: '',
        placeholder: 'My button',
    },
    loading: {
        id: 'load',
        elementType: 'switch',
        title: 'LOADING',
        checked: false,
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        checked: false,
    },
});

const buttonStylized: TypeParameter = reactive({
    text: { 
        id: 'text',
        elementType: 'input',
        title: 'TEXT BUTTON',
        value: '',
        placeholder: 'My button',
    },
    loading: {
        id: 'load1',
        elementType: 'switch',
        title: 'LOADING',
        checked: false,
    },
    disabled: {
        id: 'disable1',
        elementType: 'switch',
        title: 'DISABLED',
        checked: false,
    },
    variant: {
        id: 'variant',
        elementType: 'radio',
        title: 'VARIANT',
        value: 'default',
        variantList: [
            { id: 'default', name: 'Default' },
            { id: 'outline', name: 'Outline' },
            { id: 'text', name: 'Text' },
        ],
    },
    type: {
        id: 'type',
        elementType: 'radio',
        title: 'TYPE',
        value: 'primary',
        variantList: [
            { id: 'default', name: 'Default' },
            { id: 'primary', name: 'Primary' },
            { id: 'light', name: 'Light' },
            { id: 'danger', name: 'Danger' },
            { id: 'success', name: 'Success' },
        ],
    },
    size: { 
        id: 'size',
        elementType: 'radio',
        title: 'SIZE',
        value: 'medium',
        variantList: [
            { id: 'small', name: 'Small' },
            { id: 'medium', name: 'Medium' },
            { id: 'large', name: 'Large' },
        ],
    },
});

type TypeData = {
    key: string,
    value: string | boolean,
}

function setParameter(playground: TypeParameter, data: TypeData): void {
    if (typeof data.value === 'string') {
        playground[data.key].value = data.value as string;
    } else {
        playground[data.key].checked = data.value as boolean;
    }
}

</script>

<style scoped lang="sass">
.page-wrap
    @extend .flex_column-start-center

.page
    width: 768px
    padding: 32px 0

.field:not(:first-child)
    margin-top: 100px

.title
    font-weight: 600
    font-size: 48px
    color: $color-dark-1

.sub-title
    font-weight: 600
    font-size: 38px
    color: $color-dark-1

.text
    color: $color-dark-1
    line-height: 28px
    margin-top: 12px

.playground
    margin-top: 32px

</style>