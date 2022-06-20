import React, {useState, useEffect} from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Center, Image, Fade } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, bgImg, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [bgImage, setBgImage] = useState(undefined);

  useEffect(()=>{
    setBgImage(bgImg);
  },[bgImg])
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header className="global-header" isRootPath={isRootPath} title={title} />
      <main>
        <div className="global-main" style={{position:'relative'}}>
          <Center flexDirection={'column'}>
          {children}
          </Center>
          {bgImage &&<Image style={{position:'fixed',
            top:'5%',
            opacity: '0%',
            height:"95vh",
            width:"100vw",
            zIndex:-1}}
            
           src={bgImage} alt='bgImage' loading="lazy"/>}
        </div>
      </main>
    </div>
  )
}

export default Layout
