import { use } from "react"

async function getCep(cepNumber: number) {
    const response = await fetch(`viacep.com.br/ws/${cepNumber}/json/`, {cache: 'no-store'})
    return response.json
  }

export async function ViaCep(cepNumber: number) {
    const cepObj = use(getCep(cepNumber))
    return cepObj
}