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
                :parameters="buttonOrigin"
                :codeTemplate="codeButtonOrigin"
                @changeParameter="setParameter(buttonOrigin, $event)"
            )
                sh-input(
                    placeholder="My Input"
                    :isReadonly="buttonOrigin.readonly.checked"
                    :isDisabled="buttonOrigin.disabled.checked"
                )

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ShInput from '@/components/ShInput/index.vue';
import VPlayground from '@/components/common/VPlayground/index.vue';
import codeButtonOrigin from '@/components/ShButton/codeTemplate';
import type { TypeParameter } from '@/components/common/VPlayground/types';

const buttonOrigin: TypeParameter = reactive({
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

type TypeData = {
    key: string,
    value: string | boolean,
}

function setParameter(playground: TypeParameter, data: TypeData): void {
    if (typeof data.value === 'string') {
        playground[data.key].value = data.value as string;
    } else {
        playground[data.key].checked = data.value as boolean;
    }
}

</script>

<style scoped lang="sass">
.page-wrap
    @extend .flex_column-start-center

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

</style>