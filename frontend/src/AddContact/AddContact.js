import React, {  Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './AddContact.css'
import Select from 'react-select';
import { Button, Form, FormGroup, Label,  Input} from 'reactstrap';
class AddContact extends Component{
    state={
        FirstName:'',
        LastName:'',
        PhoneNumber:'',
        Gender:'',
        error_first_name:'',
        error_last_name:'',
        error_gender:'',
        error_phone_number:'',
        options:
        [
            {value:"Male",label:'Male'},
            {value:'Female', label:'Female'}
        ]
    }
    //Connecting to database and send fields 
    connectingDB=()=>
    {
        const url = "http://localhost:2222/backend/AddContact.php"
        const FirstName=this.state.FirstName
        const LastName=this.state.LastName
        const PhoneNumber=this.state.PhoneNumber
        const Gender=this.state.Gender.value
        axios.post(url,{FirstName,LastName,PhoneNumber,Gender},{headers:{'Content-Type':'application/json'}})
        .then(res=>{
            if(res.data.response==-1)
            {
                alert('The phone number already exists in the database!')
            }
            else
            {
                if(res.data.response==1)
                {
                alert('The contact is added to database successfully!')
                }
                else
                {
                   if(res.data.response==0)
                   {
                      alert('There is a problem in the server!, please try again!')
                   }
                }
        
            }
        })
    }

    ValidateFields=()=>
    {
        let error_first_name=''
        let error_last_name=''
        let error_phone_number=''
        let error_gender=''
        let error_fields_first_name=false
        let error_fields_last_name= false
        let error_fields_phone_number=false
        let error_fields_gender=false
        /*Check fields value */
        if(this.state.Gender==='')
        {
            error_gender='Error: you must select your gender!'
            this.setState({error_gender})
            error_fields_gender=true
        }
        else
        {
            error_gender=''
            this.setState({error_gender})
            error_fields_gender=false
        }
        if(this.state.FirstName==="")
        {
            error_first_name='Error: you must enter your first name!'
            this.setState({error_first_name})
            error_fields_first_name=true
        }
        else
        {
            error_first_name=''
            this.setState({error_first_name})
            error_fields_first_name=false
        }
        if (this.state.LastName==="")
        {
            error_last_name='Error: you must enter your last name!'
            this.setState({error_last_name})
            error_fields_last_name=true
        }
        else
        {
            error_last_name=''
            this.setState({error_last_name})
            error_fields_last_name=false
        }
        if (this.state.PhoneNumber==='')
        {
            error_phone_number='Error: you must enter your phone number!'
            this.setState({error_phone_number})
            error_fields_phone_number=true
        }
        else
        {
            /*Chek if the phone number contain only numbers using regular expression  */
            if(!/^[0-9]+$/.test(this.state.PhoneNumber))
            {
                error_phone_number='Error: your phone number must have only numbers!'
                this.setState({error_phone_number})
                error_phone_number=true
                error_fields_phone_number=true
            }
            else
            {
                error_phone_number=''
                this.setState({error_phone_number})
                error_fields_phone_number=false
            }
        }
        /*Check if all fields have no error*/
        if(error_fields_phone_number===true || error_fields_first_name===true || error_fields_gender===true ||  error_fields_last_name===true )
        {
            return false /*some or all fields have an error*/
        }
        else
        {
            return true /*form is validate, no error in the fields*/
        }
        

    }
    handleSubmit=(e)=>
    {
        e.preventDefault()/* to avoid refrech of the page  */
        if(this.ValidateFields()===true) /* check if the form is validate */
        {
            this.connectingDB() /* if it is true so connect to database */
        }
       
    }

    handledChange=(e)=> /*Updata state*/
    {
        const target= e.target
        const name= target.name
        const value=target.value
        this.setState
        ({
        [name]:value
        })

    }
    handleCancel=()=>/* if user click on Cancer, so, all fields must have a null value*/
    {
        this.setState
        ({
            FirstName:'',
            LastName:'',
            PhoneNumber:'',
            Gender:'',
            error_last_name:'',
            error_first_name:'',
            error_phone_number:'',
            error_gender:''

        })
    }
    handleChangeOption=(Gender)=>/*Update gender of state*/
    {
        this.setState
        ({
            Gender
        })
    }

render(){
    const {Gender}=this.state /*get value of gender from state*/
    return(
        <Form id="addContact" onSubmit={this.handleSubmit} noValidate>
        <Link className="btn btn-success ShowContactList" to='/'>Show Contact list</Link>

                <FormGroup>
                    <Label>First name:</Label>
                    <Input type='text'  id='first_name'
                            placeholder='First name' onChange={this.handledChange} 
                            value={this.state.FirstName} name='FirstName'/>
                    <p id='error_first_name'>{this.state.error_first_name}</p>
                </FormGroup>

                <FormGroup >
                     <Label>Last name:</Label>
                    <Input type='text'  id='last_name' placeholder='Last name' 
                        onChange={this.handledChange} value={this.state.LastName}
                        name='LastName'/>
                    <p id='error_last_name'>{this.state.error_last_name}</p>
                </FormGroup>

                <FormGroup>
                    <Label>Gender:</Label>
                    <Select 
                    value={Gender}
                    onChange={this.handleChangeOption}
                    options={this.state.options}
                    />
                   <p id='error_gender'>{this.state.error_gender}</p>
                </FormGroup>

                <FormGroup >
                     <Label>Phone number:</Label>
                     <Input type='text'  id='phone_number' placeholder='Phone number' 
                          onChange={this.handledChange} value={this.state.PhoneNumber}
                          name='PhoneNumber'/>
                 <p id='error_phone_number'>{this.state.error_phone_number}</p>
                </FormGroup>
                
                <Button type='submit' className='btn  btn-success align-self-start mr-auto btnsb' size='md'>Add new contact</Button>
                <Button type='button'  className='btn  btn-secondaryalign-self-end ml-auto clearFields' onClick={this.handleCancel}  size='md'>Cancel</Button>

            </Form>
        )
}
    }
export default AddContact