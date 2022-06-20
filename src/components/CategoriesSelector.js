import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {Button, Heading, HStack, Fade} from '@chakra-ui/react'

export default function TagSelector({handleCategories}) {
    const [scrollActive, setScrollActive] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY >= 100){
          setScrollActive(true);
        }else{
          setScrollActive(false);

        }
      })
    })
    const {distinct, group, totalCount} = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        distinct(field: frontmatter___category)
        totalCount
        group(field: frontmatter___category){
                totalCount
        }
        }
    }
    `).allMarkdownRemark;
    const Tags = distinct.map((name, idx) => [`${name}(${group[idx].totalCount})`, name]);
    Tags.unshift([`ALL(${totalCount})`, 'ALL']);
    // console.log(distinct, group, totalCount, Tags);
  return (
    <>
    <Heading as={'h2'} pt={2}>총 {totalCount}개의 포스트가 있습니다.🖋</Heading>
    <HStack w={'lg'} flexWrap={'wrap'} py={4}>
        {Tags.map(tag=><Button
         key={tag[0]}
         borderRadius={10}
         shadow={'md'}
         value={tag[1]}
         onClick={handleCategories}
         >
        {tag[0]}
        </Button>)}
    </HStack >

    {scrollActive&&
    <Fade in={scrollActive}>
       <HStack w={'2xl'} flexWrap={'wrap'} py={4} pos="fixed" top={1} bg={'whiteAlpha.100'}>
          {Tags.map(tag=><Button
          key={tag[0]}
          borderRadius={10}
          shadow={'md'}
          value={tag[1]}
          onClick={handleCategories}
          >
          {tag[0]}
          </Button>)}
      </HStack >
    </Fade>}

    </>
  )
}