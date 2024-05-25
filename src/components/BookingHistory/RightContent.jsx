import React from 'react';
import BreadcrumbComponent from "@/components/BookingHistory/RightContent/BreadcrumbComponent";
import HistoryDetails from "@/components/BookingHistory/RightContent/HistoryDetails";

const RightContent = () => {
    return (
        <div className="md:col-span-3 col-span-4">
            <BreadcrumbComponent />
            <HistoryDetails />
        </div>
    );
};

export default RightContent;