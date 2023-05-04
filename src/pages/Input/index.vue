<template lang="pug">
.page-wrap
    .page
        .field
            h1.title Input
            p.text
                | Компонент <b>sh-button-origin</b> представляет элемент кнопки
                | с минимальным функционалом, который очень просто кастомизировать,
                | создавая свои компоненты-обертки над <b>sh-button-origin</b>,
                | без необходимости писать базовый функционал кнопки с нуля.<br/>

            v-playground.playground(
                :parameters="inputOrigin"
                :codeTemplate="codeInputOrigin"
                @changeParameter="setParameter(inputOrigin, $event)"
            )
                sh-input-origin(
                    v-model="inputOriginValue"
                    :placeholder="inputOrigin.placeholder.value || 'My Input'"
                    :isReadonly="inputOrigin.readonly.isChecked"
                    :isDisabled="inputOrigin.disabled.isChecked"
                )

        .field
            h3.sub-title Стилизованное поле ввода
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="inputStylized"
                :codeTemplate="codeInput"
                @changeParameter="setParameter(inputStylized, $event)"
            )
                sh-input.sh-input(
                    v-model="inputStylizednValue"
                    :placeholder="inputStylized.placeholder.value || 'My Input'"
                    :isReadonly="inputStylized.readonly.isChecked"
                    :isDisabled="inputStylized.disabled.isChecked"
                    :size="inputStylized.size.value"
                    :variant="inputStylized.variant.value"
                    :isError="inputStylized.error.isChecked"
                    :message="inputStylized.message.value"
                    :isClearable="inputStylized.clear.isChecked"
                    :isPassword="inputStylized.password.isChecked"
                    :format="inputStylized.format.value"
                ) {{ inputStylized.label.value }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ShInput from '@/components/UI/ShInput/index.vue';
import ShInputOrigin from '@/components/UI/ShInput/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeInput from '@/components/UI/ShInput/code';
import codeInputOrigin from '@/components/UI/ShInput/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

let inputOriginValue = ref<string>('');

const inputOrigin: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Input',
    },
    readonly: {
        id: 'readonly',
        elementType: 'switch',
        title: 'READONLY',
        isChecked: false,
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
    },
});

let inputStylizednValue = ref<string>('');

const inputStylized: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Input',
    },
    readonly: {
        id: 'readonly1',
        elementType: 'switch',
        title: 'READONLY',
        isChecked: false,
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
    password: {
        id: 'password',
        elementType: 'switch',
        title: 'PASSWORD',
        isChecked: false,
        isInline: true,
    },
    format: { 
        id: 'format',
        elementType: 'radio',
        title: 'FORMAT',
        value: '',
        variantList: [
            { id: '', name: 'Default' },
            { id: 'number', name: 'Number' },
            { id: 'letter', name: 'Letter' },
            { id: 'latin', name: 'Latin' },
            { id: 'cyrillic', name: 'Cyrillic' },
        ],
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

.sh-input
    width: 200px

</style>