import styled from "styled-components";
import { useRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Ripple = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  padding: 8px;
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 1000ms ease-in-out;
    background-color: rgba(0, 0, 0, 0.15);
    pointer-events: none;
    z-index: 0;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const RippleCard = ({ children, ...rest }: IProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createRipple = (event: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const circle = document.createElement("span");
    circle.className = "ripple";

    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    const rect = container.getBoundingClientRect();
    const left = event.clientX - rect.left - radius;
    const top = event.clientY - rect.top - radius;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${left}px`;
    circle.style.top = `${top}px`;

    container.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  };

  return (
    <Ripple ref={containerRef} onMouseDown={createRipple} {...rest}>
      {children}
    </Ripple>
  );
};

export default RippleCard;
