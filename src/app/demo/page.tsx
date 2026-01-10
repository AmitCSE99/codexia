"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const handleBlocking = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setLoading(false);
  };
  const handleBackground = async () => {
    setLoading(true);
    await fetch("/api/demo/background", { method: "POST" });
    setLoading(false);
  };
  return (
    <div className="p-8 space-x-4">
      <Button disabled={loading} onClick={handleBlocking}>
        Blocking
      </Button>
      <Button disabled={loading} onClick={handleBackground}>
        Background
      </Button>
    </div>
  );
};

export default Page;
