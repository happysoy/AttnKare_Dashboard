import sumBy from 'lodash/sumBy';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { Grid, Stack, Card, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Scrollbar from 'src/components/Scrollbar';
// components
import Page from 'src/components/Page';

import EcommerceYearlySales from '../e-commerce/EcommerceYearlySales';
import BankingBalanceStatistics from '../banking/BankingBalanceStatics';
import AnalyticsCurrentVisits from '../analytics/AnalyticsCurrentVisit';
import InvoiceAnalytic from '../../invoce/InvoiceAnalytic';
// _mock_
import { _invoices } from '../../../../_mock';

export default function AppPatientProfile() {
  const theme = useTheme();

  const getLengthByStatus = (status) => tableData.filter((item) => item.status === status).length;

  const getTotalPriceByStatus = (status) =>
    sumBy(
      tableData.filter((item) => item.status === status),
      'totalPrice'
    );

  const getPercentByStatus = (status) => (getLengthByStatus(status) / tableData.length) * 100;

  const [tableData, setTableData] = useState(_invoices);
  const TABS = [
    { value: '탭', label: 'All', color: 'info', count: tableData.length },
    { value: '비즈', label: 'Paid', color: 'success', count: getLengthByStatus('paid') },
    { value: 'unpaid', label: 'Unpaid', color: 'warning', count: getLengthByStatus('unpaid') },
    { value: 'overdue', label: 'Overdue', color: 'error', count: getLengthByStatus('overdue') },
    { value: 'draft', label: 'Draft', color: 'default', count: getLengthByStatus('draft') },
  ];

  return (
    <Page title="User: Profile">
      <Card sx={{ mb: 5 }}>
        <Scrollbar>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            sx={{ py: 2 }}
          >
            <InvoiceAnalytic
              title="탭"
              times={12}
              total={54}
              percent={60}
              price={sumBy(tableData, 'totalPrice')}
              icon="eva:checkmark-circle-2-fill"
              color={theme.palette.success.main}
            />
            <InvoiceAnalytic
              title="비즈"
              times={6}
              total={23}
              percent={34}
              price={getTotalPriceByStatus('paid')}
              icon="eva:bell-fill"
              color={theme.palette.error.main}
            />
            <InvoiceAnalytic
              title="방정리"
              times={9}
              total={32}
              percent={57}
              price={getTotalPriceByStatus('unpaid')}
              icon="eva:clock-fill"
              color={theme.palette.warning.main}
            />
            <InvoiceAnalytic
              title="의미카드"
              times={11}
              total={40}
              percent={68}
              price={getTotalPriceByStatus('overdue')}
              icon="eva:checkmark-circle-2-fill"
              color={theme.palette.success.main}
            />
            <InvoiceAnalytic
              title="레이싱"
              times={30}
              total={89}
              percent={100}
              price={getTotalPriceByStatus('draft')}
              icon="eva:checkmark-circle-2-fill"
              color={theme.palette.success.main}
            />
          </Stack>
        </Scrollbar>
      </Card>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceYearlySales
            title="탭 종합 점수"
            index="tab"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [60, 62, 65, 63, 67, 72, 77, 78] },
                  { name: '집중력', data: [14, 5, 15, 45, 46, 26, 47, 50] },
                  { name: '작업기억력', data: [5, 7, 10, 12, 15, 12, 23, 20] },
                  { name: '충동성', data: [50, 45, 33, 30, 25, 30, 35, 36] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceYearlySales
            title="비즈 종합 점수"
            index="biz"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [45, 47, 49, 52, 43, 44, 45, 48] },
                  { name: '집중력', data: [30, 31, 35, 37, 40, 43, 45, 47] },
                  { name: '행동조절', data: [5, 7, 10, 12, 15, 12, 23, 20] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceYearlySales
            title="방정리 종합 점수"
            index="room"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [78, 79, 80, 82, 82, 83, 80, 80] },
                  { name: '집중력', data: [30, 32, 36, 40, 46, 50, 52, 54] },
                  { name: '집행기능', data: [35, 45, 50, 50, 52, 53, 54, 54] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EcommerceYearlySales
            title="의미카드 종합 점수"
            index="card"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [56, 57, 58, 58, 57, 60, 62, 62] },
                  { name: '집중력', data: [30, 32, 36, 40, 46, 50, 52, 54] },
                  { name: '충동성', data: [50, 45, 45, 45, 35, 30, 33, 36] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EcommerceYearlySales
            title="레이싱 종합 점수"
            index="racing"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [60, 61, 62, 63, 65, 67, 70, 72] },
                  { name: '집중력', data: [50, 52, 56, 50, 56, 58, 52, 70] },
                  { name: '작업기억력', data: [20, 22, 24, 25, 26, 27, 27, 28] },
                  { name: '집행기능', data: [33, 35, 35, 36, 36, 37, 38, 40] },
                  { name: '행동조절', data: [5, 12, 10, 12, 15, 12, 23, 20] },
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Page>
  );
}
