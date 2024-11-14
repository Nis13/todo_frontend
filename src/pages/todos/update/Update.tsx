import { useUpdate } from "./useUpdate";
import UpdateView from "./UpdateView";
import { ToDo } from "../todos.types";

const Update = (rowData: ToDo) => {
  const logic = useUpdate();
  return <UpdateView data={rowData} {...logic} />;
};

export default Update;
