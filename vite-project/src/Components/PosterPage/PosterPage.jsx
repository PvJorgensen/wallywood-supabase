import styles from './PosterPage.module.scss'
import { GenreList } from '../GenreList/GenreList'
import { PosterList } from '../PosterList/PosterList'
export const PosterPage = () => {
  return (
    <div className={styles.gallery}>
        <GenreList />
        <PosterList />
    </div>
  )
}
