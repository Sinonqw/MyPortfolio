import React from "react";

interface StatusMessageProps {
  status: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (!status) return null;

  return (
    <div className="mt-4 text-center text-fuchsia-400 font-semibold">
      {status}
    </div>
  );
};

export default StatusMessage;
