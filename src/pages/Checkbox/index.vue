<template lang="pug">
page-wrap
    template(v-slot:title) Checkbox

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
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
import ShCheckbox from '@/components/UI/ShCheckbox/index.vue';
import codeCheckbox from '@/components/UI/ShCheckbox/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Checkbox/api.json';
import parametersJSON from '@/pages/Checkbox/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

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