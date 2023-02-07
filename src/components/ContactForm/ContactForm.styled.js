import styled from '@emotion/styled';

export const Forma = styled.form`
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
