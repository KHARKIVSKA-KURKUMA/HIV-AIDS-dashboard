import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  font-family: inherit;
`;

const Controls = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ControlTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
`;

const ToggleButtons = styled.div`
  display: flex;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 10px;
`;

const ToggleButton = styled.button`
  border: none;
  padding: 9px 24px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  color: ${({ $active }) => ($active ? "#111827" : "#6b7280")};

  box-shadow: ${({ $active }) =>
    $active ? "0 1px 3px rgba(0,0,0,0.12)" : "none"};

  transition: 0.2s;

  &:hover {
    color: #111827;
  }
`;

const Select = styled.select`
  height: 38px;
  min-width: 130px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  &:focus {
    border-color: #6b7280;
  }
`;

const MapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const MapTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #111827;
`;

const MapSubtitle = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #6b7280;
`;

const Unit = styled.div`
  font-size: 13px;
  color: #6b7280;
`;

const MapContainer = styled.div`
  width: 100%;
  overflow: visible;
  svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
  }
  path {
    outline: none !important;
    &:focus {
      outline: none !important;
      &-visible {
        outline: none !important;
      }
    }
  }
`;

const Legend = styled.div`
  margin-top: -10px;
  padding: 0 10px 20px;
`;

const LegendTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
`;

const LegendItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 12px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
`;

const InfoCard = styled.div`
  position: absolute;
  top: 190px;
  right: 20px;
  width: 280px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  font-size: 22px;
  color: #6b7280;
  cursor: pointer;
  &:hover {
    color: #111827;
  }
`;

const InfoTitle = styled.h3`
  margin: 0 0 6px;
  padding-right: 25px;
  font-size: 20px;
  color: #111827;
`;

const InfoType = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 600;
  color: #16a34a;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 10px 0;
  border-top: 1px solid #f3f4f6;
  font-size: 13px;
  color: #6b7280;
  strong {
    color: #111827;
    text-align: right;
  }
`;

const NoData = styled.div`
  padding-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #6b7280;
`;

export {
  MapContainer,
  NoData,
  MapHeader,
  MapSubtitle,
  MapTitle,
  MapWrapper,
  InfoCard,
  InfoRow,
  InfoTitle,
  InfoType,
  Legend,
  LegendColor,
  LegendItem,
  LegendTitle,
  LegendItems,
  CloseButton,
  ControlGroup,
  ControlTitle,
  Controls,
  ToggleButton,
  ToggleButtons,
  Select,
  Unit,
};
