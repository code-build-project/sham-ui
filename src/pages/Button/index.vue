<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Button
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="buttonOrigin"
                :codeTemplate="codeButtonOrigin"
                @changeParameter="setParameter(buttonOrigin, $event)"
            )
                sh-button-origin(
                    :isLoading="buttonOrigin.loading.checked"
                    :isDisabled="buttonOrigin.disabled.checked"
                ) {{ buttonOrigin.text.value || 'My button' }}

        .field
            h3.sub-title Стилизованная кнопка
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над
                | <b>sh-button-origin</b>, с добавлением необходимого набора стилей.
                | Вы можете использовать данный компонент в проектах,
                | либо кастомизировать свой компонент кнопки, как в примере ниже.

            v-playground.playground(
                :parameters="buttonStylized"
                :codeTemplate="codeButton"
                @changeParameter="setParameter(buttonStylized, $event)"
            )
                sh-button(
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
import ShButtonOrigin from '@/components/ShButton/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeButton from '@/components/ShButton/codeTemplate';
import codeButtonOrigin from '@/components/ShButton/Origin/codeTemplate';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

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

</script>

<style scoped lang="sass">
.page-wrap
    @extend %flex_column-start-center

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