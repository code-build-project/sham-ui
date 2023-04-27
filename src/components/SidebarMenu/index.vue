<template lang="pug">
aside.sidebar
    .header
        | ShamUI
        .version V 1.0

    .components
        .components-title
            span COMPONENTS
            span 26

        router-link.components-link(
            v-for="link in links"
            active-class="components-link_active"
            :key="link.id"
            :to="link.path"
        )
            | {{ link.name }}
            v-icon.components-link-icon(path="img/arrow.svg")

</template>

<script setup lang="ts">
import VIcon from '@/components/common/VIcon/index.vue';
import type { TypeLink } from '@/components/SidebarMenu/types';

const links: TypeLink[] = [
    { id: 1, name: 'Alert', path: '/alert' },
    { id: 2, name: 'Button', path: '/button' },
    { id: 3, name: 'Input', path: '/input' },
];
</script>

<style scoped lang="sass">
.sidebar
    width: 300px
    height: 100%
    background: $color-dark-1

.header
    @extend .flex_row-center
    height: 64px
    padding-left: 32px
    font-size: 20px
    font-weight: 600
    border-bottom: 1px solid rgba(255, 255, 255, 0.08)

.version
    @extend .flex_row-center-center
    width: 43px
    height: 24px
    background: rgba(255, 255, 255, 0.08)
    border-radius: 55px
    font-weight: 600
    font-size: 12px
    margin-left: 8px
    line-height: 12px

.components
    padding: 32px 16px
    font-weight: 600
    &-title
        @extend .flex_row-start-between
        padding: 0 16px
        margin-bottom: 8px
        color: rgba(255, 255, 255, 0.24)
    &-link
        @extend .flex_row-center-between
        height: 44px
        padding: 0 16px
        border-radius: 8px
        &:hover
            background: rgba(255, 255, 255, 0.03)

    &-link-icon
        width: 20px
        height: 20px
        fill: transparent
    &-link_active
        background: rgba(255, 255, 255, 0.08)
        .components-link-icon
            fill: rgba(255, 255, 255, 0.5)

@media screen and (max-width: 1440px)
    .sidebar
        width: 260px

</style>