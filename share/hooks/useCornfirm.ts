// import { useState } from "react";

// // 커스텀 컨펌 훅
// function useConfirm(message = "Are you sure?") {
//   const [confirmState, setConfirmState] = useState(false);

//   const requestConfirm = (onConfirm, onCancel) => {
//     if (confirm(message)) {
//       onConfirm();
//       setConfirmState(true);
//     } else {
//       if (onCancel) onCancel();
//       setConfirmState(false);
//     }
//   };

//   return [confirmState, requestConfirm];
// }

// export default useConfirm;
