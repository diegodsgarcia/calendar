import React, { useState, useEffect } from 'react'
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  getMonth,
  addMonths,
  subMonths,
  format,
} from 'date-fns'
import { pt } from 'date-fns/locale'

import * as S from './styled'

function Calendar() {
  const [date, setDate] = useState(new Date())
  const [week] = useState(updateWeek(date))
  const [days, setDays] = useState(updateMonth(date))

  useEffect(() => {
    setDays(updateMonth(date))
  }, [date])

  function updateMonth(date) {
    const startMonth = startOfMonth(date)
    const endMonth = endOfMonth(date)
    const startDate = startOfWeek(startMonth)
    const endDate = endOfWeek(endMonth)

    return eachDayOfInterval({
      start: startDate,
      end: endDate,
    })
  }

  function updateWeek(date) {
    return eachDayOfInterval({
      start: startOfWeek(date),
      end: endOfWeek(date),
    })
  }

  function nextMonth() {
    setDate(addMonths(date, 1))
  }

  function prevMonth() {
    setDate(subMonths(date, 1))
  }

  return (
    <S.Container>
      <S.Header>
        <S.ArrowLeft onClick={prevMonth} />
        <S.MonthName>{pt.localize.month(getMonth(date))}</S.MonthName>
        <S.ArrowRight onClick={nextMonth} />
      </S.Header>
      <S.Week>
        {week.map((day, i) => (
          <span key={i}>
            {format(day, 'eee', { locale: pt }).toUpperCase()}
          </span>
        ))}
      </S.Week>
      <S.Schedule>
        {days.map((day, i) => (
          <S.Day key={i} disabled={day.getMonth() !== date.getMonth()}>
            {day.getDate()}
          </S.Day>
        ))}
      </S.Schedule>
    </S.Container>
  )
}

export default Calendar
