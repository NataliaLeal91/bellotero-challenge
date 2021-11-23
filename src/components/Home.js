import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTestimonial } from '../actions';

import BaseLayout from './BaseLayout';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slidePosition: 1
    };
  } 
  
  componentDidMount() {
    this.props.fetchTestimonial();
  }

  testimonialSlider() {

    return <div className="flex flex-col mt-20">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 mx-auto border border-white bg-white h-auto md:h-52">
        {this.props.testimonials && this.props.testimonials.slider && this.props.testimonials.slider.reviews ?
          this.props.testimonials.slider.reviews.map((item, i) => {
            
            return <Fragment key={i}>
              <div className={"w-full md:w-1/3 bg-white grid " + ((i + 1) != this.state.slidePosition ? "hidden": "")}>
                <div className="flex justify-between item-center">
                  <div>
                    <p className="Pete-Zahut">{item.name}</p>
                    <p className="Chef-Maniak">{item.position}</p>
                  </div>
                </div>
              </div>
              <div className={"w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 " + (i == 0 ? "hidden": "")}>
                <p className="md:text-lg text-black-500 font-black text-base text-black-600">
                  {item.comment}
                </p>
              </div>
            </Fragment>
          })
        : null}
        <div className="absolute -bottom-10 right-0 lg:-bottom-4 lg:-right-11 inline-block">
          <div className="flex">
            <div className="flex-1">
              <div className="box-content h-6 w-24 p-1 border bellotero-cobalt-blue text-white text-center">
                {this.state.slidePosition}/{this.props.testimonials
                  && this.props.testimonials.slider
                  && this.props.testimonials.slider.reviews ? this.props.testimonials.slider.reviews.length :0}
              </div>
            </div>
            <div className="flex-1">
              <div className="box-content h-6 w-24 p-1 border bellotero-cobalt-blue text-white">
                <span class="flex justify-between">
                  <button onClick={() => this.setState({ slidePosition: this.state.slidePosition == 1 ? 1: this.state.slidePosition - 1 })}>
                    {"<-"}
                  </button>
                  <button onClick={() => {
                    let testimonialLength = this.props.testimonials
                    && this.props.testimonials.slider
                    && this.props.testimonials.slider.reviews ? this.props.testimonials.slider.reviews.length :0

                    this.setState({ slidePosition: this.state.slidePosition == testimonialLength ? testimonialLength: this.state.slidePosition + 1 })
                  }}>
                    {"->"}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  render() {
    console.log(this.state.slidePosition);
    return (
      <BaseLayout {...this.props}>
        <div className="mt-20">
          <h1 className="bellotero-cobalt-blue text-white font-bold py-1 px-2 inline-block text-2xl">
            {this.props.testimonials && this.props.testimonials.slider ? 
              this.props.testimonials.slider.title
            : null}
          </h1>
        </div>
        {this.testimonialSlider()}
      </BaseLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testimonials: state.testimonial.testimonials
  };
};

export default connect(
  mapStateToProps,
  { fetchTestimonial }
)(Home);