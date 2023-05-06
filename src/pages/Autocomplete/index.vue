<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Autocomplete
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="autocompleteData"
                :codeTemplate="codeAutocomplete"
                @changeParameter="setParameter(autocompleteData, $event)"
            )
                sh-autocomplete.sh-autocomplete(
                    v-model="autocompleteValue"
                    :placeholder="autocompleteData.placeholder.value || 'My Autocomplete'"
                    :isDisabled="autocompleteData.disabled.isChecked"
                    :isClearable="autocompleteData.clear.isChecked"
                    :message="autocompleteData.message.value"
                    :size="autocompleteData.size.value"
                    :variant="autocompleteData.variant.value"
                    :isError="autocompleteData.error.isChecked"
                    :isListWithoutValue="autocompleteData.listHide.isChecked"
                    :options="autocompleteOptions"
                ) {{ autocompleteData.label.value }}

            v-api-table.api-table(
                :propList="apiData.props"
                :eventList="apiData.events"
                :slotList="apiData.slots"
            )

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import VApiTable from '@/components/common/VApiTable/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeAutocomplete from '@/components/UI/ShAutocomplete/code';
import ShAutocomplete from '@/components/UI/ShAutocomplete/index.vue';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiDataJSON from '@/pages/Autocomplete/apiData.json';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

const apiData = apiDataJSON as TypeApiTable;
const autocompleteOptions: string[] = ['Яблоко', 'Мандарин', 'Мадрид', 'Апельсин'];

let autocompleteValue = ref<string>('');

const autocompleteData: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Autocomplete',
    },
    disabled: {
        id: 'disable1',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
    },
    variant: {
        id: 'variant',
        elementType: 'radio',
        title: 'VARIANT',
        value: 'default',
        variantList: [
            { id: 'default', name: 'Default' },
            { id: 'outline', name: 'Outline' },
            { id: 'underline', name: 'Underline' },
        ],
    },
    size: { 
        id: 'size',
        elementType: 'radio',
        title: 'SIZE',
        value: 'medium',
        variantList: [
            { id: 'small', name: 'Small' },
            { id: 'medium', name: 'Medium' },
            { id: 'large', name: 'Large' },
        ],
    },
    message: { 
        id: 'message',
        elementType: 'input',
        title: 'MESSAGE',
        value: '',
        placeholder: 'Message',
    },
    error: {
        id: 'error',
        elementType: 'switch',
        title: 'ERROR',
        isChecked: false,
    },
    clear: {
        id: 'clear',
        elementType: 'switch',
        title: 'CLEARABLE',
        isChecked: false,
        isInline: true,
    },
    listHide: {
        id: 'listHide',
        elementType: 'switch',
        title: 'LIST WITHOUT VALUE',
        isChecked: true,
        isInline: true,
    },
    label: { 
        id: 'label',
        elementType: 'input',
        title: 'LABEL',
        value: '',
        placeholder: 'Label',
    },
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

.sh-autocomplete
    padding-top: 80px
    padding-bottom: 160px
    width: 230px

.api-table
    margin-top: 32px

</style>