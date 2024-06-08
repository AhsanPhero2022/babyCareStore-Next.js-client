"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-500 flex flex-col gap-4 justify-center items-center w-1/2 mx-auto py-32 my-32 rounded"
      >
        <h2 className="text-white text-2xl font-bold">Login Here</h2>
        <div>
          <input
            className="p-2 rounded border-none w-64"
            placeholder="Email"
            {...register("email")}
          />
        </div>

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
            Do not have an account?
            <Link href="/register" className="underline ms-1">
              Register here
            </Link>
          </p>
        </div>
        <input className=" text-white btn btn-accent" type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
