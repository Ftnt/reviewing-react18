import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-cyan-800 text-white">
      <h1 className="text-center text-5xl font-bold p-10">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
