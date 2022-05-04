import Character from './Character'

const url = 'https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg'

export default function Characters({characters}) {
  return (
    <>
      {characters.map((c, i) => (
        <Character name={c.name} gender={c.gender} favoured={i % 2} img={url}/>
      ))}
    </>
  )
}