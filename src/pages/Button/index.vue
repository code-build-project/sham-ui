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
                :parameters="buttonOriginParameters"
                :codeTemplate="codeButtonOrigin"
                :parameterValues="buttonOriginValues"
                @change="setValue(buttonOriginValues, $event)"
            )
                sh-button-origin(
                    :isLoading="buttonOriginValues.loading"
                    :isDisabled="buttonOriginValues.disabled"
                ) {{ buttonOriginValues.text || 'My button' }}

        .field
            h3.sub-title Стилизованная кнопка
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над
                | <b>sh-button-origin</b>, с добавлением необходимого набора стилей.
                | Вы можете использовать данный компонент в проектах,
                | либо кастомизировать свой компонент кнопки, как в примере ниже.

            v-playground.playground(
                :parameters="buttonParameters"
                :codeTemplate="codeButton"
                :parameterValues="buttonValues"
                @change="setValue(buttonValues, $event)"
            )
                sh-button(
                    :variant="buttonValues.variant"
                    :type="buttonValues.type"
                    :size="buttonValues.size"
                    :isLoading="buttonValues.loading"
                    :isDisabled="buttonValues.disabled"
                ) {{ buttonValues.text || 'My button' }}

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ShButton from '@/components/UI/ShButton/index.vue';
import ShButtonOrigin from '@/components/UI/ShButton/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeButton from '@/components/UI/ShButton/code';
import codeButtonOrigin from '@/components/UI/ShButton/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import parametersJSON from '@/pages/Button/parameters.json';
import parametersOriginJSON from '@/pages/Button/parametersOrigin.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

// BLOCK "button origin"
const buttonOriginParameters: TypeParameter = parametersOriginJSON;

type TypeValuesOrigin = {
    text: string,
    loading: boolean,
    disabled: boolean,
}

const buttonOriginValues: TypeValuesOrigin = reactive({
    text: '',
    loading: false,
    disabled: false,
});

// BLOCK "button"
const buttonParameters: TypeParameter = parametersJSON;

type TypeValues = {
    text: string,
    loading: boolean,
    disabled: boolean,
    variant: string,
    type: string,
    size: string,
}

const buttonValues: TypeValues = reactive({
    text: '',
    loading: false,
    disabled: false,
    variant: 'default',
    type: 'primary',
    size: 'medium',
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