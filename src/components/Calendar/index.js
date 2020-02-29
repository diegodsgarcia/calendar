import React, { useState, useEffect } from 'react'
import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  getMonth,
  addMonths,
  subMonths,
} from 'date-fns'
import { pt } from 'date-fns/locale'

import * as S from './styled'

function Calendar() {
  const [date, setDate] = useState(new Date())
  const [days, setDays] = useState(updateDays(date))

  useEffect(() => {
    setDays(updateDays(date))
  }, [date])

  function updateDays(date) {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
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
      <S.Schedule>
        {days.map((day, i) => (
          <S.Day key={i}>{day.getDate()}</S.Day>
        ))}
      </S.Schedule>
    </S.Container>
  )
}

export default Calendar
