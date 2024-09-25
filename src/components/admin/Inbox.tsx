type Messages = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  content: string;
};

export function Inbox({
  messages,
  selectedMessage,
  setSelectedMessage,
}: {
  selectedMessage: Messages;
  messages: Messages[];
  setSelectedMessage: () => void;
}) {
  return (
    <div>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 cursor-pointer hover:bg-gray-100 ${
            selectedMessage.id === message.id ? "bg-gray-100" : ""
          }`}
          onClick={setSelectedMessage}
        >
          <h3 className="font-semibold">{message.from}</h3>
          <p className="text-sm text-gray-600">{message.subject}</p>
          <p className="text-sm text-gray-500 truncate">{message.preview}</p>
        </div>
      ))}
    </div>
  );
}
