import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useSettings } from "../../core/context/settings.context";

const Handle = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  cursor: ew-resize;
  background-color: ${({ theme }) => `${theme.textSecondary}30`};
  z-index: 10;
`;

const ResizeHandle = () => {
  const isResizing = useRef(false);
  const { updateSetting } = useSettings();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing.current) {
        const newWidth = e.clientX;
        updateSetting("sidebarWidth", newWidth);
      }
    };

    const handleMouseUp = () => {
      if (isResizing.current) {
        isResizing.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [updateSetting]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
  };

  return <Handle onMouseDown={handleMouseDown} />;
};

export default ResizeHandle;
