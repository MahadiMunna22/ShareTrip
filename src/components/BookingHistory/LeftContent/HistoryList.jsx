import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {store} from "@/redux/store/store";
import {setHistoryDetails, setSelected} from "@/redux/slice/bookingHistory-slice";

const HistoryList = () => {
    const selected = useSelector(state => state.bookingHistory.selected);
    const [ListData, setListData] = useState([
        {
            id: 1,
            From: "DAC",
            To: "JFK",
            TripType: "RoundTrip",
            Date: "25 Mar - 4 Apr 2023",
            StopCount: 1
        },
        {
            id: 2,
            From: "SNP",
            To: "JFK",
            TripType: "SingleTrip",
            Date: "25 Mar - 4 Apr 2023",
            StopCount: 2
        },
        {
            id: 3,
            From: "ABC",
            To: "DEF",
            TripType: "RoundTrip",
            Date: "30 Mar - 4 Apr 2023",
            StopCount: 3
        },
        {
            id: 4,
            From: "TEST1",
            To: "TEST2",
            TripType: "RoundTrip",
            Date: "25 Mar - 4 Apr 2024",
            StopCount: 5
        },]);

    const handleOnClick = (idx) => {
        store.dispatch(setSelected(idx+1));
        store.dispatch(setHistoryDetails(ListData[idx]));
    }

    return (
        ListData?.map((item, idx) =>
            <div onClick={() => handleOnClick(idx)} key={idx.toString()} className={`p-4 flex cursor-pointer items-center ${idx === 0 ? "mb-1" : "my-1"} ${selected === idx+1 ? "rounded-lg shadow bg-[#E8F3FF]" : "bg-white"}`}>
                <div className="p-2 circle leading-none text-sm bg-blue-600 me-3">
                    <span className="circle__content text-white">{idx+1}</span>
                </div>
                <div>
                    <strong className="text-lg leading-none">{item?.From} → {item?.To}</strong><br/>
                    <p className="text-xs leading-none text-ellipsis">{item?.TripType} . {item?.Date} . {item?.StopCount} Stop</p>
                </div>
            </div>
        )
    );
};

export default HistoryList;