import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider"

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
        <div>
        <h1>Plakater - {genreSlug}</h1>
        <div>
            {posters &&
            posters.map((poster) =>{
                return (
                    
                    <div key={poster.id}>
                        <figure>
                            <link to={`/posters/details/${poster.slug}`} />
                            <img src={poster.image} alt="" />
                        </figure>
                    </div>
                    
                )
            })}
        </div>
        </div>  )
}
