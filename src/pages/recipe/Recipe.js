import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
  const { mode } = useTheme()
  const { id }  = useParams();
  const url = `http://localhost:3000/recipes/${id}`
  const { data:recipe, isPending, error } = useFetch(url)

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading data</p>}
      {recipe && 
      <>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to male</p>
        <ul>
          {recipe.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
        </ul>
        <p className='method'>{recipe.method}</p>
      </>}
    </div>
  )
}
