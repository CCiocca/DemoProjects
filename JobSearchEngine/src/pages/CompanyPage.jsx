import CustomPagination from "../components/molecules/CustomPagination"
import CompanySearchResults from "../components/organisms/CompanySearchResults"
import CustomFooter from "../components/organisms/CustomFooter"
import JobNavbar from "../components/organisms/JobNavbar"


const CompanyPage = () => {
    return(
        <>
        <div className="all">
        <JobNavbar/>
            <div className="main">
        <CompanySearchResults/>
        {/* <CustomPagination/> */}
            </div>
        <CustomFooter/>
        </div>
        </>
    )
}

export default CompanyPage