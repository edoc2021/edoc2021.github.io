import React from "react"
import { navigate } from "gatsby"

class IndexPage extends React.Component {

  componentDidMount() {
    navigate("https://ieee-edoc.org/2021/");
  }

  render() {
    return null
  }
}


export default IndexPage

