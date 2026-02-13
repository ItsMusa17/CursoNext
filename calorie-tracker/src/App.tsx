import Form from "./components/Form"

function App() {

  return (
    <>
      <header className="bg-blue-300">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>
      <section className="bg-blue-200 py-20 px-5">
        <div className="max-w-4xl mx-auto flex justify-between"></div>
          <Form 
          />
      </section>
    </>
  )
}

export default App
