import { RefObject } from 'react';

export default function clickOutside(ref: Array<RefObject<HTMLElement>>, onClickOutside: (e: MouseEvent) => void) {
    const handleClickOutside = (event: MouseEvent) => {
        ref.every((e) => e.current && !e.current.contains(event.target as Node)) ? onClickOutside(event) : '';
    };
    if (typeof window != 'undefined') {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        if (typeof window != 'undefined') {
            document.addEventListener('mousedown', handleClickOutside);
        }
    };
}
