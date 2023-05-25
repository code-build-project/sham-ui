<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Table
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="tableParameters"
                :codeTemplate="codeTable"
                :parameterValues="tableValues"
                @change="setValue(tableValues, $event);"
            )
                .sh-table
                    sh-table(
                        :headers="tableHeaders"
                        :items="tableItems"
                        :height="tableValues.height"
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

.sh-table
    width: 600px
    padding: 40px 0

.api-table
    margin-top: 32px

</style>