export default function Ingredients() {
  return (
    <div className='mb-8 border-b border-[#e4ded8] pb-8'>
      <h2 className='text-2xl font-serif text-[#854632] mb-6'>Ingredients</h2>
      <ul className='list-disc marker:text-[#854632] flex flex-col gap-2 font-sans text-[#302d2c] list-inside text-base'>
        <li className=''>2-3 large eggs</li>
        <li className=''>Salt, to taste</li>
        <li className=''>Pepper, to taste</li>
        <li className=''>1 tablespoon of butter or oil</li>
        <li className=''>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}
