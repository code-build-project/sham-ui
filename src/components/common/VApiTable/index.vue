<template lang="pug">
.api
    .title API

    .nav
        .nav-item(
            v-for="nav in navList"
            :key="nav.id"
            :class="getActiveClass(nav.id)"
            @click="setActiveNav(nav.id)"
        ) {{ nav.title }}

    .table
        .header
            .header-item(
                v-for="header in headerList[activeNavId]"
                :key="header.id"
            ) {{ header.title }}

        .body
            template(
                v-for="item in items"
                :key="item.id"
            )
                .body-row
                    .body-column(
                        v-for="header in headerList[activeNavId]"
                        :key="header.id"
                    ) {{ item[header.id] }}
                .body-row-description Примерное описание, до тех пор пока не добавлю для всех значений

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(
    defineProps<{
        propList?: { name: string, type: string, default: string }[],
        eventList?: { name: string, parameters: string }[],
        slotList?: { name: string, default: string }[],
    }>(),
    {
        propList: () => [],
        eventList: () => [],
        slotList: () => [],
    },
);


// BLOCK "nav"
const navList: { id: string, title: string }[] = [
    { id: 'props', title: 'Properties' },
    { id: 'events', title: 'Events' },
    { id: 'slots', title: 'Slots' },
];

const activeNavId = ref<string>(navList[0].id);

function getActiveClass(id: string) {
    if (activeNavId.value === id) {
        return 'nav_active';
    }
}

function setActiveNav(id: string): void {
    activeNavId.value = id;
}

// BLOCK "header"
type TypeHeader = {
    id: string,
    title: string,
}
const headerList: { [name: string]: TypeHeader[] } = {
    props: [
        { id: 'name', title: 'Name' },
        { id: 'type', title: 'Type' },
        { id: 'default', title: 'Default' },
    ],
    events: [
        { id: 'name', title: 'Name' },
        { id: 'parameters', title: 'Parameters' },
    ],
    slots: [
        { id: 'name', title: 'Name' },
        { id: 'default', title: 'Default' },
    ],
};

// BLOCK "body"
const items = computed<{ [name: string]: string }[]>(() => {
    switch (activeNavId.value) {
        case navList[0].id:
            return props.propList;
        case navList[1].id:
            return props.eventList;
        case navList[2].id:
            return props.slotList;
        default:
            return [];
    }
});

</script>

<style lang="sass" scoped>
.title
    font-weight: 600
    font-size: 38px
    color: $color-dark-1

.nav
    @extend %flex_row
    padding-left: 10px
    margin-top: 30px
    &-item
        font-size: 18px
        color: $color-dark-1
        margin-right: 20px
        cursor: pointer
    &_active
        color: $color-blue-1
        border-bottom: 2px solid $color-blue-1


.table
    width: 100%
    color: $color-dark-1
    border-radius: 8px
    border: 1px solid $color-gray-3
    margin-top: 20px

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
    &-column
        padding: 8px 6px
        flex: 1 1 0
        border-right: 1px solid $color-gray-3
        &:last-child
            border-right: none
    &-row-description
        padding: 8px 6px
        border-bottom: 1px solid $color-gray-3
        background: $color-gray-5
        &:last-child
            border-bottom: none

</style>