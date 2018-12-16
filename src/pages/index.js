import React from "react"
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(skip: 1, limit: 1) {
          pageInfo {
            hasNextPage
          }
        }
      }
    `}
    render={(data) => {
      const nextPage = data.allMarkdownRemark.pageInfo.hasNextPage.toString();
      return (
        <p> Does this have another page? {nextPage} <br /> Should it? False. </p>
      )}} />
)
