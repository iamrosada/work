import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const CREATE_QUESTION_MUTATION = gql`
  mutation createQuestionMutation(
    $input: ParticipantQuestionCreateMutationInput!
  ) {
    questionCreate(input: $input) {
      errors
      question {
        id
        content
      }
    }
  }
`;

const QuestionsComp = ({ questionCreate, getData }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          questionCreate({
            variables: {
              input: {
                content: input.value || "Rosada",
                anonymous: false,
                roomId: "83964f8f-8a37-4f7c-81d6-eab95d6bbf68",
              },
            },
          });
          input.value = "";
        }}
      >
        <div>
          <input
            ref={(node) => (input = node)}
            type="text"
            placeholder="Ask your best question"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {Object.values(getData?.questionCreate || []).map((t) => {
          return <h1 key={t.id}>{t.content}</h1>;
        })}
      </div>
    </div>
  );
};

export default function CreateQuestions() {
  const [getData, setGetData] = useState();

  const [questionCreate, { data, loading, error }] = useMutation(
    CREATE_QUESTION_MUTATION
  );

  useEffect(() => {
    setGetData(data);
  }, [data]);

  const logGetData = Object.values(data?.questionCreate || []);

  console.log("IS DATA----->", data);
  console.log("IS GetlogGetDataQuestions----->", logGetData);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return <QuestionsComp questionCreate={questionCreate} getData={getData} />;
}
