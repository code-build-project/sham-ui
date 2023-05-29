<template lang="pug">
page-wrap
    template(v-slot:title) Autocomplete

    template(v-slot:text)
        | Компонент <b>sh-button-origin</b> представляет элемент кнопки
        | с минимальным функционалом, который очень просто кастомизировать,
        | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
        | без необходимости писать базовый функционал кнопки с нуля.<br/>

    template(v-slot:playground)
        v-playground(
            :parameters="autocompleteParameters"
            :codeTemplate="codeAutocomplete"
            :parameterValues="autocompleteValues"
            @change="setValue(autocompleteValues, $event)"
        )
            sh-autocomplete.sh-autocomplete(
                v-model="autocompleteValues.modelValue"
                :placeholder="autocompleteValues.placeholder || 'My Autocomplete'"
                :isDisabled="autocompleteValues.disabled"
                :isClearable="autocompleteValues.clear"
                :message="autocompleteValues.message"
                :size="autocompleteValues.size"
                :variant="autocompleteValues.variant"
                :isError="autocompleteValues.error"
                :isListWithoutValue="autocompleteValues.listHide"
                :options="autocompleteOptions"
            ) {{ autocompleteValues.label }}

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
import codeAutocomplete from '@/components/UI/ShAutocomplete/code';
import ShAutocomplete from '@/components/UI/ShAutocomplete/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiJSON from '@/pages/Autocomplete/api.json';
import parametersJSON from '@/pages/Autocomplete/parameters.json';
import optionsJSON from '@/pages/Autocomplete/options.json';
import { useParameter } from '@/composables/playground';

const { setValue } = useParameter();

const api: TypeApiTable = apiJSON;
const autocompleteParameters: TypeParameter = parametersJSON;
const autocompleteOptions: string[] = optionsJSON;

type TypeValues = {
    modelValue: string,
    placeholder: string,
    disabled: boolean,
    clear: boolean,
    label: string,
    message: string,
    size: string,
    variant: string,
    error: boolean,
    listHide: boolean,
}

const autocompleteValues: TypeValues = reactive({
    modelValue: '',
    placeholder: '',
    disabled: false,
    clear: false,
    label: '',
    message: '',
    size: 'medium',
    variant: 'default',
    error: false,
    listHide: true,
});

</script>

<style scoped lang="sass">
.sh-autocomplete
    padding-top: 80px
    padding-bottom: 160px
    width: 230px

</style>