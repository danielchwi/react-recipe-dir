import './Home.css'
import RecipeList from '../../components/RecipeList'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'

export default function Home() {
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').get().then((res)=>{
      if (res.empty){
        setError("The document is empty")
        setIsPending(false)
      }else{
        const docs = res.docs.map((doc)=>{return {id:doc.id, ...doc.data()}})
        setData(docs)
        setIsPending(false)
      }
    }).catch((err)=>{
      setError(err.message)
      setIsPending(false)
    })
  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading data</p>}
      {data && <RecipeList recipes={data} /> }
    </div>
  )
}
