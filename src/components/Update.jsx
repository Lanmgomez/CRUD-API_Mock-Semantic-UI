import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate()  

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [id, setID] = useState(null);

    const datas = {
      firstName, lastName, checkbox
  }

    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setFirstName(localStorage.getItem('First Name'));
      setLastName(localStorage.getItem('Last Name'));
      setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const updateAPIData = () => {
      axios.put(`https://64009b6829deaba5cb3b893a.mockapi.io/CRUD/${id}`, datas)
           .then(() => { navigate('/read') })
    }

  return (
    <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input 
            placeholder='First Name' 
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}  
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input 
            placeholder='Last Name' 
            onChange={(e) => setLastName(e.target.value)} 
            value={lastName}  
          />
        </Form.Field>
        <Form.Field>
          <Checkbox 
            label='I agree to the Terms and Conditions' 
            onChange={(e) => setCheckbox(!checkbox)} 
            checked={checkbox}  
          />
        </Form.Field>
        <Button onClick={updateAPIData} type='submit'>Submit</Button>
    </Form>
  )
}

export default Update