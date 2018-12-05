import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <Layout>
    <h1>Spaces</h1>
    <ul>
      {props.spaces.map((space) => (
        <li key={space._id.$oid}>
          <a>{space.name}, for £{space.price} a night, rented by {space.owner.id}</a>
          <p>{space.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.mlab.com/api/1/databases/makers-bnb/collections/spaces?apiKey=sWdpJLhvxyPUweaktGt7VMo4U0afycyQ')
  const res2 = await fetch('https://api.mlab.com/api/1/databases/makers-bnb/collections/users?apiKey=sWdpJLhvxyPUweaktGt7VMo4U0afycyQ')
  const data = await res.json()
  const data2 = await res2.json()

  return {
    spaces: data,
    users: data2
  }
}

export default Index

// export default () => (
//   <Layout>
//     <h2>This is the home page</h2>
//   </Layout>
// )
