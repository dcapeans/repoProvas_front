import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

export default function Form({
    teachersList, 
    subjectList, 
    subject, 
    setSubject, 
    teacher, 
    setTeacher, 
    category, 
    setCategory
}){
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    console.log(category)
    console.log(teacher)

    const sendNewExam = () => {
        const body = {
            name,
            link,
            category_id: +category,
            teacher_id: +teacher,
            subject_id: +subject 
        }
        axios.post("http://localhost:4000/createExam", body)
        .then(() => {
            alert("Prova enviada com sucesso")
        })
        .catch((e) => {
            console.log(e)
            alert("Ocorreu um erro, tente novamente")
        })
    }
    return(
        <FormContainer onSubmit={sendNewExam}>
            <div>
                <label for="name">Nome:</label>
                <input id="name" placeholder="Digite aqui o nome" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label for="link">Link:</label>
                <input id="link" placeholder="Insira aqui o link do pdf" onChange={(e) => setLink(e.target.value)}></input>
            </div>
            <div>
                <label for="link">Categoria:</label>
                <select id="categories-list" onChange={(e) => setCategory(e.target.value)}>
                    <option value="1">P1</option>
                    <option value="2">P2</option>
                    <option value="3">P3</option>
                    <option value="4">2CH</option>
                    <option value="5">Outras</option>
                </select>
            </div>
            <div>
                <label for="subjects">Disciplina:</label>
                <select id="subjects" onChange={(e) => setSubject(this)}>
                    {subjectList.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label for="teachers">Professores:</label>
                <select id="teachers" onChange={(e) => setTeacher(e.target.value)}>
                    {teachersList.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Enviar</button>
        </FormContainer> 
    )
}

const FormContainer = styled.form`
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
    button{
        width: 120px;
        aspect-ratio: 3 / 1;
        font-size: 20px;
        color: #fff;
        border-style: none;
        background-color: #3FCEA6;
        border-radius: 10px;
        cursor: pointer;
    }
`

