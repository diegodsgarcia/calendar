import styled from 'styled-components'
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'

const Container = styled.div`
  position: relative;
`

const Header = styled.div`
  display: flex;
  padding: 20px 0;
  flex: 1;
`

const ArrowLeft = styled(ChevronLeft)`
  width: 50px;
  height: 50px;
  flex: 1;
`

const ArrowRight = styled(ChevronRight)`
  width: 50px;
  height: 50px;
  flex: 1;
`

const MonthName = styled.h2``

const Schedule = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 150px;
`

const Week = styled.div`
  display: flex;

  span {
    flex: 1;
    text-align: center;
  }
`

const Day = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
  color: ${props => (props.disabled ? '#DDD' : '#696969')};

  &:hover {
    background-color: #ddd;
    color: #000;
  }
`

export {
  Container,
  Header,
  ArrowLeft,
  ArrowRight,
  MonthName,
  Week,
  Schedule,
  Day,
}
