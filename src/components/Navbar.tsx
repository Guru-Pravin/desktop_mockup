import railwayImage from "../assets/Indian_Railways.svg"
import profileImage from "../assets/profile.jpg"
import { FaBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";


export default function Navbar() {
    return (
        <div className="bg-white Regular shadow ps-3 pe-3 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img style={{ height: "45px", width: "45px" }} className="me-2" src={railwayImage} alt="logo" />
                <h3
                    className="text-black fs-5 fw-semibold">BLOCK AUTHORIZATION APP</h3>
            </div>

            <div className="d-flex align-items-center">
                <div className="d-flex flex-row align-items-center me-5">
                    <p className="text-black fs-5 fw-medium mt-3 me-2">Requests Pending</p>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <FaBell className="text-danger fs-4" style={{ transform: 'rotate(20deg)' }} />
                        <div style={{ position: 'absolute', top: '-8px', right: '-20px' }}>
                            <span style={{ fontSize: '12px', fontWeight: "700" }} className="text-black bg-warning px-2 py-1 rounded-circle">3</span>
                        </div>
                    </div>
                    <div className="ms-4">
                        <MdArrowDropDown />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <img src={profileImage} alt="profile" style={{ height: "50px", width: "50px", borderRadius: "50%" }} className="me-2" />
                    <div className="d-flex flex-column">
                        <p className="mt-2 mb-0 text-black fs-6 fw-medium">Angelina Ruiz</p>
                        <p className="d-inline fs-6 mt-1">
                            <span style={{ fontSize: "13px" }} className="text-white bg-success rounded-3 ps-2 p-1 pe-2">Admin</span>
                        </p>
                    </div>
                    <MdArrowDropDown className="ms-2" />
                </div>
            </div>

        </div>
    )

}