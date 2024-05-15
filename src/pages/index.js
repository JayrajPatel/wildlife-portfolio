import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        className="about-background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="about-content">
        <div className="about-me">
          <p>
            Hi, I'm Jayraj Patel, a wildlife photographer based in United States. 
            My passion for photography stems from a deep love for nature and wildlife.
            Through my lens, I aim to capture the beauty and essence of the natural world,
            inspiring others to appreciate and conserve our planet's treasures.
            Join me on this visual journey and let's celebrate the wonders of wildlife together.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
