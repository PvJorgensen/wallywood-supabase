import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider"
import styles from './Posterlist.module.scss'

export const PosterList = () => {
    const { genreSlug } = useParams()
    const [ posters, setPosters] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("genres")
                .select("id, title, posters(id,name,slug,image,price)")
                .eq("slug", genreSlug)

            if (error) {
                console.error("Error fetching posters")
            } else {
                const sortedData = data[0].posters.sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
                setPosters(sortedData)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [genreSlug, supabase] )

  return (
        <div className={styles.posterWrapper}>
            {posters &&
            posters.map((poster) =>{
                return (
                    
                    <div  className={styles.indhold} key={poster.id}>
                            <link to={`/posters/details/${poster.slug}`} />
                            <img src={poster.image} alt="" />
                    </div>
                    
                )
            })}
        </div>
  )
}
