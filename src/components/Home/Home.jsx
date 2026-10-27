import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  MapPinned,
  TrendingUp,
  ShieldCheck,
  Database,
} from "lucide-react";

import data from "../../../data/HIVStats.json";
import { MONTHS, MONTH_LABELS } from "../consts";

import {
  Container,
  Hero,
  HeroContent,
  Badge,
  Title,
  GradientText,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  Visual,
  VisualCard,
  VisualHeader,
  VisualBars,
  Bar,
  FeaturesSection,
  SectionHeading,
  FeaturesGrid,
  FeatureCard,
  IconBox,
  FeatureTitle,
  FeatureDescription,
  Footer,
} from "./Home.styled";

const features = [
  {
    icon: BarChart3,
    title: "Аналіз захворюваності",
    description:
      "Досліджуйте динаміку показників ВІЛ за роками та місяцями за допомогою інтерактивних графіків.",
  },
  {
    icon: MapPinned,
    title: "Регіональна статистика",
    description:
      "Порівнюйте показники між областями України на інтерактивній карті.",
  },
  {
    icon: TrendingUp,
    title: "Прогнозування",
    description:
      "Аналізуйте прогнозні тенденції на основі історичних даних та статистичних моделей.",
  },
  {
    icon: Database,
    title: "Моніторинг даних",
    description:
      "Виявляйте зміни, пропуски та аномалії у статистичних показниках.",
  },
];

const formatNumber = (value) => new Intl.NumberFormat("uk-UA").format(value);

const Home = () => {
  const chartData = useMemo(() => {
    const years = Object.keys(data).sort((a, b) => Number(b) - Number(a));

    const latestYear = years.find((year) =>
      MONTHS.some(
        (month) => data[year]?.[month]?.["Україна"]?.HIV?.cases != null,
      ),
    );

    if (!latestYear) {
      return {
        year: null,
        values: [],
      };
    }

    const values = MONTHS.map((month) => {
      const rawCases = data[latestYear]?.[month]?.["Україна"]?.HIV?.cases;

      const cases =
        rawCases == null || rawCases === "" ? null : Number(rawCases);

      return {
        month,
        label: MONTH_LABELS[month],
        cases: cases !== null && Number.isFinite(cases) ? cases : null,
      };
    });

    return {
      year: latestYear,
      values,
    };
  }, []);

  const maxCases = Math.max(
    1,
    ...chartData.values
      .filter((item) => item.cases !== null)
      .map((item) => item.cases),
  );

  return (
    <Container>
      <Hero>
        <HeroContent>
          <Badge>
            <Activity size={15} />
            Аналітична платформа HIV Forecast
          </Badge>

          <Title>
            Аналіз та прогнозування
            <GradientText> захворюваності на ВІЛ</GradientText> в Україні
          </Title>

          <Description>
            Інтерактивна система моніторингу епідеміологічних показників.
            Досліджуйте регіональні відмінності, аналізуйте динаміку
            захворюваності та прогнозуйте майбутні тенденції.
          </Description>

          <ButtonGroup>
            <PrimaryButton as={Link} to="/charts">
              Переглянути аналітику
              <ArrowRight size={19} />
            </PrimaryButton>

            <SecondaryButton as={Link} to="/map">
              <MapPinned size={19} />
              Відкрити карту
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <Visual>
          <VisualCard>
            <VisualHeader>
              <span>
                <Activity size={18} />
                Моніторинг показників
              </span>

              <ShieldCheck size={20} />
            </VisualHeader>

            <div className="visual-title">Динаміка випадків ВІЛ</div>

            <div className="visual-subtitle">
              Україна · {chartData.year ?? "Немає даних"}
            </div>

            <VisualBars>
              {chartData.values.map((item) => (
                <Bar
                  key={item.month}
                  $height={
                    item.cases === null ? 0 : (item.cases / maxCases) * 100
                  }
                  $active={item.cases !== null && item.cases === maxCases}
                  title={
                    item.cases === null
                      ? `${item.label}: немає даних`
                      : `${item.label}: ${formatNumber(item.cases)} випадків`
                  }
                  aria-label={
                    item.cases === null
                      ? `${item.label}: немає даних`
                      : `${item.label}: ${formatNumber(
                          item.cases,
                        )} випадків ВІЛ`
                  }
                />
              ))}
            </VisualBars>

            <div className="visual-footer">
              <span>Січень</span>
              <span>
                {chartData.year ? `${chartData.year} рік` : "Немає даних"}
              </span>
              <span>Грудень</span>
            </div>
          </VisualCard>
        </Visual>
      </Hero>

      <FeaturesSection>
        <SectionHeading>
          <span>МОЖЛИВОСТІ ПЛАТФОРМИ</span>

          <h2>Інструменти для дослідження даних</h2>

          <p>
            Від візуалізації статистики до прогнозування майбутніх тенденцій.
          </p>
        </SectionHeading>

        <FeaturesGrid>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <FeatureCard key={feature.title}>
                <IconBox>
                  <Icon size={25} />
                </IconBox>

                <FeatureTitle>{feature.title}</FeatureTitle>

                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </FeaturesSection>

      <Footer>
        <span>
          © {new Date().getFullYear()} National Aerospace University «Kharkiv
          Aviation Institute»
        </span>

        <span>Платформа епідеміологічної аналітики</span>
      </Footer>
    </Container>
  );
};

export default Home;
