<template lang="pug">
page-wrap
    template(v-slot:title) TextField

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="textFieldParameters"
            :codeTemplate="codeTextField"
            :parameterValues="textFieldValues"
            @change="setValue(textFieldValues, $event)"
        )
            sh-text-field.sh-text-field(
                v-model="textFieldValues.modelValue"
                :placeholder="textFieldValues.placeholder || 'My TextField'"
                :isReadonly="textFieldValues.readonly"
                :isDisabled="textFieldValues.disabled"
                :size="textFieldValues.size"
                :variant="textFieldValues.variant"
                :isError="textFieldValues.error"
                :message="textFieldValues.message"
                :isClearable="textFieldValues.clear"
                :isPassword="textFieldValues.password"
                :format="textFieldValues.format"
            ) {{ textFieldValues.label }}

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
import ShTextField from '@/components/UI/ShTextField/index.vue';
import codeTextField from '@/components/UI/ShTextField/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/TextField/api.json';
import parametersJSON from '@/pages/TextField/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const textFieldParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string,
    placeholder: string,
    readonly: boolean,
    disabled: boolean,
    clear: boolean,
    label: string,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    password: boolean,
    format: string,
}

const textFieldValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    readonly: false,
    disabled: false,
    clear: false,
    label: '',
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    password: false,
    format: '',
});

</script>

<style scoped lang="sass">
.sh-text-field
    width: 200px

</style>