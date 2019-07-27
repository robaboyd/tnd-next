import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Slider from "../images/freebies-slider.jpg";
import ConvertKit from "../Components/ConvertKit";
import CollectionSlider from "../Components/CollectionSlider";
import BlogSlider from "../Components/BlogSlider";
import api from "../utils/api";
import SocialClips from "../Components/SocialClips/SocialClips";
import AboutSection from "../Components/AboutSection";
import Layout from "../Components/Layout/Layout";
import Link from "next/link";
import FooterNext from "../Components/FooterNext";
import "isomorphic-fetch";
import Header from "../Components/Header";
class Home extends Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    const response = await fetch(baseUrl + "/api/blog/loadall");

    const blogs = await response.json();
    return { blogs: blogs };
  }

  render() {
    return (
      <Layout>
        <div className="wrapper-home">
          {/* <Navbar position="right">
            <Navlinks />
          </Navbar> */}
          <Header />

          <Jumbotron mainImage={Slider} />
          <ConvertKit title="JOIN MY NEWSLETTER!" />
          <CollectionSlider />
          <BlogSlider blogs={this.props.blogs} />
          <SocialClips />
          <AboutSection />
          <FooterNext />
        </div>
        <style jsx>{`
          .wrapper-home {
            text-align: center;
          }

          .wrapper-home .navbar {
            background-color: #695395;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Home;
