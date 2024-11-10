import bannerImg from "../../assets/osloshin_banner.jpg"
import "./homepage.css"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div className='banner-container'>
        <img className='banner-image' src={bannerImg} alt="Oslo Shinkyokushin" />
      </div>
        <h1>Oslo Shinkyokushin</h1>
    </div>
  )
}

export default HomePage