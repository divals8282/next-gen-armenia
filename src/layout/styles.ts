import styled from "styled-components";

export const Container = styled.div`
    header {
        margin-bottom: 48px;
        .head {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .logo-container {
                margin: 10px auto;
            }
            .language-selector-container {
                display: flex;
                justify-content: flex-end;
                .language-selector {
                    margin-top: 16px;
                    margin-right: 16px;
                    display: flex;
                    gap: 6px;
                    li.active {
                        color: #f8f8f8;
                    }
                    li {
                        cursor: pointer;
                        font-weight: 700;
                        color: #FFFFFF80;
                    }
                }


            }
        }
        .navigation-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            @media only screen and (max-width:1450px) {
                grid-template-columns: 1fr 202px;
                & > div:first-child {
                   display : none;
                }
            }
            @media only screen and (max-width:942px) {
                .login-button-container {
                    flex: 0 0 100px
                }
            }
            ul {
                margin: 5px auto;
                display: flex;
                gap: 48px;
                li {
                    position: relative;
                    font-weight: 700;
                    cursor: pointer;
                    color: #ffffff;
                }
                li.active::after {
                    content: "";
                    position: absolute;
                    height: 2px;
                    top: calc(100% + 4px);
                    width: 100%;
                    background-color: white;
                    left: 0;
                }
            }
            .login-button-container {
                display: flex;
                justify-content: flex-end;
                .login-button {
                    cursor: pointer;
                    margin-right: 120px;
                    background: none;
                    outline: 0;
                    border: none;
                    color: white;
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-family: "Assistant";
                    svg {
                        margin-right: 8px;
                    }
                }
            }
        }
        height: 120px;
        background-color: var(--primary);
    }
    
`