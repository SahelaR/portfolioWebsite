import React from "react"
import "../App/App.css"
import MainComponent from "../components/MainComponent";

const Loading = ({
}) => {
  return (
    <div className="container">
    <div className="loading">
      <div></div>
      <div></div>
    </div>
    </div>
  );
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    this.isLoading = setTimeout(() => { this.setState({ loading: false }) }, 2300);
  }
  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  timer = () => setTimeout(() => {
    this.setState({ loading: false })
  }, 2300);

  render() {
    const { loading } = this.state;
    return (
      loading ? (<Loading />)
        : (<div>
         <MainComponent />
        </div>)
    )
  }
}
