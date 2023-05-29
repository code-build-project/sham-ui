<template lang="pug">
page-wrap
    template(v-slot:title) Pagination

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="paginationParameters"
            :codeTemplate="codePagination"
            :parameterValues="paginationValues"
            @change="setValue(paginationValues, $event)"
        )
            sh-pagination(
                v-model="paginationValues.modelValue"
                :stepsLength="paginationValues.stepsLength"
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
import codePagination from '@/components/UI/ShPagination/code';
import ShPagination from '@/components/UI/ShPagination/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Pagination/api.json';
import parametersJSON from '@/pages/Pagination/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const paginationParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: number,
    stepsLength: number,
}

const paginationValues: TypeValues = reactive({
    modelValue: 1,
    stepsLength: 5,
});

</script>