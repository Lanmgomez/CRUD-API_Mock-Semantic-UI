import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Read = () => {

  // get api data
  const [APIData, setAPIData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://64009b6829deaba5cb3b893a.mockapi.io/CRUD`)
      .then((response) => { setAPIData(response.data) })
  }, [])

  const setDataID = (data) => {
    console.log(data);

    let { id, firstName, lastName, checkbox } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('First Name', firstName);
      localStorage.setItem('Last Name', lastName);
      localStorage.setItem('Checkbox Value', checkbox)
 }

  const onDelete = (id) => {
    axios.delete(`https://64009b6829deaba5cb3b893a.mockapi.io/CRUD/${id}`)
      .then(() => { 
        const updatedList = APIData.filter((item) => item.id !== id)
          setAPIData(updatedList)
       })
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row key={data.id} id={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
              <Table.Cell> 
                <Link to='/update'>
                  <Button onClick={() => setDataID(data)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell> 
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Read