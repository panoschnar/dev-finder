import React from "react";
import { IPerson } from "../utils/interfaces";
import { Button } from "./Button";

interface DeveloperCardProps {
  person: IPerson;
  onInvite: (person: IPerson) => void;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = ({
  person,
  onInvite,
}) => {
  return (
    <div className=" rounded-lg p-6 bg-white shadow flex flex-col justify-between hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.2)] transition-shadow h-full">
      <div>
        <p className="text-xl text-black font-bold">
          {person.firstName} {person.lastName}
        </p>
        <p className="text-sm text-gray-600">{person.email}</p>
        <p className="text-sm text-gray-600 my-2">
          Preferred Language: <strong>{person.language}</strong>
        </p>
      </div>
      <Button variant="primary" onClick={() => onInvite(person)}>
        Invite
      </Button>
    </div>
  );
};
