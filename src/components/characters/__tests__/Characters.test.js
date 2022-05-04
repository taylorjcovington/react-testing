import { render, screen } from '@testing-library/react'
import Characters from '../Characters'

const characters = [
  { name: "Luke" },
  { name: "Layla" },
  { name: "Han" },
  { name: "R2-D2" },
]


const renderCards = () => {
  render(<Characters characters={characters}/>)
}

describe('Characters component', () => {
  it('should render four Character cards', () => {
    renderCards()
    expect(screen.getAllByTestId(/character-card/i).length).toBe(4)
  })
})