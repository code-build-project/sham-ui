<template lang="pug">
page-wrap
    template(v-slot:title) Tabs

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="tabsParameters"
            :codeTemplate="codeTabs"
            :parameterValues="tabsValues"
            @change="setValue(tabsValues, $event)"
        )
            sh-tabs(
                v-model="tabsValues.modelValue"
                :tabs="tabs"
                :isColumn="tabsValues.column"
            )

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
import codeTabs from '@/components/UI/ShTabs/code';
import ShTabs from '@/components/UI/ShTabs/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Tabs/api.json';
import parametersJSON from '@/pages/Tabs/parameters.json';
import optionsJSON from '@/pages/Tabs/options.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const tabs: { id: string, title: string }[]  = optionsJSON;
const tabsParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string,
    column: boolean,
}

const tabsValues: TypeValues = reactive({
    modelValue: tabs[0].id,
    column: false,
});

</script>