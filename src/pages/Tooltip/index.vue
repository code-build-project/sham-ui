<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Tooltip
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="tooltipParameters"
                :codeTemplate="codeTooltip"
                :parameterValues="tooltipValues"
                @change="setValue(tooltipValues, $event);"
            )
                .element
                    sh-tooltip(
                        :isShow="tooltipValues.show || undefined"
                        :position="tooltipValues.position"
                    ) {{ tooltipValues.text || 'Tooltip' }}
                    | Hover me!

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
import codeTooltip from '@/components/UI/ShTooltip/code';
import ShTooltip from '@/components/UI/ShTooltip/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Tooltip/api.json';
import parametersJSON from '@/pages/Tooltip/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const tooltipParameters: TypeParameter = parametersJSON;

type TypeValues = {
    text: string,
    show: boolean,
    position: string,
}

const tooltipValues: TypeValues = reactive({
    text: 'Tooltip',
    show: false,
    position: 'right',
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

.element
    position: relative
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px

</style>