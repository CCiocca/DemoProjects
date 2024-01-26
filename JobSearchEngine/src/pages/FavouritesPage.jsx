import CustomPagination from "../components/molecules/CustomPagination"
import CustomFooter from "../components/organisms/CustomFooter"
import FavouritesMain from "../components/organisms/FavouritesMain"
import JobNavbar from "../components/organisms/JobNavbar"


const FavouritesPage = () => {
    return(
        <>
        <JobNavbar/>
        <FavouritesMain/>
        <CustomPagination/>
        <CustomFooter/>
        </>
    )
}

export default FavouritesPage