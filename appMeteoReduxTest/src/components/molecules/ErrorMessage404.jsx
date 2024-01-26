import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

// Error message that appears when the user is auotomatically/manually redirected to the main page
const ErrorMessage = () => {
    return (
        <Container className="d-flex flex-column justify-content-center my-5" >
        <h1>Sorry, page not found!</h1>
        <p>You will be redirected to the homepage in {count} seconds or <Link to="/">click here </Link></p>
        </Container>
    )
}


export default ErrorMessage

