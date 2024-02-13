import styled from "styled-components";
export const ItemContainer = styled.div`
    width: calc(80% - 48px);
    padding: 18px 24px 32px 24px;

    background-color: #171b20;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    

    div.options {
        margin-top: 40px;
    }
    h3 {
        font-size: 28px;
        color: #FAFAFA;
    }
    p {
        font-size: 12px;
        color: #FAFAFA60;

    }
    hr {
        color: #FAFAFA;
        margin-top: 20px 0;
    }
    a {
        border-radius: 8px;
        background-color: #383c42;
        padding:  7px 10px;
        height: 24px;
        margin-right: 20px;
        text-decoration: none;
        color:white;
    }
    a:hover{
        background-color: #4e5257;
    }
    a:hover {
        cursor: pointer;
    }
    a.remover {
        background-color: #ff4c4c;
        margin-top: 20px;
    }
    a.remover:hover {
        background-color: #ff0000;
        margin-top: 20px;
    }
`