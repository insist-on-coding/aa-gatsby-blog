import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TagList } from "../tags"
export default () => {
  const tags = useStaticQuery(graphql`
    {
      allMdx(filter: { fields: { source: { eq: "post" } } }) {
        tags: group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).allMdx.tags.map(({ fieldValue }) => fieldValue)
  return <TagList tags={tags} />
}
