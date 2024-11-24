import bannerImg from "../../assets/osloshin_banner.jpg"
import "./HomePage.module.css"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div>
        <img className='banner-image' src={bannerImg} alt="Oslo Fullkontakt Karate" />
      </div>
        <h1>Oslo Fullkontakt Karate</h1>
    </div>
  )
}

export default HomePage