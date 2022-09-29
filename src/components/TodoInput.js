import React, {useState} from "react"

const TodoInput = () => {

    const [input, setInput] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        setInput("")
        // be able to log out the input value when submitted.
        // research controlled components / forms withing react
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" value={input} onChange={handleChange}/>
            <input type= "submit"/>
        </form>
    )
}

export default TodoInput