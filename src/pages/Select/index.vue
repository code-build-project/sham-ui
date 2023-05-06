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
                :parameters="selectData"
                :codeTemplate="codeSelect"
                @changeParameter="setParameterDecorator"
            )
                sh-select.sh-select(
                    v-model="selectValue"
                    :placeholder="selectData.placeholder.value || 'My Select'"
                    :isDisabled="selectData.disabled.isChecked"
                    :isClearable="selectData.clear.isChecked"
                    :message="selectData.message.value"
                    :size="selectData.size.value"
                    :variant="selectData.variant.value"
                    :isError="selectData.error.isChecked"
                    :isMultiple="selectData.multiple.isChecked"
                    :options="selectOptions"
                ) {{ selectData.label.value }}

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
import codeSelect from '@/components/UI/ShSelect/code';
import ShSelect from '@/components/UI/ShSelect/index.vue';
import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';
import type { TypeOption } from '@/components/UI/ShSelect/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import apiDataJSON from '@/pages/Select/apiData.json';
import selectOptionsJSON from '@/pages/Select/selectOptions.json';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

const apiData = apiDataJSON as TypeApiTable;
const selectOptions = selectOptionsJSON as TypeOption[];

let selectValue = ref<string | string[]>('');

const selectData: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Select',
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
    multiple: {
        id: 'multiple',
        elementType: 'switch',
        title: 'MULTIPLE',
        isChecked: false,
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

function setParameterDecorator(event: TypeData): void {
    if (event.key === selectData.multiple.id) {
        if (event.value) {
            selectValue.value = [];
        } else {
            selectValue.value = '';
        }
    }

    setParameter(selectData, event);
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