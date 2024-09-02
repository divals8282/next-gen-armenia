interface PropsI {
    children: JSX.Element | JSX.Element[]
}

export type ComponentT = (props: PropsI) => JSX.Element