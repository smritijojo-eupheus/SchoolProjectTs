import * as React from 'react';
import eupheus_logo from '../../assest/eupheus_logo.png';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MyFormValues {
  empcode: string;
  password:string;

}



const Login: React.FC<{}> = () => {
const [empcode,setempcode]=useState('');
const [password,setpassword]=useState('');
  
  const navigate=useNavigate();
  async function createUser() {
    try {
      
      const { data, status } = await axios.post(
        'https://stageapi.eupheusapp.com/api/auth/signin',
        { empCode: empcode, password: password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
  
      // console.log(JSON.stringify(data, null, 4));
  
      console.log(status);
console.log(data);
{data.company==="Euphues" && data.type==="user"? navigate('/user'):alert(JSON.stringify(data.message))}

} catch (error) {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
  } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
}
}

  
  
  const initialValues: MyFormValues = { empcode:'' , password:''};
  return (
    <div className='flex flex-col gap-2 w-[60%] sm:w-[30%]  p-5 shadow-xl shadow-slate-400 bg-white rounded-sm'>
      <div className='flex justify-center border-b-slate-400'>
      <img src={eupheus_logo} className="w-[40%] mb-3" alt="img"></img>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          setempcode(values.empcode);
          setpassword(values.password);
          createUser();

          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="EmpCode">EmpCode</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <Field id="EmpCode" name="empcode" placeholder="EmpCode" className="border-2 border-black mb-3 rounded-md" /><br></br>
          {/* <TextField id="Email" label="Email" variant="outlined" name="Email" placeholder='Email'/> */}
          <label htmlFor="Password">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field className="border-2 border-black mb-3 rounded-md" id="password" name="password" placeholder="Password" type="Password"/><br></br>
          <div className='flex justify-center'>
          <Button type="submit" variant='contained' >Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;