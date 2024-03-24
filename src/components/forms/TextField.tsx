import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = React.forwardRef<
  HTMLInputElement,
  Props & ReturnType<UseFormRegister<any>>
>((props, ref) => (
  <>
    <label
      htmlFor={props.name}
      className="block text-sm font-medium text-slate-800 mb-1"
    >
      {props.label}
    </label>
    <input
      {...props}
      id={props.name}
      className={`focus:ring-sunglow-300 focus:border-sunglow-300 block w-full text-sm pl-3 pr-12 leading-none py-2 shadow-sm ${
        props.error ? "border-red-500" : "border-slate-300"
      } rounded-md`}
      ref={ref}
    />
    <p className="text-red-500 text-xs m-0 p-0 h-1">{props.error || ""}</p>
  </>
));

TextField.displayName = "TextField";
