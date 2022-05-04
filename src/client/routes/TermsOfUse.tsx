import React, { FC } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { MainCard } from "client/components/MainCard";
import styled from "styled-components/macro";

const LegalCard = styled(MainCard)`
  ul:not(last-child),
  & > ol > li {
    margin-bottom: 1rem;
  }
`;

export const TermsOfUse: FC<Props> = props => {
  return (
    <LegalCard>
      <h1>Terms of Use of Use</h1>
      <p><Link to="/privacy-policy">TODO</Link></p>
    </LegalCard>
  );
};

type Props = RouteComponentProps;
