import { useState } from "react";
import {
  SelectWrapper,
  InputBox,
  Dropdown,
  DropdownItem,
  CountryInfo,
  Flag,
  DialCode,
} from "./CountrySelect.styled";
import countries from "../../constants/countries.json";
import type ICountry from "../../core/types/ICountry";
import TelegramEmoji from "../common/TelegramEmoji";
import { IoChevronDown } from "react-icons/io5";

const CountrySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ICountry | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (country: ICountry) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <InputBox className={isOpen ? "focused" : ""} onClick={toggleDropdown}>
        <label className={selected?.name || isOpen ? "shrinked" : ""}>
          Country
        </label>
        <CountryInfo>{selected?.name}</CountryInfo>
        <IoChevronDown size={24} />
      </InputBox>
      {isOpen && (
        <Dropdown>
          {countries.map((country) => (
            <DropdownItem
              key={country.name}
              onClick={() => handleSelect(country)}
            >
              <CountryInfo>
                <Flag>
                  {" "}
                  <TelegramEmoji emoji={country.flag} />
                </Flag>{" "}
                {country.name}
              </CountryInfo>
              <DialCode>{country.dial_code}</DialCode>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SelectWrapper>
  );
};

export default CountrySelect;
