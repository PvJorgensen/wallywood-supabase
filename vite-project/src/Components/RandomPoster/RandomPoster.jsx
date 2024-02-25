import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useSupabase } from "../../Providers/SupabaseProvider"

export const RandomPoster = () => {
    const [posters, setPosters] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("posters")
                .select("id,name,slug,image,price")
            if (error) {
                console.error("Error fetching posters")
            } else {
                const sortedData = data.sort(function(a,b){
                    return 0.5 - Math.random()
                })
                setPosters(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [supabase])

    return (
        <div>
            {posters &&
                posters.slice(0, 2).map((poster) => {
                    console.log(poster);
                    return (
                        <div key={poster.id}>
                            <Link to={`/posters/details/${poster.slug}`} />
                            <img src={poster.image} alt="" />
                        </div>
                    )
                })}
        </div>
    )
}
