interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    ref?: React.Ref<HTMLInputElement>
}

export default function Input({ className, ...props }: InputProps) {
    return (
        <input role="textbox" className={className} {...props}/>
    );
}
