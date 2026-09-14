'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function Modal({
  open,
  onClose,
  className,
  labelledBy,
  children,
}: {
  open: boolean;
  onClose: () => void;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const el = ref.current;
    if (!open || !el) return;
    // Guarda quem abriu o modal para devolver o foco ao fechar, senão quem
    // navega pelo teclado é jogado para o começo da página.
    const anterior = document.activeElement as HTMLElement | null;
    el.showModal();
    const onClick = (event: MouseEvent) => {
      const box = el.getBoundingClientRect();
      const inside =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom;
      if (!inside) onCloseRef.current();
    };
    el.addEventListener('click', onClick);
    return () => {
      el.removeEventListener('click', onClick);
      if (el.open) el.close();
      if (anterior?.isConnected) anterior.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={ref}
      className={className}
      aria-labelledby={labelledBy}
      onClose={() => onCloseRef.current()}
    >
      {children}
    </dialog>
  );
}
