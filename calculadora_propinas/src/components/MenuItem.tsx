import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    //Esta sintaxis es comun cuando pasas un prop
    addItem: (item: MenuItem) => void
}

//Con el comando rcf nosotros escribimos la sintaxis basica de componentes
export default function MenuItem({item, addItem}:MenuItemProps) {
  return (
    <button
        className="border-2 border-b-indigo-900 hover:bg-indigo-400 w-full p-2 flex justify-between rounded-lg"
        onClick={() => addItem(item)}
        >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
