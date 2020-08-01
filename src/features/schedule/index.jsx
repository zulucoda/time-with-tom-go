import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AlertError from '../../components/alerts/error';
import TableLayout from '../../components/layout/table';
import ScheduleTable from './table';
import { API_ENDPOINTS } from '../../config';
import useAxiosWrapper from '../../hooks/use-axios-wrapper';

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState([]);
  const [{ data, loading, error }, refetch] = useAxiosWrapper({
    path: API_ENDPOINTS.GET_BOOKINGS,
  });

  useEffect(() => {
    if (!data && loading) {
      return;
    }

    if (!data && error) {
      return;
    }

    if (data) {
      setScheduleList(data);
    }
  }, [data, loading, error]);

  return (
    <TableLayout>
      <Typography variant="h3" gutterBottom marked="center" align="center">
        Schedule
      </Typography>
      {scheduleList.length === 0 ? (
        <AlertError message="There is no schedule data." />
      ) : (
        <ScheduleTable scheduleList={scheduleList} />
      )}
    </TableLayout>
  );
};

export default Schedule;
