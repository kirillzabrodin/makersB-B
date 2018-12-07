import Layout from '../components/MyLayout.js'
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody } from 'reactstrap';

export default () => (
  <Layout>
      <CardColumns>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>My space</CardTitle>
            <CardSubtitle>£500/night</CardSubtitle>
            <CardText>My lovely space</CardText>
            <Button>Rent this space</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        </Card>
        <Card>
          <CardBody>
            <CardTitle>My cheap space</CardTitle>
            <CardSubtitle>£5/night</CardSubtitle>
            <CardText>My space is cheap.</CardText>
            <Button>Rent this space</Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Want to rent your own space?</CardTitle>
          <CardText>Sign up now to get started.</CardText>
          <Button>Sign up</Button>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Private Suite, Colour House, Kendal</CardTitle>
            <CardSubtitle>£55/night</CardSubtitle>
            <CardText>Private room in the Lake District</CardText>
            <Button>Rent this space</Button>
          </CardBody>
        </Card>
        <Card body inverse color="primary">
          <CardTitle>Become a host</CardTitle>
          <CardText>Rent your space and disrupt your local rental market.</CardText>
          <Button color="secondary">Oh hell yeah...</Button>
        </Card>
      </CardColumns>
      </Layout>
    );
