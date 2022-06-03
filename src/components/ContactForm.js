import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email,message);
        const data = {
            Name: name,
            Email: email,
            Message: message,
        }
        axios.post('https://sheet.best/api/sheets/cce4b7ac-9315-4b6b-ab9e-4c28aaf07bf5',data).then((response)=>{
            
        });
            // clearing form
            setName('');
            setEmail('');
            setMessage('');
    }
    return (
        <div>
            <FormStyles onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                        <input 
                            type="text"
                            id="name"    
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                        <input 
                            type="text"
                            id="email"    
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Message
                        <textarea 
                            type="text"
                            id="message"    
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Send</button>
            </FormStyles>
        </div>
    )
}

const FormStyles = styled.form`
    width: 100%;
    .form-group{
        width: 100%;
        margin-bottom: 1rem;
    }
    label{
        font-size: 1rem;
    }
    input,textarea{
        width: 100%;
        font-size: 1.1rem;
        padding: 2rem 3rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea{
        min-height: 200px;
        resize: vertical;
    }
    button[type='submit']{
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 1rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: .7rem 2rem;
        border-radius: 8px;
        cursor:pointer;
    }
`

export default ContactForm
