import Nav from "../components/Nav";

function Home() {

  return (
    <main className="flex flex-col items-center justify-center gap-5 px-5 py-10">
      <Nav />
      <h1 className="text-3xl font-bold text-white">
        Welcome on my portfolio !
      </h1>
    </main>
  );
}

export default Home;
