import React from 'react';

function ToastContainer() {
  const [queue, setQueue] = React.useState([]);
  const isShowing = React.useRef(false);

  React.useEffect(() => {
    if (isShowing.current) return;
    if (queue.length === 0) return;
    isShowing.current = true;

    const current = queue[0];
    const timeout = setTimeout(() => {
      setQueue((q) => q.slice(1));
      isShowing.current = false;
    }, current?.duration || 4000);

    return () => clearTimeout(timeout);
  }, [queue]);

  React.useEffect(() => {
    const push = (message, isError = false, duration = 4000) => {
      setQueue((q) => [
        ...q,
        { id: Date.now(), message: String(message), isError: !!isError, duration },
      ]);
    };
    // Provide a global helper (optional) so other parts of the app can call `window.toast(...)`
    window.toast = push;
    return () => { try { delete window.toast; } catch (e) {} };
  }, []);

  return (
    <div id="toast" className="toast" aria-live="polite" aria-atomic="true" aria-relevant="additions">
      {queue.map((item, idx) => (
        <div
          key={item.id}
          className={`toast-message${item.isError ? ' error' : ''}${idx === 0 ? ' show' : ''}`}
          role="status"
          aria-hidden={idx === 0 ? 'false' : 'true'}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
