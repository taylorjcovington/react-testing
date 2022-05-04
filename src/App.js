import SignupForm from './components/SignupForm';
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from './graphql'

function App() {
  const { data, loading, error } = useQuery(
    GET_CHARACTERS
  )
  console.log('data: ', data.allPeople.people)
  console.log('error: ', error)

  return (
      <SignupForm />
  )
}

export default App;
