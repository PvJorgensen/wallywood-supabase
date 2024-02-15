import { useEffect, useState } from "react"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { NavLink } from "react-router-dom"

export const GenreList = () => {
    const  [ genreData, setGenreData ] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if(supabase) {
            const { data, error } = await supabase
                .from('genres')
                .select('*')
                .order('title')
            if(error) {
                console.error("fejl i kald af genre", error)
            } else {
                setGenreData(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [setGenreData, supabase])

    console.log(genreData);

  return (
    <div>
        <ul>
        {genreData && genreData.map(item => {
            return(
                <li key={item.id}>
                    <NavLink to={item.slug}>{item.title}</NavLink>
                    
                </li>
            )
        })}
        </ul>
    </div>
  )
}
