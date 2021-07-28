import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"

export default function App(){
    return(
        <>
            <GlobalStyle />
            <Container>
                <Title>RepoProvas</Title>
                <ButtonContainer>
                    <Button>por Disciplina</Button>
                    <Button>por Professor</Button>
                </ButtonContainer> 
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const Title = styled.h1`
    width: fit-content;
    margin: 7% auto 30px auto;
    font-size: 70px;
    font-weight: bold;
    color: #3FCEA6;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    width: 200px;
    height: 40px;
    margin: 0 20px;
    background-color: #555;
    border-style: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`