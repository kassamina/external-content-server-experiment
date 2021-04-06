import notFound from "../404.png";

function NotFound() {
  return (
    <img src={notFound} alt={'the route was not Found'}/>
  );
}

export default NotFound;
