// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

// component
import AttnKareTracking from 'src/sections/@dashboard/overview/AttnKareTracking';
import AttnKareResult from 'src/sections/@dashboard/overview/AttnKareResult';
import RadialBar from 'src/sections/@dashboard/overview/RadialBar';
import CurrentTreatment from 'src/sections/@dashboard/overview/CurrentTreatment';
// mock
import { _completedMission } from '../../../_mock';

import Page from '../../../components/Page';

// sections
import PatientProfile from '../../../sections/@dashboard/overview/PatientProfile';
import PatientMission from '../../../sections/@dashboard/overview/PatientMission';
import SummaryDate from '../../../sections/@dashboard/overview/SummaryDate';

export default function GeneralApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard | Overview">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <PatientProfile
              title="Patient Profile"
              img={
                <RadialBar
                  chartData={[
                    {
                      data: [76],
                    },
                  ]}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PatientMission list={_completedMission} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryDate
              title="외래 방문 주기"
              text="최근 변경"
              date={1648956398369}
              total={2}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={20}
              innerDays="5"
              innerText="DAYS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryDate
              title="약물 처방 일수"
              text="최근 변경"
              date={1648956398369}
              total={10}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={40}
              innerDays="4"
              innerText="WEEKS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryDate
              title="AttnKare-T 처방일수"
              text="최근 변경"
              date={1648956398369}
              total={15}
              totalText="주"
              chartColor={theme.palette.primary.main}
              chartData={55}
              innerDays="7"
              innerText="WEEKS LEFT"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CurrentTreatment
              title="수행중인 치료"
              chartColors={[theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark]}
              chartData={[
                { label: '약물치료', value: 101 },
                { label: 'Attnkare', value: 60 },
                { label: '부모교육', value: 46 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AttnKareTracking
              title="AttnKare-T Tracking"
              subheader="(+4%) than last week"
              chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
              chartColors={[theme.palette.info.main.dark]}
              chartData={[
                {
                  name: '주별 수행량',
                  type: 'column',
                  fill: 'solid',
                  data: [120, 102, 100, 78, 85, 100, 100, 110],
                },

                {
                  name: '주별 권장량',
                  type: 'line',
                  fill: 'solid',
                  data: [100, 100, 100, 100, 100, 100, 100, 100],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <AttnKareResult
              title="AttnKare-D 진단 결과"
              chartLabels={['집중력', '작업기억력', '실행기능', '행동조절', '사회성', '충동성']}
              chartData={[
                { name: '2022.04.05', data: [44, 76, 78, 13, 43, 10] },
                { name: '2022.08.16', data: [80, 100, 80, 40, 50, 20] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
