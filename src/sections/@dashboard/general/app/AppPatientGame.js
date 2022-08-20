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
              times={36}
              total={tableData.length}
              percent={100}
              price={sumBy(tableData, 'totalPrice')}
              icon="ic:round-receipt"
              color={theme.palette.info.main}
            />
            <InvoiceAnalytic
              title="비즈"
              times={18}
              total={getLengthByStatus('paid')}
              percent={getPercentByStatus('paid')}
              price={getTotalPriceByStatus('paid')}
              icon="eva:checkmark-circle-2-fill"
              color={theme.palette.success.main}
            />
            <InvoiceAnalytic
              title="방정리"
              times={23}
              total={getLengthByStatus('unpaid')}
              percent={getPercentByStatus('unpaid')}
              price={getTotalPriceByStatus('unpaid')}
              icon="eva:clock-fill"
              color={theme.palette.warning.main}
            />
            <InvoiceAnalytic
              title="의미카드"
              times={41}
              total={getLengthByStatus('overdue')}
              percent={getPercentByStatus('overdue')}
              price={getTotalPriceByStatus('overdue')}
              icon="eva:bell-fill"
              color={theme.palette.error.main}
            />
            <InvoiceAnalytic
              title="레이싱"
              times={60}
              total={getLengthByStatus('draft')}
              percent={getPercentByStatus('draft')}
              price={getTotalPriceByStatus('draft')}
              icon="eva:file-fill"
              color={theme.palette.text.secondary}
            />
          </Stack>
        </Scrollbar>
      </Card>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <EcommerceYearlySales
            title="탭 종합 점수"
            index="tab"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [22, 30, 35, 44, 50, 55, 49, 51] },
                  { name: '집중력', data: [14, 5, 15, 45, 46, 26, 47, 50] },
                  { name: '작업기억력', data: [5, 7, 10, 12, 15, 12, 23, 20] },
                  { name: '충동성', data: [50, 45, 33, 30, 25, 30, 35, 36] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EcommerceYearlySales
            title="비즈 종합 점수"
            index="biz"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [22, 30, 35, 44, 50, 55, 49, 51] },
                  { name: '집중력', data: [14, 5, 15, 45, 46, 26, 47, 50] },
                  { name: '행동조절', data: [5, 7, 10, 12, 15, 12, 23, 20] },
                ],
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EcommerceYearlySales
            title="방정리 종합 점수"
            index="room"
            subheader="(+14%) than last week"
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [22, 30, 35, 44, 50] },
                  { name: '집중력', data: [14, 5, 15, 45, 46] },
                  { name: '집행기능', data: [50, 45, 33, 30, 25] },
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
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [22, 30, 35, 44, 50] },
                  { name: '집중력', data: [14, 5, 15, 45, 46] },
                  { name: '충동성', data: [50, 45, 33, 30, 25] },
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
            chartLabels={['1주차', '2주차', '3주차', '4주차', '5주차']}
            chartData={[
              {
                data: [
                  { name: '종합점수', data: [22, 30, 35, 44, 50] },
                  { name: '집중력', data: [14, 5, 15, 45, 46] },
                  { name: '작업기억력', data: [5, 7, 10, 12, 15] },
                  { name: '집행기능', data: [50, 45, 33, 30, 25] },
                  { name: '행동조절', data: [50, 45, 33, 30, 25] },
                ],
              },
            ]}
          />
        </Grid>
      </Grid>
    </Page>
  );
}
