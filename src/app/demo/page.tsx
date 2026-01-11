"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Sentry from "@sentry/nextjs";
import { useAuth } from "@clerk/nextjs";

const Page = () => {
  const { userId } = useAuth();
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

  const handleClientError = () => {
    Sentry.logger.info("User attempting to click on client function", {
      userId,
    });
    throw new Error("Client error: Something went wrong in the browser!");
  };

  const handleApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" });
  };

  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-4">
      <Button disabled={loading} onClick={handleBlocking}>
        Blocking
      </Button>
      <Button disabled={loading} onClick={handleBackground}>
        Background
      </Button>
      <Button variant="destructive" onClick={handleClientError}>
        Client Error
      </Button>
      <Button variant="destructive" onClick={handleApiError}>
        API Error
      </Button>
      <Button variant="destructive" onClick={handleInngestError}>
        Inngest Error
      </Button>
    </div>
  );
};

export default Page;
