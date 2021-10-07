import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";
import ListHost from "../components/hosts";
export const HOST_EVENT = gql`
  query EventParticipants {
    event(id: "bf865582-dbb8-4886-8f0c-b4553ecf7dd5") {
      name
      hosts(first: 4) {
        edges {
          node {
            profile {
              firstName
              email
            }
          }
        }
      }
    }
  }
`;
export default function Home() {
  const { error, loading, data } = useQuery(HOST_EVENT, {
    /*  variables: { eventId: "65fa3cd6-684f-4d9e-acf8-96e7f7dcaba4" }, */
  });

  console.log("r", data);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return <ListHost data={data} />;
}
