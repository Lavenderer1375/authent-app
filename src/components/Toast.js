import { toast } from "react-toastify";
export const notify = (text, type) => {
  if (type === "success") {
    toast.success(text, {
      theme: "colored",
    });
  } else if (type === "error") {
    toast.error(text, {
      theme: "colored",
    });
  }
};