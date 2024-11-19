import DeleteView from './DeleteView';
import useDelete from './useDelete';

const Delete = ({ dataId }: { dataId: string }) => {
  const logic = useDelete();
  return <DeleteView rowId={dataId} {...logic} />;
};

export default Delete;
