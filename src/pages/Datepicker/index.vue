<template lang="pug">
page-wrap
    template(v-slot:title) Datepicker

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="datepickerParameters"
            :codeTemplate="codeDatepicker"
            :parameterValues="datepickerValues"
            @change="setValue(datepickerValues, $event)"
        )
            sh-datepicker.sh-datepicker(
                v-model="datepickerValues.modelValue"
                :placeholder="datepickerValues.placeholder || 'My Datapicker'"
                :isReadonly="datepickerValues.readonly"
                :isDisabled="datepickerValues.disabled"
            ) {{ datepickerValues.label || 'Datapicker' }}

    template(v-slot:apiTable)
        v-api-table(
            :propList="api.propList"
            :eventList="api.eventList"
            :slotList="api.slotList"
        )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import PageWrap from '@/components/PageWrap/index.vue';
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
.sh-datepicker
    width: 180px
    padding-top: 80px
    padding-bottom: 350px

</style>