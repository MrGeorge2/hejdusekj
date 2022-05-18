import { useState, useEffect, createRef } from 'react';

export default function useComponentVisible<TElement extends HTMLElement>(initialIsVisible: boolean){
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = createRef<TElement>();

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}