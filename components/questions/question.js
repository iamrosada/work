import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
/* import QuestionsComp from "../components/Questions"; */

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

var content = "kub";
const anonymous = false;
const roomId = "83964f8f-8a37-4f7c-81d6-eab95d6bbf68";

const QuestionsComp = ({ questionCreate, setFormState, formState, geT }) => {
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
            className="mb2"
            /*  value={formState.content}
            onChange={(e) =>
              setFormState({
                ...formState,
                content: e.target.value,
              })
            } */
            ref={(node) => (input = node)}
            type="text"
            placeholder="Ask your best question"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {Object.values(geT?.questionCreate || []).map((t) => {
          return <h1 key={t.id}>{t.content}</h1>;
        })}
      </div>
    </div>
  );
};
export default function CreateQuestions() {
  /* const [formState, setFormState] = useState({
    content: " ",
  }); */
  const [geT, setGet] = useState();
  console.log(CREATE_QUESTION_MUTATION);
  const [questionCreate, { data, loading, error }] = useMutation(
    CREATE_QUESTION_MUTATION,
    {
      variables: {
        content,
        anonymous,
        roomId,
      },
    }
  );

  useEffect(() => {
    setGet(data);
  }, [data]);
  const getData = Object.values(data?.questionCreate || []);
  console.log("IS DATA----->", data);
  console.log("IS GetDATA----->", getData);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <QuestionsComp
      questionCreate={questionCreate}
      /*  setFormState={setFormState}
      formState={formState} */
      geT={geT}
    />
  );
}
