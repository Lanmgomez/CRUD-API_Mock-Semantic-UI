import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

const Read = () => {

  const [APIData, setAPIData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://64009b6829deaba5cb3b893a.mockapi.io/CRUD`)
      .then((response) => { setAPIData(response.data) })
  }, [])

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Read