import StremerForm from "../components/StreamerForm/StreamerForm";

const Home = () => {
  const submitForm = (form) => {
    console.log(form);
  };
  return (
    <>
      <StremerForm submitForm={(streamerForm) => submitForm(streamerForm)} />
    </>
  );
};

export default Home;
