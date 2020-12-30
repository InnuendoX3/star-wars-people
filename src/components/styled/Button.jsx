import styled from 'styled-components'

export default styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 8px 16px;
  border: 1px solid #483859;
  border-radius: 4px;
  background: #886aa8;
  background: -webkit-gradient(linear, left top, left bottom, from(#886aa8), to(#483859));
  background: -moz-linear-gradient(top, #886aa8, #483859);
  background: linear-gradient(to bottom, #886aa8, #483859);
  font: normal normal normal 16px arial;
  color: #f1f6f9;
  text-decoration: none;

  &:hover,
  &:focus {
    border: 1px solid #554269;
    background: #a37fca;
    background: -webkit-gradient(linear, left top, left bottom, from(#a37fca), to(#56436b));
    background: -moz-linear-gradient(top, #a37fca, #56436b);
    background: linear-gradient(to bottom, #a37fca, #56436b);
    color: #f1f6f9;
    text-decoration: none;
  }
  &:active {
    background: #483859;
    background: -webkit-gradient(linear, left top, left bottom, from(#483859), to(#483859));
    background: -moz-linear-gradient(top, #483859, #483859);
    background: linear-gradient(to bottom, #483859, #483859);
  }
`
