import  React, { useMemo, useState} from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CategoriesSelector from "../components/CategoriesSelector"
import Posts from "../components/posts"

import bgImage from "../images/mainPost.png";

const BlogIndex = ({ data, location }) => {
  const [category ,setCategory] = useState('ALL');

  const posts = useMemo(()=>data.allMarkdownRemark.nodes);

  const siteTitle = data.site.siteMetadata?.title || `Title`


  const handleCategories = (e) =>{
    console.log(e.target);
    setCategory(e.target.value);
  }
  console.log('blg',bgImage);
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} bgImg={bgImage}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} bgImg={bgImage}>
      <Seo title="All posts" />
      <header>
        <CategoriesSelector handleCategories={handleCategories}/>
      </header>
      <section>
        {/* <Bio /> */}
      <Posts posts={posts} category={category}/>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
query{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      excerpt(pruneLength: 100, truncate: true)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        reading
      }
    }
  }
}
`
