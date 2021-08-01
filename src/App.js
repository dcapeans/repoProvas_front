import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Form from "./components/Form"
import GlobalStyle from "./styles/GlobalStyles"

export default function App(){
    const [subject, setSubject] = useState("")
    const [subjectList, setSubjectList] = useState([])
    const [teachersList, setTeachersList] = useState([])
    const [formIsOpen, setFormIsOpen] = useState(false)

    useEffect(() => {
        getSubjects()
    }, [])

    useEffect(() => {
        axios.get("http://localhost:4000/teachers").
        then((res) => {
            if(subject.length > 0){
                const subjectWithTeachers = res.data.find(i => i.name === subject)
                setTeachersList(subjectWithTeachers.teachers)
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

    const toggleForm = () => {
        setFormIsOpen(!formIsOpen)
    }

    return(
        <>
            <GlobalStyle />
            <Container>
                <Title>RepoProvas</Title>
                <ButtonContainer>
                    <Button>por Disciplina</Button>
                    <Button>por Professor</Button>
                    <Button onClick={toggleForm}> + enviar prova</Button>
                </ButtonContainer>
                {formIsOpen 
                    && <Form subjectList={subjectList} teachersList={teachersList} setSubject={setSubject}/>}
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
