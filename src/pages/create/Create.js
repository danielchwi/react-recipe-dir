import './Create.css'
import { useState, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState(0)
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const { data, isPending, error, postData } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = e => {
    e.preventDefault()
    postData({
      title,
      method,
      ingredients,
      cookingTime: cookingTime+' minutes'
    })

  }

  const handleAdd = e => {
    e.preventDefault()
    if (newIngredient && !ingredients.includes(newIngredient)){
      setIngredients(previngredients => [...previngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }


  return (
    <div className='create'>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={e=>setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              type="text"
              onChange={e=>setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>add</button>
          </div>
          <p>current ingredients: {ingredients.map(i => (<em key={i}>{i}, </em>))}</p>
        </label>

        <label>
          <span>Recipe method:</span>
          <input
            type="textarea"
            onChange={e => setMethod(e.target.value)}
            value={method}
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>

        <button className='btn'>
          submit
        </button>
      </form>

    </div>
  )
}
