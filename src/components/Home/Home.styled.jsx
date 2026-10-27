import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.main`
  min-height: 100vh;
  color: #eaf2ff;
  background:
    radial-gradient(ellipse at 80% 12%, #123a5a80, transparent 42%),
    radial-gradient(ellipse at 8% 45%, #142b5180, transparent 45%), #08111f;
  font-family: "Inter", sans-serif;
  overflow: hidden;
`;

export const Hero = styled.section`
  max-width: 1280px;
  min-height: 660px;
  margin: 0 auto;
  padding: 100px 32px 80px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 70px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 80px 24px;
    gap: 55px;
  }
`;

export const HeroContent = styled.div`
  animation: ${fadeUp} 0.8s ease both;
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
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  font-size: clamp(38px, 4.3vw, 64px);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.15;
  margin: 0 0 28px;
  color: #f8fbff;
`;

export const GradientText = styled.span`
  background: linear-gradient(100deg, #35d5e6, #818cf8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  max-width: 570px;
  color: #a5b4cb;
  font-size: 17px;
  line-height: 1.85;
  margin: 0 0 36px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 650;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid #67e8f9;
    outline-offset: 4px;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  color: #061522;
  background: linear-gradient(110deg, #40d7e6, #60a5fa);
  box-shadow: 0 8px 30px #18b7d525;

  &:hover {
    box-shadow: 0 12px 35px #18b7d54d;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: #e5efff;
  border: 1px solid #34465d;
  background: #ffffff08;

  &:hover {
    border-color: #38bdf8;
    background: #ffffff12;
  }
`;

export const Visual = styled.div`
  animation: ${fadeUp} 1s 0.15s ease both;
`;

export const VisualCard = styled.div`
  padding: 28px;
  border: 1px solid #344c66;
  border-radius: 22px;
  background: linear-gradient(145deg, #172b42, #0e1c30);
  box-shadow: 0 30px 80px #00000055;

  .visual-title {
    margin-top: 32px;
    font-size: 22px;
    font-weight: 700;
  }

  .visual-subtitle {
    margin-top: 8px;
    color: #8fa4be;
    font-size: 13px;
  }

  .visual-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 22px;
    color: #91a7c0;
    font-size: 11px;
  }
`;

export const VisualHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #67e8f9;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const VisualBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 9px;
  height: 190px;
  margin-top: 30px;
  border-bottom: 1px solid #38506a;
`;

export const Bar = styled.div`
  flex: 1;
  height: ${({ $height }) => $height}%;
  min-width: 0;
  border-radius: 5px 5px 0 0;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(#67e8f9, #3b82f6)"
      : "linear-gradient(#286d95, #203e68)"};
  transition:
    height 0.3s ease,
    background 0.3s ease;

  &:hover {
    background: linear-gradient(#67e8f9, #3b82f6);
  }
`;

export const FeaturesSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 45px 32px 110px;

  @media (max-width: 700px) {
    padding: 35px 24px 75px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 50px;

  span {
    color: #67e8f9;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  h2 {
    color: #f8fbff;
    font-size: clamp(26px, 3vw, 38px);
    margin: 16px 0;
    letter-spacing: -1px;
  }

  p {
    color: #9aaec6;
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.article`
  padding: 28px 24px;
  border: 1px solid #263d55;
  border-radius: 18px;
  background: #122238b3;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: #38bdf880;
    background: #172c45;
  }
`;

export const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #67e8f9;
  border-radius: 13px;
  background: #1b51634d;
  margin-bottom: 24px;
`;

export const FeatureTitle = styled.h3`
  color: #f1f6ff;
  font-size: 17px;
  margin: 0 0 14px;
`;

export const FeatureDescription = styled.p`
  color: #98aac2;
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 32px;
  border-top: 1px solid #25364b;
  color: #8497b0;
  font-size: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
