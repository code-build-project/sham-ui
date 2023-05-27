<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Modal
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="modalParameters"
                :codeTemplate="codeModal"
                :parameterValues="modalValues"
                @change="setValue(modalValues, $event);"
            )
                .element
                    sh-modal(
                        v-if="modalValues.modelValue"
                        :title="modalValues.title"
                        :text="modalValues.text"
                        @close="modalValues.modelValue = false"
                    )
                    div(@click="modalValues.modelValue = true") Click me!

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
import codeModal from '@/components/UI/ShModal/code';
import ShModal from '@/components/UI/ShModal/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Modal/api.json';
import parametersJSON from '@/pages/Modal/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const modalParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: boolean,
    title: string,
    text: string,
}

const modalValues: TypeValues = reactive({
    modelValue: false,
    title: 'Modal',
    text: 'Modal text',
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

.element
    position: relative
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px

.api-table
    margin-top: 32px

</style>