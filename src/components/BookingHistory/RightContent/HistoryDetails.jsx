import React from 'react';
import FlightHistoryCard from "@/components/BookingHistory/RightContent/HistoryDetails/FlightHistoryCard";
import FlightDetails from "@/components/BookingHistory/RightContent/HistoryDetails/FlightDetails";

const HistoryDetails = () => {
    return (
        <div className="bg-white shadow rounded-lg">
            <FlightHistoryCard />
            <FlightDetails/>
        </div>
    );
};

export default HistoryDetails;