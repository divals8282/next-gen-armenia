interface PropsI  {
    error?: string;
    placeholder?: string;
    code: string,
    number: string;
    onChange: (phoneNumber: {
        number: string;
        code: string
    }) => void,
}

export type ComponentT = (props: PropsI) => JSX.Element;