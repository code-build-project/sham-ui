<template lang="pug">
page-wrap
    template(v-slot:title) Textarea

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="textareaParameters"
            :codeTemplate="codeTextarea"
            :parameterValues="textareaValues"
            @change="setValue(textareaValues, $event)"
        )
            sh-textarea.sh-textarea(
                v-model="textareaValues.modelValue"
                :placeholder="textareaValues.placeholder || 'My Textarea'"
                :isReadonly="textareaValues.readonly"
                :isDisabled="textareaValues.disabled"
                :isSpellcheck="textareaValues.spellcheck"
                :resize="textareaValues.resize"
                :label="textareaValues.label"
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
import codeTextarea from '@/components/UI/ShTextarea/code';
import ShTextarea from '@/components/UI/ShTextarea/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Textarea/api.json';
import parametersJSON from '@/pages/Textarea/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const textareaParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    spellcheck: boolean,
    resize: string,
    label: string,
}

const textareaValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    readonly: false,
    disabled: false,
    spellcheck: false,
    resize: 'both',
    label: '',
});

</script>

<style scoped lang="sass">
.sh-textarea
    max-width: 250px

</style>