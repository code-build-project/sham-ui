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
                :parameters="autocompleteOrigin"
                :codeTemplate="codeAutocompleteOrigin"
                @changeParameter="setParameter(autocompleteOrigin, $event)"
            )
                sh-autocomplete-origin.sh-autocomplete-origin(
                    v-model="autocompleteOriginValue"
                    :placeholder="autocompleteOrigin.placeholder.value || 'My Autocomplete'"
                    :isDisabled="autocompleteOrigin.disabled.isChecked"
                    :options="['Яблоко', 'Мандарин', 'Мадрид', 'Апельсин']"
                )

        .field
            h3.sub-title Стилизованное поле выбора
            p.text
                | Компонент <b>sh-select</b> представляет из себя обертку над

            v-playground.playground(
                :parameters="autocompleteStylized"
                :codeTemplate="codeAutocomplete"
                @changeParameter="setParameter(autocompleteStylized, $event)"
            )
                sh-autocomplete.sh-autocomplete(
                    v-model="autocompleteValue"
                    :placeholder="autocompleteStylized.placeholder.value || 'My Autocomplete'"
                    :isDisabled="autocompleteStylized.disabled.isChecked"
                    :size="autocompleteStylized.size.value"
                    :variant="autocompleteStylized.variant.value"
                    :isError="autocompleteStylized.error.isChecked"
                    :message="autocompleteStylized.message.value"
                    :isClearable="autocompleteStylized.clear.isChecked"
                    :isListWithoutValue="autocompleteStylized.listHide.isChecked"
                    :options="['Яблоко', 'Мандарин', 'Мадрид', 'Апельсин']"
                ) {{ autocompleteStylized.label.value }}

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ShAutocomplete from '@/components/UI/ShAutocomplete/index.vue';
import ShAutocompleteOrigin from '@/components/UI/ShAutocomplete/Origin/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeAutocomplete from '@/components/UI/ShAutocomplete/code';
import codeAutocompleteOrigin from '@/components/UI/ShAutocomplete/Origin/code';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import { useParameter } from '@/composables/playground';

const { setParameter } = useParameter();

let autocompleteOriginValue = ref<string>('');

const autocompleteOrigin: TypeParameter = reactive({
    placeholder: { 
        id: 'placeholder',
        elementType: 'input',
        title: 'PLACEHOLDER',
        value: '',
        placeholder: 'My Autocomplete',
    },
    disabled: {
        id: 'disable',
        elementType: 'switch',
        title: 'DISABLED',
        isChecked: false,
        isInline: true,
    },
});

let autocompleteValue = ref<string>('');

const autocompleteStylized: TypeParameter = reactive({
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

.sh-autocomplete-origin
    padding-top: 80px
    padding-bottom: 160px

.sh-autocomplete
    padding-top: 80px
    padding-bottom: 160px
    width: 230px

</style>