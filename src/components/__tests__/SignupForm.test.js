import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupForm from '../SignupForm';

const setup = () => render(<SignupForm />)

const typeIntoForm = ({email, password, confirmPassword}) => {
  const emailInputEl = screen.getByRole('textbox', { name: /email/i })
  const passwordInputEl = screen.getByLabelText("Password")
  const confirmPasswordEl = screen.getByLabelText(/confirm password/i)
  if (email) {
    userEvent.type(emailInputEl,  email)
  }
  if (password) {
    userEvent.type(passwordInputEl, password)
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordEl, confirmPassword)
  }

  return { emailInputEl, passwordInputEl, confirmPasswordEl }
}

const submitForm = () => {
  userEvent.click(screen.getByRole('button', {
    name: /submit/i
  }))
}

// beforeEach(() => {
//   // Runs for each test
//   // you should not put render(<App /> inside beforeEach)
// })

// beforeAll(() => {
//   // runs only once before all the tests start
//   // runs before beforeEach
// })

// afterAll(() => {
//   // runs after all the tests have run
// })

// afterEach(() => {
//   // runs for each test
//   // clean up goes here
// })

const password = 'this-is-my-password'
const email = 'hello@email.com'

describe('Sign up form tests', () => {
  it('should render with inputs blank', () => {
    setup();
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe("")
    expect(screen.getByLabelText("Password").value).toBe("")
    
  })
  
  it('should allow user to enter email, password, and confirm password', () => {
    setup()
    
    const { 
      emailInputEl, 
      passwordInputEl, 
      confirmPasswordEl } 
      = typeIntoForm({email, password, confirmPassword: password})

    expect(emailInputEl.value).toBe(email)
    expect(passwordInputEl.value).toBe(password)
    expect(confirmPasswordEl.value).toBe(password)
  })

  it('should show submitted when user submits form', () => {
    setup()
    expect(screen.queryByText(/submitted/i)).not.toBeInTheDocument()
    typeIntoForm({email, password, confirmPassword: password})
    submitForm()
    
    expect(screen.getByText(/submitted/i)).toBeInTheDocument()
    expect(screen.queryByText(/password must be greater than 5 charaters/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/passwords do not match/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/please enter a email and password/i)).not.toBeInTheDocument()

  })

  describe('Sign up form error handles tests', () => {
    // Doing it this way to show you can add a nested describe
    // and you can add hooks like beforeEach and they only run for these

    // beforeEach(() => {
    //   //this will run before each of just these
    // })
    it('should show error if submitted with no email and no password', () => {
      setup()
     submitForm()
  
      expect(screen.getByText(/please enter a email and password/i)).toBeInTheDocument()
    })
  
    it('should show password error if password and confirm password do not match', () => {
      setup()
      expect(screen.queryByText(/passwords do not match/i)).not.toBeInTheDocument()
      
      typeIntoForm({email, password, confirmPassword: 'password1!'})
      submitForm()
  
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument()
  
    })
  
    it('should show error if password is less than 5 characters', () => {
      setup()
  
      expect(screen.queryByText(/password must be greater than 5 charaters/i)).not.toBeInTheDocument()
      typeIntoForm({email, password: 'pass'})
  
      userEvent.click(screen.getByRole('button', {
        name: /submit/i
      }))
  
      expect(screen.getByText(/password must be greater than 5 charaters/i)).toBeInTheDocument()
  
    })
  })
})