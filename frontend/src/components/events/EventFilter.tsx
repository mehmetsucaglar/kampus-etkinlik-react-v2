import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  category: Category | "";
  categories: string[];
  onSearchChange: (text: string) => void;
  onCategoryChange: (cat: Category | "") => void;
}

export default function EventFilter({ searchText, category, categories, onSearchChange, onCategoryChange }: EventFilterProps) {
  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
      <div className="form-group" style={{ flex: 2, minWidth: "250px" }}>
        <label htmlFor="arama">Etkinlik ara</label>
        <input
          id="arama"
          type="search"
          placeholder="Örn. atölye, kariyer"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ flex: 1, minWidth: "150px" }}>
        <label htmlFor="kategori">Kategori</label>
        <select
          id="kategori"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category | "")}
        >
          <option value="">Tümü</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}