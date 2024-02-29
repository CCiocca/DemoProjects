import CustomPagination from "../components/molecules/CustomPagination"
import CustomFooter from "../components/organisms/CustomFooter"
import FavouritesMain from "../components/organisms/FavouritesMain"
import JobNavbar from "../components/organisms/JobNavbar"


const FavouritesPage = () => {
    return(
        <>
        <div className="all">
        <JobNavbar/>
        <FavouritesMain/>
        {/* <CustomPagination/> */}
        <CustomFooter/>
        </div>
        </>
    )
}

export default FavouritesPage