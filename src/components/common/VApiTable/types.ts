interface TypeTableItem {
    [key: string]: string;
    name: string,
}

export interface TypeTableProp extends TypeTableItem {
    type: string,
    default: string,
    description: string,
}

export interface TypeTableEvent extends TypeTableItem {
    parameters: string,
    description: string,
}

export interface TypeTableSlot extends TypeTableItem {
    default: string,
    description: string,
}

export interface TypeApiTable {
    props: TypeTableProp[],
    events: TypeTableEvent[],
    slots: TypeTableSlot[],
}