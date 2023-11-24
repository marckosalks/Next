'use client'
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [inputValue, setInputValue] = useState([''])
  const { push } = useRouter()
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    push(`/prediction/${inputValue}`)
  }

  return (
    <section className="flex flex-col  justify-center items-center gap-5 ">
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold text-white">Preencha seu nome aqui:</h1>
      </div>
      <form className="flex flex-col w-1/3 gap-5"
        onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Digite seu nome:"
          className="p-2 rounded-lg text-black"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)} />

        <button className=" bg-blue-950 text-white p-2 rounded-lg hover:bg-slate-800 transition-opacity"
          type="submit">Enviar</button>
      </form>
    </section>
  )
}
