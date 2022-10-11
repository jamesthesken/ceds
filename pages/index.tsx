import type { NextPage } from 'next'
import QuickFacts from './components/QuickFacts'
import Layout from './components/Layout'


const Home: NextPage = () => {

  return (
    <div>
      <Layout>
        <QuickFacts />
      </Layout>
    </div>
    
    
  )
}

export default Home
