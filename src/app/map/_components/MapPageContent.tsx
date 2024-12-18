"use client";

import { Classroom } from "@/schemas/classroomSchemas";
import { Equipment } from "@/schemas/equipmentSchemas";
import { ExtraRoom } from "@/schemas/extraRoomSchemas";
import { useState } from "react";
import { MapSection } from "./MapSection";
import { Floor } from "@/schemas/floorsSchema";
import { ThreeSixtyViewer } from "@/app/sphere/_components/ThreeSixtyViewer";
import { RoomInformationSection } from "./RoomInformationSection";

type MapPageContentProps = {
  classrooms: Classroom[];
  equipments: Equipment[];
  extraRooms: ExtraRoom[];
  floors: Floor[];
  reservationTypes: string[];
};

export function MapPageContent({
  classrooms,
  equipments,
  extraRooms,
  floors,
  reservationTypes,
}: MapPageContentProps) {
  const [clickedRoom, setClickedRoom] = useState<string | null>(null);
  const extraRoomsTypes = extraRooms
    .map((e) => e.type)
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

  return (
    <div className="flex h-[81vh] w-full flex-row justify-stretch">
      <MapSection
        clickedRoom={clickedRoom}
        setClickedRoom={setClickedRoom}
        classrooms={classrooms}
        equipments={equipments}
        extraRooms={extraRooms}
        extraRoomsTypes={extraRoomsTypes}
        floors={floors}
      />
      <div className="border-l-4 border-black"></div>
      <RoomInformationSection
        clickedRoom={clickedRoom}
        setClickedRoom={setClickedRoom}
        classrooms={classrooms}
        extraRooms={extraRooms}
        equipments={equipments}
        reservationTypes={reservationTypes}
      />
    </div>
  );
}
