import { useMutation, useQuery } from "@apollo/client";
import GET_QUESTIONS_QUERY from "./getQuestion";

const GetQuestion = () => {
  const { error, loading, data } = useQuery(GET_QUESTIONS_QUERY);
  console.log("GetQuestion", data);

  const getData = data?.viewer?.eventSession?.room?.questions?.nodes || [];
  console.log("test", getData);

  if (loading) return <p>Loading the Question</p>;
  if (error) return <p>error fecthing {console.log("error", error)}</p>;

  return getData.map((t) => {
    return (
      <div key={t.viewer.id}>
        <form>{t.eventSession.room.questions}</form>
      </div>
    );
  });
};

const CreateQuestion = ({ data, questionCreate }) => {
  const onSubmit = async (values) => {
    e.preventDefault();
    if (!values.trim()) {
      return;
    }

    const input = values;
    questions({ variables: { input } });
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={(value) => (input = value)} placeholder="Enter a Question" />
      <button type="submit">up</button>
    </form>
  );
};

const QuestionsComp = ({ data, questionCreate }) => {
  let input;
  const onSubmit = async (values) => {
    values.preventDefault();
    /*   if (!input.values.trim()) {
      return;
    } */

    input = values;
    questionCreate({ variables: { input } });
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        ref={(values) => (input = values)}
        placeholder="Enter a Question"
      />
      <button type="submit">up</button>
    </form>
  );
};
export default QuestionsComp;
/*  <>
      <CreateQuestion data={data} questionCreate={questionCreate} />
      <GetQuestion />
    </> */
/*  if (!input.value.trim()) {
          return;
        } */
