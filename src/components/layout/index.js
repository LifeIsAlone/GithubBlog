import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Center} from "@chakra-ui/react"

const bgStyled = {position:'fixed',
  top:'5%',
  height:"95vh",
  width:"100vw",
  zIndex:-1}

const Layout = ({ location, title, bgImg, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header className="global-header" isRootPath={isRootPath} title={title}/>
      <main>
        <div className="global-main" style={{position:'relative'}}>
          <Center flexDirection={'column'}>
          {children}
          </Center>
          <img style={bgStyled}
          transitionTime={1.0}
           src={bgImg} alt='bgImage' loading="lazy"/>
           
        </div>
      </main>
    </div>
  )
}

export default Layout
