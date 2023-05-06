<template lang="pug">
.table
    .header
        .header-item(
            v-for="header in headers"
            :key="header.id"
        ) {{ header.title }}

    .body
        .body-row(
            v-for="item in items"
            :key="item.id"
        )
            .body-column(
                v-for="header in headers"
                :key="header.id"
            ) {{ item[header.id] }}

</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        headers: { id: string, title: string }[],
        items: { [name: string]: string }[],
    }>(),
    {
        headers: () => [],
        items: () => [],
    },
);

</script>

<style lang="sass" scoped>
.table
    width: 100%
    color: $color-dark-1
    border-radius: 8px
    border: 1px solid $color-gray-3

.header
    @extend %flex_row
    border-bottom: 2px solid $color-gray-3
    &-item
        padding: 8px 6px
        flex: 1 1 0
        font-weight: 600
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none

.body
    &-row
        @extend %flex_row
        border-bottom: 1px solid $color-gray-3
        &:last-child
            border-bottom: none
    &-column
        padding: 8px 6px
        flex: 1 1 0
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none

</style>