import React from 'react';
import BreadcrumbComponent from "@/components/RightContent/BreadcrumbComponent";
import HistoryDetails from "@/components/RightContent/HistoryDetails";

const RightContent = () => {
    return (
        <div className="md:col-span-3 col-span-4">
            <BreadcrumbComponent />
            <HistoryDetails />
        </div>
    );
};

export default RightContent;