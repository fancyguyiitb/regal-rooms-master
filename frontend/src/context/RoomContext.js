import React, { createContext, useEffect, useState } from "react";

//data
import { roomData } from "../data";

//creating context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log(total);
    console.log(rooms);

    //filter rooms according to total people
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
  };

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  console.log("Adults: " + adults[0], "Kids: " + kids[0]);
  return (
    <RoomContext.Provider
      value={{
        rooms,
        setRooms,
        adults,
        setAdults,
        kids,
        setKids,
        total,
        setTotal,
        handleClick,
        loading,
        setLoading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
