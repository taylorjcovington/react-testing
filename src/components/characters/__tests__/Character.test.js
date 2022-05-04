import { render, screen } from '@testing-library/react'
import Character from '../Character'
import userEvent from '@testing-library/user-event'

const url = 'https://cdn.pixabay.com/photo/2017/07/25/22/54/lego-2539844_1280.jpg'

const renderCard = () => {
  render(
    <Character 
      name={'Han Solo'} 
      gender="male"
      favoured={false}
      img={url}
    />
  )
}

describe('Character tests', () => {
  it('should render character name', () => {
    renderCard() 
    expect(screen.getByRole('heading', { name: /han solo/i })).toBeInTheDocument()
  })
  it('should render character gender', () => {
    renderCard() 
    expect(screen.getByRole('heading', { name: /male/i })).toBeInTheDocument()
  })
  it('should render image', () => {
    renderCard() 
    expect(screen.getByRole('img')).toHaveAttribute('src', url)
  })
  it('should render with false favorite', () => {
    renderCard() 
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
  })
  it('should toggle favorite onclick', () => {
    renderCard()
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')

  })
})