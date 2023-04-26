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
        checked?: boolean,
        placeholder?: string,
        variantList?: TypeVariant[],
    }
}

export interface TypeCodeTemplate {
    example: string,
    source: string,
}