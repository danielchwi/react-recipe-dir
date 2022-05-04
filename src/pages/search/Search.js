import './Search.js'

import {useLocation} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import Recipelist from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/recipes?q=${query}`

  const {data, isPending, error} = useFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipe include "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading data</p>}
      {data && <Recipelist recipes={data}/>}
    </div>
  )
}
