import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Forums() {
  return (
    <Layout>
      <Head>
        <title>Foros - EmprendeRed</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Foros de Emprendimiento</h1>
      {/* Aquí irá la lista de foros cuando se integre con NodeBB */}
    </Layout>
  )
}