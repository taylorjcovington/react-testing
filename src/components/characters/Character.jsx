import { useState } from "react"
import { Card, CardContent, CardMedia, ToggleButton } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Character({name, gender, favoured = false, img}) {
  const [isFavoured, setIsFavoured] = useState(favoured)

  return (
    <Card sx={{ maxWidth: 345 }} data-testid="character-card">
      <CardMedia
        component="img"
        height="240"
        image={img}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <h2>{name}</h2>
        <h3>{gender}</h3>
    
        <ToggleButton
          value="check"
          selected={isFavoured}
          onClick={() => setIsFavoured(!isFavoured)}
        >
          <FavoriteIcon color={isFavoured ? 'primary' : 'secondary'} />
        </ToggleButton>
      </CardContent>
    </Card>
  )
}