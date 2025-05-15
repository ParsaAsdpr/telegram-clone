import styled from "styled-components";
import ResizeHandle from "./ResizeHandle";
import { useSettings } from "../../core/context/settings.context";
import SidebarHeader from "./SidebarHeader";

const SidebarContainer = styled.div`
  height: 100vh;
  min-width: 250px;
  max-width: 480px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  position: relative;
`;

const Sidebar = () => {
  const { settings } = useSettings();

  return (
    <SidebarContainer style={{ width: `${settings.sidebarWidth}px` }}>
      <SidebarHeader />
      <ResizeHandle />
    </SidebarContainer>
  );
};

export default Sidebar;
