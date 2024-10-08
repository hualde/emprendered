import Head from 'next/head'
import Layout from '@/components/Layout'

export default function LearningMaterial() {
  return (
    <Layout>
      <Head>
        <title>Material de Aprendizaje - EmprendeRed</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Material de Aprendizaje</h1>
      {/* Aquí irá el contenido del material de aprendizaje */}
    </Layout>
  )
}