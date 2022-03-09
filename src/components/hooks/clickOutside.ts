import { RefObject } from 'react';

export default function clickOutside(ref: RefObject<HTMLElement>, onClickOutside: (e: MouseEvent) => void) {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onClickOutside(event);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}
