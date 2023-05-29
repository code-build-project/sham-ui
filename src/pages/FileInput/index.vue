<template lang="pug">
page-wrap
    template(v-slot:title) FileInput

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="fileInputParameters"
            :codeTemplate="codeFileInput"
            :parameterValues="fileInputValues"
            @change="setValue(fileInputValues, $event)"
        )
            sh-file-input.sh-file-input(
                v-model="modelValue"
                :placeholder="fileInputValues.placeholder || 'My FileInput'"
                :isMultiple="fileInputValues.multiple"
                :isDisabled="fileInputValues.disabled"
                :isError="fileInputValues.error"
                :accept="fileInputValues.accept"
                :message="fileInputValues.message"
            ) {{ fileInputValues.label || 'FileInput' }}

    template(v-slot:apiTable)
        v-api-table(
            :propList="api.propList"
            :eventList="api.eventList"
            :slotList="api.slotList"
        )

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import PageWrap from '@/components/PageWrap/index.vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeFileInput from '@/components/UI/ShFileInput/code';
import ShFileInput from '@/components/UI/ShFileInput/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/FileInput/api.json';
import parametersJSON from '@/pages/FileInput/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const fileInputParameters: TypeParameter = parametersJSON;

type TypeValues = {
    placeholder: string,
    multiple: boolean,
    disabled: boolean,
    error: boolean,
    label: string,
    message: string,
    accept: string,
}

let modelValue = ref<{ [key: string]: any }[]>([{}]);

const fileInputValues: TypeValues = reactive({
    placeholder: '',
    multiple: false,
    disabled: false,
    error: false,
    label: '',
    message: '',
    accept: '',
});

</script>

<style scoped lang="sass">
.sh-file-input
    width: 220px

</style>