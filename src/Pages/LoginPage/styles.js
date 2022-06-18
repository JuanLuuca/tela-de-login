import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Content = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 15px;
  background-color: #87c3fa;
`;
export const AreaLogin = styled.div`
  padding: 10px 40px;
`;
export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;

form {
    margin-top: 20px;

    img {
        height: 40px;
        width: 40px;
        margin: 20px 140px;
    }

    .welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    input {
        width: 100%;
        padding: 5px 10px;
        margin: 8px 0;
        box-sizing: border-box;
        border: none;
        outline: 0;
    }

    span {
        margin-top: 17px;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    
    strong {
        color: blue;
        cursor: pointer;
        margin-left: 5px;
    }

    .btn {
        display: flex;
        border: 0;
        margin-top: 10px;

       button {
            border: none;
            outline: none;
            padding: 10px;
            text-decoration: none;
            cursor: pointer;
            border-radius: 5px;
        }
    }
}
`;
