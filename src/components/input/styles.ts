import styled from 'styled-components';

export const Container = styled.div<{
    isError?: boolean;
    errorMessage?: string;
}>`
    cursor: text;
    position: absolute;
    display: flex;
    align-items: center;
    height: 48px;
    border-radius: 10px;
    border: 0.5px solid ${({isError}) => isError ? 'red' : '#194866CC'};
    padding-left: 16px;
    width: 100%;
    color: #194866;
    position: relative;
    .error-message {
        position: absolute;
        top: -8px;
        background-color: white;
        color: red;
    }
`

export const StyledInput = styled.input<{
    isError?: boolean;
}>`
    height: 20px;
    appearance: unset;
    font-size: 16px;
    width: 100%;
    font-family: "Assistant";
    color: #194866;
    outline: 0;
    border: none;
    &::placeholder {
        color: ${({isError}) => isError ? 'red' : '#194866'};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`