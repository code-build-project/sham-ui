<template lang="pug">
.datepicker
    .label(v-if="isLabel")
        slot {{ label }}

    v-input(
        :modelValue="modelValue"
        :placeholder="placeholder"
        :isDisabled="isDisabled"
        :isReadonly="isReadonly"
        @input="onInput"
        @focus="onFocus('isInput')"
        @blur="onBlur('isInput')"
    )
        template(v-slot:left)
            slot(name="left")
                v-icon.icon-calendar(path="img/calendar.svg")

        template(v-slot:right)
            slot(name="right")
                div(
                    v-show="isIconClear"
                    @click.stop="clearField"
                )
                    v-icon.icon-clear(path="img/clearField.svg")

    .calendar(
        v-show="isOpenCalendar"
        @focus="onFocus('isCalendar')"
        @focusout="onBlur('isCalendar')"
        tabindex="-1"
    )
        .calendar-heaeder
            v-icon.prev(
                path="img/chevron.svg"
                @click="setMonth(false)"
            )
            select.calendar-select(
                v-model="monthValue"
                @focus="onFocus('isMonth')"
                @blur="onBlur('isMonth')"
            )
                option(
                    v-for="month in monthList"
                    :key="month.id"
                    :value="month.id"
                ) {{ month.name }}
            select.calendar-select(
                v-model="yearValue"
                @focus="onFocus('isYear')"
                @blur="onBlur('isYear')"
            )
                option(
                    v-for="year in yearList"
                    :key="year"
                    :value="year"
                ) {{ year }}
            v-icon.next(
                path="img/chevron.svg"
                @click="setMonth(true)"
            )

        .calendar-body
            .week
                .week-day(
                    v-for="dayWeek in dayWeekList"
                    :key="dayWeek"
                ) {{ dayWeek.toUpperCase() }}
            .day-list
                .day-row(
                    v-for="(week, index) in dayMonthList"
                    :key="index"
                )
                    .day(
                        v-for="day in week"
                        :key="day"
                        :class="getDayClasses(day)"
                        @click="setDay(day)"
                    ) {{ day }}

</template>

<script setup lang="ts">
import { ref, reactive, computed, useSlots} from 'vue';
import VIcon from '@/components/common/VIcon/index.vue';
import VInput from '@/components/common/VInput/index.vue';
import formatters from '@/helpers/formatters';

const props = withDefaults(
    defineProps<{
        modelValue?: string,
        placeholder?: string,
        isDisabled?: boolean,
        isReadonly?: boolean,
        label?: string,
    }>(),
    {
        modelValue: '',
        placeholder: '',
        isDisabled: false,
        isReadonly: false,
        label: '',
    },
);

const emit = defineEmits<{
  (e: 'update:modelValue', date: string): void
}>();

let yearValue = ref<number>(new Date().getFullYear());
let monthValue = ref<number>(new Date().getMonth());
let dayValue = ref<number>(new Date().getDate());

const yearList = computed<number[]>(() => {
    let yearsArray: number[] = [];

    for (let i = 1980; i <= 2064; i++) {
        yearsArray.push(i);
    }

    return yearsArray;
});

const monthList = [
    { id: 0, name: 'Январь' },
    { id: 1, name: 'Февраль' },
    { id: 2, name: 'Март' },
    { id: 3, name: 'Апрель' },
    { id: 4, name: 'Май' },
    { id: 5, name: 'Июнь' },
    { id: 6, name: 'Июль' },
    { id: 7, name: 'Август' },
    { id: 8, name: 'Сентябрь' },
    { id: 9, name: 'Октябрь' },
    { id: 10, name: 'Ноябрь' },
    { id: 11, name: 'Декабрь' },
];

const dayWeekList = [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const dayMonthList = computed<number[][]>(() => {
    let arrayIndex = 0;
    let daysArray: number[][] = [[]];
    const daysInMonth: number = new Date(yearValue.value, monthValue.value + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        daysArray[arrayIndex].push(i);

        if (i % 7 === 0) {
            arrayIndex++;
            daysArray.push([]);
        }
    }

    return daysArray;
});

function getDayClasses(day: number): object {
    return {
        'day-active': dayValue.value === day,
    };
}

function setMonth(operation: boolean): void {
    let newIndex: number = 0;
    const lastIndexMonth = monthList.length - 1;
    const indexMonth = monthList.findIndex(item => item.id === monthValue.value);

    if (operation) {        
        newIndex = indexMonth === lastIndexMonth ? 0 : indexMonth + 1;
    } else {
        newIndex = indexMonth === 0 ? lastIndexMonth : indexMonth - 1;
    }

    monthValue.value = monthList[newIndex].id;
}

function setDay(day: number): void {
    dayValue.value = day;

    const date = new Date(yearValue.value, monthValue.value, dayValue.value);
    const newDate = date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    setTimeout( () => {
        emit('update:modelValue', newDate);
        onBlur('isCalendar');
    }, 100);
}

// BLOCK "label"
const slots = useSlots();

const isLabel = computed<boolean>(() => {
    return !!(slots.default || props.label);
});

// BLOCK "focus and blur"
const focusList: { [key: string]: boolean } = reactive({
    isInput: false,
    isMonth: false,
    isYear: false,
    isCalendar: false,
});

const isOpenCalendar = computed<boolean>(() => {
    return Object.values(focusList).some(item => !!item);
});

function onFocus(key: string): void {
    focusList[key] = true;
}

function onBlur(key: string): void {
    setTimeout(() => {
        focusList[key] = false;
        checkDate();
    }, 100);
}

// BLOCK "input"
function onInput(event: Event) {
    (event.target as HTMLInputElement).value = formatters.date((event.target as HTMLInputElement).value);
    emit('update:modelValue', (event.target as HTMLInputElement).value);
}

function checkDate(): void {
    if (props.modelValue && props.modelValue.length < 10 && !isOpenCalendar.value) {
        emit('update:modelValue', '');
    }
}

// BLOCK "clear"
const isIconClear = computed<boolean>(() => {
    return  !!props.modelValue.length;
});

function clearField(): void {
    emit('update:modelValue', '');
}

</script>

<style scoped lang="sass">
.datepicker
    position: relative

.label
    margin-left: 5px
    font-weight: 500
    font-size: 12px
    color: $color-gray-2
    margin-left: 5px
    margin-bottom: 5px

.icon-calendar
    min-width: 20px
    max-width: 20px
    height: 20px
    fill: $color-gray-2
    margin-right: 5px

.icon-clear
    width: 20px
    height: 20px
    fill: $color-gray-2
    cursor: pointer

.calendar
    position: absolute
    padding: 15px
    background: $color-gray-4
    border-radius: 4px
    margin-top: 10px
    color: $color-dark-1

.calendar-heaeder
    @extend %flex_row-center-between

.prev, .next
    min-width: 35px
    max-width: 35px
    height: 35px
    fill: $color-gray-2
    transform: rotate(90deg)
    border: 1px solid $color-gray-2
    border-radius: 8px
    cursor: pointer
    &:hover
        border-color: $color-gray-1

.next
    transform: rotate(270deg)

.calendar-select
    padding: 0 5px
    margin: 0 5px
    height: 35px
    border-radius: 8px
    border-color: $color-gray-2
    cursor: pointer
    background: transparent
    &:hover
        border-color: $color-gray-1

.calendar-body
    margin-top: 15px

.week
    @extend %flex_row-center
    padding-bottom: 10px
    border-bottom: 2px solid $color-gray-3

.week-day
    color: $color-blue-1
    width: 35px

.day-list
    margin-top: 10px

.day-row
    @extend %flex_row-center
    margin-top: 10px

.day
    @extend %flex_row-center-center
    color: $color-dark-1
    width: 30px
    height: 30px
    margin-right: 5px
    border-radius: 50%
    line-height: 1px
    cursor: pointer
    &:hover
        background: $color-gray-3
    &-active
        background: $color-gray-3

</style>