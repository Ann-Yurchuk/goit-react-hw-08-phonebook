import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  padding: 2em;
  position: relative;
  border-radius: 3px;
  border: 1px solid #b12816;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background-color: #bc3220;
  background-color: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, #bc3220),
    color-stop(29%, #db4a37),
    color-stop(50%, #db4a37),
    color-stop(71%, #db4a37),
    color-stop(100%, #bc3220)
  );
  background-color: -webkit-linear-gradient(
    left,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  background-color: linear-gradient(
    to right,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#bc3220', GradientType=1 );
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 0.8rem;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
`;

export const Input = styled.input`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 1em 2em;
  border: 1px solid grey;
  width: 100%;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 0.8rem;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background-color: #bc3220;
  background-color: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #bc3220),
    color-stop(100%, #fa5846)
  );
  background-color: -webkit-linear-gradient(top, #bc3220 0%, #fa5846 100%);
  background-color: linear-gradient(to bottom, #bc3220 0%, #fa5846 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#fa5846', GradientType=0 );

  &:focus {
    outline: none;
    -webkit-transition: -webkit-transform 0.15s ease;
    transition: -webkit-transform 0.15s ease;
    transition: transform 0.15s ease;
    transition: transform 0.15s ease, -webkit-transform 0.15s ease;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  display: block;
  padding: 1em;
  width: 100%;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background-color: #ffbf00;
  background-color: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #ffbf00),
    color-stop(100%, #fa9f17)
  );
  background-color: -webkit-linear-gradient(top, #ffbf00 0%, #fa9f17 100%);
  background-color: linear-gradient(to bottom, #ffbf00 0%, #fa9f17 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffbf00', endColorstr='#fa9f17', GradientType=0 );
  border: 0;
  border-radius: 30px;
  color: #fff;
  margin-top: 50px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 500;
  text-shadow: -1px -1px #b86200, 0 1px 0 #ecb76b;

  &:focus {
    outline: none;
    -webkit-transition: -webkit-transform 0.15s ease;
    transition: -webkit-transform 0.15s ease;
    transition: transform 0.15s ease;
    transition: transform 0.15s ease, -webkit-transform 0.15s ease;
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
`;
