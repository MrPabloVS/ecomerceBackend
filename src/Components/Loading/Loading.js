import { Spinner } from "react-bootstrap";

function Loading() {
    return(
        <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loading