import fetch from 'isomorphic-unfetch';
​
class SignUpSend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stars: props.stars
        }
    }
    handleSubmit = async(e) => {
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        this.setState({ stars: json.stargazers_count });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
​
export default SignUpSend
