"use client"
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import axios from 'axios';
function CountDownTimer({targetDate}:any) {
    const calculateTimeLeft = () => {
        const now = moment(Date.now());
        const end = moment(targetDate);
        const duration = moment.duration(end.diff(now));
    
        return {
          days: Math.floor(duration.asDays()),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        };
      };
      
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const handlerDeleteJobs=async()=>{
        if(timeLeft.days<=0&& timeLeft.hours<=0&& timeLeft.minutes<=0&& timeLeft.seconds<=0){
            const send=(await axios.post("/api/postjob/deletejobs",{targetDate:targetDate})).data;
            console.log(send)
        }
      }
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
     handlerDeleteJobs();
        return () => clearInterval(timer);
      }, [targetDate]);
    
  return (
    <div>
       {timeLeft.days}d/{timeLeft.hours}h/{timeLeft.seconds}s
    </div>
  )
}

export default CountDownTimer