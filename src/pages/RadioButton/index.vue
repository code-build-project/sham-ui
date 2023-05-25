<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Radio
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="radioParameters"
                :codeTemplate="codeRadioButton"
                :parameterValues="radioValues"
                @change="setValue(radioValues, $event);"
            )
                sh-radio-button(
                    v-model="radioValues.modelValue"
                    keyField="radio-button"
                    :radioList="radioOptions"
                    :isColumn="radioValues.column"
                ) {{ radioValues.label }}

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
import codeRadioButton from '@/components/UI/ShRadioButton/code';
import ShRadioButton from '@/components/UI/ShRadioButton/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/RadioButton/api.json';
import parametersJSON from '@/pages/RadioButton/parameters.json';
import optionsJSON from '@/pages/RadioButton/options.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const radioOptions: { id: number, name: string }[]  = optionsJSON;
const radioParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string | number,
    label: string,
    column: boolean,
}

const radioValues: TypeValues = reactive({
    modelValue: 1,
    label: '',
    column: false,
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