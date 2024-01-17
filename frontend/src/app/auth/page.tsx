"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submittedValues = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

    console.log(submittedValues);
  };

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5";
  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <Link
              href="https://www.github.com"
              target="_blank"
              className="mr-4 text-4xl text-black dark:text-white"
            >
              <AiFillGithub />
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              className="text-4xl"
            >
              <FcGoogle />
            </Link>
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            required
            className={inputStyles}
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            className={inputStyles}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            className={inputStyles}
          />

          <button
            type="submit"
            className="w-full bg-tertiary-dark font-medium rounded-lg px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-700 underline">Login</button>
      </div>
    </section>
  );
};

export default Auth;
