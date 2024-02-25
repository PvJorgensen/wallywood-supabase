import styles from './PosterPage.module.scss'
import { GenreList } from '../../Components/GenreList/GenreList'
import { PosterList } from '../../Components/PosterList/PosterList'
export const PosterPage = () => {
  return (
    <div className={styles.gallery}>
        <GenreList />
        <PosterList />
    </div>
  )
}
