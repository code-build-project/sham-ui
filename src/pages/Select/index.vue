<template lang="pug">
page-wrap
    template(v-slot:title) Select

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
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
import codeSelect from '@/components/UI/ShSelect/code';
import ShSelect from '@/components/UI/ShSelect/index.vue';
import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';
import type { TypeOption } from '@/components/UI/ShSelect/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Select/api.json';
import optionsJSON from '@/pages/Select/options.json';
import parametersJSON from '@/pages/Select/parameters.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const selectOptions: TypeOption[]  = optionsJSON;
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
.sh-select
    padding-top: 80px
    padding-bottom: 130px
    width: 230px

</style>