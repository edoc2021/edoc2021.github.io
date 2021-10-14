import React from "react"
import { Container } from "react-bootstrap"
import { navigate } from "gatsby"


class NotFoundPage extends React.Component {

  componentDidMount() {
    navigate("https://ieee-edoc.org/2021/");
  }

  render() {
    return null
  }
}


export default NotFoundPage
