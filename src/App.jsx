import Heading from './components/Heading';
import Image from './components/Image';
import Ingredients from './components/Ingredients';
import Instruction from './components/Instructions';
import Nutrition from './components/Nutrition';
import PreparationTime from './components/PreparationTime';

export default function App() {
  return (
    <div className='bg-white max-w-5xl my-24 mx-auto p-16 rounded-lg'>
      <Image />
      <Heading />
      <PreparationTime />
      <Ingredients />
      <Instruction />
      <Nutrition />
    </div>
  );
}
