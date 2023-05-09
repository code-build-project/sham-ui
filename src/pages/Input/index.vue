<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Input
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="inputOriginParameters"
                :codeTemplate="codeInputOrigin"
                :parameterValues="inputOriginValues"
                @change="setValue(inputOriginValues, $event)"
            )
                sh-input-origin(
                    v-model="inputOriginValues.modelValue"
                    :placeholder="inputOriginValues.placeholder || 'My Input'"
                    :isReadonly="inputOriginValues.readonly"
                    :isDisabled="inputOriginValues.disabled"
                )

            v-api-table.api-table(
                :propList="apiOrigin.propList"
                :eventList="apiOrigin.eventList"
                :slotList="apiOrigin.slotList"
            )

        .field
            h3.sub-title Стилизованное поле ввода
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="inputParameters"
                :codeTemplate="codeInput"
                :parameterValues="inputValues"
                @change="setValue(inputValues, $event)"
            )
                sh-input.sh-input(
                    v-model="inputValues.modelValue"
                    :placeholder="inputValues.placeholder || 'My Input'"
                    :isReadonly="inputValues.readonly"
                    :isDisabled="inputValues.disabled"
                    :size="inputValues.size"
                    :variant="inputValues.variant"
                    :isError="inputValues.error"
                    :message="inputValues.message"
                    :isClearable="inputValues.clear"
                    :isPassword="inputValues.password"
                    :format="inputValues.format"
                ) {{ inputValues.label }}

            v-api-table.api-table(
                :propList="api.propList"
                :eventList="api.eventList"
                :slotList="api.slotList"
            )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import ShInput from '@/components/UI/ShInput/index.vue';
import ShInputOrigin from '@/components/UI/ShInput/Origin/index.vue';
import codeInput from '@/components/UI/ShInput/code';
import codeInputOrigin from '@/components/UI/ShInput/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Input/api.json';
import apiOriginJSON from '@/pages/Input/apiOrigin.json';
import parametersJSON from '@/pages/Input/parameters.json';
import parametersOriginJSON from '@/pages/Input/parametersOrigin.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

// BLOCK "input origin"
const apiOrigin: TypeApiTable = apiOriginJSON;
const inputOriginParameters: TypeParameter = parametersOriginJSON;

type TypeValuesOrigin = {
    modelValue: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
}

const inputOriginValues: TypeValuesOrigin = reactive({
    modelValue: '',
    placeholder: '',
    readonly: false,
    disabled: false,
});

// BLOCK "input"
const api: TypeApiTable = apiJSON;
const inputParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    clear: boolean,
    label: string,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    password: boolean,
    format: string,
}

const inputValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    readonly: false,
    disabled: false,
    clear: false,
    label: '',
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    password: false,
    format: '',
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

.sh-input
    width: 200px

.api-table
    margin-top: 32px

</style>