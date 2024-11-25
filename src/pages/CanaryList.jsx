import { useContext, useEffect, useState } from "react";

import { CanaryContext } from "../store/canary";
import Card from "../component/Card";

export default function CanaryList() {
  const canary = useContext(CanaryContext);
  const [content, setContent] = useState(<p>Fetching data...</p>);

useEffect(() => {
      canary.getCanary();
      if (canary.canary.length > 0 && canary.canary) {
        setContent(
          <section className="overflow-y-auto relative top-[60px] grid grid-cols-4 gap-4 p-3 place-content-center h-screen">
            {canary.canary.map((singleCanary) => {
                return(
                    <div key={singleCanary.anello}>
                        <Card data={singleCanary} />
                    </div>
                )
            })}
          </section>
        );
      }
  },[canary, canary.canary])

  return <>{content}</>;
}
