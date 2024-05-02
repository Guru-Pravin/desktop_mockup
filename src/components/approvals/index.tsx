
import StepProgressBar from "../progressBar";
import profileImage from "../../assets/profile.jpg"


const ApprovalsCard = () => {


    return (
        <div className="w-100 shadow py-5">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-between align-items-center">
                   <img src={profileImage} alt="profile" style={{ height: "50px", width: "50px", borderRadius: "50%" }} className="me-2" />
                    <h3>Terry holloway</h3>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className= "m-4 fs-6">ID:D/R-63939</h3>
                    <button>Pending</button>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center m-3">
                <div><h2 className= " fs-6">Plane</h2>
                    <h3 className= " fs-6">Extend Time</h3>
                </div>
                <div><h2 className= " fs-6">station</h2>
                    <h3 className= " fs-6">Maivadi Road</h3>
                </div>
                <div><h2 className= " fs-6">Module</h2>
                    <h3 className= " fs-6">S&T</h3>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <StepProgressBar />
                </div>
        
        </div>
    )
}

export default ApprovalsCard