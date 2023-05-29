<template lang="pug">
page-wrap
    template(v-slot:title) Tooltip

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="tooltipParameters"
            :codeTemplate="codeTooltip"
            :parameterValues="tooltipValues"
            @change="setValue(tooltipValues, $event)"
        )
            .element
                sh-tooltip(
                    :isShow="tooltipValues.show || undefined"
                    :position="tooltipValues.position"
                ) {{ tooltipValues.text || 'Tooltip' }}
                | Hover me!

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
.element
    position: relative
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px

</style>