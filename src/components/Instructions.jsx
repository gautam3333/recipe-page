export default function Instruction() {
  return (
    <div className='mb-8 border-b border-[#e4ded8] pb-6'>
      <h2 className='text-2xl font-serif text-[#854632] mb-6'>Instructions</h2>
      <ul className='list-decimal list-inside marker:text-[#854632] flex flex-col gap-2 text-base font-sans text-[#302d2c]'>
        <li>
          <span className='font-semibold text-[#5f574e]'>Beat the eggs: </span>
          In a bowl, beat the eggs with a pinch of salt and pepper until they
          are well mixed. You can add a tablespoon of water or milk for a
          fluffier texture.
        </li>
        <li>
          <span className='font-semibold text-[#5f574e]'>Heat the pan: </span>
          Place a non-stick frying pan over medium heat and add butter or oil
        </li>
        <li>
          <span className='font-semibold text-[#5f574e]'>
            Cook the omelette:{' '}
          </span>
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
          to ensure the eggs evenly coat the surface.
        </li>
        <li>
          <span className='font-semibold text-[#5f574e]'>
            Add fillings (Optional):
          </span>
          When the eggs begins to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li>
          <span className='font-semibold text-[#5f574e]'>Fold and serve: </span>
          As the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li>
          <span className='font-semibold text-[#5f574e]'>Enjoy: </span>Serve
          hot, with additional salt and pepper if needed.
        </li>
      </ul>
    </div>
  );
}
