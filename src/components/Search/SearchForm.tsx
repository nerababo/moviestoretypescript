import React, { useRef } from "react";

interface Props {
  onSubmit: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(searchInput.current!.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input type="text" placeholder="search..." ref={searchInput} />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
