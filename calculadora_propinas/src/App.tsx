import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      {/*Grid funciona para hacer dividir el contenido de las columnas*/}

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5 text-center">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item =>(
              <MenuItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2>Consumo</h2>          
        </div> 
      </main>
    </>
  )
}

export default App
