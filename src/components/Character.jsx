function Character({ character }) {
  return (
    <div className="p-5 text-center">
      <h2 className="text-2xl pb-3">{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className="rounded-full"
      />
      <p className="text-indigo-300">{character.origin.name}</p>
    </div>
  );
}

export default Character;
