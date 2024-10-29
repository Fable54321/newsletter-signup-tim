

import sideImgMobile from '../../../images/illustration-sign-up-mobile.svg'
import sideImgDesktop from '../../../images/illustration-sign-up-desktop.svg'

// eslint-disable-next-line react/prop-types
const SideImage = ({ isDesktop }) => {
  return (
    <div>
      
      <img src={isDesktop ? sideImgDesktop : sideImgMobile}  alt='' aria-hidden="true"/>
    </div>
  )
}

export default SideImage
