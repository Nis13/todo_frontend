import AddView from './AddView';
import { useAdd } from './useAdd';

const Add = () => {
  const logic = useAdd();
  return <AddView {...logic} />;
};

export default Add;
