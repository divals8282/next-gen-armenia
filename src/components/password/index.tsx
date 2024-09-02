import { useEffect, useRef, useState } from 'react';
import { Container, StyledInput } from './styles';
import { ComponentT } from './types';
import { ReactComponent as WatchIconSVG } from "../../assets/watch.svg"
import { ReactComponent as UnWatchIconSVG } from "../../assets/unwatch.svg";


export const Password: ComponentT = (props) => {
    const isError = !!props.error
    const error = props.error
    const inputElementRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const value = inputElementRef.current.value
        window.setTimeout(() => {
            inputElementRef.current.setSelectionRange(value.length,value.length)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[showPassword])

    return (
        <Container onClick={() => inputElementRef.current?.focus()} isError={isError}>
            {isError ? <div className='error-message'>{error}</div> : null}
            <StyledInput type={showPassword ? "text" : 'password'} ref={inputElementRef} isError={isError} {...props}/>
            <div className='watch-unwatch-button' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <UnWatchIconSVG /> : <WatchIconSVG /> }
            </div>
        </Container>
        
    );
}