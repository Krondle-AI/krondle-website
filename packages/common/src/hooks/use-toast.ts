import * as React from "react";

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = [];
let memoryState = { toasts: [] as ToasterToast[] };

function dispatch(action: any) {
  memoryState = { toasts: [] };
  listeners.forEach((listener) => listener(memoryState));
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    ...state,
    toast: (props: Omit<ToasterToast, "id">) => {},
    dismiss: () => dispatch({ type: "DISMISS_TOAST" }),
  };
}

export const toast = (props: any) => {};
