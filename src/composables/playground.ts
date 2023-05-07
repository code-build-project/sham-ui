import type { TypeData } from '@/components/common/VPlayground/types';

export function useParameter() {
    function setValue(playgroundValues: { [name: string]: string | boolean | string[] }, data: TypeData): void {
        playgroundValues[data.key] = data.value;
    }
    
    return { setValue };
}