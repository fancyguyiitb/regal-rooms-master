import React, { useContext } from "react";
import Room from "./Room";
import { RoomContext } from "../context/RoomContext";
import { SpinnerInfinity } from "spinners-react";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
  return (
    <>
      <section className="py-24">
        {/* overlay + spinner */}
        {loading && (
          <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
            <SpinnerInfinity color="white"/>
          </div>
        )}
        <div className="container mx-auto lg:px-0">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
            {rooms.map((room) => {
              return <Room room={room} key={room.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
