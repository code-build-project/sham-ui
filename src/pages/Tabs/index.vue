<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Tabs
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="tabsParameters"
                :codeTemplate="codeTabs"
                :parameterValues="tabsValues"
                @change="setValue(tabsValues, $event);"
            )
                sh-tabs(
                    v-model="tabsValues.modelValue"
                    :tabs="tabs"
                    :isColumn="tabsValues.column"
                )

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