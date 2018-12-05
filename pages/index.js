import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import SignupForm from '../components/SignupForm.js'
import { Button, Alert } from "reactstrap";

const Index = () => (
  <Layout>
    <h1>Welcome to MakersBnB</h1>
    <SignupForm />
    <Button color="primary">Hello from nextjs</Button>
  </Layout>
)

export default Index
