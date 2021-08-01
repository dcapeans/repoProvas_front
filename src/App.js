import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"

export default function App(){
    const [subject, setSubject] = useState("")
    const [subjectList, setSubjectList] = useState([])
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getSubjects()
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4000/teachers").
        then((res) => {
            if(subject.length > 0){
                const subjectWithTeachers = res.data.find(i => i.name === subject)
                setTeachers(subjectWithTeachers.teachers)
            }
        })
        .catch((e) => {
            console.log(e)
        })
    }, [subject])

    const getSubjects = () => {
        axios.get("http://localhost:4000/subjects").
        then((res) => {
            setSubjectList(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    console.log(teachers)
    console.log(subject)
    return(
        <>
            <GlobalStyle />
            <Container>
                <Title>RepoProvas</Title>
                <ButtonContainer>
                    <Button>por Disciplina</Button>
                    <Button>por Professor</Button>
                    <Button> + enviar prova</Button>
                </ButtonContainer>
                <Form>
                    <div>
                        <label for="name">Nome:</label>
                        <input id="name" placeholder="Digite aqui o nome"></input>
                    </div>
                    <div>
                        <label for="link">Link:</label>
                        <input id="link" placeholder="Insira aqui o link do pdf"></input>
                    </div>
                    <div>
                        <label for="link">Categoria:</label>
                        <select id="categories-list">
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P3">P3</option>
                            <option value="2CH">2CH</option>
                        </select>
                    </div>
                    <div>
                        <label for="subjects">Disciplina:</label>
                        <select id="subjects" onChange={(e) => setSubject(e.target.value)}>
                            {subjectList.map(item => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div display={teachers}>
                        <label for="teachers">Professores:</label>
                        <select id="teachers" onChange={(e) => setSubject(e.target.value)}>
                            {teachers.map(item => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </Form> 
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
    button:last-child{
        background-color: #009960;
    }
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
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 50px auto;
    input{
        margin-left: 10px;
        margin-top: 15px;
        border-style: none;
        height: 35px;
        width: 500px;
    }
    div{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        label{
            width: 17%;
        }
    }
`