interface PropsI {
    error?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    options: {
        label: string;
        value: string;
    }[]
}

export type ComponentT = (props: PropsI) => JSX.Element;