import styled from "styled-components";
import ResizeHandle from "./ResizeHandle";
import { useSettings } from "../../core/context/settings.context";
import SidebarHeader from "./SidebarHeader";
import ChatList from "./ChatList";

const SidebarContainer = styled.div`
  height: 100dvh;
  min-width: 250px;
  max-width: 480px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
  position: relative;
  @media screen and (max-width: 700px) {
    min-width: 100vw;
    max-width: 100vw;
  }
`;

const Sidebar = () => {
  const { settings } = useSettings();

  return (
    <SidebarContainer style={{ width: `${settings.sidebarWidth}px` }}>
      <SidebarHeader />
      <ChatList />

      <ResizeHandle />
    </SidebarContainer>
  );
};

export default Sidebar;
