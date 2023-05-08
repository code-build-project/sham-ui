<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Checkbox
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="checkboxOriginParameters"
                :codeTemplate="codeCheckboxOrigin"
                :parameterValues="checkboxOriginValues"
                @change="setValue(checkboxOriginValues, $event)"
            )
                sh-checkbox-origin(
                    v-model="checkboxOriginValues.modelValue"
                    keyField="checkbox-origin"
                    :isDisabled="checkboxOriginValues.disabled"
                ) {{ checkboxOriginValues.text || 'My checkbox' }}

            v-api-table.api-table(
                :propList="apiOrigin.props"
                :eventList="apiOrigin.events"
                :slotList="apiOrigin.slots"
            )

        .field
            h3.sub-title Стилизованный checkbox
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="checkboxParameters"
                :codeTemplate="codeCheckbox"
                :parameterValues="checkboxValues"
                @change="setValue(checkboxValues, $event)"
            )
                sh-checkbox(
                    v-model="checkboxValues.modelValue"
                    keyField="checkbox"
                    :isDisabled="checkboxValues.disabled"
                    :size="checkboxValues.size"
                ) {{ checkboxValues.text || 'My checkbox' }}
            
            v-api-table.api-table(
                :propList="api.props"
                :eventList="api.events"
                :slotList="api.slots"
            )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import ShCheckbox from '@/components/UI/ShCheckbox/index.vue';
import ShCheckboxOrigin from '@/components/UI/ShCheckbox/Origin/index.vue';
import codeCheckbox from '@/components/UI/ShCheckbox/code';
import codeCheckboxOrigin from '@/components/UI/ShCheckbox/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Checkbox/api.json';
import apiOriginJSON from '@/pages/Checkbox/apiOrigin.json';
import parametersJSON from '@/pages/Checkbox/parameters.json';
import parametersOriginJSON from '@/pages/Checkbox/parametersOrigin.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

// BLOCK "checkbox origin"
const apiOrigin: TypeApiTable = apiOriginJSON;
const checkboxOriginParameters: TypeParameter = parametersOriginJSON;

type TypeValuesOrigin = {
    modelValue: boolean,
    text: string,
    disabled: boolean,
}

const checkboxOriginValues: TypeValuesOrigin = reactive({
    modelValue: false,
    text: '',
    disabled: false,
});

// BLOCK "checkbox"
const api: TypeApiTable = apiJSON;
const checkboxParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: boolean,
    text: string,
    disabled: boolean,
    size: string,
}

const checkboxValues: TypeValues = reactive({
    modelValue: false,
    text: '',
    disabled: false,
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

.api-table
    margin-top: 32px

</style>