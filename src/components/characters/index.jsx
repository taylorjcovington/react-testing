import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../../graphql'
import Characters from './Characters'

export default function Index() {
  const { data, loading, error } = useQuery(
    GET_CHARACTERS
  )

  if (loading) <div>Loading...</div>
  console.log('data: ', data?.allPeople?.people)
  console.log('error: ', error)

  return (
    <Characters characters={data?.allPeople?.people || []}/>
  )
}