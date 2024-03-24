import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Card } from "@/components/elements";
import { ModalSize } from "../types";
import { clsx } from "@/utils/format";
import { IconX } from "@tabler/icons-react";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;
  children: React.ReactNode;
}

const modalSize: { [key in ModalSize]: string } = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

const Modal: React.FC<Props> = ({
  open,
  onClose,
  title,
  children,
  size = "sm",
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center py-8">
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
            <Dialog.Overlay className="fixed inset-0 -left-4 bg-gray-900 bg-opacity-30" />
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
            <div
              className={clsx(
                "inline-block w-full overflow-hidden text-left align-middle transition-all transform",
                modalSize[size]
              )}
            >
              <Card className="p-1">
                <Card.Header className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-800">{title}</h3>
                  <button
                    className="p-1 hover:bg-gray-100 transition rounded flex-shrink-0"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </Card.Header>
                {children}
              </Card>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
