import sumBy from 'lodash/sumBy';
import { useEffect, useState } from 'react';
import { Link as useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Switch,
  Divider,
  TableBody,
  Container,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// hooks
import useTabs from 'src/hooks/useTabs';
import useSettings from 'src/hooks/useSettings';
import useTable, { getComparator, emptyRows } from 'src/hooks/useTable';
import Label from 'src/components/Label';

// components
import Page from 'src/components/Page';
import Scrollbar from 'src/components/Scrollbar';
import { TableNoData, TableEmptyRows, TableHeadCustom, TableSelectedActions } from 'src/components/table';
// sections
import { InvoiceTableRow, InvoiceTableToolbar } from './list';
// _mock_
import { _invoices } from '../../../_mock';

// ----------------------------------------------------------------------

const SERVICE_OPTIONS = ['모든 단계', '1단계', '2단계', '3단계', '4단계', '5단계'];

const TABLE_HEAD = [
  // { id: 'invoiceNumber', label: 'Client', align: 'left' },
  { id: 'status', label: 'Type', align: 'left', width: 140 },
  { id: 'createDate', label: 'Description', align: 'left', width: 300 },
  { id: 'price', label: 'Date', align: 'center', width: 180 },
  { id: '' },
  { id: 'sent', label: 'T-score', align: 'center', width: 140 },
];
const TABLE_OMISSIONS_HEAD = [
  // { id: 'invoiceNumber', label: 'Client', align: 'left' },
  { id: 'status', label: 'Type', align: 'left', width: 140 },
  { id: 'createDate', label: 'Description', align: 'left' },
  { id: 'price', label: 'Date', align: 'center', width: 180 },
  { id: 'sent', label: 'Reaction Time', align: 'center', width: 160 },
  { id: 'tScore', label: 'T-score', align: 'center', width: 140 },
];
const TABLE_COMMISSIONS_HEAD = [
  // { id: 'invoiceNumber', label: 'Client', align: 'left' },
  { id: 'status', label: 'Type', align: 'left', width: 140 },
  { id: 'createDate', label: 'Description', align: 'left' },
  { id: 'price', label: 'Date', align: 'center', width: 180 },
  { id: 'sent', label: 'Reaction Time', align: 'center', width: 160 },
  { id: 'tScore', label: 'T-score', align: 'center', width: 140 },
];
const TABLE_PERSEVERATIONS_HEAD = [
  // { id: 'invoiceNumber', label: 'Client', align: 'left' },
  { id: 'status', label: 'Type', align: 'left', width: 140 },
  { id: 'createDate', label: 'Description', align: 'left' },
  { id: 'price', label: 'Date', align: 'center', width: 180 },
  { id: 'sent', label: '보속반응비율', align: 'center', width: 160 },
  { id: 'tScore', label: 'T-score', align: 'center', width: 140 },
];

// ----------------------------------------------------------------------

export default function InvoiceList() {
  const { themeStretch } = useSettings();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState(_invoices);

  const [filterName, setFilterName] = useState('');

  const [filterService, setFilterService] = useState('모든 단계');

  const [filterStartDate, setFilterStartDate] = useState(null);

  const [filterEndDate, setFilterEndDate] = useState(null);

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterService = (event) => {
    setFilterService(event.target.value);
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterService,
    filterStatus,
    filterStartDate,
    filterEndDate,
  });

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterService) ||
    (!dataFiltered.length && !!filterEndDate) ||
    (!dataFiltered.length && !!filterStartDate);

  const denseHeight = dense ? 56 : 76;

  const getLengthByStatus = (status) => tableData.filter((item) => item.status === status).length;

  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: tableData.length },
    { value: 'omissions', label: 'Omissions', color: 'success', count: getLengthByStatus('omissions') },
    { value: 'commissions', label: 'Commissions', color: 'warning', count: getLengthByStatus('commissions') },
    { value: 'perseverations', label: 'Perseverations', color: 'error', count: getLengthByStatus('perseverations') },
  ];
  const [currentToolbar, setCurrentToolbar] = useState([]);
  useEffect(() => {
    if (filterStatus === 'all') {
      setCurrentToolbar(TABLE_HEAD);
    } else if (filterStatus === 'omissions') {
      setCurrentToolbar(TABLE_OMISSIONS_HEAD);
    } else if (filterStatus === 'commissions') {
      setCurrentToolbar(TABLE_COMMISSIONS_HEAD);
    } else if (filterStatus === 'perseverations') {
      setCurrentToolbar(TABLE_PERSEVERATIONS_HEAD);
    }
  }, [filterStatus]);
  return (
    <Page title="Invoice: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Card>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                icon={<Label>{tab.count}</Label>}
                label={tab.label}
              />
            ))}
          </Tabs>

          <Divider />

          <InvoiceTableToolbar
            filterName={filterName}
            filterService={filterService}
            filterStartDate={filterStartDate}
            filterEndDate={filterEndDate}
            onFilterName={handleFilterName}
            onFilterService={handleFilterService}
            onFilterStartDate={(newValue) => {
              setFilterStartDate(newValue);
            }}
            onFilterEndDate={(newValue) => {
              setFilterEndDate(newValue);
            }}
            optionsService={SERVICE_OPTIONS}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />
              )}
              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={currentToolbar}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <InvoiceTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      filterStatus={filterStatus}
                    />
                  ))}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applySortFilter({
  tableData,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
}) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      (item) =>
        item.invoiceNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.invoiceTo.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    tableData = tableData.filter((item) => item.status === filterStatus);
  }

  if (filterService !== '모든 단계') {
    tableData = tableData.filter((item) => item.items.some((c) => c.service === filterService));
  }

  if (filterStartDate && filterEndDate) {
    tableData = tableData.filter(
      (item) =>
        item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
    );
  }

  return tableData;
}
