import React, {useState} from 'react';
import LeftContent from "@/components/BookingHistory/LeftContent";
import RightContent from "@/components/BookingHistory/RightContent";

const BookingHistoryPage = () => {

    return (
        <div className="grid grid-cols-4 gap-4 mt-4">
            <LeftContent/>
            <RightContent/>
        </div>
    );
};

export default BookingHistoryPage;