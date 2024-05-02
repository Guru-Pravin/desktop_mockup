import { MdAlarm, MdArrowDropDown, MdPowerSettingsNew } from "react-icons/md";
import picture from "../assets/picture.png";

const Approvaldetail = () => {
    return (
        <div className="w-65 m-3 shadow py-5">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <img src={picture} alt="profile" style={{ height: "50px", width: "50px", borderRadius: "50%" }} className="me-2" />
                    <h3>Terry Holloway</h3>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="m-4 fs-6">ID: D/R-63939</h3>
                    <button style={{ background: 'blue', color: 'white', borderRadius: '10px' }}>Pending</button>
                </div>
            </div>
            <div className="mt-4">
                <div className="heading-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '2px solid gold', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdPowerSettingsNew style={{ color: 'black', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Disconnection</h2>
                    </div>
                    <div style={{ background: 'gold', borderRadius: '50%', padding: '5px' }}>
                        <MdArrowDropDown style={{ color: 'black', fontSize: '1.5rem' }} />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="heading-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '2px solid gold', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdAlarm style={{ color: 'black', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Extended Time</h2>
                    </div>
                    <div style={{ background: 'gold', borderRadius: '50%', padding: '5px' }}>
                        <MdArrowDropDown style={{ color: 'black', fontSize: '1.5rem' }} />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="heading-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '2px solid gold', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdAlarm style={{ color: 'black', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Extended Time</h2>
                    </div>
                    <div style={{ background: 'gold', borderRadius: '50%', padding: '5px' }}>
                        <MdArrowDropDown style={{ color: 'black', fontSize: '1.5rem' }} />
                    </div>
                </div>
            </div>
            <div className="mt-4" style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '300px', marginTop: '5px', marginRight: '100px' }}>
                    <div>Station - Palani</div>
                    <div>Requester - PB-72084</div>
                    <div>Plan - PB-72084</div>
                    <div>Type - PB-72084</div>
                    <div>Isolater No - PB-72084</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', marginRight: '100px', marginTop: '5px' }}>
                    <div>Elementary Section - PB-72084</div>
                    <div>Line of Reference - PB-72084</div>
                    <div>Block Date - PB-72084</div>
                    <div>End Time - PB-72084</div>
                    <div>Remarks - PB-72084</div>
                </div>
            </div>

            <div className="container h-screen relative mt-8 mr-8 flex">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="flex-none rejected-box" style={{ background: 'red', width: '8%', borderRadius: '10px', padding: '5px', margin: '25px 0 0', textAlign: 'right',marginLeft:'900px' }}>
                        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Reject</h2>
                    </div>
                    <div className="flex-none approved-box" style={{ background: 'gold', width: '11%', borderRadius: '10px', padding: '5px', margin: '25px 0 0 0', textAlign: 'right' }}>
                        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Approve</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approvaldetail;
