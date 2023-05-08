<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Select
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="selectParameters"
                :codeTemplate="codeSelect"
                :parameterValues="selectValues"
                @change="setParameterDecorator"
            )
                sh-select.sh-select(
                    v-model="selectValues.modelValue"
                    :placeholder="selectValues.placeholder || 'My Select'"
                    :isDisabled="selectValues.disabled"
                    :isClearable="selectValues.clear"
                    :message="selectValues.message"
                    :size="selectValues.size"
                    :variant="selectValues.variant"
                    :isError="selectValues.error"
                    :isMultiple="selectValues.multiple"
                    :options="selectOptions"
                ) {{ selectValues.label }}

            v-api-table.api-table(
                :propList="apiData.props"
                :eventList="apiData.events"
                :slotList="apiData.slots"
            )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeSelect from '@/components/UI/ShSelect/code';
import ShSelect from '@/components/UI/ShSelect/index.vue';
import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';
import type { TypeOption } from '@/components/UI/ShSelect/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiDataJSON from '@/pages/Select/apiData.json';
import selectOptionsJSON from '@/pages/Select/selectOptions.json';
import parametersJSON from '@/pages/Select/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const apiData: TypeApiTable = apiDataJSON;
const selectOptions: TypeOption[]  = selectOptionsJSON;
const selectParameters: TypeParameter = parametersJSON;

type TypeValues = {
    modelValue: string | string[],
    placeholder: string,
    disabled: boolean,
    clear: boolean,
    label: string,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    multiple: boolean,
}

const selectValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    disabled: false,
    clear: false,
    label: '',
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    multiple: false,
});

function setParameterDecorator(event: TypeData): void {
    if (event.key === selectParameters.multiple.id) {
        if (event.value) {
            selectValues.modelValue = [];
        } else {
            selectValues.modelValue = '';
        }
    }

    setValue(selectValues, event);
}

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

.sh-select
    padding-top: 80px
    padding-bottom: 130px
    width: 230px

.api-table
    margin-top: 32px

</style>