interface PropsI {
    error?: string;
    placeholder?: string;
    value: string[],
    onChange: (values: string[]) => void;
    options: {
        label: string;
        value: string;
    }[]
}

export type ComponentT = (props: PropsI) => JSX.Element;