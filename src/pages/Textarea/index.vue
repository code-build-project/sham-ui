<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Textarea
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="textareaParameters"
                :codeTemplate="codeTextarea"
                :parameterValues="textareaValues"
                @change="setValue(textareaValues, $event);"
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

.sh-textarea
    max-width: 250px

.api-table
    margin-top: 32px

</style>