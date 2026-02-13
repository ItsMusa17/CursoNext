const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPorcentageFormsProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

//Funcion para obetner el porcentaje de la propina 
export default function TipPorcentageForms({setTip, tip}: TipPorcentageFormsProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:   </h3>

        <form>
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id} className="flex gap-2">
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input
                        id={tipOptions.id}
                        type="radio" //Solo una opcion, checkbox varias opciones
                        name="tip" //Un name igual para todos 
                        value={tipOptions.value} //El value es diferente para todos 
                        onChange={ e => setTip(+e.target.value)} //El signo de + le indica que lo lo convierta en un numero
                        checked={tipOptions.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
