import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactElement
} from "react";
import debounce from "lodash.debounce";

interface Props {
  handleSearch: (value: string) => void;
  activeTab: number;
}

export default function SearchBar({
  handleSearch,
  activeTab
}: Props): ReactElement {
  const [searchTerm, setSearchTerm] = useState("");
  // hack so that we can access the latest searchTerm value from inside the useCallback
  const searchTermRef = useRef<string>("");
  searchTermRef.current = searchTerm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const debounced = useCallback(
    debounce(() => handleSearch(searchTermRef.current), 1000),
    []
  );
  // const debounced = debounce(() => handleSearch(searchTerm), 1000);

  useEffect(() => {
    if (searchTerm.length >= 3) debounced();
    return () => {
      debounced.cancel();
    };
  }, [debounced, searchTerm, activeTab]);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
