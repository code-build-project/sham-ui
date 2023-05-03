import type { TypeParameter, TypeData } from '@/components/common/VPlayground/types';

export function useParameter() {    
    function setParameter(playground: TypeParameter, data: TypeData): void {
        if (typeof data.value === 'string') {
            playground[data.key].value = data.value as string;
        } else {
            playground[data.key].isChecked = data.value as boolean;
        }
    }
    
    return { setParameter };
}