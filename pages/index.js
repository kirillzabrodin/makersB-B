import Header from '../components/Header'
import Layout from '../components/MyLayout'
const Space = require("./../models/Space");
const User = require("./../models/User");

const Index = (props) => (
  <Layout>
    <h1>Spaces</h1>
    <ul>
      {Space.find({}).map((space) => (
        <li key={space._id.$oid}>
          <a>{space.name}, for £{space.price} a night, rented by {space.owner.id}</a>
          <p>{space.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Index
