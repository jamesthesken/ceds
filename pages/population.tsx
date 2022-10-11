import type { NextPage } from 'next'
import People from './components/People'
import Layout from './components/Layout'


const Population: NextPage = () => {

  return (
    <div>
      <Layout>
        <People />
      </Layout>
    </div>
    
    
  )
}

export default Population
