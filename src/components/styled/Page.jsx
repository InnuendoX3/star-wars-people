import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  width: 700px;

  @media (max-width: 768px) {
    width: 95%;
  }
`