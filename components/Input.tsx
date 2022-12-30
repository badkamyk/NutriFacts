import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    ref?: React.Ref<HTMLInputElement>
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
    const { className, ...rest } = props;
    return (
        <input className={className} ref={ref} {...rest} />
    )
});
