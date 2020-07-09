import imagePost18 from './../../theme/images/post_18.jpg'

const ImageSideBar = () => {
  return (
    <div className="sidebar_section">
      <div className="advertising_2">
        <div className="advertising_background" style={{
          backgroundImage: `url(${imagePost18})`
        }}></div>
        <div className="advertising_2_content d-flex flex-column align-items-center justify-content-center">
          <div className="advertising_2_link"><a href="#">Turbulent <span>Mind</span></a></div>
        </div>
      </div>
    </div>
  )
}

export default ImageSideBar;