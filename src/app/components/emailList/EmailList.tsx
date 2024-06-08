import React from "react";
import EmailRow from "../emailRow/EmailRow";

export default function EmailList() {
  const EmailObj = [
    { id: 1, title: "emial 1" },
    { id: 2, title: "emial 2" },
    { id: 3, title: "emial 3" },
  ];
  return (
    <div>
      {EmailObj.map(() => {
        return (
          <>
            <EmailRow />
          </>
        );
      })}
    </div>
  );
}
