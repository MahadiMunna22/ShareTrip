"use client"

import React from 'react';
import FlightHistoryCard from "@/components/RightContent/HistoryDetails/FlightHistoryCard";
import FlightDetails from "@/components/RightContent/HistoryDetails/FlightDetails";

const HistoryDetails = () => {
    return (
        <div className="bg-white shadow rounded-lg">
            <FlightHistoryCard />
            <FlightDetails/>
        </div>
    );
};

export default HistoryDetails;