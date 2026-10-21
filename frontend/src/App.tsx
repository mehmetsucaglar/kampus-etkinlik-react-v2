import { useState, useEffect } from "react";
import "./App.css";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { events } from "./data/events";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
    window.scrollTo(0, 0);
  }

  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  useEffect(() => {
    if (page === "detail" && selected) {
      document.title = `Kampüs Etkinlikleri - ${selected.title}`;
    } else if (page === "add" || page === "update") {
      document.title = `Kampüs Etkinlikleri - Etkinlik ${page === "add" ? "Ekle" : "Güncelle"}`;
    } else if (page === "events") {
      document.title = "Kampüs Etkinlikleri - Tüm Etkinlikler";
    } else {
      document.title = "Kampüs Etkinlikleri";
    }
  }, [page, selected]);

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const categories = [...new Set(events.map(e => e.category))];

  // Sayfaya göre Header başlık ve metinlerini dinamik belirliyoruz
  let headerTitle = "Kampüs Etkinlikleri";
  let headerText = "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.";

  if (page === "detail" && selected) {
    headerTitle = selected.title;
    headerText = "";
  } else if (page === "events") {
    headerTitle = "Tüm Etkinlikler";
    headerText = "Ekim ayında kampüste düzenlenen etkinlikler.";
  } else if (page === "add" || page === "update") {
    headerTitle = page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle";
    headerText = "";
  }

  return (
    <div className="container">
      <Header 
        title={headerTitle} text={headerText} 
      />
      <Navigation current={page} onNavigate={go} />

      <main>
        {page === "home" && (
          <section>
            <h2 style={{ marginBottom: "1rem" }}>Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} emptyText="Yaklaşan etkinlik bulunmuyor." />
            <button className="btn-primary" onClick={() => go("events")}>Tüm etkinlikleri gör</button>
          </section>
        )}

        {page === "events" && (
          <section>
            <EventFilter searchText={searchText} category={category} categories={categories} onSearchChange={setSearchText} onCategoryChange={setCategory} />
            <p style={{ marginBottom: "15px", fontWeight: "bold" }}>
              {filtered.length === 0 ? "" : `${filtered.length} etkinlik listeleniyor.`}
            </p>
            <EventList events={filtered} onShowDetail={(id) => go("detail", id)} emptyText="Arama kriterlerine uygun etkinlik bulunamadı." />
          </section>
        )}

        {page === "detail" && (
          <section>
            {!selected ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <p className="error-text" style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Etkinlik bulunamadı.</p>
                <button className="btn-primary" onClick={() => go("events")}>Listeye dön</button>
              </div>
            ) : (
              <EventDetail event={selected} onBack={() => go("events")} onEdit={(id) => go("update", id)} />
            )}
          </section>
        )}

        {(page === "add" || page === "update") && (
           <section>
             <h2 style={{ color: "var(--renk-ana)", marginBottom: "10px" }}>
               {page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}
             </h2>
             <EventForm onSubmit={() => window.scrollTo(0, 0)} />
           </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;