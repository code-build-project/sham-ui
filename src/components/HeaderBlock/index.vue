<template lang="pug">
.header
    v-input-search.search(
        v-model="textButton"
        placeholder="Search"
    )

    button.button
        v-icon.button-icon(path="img/heart.svg")
        | Сказать спасибо автору

</template>

<script setup lang="ts">
import { ref } from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import VInputSearch from '@/components/common/VInput/Search/index.vue';

const textButton = ref<string>('');
</script>

<style scoped lang="sass">
.header
    @extend %flex_row-center
    height: 64px
    border: 1px solid $color-gray-3
    padding-right: 12px

.search
    width: 211px
    margin-left: 426px

.button
    @extend %flex_row-center-center
    width: 211px
    height: 40px
    border-radius: 8px
    border: 1px solid $color-gray-3
    background: $color-gray-5
    color: $color-dark-1
    font-size: 14px
    font-weight: 500
    line-height: 16px
    margin-left: auto
    &-icon
        width: 20px
        height: 20px
        margin-right: 8px
        fill: $color-gray-2

@media screen and (max-width: 1440px)
    .search
        margin-left: 206px

@media screen and (max-width: 1082px)
    .search
        margin-left: 113px

</style>