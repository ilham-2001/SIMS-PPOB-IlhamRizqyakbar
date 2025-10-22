

const Alert = ({ type, message }) => {
  const style =
    type === 'success'
      ? 'border-green-600 bg-green-100 text-green-700'
      : 'border-red-600 bg-red-100 text-red-700';

  return (
    <div className='absolute bottom-6 left-40 w-[600px]'>
      <div className={`px-4 border rounded-md ${style}`}>
        <small>{message}</small>
      </div>
    </div>
  );
};

export default Alert;
