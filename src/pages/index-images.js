import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const imageFitStyle={
  maxWidth: `100%`,
  // maxHeight: `100%`
}
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 227) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div class="box columns is-vcentered">
      {data.allImageSharp.edges.map((edge, index) => {
        return(
          <div key={index} class="column">
            <figure class="image is-200x200">
              <Img style={imageFitStyle} fluid={edge.node.fluid } />
            </figure>
          </div>
        )
      })}
    </div>
  )
}

export default Image
