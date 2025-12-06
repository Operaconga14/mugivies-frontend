import { useRouter } from "next/navigation";
import { demoMessage } from "../variables/activities";
import { useEffect, useState } from "react";

export default function Notification() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const unViewed = demoMessage.filter((msg) => msg.viewed == false);

  const handleSeeAll = () => {
    router.push("/dashboard/messages");
  };

  useEffect(() => {
    if (unViewed.length > 0) {
      setShow(true);
    }
  }, [unViewed]);

  return (
    <div className="mt-4">
      {unViewed.length > 0 ? (
        <ul className="flex flex-col space-y-2">
          {unViewed.map((message, index) => (
            <li className="border border-gray-800 rounded" key={index}>
              <button className="flex flex-col text-start px-2 py-1">
                <h1 className="text-md font-bold">{message.title}</h1>
                <p className="text-[13px] text-gray-400">{message.message}</p>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">No notifications</p>
      )}
      <button
        className="w-full text-center text-gray-400 hover:text-white text-[13px]"
        onClick={handleSeeAll}
      >
        See All
      </button>
    </div>
  );
}
