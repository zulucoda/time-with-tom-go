import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import * as PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { COLOURS, FORMAT, GRADIENTS, SHADOWS } from '../../../config';
import format from 'date-fns/format';

const TableWrapper = styled(Table)({
  minWidth: 700,
  color: 'white',
  boxShadow: SHADOWS.BLACK,
  borderRadius: 3,
});

const HeadWrapper = styled(TableHead)({
  background: GRADIENTS.BLUE,
  borderRadius: 3,
});

const HeadRow = styled(TableRow)({
  border: 0,
  borderRadius: 3,
  boxShadow: SHADOWS.BLACK,
});

const BodyRow = styled(TableRow)({
  border: 0,
  borderRadius: 3,
  boxShadow: SHADOWS.BLACK,
  '&:nth-of-type(odd)': {
    backgroundColor: COLOURS.DARK_BLUE,
    boxShadow: SHADOWS.BLACK,
  },
});

const HeadCell = styled(TableCell)({
  fontWeight: 'bold',
  color: (props) =>
    props.isGreen ? COLOURS.GREEN : props.isOrange ? COLOURS.ORANGE : 'white',
  border: 0,
});

const BodyWrapper = styled(TableBody)({});

const BodyCell = styled(TableCell)({
  color: (props) =>
    props.isGreen ? COLOURS.GREEN : props.isOrange ? COLOURS.ORANGE : 'white',
  border: 0,
});

const ScheduleTable = ({ scheduleList }) => {
  return (
    <TableWrapper>
      <HeadWrapper>
        <HeadRow>
          <HeadCell>Name</HeadCell>
          <HeadCell>Surname</HeadCell>
          <HeadCell>Email</HeadCell>
          <HeadCell>Activity</HeadCell>
          <HeadCell>Date</HeadCell>
          <HeadCell isGreen>Start Time</HeadCell>
          <HeadCell isOrange>End Time</HeadCell>
        </HeadRow>
      </HeadWrapper>

      <BodyWrapper>
        {scheduleList.map(
          (
            { name, surname, email, activity, date, startTime, endTime },
            index,
          ) => (
            <BodyRow key={index}>
              <BodyCell>{name}</BodyCell>
              <BodyCell>{surname}</BodyCell>
              <BodyCell>{email}</BodyCell>
              <BodyCell>{activity}</BodyCell>
              <BodyCell>{format(new Date(date), FORMAT.DATE)}</BodyCell>
              <BodyCell isGreen>
                {format(new Date(startTime), FORMAT.TIME)}
              </BodyCell>
              <BodyCell isOrange>
                {format(new Date(endTime), FORMAT.TIME)}
              </BodyCell>
            </BodyRow>
          ),
        )}
      </BodyWrapper>
    </TableWrapper>
  );
};

ScheduleTable.propTypes = {
  scheduleList: PropTypes.arrayOf(PropTypes.any),
};

export default ScheduleTable;
