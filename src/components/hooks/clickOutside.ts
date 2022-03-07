import { RefObject, useEffect } from 'react';

export default function clickOutside(ref: RefObject<HTMLElement>, onClickOutside: () => void) {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onClickOutside();
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}
