import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDialog } from "../hooks";
import { IconCheck } from "@tabler/icons-react";

interface Props {
  title: string;
  message: string;
  children: (props: { close: VoidFunction }) => React.ReactNode;
}

const SuccessDialog: React.FC<Props> = ({ title, message, children }) => {
  const { close } = useDialog();

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={() => close()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          >
            <Dialog.Overlay className="fixed inset-0 -left-4 bg-slate-900 bg-opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <IconCheck
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{message}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {children({ close })}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SuccessDialog;
