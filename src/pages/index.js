import React from "react"

import Layout from "../components/layout"
import Image from "./index-images.js"
import SEO from "../components/seo"

import "./styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container has-text-centered">
      <div class="section">
      <h2>I'm a</h2>
      <h1 class="is-size-1">FULL STACK ENGINEER</h1>
      <h2>and I like solving problems with:</h2>
      </div>
      <div style={{ marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
