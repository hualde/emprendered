import Head from 'next/head'
import Layout from '@/components/Layout'
import ForumHighlights from '@/components/ForumHighlights'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>EmprendeRed - Red Social de Emprendimiento</title>
        <meta name="description" content="Comunidad local para promover el emprendimiento" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Bienvenido a EmprendeRed</h1>
      <ForumHighlights />
    </Layout>
  )
}