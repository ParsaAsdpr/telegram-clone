import { socket } from "../socket";
import { useForm } from "react-hook-form";

interface FormInputs {
  message: string;
}

const MessageInput = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: { message: "" },
  });
  const onSubmit = (data: FormInputs) => {
    console.log(data);

    socket.emit("message", {
      text: data.message,
      author: "parsa",
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter message" {...register("message")} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
