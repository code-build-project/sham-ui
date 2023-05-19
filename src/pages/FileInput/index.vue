<template lang="pug">
.page-wrap
    .page
        .field
            h1.title FileInput
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="fileInputParameters"
                :codeTemplate="codeFileInput"
                :parameterValues="fileInputValues"
                @change="setValue(fileInputValues, $event);"
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

            v-api-table.api-table(
                :propList="api.propList"
                :eventList="api.eventList"
                :slotList="api.slotList"
            )

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
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

.sh-file-input
    width: 220px

.api-table
    margin-top: 32px

</style>