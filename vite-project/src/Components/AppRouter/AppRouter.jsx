import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
// import { Posters } from "../../Pages/Posters/Posters"
// import { PosterDetails } from "../Posters/PosterDetails"
import { PosterList } from "../PosterList/PosterList.jsx"
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound"
import { PosterPage } from "../../Pages/PosterPage/PosterPage.jsx"
// import { Om } from "../../Pages/Om/Om"
// import { Login } from "../../Pages/Login/Login"


export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path="/posters" element={<PosterPage />}>
                <Route path=":genreSlug" element={<PosterList />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        
        
    )
}