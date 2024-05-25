"use client"

import React, {useState} from 'react';
import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";

const BookingHistoryPage = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="grid grid-cols-4 gap-4 h-96 mt-4">
            <LeftContent/>
            <RightContent/>
        </div>
    );
};

export default BookingHistoryPage;