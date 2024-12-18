import { AdminPanelListItem } from "./AdminPanelListItem";
import { AdminPanelClassroomList } from "./classrooms/AdminPanelClassroomList";
import { AddEditClassroom } from "./classrooms/AddEditClassroom";
import { AddEditEquipment } from "./equipments/AddEditEquipment";
import { AdminPanelEquipmentList } from "./equipments/AdminPanelEquipmentList.tsx";
import { AddEditReservation } from "./reservations/AddEditReservation";
import { Reservation } from "@/schemas/reservationSchemas";
import { Classroom } from "@/schemas/classroomSchemas";
import { Equipment } from "@/schemas/equipmentSchemas";
import { AdminPanelReservationList } from "./reservations/AdminPanelReservationList";
import { ExtraRoom } from "@/schemas/extraRoomSchemas";
import { AdminPanelExtraRoomList } from "./extra-rooms/AdminPanelExtraRoomList";
import { AddEditExtraRoom } from "./extra-rooms/AddEditExtraRoom";

type AdminPanelListProps = {
  equipments: Equipment[];
  classrooms: Classroom[];
  extraRooms: ExtraRoom[];
  reservations: Reservation[];
};

export default function AdminPanelList({
  equipments,
  classrooms,
  extraRooms,
  reservations,
}: AdminPanelListProps) {
  return (
    <ul className="flex w-[35vw] flex-col items-stretch justify-start gap-4">
      <AdminPanelListItem name="Classrooms">
        <AddEditClassroom classrooms={classrooms} equipments={equipments} />
        <AdminPanelClassroomList classrooms={classrooms} />
      </AdminPanelListItem>
      <AdminPanelListItem name="Equipments">
        <AddEditEquipment equipments={equipments} />
        <AdminPanelEquipmentList equipments={equipments} />
      </AdminPanelListItem>
      <AdminPanelListItem name="Extra Rooms">
        <AddEditExtraRoom extraRooms={extraRooms} />
        <AdminPanelExtraRoomList extraRooms={extraRooms} />
      </AdminPanelListItem>
      <AdminPanelListItem name="Reservations">
        <AddEditReservation reservations={reservations} />
        <AdminPanelReservationList reservations={reservations} />
      </AdminPanelListItem>
    </ul>
  );
}
