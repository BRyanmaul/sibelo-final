import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'mt-1 block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary rounded-lg focus:border-none focus:border-primary ' +
                className
            }
            ref={input}
        />
    );
});
