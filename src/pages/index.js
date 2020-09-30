import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderTitle = styled.h1`
  background-color: aquamarine;
  color: #fff;
`

const IndexPage = () => (
  <>
    <HeaderTitle>Hello this my first Gatsby site.</HeaderTitle>
    <Link to="/about">About Aqua</Link>
  </>
)

export default IndexPage
