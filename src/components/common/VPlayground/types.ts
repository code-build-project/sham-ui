interface TypeVariant {
    id: string,
    name: string,
}

export interface TypeParameter {
    [name: string]: {
        id: string,
        elementType: string,
        title: string,
        placeholder?: string,
        variantList?: TypeVariant[],
        isInline?: boolean,
    }
}

export interface TypeParameterValue {
    [name: string]: string | boolean | string[],
}

export interface TypeData {
    key: string,
    value: string | boolean,
}