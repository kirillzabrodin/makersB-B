import Link from 'next/link'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm.js'
import React from 'react'
import Layout from '../components/MyLayout.js'
import { Button } from 'reactstrap'

const Index = () => (
    <Layout>
    <h1>Welcome to MakersBnB</h1>
    <SignupForm />
    </Layout>
)

export default Index
