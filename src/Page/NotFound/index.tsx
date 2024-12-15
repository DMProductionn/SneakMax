import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-[100px] leading-[100%]">404</p>
      <p className="text-[28px]">Страница не найдена</p>
      <div className='mt-[20px]'>
        <Link to="/" className="text-[#fff]">
          <button className="w-[200px] h-[40px] bg-red rounded-[4px]">На главную</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
