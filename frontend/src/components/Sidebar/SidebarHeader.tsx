import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import SidebarSearchInput from "./SidebarSearchInput";
import { useSettings } from "../../core/context/settings.context";

const Header = styled.div`
  display: flex;
  padding: 5px 20px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textSecondary};
  & svg {
    flex-shrink: 0;
  }
`;

const SidebarHeader = () => {
  const { updateSetting, settings } = useSettings();
  return (
    <Header>
      <IoMenu
        size={24}
        cursor="pointer"
        onClick={() =>
          updateSetting("theme", settings.theme === "dark" ? "light" : "dark")
        }
      />
      <SidebarSearchInput />
    </Header>
  );
};

export default SidebarHeader;
