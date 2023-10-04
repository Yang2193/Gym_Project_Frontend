import React from "react";
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    width: 768px;
    height : 660px;
    justify-content: center;
    align-items: center;
    flex-flow: column;

`

const NavBar = styled.div`

`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 120px;
    height : 80px;
    background-color: dimgrey;
    color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    

`

const Home = () => {

    return(
        <Body>
            <Container>
                <Button>회원 가입</Button>
                <Button>회원 조회</Button>
                <Button>회원 관리</Button>
            </Container>
        </Body>
    )
}

export default Home;
