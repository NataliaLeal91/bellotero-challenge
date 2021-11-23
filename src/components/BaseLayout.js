import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAppData } from '../actions';

class BaseLayout extends React.Component {
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
  
  menuHeader() {
    console.log("asdasd", );

    return <nav className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4">
                <img src="bellotero.png" alt="Logo" className=" mr-2" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {/* <a href="" className="py-4 px-2 text-green-500 border-t-4 border-green-500 font-semibold ">Home</a> */}
            {this.props.menu && this.props.menu.items ?
              this.props.menu.items.map((item, i) => {
                const selectedPage = (
                  this.props.history.location.pathname.includes(item.route)
                  || (this.props.history.location.pathname === '/' && item.text === 'Testimonial')
                ) ? "border-t-4 border-green-500 menu-items" : "";

                return <a key={i} onClick={() => this.props.history.push(item.route)}
                  className={"py-4 px-2 bellotero-text-blue font-bold " + selectedPage}>
                  {item.text}
                </a>
              })
            :null}
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
            <svg className=" w-6 h-6 bellotero-text-blue"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  }

  render() {
    return (
      <Fragment>
        <div className="h-screen bellotero-bg-blue">
          {this.menuHeader()}
          <div className="container max-w-6xl mx-auto px-4">
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.app.menu
  };
};

export default connect(
  mapStateToProps,
  { fetchAppData }
)(BaseLayout);