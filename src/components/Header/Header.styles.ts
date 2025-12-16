import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.headerBg};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 50px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul<{ $open: boolean }>`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.navMobileBg};
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const NavButton = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 36px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white} !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const LangItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: bold;
`;

export const LangButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;
  transition: color 0.3s, font-weight 0.3s;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 800;
  }
`;

export const LangSeparator = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

export const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2000;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Bar = styled.span<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s;

    &:first-child {
      transform: ${({ $open }) =>
        $open ? "rotate(45deg) translate(5px, 5px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
    }

    &:last-child {
      transform: ${({ $open }) =>
        $open ? "rotate(-45deg) translate(5px, -5px)" : "none"};
    }
  }
`;


