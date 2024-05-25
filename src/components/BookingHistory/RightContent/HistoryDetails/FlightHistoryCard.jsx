import React, {useState} from 'react';
import {Badge} from "@/shadcn-components/ui/badge";
import {useSelector} from "react-redux";

const FlightHistoryCard = () => {
    const historyDetails = useSelector(state => state.bookingHistory.details);
    const selected = useSelector(state => state.bookingHistory.selected);

    return (
        <div className="grid grid-cols-12 grid-flow-col border-0 border-b">
            <div className="md:mt-0 mt-4 md:col-span-1 col-span-full flex justify-center items-center">
                <div className="p-2 circle leading-none text-sm bg-blue-600">
                    <span className="circle__content text-white">{selected}</span>
                </div>
            </div>

            <div className="md:col-span-11 col-span-full flex md:flex-row flex-col flex-grow justify-between items-center py-3 pe-4">
                <div>
                    <strong className="text-lg leading-none">{historyDetails?.From} → {historyDetails?.To}</strong><br/>
                    <span className="text-sm leading-none">{historyDetails?.TripType} . {historyDetails?.Date} . {historyDetails?.StopCount} Stop</span>
                </div>
                <div className="md:m-0 mt-4">
                    <Badge className="text-nowrap bg-blue-100 text-[#1882FF] p-2 py-1">33h 20m</Badge>
                </div>
            </div>
        </div>
    );
};

export default FlightHistoryCard;