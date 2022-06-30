import NavButton from "./NavButton";

function NavPage({ page, setPage }) {
  return (
    <div className="flex justify-between">
      {page > 1 ? (
        <NavButton name="<< Previous" page={page - 1} setPage={setPage} />
      ) : (
        <NavButton name="<< Previous" page={1} setPage={setPage} />
      )}
      <NavButton name="Next >>" page={page + 1} setPage={setPage} />
    </div>
  );
}

export default NavPage;
