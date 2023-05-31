<template lang="pug">
page-wrap
    template(v-slot:title) Autocomplete

    template(v-slot:text)
        | Компонент <b>sh-autocomplete</b> представляет функциональность
        | предопределённого варианта выбора для пользователя.
        | Пользователь может выбрать опцию из списка вместо того, чтобы вводить её вручную.

    template(v-slot:playground)
        v-playground(
            :parameters="autocompleteParameters"
            :codeTemplate="codeAutocomplete"
            :parameterValues="autocompleteValues"
            @change="setValue(autocompleteValues, $event)"
        )
            sh-autocomplete.sh-autocomplete(
                v-model="autocompleteValues.modelValue"
                :placeholder="autocompleteValues.placeholder"
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
import ShAutocomplete from '@/components/UI/ShAutocomplete/index.vue';
import apiJSON from '@/pages/Autocomplete/api.json';
import optionsJSON from '@/pages/Autocomplete/options.json';
import parametersJSON from '@/pages/Autocomplete/parameters.json';
import codeAutocomplete from '@/components/UI/ShAutocomplete/code';
import { useParameter } from '@/composables/playground';
import type { TypeParameter } from '@/components/common/VPlayground/types';
import type { TypeApiTable } from '@/components/common/VApiTable/types';

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
    placeholder: 'My Autocomplete',
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