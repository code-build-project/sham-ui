<template lang="pug">
page-wrap
    template(v-slot:title) Button

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
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
import ShButton from '@/components/UI/ShButton/index.vue';
import codeButton from '@/components/UI/ShButton/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Button/api.json';
import parametersJSON from '@/pages/Button/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
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