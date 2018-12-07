import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-fetch'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

const Spaces = (props) => (
  <Layout>
    <CardColumns>
      {props.spaces.map((space) => (
        <Card>
          <CardBody key={space._id.$oid}>
            <CardTitle>{space.name}</CardTitle>
            <CardSubtitle>£{space.price}/night</CardSubtitle>
            <CardText>{space.description}</CardText>
            <CardText>{space.owner.id}</CardText>
            <Button>Rent this space</Button>
          </CardBody>
        </Card>
      ))}
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Want to rent your own space?</CardTitle>
        <CardText>Sign up now to get started.</CardText>
        <Button>Sign up</Button>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Become a host</CardTitle>
        <CardText>Rent your space and disrupt your local rental market.</CardText>
        <Button color="secondary">Oh hell yeah...</Button>
      </Card>
    </CardColumns>
  </Layout>
);

    Spaces.getInitialProps = async function() {
      const res_s = await fetch('https://api.mlab.com/api/1/databases/makers-bnb/collections/spaces?apiKey=' + process.env.MLAB_API_KEY)
      const spaces_data = await res_s.json()
      const res_u = await fetch('https://api.mlab.com/api/1/databases/makers-bnb/collections/users?apiKey=' + process.env.MLAB_API_KEY)
      const users_data = await res_u.json()

      console.log(`Show spaces fetched. Count: ${spaces_data.length}`)
      console.log(`Show users fetched. Count: ${users_data.length}`)

      return {
        spaces: spaces_data,
        users: users_data
      }
    }
export default Spaces
