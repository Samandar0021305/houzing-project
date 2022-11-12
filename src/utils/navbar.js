import useId from "../hooks/useId";
import HomePage from "../pages/Home/index"
import Proproties from "../pages/Properties/index"

export const navbar = [
    {id:useId ,  element: <HomePage />, title:'Home', path:'/home' , private:false,hidden:false},
    {id:useId , element : <Proproties /> , title:'Properties', path:'/properties' , private:false,hidden:false},
]

export default navbar