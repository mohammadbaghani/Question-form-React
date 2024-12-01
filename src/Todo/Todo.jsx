import React, { Component } from 'react'
import './Todo.css'
import { Table, Modal, Button, Form } from 'react-bootstrap'




export default class Todo extends Component {









    render() {
        return (
            <>

                <Table striped bordered hover>

                    <tbody className='tbody'>

                        <tr className='table-row'>
                            <td>{this.props.t}</td>




                            <td>{this.props.title}</td>
                            <td>{this.props.id}</td>


                        </tr>

                    </tbody>
                </Table>


            </>
        )
    }
}