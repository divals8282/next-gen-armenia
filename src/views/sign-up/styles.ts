import styled from "styled-components";

export const Container = styled.div`
    .block {
        margin: 16px 0;
    }
    .block-divided {
        margin: 16px 0;
        display: flex;
        gap: 16px;
    }

    .head {
        text-align: center;
        color: #194866;
        .title {
            font-size: 32px;
            margin-bottom: 16px;
        }
        .descr {
            font-size: 18px;
        }
        .divider {
            width: 100%;
            height: 1px;
            background-color: #19486680;
            margin: 16px 0;
        }
    }
    .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 60px;
    }
`