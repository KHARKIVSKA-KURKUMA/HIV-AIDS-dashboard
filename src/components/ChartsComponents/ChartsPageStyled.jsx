import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: #f4f7fb;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #111827;
`;

const Filters = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 35px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid #d1d5db;
  background: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #2563eb;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 28px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #1f2937;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #eff6ff;
    color: #1e3a8a;
    padding: 14px;
    text-align: left;
    font-size: 15px;
  }

  td {
    padding: 14px;
    border-bottom: 1px solid #e5e7eb;
  }

  tbody tr {
    transition: 0.2s;
  }

  tbody tr:hover {
    background: #f9fafb;
  }
`;

export {
  Card,
  CardTitle,
  Container,
  StyledTable,
  Select,
  Grid,
  TableWrapper,
  Title,
  Filters,
};
