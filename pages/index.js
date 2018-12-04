import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import SignupForm from '../components/SignupForm.js'
import SpaceDB from '../src/space_db.js'

const Index = () => (
  <Layout>
    <h1>Welcome to MakersBnB</h1>
    <SignupForm />
  </Layout>
)

export default Index
