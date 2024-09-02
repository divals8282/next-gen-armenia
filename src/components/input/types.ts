interface PropsI extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export type ComponentT = (props: PropsI) => JSX.Element;