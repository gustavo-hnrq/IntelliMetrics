import { Share } from "lucide-react"

export function CardGestor({qtd, texto}) {
  return (
    <div className="w-1/4 bg-white flex items-center justify-between	p-5 rounded-md border border-gray-200">
      <div>
        <h1 className="text-3xl font-bold">{qtd}</h1>
        <p className="text-gray-500">{texto}</p>
      </div>
      <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
        <Share className="h-8 w-8"/>
      </div>
    </div>
  )
}
