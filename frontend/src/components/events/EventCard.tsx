import type { CampusEvent } from "../../types/campus-event";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

export default function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <article className="etkinlik-kart">
      <div>
        <h3>{event.title}</h3>
        <p>{event.category}</p>
        <p>Tarih: {event.date}, {event.time}</p>
        <p>Yer: {event.location}</p>
        <p>Kontenjan: {event.capacity} kişi</p>
        <p>{event.description}</p>
      </div>
      <button className="btn-primary" style={{ marginTop: "10px" }} onClick={() => onShowDetail(event.id)}>
        Detayları gör
      </button>
    </article>
  );
}