import styled from 'styled-components';
import Location from './Locations'

function Preview() {

  return (
    <Locations>
      <div><Location /></div>
    </Locations>
  )
}

export default Preview

const Locations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`