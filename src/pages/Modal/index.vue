<template lang="pug">
page-wrap
    template(v-slot:title) Modal

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="modalParameters"
            :codeTemplate="codeModal"
            :parameterValues="modalValues"
            @change="setValue(modalValues, $event)"
        )
            sh-modal(
                v-if="modalValues.modelValue"
                :title="modalValues.title"
                :text="modalValues.text"
                @close="modalValues.modelValue = false"
            )
            .element(@click="modalValues.modelValue = true") Click me!

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
.element
    color: $color-white-1
    font-size: 18px
    background: $color-blue-1
    padding: 10px
    border-radius: 4px
    cursor: pointer

</style>