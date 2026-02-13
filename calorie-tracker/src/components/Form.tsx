import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

  //Como nuestros tres input estan relacionados solo creasmos un solo useState
  const [activity, setActivity] = useState({
    category: 1,
    name: '', 
    calories: 0 
  })

  const handleChange = (e) => {
    setActivity({
      ...activity,
     [e.target.id]: e.target.id
    })
  }

  return (
    <form className="space-y5 bg-white shadow p-10 rounded-lg ">
      <div className="grid grid-cols-1 gab-3">
        <label htmlFor="category" className="font-bold"> Categoria: </label>
          <select 
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
          >
            {categories.map(category => (
              <option 
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
      </div>

      <div className="grid grid-cols-1 gab-3">
        <label htmlFor="name" className="font-bold"> Actividad: </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg "
          placeholder="ej. Comida, Jugo de naranja, Ensalada, Ejercicio, Pesas, Correr"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gab-3">
        <label htmlFor="calories" className="font-bold"> Calorias: </label>
        <input
          id="calories"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias. ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar Comida o Guardar Ejercicio"
      />
    </form>
  )
}
