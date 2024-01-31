import CustomFooter from "../components/organisms/CustomFooter"
import JobNavbar from "../components/organisms/JobNavbar"
import NotFound from "../components/organisms/NotFound"


const ErrorPage = () => {
    return(
        <>
        <div className="all">
        <JobNavbar/>
        <NotFound/>
        <CustomFooter/>
        </div>
        </>
    )
}

export default ErrorPage