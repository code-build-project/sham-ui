<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Datepicker
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="datepickerParameters"
                :codeTemplate="codeDatepicker"
                :parameterValues="datepickerValues"
                @change="setValue(datepickerValues, $event);"
            )
                sh-datepicker.sh-datepicker(
                    v-model="datepickerValues.modelValue"
                    :placeholder="datepickerValues.placeholder || 'My Datapicker'"
                    :isReadonly="datepickerValues.readonly"
                    :isDisabled="datepickerValues.disabled"
                ) {{ datepickerValues.label || 'Datapicker' }}

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
import codeDatepicker from '@/components/UI/ShDatepicker/code';
import ShDatepicker from '@/components/UI/ShDatepicker/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Datepicker/api.json';
import parametersJSON from '@/pages/Datepicker/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const datepickerParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    label: string,
}

const datepickerValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    readonly: false,
    disabled: false,
    label: '',
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

.sh-datepicker
    width: 180px
    padding-top: 80px
    padding-bottom: 350px

.api-table
    margin-top: 32px

</style>