import React from 'react';
import HistoryList from "@/components/LeftContent/HistoryList";

const LeftContent = () => {
    return (
        <div className="bg-white shadow rounded-lg p-2 md:block hidden">
            <HistoryList />
        </div>
    );
};

export default LeftContent;