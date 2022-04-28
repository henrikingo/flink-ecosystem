import React, { FC } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { MainCard } from "client/components/MainCard";
import styled from "styled-components/macro";

const LegalCard = styled(MainCard)`
  ul:not(last-child) {
    margin-bottom: 1rem;
  }
`;

export const PrivacyPolicy: FC<Props> = props => {
  return (
    <LegalCard>
      <h1>Data Privacy Policy</h1>
      <p>TODO</p>
    </LegalCard>
  );
};
type Props = RouteComponentProps;
