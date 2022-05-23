import qs from "querystring";
import React, { FC } from "react";
import { ErrorComponent } from "client/components/ErrorComponent";
import { MainCard } from "client/components/MainCard";
import { PackageList } from "client/components/packages";
import { PackagesResult } from "client/types/Package";
import { Pager } from "client/components/Pager";
import { RouteComponentProps } from "@reach/router";
import { ServerResponse } from "client/types/Server";
import { useFetchData } from "client/helpers";

export const Packages: FC<Props> = props => {
  const { search = "" } = props.location;
  const searchQuery = qs.parse(search.slice(1));
  const page = Number(searchQuery.page || 1);

  const [data] = useFetchData(
    `/api/v1/packages?page=${page}`,
    props.location.key
  ) as [ServerResponse<PackagesResult>, () => void];

  if (!data.packages) {
    return <ErrorComponent className="pr-0" />;
  }

  const { packages = [], count = 0 } = data;

  return (
    <>
      <MainCard>
        <h6>
          Welcome to Community Packages for Apache Cassandra! This page contains third-party projects
          for <a href="https://cassandra.apache.org/">Apache Cassandra</a>
        </h6>
        <p className="small">
          You can explore the Cassandra ecosystem of connectors, extensions, APIs,
          tool and integrations here. Developers in the ecosystem can submit
          what they have built as a new package. Comments and votes allow users
          leave feedback, get support and assess the quality of a community
          package.
        </p>
        <p className="small">
          Packages listed here are user-submitted, they are not not endorsed by
          the Apache Cassandra project or Datastax. We are not checking the license of
          user-submitted packages. Please check yourself if the license of a package you intend to
          use is suitable.
        </p>
      </MainCard>
      <MainCard>
        <h6>HOWTO</h6>
        <p className="small">Some of the downloadable packages are separate utilities,
        that may help you manage or monitor your Cassandra clusters. In such a case, simply
        install and use the utility or app as it is designed to work.
        </p>
        <p className="small">For downloadable packages that are actual Cassandra plugins,
        enhancing Cassandra itself, do the following:
        </p>
        <p className="small">Add the following in your <code>cassandra.in.sh</code> or 
        <code>~/.cassandra.in.sh</code> file:
        </p>
        <code>CLASSPATH="$CLASSPATH:$CASSANDRA_HOME/build/community-packages/*"</code>
        <p className="small">...then just download the JAR files your find on this site
        into the <code>build/community-packages/</code> sub folder.
        </p>
      </MainCard>
      <MainCard header={`Most Recent Packages (${count})`}>
        <PackageList packages={packages} page={page} />
        <Pager page={page} total={data.totalPages} />
      </MainCard>
    </>
  );
};

type Props = RouteComponentProps;
