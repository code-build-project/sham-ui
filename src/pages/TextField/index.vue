<template lang="pug">
.page-wrap
    .page
        .field
            h1.title TextField
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
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

.sh-text-field
    width: 200px

.api-table
    margin-top: 32px

</style>