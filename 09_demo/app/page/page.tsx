  import dayjs from 'dayjs';

  const HolidayPage: NextPage<Props> = async ({ holidays }) => {
    const newYearsDay = dayjs("2023-01-01").format("YYYY/MM/DD");
    const holidays = fetchHolidays();

    return (
      <div>
        <p>{ `${newYearsDay}〜` }　</p>
        <HolidayList holidays={holidays} />
      </div>
    );
  };
