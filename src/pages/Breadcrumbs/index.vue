<template lang="pug">
page-wrap
    template(v-slot:title) Breadcrumbs

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="breadcrumbsParameters"
            :codeTemplate="codeBreadcrumbs"
            :parameterValues="breadcrumbsValues"
            @change="setValue(breadcrumbsValues, $event)"
        )
            sh-breadcrumbs(
                :size="breadcrumbsValues.size"
                :items="breadcrumbList"
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
import codeBreadcrumbs from '@/components/UI/ShBreadcrumbs/code';
import ShBreadcrumbs from '@/components/UI/ShBreadcrumbs/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import type { TypeCrumb } from '@/components/UI/ShBreadcrumbs/types';
import apiJSON from '@/pages/Breadcrumbs/api.json';
import parametersJSON from '@/pages/Breadcrumbs/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const breadcrumbsParameters: TypeParameter = parametersJSON;

type TypeValues = {
    size: string,
}

const breadcrumbsValues: TypeValues = reactive({
    size: 'medium',
});

const breadcrumbList: TypeCrumb[] = [
    { id: 'auto', title: 'Autocomplete', url: '/autocomplete' },
    { id: 'select', title: 'Select', url: '/select' },
    { id: 'bread', title: 'Breadcrumbs' },
];

</script>