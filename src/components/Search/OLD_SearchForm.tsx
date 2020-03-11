import React, { useState } from "react";

interface Props {
  onSubmit: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  // const searchInput = useRef<HTMLInputElement | null>(null);

  // const onSubmitHandler = () => {
  //
  //   onSubmit(searchTerm);
  // };

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
