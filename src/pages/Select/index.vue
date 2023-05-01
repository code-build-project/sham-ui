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
                :parameters="selectOrigin"
                :codeTemplate="codeSelectOrigin"
                @changeParameter="setParameter(selectOrigin, $event)"
            )
                sh-select-origin.sh-select-origin(
                    v-model="selectOriginValue"
                    :placeholder="selectOrigin.placeholder.value || 'My Select'"
                    :isDisabled="selectOrigin.disabled.isChecked"
                    :options="selectOriginOptions"
                )

        .field
            h3.sub-title Стилизованное поле выбора
            p.text
                | Компонент <b>sh-select</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="selectStylized"
                :codeTemplate="codeSelect"
                @changeParameter="setParameter(selectStylized, $event)"
            )
                sh-select.sh-select(
                    v-model="selectValue"
                    class="sh-input"
                    :placeholder="selectStylized.placeholder.value || 'My Input'"
                    :isDisabled="selectStylized.disabled.isChecked"
                    :size="selectStylized.size.value"
                    :variant="selectStylized.variant.value"
                    :isError="selectStylized.error.isChecked"
                    :message="selectStylized.message.value"
                    :isClearable="selectStylized.clear.isChecked"
                    :options="selectOptions"
                ) {{ selectStylized.label.value }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ShSelect from '@/components/ShSelect/index.vue';
import ShSelectOrigin from '@/components/ShSelect/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeSelect from '@/components/ShInput/code';
import codeSelectOrigin from '@/components/ShInput/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

let selectOriginValue = ref<string>('');
const selectOriginOptions = ref<{ id: string, value: string, text: string }[]>([
    {
        id: '1',
        value: 'first',
        text: 'First',
    },
    {
        id: '2',
        value: 'second',
        text: 'Second',
    },
    {
        id: '3',
        value: 'third',
        text: 'Third',
    },
]);

const selectOrigin: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Input',
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
    },
});

let selectValue = ref<string>('');
const selectOptions = ref<{ id: string, value: string, text: string }[]>([
    {
        id: '1',
        value: 'first',
        text: 'First',
    },
    {
        id: '2',
        value: 'second',
        text: 'Second',
    },
    {
        id: '3',
        value: 'third',
        text: 'Third',
    },
]);

const selectStylized: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Input',
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

.sh-select-origin
    padding-top: 80px
    padding-bottom: 130px

.sh-select
    padding-top: 80px
    padding-bottom: 130px
    width: 230px

</style>