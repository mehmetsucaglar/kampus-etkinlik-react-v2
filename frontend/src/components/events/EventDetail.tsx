import type { CampusEvent } from "../../types/campus-event";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

export default function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <article className="detay-layout">
      {event.image && (
        <figure>
          <img className="detay-afis" src={event.image} alt={event.title} />
        </figure>
      )}
      <div>
        <h2 style={{ color: "var(--renk-ana)", marginBottom: "10px" }}>{event.title}</h2>
        <p style={{ color: "var(--renk-gri)", marginBottom: "20px" }}>{event.date} {event.location}</p>
        
        <div style={{ padding: "15px", border: "1px solid var(--renk-kenarlik)", borderRadius: "var(--kose)", background: "#fff", marginBottom: "20px" }}>
          <h3 style={{ borderBottom: "1px solid var(--renk-kenarlik)", paddingBottom: "5px", marginBottom: "10px" }}>Etkinlik Künyesi</h3>
          <dl className="detay-kunye">
            <dt>Tarih</dt>
            <dd>{event.date}, {event.time}</dd>
            <dt>Yer</dt>
            <dd>{event.location}</dd>
            <dt>Kategori</dt>
            <dd>{event.category}</dd>
            <dt>Kontenjan</dt>
            <dd>{event.capacity} kişi</dd>
          </dl>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Açıklama</h3>
          <p>{event.description}</p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button className="btn-primary" style={{ background: "var(--renk-gri)" }} onClick={onBack}>← Listeye dön</button>
          <button className="btn-primary" onClick={() => onEdit(event.id)}>Bu etkinliği güncelle</button>
        </div>
      </div>
    </article>
  );
}