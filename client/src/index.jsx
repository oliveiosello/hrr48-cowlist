import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

const Cow = ({ cow }) => <div>{cow.name}</div>;

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    };
  }

  saveCow(name, description) {
    axios
      .post('/api/cows', {
        name: name,
        description: description,
      })
      .then(() => {
        this.getCows();
      });
  }

  getCows() {
    axios.get('/api/cows')
      .then((res) => {
      this.setState({ cows: res.data });
    });
  }

  componentDidMount() {
    this.getCows();
  }

  render() {
    return (
      <div>
        {this.state.cows.map((cow) => (
          <Cow key={cow.id} cow={cow} />
        ))}
        <CowForm onSave={this.saveCow.bind(this)}/>
      </div>
    );
  }
}

class CowForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
    }
  }

  render() {
    const {name, description} = this.state

    const handleSave = (e) => {
      e.preventDefault()

      this.setState({
        name: "",
        description: "",
      });

      this.props.onSave(name, description)
    }

    return (<form onSubmit={handleSave}>
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => this.setState({ name: e.target.value })}
      />
      Description:
      <input
        type="text"
        value={description}
        onChange={(e) => this.setState({ description: e.target.value })}
      />
    </label>
    <button type="submit">Add Cow</button>
  </form>)
  }

}

const App = () => (
  <div>
    <h1>Cow List</h1>
    <CowList name={Cow.name} onClick={() => this.setState({ name })} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
