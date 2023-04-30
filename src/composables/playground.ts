import type { TypeParameter } from '@/components/common/VPlayground/types';

export function useParameter() {
    type TypeData = {
        key: string,
        value: string | boolean,
    }
    
    function setParameter(playground: TypeParameter, data: TypeData): void {
        if (typeof data.value === 'string') {
            playground[data.key].value = data.value as string;
        } else {
            playground[data.key].checked = data.value as boolean;
        }
    }
    
    return { setParameter };
}