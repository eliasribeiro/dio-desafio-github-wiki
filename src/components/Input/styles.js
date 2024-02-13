import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width:80%;

    margin: 20px;
    input {
        background:transparent;
        border: 0;
        padding-left: 12px;

        width: calc(100% - 12px);
        height: 62px;
        color: #fff;
        font-size: 20px;
    }
`