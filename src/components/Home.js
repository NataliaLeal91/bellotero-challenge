import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTestimonial } from '../actions';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 p-3 mx-auto border border-white bg-white">
        {this.props.testimonials && this.props.testimonials.slider && this.props.testimonials.slider.reviews ?
          this.props.testimonials.slider.reviews.map((item, i) => {
            return <Fragment key={i}>
              <div className={"w-full md:w-1/3 bg-white grid " + (i == 0 ? "hidden": "")}>
                <div className="flex justify-between item-center">
                  <div>
                    <p className="text-gray-500 font-black">{item.name}</p>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
              <div className={"w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 " + (i == 0 ? "hidden": "")}>
                <p className="md:text-lg text-gray-500 font-black text-base text-gray-600">
                  {item.comment}
                </p>
              </div>
            </Fragment>
          })
        : null}
        <div className="absolute -bottom-4 -right-11 inline-block">
          <div className="flex">
            <div className="flex-1">
              <div className="box-content h-6 w-24 p-1 border bellotero-cobalt-blue text-white text-center">
                {this.state.slidePosition}/{this.props.testimonials
                  && this.props.testimonials.slider
                  && this.props.testimonials.slider.reviews ? this.props.testimonials.slider.reviews.length :0}
              </div>
            </div>
            <div className="flex-1">
              <div className="box-content h-6 w-24 p-1 border bellotero-cobalt-blue text-white">asdsad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  render() {
    return (
      <BaseLayout {...this.props}>
        <div className="mt-20">
          <h1 className="bellotero-cobalt-blue text-white font-bold px-2 inline-block text-2xl">
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