import logo from "/logo-name.svg";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [nowDate, setNowDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNowDate(new Date()), 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <span>Current time {nowDate.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
