import React from 'react';
import LocationIcon from "@/assets/images/LocationIcon.png"
import EmiratesIcon from "@/assets/images/Emirates.png"
import PlaneIcon from "@/assets/images/PlaneIcon.png"
import ColoredLocationIcon from "@/assets/images/ColoredLocationIcon.png"
import WarningIcon from "@/assets/images/Warning.png"
import Image from "next/image";
import {useSelector} from "react-redux";

const FlightDetails = () => {
    const historyDetails = useSelector(state => state.bookingHistory.details);

    return (
        <>
            <div className="grid grid-cols-12 grid-flow-col">
                <div className="col-span-1 flex justify-center items-center">
                    <Image src={LocationIcon} alt='mySvgImage' />
                </div>

                <div className="col-span-11 flex md:flex-row flex-col flex-grow justify-between md:items-center my-3 me-4 rounded-lg bg-gray-100 p-4 py-3 text-sm">
                    <strong>Departure from Dhaka</strong>
                    <span><strong>Terminal 1:</strong> Hazrat Shahjalal International Airport</span>
                </div>
            </div>
            <div className="grid grid-cols-12 grid-rows-4 row-auto grid-flow-col">
                <div className="col-span-1 row-span-4 flex flex-col justify-between items-center my-6">
                    <Image src={EmiratesIcon} alt='mySvgImage' />
                    <div className="w-0.5 bg-gray-300 h-full my-2"></div>
                    <Image src={PlaneIcon} alt='mySvgImage' />
                    <div className="w-0.5 bg-gray-300 h-full my-2"></div>
                    <Image src={LocationIcon} alt='mySvgImage' />
                </div>

                <div className="col-span-11 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 pe-4">
                    <div >
                        <strong className="text-lg leading-none">DAC - DXB</strong><br/>
                        <span className="text-sm leading-none">12 hr 20 min</span>
                    </div>
                    <div >
                        <strong className="text-lg leading-none">07:30 PM</strong><br/>
                        <span className="text-sm leading-none">28 Mar, Friday</span>
                    </div>
                    <div >
                        <strong className="text-lg leading-none">08:50 AM</strong><br/>
                        <span className="text-sm leading-none">29 Mar, Saturday</span>
                    </div>
                </div>
                <div className="col-span-11 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 pe-4">
                    <div>
                        <strong className="leading-none">Turkish Airlines</strong><br/>
                        <span className="text-sm leading-none">Flight no : TUR467</span>
                    </div>
                    <div>
                        <span className="text-lg leading-none">Airbus Industrie 737-800-738</span><br/>
                        <span className="text-sm leading-none">Class : <strong>ECONOMY-Y (O)</strong></span>
                    </div>
                </div>
                <div className="col-span-11 row-span-2">
                    <div className="flex flex-grow justify-between items-center rounded-lg bg-[#FFE1C2] p-4 py-3 text-sm my-3 me-4">
                        <div className='flex justify-start items-center'><Image src={WarningIcon} alt='mySvgImage' />
                            <span className="ms-2">Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality</span>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col flex-grow justify-between md:items-center rounded-lg bg-gray-100 p-4 py-3 text-sm my-3 me-4">
                        <strong>Layover at Dubai: 12 hr 20 min </strong>
                        <span>Dubai International Airport</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 grid-rows-3 row-auto grid-flow-col">
                <div className="col-span-1 row-span-4 flex flex-col justify-between items-center my-6">
                    <Image src={EmiratesIcon} alt='mySvgImage' />
                    <div className="w-0.5 bg-gray-300 h-full my-2"></div>
                    <Image src={PlaneIcon} alt='mySvgImage' />
                    <div className="w-0.5 bg-gray-300 h-full my-2"></div>
                    <Image src={ColoredLocationIcon} alt='mySvgImage' />
                </div>

                <div className="col-span-11 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 pe-4">
                    <div >
                        <strong className="text-lg leading-none">DAC - DXB</strong><br/>
                        <span className="text-sm leading-none">12 hr 20 min</span>
                    </div>
                    <div >
                        <strong className="text-lg leading-none">07:30 PM</strong><br/>
                        <span className="text-sm leading-none">28 Mar, Friday</span>
                    </div>
                    <div >
                        <strong className="text-lg leading-none">08:50 AM</strong><br/>
                        <span className="text-sm leading-none">29 Mar, Saturday</span>
                    </div>
                </div>
                <div className="col-span-11 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 pe-4">
                    <div>
                        <strong className="leading-none">Turkish Airlines</strong><br/>
                        <span className="text-sm leading-none">Flight no : TUR467</span>
                    </div>
                    <div>
                        <span className="text-lg leading-none">Airbus Industrie 737-800-738</span><br/>
                        <span className="text-sm leading-none">Class : <strong>ECONOMY-Y (O)</strong></span>
                    </div>
                </div>
                <div className="col-span-11">
                    <div className="flex md:flex-row flex-col flex-grow justify-between md:items-center rounded-lg bg-gray-100 p-4 py-3 text-sm my-3 me-4">
                        <strong>Destination at New York </strong>
                        <span><strong>Terminal 4:</strong> John F Kennedy International Airport</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightDetails;