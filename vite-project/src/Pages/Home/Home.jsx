import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import bannerImg from '../../assets/Images/curtain.jpg'
import { RandomPoster } from "../../Components/RandomPoster/RandomPoster"
import styles from './Home.module.scss'



export const Home = () => {
  return (
    <>
      <img src={bannerImg} alt="banner" />
      <RandomPoster></RandomPoster>
      </>
    
)
}