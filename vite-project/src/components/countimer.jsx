import React, { useEffect, useState } from 'react'

function Countimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
    
      useEffect(() => {
        const calculateTimeLeft = () => {
          const conferenceDate = new Date("March 21, 2025 00:00:00").getTime()
          const now = new Date().getTime()
          const difference = conferenceDate - now
    
          if (difference > 0) {
            setTimeLeft({
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((difference % (1000 * 60)) / 1000),
            })
          }
        }
    
        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)
    
        return () => clearInterval(timer)
      }, [])
    
      return (
        <div className="flex flex-col items-center justify-center mt-4 w-full pt-12">
          <h2 className="text-3xl font-bold text-green-700 mb-2">Conference Starts In:</h2>
          <div className="flex space-x-4 text-center sm:scale-100 scale-90">
            <div className="flex flex-col items-center ">
              <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
                {timeLeft.days}
              </div>
              <span className="text-sm mt-1 text-green-700 font-medium">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
                {timeLeft.hours}
              </div>
              <span className="text-sm mt-1 text-green-700 font-medium">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
                {timeLeft.minutes}
              </div>
              <span className="text-sm mt-1 text-green-700 font-medium">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-lg w-20 h-20 flex items-center justify-center text-4xl font-bold">
                {timeLeft.seconds}
              </div>
              <span className="text-sm mt-1 text-green-700 font-medium">Seconds</span>
            </div>
          </div>
        </div>
      )
}

export default Countimer

