import React from "react"
import Layout from "../../components/layout/layout"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"


class Workshops extends React.Component {

  render() {

    const post = this.props.data.post

    return (
      <Layout location={this.props.location}>
        <Container>
          <h1 style={{ color: "#2c4f90" }}>Call for Workshops</h1>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: post.html || ""
            }}
          />
        </Container>
      </Layout>
    )

  }

}

export default Workshops

export const query = graphql`
  query {
    #    post: markdownRemark(frontmatter: {type: {eq: "workshops"}}) {
    post: markdownRemark(frontmatter: {type: {eq: "empty"}}) {
      id
      html
    }
  }
`