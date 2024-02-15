import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import bannerImg from '../../assets/Images/curtain.jpg'
import styles from './Home.module.scss'



export const Home = () => {
  return (
    <ContentWrapper title="">
      <img src={bannerImg} alt="banner" />
    </ContentWrapper>
)
}