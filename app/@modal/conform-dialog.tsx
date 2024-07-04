// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
// } from "@radix-ui/react-dialog";

// import { Button } from "@/share/ui/button";

// const ConfirmDialog = ({ isOpen, onConfirm, onCancel }) => {
//   return (
//     <Dialog open={isOpen}>
//       <DialogTrigger asChild>
//         <Button>Confirm Action</Button>
//       </DialogTrigger>

//       <DialogTitle>Confirm Your Action</DialogTitle>
//       <DialogDescription>Are you sure you want to do this?</DialogDescription>
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//         <DialogClose asChild>
//           <Button onClick={onCancel}>Cancel</Button>
//         </DialogClose>
//         <DialogClose asChild>
//           <Button onClick={onConfirm}>Confirm</Button>
//         </DialogClose>
//       </div>
//     </Dialog>
//   );
// };
// export default ConfirmDialog;
