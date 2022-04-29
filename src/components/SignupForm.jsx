import '../App.css';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setSubmitted(false)
    setPasswordError(false)
    setConfirmPasswordError(false)

    const { email, password, confirmPassword } = formValues
    if (email && password) {
      if (password.length >= 5) {
        if (password === confirmPassword) {
          setSubmitted(true)
        } else {
          setConfirmPasswordError(true)
        }
      } else {
        setPasswordError(true)
      }
    } else {
      setError(true)
    }
  }

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <div className="App-header">
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            display: 'flex',
            flexDirection: 'column'
          }}  
          onSubmit={handleSubmit}
        >
        <TextField 
          type="email" 
          name="email" 
          label="Email" 
          variant="filled" 
          value={formValues.email}
          onChange={handleChange}
        />
         <TextField
          type="password" 
          name="password" 
          label="Password" 
          variant="filled" 
          value={formValues.password}
          onChange={handleChange}
        />
         <TextField
          type="password" 
          name="confirmPassword" 
          label="Confirm Password" 
          variant="filled" 
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
         <Button variant='contained' type='submit' >Submit</Button>
        </Box>
        {submitted && <div style={{color: 'black'}}>Submitted</div>}
        {error && <div style={{color: 'red'}}>Please enter a email and password</div>}
        {passwordError && <div style={{color: 'red'}}>Password must be greater than 5 charaters</div>}
        {confirmPasswordError && <div style={{color: 'red'}}>Passwords do not match</div>}
      </div>
    </div>
  );
}

export default SignupForm;
