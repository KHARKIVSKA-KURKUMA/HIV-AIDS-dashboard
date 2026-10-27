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

export const MapWrapper = styled.main`
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

export const PageHeader = styled.header`
  margin-bottom: 42px;
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
  transition: 0.25s ease;

  &:hover {
    color: #67e8f9;
    border-color: #38bdf8;
    transform: translateX(-3px);
  }
`;

export const HeaderBadge = styled.div`
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

export const PageTitle = styled.h1`
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

export const PageSubtitle = styled.p`
  max-width: 680px;
  color: #a5b4cb;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
`;

export const Controls = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px;
  margin-bottom: 28px;
  background: #122238;
  border: 1px solid #2b405a;
  border-radius: 18px;
  animation: ${fadeUp} 0.7s ease both;
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 145px;
`;

export const ControlTitle = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9fb2c9;
  font-size: 12px;
  font-weight: 600;
`;

export const ToggleButtons = styled.div`
  display: flex;
  padding: 4px;
  border-radius: 10px;
  background: #192d45;
  border: 1px solid #344b65;
`;

export const ToggleButton = styled.button`
  padding: 10px 22px;
  border: none;
  border-radius: 7px;
  background: ${({ $active }) =>
    $active ? "linear-gradient(110deg, #40d7e6, #60a5fa)" : "transparent"};
  color: ${({ $active }) => ($active ? "#061522" : "#a5b4cb")};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    color: ${({ $active }) => ($active ? "#061522" : "#67e8f9")};
  }
`;

export const Select = styled.select`
  padding: 13px 15px;
  color: #eaf2ff;
  background: #192d45;
  border: 1px solid #344b65;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #38bdf8;
  }

  option {
    background: #192d45;
    color: #eaf2ff;
  }
`;

export const ChartsLink = styled.a`
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
    width: 100%;
  }
`;

export const MapSection = styled.section`
  padding: 30px;
  border: 1px solid #2b405a;
  border-radius: 22px;
  background: linear-gradient(145deg, #172b42, #0e1c30);
  box-shadow: 0 15px 40px #00000020;
  animation: ${fadeUp} 0.8s ease both;

  @media (max-width: 700px) {
    padding: 18px 12px;
  }
`;

export const MapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

export const MapTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f1f6ff;
  font-size: 21px;
  margin: 0 0 10px;

  svg {
    color: #67e8f9;
  }
`;

export const MapSubtitle = styled.p`
  color: #91a5bf;
  font-size: 13px;
  margin: 0;
`;

export const Unit = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 15px;
  color: #67e8f9;
  background: #1b51634d;
  border: 1px solid #28c8d34d;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
`;

export const MapContent = styled.div`
  display: grid;
  grid-template-columns: ${({ $hasSelection }) =>
    $hasSelection ? "minmax(0, 1fr) 320px" : "minmax(0, 1fr)"};
  align-items: center;
  gap: 24px;
  width: 100%;
  transition: grid-template-columns 0.3s ease;

  @media (max-width: 900px) {
    display: block;
    position: relative;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 950px;
  margin: 0 auto;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const MapSidePanel = styled.aside`
  min-width: 0;
  animation: ${fadeUp} 0.3s ease both;

  @media (max-width: 900px) {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
    width: min(320px, calc(100% - 24px));
    max-height: calc(100% - 24px);
    overflow-y: auto;
    border-radius: 16px;
    box-shadow: 0 15px 50px #00000080;
  }
`;

export const Legend = styled.div`
  padding: 22px;
  margin-top: 12px;
  border: 1px solid #2b405a;
  border-radius: 14px;
  background: #102035;
`;

export const LegendTitle = styled.h3`
  color: #dce9f8;
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 18px;
`;

export const LegendItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #a5b4cb;
  font-size: 12px;
`;

export const LegendColor = styled.span`
  display: inline-block;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  background: ${({ $color }) => $color};
  border-radius: 5px;
  border: 1px solid #ffffff20;
`;

export const MapHint = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #91a5bf;
  font-size: 12px;
  margin: 22px 0 0;
  text-align: center;

  svg {
    flex-shrink: 0;
    color: #67e8f9;
  }
`;

export const InfoCard = styled.div`
  width: 100%;
  margin: 0;
  padding: 24px;
  background: linear-gradient(145deg, #18364c, #11263b);
  border: 1px solid #28657a;
  border-radius: 18px;
  box-shadow: 0 15px 40px #00000025;

  @media (max-width: 600px) {
    padding: 18px;
  }
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid #34536a;
`;

export const InfoTitle = styled.h3`
  color: #f1f6ff;
  font-size: 22px;
  margin: 10px 0 0;
`;

export const InfoType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #67e8f9;
  font-size: 12px;
  font-weight: 600;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 14px 0;
  border-bottom: 1px solid #2b465d;
  color: #a5b4cb;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #f1f6ff;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: 1px solid #34536a;
  border-radius: 9px;
  background: #ffffff08;
  color: #a5b4cb;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #fff;
    background: #fb718530;
    border-color: #fb7185;
  }
`;

export const NoData = styled.p`
  color: #91a5bf;
  font-size: 14px;
  line-height: 1.7;
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
