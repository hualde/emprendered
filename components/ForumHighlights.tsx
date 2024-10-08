import Link from 'next/link'

const MOCK_HIGHLIGHTS = [
  { id: 1, title: 'Cómo conseguir financiación para tu startup', replies: 23 },
  { id: 2, title: 'Estrategias de marketing digital para emprendedores', replies: 15 },
  { id: 3, title: 'Aspectos legales al iniciar un negocio', replies: 19 },
]

export default function ForumHighlights() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Destacados del Foro</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_HIGHLIGHTS.map((highlight) => (
          <div key={highlight.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">{highlight.title}</h3>
            <p className="text-sm text-gray-600">{highlight.replies} respuestas</p>
            <Link href={`/forums/${highlight.id}`} className="text-blue-500 hover:underline text-sm mt-2 inline-block">
              Ver discusión
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}