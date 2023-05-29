<template lang="pug">
page-wrap
    template(v-slot:title) Table

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="tableParameters"
            :codeTemplate="codeTable"
            :parameterValues="tableValues"
            @change="setValue(tableValues, $event)"
        )
            .sh-table
                sh-table(
                    :headers="tableHeaders"
                    :items="tableItems"
                    :height="tableValues.height"
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
import codeTable from '@/components/UI/ShTable/code';
import ShTable from '@/components/UI/ShTable/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Table/api.json';
import parametersJSON from '@/pages/Table/parameters.json';
import optionsJSON from '@/pages/Table/options.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const tableHeaders: { id: string, title: string }[]  = optionsJSON.headers;
const tableItems: { [name: string]: string }[]  = optionsJSON.items;
const tableParameters: TypeParameter = parametersJSON;

type TypeValues = {
    height: string,
}

const tableValues: TypeValues = reactive({
    height: '',
});

</script>

<style scoped lang="sass">
.sh-table
    width: 600px
    padding: 40px 0

</style>