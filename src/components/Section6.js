import React, { Component } from "react";
import ASME from '../assets/images/ASME.png';

export default class Section6 extends Component {
  render() {
    return (
      <section
        className="elementor-element elementor-element-321283a8 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
        data-id="321283a8"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-element elementor-element-393192b9 elementor-column elementor-col-100 elementor-top-column"
              data-id="393192b9"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-232c5108 elementor-widget elementor-widget-frel-about-with-rating"
                    data-id="232c5108"
                    data-element_type="widget"
                    data-widget_type="frel-about-with-rating.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="cons_w_wrapper">
                        <div className="fn_cs_about_with_rating">
                          <div className="container">
                            <div className="awr_inner">
                              <div className="left_part">
                                <h3>Why choose our services?</h3>
                                <p>
                                  <span>
                                    At Houston Process and Design, we rely on
                                    honesty, discipline and hard work and
                                    believe our success can be attributed to
                                    upholding a simple set of core values that
                                    date back to the beginning of the company.
                                  </span>
                                  <span>
                                    Our talented design and engineering team
                                    possess the experience and code knowledge to
                                    design vessels and tanks in the most cost
                                    effective manner within the specified
                                    requirements.
                                  </span>
                                </p>
                                <img
                                  src={ASME}
                                  alt=""
                                />
                              </div>
                              <div className="right_part">
                                <div className="r_inner">
                                  <div className="top_section">
                                    <div className="badge_holder">
                                      <div className="badge_left">
                                        <div className="b_title">
                                          <h3>
                                            World's Leading Industry
                                            <br />
                                            Corporation
                                          </h3>
                                        </div>
                                        <div className="b_desc">
                                          <span className="year">47</span>
                                          <span className="text">
                                            Years of Experience
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="badge_right"
                                        data-bg-img="wp-content/plugins/industify-core/shortcode/assets/img/badge-img.jpg"
                                      />
                                    </div>
                                    <div className="rating_holder">
                                      <div className="r_header" />
                                      <div className="r_footer" />
                                      <a href="#" />
                                      <img
                                        className="industify_w_fn_svg"
                                        src="wp-content/plugins/industify-core/shortcode/assets/svg/stars.svg"
                                        alt="svg"
                                      />
                                      <h3 className="rating_number">9.7</h3>
                                      <h3 className="rating_text">
                                        Customer Rating
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="bottom_section">
                                    <div className="list">
                                      <ul>
                                        <li>
                                          <div className="item">
                                            <span className="icon">
                                              <img
                                                className="industify_w_fn_svg"
                                                src="wp-content/plugins/industify-core/shortcode/assets/svg/checked.svg"
                                                alt=""
                                              />
                                            </span>
                                            <p>
                                              Best talent in the industry
                                              business.
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="item">
                                            <span className="icon">
                                              <img
                                                className="industify_w_fn_svg"
                                                src="wp-content/plugins/industify-core/shortcode/assets/svg/checked.svg"
                                                alt=""
                                              />
                                            </span>
                                            <p>
                                              One of the most expirienced
                                              company.
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="item">
                                            <span className="icon">
                                              <img
                                                className="industify_w_fn_svg"
                                                src="wp-content/plugins/industify-core/shortcode/assets/svg/checked.svg"
                                                alt=""
                                              />
                                            </span>
                                            <p>
                                              We have completed over 3000
                                              projects.
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="item">
                                            <span className="icon">
                                              <img
                                                className="industify_w_fn_svg"
                                                src="wp-content/plugins/industify-core/shortcode/assets/svg/checked.svg"
                                                alt=""
                                              />
                                            </span>
                                            <p>
                                              Most dedicated and passionate
                                              team.
                                            </p>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="item">
                                            <span className="icon">
                                              <img
                                                className="industify_w_fn_svg"
                                                src="wp-content/plugins/industify-core/shortcode/assets/svg/checked.svg"
                                                alt=""
                                              />
                                            </span>
                                            <p>
                                              Company has over 2000 workers.
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
