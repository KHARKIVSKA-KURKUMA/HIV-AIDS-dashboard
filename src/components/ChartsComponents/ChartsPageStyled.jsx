import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: #eaf2ff;
  font-size: 14px;

  thead {
    background: #1b344e;
  }

  th {
    padding: 16px;
    text-align: left;
    color: #67e8f9;
    font-weight: 600;
    border-bottom: 1px solid #344b65;
  }

  th:first-child {
    border-radius: 10px 0 0 0;
  }

  th:last-child {
    border-radius: 0 10px 0 0;
  }

  td {
    padding: 15px 16px;
    color: #c5d5e8;
    background: transparent;
    border-bottom: 1px solid #2a4058;
    transition:
      background-color 0.25s ease,
      color 0.25s ease;
  }

  tbody tr:nth-child(even) td {
    background: #ffffff04;
  }

  tbody tr:hover td {
    background: #1c3b55;
    color: #ffffff;
  }

  tbody tr:hover td:first-child {
    box-shadow: inset 3px 0 0 #38bdf8;
    color: #67e8f9;
    font-weight: 600;
  }

  tbody tr:hover td:last-child {
    border-radius: 0 8px 8px 0;
  }

  tbody tr:hover td:first-child {
    border-radius: 8px 0 0 8px;
  }

  @media (max-width: 700px) {
    font-size: 12px;

    th,
    td {
      padding: 11px 9px;
    }
  }
`;

export const Container = styled.main`
  min-height: 100vh;
  padding: 45px max(24px, calc((100vw - 1280px) / 2));
  color: #eaf2ff;
  background:
    radial-gradient(ellipse at 80% 5%, #123a5a80, transparent 40%),
    radial-gradient(ellipse at 5% 40%, #142b5180, transparent 45%), #08111f;
  font-family: "Inter", sans-serif;

  @media (max-width: 700px) {
    padding: 25px 16px;
  }
`;

export const Header = styled.header`
  margin-bottom: 45px;
  animation: ${fadeUp} 0.6s ease both;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
`;

export const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border: 1px solid #34465d;
  border-radius: 11px;
  color: #c5d5e8;
  background: #ffffff08;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    color: #67e8f9;
    border-color: #38bdf8;
    background: #ffffff12;
    transform: translateX(-3px);
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 15px;
  border: 1px solid #28c8d34d;
  border-radius: 30px;
  background: #19b9c516;
  color: #67e8f9;
  font-size: 12px;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: clamp(36px, 4vw, 58px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.2;
  color: #f8fbff;
  margin: 0 0 18px;

  span {
    background: linear-gradient(100deg, #35d5e6, #818cf8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Subtitle = styled.p`
  max-width: 650px;
  color: #a5b4cb;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
`;

export const Filters = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px;
  margin-bottom: 30px;
  background: #122238;
  border: 1px solid #2b405a;
  border-radius: 18px;
  animation: ${fadeUp} 0.7s ease both;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 160px;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9fb2c9;
  font-size: 12px;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 100%;
  padding: 13px 15px;
  color: #eaf2ff;
  background: #192d45;
  border: 1px solid #344b65;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #38bdf8;
  }

  option {
    background: #192d45;
    color: #eaf2ff;
  }
`;

export const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 20px;
  margin-left: auto;
  border-radius: 10px;
  background: linear-gradient(110deg, #40d7e6, #60a5fa);
  color: #061522;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px #18b7d530;
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.section`
  min-width: 0;
  padding: 28px;
  background: linear-gradient(145deg, #172b42, #0e1c30);
  border: 1px solid #2b405a;
  border-radius: 20px;
  box-shadow: 0 15px 40px #00000020;
  transition: all 0.25s ease;
  animation: ${fadeUp} 0.8s ease both;

  grid-column: ${({ $wide }) => ($wide ? "1 / -1" : "auto")};

  &:hover {
    border-color: #38bdf866;
    box-shadow: 0 20px 45px #00000030;
  }

  @media (max-width: 600px) {
    padding: 20px 14px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 28px;
`;

export const ChartIcon = styled.div`
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => `${$color}18`};
`;

export const CardTitle = styled.h2`
  color: #f1f6ff;
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 8px;
`;

export const CardDescription = styled.p`
  color: #91a5bf;
  font-size: 12px;
  line-height: 1.6;
  margin: 0;
`;

export const EmptyState = styled.div`
  padding: 50px 20px;
  text-align: center;
  color: #9fb2c9;
  font-size: 14px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 75px;
  padding-top: 28px;
  border-top: 1px solid #25364b;
  color: #8497b0;
  font-size: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;
