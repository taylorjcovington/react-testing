import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../../graphql'
import Character from './Character'

const url = 'https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg'

export default function Characters() {
  const { data, loading, error } = useQuery(
    GET_CHARACTERS
  )
  //   if (data) {
  //     setAllCharacters(data?.allPeople?.people)
  //   }


  console.log('data: ', data?.allPeople?.people)
  console.log('error: ', error)

  return (
    <Character name={"Han Solo"} gender={'male'} favoured={false} img={url}/>
  )
}