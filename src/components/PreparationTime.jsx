export default function PreparationTime() {
  return (
    <div className='mb-8 bg-[#fff5fa] py-8 px-16'>
      <h3 className='text-xl text-[#7b2847] font-semibold mb-3'>
        Preparation time
      </h3>
      <ul className='list-disc flex flex-col gap-2 marker:text-[#7b2842] text-base'>
        <li className='text-[#302d2c]'>
          <span className='font-semibold text-[#5f574e]'>Total: </span>
          Approximately 10 minutes
        </li>
        <li className='text-[#302d2c]'>
          <span className='font-semibold text-[#5f574e]'>Preparation: </span>5
          minutes
        </li>
        <li className='text-[#302d2c]'>
          <span className='font-semibold text-[#5f574e]'>Cooking: </span>5
          minutes
        </li>
      </ul>
    </div>
  );
}
