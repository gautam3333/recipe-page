export default function Nutrition() {
  return (
    <div>
      <h2 className='text-2xl font-serif text-[#854632] mb-6'>Nutrition</h2>
      <p className='text-base text-[#302d2c] mb-5'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className='w-full text-base text-[#302d2c]'>
        <tr className='border-b border-[#e4ded8]'>
          <td className='px-2 py-4'>Calories</td>
          <td className='px-2 py-4 font-semibold text-[#854632]'>277kcal</td>
        </tr>

        <tr className='border-b border-[#e4ded8]'>
          <td className='px-2 py-4'>Carbs</td>
          <td className='px-2 py-4 font-semibold text-[#854632]'>0g</td>
        </tr>

        <tr className='border-b border-[#e4ded8]'>
          <td className='px-2 py-4'>Protein</td>
          <td className='px-2 py-4 font-semibold text-[#854632]'>20g</td>
        </tr>

        <tr>
          <td className='px-2 py-4'>Fat</td>
          <td className='px-2 py-4 font-semibold text-[#854632]'>22g</td>
        </tr>
      </table>
    </div>
  );
}
