import CustomPagination from "../components/molecules/CustomPagination"
import CustomFooter from "../components/organisms/CustomFooter"
import JobNavbar from "../components/organisms/JobNavbar"
import MainSearch from "../components/organisms/MainSearch"


const HomePage = () => {
    return(
        <>
        <div className="all">
            <JobNavbar/>
                <div className="main">
                    <MainSearch/>
                    <CustomPagination/>
                </div>
                <CustomFooter/>
        </div>
        </>
    )
}

export default HomePage