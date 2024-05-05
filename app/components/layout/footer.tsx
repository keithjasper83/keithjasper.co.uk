export const Footer = () => {
  const today = new Date();
  return (
    <footer className=" bg-red-500 w-full flex justify-center">
      <div className="row flex justify-around py-5">
        <ul>
          <li>&copy; Keith Jasper {today.getFullYear()}</li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li>Socials</li>
          <li>LinkedIn</li>
          <li>YouTube</li>
          <li>Twitter</li>
        </ul>
        <ul>
          <li>Footer Content 1</li>
          <li>Footer Content 2</li>
          <li>Footer Content 3</li>
        </ul>
      </div>
    </footer>
  );
};
