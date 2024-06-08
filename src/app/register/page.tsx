"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch(
        "https://baby-care-store-server.vercel.app/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result?.success == true) {
        toast.message("Login Successful");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-500 flex flex-col gap-4 justify-center items-center w-1/2 mx-auto py-32 my-32 rounded"
      >
        <h2 className="text-white text-2xl font-bold">Login Here</h2>

        <input
          className="p-2 rounded border-none w-64"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="p-2 rounded border-none w-64"
          placeholder="Email"
          {...register("email")}
        />

        <input
          className="p-2 rounded border-none w-64"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <div
          className="items-start
        "
        >
          <p className="text-sm text-white">
            Already have an account?
            <Link href="/login" className="underline ms-1">
              Login here
            </Link>
          </p>
        </div>
        <input className=" text-white btn btn-accent" type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
