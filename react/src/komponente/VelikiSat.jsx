import React, { useState, useEffect } from "react";

const VelikiSat = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();

    let textColor = "red";

    if (hours === 8 && minutes >= 0 && minutes <= 29) {
        textColor = "green";
    }

    const clockStyle = {
        color: textColor,
        fontSize: 100,
    };

    return (
        <div style={clockStyle} className=" text-center font-bold">
            {hours}:{minutes < 10 ? "0" + minutes : minutes}
        </div>
    );
};

export default VelikiSat;
