import ListPostE from "@/Components/ListPostE";
import EliminarPostClient from "@/Components/EliminarPostClient";
import ModalStateContext from "@/Context/modalStateContext";
import ToastContextComponent from "@/Context/ToastContext";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Eliminar Post</h1>
      <ModalStateContext>
        <ToastContextComponent>
          <ListPostE />
          <EliminarPostClient />
        </ToastContextComponent>
      </ModalStateContext>
    </>
  );
}
