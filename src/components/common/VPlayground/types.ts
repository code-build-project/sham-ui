interface TypeVariant {
    id: string,
    name: string,
}

export interface TypeParameter {
    [name: string]: {
        id: string,
        elementType: string,
        title: string,
        value?: string,
        isChecked?: boolean,
        placeholder?: string,
        variantList?: TypeVariant[],
        isInline?: boolean,
    }
}