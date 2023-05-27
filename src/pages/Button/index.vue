<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Button
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
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