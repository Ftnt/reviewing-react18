function NavButton({ name, page, setPage }) {
  return (
    <button
      onClick={() => {
        setPage(page);
      }}
      className="px-4 py-2 bg-amber-600 hover:bg-amber-500 cursor-pointer rounded"
    >
      {name}
    </button>
  );
}

export default NavButton;
