import { useRef } from 'react';
import { Container, StyledInput } from './styles';
import { ComponentT } from './types';

export const Input: ComponentT = (props) => {
    const isError = !!props.error
    const error = props.error
    const inputElementRef = useRef<HTMLInputElement>(null);
    return (
        <Container onClick={() => inputElementRef.current?.focus()} isError={isError}>
            {isError ? <div className='error-message'>{error}</div> : null}
            <StyledInput ref={inputElementRef} {...props} isError={isError} />
        </Container>
        
    );
}