import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAppData } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      completedForm: false
    };
  } 
  
  componentDidMount() {
    this.props.fetchAppData();
  }

  render() {
    console.log(this.props)

    return (
      <Fragment>
        <div className="red-color bg-login-curved">
          <div className="flex py-10 justify-center h-40 md:h-96 object-center ">
            <div className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <p>asdsad asdd</p>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {

  
  console.log("state", state)
  return {
    isSignedIn: ""
  };
};

export default connect(
  mapStateToProps,
  { fetchAppData }
)(Home);