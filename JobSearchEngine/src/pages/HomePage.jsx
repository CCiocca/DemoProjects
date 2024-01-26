import CustomPagination from "../components/molecules/CustomPagination"
import CustomFooter from "../components/organisms/CustomFooter"
import JobNavbar from "../components/organisms/JobNavbar"
import MainSearch from "../components/organisms/MainSearch"


const HomePage = () => {
    return(
        <>
        <JobNavbar/>
        <MainSearch/>
        <CustomPagination/>
        <CustomFooter/>
        </>
    )
}

export default HomePage