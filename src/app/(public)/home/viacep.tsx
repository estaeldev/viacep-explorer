import { CepInterface } from "types/cep"

async function getCep(cepNumber: number) {
    const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json`, {cache: 'no-store'})
    return response.json()
  }

export async function ViaCep(cepNumber: number): Promise<CepInterface> {
    const cepObj = await getCep(cepNumber)
    return cepObj
}