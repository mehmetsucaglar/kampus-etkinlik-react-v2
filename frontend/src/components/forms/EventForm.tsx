interface EventFormProps {
  onSubmit: () => void;
}

export default function EventForm({ onSubmit }: EventFormProps) {
  return (
    <>
      <p style={{ color: "var(--renk-gri)", marginBottom: "15px", fontStyle: "italic" }}>
        Bu sprintte form sadece görünüm; kayıt yapılmaz.
      </p>
      
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <div className="form-group">
          <label htmlFor="title">Etkinlik Adı</label>
          <input id="title" type="text" maxLength={80} placeholder="Örn. Kariyer Günleri 2026" />
        </div>
        <div className="form-group">
          <label htmlFor="categoryForm">Kategori</label>
          <select id="categoryForm">
            <option value="">Seçiniz</option>
            <option value="Seminer">Seminer</option>
            <option value="Atölye">Atölye</option>
            <option value="Söyleşi">Söyleşi</option>
            <option value="Yarışma">Yarışma</option>
          </select>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--bosluk-m)" }}>
          <div className="form-group">
            <label htmlFor="date">Tarih</label>
            <input id="date" type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Saat</label>
            <input id="time" type="time" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Yer</label>
          <input id="location" type="text" placeholder="Örn. A Blok Konferans Salonu" />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Kontenjan</label>
          <input id="capacity" type="number" min={1} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Açıklama</label>
          <textarea id="description" rows={5}></textarea>
        </div>
        
        <button type="submit" className="btn-primary" style={{ marginTop: "10px" }}>Kaydet</button>
      </form>
    </>
  );
}