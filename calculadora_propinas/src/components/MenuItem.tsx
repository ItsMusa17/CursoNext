import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

//Con el comando rcf nosotros escribimos la sintaxis basica de componentes
export default function MenuItem({item}:MenuItemProps) {
  return (
    <button
        className="border-2 border-b-fuchsia-500 hover:bg-fuchsia-300 w-full p-2 flex justify-between"
        >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
