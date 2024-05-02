import React from "react";
import Memo from "./Memo";
import { CgMenuGridO } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { CiPower } from "react-icons/ci";

const App: React.FC = () => {
    const memoArray: number[] = [1, 2, 3];

    return (
        <div className="d-flex w-100">
            <div className="p-4 " style={{ backgroundColor: "#0d0366" }}>
                <div className="">
                    <CgMenuGridO className="text-white fs-3" />
                </div>
                <div className="mt-4">
                    <TbSettings className="text-white fs-3" />
                </div>
                <div className="mt-4">
                    <CiPower className="text-white fs-3" />
                </div>
            </div>
            <div className="flex-grow-1">
                {memoArray.map((index) => (
                    <div key={index} className="p-1">
                        <Memo />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

