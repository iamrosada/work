import { gql, useMutation } from "@apollo/client";
import QuestionsComp from "../components/Questions";

const CREATE_QUESTION_MUTATION = gql`
  mutation createQuestionMutation($input: HostQuestionCreateMutationInput!) {
    questionCreate(input: $input) {
      errors
      question {
        id
        content
      }
    }
  }
`;

export default function Questions() {
  const [questionCreate, { loading, error, data }] = useMutation(
    CREATE_QUESTION_MUTATION
  );
  if (loading) return <p>Loading</p>;
  if (error) return console.log("the error is ", error);

  return <QuestionsComp questionCreate={questionCreate} data={data} />;
}
