
import { motion } from "framer-motion";
import styled from "styled-components";
import SanityContent from "./SanityContent";

/*Styled compoentns*/
const Styledmodal = styled(motion.section) `
display: flex;
width: 100%;
height: 100vh;
justify-content: space-around;
align-items: center;
background-color: rgba(0, 0, 0, 0.753);
position: fixed;
top: 0;
left: 0;
cursor: pointer;
z-index: 0;
`
const StyledInnerModal = styled(motion.section)`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: black;
  max-width: 700px;
  overflow-y: auto;
`

const StyledModalSection = styled.section `
width: 95%;
`

const StyledBody = styled.section `
max-width: 550px;
margin: auto;
h1 {
  font-size: 2.3rem;
  text-align: center;
  margin: .5rem;
}
p {
  font-size: 1.1rem 0;
  text-align: left;
  line-height: 1.3;
}
`

const Modal = ({modal, closeModal, video}) => {

  return (
  <>
  {modal? (<Styledmodal onClick={closeModal}>
  <StyledInnerModal 
  className="inner-modal"
  initial={{scale: 0, rotate: 45, opacity: 0}}
  animate={{scale: 1, rotate: 0, opacity: 1}}
  transition={{
      duration: 0.5,
      stiffness: 200,
      damping: 20
    }}
  >
    <StyledModalSection>
      <iframe title="trailer" width="696" height="378" src={video.videoUrl} frameBorder="0"></iframe>
      <StyledBody>
      <SanityContent data= {video?.body}/>
      </StyledBody>
      </StyledModalSection>
  </StyledInnerModal>
  </Styledmodal>): null}
  </>
  )
}

  export default Modal;