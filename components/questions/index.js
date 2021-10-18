import { useMutation, useQuery } from "@apollo/client";
import GET_QUESTIONS_QUERY from "./getQuestion";

const GetQuestion = () => {
  const { error, loading, data } = useQuery(GET_QUESTIONS_QUERY);
  console.log("GetQuestion", data);

  const getData = data?.viewer?.eventSession?.room?.questions?.nodes || [];
  console.log("test", getData);

  if (loading) return <p>Loading the Question</p>;
  if (error) return <p>error fecthing</p>;

  return getData.map(() => {
    let input;

    return (
      <div key={data.viewer.id}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            input.value = "";
          }}
        >
          <input ref={(node) => (input = node)} />
          <button type="submit">up</button>
        </form>
      </div>
    );
  });
};

const CreateQuestion = ({ data, questionCreate }) => {
  let input;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        questionCreate({ variable: input });
        input.value = "";
      }}
    >
      <input ref={(node) => (input = node)} />
      <button type="submit">up</button>
    </form>
  );
};

const QuestionsComp = ({ data, questionCreate }) => {
  return (
    <>
      <CreateQuestion data={data} questionCreate={questionCreate} />
      <GetQuestion />
    </>
  );
};
export default QuestionsComp;
