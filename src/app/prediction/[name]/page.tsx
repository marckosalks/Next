import { Params } from "@/types/params"

export function Prediction({ params }: Params) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.name}
    </main>
  )
}
