export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" flex justify-center items-center py-4 w-full ">
      <small className="text-center text-sm secondary-color">
        <p>&copy; {year} | By Daniel</p>
      </small>
    </footer>
  );
}
