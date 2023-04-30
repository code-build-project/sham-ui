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
                :codeTemplate="codeButtonOrigin"
                @changeParameter="setParameter(inputOrigin, $event)"
            )
                sh-input-origin(
                    v-model="inputOriginValue"
                    :placeholder="inputOrigin.placeholder.value || 'My Input'"
                    :isReadonly="inputOrigin.readonly.checked"
                    :isDisabled="inputOrigin.disabled.checked"
                )

        .field
            h3.sub-title Стилизованное поле ввода
            p.text
                | Компонент <b>sh-button</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="inputStylized"
                :codeTemplate="codeButtonOrigin"
                @changeParameter="setParameter(inputStylized, $event)"
            )
                sh-input(
                    v-model="inputStylizednValue"
                    class="sh-input"
                    :placeholder="inputStylized.placeholder.value || 'My Input'"
                    :isReadonly="inputStylized.readonly.checked"
                    :isDisabled="inputStylized.disabled.checked"
                    :size="inputStylized.size.value"
                    :variant="inputStylized.variant.value"
                    :isError="inputStylized.error.checked"
                    :message="inputStylized.message.value"
                    :isClearable="inputStylized.clear.checked"
                    :isPassword="inputStylized.password.checked"
                    :format="inputStylized.format.value"
                ) {{ inputStylized.label.value }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ShInput from '@/components/ShInput/index.vue';
import ShInputOrigin from '@/components/ShInput/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeButtonOrigin from '@/components/ShButton/Origin/codeTemplate';
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
        checked: false,
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        checked: false,
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
        checked: false,
    },
    disabled: {
        id: 'disable1',
        elementType: 'switch',
        title: 'DISABLED',
        checked: false,
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
    error: {
        id: 'error',
        elementType: 'switch',
        title: 'ERROR',
        checked: false,
    },
    message: { 
        id: 'message',
        elementType: 'input',
        title: 'MESSAGE',
        value: '',
        placeholder: 'Message',
    },
    clear: {
        id: 'clear',
        elementType: 'switch',
        title: 'CLEARABLE',
        checked: false,
    },
    label: { 
        id: 'label',
        elementType: 'input',
        title: 'LABEL',
        value: '',
        placeholder: 'Label',
    },
    password: {
        id: 'password',
        elementType: 'switch',
        title: 'PASSWORD',
        checked: false,
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