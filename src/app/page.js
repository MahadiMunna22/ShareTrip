"use client";

import TopBar from "@/components/BookingHistory/TopBar";
import BookingHistoryPage from "@/components/BookingHistoryPage";
import ReduxProvider from "@/redux/store/redux-provider";

export default function Home() {
  return (
      <ReduxProvider>
        <main className="h-fit">
            <TopBar/>
            <div className="container mx-auto">
                <BookingHistoryPage/>
            </div>
        </main>
      </ReduxProvider>
  )
}
