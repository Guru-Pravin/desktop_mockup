import StepProgressBar from "./progressBar/index.tsx";
import profileImage from "../assets/profile.jpg";

export default function Memo() {
    return (
        <div
            style={{
                cursor: "pointer"
            }}
            className="border border-dark-subtle p-3 m-2"
        >
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <img
                        src={profileImage}
                        alt="profile"
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                        }}
                        className="me-2"
                    />
                    <h3 className="fs-5">Terry holloway</h3>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="fs-6 mb-3 me-5 text-black">ID:D/R-63939</h3>
                    <p className="d-inline">
                        <span className="bg-primary text-white rounded-5 py-1 px-2 p-1">
                            Pending
                        </span>
                    </p>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center m-3">
                <div>
                    <h2 className="fw-semibold fs-6 mb-0">Plane</h2>
                    <h3 className=" fs-5 fw-normal mt-0">Extend Time</h3>
                </div>
                <div>
                    <h2 className="fw-semibold fs-6 mb-0">station</h2>
                    <h3 className="fs-5 fw-normal mt-0">Maivadi Road</h3>
                </div>
                <div>
                    <h2 className="fw-semibold fs-6 mb-0">Module</h2>
                    <h3 className="fs-5 fw-normal mt-0">S&T</h3>
                </div>
            </div>

            {/* <StepProgressBar /> */}
        </div>
    );
}
