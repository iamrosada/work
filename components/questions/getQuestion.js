import { gql } from "@apollo/client";

//($id: ID!, $order: [QuestionOrderInput!])

const GET_QUESTIONS_QUERY = gql`
  query HostEventSessionQuestions($order: [QuestionOrderInput!]) {
    viewer {
      id
      eventSession(id: "3957d399-abf4-4348-91e1-007f728cab10") {
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
