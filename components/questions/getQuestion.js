import { gql } from "@apollo/client";

const GET_QUESTIONS_QUERY = gql`
  query HostEventSessionQuestions($id: ID!, $order: [QuestionOrderInput!]) {
    viewer {
      id
      eventSession(id: $id) {
        id
        slug
        room {
          id
          questions(order: $order) {
            nodes {
              author
              content
              anonymous
              bookmarked
              approvedByCredential {
                profile {
                  firstName
                  lastName
                }
              }
              likesCount
              state
              createdAt
              id
            }
          }
        }
      }
    }
  }
`;

export default GET_QUESTIONS_QUERY;
