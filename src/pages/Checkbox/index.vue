<!-- eslint-disable max-len -->
<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Checkbox
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="dataCheckboxOrigin"
                :codeTemplate="codeCheckboxOrigin"
                @changeParameter="setParameter(dataCheckboxOrigin, $event)"
            )
                sh-checkbox-origin(
                    v-model="valueCheckboxOrigin"
                    keyField="checkbox-origin"
                    :isDisabled="dataCheckboxOrigin.disabled.isChecked"
                ) {{ dataCheckboxOrigin.text.value || 'My checkbox' }}

            v-api-table.api-table(
                :propList="apiData.props"
                :eventList="apiData.events"
                :slotList="apiData.slots"
            )

        .field
            h3.sub-title Стилизованный checkbox
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="dataCheckbox"
                :codeTemplate="codeCheckbox"
                @changeParameter="setParameter(dataCheckbox, $event)"
            )
                sh-checkbox(
                    v-model="valueCheckbox"
                    keyField="checkbox"
                    :isDisabled="dataCheckbox.disabled.isChecked"
                    :size="dataCheckbox.size.value"
                ) {{ dataCheckbox.text.value || 'My checkbox' }}
            
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
import ShCheckbox from '@/components/UI/ShCheckbox/index.vue';
import ShCheckboxOrigin from '@/components/UI/ShCheckbox/Origin/index.vue';
import codeCheckbox from '@/components/UI/ShCheckbox/code';
import codeCheckboxOrigin from '@/components/UI/ShCheckbox/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

let valueCheckboxOrigin = ref<boolean>(false);

const dataCheckboxOrigin: TypeParameter = reactive({
    text: { 
        id: 'text',
        elementType: 'input',
        title: 'TEXT CHECKBOX',
        value: '',
        placeholder: 'My checkbox',
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
    },
});

let valueCheckbox = ref<boolean>(false);

const dataCheckbox: TypeParameter = reactive({
    text: { 
        id: 'text',
        elementType: 'input',
        title: 'TEXT CHECKBOX',
        value: '',
        placeholder: 'My checkbox',
    },
    disabled: {
        id: 'disable1',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
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
});

const apiData: TypeApiTable = {
    props: [
        { name: 'modelValue', type: 'boolean', default: 'false', description: 'Example text' },
        { name: 'keyField', type: 'string', default: 'key-id', description: 'Example text' },
    ],
    events: [
        { name: '@click', parameters: 'value: boolean', description: 'Example text' },
    ],
    slots: [
        { name: '(default)', default: 'Название флажка', description: 'Example text' },
    ],
};

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

.api-table
    margin-top: 32px

</style>