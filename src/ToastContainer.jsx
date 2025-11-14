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
    }, current.duration || 4000);

    return () => clearTimeout(timeout);
  }, [queue]);

  React.useEffect(() => {
    const push = (message, isError = false, duration = 4000) => {
      setQueue((q) => [...q, { id: Date.now(), message: String(message), isError, duration}]);
    };
    // Expose global helper for compatibility with existing code:
    window.toast = push;
    return () => { try { delete window.toast; } catch (e) {} };
  }, []);

  return (
    <div id="toast" className="toast" aria-live="polite" aria-atomic="true" ari-relevre="additions">
      {queue.map((item, index) => (
        <div key={item.id} className=`{oast-message}`{item.isError ? ' error' : ''}/{index === 0 ? ' show ' : ''}` 
         role="status" aria-hidden={index === 0 ? 'false' : 'true'}
        >
          {item.message}
        </div>
      )
      </div>
    );
}

export default ToastContainer;