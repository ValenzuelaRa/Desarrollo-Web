import { useDatosContext } from "@/provider/userProvider"

const HijoA = () => {
    const {data,setData} = useDatosContext
    const handleCambiar = () => {
        return setData('Modificando el valor')
    }

  return (
    <div>
        HijoA{data}
        <button onClick={handleCambiar}>Cambiar valor</button>
    </div>
  )
}

export default HijoA