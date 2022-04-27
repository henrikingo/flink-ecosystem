import React, { FC } from "react";
import { CookieBanner } from "./CookieBanner";

export const Footer: FC = () => {
  return (
    <div className="row no-gutters text-center small text-muted d-block py-4">
      <p>
        Copyright ©2014-2019&nbsp;
        <a href="https://ververica.com/">Ververica</a>.
        Copyright (c) 2022 <a href="https://datastax.com">DataStax</a>.
        Released under the Apache License v 2.0. Each package may have its own license.
      </p>
      <p>
        Apache Cassandra, Cassandra, Apache and the eye logo are either registered
        trademarks or trademarks of the{" "}
        <a href="https://www.apache.org">The Apache Software Foundation</a> in
        the United States and/or other countries, and are{" "}
        <a href="https://www.apache.org/foundation/marks/domains">
          used with permission
        </a>{" "}
        as of 2022. The Apache Software Foundation has no affiliation
        with and does not endorse or review the materials provided at this
        website, which is managed by Datastax.
      </p>
      <p>
        <a href="/terms-of-use">Terms of Use</a>
        &nbsp;|&nbsp;
        <a href="/privacy-policy">Privacy Policy</a>
        &nbsp;|&nbsp;
        <a href="https://www.datastax.com/contact">Contact Us</a>
        &nbsp;|&nbsp;
        <a href="https://Cassandra.apache.org/community.html">
          Apache Cassandra Community
        </a>
        &nbsp;|&nbsp;
        <a href="https://github.com/henrikingo/flink-ecosystem">
          Source Code and Issues
        </a>
      </p>
      <CookieBanner />
    </div>
  );
};
