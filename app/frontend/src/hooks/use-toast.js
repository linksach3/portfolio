import { useState, useCallback } from 'react';

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant = "default" }) => {
    const id = Date.now();
    const newToast = {
      id,
      title,
      description,
      variant,
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);

    // For now, just show a simple alert since we don't have a toast UI component
    if (variant === "default") {
      alert(`${title}\n${description}`);
    } else {
      alert(`${title}\n${description}`);
    }
  }, []);

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
};

export { useToast };
