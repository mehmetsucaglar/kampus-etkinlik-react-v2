import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
  events: CampusEvent[];
  onShowDetail: (id: string) => void;
  emptyText?: string;
}

export default function EventList({ events, onShowDetail, emptyText = "Sonuç bulunamadı." }: EventListProps) {
  if (events.length === 0) {
    return <p style={{ marginBottom: "15px", fontWeight: "bold" }} className="error-text">{emptyText}</p>;
  }

  return (
    <div className="etkinlik-grid etkinlik-grid-2">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onShowDetail={onShowDetail} />
      ))}
    </div>
  );
}