import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Naruto', 'Dragon ball', 'One piece' ])

  const handleAddCategory = (value) => {
    setCategories([...categories,  value]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => handleAddCategory(value) }
      />

      <ol>
        {
          categories.map( category => {
            return <li key={category} >{category}</li>
          })
        }
      </ol>

      <h1>Mi primer Proyecto</h1>
    </>
  )
}