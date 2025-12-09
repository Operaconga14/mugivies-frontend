import { demoMessage, messageColumns } from "@/app/variables/activities";

export default function Page() {
  return (
    <div className="pt-10">
      <div className="items-center flex flex-col">
        <h1 className="text-5xl font-bold text-gray-600">Messages</h1>
        <p className="text-md text-gray-600">These are your Messages</p>
      </div>

      {/* Message List Header */}
      {/* Desktop View */}
      <table className="min-w-full hidden md:table mt-20">
        <thead className="bg-gray-900">
          <tr>
            {messageColumns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-900">
          {demoMessage.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {row.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {row.message}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {row.viewed ? "read" : "not read"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {row.sender}
              </td>

              <td className="px-12 py-4 whitespace-nowrap text-sm  text-gray-400">
                <button className="hover:cursor-pointer w-6 h-6 text-center rounded">
                  ⡆
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden px-3 mt-10">
        <div className="flex flex-col">
          {demoMessage.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full text-center text-white bg-gray-600 pt-3 font-bold">
                  {row.sender.charAt(0).toUpperCase() +
                    row.sender.charAt(1).toUpperCase()}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">
                    {row.title}
                  </p>
                  <p className="text-sm text-gray-400">{row.message}</p>
                </div>
              </div>
              <button>⡆</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
