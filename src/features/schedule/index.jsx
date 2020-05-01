import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { fakeGet } from '../../fake-services';
import AlertError from '../../components/alerts/error';
import TableLayout from '../../components/layout/table';
import ScheduleTable from './table';

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState([]);
  useEffect(() => {
    const data = fakeGet();
    setScheduleList(data);
  }, []);

  if (scheduleList.length === 0) {
    return <AlertError message="There is no schedule data." />;
  }

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
